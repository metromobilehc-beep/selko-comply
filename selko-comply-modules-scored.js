// Scored-example modules: item, response selected, and why. Loaded after selko-comply-modules-clinical.js
(function () {
  if (typeof MODULES === 'undefined') { console.warn('Scored modules: MODULES not found'); return; }
  var SCORED_MODULES = [
  {
    "id": "oasis_soc_scored",
    "track": [
      "newhire",
      "annual"
    ],
    "icon": "🎯",
    "title": "OASIS Start of Care: Scored Examples",
    "desc": "Item by item: a patient situation, the response selected, and why it was scored that way. Covers M1800 to M1860 and Section GG.",
    "passScore": 80,
    "mins": 20,
    "staffTypes": [
      "clinician",
      "owner",
      "admin",
      "office"
    ],
    "slides": [
      {
        "title": "How to Use These Examples",
        "content": "<p>Each slide takes one OASIS item. For each case you see the patient situation, the <strong>response selected</strong> and <strong>why</strong> it was scored that way.</p><ul><li>Read the situation and pick your own answer first</li><li>Compare it with the scored response</li><li>Read the reason, because the reason is what you reuse on the next patient</li></ul><div class=\"callout\">Code what you observe or reliably learn on the day of assessment, not what the patient prefers or what the referral says.</div><div class=\"callout warn\">Response wording comes from the OASIS-E2 item set and the Section GG scale. Always confirm against the current CMS manual and your agency policy before relying on a code.</div>"
      },
      {
        "title": "M1800 Grooming",
        "content": "<p>M1800 asks about current ability to tend to personal hygiene needs such as washing face and hands, hair care, shaving, nail care and oral hygiene.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Mrs. A brushes her teeth and combs her hair without help. She does it all alone.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 0 Able to groom self unaided</span></p><p style=\"margin:0\"><strong>Why:</strong> No person is needed. Using a long-handled comb or other adapted method still counts as unaided.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Mr. B can groom himself, but only after his daughter sets the toothbrush, toothpaste and razor on the bathroom counter. He cannot reach the cabinet.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 1 Grooming utensils must be placed within reach</span></p><p style=\"margin:0\"><strong>Why:</strong> He completes the tasks himself once supplies are within reach. The need is set-up only.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Mr. C has a shoulder repair. His wife brushes his hair and shaves him every day.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 2 Someone must assist the patient to groom self</span></p><p style=\"margin:0\"><strong>Why:</strong> A person physically does part of the task, so he needs assistance, not just set-up.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Ms. D has advanced dementia and staff do all of her grooming.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 3 Depends entirely upon someone else</span></p><p style=\"margin:0\"><strong>Why:</strong> She does none of the grooming herself.</p></div>"
      },
      {
        "title": "M1810 and M1820: Dressing",
        "content": "<p>M1810 is upper body dressing and M1820 is lower body dressing. Score each on its own.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Mr. E gets his shirt from the drawer and puts it on alone. He cannot bend to his lower body and his wife puts on his socks and shoes.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: M1810: 0. M1820: 2</span></p><p style=\"margin:0\"><strong>Why:</strong> Upper body is done without help. Lower body needs someone to put on socks and shoes, which is response 2.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Mrs. F can dress both halves of her body if her daughter lays out the clothes each morning. She needs no hands-on help.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: M1810: 1. M1820: 1</span></p><p style=\"margin:0\"><strong>Why:</strong> Both items allow independence once clothing is laid out or handed to her.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Mr. G has hip precautions. He cannot reach his feet and uses a reacher and sock aid independently.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: M1820: 0</span></p><p style=\"margin:0\"><strong>Why:</strong> Adapted methods and devices are fine. He obtains, puts on and removes clothing and shoes without another person.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Ms. H is bed bound and fully dressed by an aide.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: M1810: 3. M1820: 3</span></p><p style=\"margin:0\"><strong>Why:</strong> She depends entirely on another person for both.</p></div>"
      },
      {
        "title": "M1830 Bathing",
        "content": "<p>Bathing is the highest-risk ADL item to get wrong, because there are seven responses and the differences are small.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Mrs. I showers alone using a shower chair and handheld shower, and gets in and out by herself.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 1 With the use of devices, able to bathe independently</span></p><p style=\"margin:0\"><strong>Why:</strong> A device is used and no person is involved. Response 0 is bathing independently without devices.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Mr. J is independent in the shower but his wife must steady him while he steps over the tub edge.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 2 Intermittent assistance of another person</span></p><p style=\"margin:0\"><strong>Why:</strong> Help is needed for getting in and out only. It is intermittent, not throughout.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Mrs. K showers, but her son must stay in the bathroom the whole time because she is a fall risk and gets confused.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 3 Requires the presence of another person throughout</span></p><p style=\"margin:0\"><strong>Why:</strong> Another person is needed throughout the bath for assistance or supervision.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Mr. L cannot get into the tub. He washes himself independently at the sink, seated in a chair.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 4 Unable to use shower or tub, bathes self independently at sink, chair or commode</span></p><p style=\"margin:0\"><strong>Why:</strong> He does the whole task himself, just not in the tub or shower.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 5.</strong> Mr. M cannot use the tub. His wife helps him wash at the sink, and he washes his face and chest himself.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 5 Participates in bathing with assistance or supervision</span></p><p style=\"margin:0\"><strong>Why:</strong> He takes part, but another person assists. Compare with response 6, where he cannot participate effectively.</p></div>"
      },
      {
        "title": "M1840 Toilet Transferring",
        "content": "<p>M1840 covers getting to and from the toilet and transferring on and off it, and includes the ability to use a commode, bedpan or urinal.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Mr. N walks to the bathroom with a walker, sits and stands from the toilet alone.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 0 Able to get to and from the toilet independently, with or without a device</span></p><p style=\"margin:0\"><strong>Why:</strong> A walker does not lower the score. No person is involved.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Mrs. O can get to the toilet and transfer, but her husband must remind her to use the walker and stand by on her way.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 1 When reminded, assisted or supervised</span></p><p style=\"margin:0\"><strong>Why:</strong> Reminders and standby supervision count as the help required.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Mr. P cannot walk to the bathroom at night and uses a bedside commode, which he reaches alone.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 2 Unable to get to and from the toilet but able to use a bedside commode</span></p><p style=\"margin:0\"><strong>Why:</strong> The commode replaces the toilet. It is response 2 whether or not someone helps.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Ms. Q is bed bound and uses a bedpan independently.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 3 Able to use a bedpan or urinal independently</span></p><p style=\"margin:0\"><strong>Why:</strong> She cannot reach the toilet or commode, but manages the bedpan alone.</p></div>"
      },
      {
        "title": "M1850 Transferring",
        "content": "<p>M1850 is about moving between bed, chair and wheelchair, and standing from them. It does not include toilet or tub transfers.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Mr. R stands from the chair with a walker and no one helps him.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 1 Transfers with minimal human assistance or with an assistive device</span></p><p style=\"margin:0\"><strong>Why:</strong> The assistive device places him at response 1. Response 0 is no device and no help.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Mrs. S can bear weight and pivot, but a caregiver has to do the transfer for her with a gait belt.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 2 Able to bear weight and pivot but unable to transfer self</span></p><p style=\"margin:0\"><strong>Why:</strong> She participates in the pivot, but cannot get herself from one surface to the other.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Mr. T cannot bear weight. He is moved with a mechanical lift and can sit in a chair.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 3 Unable to transfer self and unable to bear weight or pivot</span></p><p style=\"margin:0\"><strong>Why:</strong> He is not bedfast, since he is transferred to a chair.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Ms. U stays in bed and turns and positions herself in bed on her own.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 4 Bedfast, unable to transfer but able to turn and position self in bed</span></p><p style=\"margin:0\"><strong>Why:</strong> Compare with response 5, where she cannot turn or position herself.</p></div>"
      },
      {
        "title": "M1860 Ambulation and Locomotion",
        "content": "<p>M1860 rates walking on even and uneven surfaces and stairs, so one weak area can set the score.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Mr. V uses a cane and walks independently on all surfaces, including stairs.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 1 One-handed device, independent on all surfaces and stairs</span></p><p style=\"margin:0\"><strong>Why:</strong> A single cane is a one-handed device and nothing else is needed.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Mrs. W uses a rolling walker on level floors. A person must stand by on the steps to the porch.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 2 Two-handed device or needs supervision or assistance on stairs or uneven surfaces</span></p><p style=\"margin:0\"><strong>Why:</strong> Either one of those facts places her at 2.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Mr. X walks only with a person holding on at all times, even in the house.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 3 Able to walk only with the supervision or assistance of another person at all times</span></p><p style=\"margin:0\"><strong>Why:</strong> Without a person he does not walk.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Ms. Y cannot walk but wheels herself around the house.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 4 Chairfast, able to wheel self independently</span></p><p style=\"margin:0\"><strong>Why:</strong> If she could not wheel herself, the score would be 5.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 5.</strong> Mr. Z walks with a walker and no one assists, but he cannot do steps and has none at home.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Walker and level surface only: 2</span></p><p style=\"margin:0\"><strong>Why:</strong> The two-handed device alone still places him at 2. Document the fact that the house has no steps.</p></div>"
      },
      {
        "title": "Section GG: Self-Care and Mobility",
        "content": "<p>Section GG uses a six-point scale for the usual performance. Codes 07, 09, 10 and 88 are used when the activity was not performed.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> GG0170D Sit to stand. The patient pulls up on the walker. The clinician holds the gait belt and gives light steadying and a cue to lean forward. No lifting.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 04 Supervision or touching assistance</span></p><p style=\"margin:0\"><strong>Why:</strong> Verbal cues and touching or steadying assistance are 04. The helper does not lift or hold the patient's weight.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> GG0170D Sit to stand. The clinician lifts part of the patient's trunk, doing less than half of the effort.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 03 Partial/moderate assistance</span></p><p style=\"margin:0\"><strong>Why:</strong> The helper lifts, but does less than half the work.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> GG0170D Sit to stand. The helper does more than half of the work.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 02 Substantial/maximal assistance</span></p><p style=\"margin:0\"><strong>Why:</strong> More than half the effort comes from the helper.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> GG0170I Walk 10 feet. The patient walks with a rolling walker and nobody helps. Walker is used for the whole distance.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 06 Independent</span></p><p style=\"margin:0\"><strong>Why:</strong> Using a device does not reduce the code when no helper assistance is needed.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 5.</strong> GG0130B Oral hygiene. The patient brushes alone after the aide sets out the toothbrush and paste.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 05 Setup or clean-up assistance</span></p><p style=\"margin:0\"><strong>Why:</strong> Helper does set-up only.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 6.</strong> GG0170N 4 steps. The patient has a new fracture and is non-weight-bearing, so the activity was not tried for safety.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 88 Not attempted due to medical condition or safety concerns</span></p><p style=\"margin:0\"><strong>Why:</strong> It was not attempted for a medical reason. Do not guess at a performance code.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 7.</strong> GG0170N 4 steps. The home is a single-level home with no steps and no one has to use steps.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 10 Not attempted due to environmental limitations</span></p><p style=\"margin:0\"><strong>Why:</strong> The environment made the activity impossible to test.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 8.</strong> GG0170E Chair/bed-to-chair transfer. The patient says he does not feel like trying today.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 07 Patient refused</span></p><p style=\"margin:0\"><strong>Why:</strong> Use 07 only for a true refusal.</p></div><div class=\"callout warn\">Response wording comes from the OASIS-E2 item set and the Section GG scale. Always confirm against the current CMS manual and your agency policy before relying on a code.</div>"
      },
      {
        "title": "Common Scoring Errors",
        "content": "<p>Mistakes seen most often on SOC assessments.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> The hospital paperwork says the patient was independent with dressing. You watch her struggle and need help with socks.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Code what you observed</span></p><p style=\"margin:0\"><strong>Why:</strong> A prior record cannot replace your own observation or reliable report for the day of assessment.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> The patient could walk to the bathroom but his daughter takes him in a wheelchair because it is faster.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Score ability, not habit</span></p><p style=\"margin:0\"><strong>Why:</strong> Code what the patient is able to do safely, and document the habit.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Bathing varies. Tub bathing is done with help on most days and a sponge bath alone on others.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Use the more-than-50% rule and document both</span></p><p style=\"margin:0\"><strong>Why:</strong> When status varies, score what is true most of the time.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> One GG activity was too difficult to test, and the clinician left it blank.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Use an allowed not-attempted code</span></p><p style=\"margin:0\"><strong>Why:</strong> Do not leave an item blank. Choose the not-attempted code that fits (07, 09, 10 or 88).</p></div>"
      }
    ],
    "quiz": [
      {
        "q": "A patient bathes in the shower alone using a shower chair and handheld shower. M1830 is:",
        "options": [
          "0 Independent without devices",
          "1 Independent with devices",
          "2 Intermittent assistance",
          "4 Unable to use the shower"
        ],
        "answer": 1,
        "explanation": "Independent use of devices in the shower or tub is response 1. Response 0 is independent without devices."
      },
      {
        "q": "A patient uses a rolling walker on level floors and needs someone on the steps. M1860 is:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 1,
        "explanation": "A two-handed device or the need for supervision on stairs both place the patient at response 2."
      },
      {
        "q": "The helper steadies the patient and gives verbal cues during sit to stand, but does not lift. The GG code is:",
        "options": [
          "06 Independent",
          "05 Setup",
          "04 Supervision or touching assistance",
          "03 Partial/moderate"
        ],
        "answer": 2,
        "explanation": "Cueing and touching or steadying assistance is 04. Lifting, even a small part, starts at 03."
      },
      {
        "q": "GG0170N 4 steps cannot be attempted because there are no steps and none are needed in the home. The code is:",
        "options": [
          "88",
          "07",
          "10",
          "09"
        ],
        "answer": 2,
        "explanation": "10 is used when the activity cannot be attempted because of environmental limitations."
      },
      {
        "q": "A discharge summary says the patient was independent in dressing, but you see she cannot manage socks. You should:",
        "options": [
          "Copy the summary",
          "Code what you observed and document it",
          "Leave a dash",
          "Ask the daughter to pick"
        ],
        "answer": 1,
        "explanation": "Code the patient's current ability from your observation or reliable report."
      }
    ],
    "disciplines": [
      "PT",
      "OT",
      "SLP",
      "RN"
    ]
  },
  {
    "id": "oasis_recert_scored",
    "track": [
      "newhire",
      "annual"
    ],
    "icon": "🎯",
    "title": "OASIS Recertification: Scored Examples",
    "desc": "Item by item: recert timing and reason-for-assessment coding, and how function items are re-scored with the reason for each choice.",
    "passScore": 80,
    "mins": 16,
    "staffTypes": [
      "clinician",
      "owner",
      "admin",
      "office"
    ],
    "slides": [
      {
        "title": "How to Use These Examples",
        "content": "<p>For each case you see the situation, the <strong>response selected</strong> and <strong>why</strong>. The recertification is a fresh assessment, so score today's patient, not the SOC.</p><div class=\"callout\">Improvement in distance or effort does not change an item score unless the device or the help needed changes.</div><div class=\"callout warn\">Response wording comes from the OASIS-E2 item set and the Section GG scale. Always confirm against the current CMS manual and your agency policy before relying on a code.</div>"
      },
      {
        "title": "Recert Timing: On Time or Late?",
        "content": "<p>Count the days using your agency's tracker. The window is days 56 to 60 from the original SOC.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> The assessment is completed on day 58.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: On time</span></p><p style=\"margin:0\"><strong>Why:</strong> Day 58 falls inside days 56 to 60.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> The assessment is completed on day 55 because the clinician was going on leave.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Not in the window</span></p><p style=\"margin:0\"><strong>Why:</strong> Day 55 is before the window. The recert does not count and one still needs to be done in the window, so ask the office how to handle it.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> The assessment is completed on day 63.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Late</span></p><p style=\"margin:0\"><strong>Why:</strong> The window closed on day 60. Enter the true date and document the reason. Do not backdate it.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> The patient returned from the hospital on day 44, and the ROC was done on day 46. When is the recert due?</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Days 56 to 60 from the original SOC</span></p><p style=\"margin:0\"><strong>Why:</strong> A ROC does not reset the clock. The recert is counted from the original SOC.</p></div>"
      },
      {
        "title": "M0100 Reason for Assessment",
        "content": "<p>M0100 identifies which time point the assessment is. A wrong code sends the record to the wrong place.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> The assessment is done on day 58 for a patient who stayed home the whole period.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 4 Recertification (follow-up)</span></p><p style=\"margin:0\"><strong>Why:</strong> It is the routine follow-up in the last 5 days of the period.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> On day 30 the patient had a stroke at home and declined sharply. The agency calls this a major decline.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 5 Other follow-up</span></p><p style=\"margin:0\"><strong>Why:</strong> It is a follow-up for a significant change in condition, not a routine recert.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> A patient came home from a 3-day hospital stay on day 54, and the ROC visit is done on day 56.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 3 Resumption of care</span></p><p style=\"margin:0\"><strong>Why:</strong> The assessment is a ROC. With physician agreement, it can also meet the recert requirement.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> The recert is done by the PTA, who then asks the PT to sign.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Not valid</span></p><p style=\"margin:0\"><strong>Why:</strong> PTAs cannot complete the assessment. A PT or RN must do it.</p></div><div class=\"callout warn\">Response wording comes from the OASIS-E2 item set and the Section GG scale. Always confirm against the current CMS manual and your agency policy before relying on a code.</div>"
      },
      {
        "title": "M1860 Ambulation: Re-scored",
        "content": "<p>Same item as SOC. Check the device and the assistance needed today.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> SOC: walker, 25 ft, contact guard. Today: walker, 150 ft, supervision on steps.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 2</span></p><p style=\"margin:0\"><strong>Why:</strong> Still a two-handed device with supervision on stairs. Distance improved, but the response category did not.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> SOC: walker. Today: single-point cane inside and out, independent on steps.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 1</span></p><p style=\"margin:0\"><strong>Why:</strong> The patient now uses a one-handed device and is independent on all surfaces.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> SOC: walker. Today: walks with no device, steady on all surfaces and steps.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 0</span></p><p style=\"margin:0\"><strong>Why:</strong> No device and no help needed.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> SOC: walked with cane. Today after a fall: only walks with someone beside her.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 3</span></p><p style=\"margin:0\"><strong>Why:</strong> A decline places her at response 3 and it supports an other-follow-up discussion with the PT.</p></div>"
      },
      {
        "title": "M1850 Transferring and M1830 Bathing: Re-scored",
        "content": "<p>The same method applies: observe, then match the responses.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> SOC M1850: 1 with walker. Today: stands from the chair alone without a device.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: M1850: 0</span></p><p style=\"margin:0\"><strong>Why:</strong> No device and no human help.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> SOC M1850: 2. Today: still needs the caregiver to move her but she bears weight well.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: M1850: 2</span></p><p style=\"margin:0\"><strong>Why:</strong> She still cannot transfer herself, even if she bears weight better.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> SOC M1830: 4 sponge bath. Today: walk-in shower with a chair and grab bar, caregiver nearby but not helping.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: M1830: 1 if the caregiver is not needed. 3 if the caregiver must stay</span></p><p style=\"margin:0\"><strong>Why:</strong> The difference is whether another person must be present throughout.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> SOC M1830: 2. Today: hasn't bathed in the shower for a week because of fear of falling.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Score ability and document avoidance</span></p><p style=\"margin:0\"><strong>Why:</strong> Do not guess. Ask the patient to describe how she bathed and what help was used.</p></div>"
      },
      {
        "title": "Section GG at Follow-Up",
        "content": "<p>GG items are scored with the same six-point scale as at SOC.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> GG0170N 4 steps. At SOC the code was 88. Today the patient climbs 4 steps with a rail and a person guarding.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 04 Supervision or touching assistance</span></p><p style=\"margin:0\"><strong>Why:</strong> It can be attempted now, and standby guarding with cues is 04.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> GG0170I Walk 10 feet. At SOC 03. Today walks with walker, no helper needed.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 06 Independent</span></p><p style=\"margin:0\"><strong>Why:</strong> Device use does not lower the code when no helper assistance is needed.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> GG0130B Oral hygiene. SOC 05. Today does it all alone with supplies on the counter.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 06 Independent</span></p><p style=\"margin:0\"><strong>Why:</strong> Supplies in a usual place are not setup assistance from a helper.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> The patient is non-weight-bearing again after a re-injury.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 88 Not attempted due to medical condition or safety concerns</span></p><p style=\"margin:0\"><strong>Why:</strong> Not safe to try, so do not score a performance code.</p></div>"
      }
    ],
    "quiz": [
      {
        "q": "A routine assessment on day 58 for a patient who stayed home is coded M0100:",
        "options": [
          "3",
          "4",
          "5",
          "9"
        ],
        "answer": 1,
        "explanation": "M0100 response 4 is the recertification follow-up."
      },
      {
        "q": "A patient who used a walker at SOC now walks farther with the same walker and supervision on steps. M1860 is:",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "answer": 1,
        "explanation": "The device and help needed have not changed, so the response stays at 2."
      },
      {
        "q": "The recert is completed on day 63. What should M0090 show?",
        "options": [
          "Day 60",
          "The actual date it was completed",
          "The SOC date",
          "Leave blank"
        ],
        "answer": 1,
        "explanation": "Enter the real completion date and document the delay."
      },
      {
        "q": "A PTA sees the patient on day 57 and completes the recert OASIS. This is:",
        "options": [
          "Valid with a PT co-signature",
          "Valid if physician orders it",
          "Not valid because PTAs cannot complete the assessment",
          "Valid in rural areas"
        ],
        "answer": 2,
        "explanation": "Only a qualified RN, PT, OT or SLP can complete the OASIS assessment."
      },
      {
        "q": "A patient is hospitalized on day 40 and returns on day 44. When is the recert due?",
        "options": [
          "60 days after the ROC",
          "Days 56 to 60 from the original SOC",
          "Never",
          "Day 90"
        ],
        "answer": 1,
        "explanation": "The recertification window is counted from the original SOC date."
      }
    ],
    "disciplines": [
      "PT",
      "OT",
      "SLP",
      "RN"
    ]
  },
  {
    "id": "oasis_dc_scored",
    "track": [
      "newhire",
      "annual"
    ],
    "icon": "🎯",
    "title": "OASIS Discharge and Transfer: Scored Examples",
    "desc": "Item by item: M0100 reason-for-assessment codes, falls items and discharge function scoring, with the reason for each response.",
    "passScore": 80,
    "mins": 16,
    "staffTypes": [
      "clinician",
      "owner",
      "admin",
      "office"
    ],
    "slides": [
      {
        "title": "How to Use These Examples",
        "content": "<p>Pick the response yourself first. Then compare it with the response selected and read the reason.</p><div class=\"callout warn\">Response wording comes from the OASIS-E2 item set and the Section GG scale. Always confirm against the current CMS manual and your agency policy before relying on a code.</div>"
      },
      {
        "title": "M0100: Which Assessment Is This?",
        "content": "<p>M0100 response options used when care ends or is interrupted: 6 transfer to an inpatient facility, patient not discharged; 7 transfer to an inpatient facility, patient discharged; 8 death at home; 9 discharge from agency.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Goals are met and the patient is discharged home.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 9 Discharge from agency</span></p><p style=\"margin:0\"><strong>Why:</strong> Planned end of care.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> A patient is admitted to the hospital for a 3-day stay, and the agency plans to resume care when she returns.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 6 Transfer to inpatient facility, patient not discharged</span></p><p style=\"margin:0\"><strong>Why:</strong> The agency expects to continue care after the stay.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> A patient is admitted to the hospital and then moves to a nursing home long term. The agency will not resume care.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 7 Transfer to inpatient facility, patient discharged</span></p><p style=\"margin:0\"><strong>Why:</strong> The agency does not expect to resume care.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> A patient dies at home on a visit day.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 8 Death at home</span></p><p style=\"margin:0\"><strong>Why:</strong> Death at home while receiving services.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 5.</strong> A patient goes to the ER for 10 hours and returns home.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No transfer OASIS</span></p><p style=\"margin:0\"><strong>Why:</strong> ER visits and observation stays are not inpatient admissions.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 6.</strong> A patient moves to another home health agency.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 9 Discharge from agency</span></p><p style=\"margin:0\"><strong>Why:</strong> Care with your agency ends.</p></div>"
      },
      {
        "title": "Timing and Who Completes It",
        "content": "<p>Discharge, transfer and death assessments are due within 2 calendar days of the date they occur or are learned about.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> The discharge date is Friday. The OASIS is finished the following Sunday.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: On time</span></p><p style=\"margin:0\"><strong>Why:</strong> Within 2 calendar days.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> The RN and PT both discharge the patient on the same day. The PT's visit is last.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: PT completes the OASIS</span></p><p style=\"margin:0\"><strong>Why:</strong> The last qualified clinician seeing the patient completes the discharge assessment.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> The PTA makes the last visit.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: A PT or RN completes it</span></p><p style=\"margin:0\"><strong>Why:</strong> A PTA can share observations but cannot complete the OASIS.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> The patient moved without notice. The last visit was Monday.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Complete from the last visit and last 5 days of information</span></p><p style=\"margin:0\"><strong>Why:</strong> An unplanned discharge uses what was learned in the last 5 visit days.</p></div>"
      },
      {
        "title": "Falls: J1800 and J1900",
        "content": "<p>The falls items count falls since the SOC or ROC, not before.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> The patient tells you she slid to the floor in the bathroom last week and got up without help.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: J1800: Yes. J1900: one fall in the no-injury row</span></p><p style=\"margin:0\"><strong>Why:</strong> A slide to the floor is a fall. No injury was reported.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> The patient tripped and got a bruise and a skin tear.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes. One fall in the injury (except major) row</span></p><p style=\"margin:0\"><strong>Why:</strong> The injury was not a major injury.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> The patient fell and fractured her wrist.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes. One fall in the major injury row</span></p><p style=\"margin:0\"><strong>Why:</strong> A fracture is a major injury.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> The patient fell two weeks before the SOC.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Do not count it</span></p><p style=\"margin:0\"><strong>Why:</strong> Only falls since the SOC or ROC count here.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 5.</strong> During balance training you catch the patient but she fractures a rib.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Count it as a fall with major injury</span></p><p style=\"margin:0\"><strong>Why:</strong> A fall during balance training counts, and so does a major injury.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 6.</strong> The patient had no falls at all.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: J1800: No. Skip J1900</span></p><p style=\"margin:0\"><strong>Why:</strong> J1900 applies only when J1800 is yes.</p></div>"
      },
      {
        "title": "Discharge Function Items",
        "content": "<p>Score the patient as the patient is at discharge, and compare with the SOC for the outcome.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> SOC M1860 was 3. At discharge the patient walks alone with a walker, supervision on porch steps.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: M1860: 2</span></p><p style=\"margin:0\"><strong>Why:</strong> Two-handed device and supervision on stairs.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> SOC GG0170D was 03. At discharge sit to stand needs no helper.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 06 Independent</span></p><p style=\"margin:0\"><strong>Why:</strong> No helper assistance.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> At discharge GG0170J (walk 50 feet with two turns) is walker with supervision.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: 04 Supervision or touching assistance</span></p><p style=\"margin:0\"><strong>Why:</strong> A helper cues and stays close.</p></div><div class=\"callout warn\">Response wording comes from the OASIS-E2 item set and the Section GG scale. Always confirm against the current CMS manual and your agency policy before relying on a code.</div>"
      },
      {
        "title": "Special Situations",
        "content": "<p>Edge cases and what the response should be.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> A patient is seen once and declines further care.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Follow the single-visit episode rules in the manual</span></p><p style=\"margin:0\"><strong>Why:</strong> Ask your office which assessments are required. Do not create a discharge that the rules do not call for.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> A patient has a 2-day observation stay and comes home.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No transfer OASIS</span></p><p style=\"margin:0\"><strong>Why:</strong> Observation is not an inpatient admission, so care continues.</p></div>"
      }
    ],
    "quiz": [
      {
        "q": "A patient is hospitalized and the agency will not resume care. M0100 is:",
        "options": [
          "6",
          "7",
          "8",
          "9"
        ],
        "answer": 1,
        "explanation": "Transfer to an inpatient facility with the patient discharged is 7."
      },
      {
        "q": "A patient goes to the ER for 10 hours and returns home. What is done?",
        "options": [
          "Transfer OASIS, code 6",
          "Transfer OASIS, code 7",
          "No transfer OASIS",
          "New SOC"
        ],
        "answer": 2,
        "explanation": "ER visits are not inpatient admissions."
      },
      {
        "q": "A patient fractures a wrist in a fall after the SOC. J1900 shows:",
        "options": [
          "A fall with no injury",
          "A fall with injury, not major",
          "A fall with major injury",
          "No fall"
        ],
        "answer": 2,
        "explanation": "A fracture is a major injury."
      },
      {
        "q": "A fall two weeks before the SOC is:",
        "options": [
          "Counted in J1800",
          "Not counted in J1800",
          "Counted as a major injury",
          "Counted twice"
        ],
        "answer": 1,
        "explanation": "J1800 only counts falls since the SOC or ROC."
      },
      {
        "q": "The PT and RN both discharge a patient on the same day. Who completes the OASIS?",
        "options": [
          "The RN",
          "The PTA",
          "The last qualified clinician who sees the patient",
          "The office staff"
        ],
        "answer": 2,
        "explanation": "The last qualified clinician completes the assessment."
      }
    ],
    "disciplines": [
      "PT",
      "OT",
      "SLP",
      "RN"
    ]
  },
  {
    "id": "therapy_reeval_scored",
    "track": [
      "newhire",
      "annual"
    ],
    "icon": "🎯",
    "title": "Therapy Re-Evaluation: Scored Examples",
    "desc": "Each re-evaluation element with examples that meet and do not meet the standard, and why each was scored that way.",
    "passScore": 80,
    "mins": 16,
    "staffTypes": [
      "clinician",
      "owner",
      "admin",
      "office"
    ],
    "slides": [
      {
        "title": "How the Re-Evaluation Is Scored",
        "content": "<p>Medicare does not publish a point score for a re-evaluation. The examples here use a simple <strong>internal review rubric</strong>: <em>Meets</em>, <em>Partly meets</em> or <em>Does not meet</em> for each element.</p><ul><li>Timing and who performed it</li><li>Measures compared with baseline</li><li>Goal status</li><li>Skilled need and effectiveness</li><li>Plan update</li><li>Communication</li><li>Consistency</li></ul><div class=\"callout warn\">This rubric is an internal training tool, not a CMS scale. Edit it to match your agency policy.</div>"
      },
      {
        "title": "Element 1: Timing and Who Performed It",
        "content": "<p>A qualified therapist must perform the functional reassessment at least every 30 days.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> PT reassesses on day 27 and signs it.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Meets</span></p><p style=\"margin:0\"><strong>Why:</strong> A therapist performed it inside 30 days.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> The PTA writes a progress summary on day 29.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Does not meet</span></p><p style=\"margin:0\"><strong>Why:</strong> A PTA cannot perform the reassessment.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> The PT reassesses on day 36.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Does not meet</span></p><p style=\"margin:0\"><strong>Why:</strong> It is past 30 days. Document the reason and reassess now.</p></div>"
      },
      {
        "title": "Element 2: Measures Compared With Baseline",
        "content": "<div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Gait 40 ft walker CGA at evaluation; 120 ft walker supervision now. Same test and setup.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Meets</span></p><p style=\"margin:0\"><strong>Why:</strong> Same measure, both values, easy to compare.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Patient is walking better.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Does not meet</span></p><p style=\"margin:0\"><strong>Why:</strong> No numbers and no baseline.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Gait 120 ft now, but the baseline is not stated.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Partly meets</span></p><p style=\"margin:0\"><strong>Why:</strong> Current value only, so the change cannot be seen.</p></div>"
      },
      {
        "title": "Element 3: Goal Status",
        "content": "<div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Goal 1 met. Goal 2 at 60% of target. Goal 3 not met because of pain.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Meets</span></p><p style=\"margin:0\"><strong>Why:</strong> Each goal has a status and a reason.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Goals continue.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Does not meet</span></p><p style=\"margin:0\"><strong>Why:</strong> No goal-by-goal status.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Goals are stated as met but the data shows the target was not reached.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Does not meet</span></p><p style=\"margin:0\"><strong>Why:</strong> The words and the data disagree.</p></div>"
      },
      {
        "title": "Element 4: Skilled Need and Effectiveness",
        "content": "<div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Gains in gait and transfers since evaluation. Needs skilled guarding and cueing to progress to stairs safely.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Meets</span></p><p style=\"margin:0\"><strong>Why:</strong> It shows both progress and why a therapist is needed.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Patient tolerates treatment well.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Does not meet</span></p><p style=\"margin:0\"><strong>Why:</strong> Says nothing about progress or skill.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Three weeks with no change, continue same plan.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Does not meet</span></p><p style=\"margin:0\"><strong>Why:</strong> A plateau requires a change in approach or a discharge plan.</p></div>"
      },
      {
        "title": "Element 5: Plan Update and Communication",
        "content": "<div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Frequency 2x/week for 3 weeks then 1x/week. New goal: 4 steps with rail. Sent to physician.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Meets</span></p><p style=\"margin:0\"><strong>Why:</strong> Plan changed with the clinical result, and communicated.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Frequency unchanged and goals show walk 25 ft though the patient walks 150 ft.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Does not meet</span></p><p style=\"margin:0\"><strong>Why:</strong> The goals are out of date.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Plan updated but not sent to the PTA.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Partly meets</span></p><p style=\"margin:0\"><strong>Why:</strong> The PTA has to follow the new plan.</p></div>"
      },
      {
        "title": "Element 6: Consistency With Other Records",
        "content": "<div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Re-evaluation says supervision on stairs and the last three notes say supervision.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Meets</span></p><p style=\"margin:0\"><strong>Why:</strong> The records agree.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Re-evaluation says independent walking, while the OASIS says walker with supervision.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Does not meet</span></p><p style=\"margin:0\"><strong>Why:</strong> Reconcile the two before signing.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> The same text as last month with the same numbers.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Does not meet</span></p><p style=\"margin:0\"><strong>Why:</strong> Looks copied forward. Measure again.</p></div>"
      }
    ],
    "quiz": [
      {
        "q": "Who may perform the 30-day functional reassessment?",
        "options": [
          "A PTA",
          "A qualified therapist",
          "An aide",
          "Office staff"
        ],
        "answer": 1,
        "explanation": "A qualified therapist, not an assistant, must perform it."
      },
      {
        "q": "A reassessment says only \"patient is walking better.\" The measures element is:",
        "options": [
          "Meets",
          "Partly meets",
          "Does not meet",
          "Not applicable"
        ],
        "answer": 2,
        "explanation": "No numbers and no baseline are given."
      },
      {
        "q": "Three weeks of identical numbers with no change in approach should lead to:",
        "options": [
          "Continue the plan",
          "Change the approach or plan discharge",
          "Ignore it",
          "Add visits"
        ],
        "answer": 1,
        "explanation": "A plateau needs a documented change."
      },
      {
        "q": "The goals say walk 25 ft but the patient walks 150 ft. The plan element is:",
        "options": [
          "Meets",
          "Does not meet",
          "Partly meets",
          "Not needed"
        ],
        "answer": 1,
        "explanation": "Goals must be updated to match the current plan."
      },
      {
        "q": "The re-evaluation conflicts with the OASIS on walking. Before signing you:",
        "options": [
          "Sign anyway",
          "Reconcile the two",
          "Delete the OASIS",
          "Ask the patient to sign"
        ],
        "answer": 1,
        "explanation": "Records must be consistent."
      }
    ],
    "disciplines": [
      "PT",
      "OT",
      "SLP"
    ]
  },
  {
    "id": "daily_note_scored",
    "track": [
      "newhire",
      "annual"
    ],
    "icon": "🎯",
    "title": "Daily Note Review: Scored Examples",
    "desc": "Note excerpts scored against the PTA daily note review form, with the answer selected and why for each item.",
    "passScore": 80,
    "mins": 18,
    "staffTypes": [
      "clinician",
      "owner",
      "admin",
      "office"
    ],
    "slides": [
      {
        "title": "How the Review Form Works",
        "content": "<p>These examples follow the daily note review form. Each item is a Yes/No question, with a final result of <strong>Pass</strong>, <strong>Needs correction</strong> or <strong>Escalate to PT</strong>.</p><ul><li>Answer from what the note actually says, not what you assume happened</li><li>A missing element is a No</li><li>Items 19 to 22 are flags: a Yes sends the note to the supervising PT</li></ul>"
      },
      {
        "title": "Items 4 to 6: Visit Basics",
        "content": "<div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Item 4. Note shows time in 10:05, time out 10:50, signed Jane Doe PTA 10/26.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> Times and a signature with credentials are all present.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Item 4. Time in is listed and time out is missing.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No</span></p><p style=\"margin:0\"><strong>Why:</strong> Both times are needed.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Item 5. Order is 3x/week; the note is for the third visit this week.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> The visit fits the ordered frequency.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Item 5. Order is 2x/week; this is the fourth visit and no explanation is given.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No</span></p><p style=\"margin:0\"><strong>Why:</strong> It exceeds the order with no reason or new order.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 5.</strong> Item 6. Treatment per PT evaluation of 10/20/2026, goals 1 and 3.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> It names the evaluation and the goals.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 6.</strong> Item 6. Note does not mention the plan or evaluation.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No</span></p><p style=\"margin:0\"><strong>Why:</strong> The reviewer cannot tie the visit to a plan.</p></div>"
      },
      {
        "title": "Items 7 to 10: Skilled Need",
        "content": "<div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Item 7. Sit to stand and bed to chair x5 with verbal cues.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> Names specific interventions.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Item 7. Therapeutic exercise performed.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No</span></p><p style=\"margin:0\"><strong>Why:</strong> Not specific.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Item 8. Patient unsafe without clinician guarding due to dizziness on rising.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> It explains why skill was needed.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Item 8. Patient did her exercises with her daughter watching.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No</span></p><p style=\"margin:0\"><strong>Why:</strong> A caregiver could do it. No skilled judgment is shown.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 5.</strong> Item 9. Standing balance on foam 3 x 30 sec, contact guard, one loss of balance corrected.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> It gives sets, time, surface, assist and event.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 6.</strong> Item 10. Gait training 150 ft supports goal 2 walk 150 ft.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> Intervention is tied to a goal.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 7.</strong> Item 10. Massage and ultrasound, with no goal on the plan for either.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No</span></p><p style=\"margin:0\"><strong>Why:</strong> Nothing connects them to a goal.</p></div>"
      },
      {
        "title": "Items 11 to 14: Data, Response and Progress",
        "content": "<div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Item 11. Gait 120 ft with walker; last visit 90 ft.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> A value that can be compared.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Item 11. Patient doing well.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No</span></p><p style=\"margin:0\"><strong>Why:</strong> No measurable data.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Item 12. Patient fatigued after 2 sets and took 90 sec rests.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> It records response.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Item 13. Gait up 30 ft since last visit.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Progressing</span></p><p style=\"margin:0\"><strong>Why:</strong> Data shows gain.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 5.</strong> Item 13. Same distance for 3 weeks.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Plateau</span></p><p style=\"margin:0\"><strong>Why:</strong> No change in the data.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 6.</strong> Item 13. Note reports the patient cannot walk as far as last week.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Declining</span></p><p style=\"margin:0\"><strong>Why:</strong> Data shows a loss.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 7.</strong> Item 14. \"Significant improvement in balance\" while the balance score is unchanged.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No</span></p><p style=\"margin:0\"><strong>Why:</strong> The words do not match the data.</p></div>"
      },
      {
        "title": "Items 15 to 18: Homebound, Safety and Consistency",
        "content": "<div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Item 15. Needs walker and standby to leave home. Walking 40 ft to the car causes shortness of breath.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> It supports homebound status.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Item 15. Patient drove to the store yesterday and note does not address it.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No</span></p><p style=\"margin:0\"><strong>Why:</strong> Contradicts homebound status.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Item 16. Denies falls since last visit. New dizziness this morning.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> Falls and symptoms were asked and recorded.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Item 17. Daughter instructed in HEP, return demonstration given.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> Education is documented.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 5.</strong> Item 18. Note says independent walking while the evaluation says contact guard.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes (a contradiction exists)</span></p><p style=\"margin:0\"><strong>Why:</strong> Item 18 asks whether something contradicts, so Yes is a flag.</p></div>"
      },
      {
        "title": "Items 19 to 22: Flags for the Supervising PT",
        "content": "<p>A Yes on any flag sends the note to the supervising PT.</p><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> Item 19. Patient needs max assist for transfers today, up from supervision.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> Major decline.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Item 20. Patient fell last night, no injury.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> A fall always goes to the PT.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Item 21. Goal of 150 ft has been met for three visits in a row.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> Close to or at goal means the PT must review.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Item 22. New knee swelling and pain with weight bearing.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Yes</span></p><p style=\"margin:0\"><strong>Why:</strong> May need reassessment or an order.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 5.</strong> Items 19 to 22. Routine visit with steady progress.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: No on all four</span></p><p style=\"margin:0\"><strong>Why:</strong> No flag.</p></div>"
      },
      {
        "title": "Item 23: Overall Result",
        "content": "<div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 1.</strong> All elements present, no flags.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Pass</span></p><p style=\"margin:0\"><strong>Why:</strong> Nothing needs correction.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 2.</strong> Time out missing, no data point, no flags.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Needs correction</span></p><p style=\"margin:0\"><strong>Why:</strong> The PTA can fix these gaps.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 3.</strong> Complete note, but a fall occurred.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Escalate to PT</span></p><p style=\"margin:0\"><strong>Why:</strong> The documentation may be fine, but the PT has to act on the fall.</p></div><div style=\"background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 16px;margin:10px 0\"><p style=\"margin:0 0 6px\"><strong>Case 4.</strong> Missing data and also a new fall.</p><p style=\"margin:0 0 6px\"><span style=\"display:inline-block;background:var(--teal-lt);border:1px solid var(--teal-md);color:var(--navy);border-radius:6px;padding:2px 10px;font-weight:600\">Scored: Escalate to PT</span></p><p style=\"margin:0\"><strong>Why:</strong> A flag outranks a correction. Include the correction in the notes.</p></div>"
      }
    ],
    "quiz": [
      {
        "q": "A note says \"Therapeutic exercise performed.\" Item 7 is:",
        "options": [
          "Yes",
          "No",
          "N/A",
          "Escalate"
        ],
        "answer": 1,
        "explanation": "No specific interventions are named."
      },
      {
        "q": "A note records a fall last night, no injury. Item 20 is:",
        "options": [
          "Yes",
          "No",
          "Only if injured",
          "N/A"
        ],
        "answer": 0,
        "explanation": "Any fall is a flag to the supervising PT."
      },
      {
        "q": "The same gait distance for 3 weeks is item 13:",
        "options": [
          "Progressing",
          "Plateau",
          "Declining",
          "Unclear"
        ],
        "answer": 1,
        "explanation": "No change in the data is a plateau."
      },
      {
        "q": "A complete note, but the patient fell. Overall result:",
        "options": [
          "Pass",
          "Needs correction",
          "Escalate to PT",
          "Reject"
        ],
        "answer": 2,
        "explanation": "A fall must go to the supervising PT even if the note is complete."
      },
      {
        "q": "The note says \"significant improvement\" but scores are unchanged. Item 14 is:",
        "options": [
          "Yes",
          "No",
          "N/A",
          "Plateau"
        ],
        "answer": 1,
        "explanation": "Words do not match data."
      }
    ],
    "disciplines": [
      "PT",
      "PTA",
      "OT",
      "COTA",
      "SLP"
    ]
  }
];
  SCORED_MODULES.forEach(function (m) {
    if (!MODULES.find(function (x) { return x.id === m.id; })) MODULES.push(m);
  });
})();
