import type { BlogPost } from './types';

export const november09BlogPosts: readonly BlogPost[] = [
  {
    "slug": "write-a-cash-application-note-that-names-the-remittance-source",
    "title": "Write a cash application note that names the remittance source",
    "description": "A cash application note that records the payer, the remittance source, the invoice match, and the unresolved balance.",
    "category": "Accounts receivable",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/write-a-cash-application-note-that-names-the-remittance-source.webp",
    "sections": [
      {
        "heading": "Why the remittance source belongs in the note",
        "paragraphs": [
          "A cash application note is only useful if the next reviewer can see where the payment information came from. The bank reference, the remittance page, and the customer portal are different sources with different reliability. A note that records only the amount hides the evidence behind the match. Review the first few notes together before the process expands.",
          "Record the source for every field that was used to apply the payment. If the invoice number came from the bank reference rather than the remittance, say so. The next reviewer may need to challenge the match when the customer disputes it. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Record the payer and the match",
        "paragraphs": [
          "Write the payer name, the customer number, and the receipt date. Record the invoice or invoices the payment was applied to and the amount applied to each. A note that says applied to account is not a match. Keep the evidence with the record rather than in a separate log.",
          "If the payer is different from the customer on the invoice, record the relationship and the evidence. A parent company paying a subsidiary invoice is normal, but it should be documented. Review the first few notes together before the process expands. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Record the unresolved balance",
        "paragraphs": [
          "Write the amount that remains unapplied and the reason. A partial match may be correct, but the remainder needs its own record. Do not split the payment into unexplained pieces to make the aging report look clean. Separate what was observed from what was assumed.",
          "Record the next action and the owner. An unapplied balance without an owner will sit until the customer calls. The note should make the follow-up obvious. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Stop when the evidence conflicts",
        "paragraphs": [
          "If the remittance names one invoice and the bank reference names another, preserve both and route the item for review. A forced match hides the conflict and usually creates a second problem. The note should show the conflict exactly as it appeared. Name the owner in the same line as the action.",
          "Name the reviewer and the decision. A conflict that is resolved should record the evidence used. A conflict that is not resolved should remain open with a date. Keep the boundary visible in the place where the work is assigned."
        ]
      },
      {
        "heading": "Review the note at the end of the batch",
        "paragraphs": [
          "Check a sample of notes for the source, the match, and the unresolved balance. A note that passes the amount check but fails the source check is still weak. The sample should include one clear match, one partial match, and one exception. Use the same format for every handover so the next reader can scan it.",
          "Update the note template after the review. A template that captures the source and the next action is more useful than a longer narrative. Write the deadline as a date and a local time. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Keep the note with the receipt",
        "paragraphs": [
          "Store the note with the receipt and the remittance. A later audit may need to see what the reviewer saw at the time. Do not keep the note in a separate inbox that nobody opens. Separate what was observed from what was assumed.",
          "Review the note format quarterly. A new payment channel may require a new source field. The template should change with the work. Name the owner in the same line as the action."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a cash application note record?",
        "a": "The payer, the remittance source, the invoice match, the unresolved balance, and the next action."
      },
      {
        "q": "What should happen when the evidence conflicts?",
        "a": "Preserve both records and route the item to the named reviewer."
      }
    ],
    "internalService": "/services/cash-application-support",
    "internalSibling": "/blog/design-a-dunning-sequence-that-stops-on-a-dispute",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/"
    }
  },
  {
    "slug": "set-a-collections-call-window-the-customer-can-plan-around",
    "title": "Set a collections call window the customer can plan around",
    "description": "A call window that names the time zone, the contact preference, and the fallback when the customer cannot answer.",
    "category": "Accounts receivable",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/set-a-collections-call-window-the-customer-can-plan-around.webp",
    "sections": [
      {
        "heading": "Why a call window matters",
        "paragraphs": [
          "A collections call window is a promise about when the call will come. A customer who is told afternoon has no way to plan the day. A specific window with a time zone and a fallback is easier to keep and easier to defend. If the source is unclear, route the question instead of guessing.",
          "The window should match the customer's business hours and the collector's capacity. A window that is convenient for the agency but not for the customer will produce missed calls and repeated attempts. Record the date and the source so the next reviewer can repeat the check. Keep the evidence with the record rather than in a separate log."
        ]
      },
      {
        "heading": "Record the window and the time zone",
        "paragraphs": [
          "Write the start and end of the window in the customer's local time. Record the time zone explicitly, especially when the collector and the customer are in different regions. A window without a time zone is ambiguous. A control that depends on memory is not yet a control.",
          "Record the customer's preferred channel and any instruction not to call a particular number. The collector should not override a documented preference to meet a call target. Test the rule on one real account before applying it to the queue. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Set the fallback",
        "paragraphs": [
          "Write what happens if the customer cannot answer. The fallback might be a voicemail, an email, or a second attempt on another day. A fallback that is not documented will be improvised. Name the owner in the same line as the action.",
          "Record the attempts and the outcomes. A note that says called without the time and the result does not show whether the window was kept. The next collector should see the pattern. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Keep the promise realistic",
        "paragraphs": [
          "Do not promise a window that the team cannot staff. A small team with a large queue should offer a wider window or a callback request. A broken promise damages the relationship more than a slower call. Record the exception and the person who approved it.",
          "Review the missed windows weekly. A repeated miss may point to a capacity or scheduling problem. Fix the cause instead of adding more reminders. Test the rule on one real account before applying it to the queue."
        ]
      },
      {
        "heading": "Review the script with the team",
        "paragraphs": [
          "Read the window script with the collectors. Ask whether the language is clear and respectful. Update the script if customers are confused about when to expect the call. A short note with four fields is easier to use than a long narrative.",
          "Keep the script with the call record. A later review may need to see what the customer was told. Test the rule on one real account before applying it to the queue. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Review the policy quarterly",
        "paragraphs": [
          "Review the windows and the fallbacks with the collections lead. A new client segment may need a different window. Record the review date. Keep the boundary visible in the place where the work is assigned.",
          "The goal is a call the customer can plan around, not a longer policy. Review the first few notes together before the process expands. Test the rule on one real account before applying it to the queue. Use the same format for every handover so the next reader can scan it."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a collections call window include?",
        "a": "The local start and end time, the time zone, the preferred channel, and the fallback."
      },
      {
        "q": "What should happen when the window is missed?",
        "a": "Record the attempt and review the cause weekly instead of adding more reminders."
      }
    ],
    "internalService": "/services/collections-coordination",
    "internalSibling": "/blog/write-a-cash-application-note-that-names-the-remittance-source",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/"
    }
  },
  {
    "slug": "build-a-customer-credit-file-review-before-the-limit-changes",
    "title": "Build a customer credit file review before the limit changes",
    "description": "A credit file review that records the payment history, the current exposure, the evidence, and the approver.",
    "category": "Accounts receivable",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/build-a-customer-credit-file-review-before-the-limit-changes.webp",
    "sections": [
      {
        "heading": "Why the credit file review comes first",
        "paragraphs": [
          "A credit limit change should rest on the current file, not on a sales request. The review should show the payment history, the open balance, and the evidence behind the change. A limit increase without the review is a risk the business did not choose. Record the exception and the person who approved it.",
          "The review should be short enough to complete before the next order. It should point to the source records rather than retype them. Keep the evidence with the record rather than in a separate log. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Record the payment history and the exposure",
        "paragraphs": [
          "Write the current limit, the open balance, and the average days to pay. Record the source and the date. A history that is summarized without the source is hard to challenge. Review the first few notes together before the process expands.",
          "Record any recent late payments, disputes, or credit holds. A single late payment may be a timing issue; a pattern is a signal. The review should show the difference. A control that depends on memory is not yet a control."
        ]
      },
      {
        "heading": "Record the evidence and the request",
        "paragraphs": [
          "Write the reason for the change and the person who requested it. Link the financial statements, the trade references, or the internal approval. A request without evidence is a preference. Use the same format for every handover so the next reader can scan it.",
          "Record the proposed limit and the proposed terms. The approver should see the exposure at the new limit, not just the current balance. Review the first few notes together before the process expands. Test the rule on one real account before applying it to the queue."
        ]
      },
      {
        "heading": "Name the approver and the conditions",
        "paragraphs": [
          "Record the approver, the date, and any condition, such as a personal guarantee or a shorter term. A condition that is not recorded will be forgotten. A short note with four fields is easier to use than a long narrative. Use the same format for every handover so the next reader can scan it.",
          "Record the review date for the new limit. A limit that is set without a review becomes permanent by default. Ask whether a new reviewer could act on the record without a conversation. If the source is unclear, route the question instead of guessing."
        ]
      },
      {
        "heading": "Update the customer record",
        "paragraphs": [
          "Update the limit, the terms, and the approval reference after the decision. Confirm that the order system uses the new limit. A change that is approved but not entered will not take effect. If the source is unclear, route the question instead of guessing.",
          "Tell the sales and collections teams about the change. A team that does not know about the new limit may quote the old terms. Keep the boundary visible in the place where the work is assigned. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Review the decisions quarterly",
        "paragraphs": [
          "Look for limits that were increased without a review or decreased without a customer conversation. A pattern may point to a process gap. Update the review template. Record the date and the source so the next reviewer can repeat the check.",
          "Keep the review with the customer record. A later audit may need to see the evidence and the approver. Keep the original note beside the corrected version. Keep the evidence with the record rather than in a separate log."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a credit file review include?",
        "a": "The payment history, the current exposure, the request, the evidence, the proposed limit, and the approver."
      },
      {
        "q": "What should happen after the limit is approved?",
        "a": "Update the customer record and the order system, then tell sales and collections."
      }
    ],
    "internalService": "/services/credit-support",
    "internalSibling": "/blog/set-a-collections-call-window-the-customer-can-plan-around",
    "source": {
      "label": "Federal Reserve Small Business Credit Survey",
      "url": "https://www.fedsmallbusiness.org/"
    }
  },
  {
    "slug": "track-a-partial-payment-across-two-invoices-without-splitting-the-ledger",
    "title": "Track a partial payment across two invoices without splitting the ledger",
    "description": "A partial payment record that keeps the original receipt, the allocation, and the open balance tied together.",
    "category": "Accounts receivable",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/track-a-partial-payment-across-two-invoices-without-splitting-the-ledger.webp",
    "sections": [
      {
        "heading": "Why the allocation needs a record",
        "paragraphs": [
          "A partial payment can be applied to one invoice or split across several. The allocation should follow the customer's remittance and the approved rule. A split that is invented to make the aging report look better hides the real balance. Name the owner in the same line as the action.",
          "The record should show the receipt, the invoices, the amount applied, and the amount open. The next reviewer should be able to follow the money without opening a chat. Review the first few notes together before the process expands. Keep the boundary visible in the place where the work is assigned."
        ]
      },
      {
        "heading": "Record the receipt and the remittance",
        "paragraphs": [
          "Write the receipt date, the amount, and the source. Attach the remittance or the bank reference. A payment without the remittance is a question, not a clean match. A short note with four fields is easier to use than a long narrative.",
          "Record the customer's instruction if one exists. If the customer said the payment is for invoice 2201, do not split it to cover 2198 because the aging looks worse. Test the rule on one real account before applying it to the queue. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Record the allocation and the open balance",
        "paragraphs": [
          "Write the amount applied to each invoice and the reason. Record the remaining balance and the owner. A partial payment without an owner will sit. Keep the boundary visible in the place where the work is assigned.",
          "If the allocation changes, record the change and the approver. Do not overwrite the original allocation without a trace. Record the exception and the person who approved it. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Handle the disputed portion",
        "paragraphs": [
          "If the customer withheld part of the payment, record the claim and the amount. Keep the disputed amount separate from the undisputed payment. A dispute that is mixed into the allocation is hard to resolve. Keep the evidence with the record rather than in a separate log.",
          "Route the dispute to the named owner and set a response date. The payment record should show the link. Review the first few notes together before the process expands. A control that depends on memory is not yet a control."
        ]
      },
      {
        "heading": "Review the allocation with the controller",
        "paragraphs": [
          "Review a sample of partial payments with the controller. Check the source, the allocation, and the open balance. A sample that includes a split payment is more useful than one that only includes clean matches. Name the owner in the same line as the action.",
          "Update the allocation rule if the sample shows a recurring problem. The goal is a record that explains the balance, not a faster split. Record the exception and the person who approved it. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Keep the record with the receipt",
        "paragraphs": [
          "Store the allocation with the receipt and the invoice. A later audit may need to see the original instruction and the change. Update the template when the same question appears twice. Use the same format for every handover so the next reader can scan it.",
          "Review the format quarterly. A new payment channel may require a new field. Review the first few notes together before the process expands. Use the same format for every handover so the next reader can scan it."
        ]
      }
    ],
    "faq": [
      {
        "q": "How should a partial payment be allocated?",
        "a": "Follow the customer's remittance and the approved rule, and record the amount applied and the open balance."
      },
      {
        "q": "What should happen to the disputed portion?",
        "a": "Keep it separate, route it to the named owner, and set a response date."
      }
    ],
    "internalService": "/services/cash-application-support",
    "internalSibling": "/blog/build-a-customer-credit-file-review-before-the-limit-changes",
    "source": {
      "label": "Financial Accounting Standards Board",
      "url": "https://www.fasb.org/"
    }
  },
  {
    "slug": "prepare-an-ar-aging-review-that-ends-in-one-decision",
    "title": "Prepare an AR aging review that ends in one decision",
    "description": "An aging review that uses evidence, owners, and next actions to decide which accounts need help this week.",
    "category": "Accounts receivable",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/prepare-an-ar-aging-review-that-ends-in-one-decision.webp",
    "sections": [
      {
        "heading": "Why the aging review needs a decision",
        "paragraphs": [
          "An aging review that reads every balance is a status report. The useful review decides which accounts need a call, a credit review, or an escalation. The agenda should start with the accounts where a decision can change the outcome. Keep the evidence with the record rather than in a separate log.",
          "Choose the accounts before the meeting. The collections lead should select the disputed, promised, or aging accounts. Send a short evidence pack in advance. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Prepare the evidence",
        "paragraphs": [
          "For each account, include the balance, the oldest item, the last contact, and the open question. Keep it to one line per account. A pack that requires opening five records will not be read. A short note with four fields is easier to use than a long narrative.",
          "Do not include the entire history. Link the relevant records and summarize the issue. The purpose is a decision. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Review by next action",
        "paragraphs": [
          "Group the accounts by the action they need: call, credit review, dispute decision, or escalation. This turns a list of balances into a list of decisions. It also shows when one owner is the bottleneck. A control that depends on memory is not yet a control.",
          "For each group, ask what would change the current position. If nothing would change it, the account may not need a meeting slot. Record the exception and the person who approved it. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Limit the meeting to decisions",
        "paragraphs": [
          "Do not read the aging report aloud. Ask the decision maker for a choice, a condition, or a request for evidence. Record the answer in the queue. Review the first few notes together before the process expands.",
          "If a decision cannot be made, name the missing person or evidence and set a date. Every discussed account should leave with an owner. Record the date and the source so the next reviewer can repeat the check. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Follow up with a dated note",
        "paragraphs": [
          "Send a short summary the same day with the decisions, owners, and dates. Check the summary against the queue. The written record and the system record should agree. Keep the evidence with the record rather than in a separate log.",
          "At the next review, open with the actions that were not completed. A decision that is not acted on is a signal about the owner or the action. Keep the evidence with the record rather than in a separate log. If the source is unclear, route the question instead of guessing."
        ]
      },
      {
        "heading": "Review the review quarterly",
        "paragraphs": [
          "Ask the team whether the review helped. A review that produces decisions but no movement is not working. Change the cadence or the agenda. A control that depends on memory is not yet a control.",
          "Keep the evidence standard consistent. A review that accepts optimism in a good week and demands evidence in a bad week is not a control. Record the date and the source so the next reviewer can repeat the check. Record the exception and the person who approved it."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should an AR aging review decide?",
        "a": "One action per reviewed account, with an owner and a date."
      },
      {
        "q": "How many accounts should be reviewed?",
        "a": "Only the disputed, promised, or aging accounts that need a decision."
      }
    ],
    "internalService": "/services/aging-report-preparation",
    "internalSibling": "/blog/track-a-partial-payment-across-two-invoices-without-splitting-the-ledger",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/"
    }
  },
  {
    "slug": "design-a-dunning-sequence-that-stops-on-a-dispute",
    "title": "Design a dunning sequence that stops on a dispute",
    "description": "A dunning sequence that pauses on a dispute, records the reason, and resumes only with an approved decision.",
    "category": "Accounts receivable",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/design-a-dunning-sequence-that-stops-on-a-dispute.webp",
    "sections": [
      {
        "heading": "Why the sequence needs a stop rule",
        "paragraphs": [
          "A dunning sequence that continues after a customer raises a dispute damages the relationship and the record. The sequence should stop when the dispute is recorded and resume only after the owner decides. A stop rule that is not written will be missed by the next collector. Use the same format for every handover so the next reader can scan it.",
          "The stop rule should be visible in the collections queue. A collector who does not see the dispute may send another reminder. Update the template when the same question appears twice. Keep the boundary visible in the place where the work is assigned."
        ]
      },
      {
        "heading": "Record the dispute and the stop",
        "paragraphs": [
          "Write the customer's claim and the date it was received. Mark the sequence as paused and name the owner. A pause without a reason is hard to resume. Record the date and the source so the next reviewer can repeat the check.",
          "Record the next action and the date. The action might be an evidence request, a call, or a credit review. The customer should know the sequence is paused. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Set the resume condition",
        "paragraphs": [
          "Write what must happen before the sequence resumes. A resolved dispute, an approved payment plan, or a documented decision are typical conditions. A resume without the condition may restart the same problem. Update the template when the same question appears twice.",
          "Record the approver and the date. The resume should be a decision, not an automatic timer. Keep the original note beside the corrected version. Record the date and the source so the next reviewer can repeat the check."
        ]
      },
      {
        "heading": "Keep the messages consistent",
        "paragraphs": [
          "Use the same template and the same sender when the sequence resumes. A customer who receives a different tone may think the dispute was ignored. The record should show what was sent. If the source is unclear, route the question instead of guessing.",
          "Do not send a dunning message that refers to the disputed amount. The message should reflect the current approved position. Record the date and the source so the next reviewer can repeat the check. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Review the pauses weekly",
        "paragraphs": [
          "List the sequences that have been paused and the reason. An account that has been paused for weeks may need a decision. Assign an owner and a date. Write the deadline as a date and a local time.",
          "Look for a repeated dispute reason. A pattern may point to a billing or service problem. Update the template when the same question appears twice. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Review the stop rule quarterly",
        "paragraphs": [
          "Review the rule with the collections and billing teams. A new dispute type may need a new stop condition. Record the review date. Separate what was observed from what was assumed.",
          "Keep the old rule with the change note. A later audit may need to see what the team was following. Record the date and the source so the next reviewer can repeat the check. Use the same format for every handover so the next reader can scan it."
        ]
      }
    ],
    "faq": [
      {
        "q": "When should a dunning sequence stop?",
        "a": "When a dispute is recorded, with the reason, the owner, and the next action."
      },
      {
        "q": "When can the sequence resume?",
        "a": "Only when the documented resume condition is met and an approver confirms it."
      }
    ],
    "internalService": "/services/collections-coordination",
    "internalSibling": "/blog/prepare-an-ar-aging-review-that-ends-in-one-decision",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/"
    }
  },
  {
    "slug": "keep-a-cash-forecast-tied-to-the-collection-calendar",
    "title": "Keep a cash forecast tied to the collection calendar",
    "description": "A cash forecast that links each expected receipt to a dated collection action and a confidence level.",
    "category": "Accounts receivable",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/keep-a-cash-forecast-tied-to-the-collection-calendar.webp",
    "sections": [
      {
        "heading": "Why the forecast needs the collection calendar",
        "paragraphs": [
          "A cash forecast that is built from the aging report alone assumes the customer will pay on the due date. The collection calendar shows what the team is actually doing to bring the cash in. A forecast without the calendar is a wish. Use the same format for every handover so the next reader can scan it.",
          "The forecast should link each expected receipt to a dated action, such as a call, a promise, or a payment plan. The confidence level should reflect the evidence, not the sales optimism. Update the template when the same question appears twice. A control that depends on memory is not yet a control."
        ]
      },
      {
        "heading": "Record the expected receipt and the action",
        "paragraphs": [
          "Write the customer, the invoice, the expected amount, and the expected date. Link the collection action and the owner. A receipt without an action is an assumption. Separate what was observed from what was assumed.",
          "Record the confidence level and the reason. A promised payment with a contact and a date is different from an expected payment with no contact. Separate what was observed from what was assumed. Record the date and the source so the next reviewer can repeat the check."
        ]
      },
      {
        "heading": "Record the risk and the next step",
        "paragraphs": [
          "Write the risk that could move the receipt, such as a dispute or a missing approval. Name the next step and the date. A risk that is not recorded will surprise the forecast. Write the deadline as a date and a local time.",
          "Record the customer's history of keeping promises. A customer who has missed two promises should not be forecast at the same confidence as one who has kept them. Separate what was observed from what was assumed. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Review the forecast weekly",
        "paragraphs": [
          "Compare the forecast with the actual receipts. Record the difference and the reason. A forecast that is never compared with the actual is not a control. Record the exception and the person who approved it.",
          "Update the confidence levels after the review. A pattern of missed promises should change the forecast, not just the commentary. Review the first few notes together before the process expands. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Share the forecast with the finance owner",
        "paragraphs": [
          "Send a short summary with the expected receipts, the risks, and the actions. The finance owner should see the assumptions. A forecast without the assumptions is hard to challenge. Ask whether a new reviewer could act on the record without a conversation.",
          "Record the finance owner's questions and the answers. A later review may need to see what was agreed. Test the rule on one real account before applying it to the queue. Record the date and the source so the next reviewer can repeat the check."
        ]
      },
      {
        "heading": "Review the process quarterly",
        "paragraphs": [
          "Review the forecast model and the collection calendar with the team. A new payment channel may require a new action type. Update the model. Record the date and the source so the next reviewer can repeat the check.",
          "Keep the old model with the change note. A later review may need to see what the team was using. Write the deadline as a date and a local time. Record the exception and the person who approved it."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a cash forecast link to?",
        "a": "Each expected receipt should link to a dated collection action, an owner, and a confidence level."
      },
      {
        "q": "How often should the forecast be compared with actuals?",
        "a": "Weekly, with the difference and the reason recorded."
      }
    ],
    "internalService": "/services/aging-report-preparation",
    "internalSibling": "/blog/design-a-dunning-sequence-that-stops-on-a-dispute",
    "source": {
      "label": "Financial Accounting Standards Board",
      "url": "https://www.fasb.org/"
    }
  },
  {
    "slug": "plan-a-monthly-ar-close-review-on-evidence",
    "title": "Plan a monthly AR close review on evidence",
    "description": "A short monthly review that turns unapplied cash, disputes, and promises into decisions and owners.",
    "category": "Accounts receivable",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/plan-a-monthly-ar-close-review-on-evidence.webp",
    "sections": [
      {
        "heading": "Why the AR close review needs a decision",
        "paragraphs": [
          "A monthly AR close review should answer one question: which items need a decision before the close, and who will make it. Everything else belongs in the queue. If the meeting reviews every invoice, it becomes a status report. Review the first few notes together before the process expands.",
          "Choose the items before the meeting. The AR lead should select the unapplied cash, the open disputes, and the broken promises. Send a short evidence pack in advance. Use the same format for every handover so the next reader can scan it."
        ]
      },
      {
        "heading": "Prepare the evidence pack",
        "paragraphs": [
          "For each item, include the customer, the amount, the source, the open question, and the next step. Keep it to one page. A pack that takes an hour to read will not be read. Write the deadline as a date and a local time.",
          "Do not include the entire ledger. Link the relevant records and summarize the issue. A control that depends on memory is not yet a control. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Review by next action",
        "paragraphs": [
          "Group the items by the decision they need: apply, dispute, escalate, or write off. This turns a list of balances into a list of decisions. It also shows when one approver is the bottleneck. Keep the evidence with the record rather than in a separate log.",
          "For each group, ask what would change the current position. If nothing would change it, the item may not need a meeting slot. If the source is unclear, route the question instead of guessing. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Limit the meeting to decisions",
        "paragraphs": [
          "Do not read the aging report aloud. Ask the decision maker for a choice, a condition, or a request for evidence. Record the answer in the close pack. Review the first few notes together before the process expands.",
          "If a decision cannot be made, name the missing person or evidence and set a date. Every discussed item should leave with an owner. Name the owner in the same line as the action. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Follow up with a dated note",
        "paragraphs": [
          "Send a short summary the same day with the decisions, owners, and dates. Check the summary against the close pack. The written record and the system record should agree. Use the same format for every handover so the next reader can scan it.",
          "At the next close, open with the actions that were not completed. A decision that is not acted on is a signal about the owner or the action. Use the same format for every handover so the next reader can scan it. Keep the original note beside the corrected version."
        ]
      },
      {
        "heading": "Review the review quarterly",
        "paragraphs": [
          "Ask the team whether the review helped. A review that produces decisions but no movement is not working. Change the cadence or the agenda. A control that depends on memory is not yet a control.",
          "Keep the evidence standard consistent. A review that accepts optimism in a good month and demands evidence in a bad month is not a control. Keep the original note beside the corrected version. A short note with four fields is easier to use than a long narrative."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should an AR close review decide?",
        "a": "Which unapplied cash, disputes, and promises need a decision before the close, with an owner and a date."
      },
      {
        "q": "How many items should be on the agenda?",
        "a": "Only the items that need a decision before the close, with a short evidence pack."
      }
    ],
    "internalService": "/services/aging-report-preparation",
    "internalSibling": "/blog/keep-a-cash-forecast-tied-to-the-collection-calendar",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/"
    }
  }
];
