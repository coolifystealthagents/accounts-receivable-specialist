import type { BlogPost } from './types';

export const november08BlogPosts: readonly BlogPost[] = [
  {
    "slug": "design-an-invoice-exception-queue-that-finance-can-clear-each-morning",
    "title": "Design an invoice exception queue that finance can clear each morning",
    "description": "A practical design for one invoice exception queue with named owners, due points, and an evidence note that survives a shift change.",
    "category": "Invoice operations",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/design-an-invoice-exception-queue-that-finance-can-clear-each-morning.webp",
    "sections": [
      {
        "heading": "Decide what counts as an exception",
        "paragraphs": [
          "An invoice exception is a record that cannot move without a named decision, not a record that merely looks unusual. Before the queue is built, finance should list the specific blockers that stop an invoice from being prepared, approved, or sent. Missing purchase order numbers, conflicting tax instructions, and unapproved rate changes are typical blockers. A formatting quirk is not an exception unless it prevents the next step.",
          "Write the list as a short decision table with a trigger and an example for each row. The trigger should describe what the reviewer will see in the source system, because the queue is only useful if a new person can classify a record without asking. Keep the first version to five or six real triggers. A long taxonomy that nobody uses is harder to maintain than a short list that covers most of the daily volume."
        ]
      },
      {
        "heading": "Give every exception one owner and one due point",
        "paragraphs": [
          "Each exception needs an accountable person and a time by which the next step must happen. The owner may be a billing analyst, a sales operations contact, or a controller, depending on the decision. The due point should be expressed as a date and a local time, not as soon as possible. A queue sorted by due point tells the team what to clear first without a morning meeting.",
          "Avoid assigning a team as the owner. A team name gives everyone a reason to assume someone else has it, and it makes escalation ambiguous. If a decision genuinely needs two people, name the one who must request the second review. Record that request as a separate dated item so the queue can show whether the handoff actually happened."
        ]
      },
      {
        "heading": "Separate the queue from the inbox",
        "paragraphs": [
          "The inbox receives requests, and the queue holds work that finance has accepted. Mixing them creates a list where unread messages look like tasks and tasks disappear under new messages. Route requests through a short intake step that checks the customer, invoice, amount, and requested change. Accepted items go to the queue with a unique identifier, and rejected items go back with a written reason.",
          "The intake step does not need new software. A shared spreadsheet with controlled columns can work if it has an owner, a timestamp, and a status field that only the queue owner changes. The important control is that the queue is the single list used in the daily review. If a request lives only in email, it is not yet work that the team has committed to finish."
        ]
      },
      {
        "heading": "Write the note the next reviewer needs",
        "paragraphs": [
          "Every exception note should say what was checked, what was found, and what decision is still open. Include the source record, the amount, and the exact field that conflicts. A note that says pending review forces the next reviewer to repeat the whole investigation. A note that says purchase order 4417 lists quantity 12 while the invoice lists 10 lets the reviewer start at the real question.",
          "Keep the note factual and dated. If the reviewer contacted the customer, record the channel, the time, and the response rather than an interpretation of the response. If the reviewer formed a view about the likely cause, label it as an assumption. The next person needs to know which parts are evidence and which parts are still a hypothesis."
        ]
      },
      {
        "heading": "Set a daily clearing limit",
        "paragraphs": [
          "A queue that grows faster than the team can clear becomes a report instead of a control. Measure the number of items the team can genuinely resolve in a day, including the time needed to gather evidence and confirm the decision. Use that number to set a daily target that leaves room for new arrivals. The target should be based on observed work, not on the number the team wishes it could finish.",
          "When the queue exceeds the limit for several days, treat that as a capacity or intake problem. Review whether the triggers are too broad, whether one owner is overloaded, or whether a source system is producing bad data. Adding another status column will not clear the backlog. Reducing the number of decisions that require a specialist is often the faster repair."
        ]
      },
      {
        "heading": "Review patterns instead of individual wins",
        "paragraphs": [
          "A weekly review should look for repeated triggers, repeated owners, and repeated delays. If the same purchase order mismatch appears ten times, the fix belongs in the order intake process. If one reviewer's items sit longer than everyone else's, the cause may be unclear authority rather than effort. Patterns show where the queue is teaching the team something about the upstream process.",
          "Pick three resolved items and one unresolved item for the review. Read the notes aloud and ask whether a new reviewer could act on them. This small sample is more useful than a dashboard of totals because it tests the quality of the handoff. Record one change to make next week, and assign a person to make it."
        ]
      },
      {
        "heading": "Keep the queue honest as volume grows",
        "paragraphs": [
          "As volume grows, the temptation is to add categories, automatic flags, and more reviewers. Add controls only when they remove a specific recurring decision. A new category is justified when it changes who acts or how quickly. If it only makes the report look more detailed, it adds maintenance without improving the work.",
          "Review the queue design at the end of each month against the actual exceptions that appeared. Remove triggers that never fire, merge categories that always share an owner, and rewrite notes that reviewers consistently misread. The queue should get simpler as the team learns, not more elaborate. A simple queue that finance clears every morning is worth more than a perfect taxonomy nobody finishes."
        ]
      }
    ],
    "faq": [
      {
        "q": "What belongs in an invoice exception queue?",
        "a": "Only records that cannot move without a named decision, with the blocker, owner, due point, and evidence recorded."
      },
      {
        "q": "How many exception categories should a small team start with?",
        "a": "Start with five or six triggers drawn from real blockers, then add a category only when it changes who acts."
      },
      {
        "q": "Who should own an exception?",
        "a": "One accountable person, not a team, with a named reviewer when a second approval is required."
      }
    ],
    "internalService": "/services/invoice-preparation",
    "internalSibling": "/blog/set-a-credit-hold-rule-that-sales-and-finance-both-understand",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
    }
  },
  {
    "slug": "set-a-credit-hold-rule-that-sales-and-finance-both-understand",
    "title": "Set a credit hold rule that sales and finance both understand",
    "description": "How to write a credit hold trigger, release path, and customer message that keeps orders moving without hiding real risk.",
    "category": "Credit",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/set-a-credit-hold-rule-that-sales-and-finance-both-understand.webp",
    "sections": [
      {
        "heading": "Start from the order the hold will block",
        "paragraphs": [
          "A credit hold rule only matters at the moment an order is about to be released. Start by naming that moment in the order workflow and the system field that records it. If the rule cannot point to a specific gate, it will be applied inconsistently and argued about after the fact. Sales should be able to see the gate before the order reaches it.",
          "Describe the order types the rule covers and the ones it excludes. Renewals, samples, and service credits often behave differently from a standard shipment. Write those exceptions down before the first dispute, because an undocumented exception becomes a precedent. The goal is a rule that a sales representative can apply without calling finance for permission."
        ]
      },
      {
        "heading": "Write the trigger in numbers",
        "paragraphs": [
          "Use observable values such as days past due, outstanding balance, credit limit, and payment history window. Avoid labels like high risk or poor payer unless the label maps to a number the team can check. A trigger that says the account is more than thirty days past due on an invoice above a stated amount is testable. A trigger that says finance is uncomfortable is not.",
          "Set the trigger slightly before the point where the business truly cannot tolerate more exposure. A hold that arrives after the shipment has already left is a report, not a control. Test the threshold against a sample of recent orders and ask whether each hold would have prevented a real loss or merely delayed a good customer. Adjust the number, not the principle."
        ]
      },
      {
        "heading": "Name who can release the hold",
        "paragraphs": [
          "The release authority should be a role, not a person's name, and it should be written into the order system. A sales manager may release holds within a stated limit, while a controller must approve anything above it. Record the approver, the time, and the reason on the order. An approval that exists only in a chat message is hard to audit and easy to forget.",
          "Separate the authority to release from the authority to change the credit limit. A release lets one order proceed under existing terms, while a limit change alters the risk the business has accepted. Combining the two encourages quiet limit increases during a busy week. Keep the limit change on a slower, documented path with its own evidence."
        ]
      },
      {
        "heading": "Tell the customer before the order stalls",
        "paragraphs": [
          "The customer should hear about the hold before the delivery date is missed. Prepare a short message that names the order, the reason, and the action needed to release it. Avoid blame and avoid promising a release time that finance has not approved. The message should make it easy for the customer to pay, dispute, or provide the missing document.",
          "Give the sales representative the same message so the customer hears one version. When the customer calls sales, the representative should be able to explain the status without transferring the call. If the reason involves a dispute or a missing document, say that plainly. A vague explanation invites escalation and makes a routine credit control feel like a crisis."
        ]
      },
      {
        "heading": "Keep a dated reason on every hold",
        "paragraphs": [
          "Every hold needs a start time, a trigger value, and a next review date. The review date matters because a hold without one can sit for weeks after the customer has resolved the issue. Assign the review to the person who owns the account relationship, with finance as the approving role. The account should not wait for the customer to complain before anyone looks again.",
          "When the hold is released, record what changed. A payment, a signed payment plan, a credit approval, or a documented dispute all tell a different story. The release reason should match the original trigger, so a later reviewer can see whether the control worked. Keep the history even after the order ships, because patterns across accounts are more useful than a single clean release."
        ]
      },
      {
        "heading": "Review holds that did not age well",
        "paragraphs": [
          "Pull a sample of holds that stayed open longer than the stated review window. Ask whether the delay came from the customer, the approver, or the rule itself. A hold that waits on a controller who is traveling is an authority design problem. A hold that waits because the customer never received the message is a communication problem.",
          "Also review holds that were released quickly. A fast release is not automatically good if it bypassed the written approval. Check that the release record names the right role and that the reason matches the evidence. The purpose of the review is to improve the rule, not to catch individuals, so discuss the pattern before discussing the person."
        ]
      },
      {
        "heading": "Test the rule against a real week",
        "paragraphs": [
          "Before rolling the rule out broadly, run it in shadow mode for one week. Compare the orders it would have held with the orders finance actually held. Look for good customers who would have been blocked and risky orders that would have slipped through. Adjust the trigger and the release path using that evidence.",
          "Then run the rule for real with a short review at the end of the first month. Ask sales and finance the same three questions: was the trigger clear, was the release path fast enough, and did the customer message work. A rule that both teams can explain in one minute is more likely to be followed than a policy document nobody reads. Keep the three answers in the rule file so the next review starts from evidence instead of memory."
        ]
      }
    ],
    "faq": [
      {
        "q": "What is a good credit hold trigger?",
        "a": "An observable value such as days past due or outstanding balance, tested against recent orders before it is enforced."
      },
      {
        "q": "Who should release a credit hold?",
        "a": "A named role with a stated limit, recorded in the order system with a time and reason."
      },
      {
        "q": "Should a credit hold stop an order automatically?",
        "a": "It should stop release at a defined gate, with a documented path for approval or customer resolution."
      }
    ],
    "internalService": "/services/collections-coordination",
    "internalSibling": "/blog/design-an-invoice-exception-queue-that-finance-can-clear-each-morning",
    "source": {
      "label": "Federal Reserve Small Business Credit Survey",
      "url": "https://www.fedsmallbusiness.org/"
    }
  },
  {
    "slug": "build-a-cash-application-checklist-for-lockbox-remittances",
    "title": "Build a cash application checklist for lockbox remittances",
    "description": "A step-by-step checklist for matching lockbox receipts to invoices without forcing a payment onto the wrong account.",
    "category": "Cash application",
    "publishedAt": "2026-11-08",
    "readTime": "9 min read",
    "thumbnail": "/thumbnails/november-08/build-a-cash-application-checklist-for-lockbox-remittances.webp",
    "sections": [
      {
        "heading": "Open with the deposit record",
        "paragraphs": [
          "Start each batch with the bank's deposit record, not with the invoice list. The deposit record establishes the amount, the value date, and the reference numbers the bank actually received. If the batch starts from open invoices, the team tends to look for a payment that fits the balance instead of recording what arrived. That habit creates applications that later have to be reversed.",
          "Reconcile the deposit total to the sum of the individual receipts before touching customer accounts. A difference at this stage usually means a missing page, a duplicate scan, or a bank fee that belongs in a separate line. Resolve the batch total first, because a mismatch inside a customer account is much harder to find after the work has spread across several records. If the total cannot be reconciled, stop the batch and resolve the bank record first."
        ]
      },
      {
        "heading": "Match the payer before the amount",
        "paragraphs": [
          "Identify the payer from the remittance, the bank reference, and the customer master record. Do not let an amount that matches an open invoice decide the customer. Two customers can owe the same amount on the same day, and a wrong match is more expensive to unwind than an unmatched receipt. Confirm the legal entity and the billing account when the names are similar.",
          "When the payer is unclear, keep the receipt unapplied and document the candidates. List the evidence for each candidate rather than choosing the most convenient one. If a customer has changed names through an acquisition, check the master record for the former name before assuming the payment belongs elsewhere. The checklist should make the evidence visible to the next reviewer."
        ]
      },
      {
        "heading": "Handle one payment across several invoices",
        "paragraphs": [
          "Apply a single payment to the invoices the remittance actually identifies, in the order the customer states. If the remittance is silent, use the customer's documented payment instruction and the approved aging order. Do not invent a priority that favors the oldest invoice if the customer has disputed it. The application should reflect the agreement, not the collector's preference.",
          "Record any unapplied remainder as its own item with the reason. A partial application can be correct when the customer has withheld a specific charge. The remainder should stay linked to the original receipt so a later reviewer can see the full amount. Do not split the payment into unexplained pieces just to make the aging report look cleaner."
        ]
      },
      {
        "heading": "Record what the remittance does not say",
        "paragraphs": [
          "The absence of a remittance is information, and the checklist should capture it. Write down which fields were missing, what was used instead, and who approved the alternative. If the team applies a payment from the bank reference alone, say so. A future reviewer needs to know whether the match rested on evidence or on a reasonable guess.",
          "Use a consistent note format so missing information is easy to find. The note should name the receipt, the customer, the invoices, and the unresolved question. If the customer promised a remittance by email, record the date and the sender. An unapplied payment with a clear note is easier to clear than one with a confident but unsupported application."
        ]
      },
      {
        "heading": "Stop when the evidence conflicts",
        "paragraphs": [
          "Conflicting evidence is a stop condition, not a prompt to choose the better-looking record. If the remittance names invoice 2201 but the bank reference points to invoice 2198, preserve both and route the item for review. The reviewer should see the conflict exactly as it appeared. Forcing a match hides the problem and usually creates a second one.",
          "The stop rule should name who decides and how quickly. A routine conflict might go to the cash application lead, while a suspected fraud or duplicate payment goes to the controller. Write the escalation path beside the checklist so the analyst does not have to invent one under pressure. The goal is a controlled pause, not a stalled batch."
        ]
      },
      {
        "heading": "Close the batch with a control total",
        "paragraphs": [
          "At the end of the batch, compare the total applied, the total left unapplied, and the deposit total. The three numbers should reconcile to the bank record. If they do not, find the difference before the batch is marked complete. A control total that is checked only at month end allows small errors to compound for weeks.",
          "Save the batch summary with the receipt count, the applied amount, the exception count, and the reviewer's name. The summary does not need to be long, but it should let someone reconstruct the work. If the next shift inherits an exception, the summary should point to it directly. A clean batch close is evidence that the checklist was followed."
        ]
      },
      {
        "heading": "Leave an audit trail for the next day",
        "paragraphs": [
          "Every application should show the receipt, the invoice, the amount, the date, and the rule or instruction used. A reviewer should be able to follow the trail without opening a chat history. If a manual adjustment was needed, record the reason and the approver. The audit trail is the difference between a correction and an unexplained change.",
          "Check a small sample of the day's applications before closing. Pick one clear match, one partial payment, and one exception. Ask whether the note would let a new analyst repeat the decision. If not, improve the note format rather than relying on the original analyst's memory. Small daily checks keep the checklist honest as volume changes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Where should a lockbox batch start?",
        "a": "With the bank deposit record, reconciled to the individual receipts before customer accounts are touched."
      },
      {
        "q": "What should happen when the remittance is missing?",
        "a": "Record the missing fields, the evidence used, and the approver, then keep the receipt traceable."
      },
      {
        "q": "When should cash application stop?",
        "a": "When payer or invoice evidence conflicts, with the conflict preserved and routed to the named reviewer."
      }
    ],
    "internalService": "/services/cash-application-support",
    "internalSibling": "/blog/reconcile-a-customer-portal-payment-against-the-erp-ledger",
    "source": {
      "label": "IRS Publication 583, Starting a Business and Keeping Records",
      "url": "https://www.irs.gov/publications/p583"
    }
  },
  {
    "slug": "reconcile-a-customer-portal-payment-against-the-erp-ledger",
    "title": "Reconcile a customer portal payment against the ERP ledger",
    "description": "A repeatable method for comparing portal receipts with the ERP ledger and explaining timing, credit, and duplicate differences.",
    "category": "Reconciliation",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/reconcile-a-customer-portal-payment-against-the-erp-ledger.webp",
    "sections": [
      {
        "heading": "Pull both records at the same cutoff",
        "paragraphs": [
          "Choose one cutoff time and export both the customer portal activity and the ERP ledger as of that moment. If the portal is pulled at noon and the ledger at four, every difference includes four hours of ordinary activity. State the cutoff in the reconciliation file so a later reviewer does not compare the result with a different export. Consistency matters more than the specific time chosen.",
          "Save the raw exports before making any adjustments. The reconciliation should be reproducible from the source files, not from a worksheet that has already been edited. Name the files with the date, time, and source system. If a portal export changes format, keep the old file and document the change rather than overwriting the evidence."
        ]
      },
      {
        "heading": "Compare identifiers, not just totals",
        "paragraphs": [
          "Match on payment reference, invoice number, customer identifier, and amount before comparing the grand total. A total that agrees can still hide a payment applied to the wrong customer. Build the comparison in layers so the first layer is identity and the second is amount. The layered view makes it obvious where a difference begins.",
          "When an identifier is missing, record it as missing rather than substituting a similar one. A portal reference that differs by one character may be a typo or a different transaction. Check the surrounding dates and amounts before deciding. The reconciliation should show which records could not be matched on identity and why."
        ]
      },
      {
        "heading": "Explain timing differences in writing",
        "paragraphs": [
          "A payment can be recorded in the portal on Friday and in the ERP on Monday without either system being wrong. Write the expected settlement window beside each timing difference so the reviewer knows when to look again. Do not force a match by changing the date. A dated explanation is more useful than a silent adjustment.",
          "Separate timing differences from real discrepancies in the worksheet. Timing items normally clear on their own, while real discrepancies need an owner and a next step. If a timing item persists beyond the stated window, move it into the discrepancy group. The distinction keeps the reconciliation from becoming a list of unexplained items."
        ]
      },
      {
        "heading": "Treat portal credits as their own item",
        "paragraphs": [
          "Portal credits, refunds, and chargebacks are not payments and should not be netted against receipts without evidence. Record each credit with its reference, reason, and approval status. If the credit reduces an invoice, show the before and after balance. If it does not, keep it in a separate clearing account until the treatment is confirmed.",
          "Review credits that remain open across two cycles. A credit that never resolves may indicate a missing approval, a customer dispute, or a portal feature that finance does not control. Assign the review to the owner of the credit, not to the person running the reconciliation. The reconciliation can surface the item, but it cannot decide the accounting treatment."
        ]
      },
      {
        "heading": "Resolve duplicates before they compound",
        "paragraphs": [
          "Duplicate payments are easiest to fix on the day they appear. Compare the portal reference, the bank reference, and the ERP receipt before recording a second payment. If two records describe the same transfer, mark one as the duplicate and link it to the original. Do not delete either record until the refund or reallocation is approved.",
          "Keep a duplicate log with the customer, amount, date, and resolution status. The log helps the team spot a portal retry or a customer double-click that affects several accounts. Review the log weekly and look for a repeated cause. A duplicate that recurs is a process signal, not just a one-off correction."
        ]
      },
      {
        "heading": "Document the reconciliation for month end",
        "paragraphs": [
          "The month-end file should show the opening difference, the items cleared during the period, the items added, and the closing difference. Each line needs a reference and a short explanation. A closing balance without the movement behind it is hard to defend. The file should let a reviewer follow one item from the portal through the ledger.",
          "Include the preparer, the reviewer, and the date of review. If an item is still open, name the owner and the expected resolution date. Do not mark the reconciliation complete while a material item has no owner. An honest open item is better than a forced zero difference."
        ]
      },
      {
        "heading": "Set a repeatable weekly rhythm",
        "paragraphs": [
          "Run the comparison on the same day each week and use the same cutoff. A predictable rhythm makes it easier to distinguish a new difference from an old one. Keep the prior week's file open while preparing the current one so carried items are not lost. The routine should take less time as the team learns the common causes.",
          "Every month, review the differences that took the longest to resolve. Ask whether the cause was a portal setting, an ERP rule, or a missing customer instruction. Fix the most frequent cause first. A reconciliation that only reports differences will keep producing the same work; one that feeds corrections back into the process will shrink over time."
        ]
      }
    ],
    "faq": [
      {
        "q": "Why pull both systems at the same cutoff?",
        "a": "A shared cutoff removes ordinary timing noise and makes the remaining differences meaningful."
      },
      {
        "q": "How should portal credits be handled?",
        "a": "As separate items with their own reference and approval status, not netted against receipts without evidence."
      },
      {
        "q": "What belongs in the month-end reconciliation file?",
        "a": "Opening difference, cleared items, new items, closing difference, references, owners, and reviewer sign-off."
      }
    ],
    "internalService": "/services/cash-application-support",
    "internalSibling": "/blog/build-a-cash-application-checklist-for-lockbox-remittances",
    "source": {
      "label": "Financial Accounting Standards Board",
      "url": "https://www.fasb.org/"
    }
  },
  {
    "slug": "write-an-ar-handoff-note-for-a-new-collections-specialist",
    "title": "Write an AR handoff note for a new collections specialist",
    "description": "What an accounts receivable handoff note must contain so a new specialist can act without repeating the whole investigation.",
    "category": "Role design",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/write-an-ar-handoff-note-for-a-new-collections-specialist.webp",
    "sections": [
      {
        "heading": "Name the account and the open question",
        "paragraphs": [
          "A handoff note begins with the customer, the account, and the one question the next person must answer. Do not start with a history of everything that has happened. The open question might be whether a disputed charge is valid, whether a payment plan was approved, or whether the account should move to a different owner. A note without a question leaves the next person to guess.",
          "State the current balance and the invoice or invoices involved. Include the currency and the age of the oldest open item. If the account has several entities, name the one that owns the question. Precision at the top of the note saves the specialist from opening five records to understand which one matters."
        ]
      },
      {
        "heading": "State what has already been tried",
        "paragraphs": [
          "List the contacts, dates, channels, and responses in a short timeline. The next specialist needs to know whether the customer was called, emailed, or sent a statement, and what happened after each attempt. A timeline that says contacted customer tells almost nothing. A timeline that says emailed accounts payable on the twelfth and received a read receipt but no reply is actionable.",
          "Include the messages or templates used, especially if the customer responded to a specific version. If a promise was made, record the exact date and amount. If a dispute was raised, record the claim and the evidence requested. The timeline should separate what the team did from what the customer said."
        ]
      },
      {
        "heading": "Record the customer's exact position",
        "paragraphs": [
          "Use the customer's own words for a dispute or a promise, then add a factual note about what was verified. Do not paraphrase a claim into a conclusion. If the customer says the delivery arrived late, record the delivery date and the evidence available. The next person can then test the claim instead of inheriting an assumption.",
          "Note any contact preference, language requirement, or authorized contact person. A customer who asked not to be called should not receive a call from the new specialist because the note omitted the preference. Sensitive details should be limited to what the work requires. The handoff is a working record, not a full customer profile."
        ]
      },
      {
        "heading": "Set the boundary for the next contact",
        "paragraphs": [
          "Say clearly what the next specialist may do and what requires approval. A routine reminder may be within scope, while a settlement, write-off, or credit change is not. Name the approver and the evidence they will need. A boundary that is written down prevents a well-meaning specialist from committing the business to terms it has not approved.",
          "Include the next contact date and the channel. If the customer asked for time until a specific date, the note should say so and explain why. If the account is on hold, state the reason and who can release it. The next action should be obvious enough that the specialist can start without a meeting."
        ]
      },
      {
        "heading": "Attach the evidence, not a summary alone",
        "paragraphs": [
          "Link the invoice, remittance, statement, correspondence, and any approval to the note. A summary without the underlying record is hard to defend when the customer disagrees. Use stable links or file names that the next person can open. If a document is missing, say so and name who is expected to provide it.",
          "Keep the evidence set small enough to review. A folder of fifty messages is not a handoff; it is a research project. Select the records that support the open question and the decision history. Put the rest in an archive with a clear label so the specialist knows where to look if the question changes."
        ]
      },
      {
        "heading": "Define what completion looks like",
        "paragraphs": [
          "Write the condition that closes the handoff. It might be a confirmed payment, a signed plan, a documented dispute decision, or a reassignment to another owner. The condition should be observable in a system record, not a feeling that the account is handled. A clear completion rule prevents the item from circulating between specialists.",
          "Name the person who confirms completion and the date of the last review. If the account remains open, say what will be different at the next review. A handoff that ends with monitor the account is not complete. It should end with a specific next check and a named owner."
        ]
      },
      {
        "heading": "Review the first handoffs together",
        "paragraphs": [
          "Read the first few handoff notes with the new specialist before the work starts. Ask the specialist to explain the open question, the next action, and the evidence in their own words. If they cannot, the note is missing something. This review is faster than correcting a misdirected customer contact later.",
          "Update the note template after the review. Remove fields nobody uses, add a field that repeatedly causes questions, and rewrite any instruction that was misread. Keep the template short enough to complete during a normal shift. A handoff process that depends on heroic documentation will fail when volume rises."
        ]
      }
    ],
    "faq": [
      {
        "q": "What is the first thing an AR handoff note should state?",
        "a": "The customer, the account, and the single open question the next specialist must answer."
      },
      {
        "q": "Should a handoff include every customer message?",
        "a": "No, include the records that support the open question and decision history, with an archive pointer for the rest."
      },
      {
        "q": "What makes a handoff complete?",
        "a": "An observable closing condition, a named confirmer, and a specific next review date if the account stays open."
      }
    ],
    "internalService": "/services/collections-coordination",
    "internalSibling": "/blog/plan-a-weekly-collections-stand-up-that-reviews-evidence-not-activity",
    "source": {
      "label": "O*NET OnLine",
      "url": "https://www.onetonline.org/"
    }
  },
  {
    "slug": "audit-a-customer-master-record-before-the-next-billing-cycle",
    "title": "Audit a customer master record before the next billing cycle",
    "description": "A focused pre-billing audit of customer identity, terms, contacts, and duplicates that prevents avoidable invoice exceptions.",
    "category": "Master data",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/audit-a-customer-master-record-before-the-next-billing-cycle.webp",
    "sections": [
      {
        "heading": "Check the billing identity first",
        "paragraphs": [
          "Confirm the legal entity, billing name, address, and tax identifier against an approved source. The source might be a signed contract, a completed tax form, or a verified customer portal record. Do not rely on the name that appears in an email signature. A small identity error can send an invoice to the wrong entity or create a tax problem that takes weeks to correct.",
          "Check whether the account is part of a parent or subsidiary structure that changes the billing relationship. A purchase order may be issued by one entity while the invoice must go to another. Record the relationship and the evidence in the account note. The billing team should not have to rediscover it when the next order arrives."
        ]
      },
      {
        "heading": "Verify terms and currency",
        "paragraphs": [
          "Read the payment terms, discount rules, and currency from the contract rather than from the last invoice. A copied invoice can carry an outdated discount or a term that was renegotiated. Confirm the effective date and the approver for any change. If the terms are ambiguous, route the question before the cycle starts.",
          "Check the rounding and tax settings that the billing system will apply. A currency mismatch or a missing tax rule can produce an invoice that looks correct in one system and wrong in another. Test one sample invoice from the account before the batch runs. The test is cheaper than a credit memo and a customer conversation."
        ]
      },
      {
        "heading": "Confirm the delivery and contact fields",
        "paragraphs": [
          "Verify the invoice delivery address, the accounts payable contact, and the preferred channel. A portal-only customer should not receive a PDF by email unless the contract allows it. A contact who has left the company should be replaced through the approved change process, not by editing the record from memory. Keep the evidence for the change.",
          "Check for role-based contacts rather than personal names. An accounts payable mailbox is more durable than one employee's address. If the customer requires a named contact, record a backup role. The goal is to reduce the chance that a routine invoice bounces because one person changed jobs."
        ]
      },
      {
        "heading": "Look for duplicate customer records",
        "paragraphs": [
          "Search for the same tax identifier, billing address, and remittance reference across the customer master. Duplicates often appear after an acquisition, a portal migration, or a sales representative creating a new record instead of using an existing one. Two records can split payments and make the aging report look worse than the underlying relationship. Record the search fields and the result so the duplicate check can be repeated next cycle.",
          "Do not merge records without a documented review. A merge can move open invoices, contacts, and payment history, and it is difficult to reverse. Identify the surviving record, list the items to move, and get approval from the account owner. Keep a before-and-after reference so a later reviewer can follow the change."
        ]
      },
      {
        "heading": "Test change requests against evidence",
        "paragraphs": [
          "Every change to bank details, billing identity, or tax status should follow a verified path. Use a known contact and a callback to a number on file, not a number supplied in the request. Record who verified the change and when. Bank-detail fraud often starts with a convincing email that asks for a quiet update before the next payment.",
          "Keep the old value and the new value in the audit history. Do not overwrite a field without a trace. If the change is urgent, complete the verification first and document the urgency separately. A fast change that cannot be explained later is a risk to the customer and to the finance team."
        ]
      },
      {
        "heading": "Freeze a clean copy for billing",
        "paragraphs": [
          "Once the audit is complete, freeze the approved fields used by the billing run. Any later change should go through the same review rather than being edited during the run. A frozen copy gives the billing team a stable reference and makes exceptions easier to spot. It also prevents a last-minute edit from affecting invoices already in progress.",
          "Compare the frozen copy with the live record before the batch starts. If they differ, resolve the difference before proceeding. Record the comparison time and the reviewer. The freeze is not a permanent lock; it is a control that separates approved data from changes that still need evidence."
        ]
      },
      {
        "heading": "Schedule the next audit window",
        "paragraphs": [
          "Set the next review date based on the account's risk and activity. A high-volume account with frequent changes may need a quarterly check, while a stable account may need only an annual one. Put the date in the account record so it does not depend on someone remembering. The audit should happen before the cycle, not after a failure.",
          "Review the exceptions found in the last audit to see whether the same fields fail again. A repeated failure is a process problem, not a data-entry accident. Fix the intake form, the verification step, or the field ownership. The purpose of the audit is a cleaner billing cycle, not a longer checklist."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a pre-billing customer audit check first?",
        "a": "Legal identity, billing name, address, and tax identifier against an approved source."
      },
      {
        "q": "How should duplicate customer records be handled?",
        "a": "Identify the surviving record, list the items to move, and get account-owner approval before merging."
      },
      {
        "q": "Why freeze the customer record before billing?",
        "a": "To separate approved data from unverified edits and give the billing run a stable reference."
      }
    ],
    "internalService": "/services/customer-account-maintenance",
    "internalSibling": "/blog/handle-a-short-payment-without-losing-the-dispute-trail",
    "source": {
      "label": "IRS Publication 583, Starting a Business and Keeping Records",
      "url": "https://www.irs.gov/publications/p583"
    }
  },
  {
    "slug": "handle-a-short-payment-without-losing-the-dispute-trail",
    "title": "Handle a short payment without losing the dispute trail",
    "description": "A controlled process for recording a short payment, preserving the customer's claim, and closing the deduction with evidence.",
    "category": "Exceptions",
    "publishedAt": "2026-11-08",
    "readTime": "9 min read",
    "thumbnail": "/thumbnails/november-08/handle-a-short-payment-without-losing-the-dispute-trail.webp",
    "sections": [
      {
        "heading": "Capture the payment exactly as received",
        "paragraphs": [
          "Record the amount, date, reference, and remittance exactly as the bank or portal shows them. Do not adjust the receipt to match the invoice before the difference is understood. The short payment is the evidence, and changing it early destroys the trail. Apply the amount received and leave the remainder visible as an open item.",
          "Attach the customer's remittance and any message that explains the deduction. If the explanation arrived in a separate email, link it to the payment record. A note that says customer short paid is not enough. The next reviewer needs to see the customer's stated reason and the amount withheld."
        ]
      },
      {
        "heading": "Identify what the customer withheld",
        "paragraphs": [
          "Compare the payment to the invoice line by line. The difference may be a freight charge, a tax amount, a disputed unit price, or a credit the customer believes is owed. Write the specific line and amount in the dispute record. A total difference of two hundred dollars can represent four different issues that need different owners.",
          "If the remittance does not identify the line, ask the customer for the detail in writing. Do not guess from the size of the difference. A guess can send the case to the wrong department and delay the real answer. The request should name the invoice, the amount received, and the specific information needed."
        ]
      },
      {
        "heading": "Ask for the missing explanation in writing",
        "paragraphs": [
          "Use a short message that asks for the customer's calculation, supporting document, and desired resolution. Keep the tone neutral and make it easy to respond. Include a deadline that gives the customer a reasonable chance to gather records. The message should not promise a credit or a write-off before the claim is reviewed.",
          "Record the date the request was sent and the date the response arrived. If the customer calls instead, write a summary of the call and send a confirmation email. The written record protects both sides and gives the reviewer something to test. A verbal explanation that is never documented will be reconstructed differently later."
        ]
      },
      {
        "heading": "Keep the invoice open in a controlled state",
        "paragraphs": [
          "Do not close the invoice or mark it paid while a deduction is unresolved. Use a status that shows the amount received, the amount disputed, and the amount still collectible. The status should be visible in the aging report so the account is not treated as a clean payer. A hidden dispute distorts both the aging and the forecast.",
          "Set a review date for the open balance. If the customer has not provided evidence by that date, the next step should be written down. The step might be a reminder, an escalation, or a decision to accept the deduction with approval. The important control is that the item cannot sit indefinitely without a named owner."
        ]
      },
      {
        "heading": "Set a decision date for the deduction",
        "paragraphs": [
          "A deduction needs a decision date because open disputes tend to age into write-offs without anyone choosing them. Name the person who can approve the resolution and the evidence they need. For a small, well-documented deduction, the decision may be routine. For a large or repeated claim, the decision should include a review of the underlying cause.",
          "Record the decision and the reasoning in the dispute file. If the deduction is accepted, show the approval and the accounting treatment. If it is rejected, show the evidence sent to the customer and the next collection step. A decision that exists only in a meeting is not a control."
        ]
      },
      {
        "heading": "Close only with a named approval",
        "paragraphs": [
          "The dispute can close when the payment, credit, or adjustment is recorded and the approver is named. Check that the invoice balance, the customer account, and the general ledger agree. A closure that fixes one record but leaves another open creates a reconciliation problem later. The reviewer should verify all three before signing off.",
          "Keep the closed file available for the next audit or customer question. Include the original receipt, the remittance, the correspondence, the decision, and the approval. A closed dispute with a complete file is easier to defend than one that relies on the memory of the person who handled it. A file that can be produced on request is the strongest evidence that the closure was controlled."
        ]
      },
      {
        "heading": "Feed the result back into billing",
        "paragraphs": [
          "Review short payments for patterns by customer, invoice type, and reason. A recurring freight deduction may point to a delivery term that is not reflected in the invoice. A recurring tax difference may point to a master-data error. The dispute process should produce a fix, not just a series of closures.",
          "Share the pattern with the billing and customer teams in a short monthly note. Name the most frequent cause and the change being made. If the cause is outside finance, assign the follow-up to the owner who can change it. The goal is fewer short payments next month, not faster paperwork this month."
        ]
      }
    ],
    "faq": [
      {
        "q": "Should a short payment be applied to the invoice?",
        "a": "Apply the amount received and keep the remainder open with the customer's stated reason and evidence attached."
      },
      {
        "q": "What if the customer does not explain the deduction?",
        "a": "Request the calculation and supporting document in writing, then set a dated next step for the open balance."
      },
      {
        "q": "Who should close a disputed deduction?",
        "a": "A named approver who confirms the customer account, invoice, and ledger all agree."
      }
    ],
    "internalService": "/services/dispute-documentation",
    "internalSibling": "/blog/audit-a-customer-master-record-before-the-next-billing-cycle",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/"
    }
  },
  {
    "slug": "plan-a-weekly-collections-stand-up-that-reviews-evidence-not-activity",
    "title": "Plan a weekly collections stand-up that reviews evidence, not activity",
    "description": "A short weekly meeting design that turns the collections queue into decisions, owners, and dated next actions.",
    "category": "Collections",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/plan-a-weekly-collections-stand-up-that-reviews-evidence-not-activity.webp",
    "sections": [
      {
        "heading": "Set the one question the meeting answers",
        "paragraphs": [
          "A collections stand-up should answer one question: which accounts need a decision this week, and who will make it. Everything else belongs in the written queue. If the meeting tries to review every account, it becomes a status report and the important decisions get lost. Write the question at the top of the agenda and use it to cut anything that does not help answer it.",
          "Choose the accounts before the meeting, not during it. The queue owner should select the items that are blocked, aging beyond a threshold, or waiting on an approval. Send the short list with the evidence in advance. Participants should arrive having read the list, not waiting for a presentation."
        ]
      },
      {
        "heading": "Prepare a short evidence pack",
        "paragraphs": [
          "For each selected account, prepare a one-page summary with the balance, the oldest item, the last contact, the open question, and the proposed next action. Keep the summary factual and dated. If a document is missing, say so. The pack should let a decision maker understand the case in under two minutes.",
          "Do not include the entire correspondence history. Link the relevant records and summarize the rest. A pack that takes an hour to read will not be read. The purpose is to support a decision, not to prove how much work has been done. A short pack with clear evidence is more persuasive than a long narrative."
        ]
      },
      {
        "heading": "Review accounts by next action",
        "paragraphs": [
          "Group the accounts by the action they need: approve a payment plan, decide a dispute, release a hold, escalate to legal, or assign a new owner. This structure turns a list of customers into a list of decisions. It also shows when several accounts need the same approver, which may reveal a bottleneck. The grouping also shows when one approver is the bottleneck for several accounts.",
          "For each group, ask what would change the current position. If nothing would change it, the account may not need a meeting item yet. Move it back to the queue with a future review date. The stand-up should spend its time on accounts where a decision can move the work forward."
        ]
      },
      {
        "heading": "Limit the meeting to decisions",
        "paragraphs": [
          "Do not read updates that everyone already has in writing. Do not retell the history of an account unless it changes the decision. Ask the decision maker for a choice, a condition, or a request for specific evidence. Record the answer in the queue during the meeting so it is not reconstructed afterward.",
          "If a decision cannot be made in the meeting, name the missing person or evidence and set a date. An unresolved item should leave with an owner, not with a promise to follow up. The meeting is successful when every discussed account has a next action and a date, even if some actions are still pending. The next agenda should open with those unresolved items before adding new ones."
        ]
      },
      {
        "heading": "Assign owners in the room",
        "paragraphs": [
          "An action without a named owner is a suggestion. Assign each next step to one person and confirm that the person accepts it. If the owner is not in the room, the meeting chair should confirm the assignment before the meeting ends. Record the owner beside the action in the queue.",
          "Keep the number of actions realistic for the week. A list of thirty actions after a one-hour meeting will not be completed. Choose the few that matter most and leave the rest in the queue with their existing dates. The team should leave knowing what it has committed to, not overwhelmed by a new backlog."
        ]
      },
      {
        "heading": "Follow up with a dated note",
        "paragraphs": [
          "Send a short written summary within the same day. Include the decisions, the owners, the dates, and the items that remain open. Do not include a full transcript. The summary should be usable by someone who missed the meeting and by the next reviewer who opens the account.",
          "Check the summary against the queue before sending it. A decision recorded in the meeting but missing from the system will be lost. A queue update that contradicts the summary will create confusion. The written record and the system record should tell the same story."
        ]
      },
      {
        "heading": "Measure whether the meeting changed anything",
        "paragraphs": [
          "At the end of the month, review the actions that came out of the stand-up. How many were completed by the stated date, and how many moved the account forward? A meeting that produces actions but no movement is not working. Look for patterns in the delays and change the meeting design or the decision authority.",
          "Also ask participants whether the meeting helped them decide. A short survey is enough. If the answer is no, cut the agenda further and move more preparation into writing. The goal is a meeting that saves time and improves decisions, not one that adds another recurring obligation to the calendar."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a collections stand-up decide?",
        "a": "Which accounts need a decision this week and who will make it, with a dated next action for each."
      },
      {
        "q": "How many accounts should be on the agenda?",
        "a": "Only the blocked or aging items that need a decision, with a short evidence pack sent in advance."
      },
      {
        "q": "How do you know the meeting worked?",
        "a": "Actions are completed by their dates and accounts move forward, not just that the meeting happened."
      }
    ],
    "internalService": "/services/aging-report-preparation",
    "internalSibling": "/blog/write-an-ar-handoff-note-for-a-new-collections-specialist",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
    }
  }
];
