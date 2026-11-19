import type { Service, SiteConfig } from './types';

type ServiceDetail = Pick<Service, 'problemHeading' | 'outcomeHeading' | 'outcome' | 'workflowHeading' | 'workflow' | 'boundaries' | 'qualityHeading' | 'quality' | 'faq'>;

const serviceDetails: Record<string, ServiceDetail> = {
  'invoice-preparation': {
    problemHeading: 'Invoice drafts stall when their source records do not agree.',
    outcomeHeading: 'A draft the billing owner can verify.',
    outcome: 'The billing owner receives a draft tied to its order, service, rate, customer, and delivery evidence, with missing or conflicting inputs clearly flagged.',
    workflowHeading: 'Prepare a draft the billing owner can verify.',
    workflow: [
      'Confirm the customer, billing period, approved order or contract, and current rate source for the invoice batch.',
      'Compare draft fields with those approved records; record a mismatch instead of changing pricing or tax treatment.',
      'Attach service, fulfillment, and delivery evidence, then label any missing or conflicting detail.',
      'Route complete drafts and exceptions to the billing owner and record whether each item is accepted, revised, or held.'
    ],
    boundaries: [
      'Prepare invoice drafts only; authorized billing staff decide when an invoice may be issued.',
      'Do not interpret tax rules, approve rates, alter customer terms, or choose accounting treatment.',
      'Do not invent purchase-order, service, delivery, or approval evidence to clear a billing deadline.',
      'Route recipient or account changes through the customer-verification process before using them.'
    ],
    qualityHeading: 'Check the packet before billing review.',
    quality: [
      'Tie each draft line to the approved order, contract, service record, and applicable rate source.',
      'Check required customer, period, destination, and support fields; separate missing data from an approved exception.',
      'Sample corrections and repeat exceptions so instructions improve without silently changing policy.'
    ],
    faq: [
      { q: 'Can the specialist send or approve an invoice?', a: 'No. The specialist prepares the draft and evidence packet; the authorized billing owner approves and issues the invoice.' },
      { q: 'What happens when the order and rate source conflict?', a: 'Preserve both references, identify the exact conflict, and route it to the owner instead of selecting a value.' },
      { q: 'Which sources are used to prepare a draft?', a: 'Only client-approved order, contract, service, delivery, customer, and billing-instruction records defined in the workflow.' }
    ]
  },
  'cash-application-support': {
    problemHeading: 'Receipts remain unresolved when remittance and invoice evidence diverge.',
    outcomeHeading: 'Receipts that stay traceable.',
    outcome: 'The cash application owner sees each receipt linked to its bank or lockbox source and remittance, while unmatched amounts and uncertain payer evidence remain separate.',
    workflowHeading: 'Move from receipt capture to proposed allocation review.',
    workflow: [
      'Capture the receipt identifier, amount, value date, payer evidence, and original bank or lockbox source.',
      'Attach remittance advice and compare only against invoice references allowed by the written matching rules.',
      'Record proposed allocations separately from unmatched amounts, fees, short payments, and conflicting candidates.',
      'Send the evidence packet to the authorized posting owner and record the accepted disposition or follow-up.'
    ],
    boundaries: [
      'Prepare and reconcile proposals; only authorized finance staff apply cash or post journal entries.',
      'Never force a match because an amount or customer name looks familiar or the queue is aging.',
      'Do not approve refunds, write-offs, bank changes, or adjustments to customer balances.',
      'Route unidentified, duplicate, reversed, or conflicting receipts with the original source preserved.'
    ],
    qualityHeading: 'Tie every proposal back to the original receipt.',
    quality: [
      'Reconcile proposed allocations and remaining balances to the bank or lockbox amount.',
      'Keep payer, remittance, invoice candidates, tolerance rule, and reviewer visible on the same record.',
      'Sample unmatched and reversed items as well as clean applications to expose weak matching rules.'
    ],
    faq: [
      { q: 'Can the specialist post or apply customer cash?', a: 'No. The role prepares the evidence and proposed allocation; an authorized finance owner retains posting approval.' },
      { q: 'How are partial payments handled?', a: 'Record the received amount, linked remittance, supported invoice candidates, and remaining difference separately for review.' },
      { q: 'What if remittance advice is missing?', a: 'Keep the receipt in an unmatched state, record the missing evidence, assign an owner, and follow the approved research path.' }
    ]
  },
  'aging-report-preparation': {
    problemHeading: 'An aging export is not an action queue until ownership is reconciled.',
    outcomeHeading: 'An aging view that points to the next action.',
    outcome: 'Finance receives a dated aging view that connects each balance to its source, current owner, next action, and unresolved exception.',
    workflowHeading: 'Turn a frozen aging snapshot into reviewable next actions.',
    workflow: [
      'Use the approved report version, as-of date, population, and aging-bucket definitions.',
      'Reconcile report totals to the approved ledger or source extract and record any variance.',
      'Check owner, status, dispute, and next-action fields; flag stale or unsupported balances.',
      'Route ownerless accounts, material variances, and policy questions to the accountable finance or collections lead.'
    ],
    boundaries: [
      'Prepare operational aging views; the finance owner determines collectability and accounting treatment.',
      'Do not change due dates, balances, reserve assumptions, credit holds, or write-off status.',
      'Do not infer a next action from a balance alone or promise a customer outcome.',
      'Preserve the report date, source version, filters, and limitations alongside the view.'
    ],
    qualityHeading: 'Make the aging view traceable to its snapshot.',
    quality: [
      'Verify the as-of date, population, aging bands, totals, and source version before distribution.',
      'Keep unassigned, disputed, unapplied, stale, and unsupported items in distinct visible states.',
      'Sample balances back to source records and document any corrected owner or status fields.'
    ],
    faq: [
      { q: 'Can the specialist recommend who should collect an account?', a: 'The specialist can prepare owner and status fields from the approved map; the collections or finance lead assigns responsibility and decides strategy.' },
      { q: 'What if the aging total does not tie to the ledger?', a: 'Keep the variance visible, record the source and report versions, and route it for reconciliation rather than changing the total.' },
      { q: 'Can an aging report determine a bad-debt reserve?', a: 'No. The role prepares traceable operational data; qualified accounting owners make reserve and financial-statement judgments.' }
    ]
  },
  'collections-coordination': {
    problemHeading: 'Follow-up becomes risky when messages, preferences, and exceptions lose context.',
    outcomeHeading: 'Follow-up the owner can reconstruct.',
    outcome: 'Collections owners can see which approved message was used, the customer response as stated, current contact preferences, and the next review date.',
    workflowHeading: 'Coordinate approved follow-up without taking over the decision.',
    workflow: [
      'Confirm account scope, approved contact channel, preference record, message version, and follow-up date.',
      'Prepare the queue and send only the client-approved template through an authorized channel.',
      'Record the exact response, promise conditions, dispute, request, date, and source without paraphrasing away meaning.',
      'Pause routine follow-up on disputes, sensitive requests, or changed commitments and route them to the named owner.'
    ],
    boundaries: [
      'Coordinate approved messages; authorized staff set collection strategy, negotiate terms, and approve concessions.',
      'Do not make legal threats, promise waivers, change payment terms, or describe an account as resolved without evidence.',
      'Honor the documented contact preference and route requests that change channel, scope, or identity.',
      'Stop the sequence when a dispute, bankruptcy notice, legal request, or other policy trigger appears.'
    ],
    qualityHeading: 'Keep each contact inside the approved sequence.',
    quality: [
      'Verify the current message version, account scope, and contact preference before use.',
      'Record actual contact time, channel, response, conditions, and next action without adding a promise.',
      'Sample stopped sequences and routed exceptions as well as completed reminders.'
    ],
    faq: [
      { q: 'Can the specialist negotiate payment terms?', a: 'No. The specialist records customer statements and coordinates approved follow-up; an authorized owner decides terms or concessions.' },
      { q: 'How should a promise to pay be recorded?', a: 'Capture the customer’s wording, amount, conditions, date, source, and follow-up owner without converting it into a guarantee.' },
      { q: 'What happens when a customer disputes an invoice?', a: 'Pause the routine sequence, preserve the exact statement and evidence, and route the case to the dispute or finance owner.' }
    ]
  },
  'dispute-documentation': {
    problemHeading: 'Dispute resolution slows when claims and supporting records are fragmented.',
    outcomeHeading: 'Evidence organized for a human decision.',
    outcome: 'Commercial and finance decision-makers receive one indexed packet connecting the customer claim to the invoice, order, fulfillment, correspondence, and missing evidence.',
    workflowHeading: 'Build a dispute packet that preserves the source trail.',
    workflow: [
      'Capture the customer statement, disputed amount, invoice, date, channel, and current owner.',
      'Link approved order, service, fulfillment, delivery, receipt, and prior correspondence records.',
      'Index missing, conflicting, or superseded evidence without deciding which account is correct.',
      'Route a bounded decision request to the authorized commercial or finance owner and record the disposition.'
    ],
    boundaries: [
      'Organize evidence and track requests; the authorized owner decides dispute validity and any remedy.',
      'Do not approve credits, write-offs, deductions, accounting changes, or customer commitments.',
      'Preserve original statements and corrections; do not replace a conflict with a single preferred version.',
      'Escalate legal, tax, delivery, safety, or contract interpretation to the designated qualified owner.'
    ],
    qualityHeading: 'Give reviewers a complete, indexed evidence packet.',
    quality: [
      'Link each artifact to its customer, invoice, source, date, and relevant claim point.',
      'Keep missing evidence, customer assertions, internal records, and disputed values clearly distinguished.',
      'Confirm the packet records the decision owner, request, status, and next response date.'
    ],
    faq: [
      { q: 'Can the specialist decide whether a deduction is valid?', a: 'No. The specialist assembles the customer claim and supporting records for the authorized commercial or finance owner.' },
      { q: 'What if the packet is incomplete?', a: 'List the exact missing item and its source owner, then leave the dispute open until the reviewer can assess it.' },
      { q: 'Can support send a customer response?', a: 'Only approved acknowledgments or document requests within the written communication boundary; resolution language stays with the decision owner.' }
    ]
  },
  'customer-account-maintenance': {
    problemHeading: 'Customer records drift when changes lack verification and ownership.',
    outcomeHeading: 'Customer changes with a clear audit trail.',
    outcome: 'Billing teams receive a traceable change record showing the request source, permitted field, before-and-after values, verification, approver, and effective date.',
    workflowHeading: 'Verify the request before preparing an account update.',
    workflow: [
      'Capture the customer key, requested field, current value, request source, and named approver.',
      'Verify the request through a known, approved channel independent of the change request itself.',
      'Update only fields listed in the role permissions and retain before-and-after evidence.',
      'Confirm the destination record and route bank, tax, credit, identity, or conflicting changes through their separate controls.'
    ],
    boundaries: [
      'Maintain only the customer fields expressly permitted by the client’s written access map.',
      'Do not change bank instructions, credit limits, payment terms, tax status, or legal identity without an independent approval process.',
      'Do not verify a sensitive request using only contact details supplied in that same request.',
      'Preserve the prior value and audit history; never overwrite a required change record.'
    ],
    qualityHeading: 'Keep every account change independently reviewable.',
    quality: [
      'Confirm the request source, known-channel verification, approver, effective date, and permitted field.',
      'Compare the saved destination value with the approved request and preserve the previous value.',
      'Sample sensitive or conflicting requests to verify that they were stopped and routed correctly.'
    ],
    faq: [
      { q: 'Can the specialist change bank details?', a: 'No. Banking changes require the client’s separate authorization and independent verification procedure.' },
      { q: 'How is a billing contact change verified?', a: 'Use a known contact path already on file, then record who verified the request, when, and through which approved channel.' },
      { q: 'Which customer fields can be maintained?', a: 'Only the non-sensitive fields listed in the client’s written role permissions; unclear or high-risk fields are routed for review.' }
    ]
  }
};

