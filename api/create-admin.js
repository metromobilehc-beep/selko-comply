// Vercel Serverless Function — Create Admin User
// This runs server-side only. The service role key never reaches the browser.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password, fullName, companyId, role, isSuperAdmin } = req.body;

  if (!email || !password || !fullName || !companyId) {
    return res.status(400).json({ error: 'Missing required fields: email, password, fullName, companyId' });
  }

  const SUPABASE_URL = 'https://zxserlkhwkfoqiepurdr.supabase.co';
  const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'Server misconfigured — service role key missing' });
  }

  try {
    // Step 1: Create the auth user using the Admin API
    const createUserRes = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
      method: 'POST',
      headers: {
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        email_confirm: true // skip email verification entirely
      })
    });

    const userData = await createUserRes.json();

    if (!createUserRes.ok) {
      return res.status(createUserRes.status).json({ error: userData.msg || userData.error_description || 'Failed to create auth user' });
    }

    const userId = userData.id;

    // Step 2: Create the profile row linking them to the company
    const profileRes = await fetch(`${SUPABASE_URL}/rest/v1/profiles`, {
      method: 'POST',
      headers: {
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        id: userId,
        email,
        full_name: fullName,
        role: role || 'admin',
        company_id: companyId,
        is_super_admin: isSuperAdmin || false
      })
    });

    const profileData = await profileRes.json();

    if (!profileRes.ok) {
      // Profile creation failed — but auth user exists. Report this clearly.
      return res.status(500).json({ 
        error: 'Auth user created but profile creation failed: ' + (profileData.message || JSON.stringify(profileData)),
        userId 
      });
    }

    return res.status(200).json({ success: true, userId, profile: profileData });

  } catch (err) {
    return res.status(500).json({ error: err.message || 'Unexpected server error' });
  }
}
