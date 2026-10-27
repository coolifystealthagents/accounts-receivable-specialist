import type { ResearchPost } from './types';

export const october27ResearchPosts: ResearchPost[] = [
  {
    "slug": "ars-escalation-wait",
    "title": "Where Does Accounts Receivable And Collections Operations Escalation Time Go?",
    "summary": "A protocol separating owner wait, dependency wait, system delay, and rework in accounts receivable and collections operations escalations.",
    "cluster": "Accounts Receivable Operations",
    "publishedAt": "2026-10-27",
    "readTime": "6 min read",
    "thumbnail": "/daily27/accountsreceivablespecialist/ars-escalation-wait.webp",
    "finding": "A protocol separating owner wait, dependency wait, system delay, and rework in accounts receivable and collections operations escalations.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "How much escalation time is spent waiting for an internal owner, an external dependency, a system action, or rework? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Escalations opened during a defined month, including resolved, open, and reopened items.",
          "The unit is one escalation and its state intervals. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure median hours by wait reason, oldest open escalation, and share waiting on a dependency owner.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Each case needs the issue and time raised, the dependency and owner, the state changes, the response target, and the resolution confirmation. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
        ]
      },
      {
        "heading": "Reviewer independence",
        "paragraphs": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the accounts receivable and collections operations record is thin. It can support a dependency-specific response target and an escalation owner review.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol describes the escalation record, not whether the resolution was technically correct."
        ]
      },
      {
        "heading": "Limitations and error",
        "paragraphs": [
          "A state change may be logged after the fact. A dependency delay can be hidden inside owner wait. Small samples may miss the oldest cases.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Public service and records guidance frames the measurement question, not a benchmark. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "heading": "Governance and stopping",
        "paragraphs": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the accounts receivable manager.",
          "Pause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
        ]
      },
      {
        "heading": "Applying the protocol to accounts receivable and collections operations",
        "paragraphs": [
          "The protocol is written for finance and accounts receivable teams. It asks what the accounts receivable and collections operations record can show in a defined window, not whether a particular staffing model caused an outcome.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "paragraphs": [
          "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.",
          "A count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
        ]
      },
      {
        "heading": "Replication note for accounts receivable and collections operations",
        "paragraphs": [
          "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.",
          "If the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
        ]
      },
      {
        "heading": "Additional consideration for accounts receivable and collections operations",
        "paragraphs": [
          "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.",
          "Review the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
        ]
      }
    ],
    "sources": [
      {
        "label": "FINRA Rule 4511",
        "url": "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4511"
      },
      {
        "label": "SEC Investment Adviser Compliance",
        "url": "https://www.sec.gov/investment/investment-adviser-compliance"
      },
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "SEC Recordkeeping Guidance",
        "url": "https://www.sec.gov/rules-regulations/staff-guidance/division-investment-management-frequently-asked-questions"
      },
      {
        "label": "U.S. Department of Labor, FLSA Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "label": "CMS Medicare Learning Network",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "NALS, The Association for Legal Professionals",
        "url": "https://www.nals.org/"
      },
      {
        "label": "American Bar Association",
        "url": "https://www.americanbar.org/"
      },
      {
        "label": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      },
      {
        "label": "GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ]
  },
  {
    "slug": "ars-vendor-cycle",
    "title": "How Complete Is the Accounts Receivable And Collections Operations Vendor Onboarding Packet at First Review?",
    "summary": "A protocol measuring whether accounts receivable and collections operations vendor packets carry identity, insurance, security, access, and owner acceptance before work starts.",
    "cluster": "Accounts Receivable Operations",
    "publishedAt": "2026-10-27",
    "readTime": "6 min read",
    "thumbnail": "/daily27/accountsreceivablespecialist/ars-vendor-cycle.webp",
    "finding": "A protocol measuring whether accounts receivable and collections operations vendor packets carry identity, insurance, security, access, and owner acceptance before work starts.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "What share of vendor onboarding packets are complete at first review, and which missing item delays the start? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Vendors entering onboarding during a defined quarter, including withdrawn and delayed vendors.",
          "The unit is one vendor packet at first review. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure complete-at-first-review rate, returns by missing item, and days from packet start to owner acceptance.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Each case needs the vendor and scope, the required documents, the security review, the access list, and the owner acceptance. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
        ]
      },
      {
        "heading": "Reviewer independence",
        "paragraphs": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the accounts receivable and collections operations record is thin. It can support a packet completeness checklist and a start-date gate.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures packet completeness, not whether the vendor should have been selected."
        ]
      },
      {
        "heading": "Limitations and error",
        "paragraphs": [
          "A vendor may start work before the packet is complete. A document may be present but expired. The sample may overrepresent cooperative vendors.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Public procurement and records guidance frames the documentation question. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "heading": "Governance and stopping",
        "paragraphs": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the accounts receivable manager.",
          "Pause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
        ]
      },
      {
        "heading": "Applying the protocol to accounts receivable and collections operations",
        "paragraphs": [
          "The protocol is written for finance and accounts receivable teams. It asks what the accounts receivable and collections operations record can show in a defined window, not whether a particular staffing model caused an outcome.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "paragraphs": [
          "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.",
          "A count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
        ]
      },
      {
        "heading": "Replication note for accounts receivable and collections operations",
        "paragraphs": [
          "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.",
          "If the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
        ]
      },
      {
        "heading": "Additional consideration for accounts receivable and collections operations",
        "paragraphs": [
          "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.",
          "Review the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
        ]
      }
    ],
    "sources": [
      {
        "label": "SEC Investment Adviser Compliance",
        "url": "https://www.sec.gov/investment/investment-adviser-compliance"
      },
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "FINRA Rule 4511",
        "url": "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4511"
      },
      {
        "label": "SEC Recordkeeping Guidance",
        "url": "https://www.sec.gov/rules-regulations/staff-guidance/division-investment-management-frequently-asked-questions"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      },
      {
        "label": "U.S. Department of Labor, FLSA Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "label": "CMS Medicare Learning Network",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "NALS, The Association for Legal Professionals",
        "url": "https://www.nals.org/"
      },
      {
        "label": "American Bar Association",
        "url": "https://www.americanbar.org/"
      }
    ]
  },
  {
    "slug": "ars-capacity-error",
    "title": "How Accurate Is Accounts Receivable And Collections Operations Capacity Forecasting?",
    "summary": "A protocol comparing forecast demand and handling time with actual accounts receivable and collections operations queue performance.",
    "cluster": "Accounts Receivable Operations",
    "publishedAt": "2026-10-27",
    "readTime": "6 min read",
    "thumbnail": "/daily27/accountsreceivablespecialist/ars-capacity-error.webp",
    "finding": "A protocol comparing forecast demand and handling time with actual accounts receivable and collections operations queue performance.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "How far does forecast capacity differ from actual demand and handling time, and which work type drives the error? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Forecast weeks in a defined quarter, including normal, seasonal, and disrupted weeks.",
          "The unit is one work type and one forecast week. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure absolute forecast error by work type, weeks with a capacity gap, and deferred items by priority.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Each case needs the forecast and assumptions, the actual volume, the handling time, the blocked time, and the deferral decision. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
        ]
      },
      {
        "heading": "Reviewer independence",
        "paragraphs": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the accounts receivable and collections operations record is thin. It can support a capacity review and a priority deferral rule.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures forecast accuracy, not individual productivity."
        ]
      },
      {
        "heading": "Limitations and error",
        "paragraphs": [
          "A new work type may have no history. Handling time may exclude rework. A seasonal week can distort a short comparison.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Operations and workforce guidance frames the capacity question, not a staffing recommendation. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "heading": "Governance and stopping",
        "paragraphs": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the accounts receivable manager.",
          "Pause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
        ]
      },
      {
        "heading": "Applying the protocol to accounts receivable and collections operations",
        "paragraphs": [
          "The protocol is written for finance and accounts receivable teams. It asks what the accounts receivable and collections operations record can show in a defined window, not whether a particular staffing model caused an outcome.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "paragraphs": [
          "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.",
          "A count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
        ]
      },
      {
        "heading": "Replication note for accounts receivable and collections operations",
        "paragraphs": [
          "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.",
          "If the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
        ]
      },
      {
        "heading": "Additional consideration for accounts receivable and collections operations",
        "paragraphs": [
          "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.",
          "Review the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
        ]
      }
    ],
    "sources": [
      {
        "label": "SEC Recordkeeping Guidance",
        "url": "https://www.sec.gov/rules-regulations/staff-guidance/division-investment-management-frequently-asked-questions"
      },
      {
        "label": "FINRA Rule 4511",
        "url": "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4511"
      },
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "SEC Investment Adviser Compliance",
        "url": "https://www.sec.gov/investment/investment-adviser-compliance"
      },
      {
        "label": "NALS, The Association for Legal Professionals",
        "url": "https://www.nals.org/"
      },
      {
        "label": "GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      },
      {
        "label": "American Bar Association",
        "url": "https://www.americanbar.org/"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "U.S. Department of Labor, FLSA Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      }
    ]
  },
  {
    "slug": "ars-cross-training-coverage",
    "title": "Does Cross-Training Cover the Accounts Receivable And Collections Operations Queue?",
    "summary": "A protocol testing whether every accounts receivable and collections operations lane has a backup who can complete the task without help.",
    "cluster": "Accounts Receivable Operations",
    "publishedAt": "2026-10-27",
    "readTime": "6 min read",
    "thumbnail": "/daily27/accountsreceivablespecialist/ars-cross-training-coverage.webp",
    "finding": "A protocol testing whether every accounts receivable and collections operations lane has a backup who can complete the task without help.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "What share of critical accounts receivable and collections operations lanes have a tested backup, and which lanes remain single-person dependencies? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Critical queues and roles in a defined period, including leave and turnover events.",
          "The unit is one lane and one backup test. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure lanes with a tested backup, backup tasks completed without help, and single-person lanes.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Each case needs the lane and task, the primary owner, the backup, the practice date, and the result and remaining questions. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
        ]
      },
      {
        "heading": "Reviewer independence",
        "paragraphs": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the accounts receivable and collections operations record is thin. It can support a coverage map and a practice calendar.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures task coverage, not overall performance."
        ]
      },
      {
        "heading": "Limitations and error",
        "paragraphs": [
          "Access may exist without task competence. A practice task may be easier than production. A recent role change may invalidate the map.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Workforce and internal-control guidance frames the coverage question. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "heading": "Governance and stopping",
        "paragraphs": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the accounts receivable manager.",
          "Pause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
        ]
      },
      {
        "heading": "Applying the protocol to accounts receivable and collections operations",
        "paragraphs": [
          "The protocol is written for finance and accounts receivable teams. It asks what the accounts receivable and collections operations record can show in a defined window, not whether a particular staffing model caused an outcome.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "paragraphs": [
          "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.",
          "A count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
        ]
      },
      {
        "heading": "Replication note for accounts receivable and collections operations",
        "paragraphs": [
          "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.",
          "If the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
        ]
      },
      {
        "heading": "Additional consideration for accounts receivable and collections operations",
        "paragraphs": [
          "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.",
          "Review the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
        ]
      }
    ],
    "sources": [
      {
        "label": "SEC Recordkeeping Guidance",
        "url": "https://www.sec.gov/rules-regulations/staff-guidance/division-investment-management-frequently-asked-questions"
      },
      {
        "label": "SEC Investment Adviser Compliance",
        "url": "https://www.sec.gov/investment/investment-adviser-compliance"
      },
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "FINRA Rule 4511",
        "url": "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4511"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "NALS, The Association for Legal Professionals",
        "url": "https://www.nals.org/"
      },
      {
        "label": "GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "U.S. Department of Labor, FLSA Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "label": "American Bar Association",
        "url": "https://www.americanbar.org/"
      },
      {
        "label": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      }
    ]
  },
  {
    "slug": "ars-retention-compliance",
    "title": "Do Accounts Receivable And Collections Operations Records Follow the Retention Schedule?",
    "summary": "A protocol measuring whether accounts receivable and collections operations records are kept, reviewed, and disposed of according to a written schedule.",
    "cluster": "Accounts Receivable Operations",
    "publishedAt": "2026-10-27",
    "readTime": "6 min read",
    "thumbnail": "/daily27/accountsreceivablespecialist/ars-retention-compliance.webp",
    "finding": "A protocol measuring whether accounts receivable and collections operations records are kept, reviewed, and disposed of according to a written schedule.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "What share of sampled accounts receivable and collections operations records follow the retention schedule, and where do holds or backups change the expected outcome? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Records created or due for disposal in a defined quarter, including held and archived items.",
          "The unit is one record class and one retention decision. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure records disposed on schedule, records retained past schedule without a hold, and records with a verified disposal.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Each case needs the record class and system, the retention basis, the hold status, the disposal decision, and the confirmation. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
        ]
      },
      {
        "heading": "Reviewer independence",
        "paragraphs": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the accounts receivable and collections operations record is thin. It can support a retention schedule review and a disposal verification.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures schedule compliance, not whether a specific legal hold was correct."
        ]
      },
      {
        "heading": "Limitations and error",
        "paragraphs": [
          "A backup may retain a copy after primary disposal. A legal hold may be recorded outside the system. A record may be misclassified.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Public records-management guidance frames the retention question, not a legal conclusion. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "heading": "Governance and stopping",
        "paragraphs": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the accounts receivable manager.",
          "Pause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
        ]
      },
      {
        "heading": "Applying the protocol to accounts receivable and collections operations",
        "paragraphs": [
          "The protocol is written for finance and accounts receivable teams. It asks what the accounts receivable and collections operations record can show in a defined window, not whether a particular staffing model caused an outcome.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "paragraphs": [
          "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.",
          "A count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
        ]
      },
      {
        "heading": "Replication note for accounts receivable and collections operations",
        "paragraphs": [
          "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.",
          "If the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
        ]
      },
      {
        "heading": "Additional consideration for accounts receivable and collections operations",
        "paragraphs": [
          "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.",
          "Review the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
        ]
      }
    ],
    "sources": [
      {
        "label": "FINRA Rule 4511",
        "url": "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4511"
      },
      {
        "label": "SEC Recordkeeping Guidance",
        "url": "https://www.sec.gov/rules-regulations/staff-guidance/division-investment-management-frequently-asked-questions"
      },
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "SEC Investment Adviser Compliance",
        "url": "https://www.sec.gov/investment/investment-adviser-compliance"
      },
      {
        "label": "GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "U.S. Department of Labor, FLSA Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "label": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      },
      {
        "label": "CMS Medicare Learning Network",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "NALS, The Association for Legal Professionals",
        "url": "https://www.nals.org/"
      }
    ]
  }
];