const service = (data: Pick<Service, 'slug' | 'name' | 'short' | 'audience' | 'problem' | 'scope' | 'inputs' | 'outputs' | 'scenarios' | 'related'>): Service => ({
  ...data,
  ...serviceDetails[data.slug]
});

export const site: SiteConfig = {
  name: 'Accounts Receivable Specialist', domain: 'accountsreceivablespecialist.com', siteId: 'accounts-receivable-specialist', niche: 'accounts receivable teams', audience: 'controllers, finance leaders, and business owners', design: 'ledger',
  eyebrow: 'Receivables operations with a visible pulse', hero: 'Make every open balance', heroAccent: 'easier to act on.',
  heroBody: 'Specialist remote assistants support invoice preparation, cash application records, aging views, approved collections follow up, dispute documentation, and customer account maintenance for finance teams.',
  manifesto: 'A useful receivables system turns every balance into a documented owner, status, and next action.',
  primary: '#087d70', secondary: '#72d6bc', accent: '#d8a82c', canvas: '#f1fbf7', ink: '#10352f', displayFont: 'Century Schoolbook', bodyFont: 'Trebuchet MS',
  heroImage: '/images/home-receivables-review.jpg', heroAlt: 'Two finance professionals reviewing a document beside a laptop',
  services: [
    service({slug:'invoice-preparation',name:'Invoice preparation support',short:'Prepare invoice records and supporting detail for accountable review.',audience:'Billing managers, controllers, and finance teams with recurring invoice preparation queues.',problem:'Drafts stall when order details, rate sources, delivery destinations, and approvals are scattered across systems.',scope:['Check approved billing sources and customer records','Prepare invoice drafts without issuing or approving them','Attach order, service, and delivery support','Flag missing details and source conflicts'],inputs:['Approved order or contract data','Service or fulfillment evidence','Current customer billing instructions','Written tax, fee, and approval rules'],outputs:['Review-ready invoice draft','Linked support packet','Exception record with owner and due point','Queue status and next action'],scenarios:[{title:'Recurring billing queue',detail:'Prepare a controlled batch from approved source records for billing-owner review.'},{title:'Missing source detail',detail:'Hold the draft, name the missing evidence, and route a bounded question to the owner.'}],related:['customer-account-maintenance','dispute-documentation']}),
    service({slug:'cash-application-support',name:'Cash application support',short:'Organize payment records and exceptions for qualified review.',audience:'Cash application leads and controllers managing remittance and unmatched receipt queues.',problem:'Receipts remain unapplied when payer identity, remittance, invoice candidates, or allocation evidence is incomplete.',scope:['Prepare payment records','Match only approved references','Document unmatched or conflicting items','Route proposed applications for qualified approval'],inputs:['Bank or lockbox receipt record','Customer remittance evidence','Open invoice records','Approved matching and tolerance rules'],outputs:['Proposed application packet','Unmatched cash exception record','Evidence links and confidence note','Reviewer-ready reconciliation queue'],scenarios:[{title:'Clear remittance',detail:'Assemble the receipt, customer, invoice, and remittance trail for authorized posting review.'},{title:'Conflicting allocation',detail:'Preserve each candidate and stop for qualified judgment rather than forcing a match.'}],related:['aging-report-preparation','customer-account-maintenance']}),
    service({slug:'aging-report-preparation',name:'Aging report preparation',short:'Create clean operational views of balances, ownership, and next actions.',audience:'Controllers and collections leaders who need a usable view of open receivables work.',problem:'An aging export does not become an operating queue until balances, owners, exceptions, and next actions are reconciled.',scope:['Compile approved aging data','Check owner and status fields','Prepare concise action notes','Flag stale, disputed, or unsupported records'],inputs:['Frozen aging report or ledger export','Customer and invoice identifiers','Approved owner map','Status and exception definitions'],outputs:['Prepared aging view','Owner and next-action queue','Stale-record exception list','Reconciliation notes for finance review'],scenarios:[{title:'Weekly aging review',detail:'Prepare a consistent view of open balances and documented actions before the team meeting.'},{title:'Ownership gap',detail:'Route unassigned or conflicting accounts to the accountable manager for assignment.'}],related:['collections-coordination','cash-application-support']}),
    service({slug:'collections-coordination',name:'Collections coordination',short:'Support approved customer follow up with documented boundaries.',audience:'Collections managers and finance teams with approved business-to-business follow up workflows.',problem:'Follow up becomes risky when contact preferences, message versions, promises, disputes, and escalation rules are unclear.',scope:['Prepare approved follow up queues','Send authorized message templates','Record customer responses accurately','Route disputes, commitments, and sensitive exceptions'],inputs:['Approved aging and contact queue','Current message templates','Contact preference register','Escalation and communication policy'],outputs:['Documented contact activity','Response and commitment record','Dispute or exception handoff','Queue status with accountable owner'],scenarios:[{title:'Routine reminder queue',detail:'Send the approved message through the permitted channel and record the result.'},{title:'Customer raises a dispute',detail:'Stop routine follow up and route the exact statement with supporting records.'}],related:['dispute-documentation','aging-report-preparation']}),
    service({slug:'dispute-documentation',name:'Dispute documentation',short:'Maintain clear source records around customer questions and deductions.',audience:'Finance and commercial teams that need complete dispute packets before making account decisions.',problem:'Resolution slows when customer claims, invoice evidence, fulfillment records, amounts, and ownership are fragmented.',scope:['Index supporting records','Document the customer statement and issue status','Track requested materials','Escalate unresolved or sensitive items'],inputs:['Customer correspondence','Invoice and order records','Fulfillment or delivery evidence','Approved issue codes and owner map'],outputs:['Structured dispute packet','Evidence index and missing-item list','Current owner and decision request','Documented resolution handoff'],scenarios:[{title:'Short payment claim',detail:'Assemble the invoice, remittance, claim, and fulfillment evidence for commercial review.'},{title:'Incomplete packet',detail:'Return a precise missing-item request without deciding whether the claim is valid.'}],related:['invoice-preparation','collections-coordination']}),
    service({slug:'customer-account-maintenance',name:'Customer account maintenance',short:'Keep approved billing contacts, terms, and status fields current.',audience:'Billing and finance operations teams maintaining high-use customer master data.',problem:'Outdated recipients, preferences, terms, and ownership fields create avoidable delivery and follow up exceptions.',scope:['Update only approved fields','Verify contact-change evidence','Maintain account notes and preferences','Flag conflicting or high-risk instructions'],inputs:['Authorized change request','Known-channel verification evidence','Current customer master record','Field ownership and approval rules'],outputs:['Updated authorized fields','Change evidence and audit note','Conflict or fraud-risk exception','Confirmation to the accountable owner'],scenarios:[{title:'Billing contact change',detail:'Verify the request through the approved path before preparing the controlled update.'},{title:'Bank-detail request',detail:'Do not process it in this role; pause and escalate through the organization’s security procedure.'}],related:['invoice-preparation','collections-coordination']})
  ],
  categories: ['Invoice operations','Cash application','Collections workflow','Role design'],
  principles: ['Selective matching','Clear role boundaries','Reviewable workflows'],
  sources: [{label:'Financial Accounting Standards Board',url:'https://www.fasb.org/'}]
};
