import type { ResearchPost } from './types';

export const november08ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": "how-complete-is-the-remittance-advice-on-lockbox-payments",
    "title": "How complete is the remittance advice on lockbox payments?",
    "summary": "A proposed protocol for measuring which fields a lockbox remittance supplies and which ones the cash application team has to infer.",
    "cluster": "Cash application",
    "publishedAt": "2026-11-08",
    "readTime": "10 min read",
    "finding": "The study would test whether a remittance batch can be applied from its own evidence, without an analyst guessing the payer or the invoice.",
    "thumbnail": "/thumbnails/november-08/how-complete-is-the-remittance-advice-on-lockbox-payments.webp",
    "sections": [
      {
        "heading": "Protocol status and question",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks how often a lockbox remittance supplies enough information to identify the payer, the invoice, and the amount without an analyst inference. The answer would describe the evidence a cash application team actually receives, not the evidence its policy assumes. Record who approved the question and when. A later reviewer should be able to see what the study was allowed to conclude.",
          "The sponsor should state in advance which decisions the result could inform. A finding about missing payer fields might support an intake change, while a finding about missing invoice detail might support a customer communication change. The protocol cannot decide whether a customer is creditworthy or whether a payment should be written off. Write the intended use in one sentence so the scope cannot drift. The sponsor should record that decision before collection starts."
        ]
      },
      {
        "heading": "Population and observation unit",
        "paragraphs": [
          "Define the population as all lockbox receipts processed in a stated window, with the bank, the currency, and the account included in the frame. The observation unit is one receipt record, not one deposit batch, because a batch can mix several levels of evidence. Receipts that arrive outside the lockbox should be excluded and counted separately. Write the frame as a dated list so a later reviewer can rebuild it. Describe the unit in one sentence that a new reviewer can apply.",
          "Freeze the inclusion and exclusion rules before looking at outcomes. A receipt with no remittance page is still part of the population, because the absence is the phenomenon under study. A duplicate scan of the same receipt should be linked to the original rather than counted twice. Missing records should remain visible in the denominator. Keep duplicate and missing records visible in the denominator."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define payer completeness as the presence of a legal name and a customer identifier that match an approved master record. Define invoice completeness as the presence of at least one invoice number or a remittance reference that the ledger can resolve. Define amount completeness as a stated payment amount that reconciles to the bank record. Each definition needs an example and a counterexample. A definition that two reviewers read differently is not ready.",
          "Report the measures separately and together. A receipt can identify the payer but not the invoice, and that combination is more useful than a single percentage. Also record the source of each field: remittance page, bank reference, customer portal, or analyst inference. The source distinguishes evidence from recovery. Write each definition beside the field it governs."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every classification should link to the receipt image, the bank record, and the customer master entry used to verify it. A field counts as present only when the reviewer can see it in a permitted source. An analyst's memory or a later chat message is not sufficient evidence, even when it turns out to be correct. A summary without the source is not evidence. Record the date the evidence was checked.",
          "Use a versioned data dictionary with field names, permitted sources, and missing-value codes. Unknown, not applicable, and unavailable should be distinct. A receipt that has no remittance page is not the same as one whose page is illegible. The distinction affects the recommendation that follows. Record the date the evidence was checked."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "A census of one month is preferable to a small sample when the volume is manageable. If sampling is necessary, stratify by bank, customer type, and receipt amount so the common and uncommon cases are both represented. Select the sample before reviewing outcomes and keep a log of replacements. Do not replace a hard case with an easier one. Log every replacement and the reason for it.",
          "Train reviewers on a common set of ten receipts and compare their classifications before the main collection starts. Resolve disagreements about what counts as present. During collection, preserve the first classification and record any later correction separately. The initial judgment is part of the evidence about how difficult the classification is. Do not replace a hard case with an easier one."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report counts and rates for each field, with the denominator and the observation window beside every number. Show the combination of fields needed for a clean application, not only the average completeness. A high payer rate can hide a low invoice rate, and the combination is what determines whether the receipt can be applied. Break the result down by the groups named in the protocol. Name the counterexamples as well as the main pattern.",
          "Present the results by source and by bank so the reader can see where the gap originates. Avoid ranking customers or analysts unless the study was designed to compare them. The useful output is a description of the evidence supply and a short list of process questions, not a verdict about individual performance. Report counts with rates and keep the denominator visible. Break the result down by the groups named in the protocol."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The protocol does not measure whether a receipt was applied correctly, only whether the evidence was sufficient to apply it. It may miss receipts that were resolved before the study window or through a channel outside the lockbox. Reviewer learning during collection can make later classifications more consistent than earlier ones. Explain how selection may have shaped the sample. Record any policy or system change during the window.",
          "A change in bank formatting or customer behavior during the window can bias the result. Record any known change and shorten the window if necessary. The finding should state its population and date range clearly, because remittance quality can shift with a single customer migration. Do not generalize beyond the documented frame. Explain how selection may have shaped the sample."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Run the review quarterly if the lockbox mix is stable, or after any bank or portal change. Compare the same measures across periods and explain any change in the frame. A sudden improvement may reflect a process fix or a change in which receipts are included. Version the protocol when the method changes. Keep the same window length so the comparison means something.",
          "Keep the protocol and the data dictionary with the results so the next review can repeat the method. Assign an owner for the follow-up questions and a date for the next review. The protocol is useful only if it produces a decision about what to change and a way to check whether the change worked. Compare the result with the prior period and explain the change. Store the data and the protocol together for the next pass."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      },
      {
        "label": "IRS Publication 583, Starting a Business and Keeping Records",
        "url": "https://www.irs.gov/publications/p583"
      },
      {
        "label": "Financial Accounting Standards Board",
        "url": "https://www.fasb.org/"
      }
    ]
  },
  {
    "slug": "how-often-do-credit-holds-delay-orders-that-later-pay-on-time",
    "title": "How often do credit holds delay orders that later pay on time?",
    "summary": "A proposed protocol for measuring hold frequency, delay length, and the share of held orders that eventually pay within terms.",
    "cluster": "Credit",
    "publishedAt": "2026-11-08",
    "readTime": "10 min read",
    "finding": "The study would test whether a credit hold prevents real exposure or mostly delays orders from customers who would have paid on time.",
    "thumbnail": "/thumbnails/november-08/how-often-do-credit-holds-delay-orders-that-later-pay-on-time.webp",
    "sections": [
      {
        "heading": "Protocol status and question",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks how often a credit hold delays an order, how long the delay lasts, and what share of held orders are eventually paid within the agreed terms. The result would help a finance team judge whether its trigger is calibrated to actual risk. The sponsor should record that decision before collection starts. If the decision changes, version the protocol rather than editing the old one.",
          "The protocol cannot decide a credit policy on its own. It can describe the relationship between the hold, the delay, and the later payment behavior in a stated population. A sponsor should name the decision the result might inform before collection begins. Write the intended use in one sentence so the scope cannot drift. A later reviewer should be able to see what the study was allowed to conclude."
        ]
      },
      {
        "heading": "Population and observation unit",
        "paragraphs": [
          "Define the population as all orders that reached the release gate during a stated window, including orders that were not held. The observation unit is one order, with the customer, amount, order date, hold date, release date, and payment date linked. Orders that were cancelled before release should be counted separately rather than dropped. Name the system that produced the frame and the export time. Record every exclusion with its reason and the date it was applied.",
          "Freeze the rules for orders that were held more than once and for orders that were released and then held again. A repeat hold is not a new customer relationship, but it is a separate delay event. Record both the order-level and the event-level view so the analysis can distinguish them. Record every exclusion with its reason and the date it was applied. Keep duplicate and missing records visible in the denominator."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define a hold as a recorded stop at the release gate with a stated trigger and a named release authority. Define delay as the elapsed working time between the hold and the release or cancellation. Define on-time payment as payment received by the due date in the contract, adjusted for any approved extension. Record the definition version with the data so the check can be repeated. Keep the definition stable for the whole window.",
          "Report the hold rate, the median and range of delay, and the payment outcome by hold reason. A single average delay can hide a small number of very long holds. Use counts alongside rates and keep the denominator visible. The measures should be reproducible from the order and payment records. Separate missing, unknown, and not applicable values."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Link each hold to the order record, the trigger value, and the release approval. A hold that exists only in a sales conversation should be treated as missing evidence, not as a hold. Payment evidence should come from the cash application record rather than from a customer's statement. Use stable references rather than personal folder names. Keep confidential records behind a keyed reference.",
          "Where the trigger value changed during the hold, record the value at the start and at release. A customer who paid during the hold may have changed the risk picture, and the analysis should show that. Preserve the original classification even if a later reviewer disagrees with it. Record the date the evidence was checked. Keep the original record even when a later correction is added."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use a census of the window when the order volume is manageable. If sampling is required, stratify by customer size, order value, and hold reason so the study does not overrepresent one segment. Select the sample before looking at payment outcomes to avoid choosing only interesting cases. Do not replace a hard case with an easier one. Log every replacement and the reason for it.",
          "Pilot the data collection on ten orders and compare the reviewers' classifications. Clarify what counts as a working day and how holidays are treated. Record any manual reconstruction of dates, because reconstructed data may be less reliable than system timestamps. Record the first classification before discussion. Compare two reviewers on an overlap sample."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the hold rate and the delay distribution for the full population, then break the results down by trigger and customer segment. Show the share of held orders that paid on time, paid late, or remained unpaid at the end of the observation window. Do not imply causation from a simple comparison. Keep description and interpretation in separate sections. Avoid ranking people unless the design supports it.",
          "Describe the counterfactual limitation explicitly. A held order that paid on time might have paid on time without the hold, and an unheld order that defaulted might have been prevented by one. The result is a description of what happened, not proof of what the rule caused. Avoid ranking people unless the design supports it. Name the counterexamples as well as the main pattern."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "Selection effects are likely because holds are applied to accounts that already look risky. Customers may also change payment behavior when they learn an order is held. The observation window may be too short to see the final outcome for slow-paying accounts. Record any policy or system change during the window. Keep the limitation in the same sentence as the claim it qualifies.",
          "Record any policy change during the window, because a new trigger can change both the number of holds and the type of order held. Keep the original and revised rules in the report. The reader should be able to see whether the population is internally consistent. Explain how selection may have shaped the sample. Keep the limitation in the same sentence as the claim it qualifies."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a trigger change or at the same interval each year. Compare the same measures and explain any change in the population. A lower hold rate is not automatically better if it comes with more late payments. Set the next review date before the current one ends. Assign the follow-up to a named owner.",
          "Assign an owner for the follow-up decision and a date for the next review. The protocol should end with a specific question for the credit policy owner, not with a general recommendation to review the policy. Store the data and the protocol together for the next pass. Version the protocol when the method changes. Compare the result with the prior period and explain the change."
        ]
      }
    ],
    "sources": [
      {
        "label": "Federal Reserve Small Business Credit Survey",
        "url": "https://www.fedsmallbusiness.org/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      },
      {
        "label": "U.S. Census Bureau",
        "url": "https://www.census.gov/"
      }
    ]
  },
  {
    "slug": "how-much-of-the-aging-report-can-be-traced-to-a-source-document",
    "title": "How much of the aging report can be traced to a source document?",
    "summary": "A proposed protocol for testing whether each aging line can be supported by an invoice, a remittance, or a dated customer record.",
    "cluster": "Evidence Quality",
    "publishedAt": "2026-11-08",
    "readTime": "10 min read",
    "finding": "The study would test whether the aging report is an evidence-backed list or a summary that depends on records outside the report.",
    "thumbnail": "/thumbnails/november-08/how-much-of-the-aging-report-can-be-traced-to-a-source-document.webp",
    "sections": [
      {
        "heading": "Protocol status and question",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks what share of aging report lines can be traced to a source document that supports the balance and status shown. The answer would tell a finance team how much of its collections view is independently verifiable. Keep the protocol and its approval date with the data file. Record who approved the question and when.",
          "The protocol does not test whether a customer will pay. It tests whether the report line rests on evidence that a reviewer can inspect. The sponsor should name the operational decision the result could change, such as a cleanup project or a reporting control. Record who approved the question and when. A later reviewer should be able to see what the study was allowed to conclude."
        ]
      },
      {
        "heading": "Population and observation unit",
        "paragraphs": [
          "Define the population as every open line in a frozen aging export for a stated date. The unit is one line, identified by customer and invoice, not one customer or one file. Lines with a zero balance or a closed status should be excluded and counted. The frozen export should be saved before any cleanup begins. Check the frame against a second source before collection.",
          "Decide how to treat a customer with several invoices. Each invoice remains a separate line because each can have a different evidence status. A customer-level summary can be reported later, but it should not replace the line-level observation. Name the system that produced the frame and the export time. A count that cannot be rebuilt is not a population."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define traceability as the presence of a source record that supports the invoice amount, the open balance, and the current status. The source might be the invoice, a signed contract, a remittance, or a dated dispute record. A note that says customer will pay is not a source document for the balance. Keep the definition stable for the whole window. Separate missing, unknown, and not applicable values.",
          "Measure traceability separately for amount, status, and ownership. A line can have a valid invoice but no named owner, or a named owner but no evidence for the status. Report each dimension and the combination. The combination shows where a cleanup effort would have the most effect. Separate missing, unknown, and not applicable values."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every traceable line should link to a document that a second reviewer can open without asking the original analyst. Use a stable file reference or system link and record the date the link was checked. A screenshot of an email is weaker than the message itself, but it may be the only available evidence if the system does not retain the record. Link each classification to a document a second reviewer can open. Keep confidential records behind a keyed reference.",
          "Mark missing evidence as missing rather than inferring it from another line. If a customer-level statement supports the total but not the individual invoice, record that limitation. The study is about the report's traceability, so the quality of the underlying document matters as much as its existence. Keep confidential records behind a keyed reference. Mark reconstructed evidence as an estimate."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "A census is preferable for a small ledger. For a larger ledger, stratify by aging bucket, customer size, and owner so the sample reflects the report's composition. Select the sample before reviewing evidence and keep a log of any replacements. Do not replace a line just because its file is hard to find. Keep the sampling rule with the data file.",
          "Have two reviewers classify an overlap sample and compare their results. Discuss the cases where one counted a document as sufficient and the other did not. Update the definitions only if the change applies to the whole sample, and record the change date. The disagreement rate is itself a useful finding. State the final sample size and how it was reached."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report traceability by aging bucket and by owner, with counts and rates. A high overall rate can hide a weak bucket or a single owner with many unsupported lines. Show the missing-document categories separately so the reader can see whether the gap is a filing problem or a record-creation problem. Show the distribution, not only the average. Report counts with rates and keep the denominator visible.",
          "Present the results as a description of the report at a point in time. Avoid language that implies the customers are unwilling to pay or the team is careless. The finding is about evidence, and the recommendation should focus on the control that would make the evidence easier to produce. Avoid ranking people unless the design supports it. Name the counterexamples as well as the main pattern."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The study may overstate traceability if reviewers accept documents that do not actually support the balance. It may understate it if a valid document exists but is not linked to the line. The date of the export matters because later payments can change the status. Describe the missing-data rate and its likely direction. Name the records the study could not see.",
          "Confidentiality limits may prevent linking some documents in the research file. Use a reference key and keep the crosswalk in a restricted location. The report should say what was excluded for privacy and how that affects the result. Name the records the study could not see. Say what a second study would need to test."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a ledger cleanup or a reporting change. Use the same definitions and the same aging buckets so the comparison is meaningful. A second review can also test whether the cleanup reduced the missing-evidence rate. Store the data and the protocol together for the next pass. Set the next review date before the current one ends.",
          "Assign the follow-up to the owner of the reporting control and set a date. The protocol should produce a specific decision about which evidence to require at the next close, not a general instruction to improve documentation. Set the next review date before the current one ends. Compare the result with the prior period and explain the change. Record the decision the review is expected to inform."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Government Accountability Office, Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "IRS Publication 583, Starting a Business and Keeping Records",
        "url": "https://www.irs.gov/publications/p583"
      },
      {
        "label": "Financial Accounting Standards Board",
        "url": "https://www.fasb.org/"
      }
    ]
  },
  {
    "slug": "what-share-of-disputes-are-reopened-after-closure",
    "title": "What share of disputes are reopened after closure?",
    "summary": "A proposed protocol for tracking reopened disputes and identifying which closure evidence fails to hold.",
    "cluster": "Exception Control",
    "publishedAt": "2026-11-08",
    "readTime": "10 min read",
    "finding": "The study would test whether closed disputes stay closed or return because the original resolution did not address the customer's actual claim.",
    "thumbnail": "/thumbnails/november-08/what-share-of-disputes-are-reopened-after-closure.webp",
    "sections": [
      {
        "heading": "Protocol status and question",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks what share of closed disputes are reopened within a stated window and which closure evidence is associated with a return. The result would help a finance team distinguish a durable resolution from a temporary silence. A later reviewer should be able to see what the study was allowed to conclude. State plainly which decisions the protocol cannot support.",
          "The protocol cannot prove why a customer reopened a dispute. It can describe the pattern and point to the records that need a closer review. The sponsor should define the decision the result might inform, such as a change to the closure checklist. Write the intended use in one sentence so the scope cannot drift. A later reviewer should be able to see what the study was allowed to conclude."
        ]
      },
      {
        "heading": "Population and observation unit",
        "paragraphs": [
          "Define the population as all disputes closed during a stated window, with the customer, invoice, amount, and closure date recorded. The unit is one dispute, not one customer or one invoice. A dispute that is reopened and closed again remains one case with multiple closure events. A count that cannot be rebuilt is not a population. Keep duplicate and missing records visible in the denominator.",
          "Set the observation window long enough to capture the typical reopening period. If most reopenings happen within thirty days, a seven-day window will miss them. Record the reason for any dispute that leaves the population, such as a write-off or a legal referral. Name the system that produced the frame and the export time. Keep duplicate and missing records visible in the denominator."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define a dispute as a customer claim that changes the amount or timing of payment and requires a finance decision. Define closure as a recorded resolution with an owner, a date, and the evidence used. Define reopening as a new claim on the same invoice after closure, regardless of whether the amount changed. Give one example and one counterexample for every measure. Put the denominator and window beside every rate.",
          "Report the reopening rate overall and by closure type. A closure based on a customer promise may behave differently from one based on a credit memo or a corrected invoice. Include the time to reopening and the reason given by the customer. The reason is descriptive, not proof of cause. Give one example and one counterexample for every measure."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Link each closure to the resolution record, the approval, and the communication sent to the customer. A closure that exists only as a status change is weakly evidenced. A reopening should link to the new claim and the earlier closure so the reviewer can compare them. A summary without the source is not evidence. Use stable references rather than personal folder names.",
          "Where the customer's reason is ambiguous, record the exact words and the reviewer's interpretation separately. Do not convert a vague complaint into a specific cause. The study should preserve that uncertainty because it affects what the closure checklist can promise. Keep the original record even when a later correction is added. Link each classification to a document a second reviewer can open."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use all closed disputes in the window if the volume allows. If sampling is necessary, stratify by closure type, amount, and owner so the common paths are represented. Select cases before checking whether they were reopened to avoid bias toward interesting failures. Record the first classification before discussion. State the final sample size and how it was reached.",
          "Pilot the classification on ten cases and compare reviewers. Clarify whether a partial payment after closure counts as a reopening or a new payment event. Record the decision rule and apply it consistently. Select the sample before reviewing outcomes. Keep the sampling rule with the data file."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the reopening rate with the denominator and the observation window. Break the result down by closure type and by the evidence attached at closure. Show the number of cases that were reopened more than once, because a repeated case may indicate a different problem from a single return. Name the counterexamples as well as the main pattern. Show the distribution, not only the average.",
          "Present the findings as a description of closure durability, not as a judgment about individual analysts. A high reopening rate may reflect a customer behavior, a billing error, or an unclear closure rule. The report should name the possible causes and the records needed to test them. Show the distribution, not only the average. Write the limitation beside the finding it affects."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The study may miss reopenings that arrive through a different channel or a different invoice. It may also count a customer's follow-up question as a reopening when no amount changed. The definition should be narrow enough to be meaningful and broad enough to capture the real work. Say what a second study would need to test. Keep the limitation in the same sentence as the claim it qualifies.",
          "A policy change during the window can alter both closure behavior and reopening rates. Record the change and consider splitting the window. The report should state what it cannot see, including disputes resolved outside the recorded system. Name the records the study could not see. Say what a second study would need to test."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a closure checklist change and at the same interval each year. Compare the same closure types and the same observation window. A lower reopening rate is useful only if the closures still resolve the customer's claim. Set the next review date before the current one ends. Record the decision the review is expected to inform.",
          "Assign the follow-up to the owner of the dispute process and set a date. The protocol should end with a specific question about which evidence should be required before a dispute can be closed. Set the next review date before the current one ends. Store the data and the protocol together for the next pass. Close the review with one question for the process owner."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Government Accountability Office, Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "Financial Accounting Standards Board",
        "url": "https://www.fasb.org/"
      }
    ]
  },
  {
    "slug": "how-consistent-is-cash-application-across-two-bank-feeds",
    "title": "How consistent is cash application across two bank feeds?",
    "summary": "A proposed protocol for comparing how the same payment evidence is applied when it arrives through different bank feeds.",
    "cluster": "Reconciliation Quality",
    "publishedAt": "2026-11-08",
    "readTime": "10 min read",
    "finding": "The study would test whether the bank feed changes how quickly and how accurately a receipt reaches the right invoice.",
    "thumbnail": "/thumbnails/november-08/how-consistent-is-cash-application-across-two-bank-feeds.webp",
    "sections": [
      {
        "heading": "Protocol status and question",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks whether two bank feeds produce different cash application outcomes for comparable receipts. The result would help a finance team decide whether a feed change needs a different review rule. Keep the protocol and its approval date with the data file. State plainly which decisions the protocol cannot support.",
          "The protocol does not compare the banks as businesses. It compares the evidence and the handling of that evidence in one team's workflow. The sponsor should define the decision the result could inform, such as a matching threshold or a training change. The sponsor should record that decision before collection starts. Record who approved the question and when."
        ]
      },
      {
        "heading": "Population and observation unit",
        "paragraphs": [
          "Define the population as receipts from two named feeds during a stated window, limited to customers that appear in both feeds. The unit is one receipt, with the feed, the remittance fields, the application outcome, and the time to application recorded. Receipts from one-off customers should be excluded and counted. Write the frame as a dated list so a later reviewer can rebuild it. If the frame changes mid-study, keep the earlier version.",
          "Decide how to treat a payment that is split across feeds. Link the parts to one economic receipt and record the split. The analysis can compare the feed-level records and the linked receipt separately, but it should not double-count the same money. A count that cannot be rebuilt is not a population. Name the system that produced the frame and the export time."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define accuracy as the receipt being applied to the correct customer and invoice without a later reversal. Define timeliness as the elapsed working time from receipt availability to application. Define completeness as the share of required fields present in the feed's remittance data. Each definition needs a documented source and a review rule. Record the definition version with the data so the check can be repeated.",
          "Report the measures by feed and by customer segment. A feed that is slower overall may be faster for a subset of customers, and that difference may matter more than the average. Keep the counts visible beside every rate. A definition that two reviewers read differently is not ready. Record the definition version with the data so the check can be repeated."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Link each application to the bank record, the remittance, and the ledger entry. A correction should link to the original application and the reason for the change. Use timestamps from the systems where possible, and mark any reconstructed time as an estimate. Link each classification to a document a second reviewer can open. Keep the original record even when a later correction is added.",
          "If a receipt was applied manually, record the analyst and the evidence used. Manual work is not a failure by itself, but it needs to be visible because it may explain a difference between feeds. The study should distinguish a feed problem from a workflow problem. State what the evidence does not show. Use stable references rather than personal folder names."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use a census of the shared-customer receipts if the volume is manageable. Otherwise stratify by feed, customer size, and amount. Select the sample before looking at application outcomes and keep a log of replacements. Do not replace a slow or reversed application with a cleaner case. State the final sample size and how it was reached.",
          "Train reviewers on a common set of receipts and compare their classifications. Clarify how to treat a receipt that was applied and then moved to another invoice. Record the first application and the final application separately so the analysis can see both. Compare two reviewers on an overlap sample. Pilot the collection on ten records before the main pass."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report accuracy, timeliness, and completeness for each feed, with the denominator and window. Break the results down by remittance quality and by customer type. Show the reversals separately because a fast but reversed application is not a good outcome. Report counts with rates and keep the denominator visible. Show the distribution, not only the average.",
          "Avoid claiming that one bank is better. The result describes the interaction between the feed, the customer, and the team's process. A recommendation should name the specific field or rule that would reduce the difference. Name the counterexamples as well as the main pattern. Show the distribution, not only the average."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The two feeds may serve different customer mixes, which can explain part of the difference. The study should report the mix and avoid comparing averages without it. A feed change during the window can also disrupt the comparison. Keep the limitation in the same sentence as the claim it qualifies. Name the records the study could not see.",
          "Manual reconstruction of timestamps and the exclusion of one-off customers can bias the result. State both limits and keep the excluded records visible. The reader should be able to see how the population was built. Do not generalize beyond the documented frame. Describe the missing-data rate and its likely direction."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a feed change, a matching-rule change, or a significant customer migration. Use the same definitions and the same shared-customer frame. A second review can test whether a process change reduced the gap. Set the next review date before the current one ends. Close the review with one question for the process owner.",
          "Assign the follow-up to the cash application lead and set a date. The protocol should produce a specific decision about which feed fields to require or which matching rule to test next. Compare the result with the prior period and explain the change. Version the protocol when the method changes. Set the next review date before the current one ends."
        ]
      }
    ],
    "sources": [
      {
        "label": "Financial Accounting Standards Board",
        "url": "https://www.fasb.org/"
      },
      {
        "label": "IRS Publication 583, Starting a Business and Keeping Records",
        "url": "https://www.irs.gov/publications/p583"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      }
    ]
  },
  {
    "slug": "how-early-can-a-short-payment-be-detected-from-portal-data",
    "title": "How early can a short payment be detected from portal data?",
    "summary": "A proposed protocol for measuring the lead time between a portal payment event and a recorded short-payment exception.",
    "cluster": "Aging Analysis",
    "publishedAt": "2026-11-08",
    "readTime": "10 min read",
    "finding": "The study would test how much warning a finance team gets from portal activity before a short payment becomes an aging problem.",
    "thumbnail": "/thumbnails/november-08/how-early-can-a-short-payment-be-detected-from-portal-data.webp",
    "sections": [
      {
        "heading": "Protocol status and question",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks how much time passes between a portal payment event and the moment the finance team records a short-payment exception. The result would help a team decide whether portal data can support an earlier review. Keep the protocol and its approval date with the data file. The sponsor should record that decision before collection starts.",
          "The protocol does not test whether the customer intended to short pay. It measures the observable gap between the event and the internal record. The sponsor should name the decision the result could inform, such as an alert threshold or a daily review step. If the decision changes, version the protocol rather than editing the old one. The sponsor should record that decision before collection starts."
        ]
      },
      {
        "heading": "Population and observation unit",
        "paragraphs": [
          "Define the population as portal payments in a stated window that were less than the invoice balance. The unit is one payment event, with the portal timestamp, the ERP receipt time, the exception time, and the final resolution recorded. Payments that were corrected before an exception was recorded should be counted separately. Check the frame against a second source before collection. A count that cannot be rebuilt is not a population.",
          "Link the payment to the invoice and the customer so the same event is not counted twice across portals. If the customer uses several portals, record the source and treat each event as a separate observation only when the underlying payment differs. Record every exclusion with its reason and the date it was applied. Write the frame as a dated list so a later reviewer can rebuild it. A count that cannot be rebuilt is not a population."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define detection as the first recorded exception that names the short amount. Define lead time as the working time between the portal event and detection. Define resolution as the point when the amount is paid, credited, or approved as a deduction. Report each stage separately. Put the denominator and window beside every rate.",
          "Measure the size of the short amount and the reason where available. A small short payment may be detected late without much consequence, while a large one may need a faster path. The analysis should show both the time and the amount so the reader can judge the operational importance. Test the wording on one record before the main collection begins. Keep the definition stable for the whole window."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Use system timestamps for the portal event and the ERP receipt. For the exception time, use the record that first names the short amount. If the only evidence is an email, record the sender and the time and label it as a communication record rather than a system event. Link each classification to a document a second reviewer can open. Record the date the evidence was checked.",
          "Preserve the original portal message and the invoice version it refers to. A later statement can show the amount but not what the customer saw at the time. The study should distinguish the evidence available at detection from the evidence assembled afterward. A summary without the source is not evidence. Link each classification to a document a second reviewer can open."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use all short payments in the window if the volume is manageable. If sampling is necessary, stratify by amount, customer, and portal. Select the sample before reviewing detection times and keep a log of replacements. Do not exclude a payment because the record is messy. Log every replacement and the reason for it.",
          "Pilot the extraction on ten payments and compare the timestamps across systems. Clarify how weekends and holidays affect the working-time calculation. Record any manual correction and the reason for it. Record the first classification before discussion. Select the sample before reviewing outcomes."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the distribution of lead time, not only the average. Show the share detected within one day, one week, and one month, with the denominator. Break the results down by amount and by portal. A long tail of late detections may matter more than a fast average. Show the distribution, not only the average.",
          "Describe the relationship between detection time and resolution time without implying that one causes the other. A late detection may be a symptom of a different process gap. The report should name the possible causes and the records that would test them. Report counts with rates and keep the denominator visible. Break the result down by the groups named in the protocol."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The portal timestamp may reflect the customer's submission, while the ERP receipt reflects the bank's processing. The difference is part of the measured lead time but not entirely under the finance team's control. State this clearly in the report. Say what a second study would need to test. Describe the missing-data rate and its likely direction.",
          "The study may miss short payments that were never recorded as exceptions. Those cases are important because they represent the weakest detection. Use a second source, such as a bank reconciliation, to estimate the size of that gap if possible. Say what a second study would need to test. State the population and period the result applies to."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a portal change or a new exception rule. Compare the same stages and the same working-time definition. A shorter lead time is useful only if the exception is accurate and the resolution still follows. Assign the follow-up to a named owner. Set the next review date before the current one ends.",
          "Assign the follow-up to the cash application or collections lead and set a date. The protocol should end with a specific decision about whether to add an earlier review step and how to measure it. Version the protocol when the method changes. Compare the result with the prior period and explain the change. Assign the follow-up to a named owner."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Census Bureau",
        "url": "https://www.census.gov/"
      },
      {
        "label": "Financial Accounting Standards Board",
        "url": "https://www.fasb.org/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      }
    ]
  },
  {
    "slug": "how-reliable-is-the-customer-master-as-a-billing-record",
    "title": "How reliable is the customer master as a billing record?",
    "summary": "A proposed protocol for testing whether the customer master holds current, verified billing data across a sample of accounts.",
    "cluster": "Record Reliability",
    "publishedAt": "2026-11-08",
    "readTime": "10 min read",
    "finding": "The study would test whether the customer master can be trusted as the billing source or whether key fields depend on undocumented corrections.",
    "thumbnail": "/thumbnails/november-08/how-reliable-is-the-customer-master-as-a-billing-record.webp",
    "sections": [
      {
        "heading": "Protocol status and question",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks how often the customer master's billing fields match an approved source and how often they are corrected during the billing cycle. The result would help a finance team decide where to invest in data verification. Write the intended use in one sentence so the scope cannot drift. A later reviewer should be able to see what the study was allowed to conclude.",
          "The protocol does not test whether the customer is creditworthy. It tests whether the record that supports billing is current, complete, and traceable. The sponsor should name the decision the result could inform, such as a field-ownership change or a pre-billing check. If the decision changes, version the protocol rather than editing the old one. A later reviewer should be able to see what the study was allowed to conclude."
        ]
      },
      {
        "heading": "Population and observation unit",
        "paragraphs": [
          "Define the population as all active billing accounts in a stated period. The unit is one account, with the legal entity, billing address, tax identifier, terms, currency, and contacts recorded. Accounts with no activity in the period should be counted separately rather than excluded without notice. Write the frame as a dated list so a later reviewer can rebuild it. Describe the unit in one sentence that a new reviewer can apply.",
          "Decide how to treat accounts with multiple billing entities. Each entity may need its own observation because the fields can differ. A parent-level summary can be reported later, but the unit-level check should remain visible. If the frame changes mid-study, keep the earlier version. Record every exclusion with its reason and the date it was applied."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define accuracy as a field matching an approved source, such as a signed contract, a completed tax form, or a verified portal record. Define currency as the share of required fields that are present and current. Define correction as a change made during the billing cycle with a recorded reason and approver. Record the definition version with the data so the check can be repeated. Put the denominator and window beside every rate.",
          "Report accuracy and currency by field, not only as an account-level average. A record can have a correct address but an outdated contact and an ambiguous tax status. The field-level view shows which part of the master needs attention. Put the denominator and window beside every rate. Separate missing, unknown, and not applicable values."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Link each checked field to the source used and the date it was verified. A field that matches the last invoice is not necessarily correct, because the invoice may have copied an earlier error. Use an independent source where one exists and state the limitation when none does. Keep the original record even when a later correction is added. Keep confidential records behind a keyed reference.",
          "Mark fields that could not be verified as unknown rather than passing them. A missing source is a finding about the record's reliability. Do not treat the absence of a complaint as evidence that the field is correct. Record the date the evidence was checked. Use stable references rather than personal folder names."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use a census if the account count is manageable. Otherwise stratify by account size, industry, and change frequency. Select the sample before reviewing field accuracy and keep a log of replacements. Do not replace an account because its source documents are hard to find. Record the first classification before discussion.",
          "Have two reviewers check an overlap sample and compare their results. Clarify what counts as an approved source for a tax identifier and for a contact. Record disagreements and the rule used to resolve them. The disagreement rate is useful evidence about how clear the standard is. Do not replace a hard case with an easier one."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report accuracy and currency by field with counts and rates. Show the corrections made during the cycle and the reasons. A high accuracy rate with many late corrections may still indicate a fragile process. Present both the static check and the in-cycle changes. Describe what happened before suggesting what to change.",
          "Break the results down by account segment and by field owner. Avoid ranking individual employees. The useful output is a description of where the master is weak and which control would strengthen it. Break the result down by the groups named in the protocol. Show the distribution, not only the average."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The approved source may itself be outdated, and the study may not be able to detect that. Access to contracts and tax forms may be limited, which can reduce the verified sample. The period chosen may include a migration or a seasonal change that affects the result. Do not generalize beyond the documented frame. Describe the missing-data rate and its likely direction.",
          "State the exclusions and the missing-source rate. A finding based only on accounts with easy access to documents may overstate reliability. The report should make that limitation visible beside the result. Do not generalize beyond the documented frame. Name the records the study could not see."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a master-data cleanup or a system migration. Use the same fields and the same source hierarchy so the comparison is meaningful. A second review can test whether the cleanup reduced the correction rate. Close the review with one question for the process owner. Assign the follow-up to a named owner.",
          "Assign the follow-up to the owner of the customer master and set a date. The protocol should produce a specific decision about which fields require verification before billing and who is accountable for each one. Assign the follow-up to a named owner. Keep the same window length so the comparison means something."
        ]
      }
    ],
    "sources": [
      {
        "label": "IRS Publication 583, Starting a Business and Keeping Records",
        "url": "https://www.irs.gov/publications/p583"
      },
      {
        "label": "U.S. Government Accountability Office, Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      }
    ]
  }
];
