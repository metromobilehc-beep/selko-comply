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
        "title": "Think First: M1800 Grooming",
        "content": "<p>M1800 asks about current ability to tend to personal hygiene needs such as washing face and hands, hair care, shaving, nail care and oral hygiene.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_soc_scored_1",
          "items": [
            {
              "scen": "Mrs. A brushes her teeth and combs her hair without help. She does it all alone.",
              "ask": "Select the M1800 response.",
              "opts": [
                "0 - Able to groom self unaided, with or without assistive devices or adapted methods",
                "1 - Grooming utensils must be placed within reach before able to complete grooming",
                "2 - Someone must assist the patient to groom self",
                "3 - Patient depends entirely upon someone else for grooming needs"
              ],
              "ans": 0,
              "why": "No person is needed. Using a long-handled comb or other adapted method still counts as unaided."
            },
            {
              "scen": "Mr. B can groom himself, but only after his daughter sets the toothbrush, toothpaste and razor on the bathroom counter. He cannot reach the cabinet.",
              "ask": "Select the M1800 response.",
              "opts": [
                "0 - Able to groom self unaided, with or without assistive devices or adapted methods",
                "1 - Grooming utensils must be placed within reach before able to complete grooming",
                "2 - Someone must assist the patient to groom self",
                "3 - Patient depends entirely upon someone else for grooming needs"
              ],
              "ans": 1,
              "why": "He completes the tasks himself once supplies are within reach. The need is set-up only."
            },
            {
              "scen": "Mr. C has a shoulder repair. His wife brushes his hair and shaves him every day.",
              "ask": "Select the M1800 response.",
              "opts": [
                "0 - Able to groom self unaided, with or without assistive devices or adapted methods",
                "1 - Grooming utensils must be placed within reach before able to complete grooming",
                "2 - Someone must assist the patient to groom self",
                "3 - Patient depends entirely upon someone else for grooming needs"
              ],
              "ans": 2,
              "why": "A person physically does part of the task, so he needs assistance, not just set-up."
            },
            {
              "scen": "Ms. D has advanced dementia and staff do all of her grooming.",
              "ask": "Select the M1800 response.",
              "opts": [
                "0 - Able to groom self unaided, with or without assistive devices or adapted methods",
                "1 - Grooming utensils must be placed within reach before able to complete grooming",
                "2 - Someone must assist the patient to groom self",
                "3 - Patient depends entirely upon someone else for grooming needs"
              ],
              "ans": 3,
              "why": "She does none of the grooming herself."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: M1800 Grooming",
        "content": "",
        "reveal": "oasis_soc_scored_1"
      },
      {
        "title": "Think First: M1810 and M1820: Dressing",
        "content": "<p>M1810 is upper body dressing and M1820 is lower body dressing. Score each on its own.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_soc_scored_3",
          "items": [
            {
              "scen": "Mr. E gets his shirt from the drawer and puts it on alone. He cannot bend to his lower body and his wife puts on his socks and shoes.",
              "ask": "M1810 Upper body dressing",
              "opts": [
                "0 - Able to get clothes out of closets and drawers, put them on and remove them from the upper body without assistance",
                "1 - Able to dress upper body without assistance if clothing is laid out or handed to the patient",
                "2 - Someone must help the patient put on upper body clothing",
                "3 - Patient depends entirely upon another person to dress the upper body"
              ],
              "ans": 0,
              "why": "Upper body is done without help. Lower body needs someone to put on socks and shoes, which is response 2."
            },
            {
              "scen": "Same patient as Case 1",
              "ask": "Same patient: M1820 Lower body dressing",
              "opts": [
                "0 - Able to obtain, put on, and remove clothing and shoes without assistance",
                "1 - Able to dress lower body without assistance if clothing and shoes are laid out or handed to the patient",
                "2 - Someone must help the patient put on undergarments, slacks, socks or nylons, and shoes",
                "3 - Patient depends entirely upon another person to dress the lower body"
              ],
              "ans": 2,
              "why": "Upper body is done without help. Lower body needs someone to put on socks and shoes, which is response 2."
            },
            {
              "scen": "Mrs. F can dress both halves of her body if her daughter lays out the clothes each morning. She needs no hands-on help.",
              "ask": "M1810 Upper body dressing",
              "opts": [
                "0 - Able to get clothes out of closets and drawers, put them on and remove them from the upper body without assistance",
                "1 - Able to dress upper body without assistance if clothing is laid out or handed to the patient",
                "2 - Someone must help the patient put on upper body clothing",
                "3 - Patient depends entirely upon another person to dress the upper body"
              ],
              "ans": 1,
              "why": "Both items allow independence once clothing is laid out or handed to her."
            },
            {
              "scen": "Same patient as Case 3",
              "ask": "Same patient: M1820 Lower body dressing",
              "opts": [
                "0 - Able to obtain, put on, and remove clothing and shoes without assistance",
                "1 - Able to dress lower body without assistance if clothing and shoes are laid out or handed to the patient",
                "2 - Someone must help the patient put on undergarments, slacks, socks or nylons, and shoes",
                "3 - Patient depends entirely upon another person to dress the lower body"
              ],
              "ans": 1,
              "why": "Both items allow independence once clothing is laid out or handed to her."
            },
            {
              "scen": "Mr. G has hip precautions. He cannot reach his feet and uses a reacher and sock aid independently.",
              "ask": "M1820 Lower body dressing",
              "opts": [
                "0 - Able to obtain, put on, and remove clothing and shoes without assistance",
                "1 - Able to dress lower body without assistance if clothing and shoes are laid out or handed to the patient",
                "2 - Someone must help the patient put on undergarments, slacks, socks or nylons, and shoes",
                "3 - Patient depends entirely upon another person to dress the lower body"
              ],
              "ans": 0,
              "why": "Adapted methods and devices are fine. He obtains, puts on and removes clothing and shoes without another person."
            },
            {
              "scen": "Ms. H is bed bound and fully dressed by an aide.",
              "ask": "M1810 Upper body dressing",
              "opts": [
                "0 - Able to get clothes out of closets and drawers, put them on and remove them from the upper body without assistance",
                "1 - Able to dress upper body without assistance if clothing is laid out or handed to the patient",
                "2 - Someone must help the patient put on upper body clothing",
                "3 - Patient depends entirely upon another person to dress the upper body"
              ],
              "ans": 3,
              "why": "She depends entirely on another person for both."
            },
            {
              "scen": "Same patient as Case 6",
              "ask": "Same patient: M1820 Lower body dressing",
              "opts": [
                "0 - Able to obtain, put on, and remove clothing and shoes without assistance",
                "1 - Able to dress lower body without assistance if clothing and shoes are laid out or handed to the patient",
                "2 - Someone must help the patient put on undergarments, slacks, socks or nylons, and shoes",
                "3 - Patient depends entirely upon another person to dress the lower body"
              ],
              "ans": 3,
              "why": "She depends entirely on another person for both."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: M1810 and M1820: Dressing",
        "content": "",
        "reveal": "oasis_soc_scored_3"
      },
      {
        "title": "Think First: M1830 Bathing",
        "content": "<p>Bathing is the highest-risk ADL item to get wrong, because there are seven responses and the differences are small.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_soc_scored_5",
          "items": [
            {
              "scen": "Mrs. I showers alone using a shower chair and handheld shower, and gets in and out by herself.",
              "ask": "Select the M1830 response.",
              "opts": [
                "0 - Able to bathe self in shower or tub independently, including getting in and out",
                "1 - With the use of devices, able to bathe self in shower or tub independently, including getting in and out",
                "2 - Able to bathe in shower or tub with the intermittent assistance of another person",
                "3 - Able to participate in bathing self in shower or tub, but requires the presence of another person throughout the bath for assistance or supervision",
                "4 - Unable to use the shower or tub, but able to bathe self independently at the sink, in a chair, or on a commode",
                "5 - Unable to use the shower or tub, but able to participate in bathing self in bed, at the sink, in a bedside chair, or on a commode, with the assistance or supervision of another person",
                "6 - Unable to participate effectively in bathing and is bathed totally by another person"
              ],
              "ans": 1,
              "why": "A device is used and no person is involved. Response 0 is bathing independently without devices."
            },
            {
              "scen": "Mr. J is independent in the shower but his wife must steady him while he steps over the tub edge.",
              "ask": "Select the M1830 response.",
              "opts": [
                "0 - Able to bathe self in shower or tub independently, including getting in and out",
                "1 - With the use of devices, able to bathe self in shower or tub independently, including getting in and out",
                "2 - Able to bathe in shower or tub with the intermittent assistance of another person",
                "3 - Able to participate in bathing self in shower or tub, but requires the presence of another person throughout the bath for assistance or supervision",
                "4 - Unable to use the shower or tub, but able to bathe self independently at the sink, in a chair, or on a commode",
                "5 - Unable to use the shower or tub, but able to participate in bathing self in bed, at the sink, in a bedside chair, or on a commode, with the assistance or supervision of another person",
                "6 - Unable to participate effectively in bathing and is bathed totally by another person"
              ],
              "ans": 2,
              "why": "Help is needed for getting in and out only. It is intermittent, not throughout."
            },
            {
              "scen": "Mrs. K showers, but her son must stay in the bathroom the whole time because she is a fall risk and gets confused.",
              "ask": "Select the M1830 response.",
              "opts": [
                "0 - Able to bathe self in shower or tub independently, including getting in and out",
                "1 - With the use of devices, able to bathe self in shower or tub independently, including getting in and out",
                "2 - Able to bathe in shower or tub with the intermittent assistance of another person",
                "3 - Able to participate in bathing self in shower or tub, but requires the presence of another person throughout the bath for assistance or supervision",
                "4 - Unable to use the shower or tub, but able to bathe self independently at the sink, in a chair, or on a commode",
                "5 - Unable to use the shower or tub, but able to participate in bathing self in bed, at the sink, in a bedside chair, or on a commode, with the assistance or supervision of another person",
                "6 - Unable to participate effectively in bathing and is bathed totally by another person"
              ],
              "ans": 3,
              "why": "Another person is needed throughout the bath for assistance or supervision."
            },
            {
              "scen": "Mr. L cannot get into the tub. He washes himself independently at the sink, seated in a chair.",
              "ask": "Select the M1830 response.",
              "opts": [
                "0 - Able to bathe self in shower or tub independently, including getting in and out",
                "1 - With the use of devices, able to bathe self in shower or tub independently, including getting in and out",
                "2 - Able to bathe in shower or tub with the intermittent assistance of another person",
                "3 - Able to participate in bathing self in shower or tub, but requires the presence of another person throughout the bath for assistance or supervision",
                "4 - Unable to use the shower or tub, but able to bathe self independently at the sink, in a chair, or on a commode",
                "5 - Unable to use the shower or tub, but able to participate in bathing self in bed, at the sink, in a bedside chair, or on a commode, with the assistance or supervision of another person",
                "6 - Unable to participate effectively in bathing and is bathed totally by another person"
              ],
              "ans": 4,
              "why": "He does the whole task himself, just not in the tub or shower."
            },
            {
              "scen": "Mr. M cannot use the tub. His wife helps him wash at the sink, and he washes his face and chest himself.",
              "ask": "Select the M1830 response.",
              "opts": [
                "0 - Able to bathe self in shower or tub independently, including getting in and out",
                "1 - With the use of devices, able to bathe self in shower or tub independently, including getting in and out",
                "2 - Able to bathe in shower or tub with the intermittent assistance of another person",
                "3 - Able to participate in bathing self in shower or tub, but requires the presence of another person throughout the bath for assistance or supervision",
                "4 - Unable to use the shower or tub, but able to bathe self independently at the sink, in a chair, or on a commode",
                "5 - Unable to use the shower or tub, but able to participate in bathing self in bed, at the sink, in a bedside chair, or on a commode, with the assistance or supervision of another person",
                "6 - Unable to participate effectively in bathing and is bathed totally by another person"
              ],
              "ans": 5,
              "why": "He takes part, but another person assists. Compare with response 6, where he cannot participate effectively."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: M1830 Bathing",
        "content": "",
        "reveal": "oasis_soc_scored_5"
      },
      {
        "title": "Think First: M1840 Toilet Transferring",
        "content": "<p>M1840 covers getting to and from the toilet and transferring on and off it, and includes the ability to use a commode, bedpan or urinal.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_soc_scored_7",
          "items": [
            {
              "scen": "Mr. N walks to the bathroom with a walker, sits and stands from the toilet alone.",
              "ask": "Select the M1840 response.",
              "opts": [
                "0 - Able to get to and from the toilet and transfer independently with or without a device",
                "1 - When reminded, assisted, or supervised by another person, able to get to and from the toilet and transfer",
                "2 - Unable to get to and from the toilet but is able to use a bedside commode (with or without assistance)",
                "3 - Unable to get to and from the toilet or bedside commode but is able to use a bedpan/urinal independently",
                "4 - Totally dependent in toileting"
              ],
              "ans": 0,
              "why": "A walker does not lower the score. No person is involved."
            },
            {
              "scen": "Mrs. O can get to the toilet and transfer, but her husband must remind her to use the walker and stand by on her way.",
              "ask": "Select the M1840 response.",
              "opts": [
                "0 - Able to get to and from the toilet and transfer independently with or without a device",
                "1 - When reminded, assisted, or supervised by another person, able to get to and from the toilet and transfer",
                "2 - Unable to get to and from the toilet but is able to use a bedside commode (with or without assistance)",
                "3 - Unable to get to and from the toilet or bedside commode but is able to use a bedpan/urinal independently",
                "4 - Totally dependent in toileting"
              ],
              "ans": 1,
              "why": "Reminders and standby supervision count as the help required."
            },
            {
              "scen": "Mr. P cannot walk to the bathroom at night and uses a bedside commode, which he reaches alone.",
              "ask": "Select the M1840 response.",
              "opts": [
                "0 - Able to get to and from the toilet and transfer independently with or without a device",
                "1 - When reminded, assisted, or supervised by another person, able to get to and from the toilet and transfer",
                "2 - Unable to get to and from the toilet but is able to use a bedside commode (with or without assistance)",
                "3 - Unable to get to and from the toilet or bedside commode but is able to use a bedpan/urinal independently",
                "4 - Totally dependent in toileting"
              ],
              "ans": 2,
              "why": "The commode replaces the toilet. It is response 2 whether or not someone helps."
            },
            {
              "scen": "Ms. Q is bed bound and uses a bedpan independently.",
              "ask": "Select the M1840 response.",
              "opts": [
                "0 - Able to get to and from the toilet and transfer independently with or without a device",
                "1 - When reminded, assisted, or supervised by another person, able to get to and from the toilet and transfer",
                "2 - Unable to get to and from the toilet but is able to use a bedside commode (with or without assistance)",
                "3 - Unable to get to and from the toilet or bedside commode but is able to use a bedpan/urinal independently",
                "4 - Totally dependent in toileting"
              ],
              "ans": 3,
              "why": "She cannot reach the toilet or commode, but manages the bedpan alone."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: M1840 Toilet Transferring",
        "content": "",
        "reveal": "oasis_soc_scored_7"
      },
      {
        "title": "Think First: M1850 Transferring",
        "content": "<p>M1850 is about moving between bed, chair and wheelchair, and standing from them. It does not include toilet or tub transfers.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_soc_scored_9",
          "items": [
            {
              "scen": "Mr. R stands from the chair with a walker and no one helps him.",
              "ask": "Select the M1850 response.",
              "opts": [
                "0 - Able to independently transfer",
                "1 - Able to transfer with minimal human assistance or with use of an assistive device",
                "2 - Able to bear weight and pivot during the transfer process but unable to transfer self",
                "3 - Unable to transfer self and is unable to bear weight or pivot when transferred by another person",
                "4 - Bedfast, unable to transfer but is able to turn and position self in bed",
                "5 - Bedfast, unable to transfer and is unable to turn and position self"
              ],
              "ans": 1,
              "why": "The assistive device places him at response 1. Response 0 is no device and no help."
            },
            {
              "scen": "Mrs. S can bear weight and pivot, but a caregiver has to do the transfer for her with a gait belt.",
              "ask": "Select the M1850 response.",
              "opts": [
                "0 - Able to independently transfer",
                "1 - Able to transfer with minimal human assistance or with use of an assistive device",
                "2 - Able to bear weight and pivot during the transfer process but unable to transfer self",
                "3 - Unable to transfer self and is unable to bear weight or pivot when transferred by another person",
                "4 - Bedfast, unable to transfer but is able to turn and position self in bed",
                "5 - Bedfast, unable to transfer and is unable to turn and position self"
              ],
              "ans": 2,
              "why": "She participates in the pivot, but cannot get herself from one surface to the other."
            },
            {
              "scen": "Mr. T cannot bear weight. He is moved with a mechanical lift and can sit in a chair.",
              "ask": "Select the M1850 response.",
              "opts": [
                "0 - Able to independently transfer",
                "1 - Able to transfer with minimal human assistance or with use of an assistive device",
                "2 - Able to bear weight and pivot during the transfer process but unable to transfer self",
                "3 - Unable to transfer self and is unable to bear weight or pivot when transferred by another person",
                "4 - Bedfast, unable to transfer but is able to turn and position self in bed",
                "5 - Bedfast, unable to transfer and is unable to turn and position self"
              ],
              "ans": 3,
              "why": "He is not bedfast, since he is transferred to a chair."
            },
            {
              "scen": "Ms. U stays in bed and turns and positions herself in bed on her own.",
              "ask": "Select the M1850 response.",
              "opts": [
                "0 - Able to independently transfer",
                "1 - Able to transfer with minimal human assistance or with use of an assistive device",
                "2 - Able to bear weight and pivot during the transfer process but unable to transfer self",
                "3 - Unable to transfer self and is unable to bear weight or pivot when transferred by another person",
                "4 - Bedfast, unable to transfer but is able to turn and position self in bed",
                "5 - Bedfast, unable to transfer and is unable to turn and position self"
              ],
              "ans": 4,
              "why": "Compare with response 5, where she cannot turn or position herself."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: M1850 Transferring",
        "content": "",
        "reveal": "oasis_soc_scored_9"
      },
      {
        "title": "Think First: M1860 Ambulation and Locomotion",
        "content": "<p>M1860 rates walking on even and uneven surfaces and stairs, so one weak area can set the score.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_soc_scored_11",
          "items": [
            {
              "scen": "Mr. V uses a cane and walks independently on all surfaces, including stairs.",
              "ask": "Select the M1860 response.",
              "opts": [
                "0 - Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (no human assistance or assistive device)",
                "1 - With a one-handed device (cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs",
                "2 - Requires a two-handed device (walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs, steps or uneven surfaces",
                "3 - Able to walk only with the supervision or assistance of another person at all times",
                "4 - Chairfast, unable to ambulate but is able to wheel self independently",
                "5 - Chairfast, unable to ambulate and is unable to wheel self",
                "6 - Bedfast, unable to ambulate or be up in a chair"
              ],
              "ans": 1,
              "why": "A single cane is a one-handed device and nothing else is needed."
            },
            {
              "scen": "Mrs. W uses a rolling walker on level floors. A person must stand by on the steps to the porch.",
              "ask": "Select the M1860 response.",
              "opts": [
                "0 - Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (no human assistance or assistive device)",
                "1 - With a one-handed device (cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs",
                "2 - Requires a two-handed device (walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs, steps or uneven surfaces",
                "3 - Able to walk only with the supervision or assistance of another person at all times",
                "4 - Chairfast, unable to ambulate but is able to wheel self independently",
                "5 - Chairfast, unable to ambulate and is unable to wheel self",
                "6 - Bedfast, unable to ambulate or be up in a chair"
              ],
              "ans": 2,
              "why": "Either one of those facts places her at 2."
            },
            {
              "scen": "Mr. X walks only with a person holding on at all times, even in the house.",
              "ask": "Select the M1860 response.",
              "opts": [
                "0 - Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (no human assistance or assistive device)",
                "1 - With a one-handed device (cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs",
                "2 - Requires a two-handed device (walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs, steps or uneven surfaces",
                "3 - Able to walk only with the supervision or assistance of another person at all times",
                "4 - Chairfast, unable to ambulate but is able to wheel self independently",
                "5 - Chairfast, unable to ambulate and is unable to wheel self",
                "6 - Bedfast, unable to ambulate or be up in a chair"
              ],
              "ans": 3,
              "why": "Without a person he does not walk."
            },
            {
              "scen": "Ms. Y cannot walk but wheels herself around the house.",
              "ask": "Select the M1860 response.",
              "opts": [
                "0 - Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (no human assistance or assistive device)",
                "1 - With a one-handed device (cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs",
                "2 - Requires a two-handed device (walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs, steps or uneven surfaces",
                "3 - Able to walk only with the supervision or assistance of another person at all times",
                "4 - Chairfast, unable to ambulate but is able to wheel self independently",
                "5 - Chairfast, unable to ambulate and is unable to wheel self",
                "6 - Bedfast, unable to ambulate or be up in a chair"
              ],
              "ans": 4,
              "why": "If she could not wheel herself, the score would be 5."
            },
            {
              "scen": "Mr. Z walks with a walker and no one assists, but he cannot do steps and has none at home.",
              "ask": "Select the M1860 response.",
              "opts": [
                "0 - Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (no human assistance or assistive device)",
                "1 - With a one-handed device (cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs",
                "2 - Requires a two-handed device (walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs, steps or uneven surfaces",
                "3 - Able to walk only with the supervision or assistance of another person at all times",
                "4 - Chairfast, unable to ambulate but is able to wheel self independently",
                "5 - Chairfast, unable to ambulate and is unable to wheel self",
                "6 - Bedfast, unable to ambulate or be up in a chair"
              ],
              "ans": 2,
              "why": "The two-handed device alone still places him at 2. Document the fact that the house has no steps."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: M1860 Ambulation and Locomotion",
        "content": "",
        "reveal": "oasis_soc_scored_11"
      },
      {
        "title": "Think First: Section GG: Self-Care and Mobility",
        "content": "<p>Section GG uses a six-point scale for the usual performance. Codes 07, 09, 10 and 88 are used when the activity was not performed.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_soc_scored_13",
          "items": [
            {
              "scen": "GG0170D Sit to stand. The patient pulls up on the walker. The clinician holds the gait belt and gives light steadying and a cue to lean forward. No lifting.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 2,
              "why": "Verbal cues and touching or steadying assistance are 04. The helper does not lift or hold the patient's weight."
            },
            {
              "scen": "GG0170D Sit to stand. The clinician lifts part of the patient's trunk, doing less than half of the effort.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 3,
              "why": "The helper lifts, but does less than half the work."
            },
            {
              "scen": "GG0170D Sit to stand. The helper does more than half of the work.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 4,
              "why": "More than half the effort comes from the helper."
            },
            {
              "scen": "GG0170I Walk 10 feet. The patient walks with a rolling walker and nobody helps. Walker is used for the whole distance.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 0,
              "why": "Using a device does not reduce the code when no helper assistance is needed."
            },
            {
              "scen": "GG0130B Oral hygiene. The patient brushes alone after the aide sets out the toothbrush and paste.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 1,
              "why": "Helper does set-up only."
            },
            {
              "scen": "GG0170N 4 steps. The patient has a new fracture and is non-weight-bearing, so the activity was not tried for safety.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 9,
              "why": "It was not attempted for a medical reason. Do not guess at a performance code."
            },
            {
              "scen": "GG0170N 4 steps. The home is a single-level home with no steps and no one has to use steps.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 8,
              "why": "The environment made the activity impossible to test."
            },
            {
              "scen": "GG0170E Chair/bed-to-chair transfer. The patient says he does not feel like trying today.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 6,
              "why": "Use 07 only for a true refusal."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Section GG: Self-Care and Mobility",
        "content": "<div class=\"callout warn\">Response wording comes from the OASIS-E2 item set and the Section GG scale. Always confirm against the current CMS manual and your agency policy before relying on a code.</div>",
        "reveal": "oasis_soc_scored_13"
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
        "title": "Think First: Recert Timing: On Time or Late?",
        "content": "<p>Count the days using your agency's tracker. The window is days 56 to 60 from the original SOC.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_recert_scored_1",
          "items": [
            {
              "scen": "The assessment is completed on day 58.",
              "ask": "Is the recert on time?",
              "opts": [
                "On time (inside days 56 to 60)",
                "Not in the window (before day 56)",
                "Late (after day 60)"
              ],
              "ans": 0,
              "why": "Day 58 falls inside days 56 to 60."
            },
            {
              "scen": "The assessment is completed on day 55 because the clinician was going on leave.",
              "ask": "Is the recert on time?",
              "opts": [
                "On time (inside days 56 to 60)",
                "Not in the window (before day 56)",
                "Late (after day 60)"
              ],
              "ans": 1,
              "why": "Day 55 is before the window. The recert does not count and one still needs to be done in the window, so ask the office how to handle it."
            },
            {
              "scen": "The assessment is completed on day 63.",
              "ask": "Is the recert on time?",
              "opts": [
                "On time (inside days 56 to 60)",
                "Not in the window (before day 56)",
                "Late (after day 60)"
              ],
              "ans": 2,
              "why": "The window closed on day 60. Enter the true date and document the reason. Do not backdate it."
            },
            {
              "scen": "The patient returned from the hospital on day 44, and the ROC was done on day 46. When is the recert due?",
              "ask": "When is the recert due?",
              "opts": [
                "60 days after the ROC",
                "Days 56 to 60 from the original SOC",
                "At the ROC visit",
                "Not required"
              ],
              "ans": 1,
              "why": "A ROC does not reset the clock. The recert is counted from the original SOC."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Recert Timing: On Time or Late?",
        "content": "",
        "reveal": "oasis_recert_scored_1"
      },
      {
        "title": "Think First: M0100 Reason for Assessment",
        "content": "<p>M0100 identifies which time point the assessment is. A wrong code sends the record to the wrong place.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_recert_scored_3",
          "items": [
            {
              "scen": "The assessment is done on day 58 for a patient who stayed home the whole period.",
              "ask": "Select the M0100 code.",
              "opts": [
                "1 - Start of care",
                "3 - Resumption of care",
                "4 - Recertification (follow-up)",
                "5 - Other follow-up"
              ],
              "ans": 2,
              "why": "It is the routine follow-up in the last 5 days of the period."
            },
            {
              "scen": "On day 30 the patient had a stroke at home and declined sharply. The agency calls this a major decline.",
              "ask": "Select the M0100 code.",
              "opts": [
                "1 - Start of care",
                "3 - Resumption of care",
                "4 - Recertification (follow-up)",
                "5 - Other follow-up"
              ],
              "ans": 3,
              "why": "It is a follow-up for a significant change in condition, not a routine recert."
            },
            {
              "scen": "A patient came home from a 3-day hospital stay on day 54, and the ROC visit is done on day 56.",
              "ask": "Select the M0100 code.",
              "opts": [
                "1 - Start of care",
                "3 - Resumption of care",
                "4 - Recertification (follow-up)",
                "5 - Other follow-up"
              ],
              "ans": 1,
              "why": "The assessment is a ROC. With physician agreement, it can also meet the recert requirement."
            },
            {
              "scen": "The recert is done by the PTA, who then asks the PT to sign.",
              "ask": "Is this assessment valid?",
              "opts": [
                "Valid with PT co-signature",
                "Not valid - a PTA cannot complete the assessment",
                "Valid if the physician agrees"
              ],
              "ans": 1,
              "why": "PTAs cannot complete the assessment. A PT or RN must do it."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: M0100 Reason for Assessment",
        "content": "<div class=\"callout warn\">Response wording comes from the OASIS-E2 item set and the Section GG scale. Always confirm against the current CMS manual and your agency policy before relying on a code.</div>",
        "reveal": "oasis_recert_scored_3"
      },
      {
        "title": "Think First: M1860 Ambulation: Re-scored",
        "content": "<p>Same item as SOC. Check the device and the assistance needed today.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_recert_scored_5",
          "items": [
            {
              "scen": "SOC: walker, 25 ft, contact guard. Today: walker, 150 ft, supervision on steps.",
              "ask": "Select the M1860 response today.",
              "opts": [
                "0 - Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (no human assistance or assistive device)",
                "1 - With a one-handed device (cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs",
                "2 - Requires a two-handed device (walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs, steps or uneven surfaces",
                "3 - Able to walk only with the supervision or assistance of another person at all times",
                "4 - Chairfast, unable to ambulate but is able to wheel self independently",
                "5 - Chairfast, unable to ambulate and is unable to wheel self",
                "6 - Bedfast, unable to ambulate or be up in a chair"
              ],
              "ans": 2,
              "why": "Still a two-handed device with supervision on stairs. Distance improved, but the response category did not."
            },
            {
              "scen": "SOC: walker. Today: single-point cane inside and out, independent on steps.",
              "ask": "Select the M1860 response today.",
              "opts": [
                "0 - Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (no human assistance or assistive device)",
                "1 - With a one-handed device (cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs",
                "2 - Requires a two-handed device (walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs, steps or uneven surfaces",
                "3 - Able to walk only with the supervision or assistance of another person at all times",
                "4 - Chairfast, unable to ambulate but is able to wheel self independently",
                "5 - Chairfast, unable to ambulate and is unable to wheel self",
                "6 - Bedfast, unable to ambulate or be up in a chair"
              ],
              "ans": 1,
              "why": "The patient now uses a one-handed device and is independent on all surfaces."
            },
            {
              "scen": "SOC: walker. Today: walks with no device, steady on all surfaces and steps.",
              "ask": "Select the M1860 response today.",
              "opts": [
                "0 - Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (no human assistance or assistive device)",
                "1 - With a one-handed device (cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs",
                "2 - Requires a two-handed device (walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs, steps or uneven surfaces",
                "3 - Able to walk only with the supervision or assistance of another person at all times",
                "4 - Chairfast, unable to ambulate but is able to wheel self independently",
                "5 - Chairfast, unable to ambulate and is unable to wheel self",
                "6 - Bedfast, unable to ambulate or be up in a chair"
              ],
              "ans": 0,
              "why": "No device and no help needed."
            },
            {
              "scen": "SOC: walked with cane. Today after a fall: only walks with someone beside her.",
              "ask": "Select the M1860 response today.",
              "opts": [
                "0 - Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (no human assistance or assistive device)",
                "1 - With a one-handed device (cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs",
                "2 - Requires a two-handed device (walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs, steps or uneven surfaces",
                "3 - Able to walk only with the supervision or assistance of another person at all times",
                "4 - Chairfast, unable to ambulate but is able to wheel self independently",
                "5 - Chairfast, unable to ambulate and is unable to wheel self",
                "6 - Bedfast, unable to ambulate or be up in a chair"
              ],
              "ans": 3,
              "why": "A decline places her at response 3 and it supports an other-follow-up discussion with the PT."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: M1860 Ambulation: Re-scored",
        "content": "",
        "reveal": "oasis_recert_scored_5"
      },
      {
        "title": "Think First: M1850 Transferring and M1830 Bathing: Re-scored",
        "content": "<p>The same method applies: observe, then match the responses.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_recert_scored_7",
          "items": [
            {
              "scen": "SOC M1850: 1 with walker. Today: stands from the chair alone without a device.",
              "ask": "M1850 today",
              "opts": [
                "0 - Able to independently transfer",
                "1 - Able to transfer with minimal human assistance or with use of an assistive device",
                "2 - Able to bear weight and pivot during the transfer process but unable to transfer self",
                "3 - Unable to transfer self and is unable to bear weight or pivot when transferred by another person",
                "4 - Bedfast, unable to transfer but is able to turn and position self in bed",
                "5 - Bedfast, unable to transfer and is unable to turn and position self"
              ],
              "ans": 0,
              "why": "No device and no human help."
            },
            {
              "scen": "SOC M1850: 2. Today: still needs the caregiver to move her but she bears weight well.",
              "ask": "M1850 today",
              "opts": [
                "0 - Able to independently transfer",
                "1 - Able to transfer with minimal human assistance or with use of an assistive device",
                "2 - Able to bear weight and pivot during the transfer process but unable to transfer self",
                "3 - Unable to transfer self and is unable to bear weight or pivot when transferred by another person",
                "4 - Bedfast, unable to transfer but is able to turn and position self in bed",
                "5 - Bedfast, unable to transfer and is unable to turn and position self"
              ],
              "ans": 2,
              "why": "She still cannot transfer herself, even if she bears weight better."
            },
            {
              "scen": "SOC M1830: 4 sponge bath. Today: she showers independently with a shower chair and grab bar. A caregiver is not needed.",
              "ask": "M1830 today",
              "opts": [
                "0 - Able to bathe self in shower or tub independently, including getting in and out",
                "1 - With the use of devices, able to bathe self in shower or tub independently, including getting in and out",
                "2 - Able to bathe in shower or tub with the intermittent assistance of another person",
                "3 - Able to participate in bathing self in shower or tub, but requires the presence of another person throughout the bath for assistance or supervision",
                "4 - Unable to use the shower or tub, but able to bathe self independently at the sink, in a chair, or on a commode",
                "5 - Unable to use the shower or tub, but able to participate in bathing self in bed, at the sink, in a bedside chair, or on a commode, with the assistance or supervision of another person",
                "6 - Unable to participate effectively in bathing and is bathed totally by another person"
              ],
              "ans": 1,
              "why": "She uses devices and no person is needed. If a caregiver had to stay throughout, it would be 3."
            },
            {
              "scen": "SOC M1830: 2. Today: hasn't bathed in the shower for a week because of fear of falling.",
              "ask": "What do you do?",
              "opts": [
                "Score the avoidance as a 6",
                "Assume she cannot bathe independently",
                "Ask how she bathed and score ability, and document the avoidance"
              ],
              "ans": 2,
              "why": "Do not guess. Ask the patient to describe how she bathed and what help was used."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: M1850 Transferring and M1830 Bathing: Re-scored",
        "content": "",
        "reveal": "oasis_recert_scored_7"
      },
      {
        "title": "Think First: Section GG at Follow-Up",
        "content": "<p>GG items are scored with the same six-point scale as at SOC.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_recert_scored_9",
          "items": [
            {
              "scen": "GG0170N 4 steps. At SOC the code was 88. Today the patient climbs 4 steps with a rail and a person guarding.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 2,
              "why": "It can be attempted now, and standby guarding with cues is 04."
            },
            {
              "scen": "GG0170I Walk 10 feet. At SOC 03. Today walks with walker, no helper needed.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 0,
              "why": "Device use does not lower the code when no helper assistance is needed."
            },
            {
              "scen": "GG0130B Oral hygiene. SOC 05. Today does it all alone with supplies on the counter.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 0,
              "why": "Supplies in a usual place are not setup assistance from a helper."
            },
            {
              "scen": "The patient is non-weight-bearing again after a re-injury.",
              "ask": "Select the Section GG code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 9,
              "why": "Not safe to try, so do not score a performance code."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Section GG at Follow-Up",
        "content": "",
        "reveal": "oasis_recert_scored_9"
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
        "title": "Think First: M0100: Which Assessment Is This?",
        "content": "<p>M0100 response options used when care ends or is interrupted: 6 transfer to an inpatient facility, patient not discharged; 7 transfer to an inpatient facility, patient discharged; 8 death at home; 9 discharge from agency.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_dc_scored_1",
          "items": [
            {
              "scen": "Goals are met and the patient is discharged home.",
              "ask": "Select the M0100 code, or no transfer OASIS.",
              "opts": [
                "6 - Transfer to an inpatient facility, patient not discharged",
                "7 - Transfer to an inpatient facility, patient discharged",
                "8 - Death at home",
                "9 - Discharge from agency",
                "No transfer OASIS"
              ],
              "ans": 3,
              "why": "Planned end of care."
            },
            {
              "scen": "A patient is admitted to the hospital for a 3-day stay, and the agency plans to resume care when she returns.",
              "ask": "Select the M0100 code, or no transfer OASIS.",
              "opts": [
                "6 - Transfer to an inpatient facility, patient not discharged",
                "7 - Transfer to an inpatient facility, patient discharged",
                "8 - Death at home",
                "9 - Discharge from agency",
                "No transfer OASIS"
              ],
              "ans": 0,
              "why": "The agency expects to continue care after the stay."
            },
            {
              "scen": "A patient is admitted to the hospital and then moves to a nursing home long term. The agency will not resume care.",
              "ask": "Select the M0100 code, or no transfer OASIS.",
              "opts": [
                "6 - Transfer to an inpatient facility, patient not discharged",
                "7 - Transfer to an inpatient facility, patient discharged",
                "8 - Death at home",
                "9 - Discharge from agency",
                "No transfer OASIS"
              ],
              "ans": 1,
              "why": "The agency does not expect to resume care."
            },
            {
              "scen": "A patient dies at home on a visit day.",
              "ask": "Select the M0100 code, or no transfer OASIS.",
              "opts": [
                "6 - Transfer to an inpatient facility, patient not discharged",
                "7 - Transfer to an inpatient facility, patient discharged",
                "8 - Death at home",
                "9 - Discharge from agency",
                "No transfer OASIS"
              ],
              "ans": 2,
              "why": "Death at home while receiving services."
            },
            {
              "scen": "A patient goes to the ER for 10 hours and returns home.",
              "ask": "Select the M0100 code, or no transfer OASIS.",
              "opts": [
                "6 - Transfer to an inpatient facility, patient not discharged",
                "7 - Transfer to an inpatient facility, patient discharged",
                "8 - Death at home",
                "9 - Discharge from agency",
                "No transfer OASIS"
              ],
              "ans": 4,
              "why": "ER visits and observation stays are not inpatient admissions."
            },
            {
              "scen": "A patient moves to another home health agency.",
              "ask": "Select the M0100 code, or no transfer OASIS.",
              "opts": [
                "6 - Transfer to an inpatient facility, patient not discharged",
                "7 - Transfer to an inpatient facility, patient discharged",
                "8 - Death at home",
                "9 - Discharge from agency",
                "No transfer OASIS"
              ],
              "ans": 3,
              "why": "Care with your agency ends."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: M0100: Which Assessment Is This?",
        "content": "",
        "reveal": "oasis_dc_scored_1"
      },
      {
        "title": "Think First: Timing and Who Completes It",
        "content": "<p>Discharge, transfer and death assessments are due within 2 calendar days of the date they occur or are learned about.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_dc_scored_3",
          "items": [
            {
              "scen": "The discharge date is Friday. The OASIS is finished the following Sunday.",
              "ask": "Is the OASIS on time?",
              "opts": [
                "On time",
                "Late"
              ],
              "ans": 0,
              "why": "Within 2 calendar days."
            },
            {
              "scen": "The RN and PT both discharge the patient on the same day. The PT's visit is last.",
              "ask": "Who completes the discharge OASIS?",
              "opts": [
                "The RN",
                "The PT (last qualified clinician)",
                "The PTA"
              ],
              "ans": 1,
              "why": "The last qualified clinician seeing the patient completes the discharge assessment."
            },
            {
              "scen": "The PTA makes the last visit.",
              "ask": "Who completes the discharge OASIS?",
              "opts": [
                "The PTA",
                "A PT or RN",
                "Office staff"
              ],
              "ans": 1,
              "why": "A PTA can share observations but cannot complete the OASIS."
            },
            {
              "scen": "The patient moved without notice. The last visit was Monday.",
              "ask": "What do you do?",
              "opts": [
                "Skip the OASIS",
                "Complete it from the last visit and the last 5 days of information",
                "Wait for the patient to return"
              ],
              "ans": 1,
              "why": "An unplanned discharge uses what was learned in the last 5 visit days."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Timing and Who Completes It",
        "content": "",
        "reveal": "oasis_dc_scored_3"
      },
      {
        "title": "Think First: Falls: J1800 and J1900",
        "content": "<p>The falls items count falls since the SOC or ROC, not before.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_dc_scored_5",
          "items": [
            {
              "scen": "The patient tells you she slid to the floor in the bathroom last week and got up without help.",
              "ask": "How is this recorded?",
              "opts": [
                "Not counted",
                "Fall with no injury",
                "Fall with injury (not major)",
                "Fall with major injury"
              ],
              "ans": 1,
              "why": "A slide to the floor is a fall. No injury was reported."
            },
            {
              "scen": "The patient tripped and got a bruise and a skin tear.",
              "ask": "How is this recorded?",
              "opts": [
                "Not counted",
                "Fall with no injury",
                "Fall with injury (not major)",
                "Fall with major injury"
              ],
              "ans": 2,
              "why": "The injury was not a major injury."
            },
            {
              "scen": "The patient fell and fractured her wrist.",
              "ask": "How is this recorded?",
              "opts": [
                "Not counted",
                "Fall with no injury",
                "Fall with injury (not major)",
                "Fall with major injury"
              ],
              "ans": 3,
              "why": "A fracture is a major injury."
            },
            {
              "scen": "The patient fell two weeks before the SOC.",
              "ask": "How is this recorded?",
              "opts": [
                "Not counted",
                "Fall with no injury",
                "Fall with injury (not major)",
                "Fall with major injury"
              ],
              "ans": 0,
              "why": "Only falls since the SOC or ROC count here."
            },
            {
              "scen": "During balance training you catch the patient but she fractures a rib.",
              "ask": "How is this recorded?",
              "opts": [
                "Not counted",
                "Fall with no injury",
                "Fall with injury (not major)",
                "Fall with major injury"
              ],
              "ans": 3,
              "why": "A fall during balance training counts, and so does a major injury."
            },
            {
              "scen": "The patient had no falls at all.",
              "ask": "How is this recorded?",
              "opts": [
                "Not counted",
                "Fall with no injury",
                "Fall with injury (not major)",
                "Fall with major injury"
              ],
              "ans": 0,
              "why": "J1900 applies only when J1800 is yes."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Falls: J1800 and J1900",
        "content": "",
        "reveal": "oasis_dc_scored_5"
      },
      {
        "title": "Think First: Discharge Function Items",
        "content": "<p>Score the patient as the patient is at discharge, and compare with the SOC for the outcome.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_dc_scored_7",
          "items": [
            {
              "scen": "SOC M1860 was 3. At discharge the patient walks alone with a walker, supervision on porch steps.",
              "ask": "Select the M1860 response.",
              "opts": [
                "0 - Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (no human assistance or assistive device)",
                "1 - With a one-handed device (cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs",
                "2 - Requires a two-handed device (walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs, steps or uneven surfaces",
                "3 - Able to walk only with the supervision or assistance of another person at all times",
                "4 - Chairfast, unable to ambulate but is able to wheel self independently",
                "5 - Chairfast, unable to ambulate and is unable to wheel self",
                "6 - Bedfast, unable to ambulate or be up in a chair"
              ],
              "ans": 2,
              "why": "Two-handed device and supervision on stairs."
            },
            {
              "scen": "SOC GG0170D was 03. At discharge sit to stand needs no helper.",
              "ask": "Select the GG0170D code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 0,
              "why": "No helper assistance."
            },
            {
              "scen": "At discharge GG0170J (walk 50 feet with two turns) is walker with supervision.",
              "ask": "Select the GG0170J code.",
              "opts": [
                "06 - Independent",
                "05 - Setup or clean-up assistance",
                "04 - Supervision or touching assistance",
                "03 - Partial/moderate assistance (helper does less than half the effort)",
                "02 - Substantial/maximal assistance (helper does more than half the effort)",
                "01 - Dependent",
                "07 - Patient refused",
                "09 - Not applicable",
                "10 - Not attempted due to environmental limitations",
                "88 - Not attempted due to medical condition or safety concerns"
              ],
              "ans": 2,
              "why": "A helper cues and stays close."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Discharge Function Items",
        "content": "<div class=\"callout warn\">Response wording comes from the OASIS-E2 item set and the Section GG scale. Always confirm against the current CMS manual and your agency policy before relying on a code.</div>",
        "reveal": "oasis_dc_scored_7"
      },
      {
        "title": "Think First: Special Situations",
        "content": "<p>Edge cases and what the response should be.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "oasis_dc_scored_9",
          "items": [
            {
              "scen": "A patient is seen once and declines further care.",
              "ask": "What do you do?",
              "opts": [
                "Create a discharge OASIS anyway",
                "Follow the single-visit episode rules in the manual",
                "Do nothing"
              ],
              "ans": 1,
              "why": "Ask your office which assessments are required. Do not create a discharge that the rules do not call for."
            },
            {
              "scen": "A patient has a 2-day observation stay and comes home.",
              "ask": "What is required?",
              "opts": [
                "Transfer OASIS",
                "No transfer OASIS, care continues"
              ],
              "ans": 1,
              "why": "Observation is not an inpatient admission, so care continues."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Special Situations",
        "content": "",
        "reveal": "oasis_dc_scored_9"
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
        "title": "Think First: Element 1: Timing and Who Performed It",
        "content": "<p>A qualified therapist must perform the functional reassessment at least every 30 days.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "therapy_reeval_scored_1",
          "items": [
            {
              "scen": "PT reassesses on day 27 and signs it.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 0,
              "why": "A therapist performed it inside 30 days."
            },
            {
              "scen": "The PTA writes a progress summary on day 29.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 2,
              "why": "A PTA cannot perform the reassessment."
            },
            {
              "scen": "The PT reassesses on day 36.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 2,
              "why": "It is past 30 days. Document the reason and reassess now."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Element 1: Timing and Who Performed It",
        "content": "",
        "reveal": "therapy_reeval_scored_1"
      },
      {
        "title": "Think First: Element 2: Measures Compared With Baseline",
        "content": "<div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "therapy_reeval_scored_3",
          "items": [
            {
              "scen": "Gait 40 ft walker CGA at evaluation; 120 ft walker supervision now. Same test and setup.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 0,
              "why": "Same measure, both values, easy to compare."
            },
            {
              "scen": "Patient is walking better.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 2,
              "why": "No numbers and no baseline."
            },
            {
              "scen": "Gait 120 ft now, but the baseline is not stated.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 1,
              "why": "Current value only, so the change cannot be seen."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Element 2: Measures Compared With Baseline",
        "content": "",
        "reveal": "therapy_reeval_scored_3"
      },
      {
        "title": "Think First: Element 3: Goal Status",
        "content": "<div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "therapy_reeval_scored_5",
          "items": [
            {
              "scen": "Goal 1 met. Goal 2 at 60% of target. Goal 3 not met because of pain.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 0,
              "why": "Each goal has a status and a reason."
            },
            {
              "scen": "Goals continue.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 2,
              "why": "No goal-by-goal status."
            },
            {
              "scen": "Goals are stated as met but the data shows the target was not reached.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 2,
              "why": "The words and the data disagree."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Element 3: Goal Status",
        "content": "",
        "reveal": "therapy_reeval_scored_5"
      },
      {
        "title": "Think First: Element 4: Skilled Need and Effectiveness",
        "content": "<div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "therapy_reeval_scored_7",
          "items": [
            {
              "scen": "Gains in gait and transfers since evaluation. Needs skilled guarding and cueing to progress to stairs safely.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 0,
              "why": "It shows both progress and why a therapist is needed."
            },
            {
              "scen": "Patient tolerates treatment well.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 2,
              "why": "Says nothing about progress or skill."
            },
            {
              "scen": "Three weeks with no change, continue same plan.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 2,
              "why": "A plateau requires a change in approach or a discharge plan."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Element 4: Skilled Need and Effectiveness",
        "content": "",
        "reveal": "therapy_reeval_scored_7"
      },
      {
        "title": "Think First: Element 5: Plan Update and Communication",
        "content": "<div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "therapy_reeval_scored_9",
          "items": [
            {
              "scen": "Frequency 2x/week for 3 weeks then 1x/week. New goal: 4 steps with rail. Sent to physician.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 0,
              "why": "Plan changed with the clinical result, and communicated."
            },
            {
              "scen": "Frequency unchanged and goals show walk 25 ft though the patient walks 150 ft.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 2,
              "why": "The goals are out of date."
            },
            {
              "scen": "Plan updated but not sent to the PTA.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 1,
              "why": "The PTA has to follow the new plan."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Element 5: Plan Update and Communication",
        "content": "",
        "reveal": "therapy_reeval_scored_9"
      },
      {
        "title": "Think First: Element 6: Consistency With Other Records",
        "content": "<div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "therapy_reeval_scored_11",
          "items": [
            {
              "scen": "Re-evaluation says supervision on stairs and the last three notes say supervision.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 0,
              "why": "The records agree."
            },
            {
              "scen": "Re-evaluation says independent walking, while the OASIS says walker with supervision.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 2,
              "why": "Reconcile the two before signing."
            },
            {
              "scen": "The same text as last month with the same numbers.",
              "ask": "Rate this element.",
              "opts": [
                "Meets",
                "Partly meets",
                "Does not meet"
              ],
              "ans": 2,
              "why": "Looks copied forward. Measure again."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Element 6: Consistency With Other Records",
        "content": "",
        "reveal": "therapy_reeval_scored_11"
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
        "title": "Think First: Items 4 to 6: Visit Basics",
        "content": "<div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "daily_note_scored_1",
          "items": [
            {
              "scen": "Item 4. Note shows time in 10:05, time out 10:50, signed Jane Doe PTA 10/26.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "Times and a signature with credentials are all present."
            },
            {
              "scen": "Item 4. Time in is listed and time out is missing.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 1,
              "why": "Both times are needed."
            },
            {
              "scen": "Item 5. Order is 3x/week; the note is for the third visit this week.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "The visit fits the ordered frequency."
            },
            {
              "scen": "Item 5. Order is 2x/week; this is the fourth visit and no explanation is given.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 1,
              "why": "It exceeds the order with no reason or new order."
            },
            {
              "scen": "Item 6. Treatment per PT evaluation of 10/20/2026, goals 1 and 3.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "It names the evaluation and the goals."
            },
            {
              "scen": "Item 6. Note does not mention the plan or evaluation.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 1,
              "why": "The reviewer cannot tie the visit to a plan."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Items 4 to 6: Visit Basics",
        "content": "",
        "reveal": "daily_note_scored_1"
      },
      {
        "title": "Think First: Items 7 to 10: Skilled Need",
        "content": "<div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "daily_note_scored_3",
          "items": [
            {
              "scen": "Item 7. Sit to stand and bed to chair x5 with verbal cues.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "Names specific interventions."
            },
            {
              "scen": "Item 7. Therapeutic exercise performed.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 1,
              "why": "Not specific."
            },
            {
              "scen": "Item 8. Patient unsafe without clinician guarding due to dizziness on rising.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "It explains why skill was needed."
            },
            {
              "scen": "Item 8. Patient did her exercises with her daughter watching.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 1,
              "why": "A caregiver could do it. No skilled judgment is shown."
            },
            {
              "scen": "Item 9. Standing balance on foam 3 x 30 sec, contact guard, one loss of balance corrected.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "It gives sets, time, surface, assist and event."
            },
            {
              "scen": "Item 10. Gait training 150 ft supports goal 2 walk 150 ft.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "Intervention is tied to a goal."
            },
            {
              "scen": "Item 10. Massage and ultrasound, with no goal on the plan for either.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 1,
              "why": "Nothing connects them to a goal."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Items 7 to 10: Skilled Need",
        "content": "",
        "reveal": "daily_note_scored_3"
      },
      {
        "title": "Think First: Items 11 to 14: Data, Response and Progress",
        "content": "<div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "daily_note_scored_5",
          "items": [
            {
              "scen": "Item 11. Gait 120 ft with walker; last visit 90 ft.",
              "ask": "Item 11",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "A value that can be compared."
            },
            {
              "scen": "Item 11. Patient doing well.",
              "ask": "Item 11",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 1,
              "why": "No measurable data."
            },
            {
              "scen": "Item 12. Patient fatigued after 2 sets and took 90 sec rests.",
              "ask": "Item 12",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "It records response."
            },
            {
              "scen": "Item 13. Gait up 30 ft since last visit.",
              "ask": "Item 13",
              "opts": [
                "Progressing",
                "Plateau",
                "Declining",
                "Unclear"
              ],
              "ans": 0,
              "why": "Data shows gain."
            },
            {
              "scen": "Item 13. Same distance for 3 weeks.",
              "ask": "Item 13",
              "opts": [
                "Progressing",
                "Plateau",
                "Declining",
                "Unclear"
              ],
              "ans": 1,
              "why": "No change in the data."
            },
            {
              "scen": "Item 13. Note reports the patient cannot walk as far as last week.",
              "ask": "Item 13",
              "opts": [
                "Progressing",
                "Plateau",
                "Declining",
                "Unclear"
              ],
              "ans": 2,
              "why": "Data shows a loss."
            },
            {
              "scen": "Item 14. \"Significant improvement in balance\" while the balance score is unchanged.",
              "ask": "Item 14",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 1,
              "why": "The words do not match the data."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Items 11 to 14: Data, Response and Progress",
        "content": "",
        "reveal": "daily_note_scored_5"
      },
      {
        "title": "Think First: Items 15 to 18: Homebound, Safety and Consistency",
        "content": "<div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "daily_note_scored_7",
          "items": [
            {
              "scen": "Item 15. Needs walker and standby to leave home. Walking 40 ft to the car causes shortness of breath.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "It supports homebound status."
            },
            {
              "scen": "Item 15. Patient drove to the store yesterday and note does not address it.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 1,
              "why": "Contradicts homebound status."
            },
            {
              "scen": "Item 16. Denies falls since last visit. New dizziness this morning.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "Falls and symptoms were asked and recorded."
            },
            {
              "scen": "Item 17. Daughter instructed in HEP, return demonstration given.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "Education is documented."
            },
            {
              "scen": "Item 18. Note says independent walking while the evaluation says contact guard.",
              "ask": "Answer the review form item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "Item 18 asks whether something contradicts, so Yes is a flag."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Items 15 to 18: Homebound, Safety and Consistency",
        "content": "",
        "reveal": "daily_note_scored_7"
      },
      {
        "title": "Think First: Items 19 to 22: Flags for the Supervising PT",
        "content": "<p>A Yes on any flag sends the note to the supervising PT.</p><div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "daily_note_scored_9",
          "items": [
            {
              "scen": "Item 19. Patient needs max assist for transfers today, up from supervision.",
              "ask": "Answer the flag item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "Major decline."
            },
            {
              "scen": "Item 20. Patient fell last night, no injury.",
              "ask": "Answer the flag item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "A fall always goes to the PT."
            },
            {
              "scen": "Item 21. Goal of 150 ft has been met for three visits in a row.",
              "ask": "Answer the flag item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "Close to or at goal means the PT must review."
            },
            {
              "scen": "Item 22. New knee swelling and pain with weight bearing.",
              "ask": "Answer the flag item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 0,
              "why": "May need reassessment or an order."
            },
            {
              "scen": "Items 19 to 22. Routine visit with steady progress.",
              "ask": "Answer the flag item.",
              "opts": [
                "Yes",
                "No"
              ],
              "ans": 1,
              "why": "No flag."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Items 19 to 22: Flags for the Supervising PT",
        "content": "",
        "reveal": "daily_note_scored_9"
      },
      {
        "title": "Think First: Item 23: Overall Result",
        "content": "<div class=\"callout\">Read each case and think about what the score is and why. Pick your answer for every case, then continue. The next slide shows the correct answers and the reasons.</div>",
        "guess": {
          "id": "daily_note_scored_11",
          "items": [
            {
              "scen": "All elements present, no flags.",
              "ask": "Select the overall result.",
              "opts": [
                "Pass",
                "Needs correction",
                "Escalate to PT"
              ],
              "ans": 0,
              "why": "Nothing needs correction."
            },
            {
              "scen": "Time out missing, no data point, no flags.",
              "ask": "Select the overall result.",
              "opts": [
                "Pass",
                "Needs correction",
                "Escalate to PT"
              ],
              "ans": 1,
              "why": "The PTA can fix these gaps."
            },
            {
              "scen": "Complete note, but a fall occurred.",
              "ask": "Select the overall result.",
              "opts": [
                "Pass",
                "Needs correction",
                "Escalate to PT"
              ],
              "ans": 2,
              "why": "The documentation may be fine, but the PT has to act on the fall."
            },
            {
              "scen": "Missing data and also a new fall.",
              "ask": "Select the overall result.",
              "opts": [
                "Pass",
                "Needs correction",
                "Escalate to PT"
              ],
              "ans": 2,
              "why": "A flag outranks a correction. Include the correction in the notes."
            }
          ]
        }
      },
      {
        "title": "Answers and Reasons: Item 23: Overall Result",
        "content": "",
        "reveal": "daily_note_scored_11"
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
