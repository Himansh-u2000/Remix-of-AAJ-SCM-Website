import type { FaqItem } from "./schema";

/**
 * Registry of FAQs keyed by route. The same array is the single source
 * of truth for both the visible <FaqSection> on the page AND the
 * FAQPage JSON-LD emitted by <Seo>.
 *
 * Add an entry here when a page gets an FAQ section, then render it on
 * the page with `<FaqSection items={pageFaqs["/your-route"]} />`.
 */
export const pageFaqs: Record<string, FaqItem[]> = {
  "/services/warehousing": [
    { question: "Do you work with businesses of all sizes, including startups?", answer: "Yes. We believe in growing together. There's no minimum volume requirement." },
    { question: "What types of products do you handle as a warehousing company?", answer: "FMCG, apparel, books, healthcare, personal care, automotive, chemicals and e-commerce. If your product has specific needs, just talk to us." },
    { question: "Are there hidden charges like racking fees or tech setup costs?", answer: "No. Everything is agreed upfront with our warehousing service. No surprise invoices." },
    { question: "Can you handle returns and reverse logistics?", answer: "Yes. Returns are inspected, segregated and either restocked or flagged - fully documented at every step." },
    { question: "What happens to damaged goods that come back?", answer: "Every return is QC-checked and categorised as sellable, repairable or write-off. Nothing gets restocked without passing inspection." },
    { question: "Are your warehouses GST-compliant? Can you support e-way bill generation?", answer: "Yes to both. Our warehouse service in India ensures every outward dispatch is fully documented and audit-ready." },
  ],
  "/warehouses": [
    { question: "Can I start with just one warehouse and expand my network later?", answer: "Yes. You can launch in a single facility and add new locations as you grow. Our unified WMS ensures a seamless transition with zero extra tech integration." },
    { question: "How long does it take to go live at a new AAJ SCM warehouse location?", answer: "Most clients are operationally live within 1–2 weeks of onboarding, depending on integration complexity and incoming inventory volume. AAJ manages the setup process end to end." },
    { question: "Which courier partners does AAJ Supply Chain work with?", answer: "AAJ Swift enables seamless logistics by integrating with all major courier and PTL partners across India, including Delhivery, Blue Dart, Ekart, Xpressbees and more." },
    { question: "Do you support FEFO/FIFO and batch management?", answer: "Yes. Our WMS supports strict SKU-level configurations for First In, First Out (FIFO) and First Expire, First Out (FEFO) to minimize wastage for shelf-life-sensitive goods." },
    { question: "How do you handle sudden, unplanned volume spikes?", answer: "Our shared warehousing model and agile workforce provide an instant buffer. We quickly reallocate resources to absorb unexpected order surges while maintaining strict SLAs." },
  ],
  "/warehouses/delhi": [
    { question: "Do I need a Delhi GST registration to store inventory here?", answer: "Not always. You can usually add the Delhi warehouse as an Additional Place of Business (APOB) under your existing GST." },
    { question: "How is COD handled for deliveries within Delhi NCR?", answer: "COD orders are processed through courier partners, and reconciliation is shared based on their settlement cycles with clear reporting." },
    { question: "Will I be able to track inventory stored in your Delhi warehouse in real time?", answer: "Yes. You get real-time visibility of stock levels, order status, and dispatch tracking through system reports." },
    { question: "Can I send inventory directly to your Delhi warehouse from another city?", answer: "Yes. Inventory can be shipped directly to the Delhi facility and processed without requiring a local office setup." },
    { question: "What kind of brands use your Delhi fulfilment centers?", answer: "Primarily D2C brands, marketplace sellers, and quick commerce suppliers operating at moderate to high order volumes across NCR and North India." },
  ],
  "/services/b2c-warehousing": [
    { question: "How much control will I have over my inventory and orders?", answer: "You get complete visibility into inventory, order status, and returns through a centralized system with real-time updates." },
    { question: "Can I shift from my current 3PL or in-house setup without disruption?", answer: "Yes. We plan the transition, align inventory movement, and ensure fulfilment continues without impacting your orders." },
    { question: "How do you handle sudden spikes in order volume during sales?", answer: "We prepare manpower, picking zones, and dispatch planning in advance to handle high volumes." },
    { question: "How do you minimize losses from returns and RTO?", answer: "We combine order verification, courier performance allocation, and structured return QC to reduce failed deliveries and recover inventory faster." },
    { question: "Will I get visibility into return status and recover inventory?", answer: "Yes. You can track returns, QC status, and restock inventory to avoid confusion and revenue loss." },
    { question: "Can I customize fulfilment based on my product type or category?", answer: "Yes. We align processes based on your SKU type, packaging needs, and order behaviors." },
    { question: "What if I sell on multiple platforms and add new channels later?", answer: "You can connect additional channels anytime and manage them within the same fulfilment setup." },
    { question: "Is this suitable for both small and high-volume ecommerce brands?", answer: "Yes. The setup adapts based on your current scale and grows with your order volume." },
    { question: "How quickly can I get started with AAJ SCM fulfilment?", answer: "Once requirements are aligned and integration is complete, you can go live and start processing orders within a short timeframe." },
    { question: "Can your warehousing support same-day order processing and dispatch?", answer: "Yes. Our fulfilment setup is designed to process and dispatch orders within hours, helping you meet same-day and next-day delivery expectations based on your serviceable locations." },
    { question: "How does your warehouse network support faster and hyperlocal delivery?", answer: "We position inventory closer to high-demand locations through a multi-location warehouse network. This helps reduce delivery timelines and enables faster, localized deliveries across key regions." },
  ],
  "/services": [
    { question: "How do you handle sudden sales spikes?", answer: "Our shared-user facilities allow us to scale labour and storage space up or down to meet seasonal demand." },
    { question: "What security measures are in place?", answer: "All hubs feature 24/7 CCTV, restricted biometric access, fire-prevention systems and regular safety audits." },
    { question: "Do you provide custom packaging?", answer: "Yes - specialised kitting, branded packaging for D2C and reinforced crating for fragile B2B goods." },
    { question: "How do you enable same-day and next-day delivery?", answer: "Through inventory positioned at the right location, extended dispatch windows and automatic courier allocation via our TMS." },
    { question: "How does quick commerce appointment delivery work?", answer: "Orders are assigned specific 2-4 hour delivery slots and dispatched from our nearest dark store - ensuring precise, on-time delivery every time." },
    { question: "How are returns (RTO) processed?", answer: "Returned items are QC-checked, graded (Sellable / Damaged) and restocked or sidelined within 24-48 hrs." },
    { question: "Can you help with GST registration (APOB)?", answer: "Yes. We provide the documentation to register our warehouses as Additional Places of Business on your GST." },
  ],
  "/careers": [
    { question: "Do you hire freshers?", answer: "Yes. We welcome fresh graduates and train them through a structured onboarding program." },
    { question: "What happens in the first 30 days?", answer: "Structured onboarding, SOP training, system walkthrough and a dedicated buddy to guide you through." },
    { question: "Can I apply if I don't see a suitable opening?", answer: "Yes. Send us your CV and we'll reach out when a relevant role opens up." },
    { question: "Do you offer internships?", answer: "Yes. We take on interns across operations, technology and management functions." },
    { question: "What does AAJ look for beyond qualifications?", answer: "Ownership, reliability and a genuine interest in how operations work." },
    { question: "Is there a minimum experience requirement?", answer: "Not for floor roles. For corporate functions, requirements vary by position." },
  ],
  "/capabilities/technology": [
    { question: "Is the WMS built in-house or is it a third-party tool?", answer: "Fully in-house. It has been built and refined over 20 years of live operations." },
    { question: "How long does integration take before we can go live?", answer: "Most integrations are completed within the first week of onboarding." },
    { question: "Do we get access to the dashboard or only reports?", answer: "You get direct access to all the reports. Custom dashboards are available on request." },
    { question: "What happens if there is a system downtime?", answer: "Our systems run 24×7 with redundancy built in. In the rare event of disruption, our operations team has manual fallback protocols to ensure continuity." },
    { question: "Do you offer a technology demo before we commit?", answer: "Yes. Request a demo and our team will walk you through the WMS, TMS and dashboard before any commercial discussion." },
  ],
  "/services/b2b-warehousing": [
    { question: "What should I consider before choosing a B2B warehousing partner?", answer: "Look beyond storage. Evaluate dispatch discipline, system maturity (WMS/TMS), inventory accuracy track record, multi-location coverage, and how the partner handles process exceptions. References from clients with comparable scale matter more than brochures." },
    { question: "Can you customize warehousing operations based on our business model?", answer: "Yes. Our SOPs, WMS workflows, picking/packing logic and dispatch cycles are configured to your distribution model - whether you serve distributors, modern trade, large-format retail or a mix." },
    { question: "How do you handle seasonal spikes or sudden increases in order volume?", answer: "Our operations are designed for elasticity - additional manpower from a trained pool, extended shifts, wave-based picking and pre-aligned transporter capacity ensure peaks don't break TAT." },
    { question: "How do I know if my supply chain issues are coming from warehousing or other factors?", answer: "We start with a structured operational diagnostic - order data, dispatch records, accuracy logs and exception trends - to isolate where time and accuracy are actually being lost before recommending changes." },
    { question: "What happens if my business model changes after onboarding?", answer: "Our setup is configurable, not hard-coded. SKUs, channels, dispatch rules and integrations can be reconfigured without re-implementing the operation from scratch." },
    { question: "Is it possible to improve distribution performance without increasing warehousing costs?", answer: "Yes - most gains come from better process design, slotting, wave planning and TMS-driven dispatch rather than additional space or headcount. Cost-to-serve typically improves alongside SLA performance." },
  ],
  "/services/same-day-delivery": [
    { question: "Is there a minimum order volume requirement to use same-day delivery?", answer: "No. There is no minimum order volume requirement to get started with same-day delivery." },
    { question: "What is the order cutoff time for same-day dispatch?", answer: "Orders placed before 12 PM are processed and dispatched the same day." },
    { question: "What happens if an order misses the same-day cutoff?", answer: "We attempt dispatch regardless. If same-day dispatch is not possible, the order is prioritized for next-day delivery." },
    { question: "How are same-day delivery failures or non-deliveries handled?", answer: "Every failed delivery is flagged immediately. Our team identifies the issue and works to resolve it as quickly as possible to ensure the order reaches the customer." },
    { question: "Are returns handled on the same day as well?", answer: "Yes. Return pickups are managed within the same operational framework, keeping your reverse logistics as efficient as forward movement." },
    { question: "Is COD available on one day delivery?", answer: "Yes. COD is available on same day deliveries across our serviceable locations." },
  ],
  "/services/returns-management": [
    { question: "How long does it take to set up ecommerce returns management with AAJ?", answer: "Setup typically takes a few days depending on your current operations and the platforms you sell on. Our team handles the onboarding process end to end." },
    { question: "Do I need to shift my entire operations to AAJ as a return management company?", answer: "No. Returns management service can be set up independently without moving your forward fulfilment operations to AAJ." },
    { question: "What happens to unsellable stock that cannot be restocked or returned to brand?", answer: "Unsellable units are quarantined, documented, and disposed of based on your instructions. Nothing is actioned without your confirmation." },
    { question: "How long does restocking take after a return passes inspection?", answer: "Returns that pass inspection are updated in your inventory and available for sale within 24 to 48 hours of receipt." },
    { question: "Are there any packaging requirements for returns coming back from customers?", answer: "No specific packaging is required from the customer's end. Our team handles condition assessment regardless of how the return arrives." },
    { question: "How are COD return reconciliations handled?", answer: "COD returns are tracked and reconciled separately with clear reporting shared through your dashboard." },
    { question: "Is there a guaranteed turnaround time for return processing?", answer: "Returns are processed within 48 hours of reaching our facility under standard operations." },
  ],
  "/services/value-added": [
    { question: "Is there a minimum quantity requirement for VAS services?", answer: "No. VAS can be requested regardless of quantity, whether you need it for a small batch or high-volume run." },
    { question: "Does high order volume affect VAS turnaround time?", answer: "VAS runs parallel to regular fulfilment operations, so standard order flow is not affected even during high-volume periods." },
    { question: "Can VAS be requested for inventory already stored at AAJ?", answer: "Yes. VAS can be initiated for inventory already in storage without any additional inbound process." },
    { question: "Can VAS instructions be changed mid-operation if requirements change?", answer: "Changes can be accommodated depending on the stage of execution. Your account manager is the single point of contact for any instruction updates." },
    { question: "Do I need to be an existing AAJ client to use VAS services?", answer: "VAS services are available as part of AAJ's warehousing and fulfilment operations. Reach out to our team to discuss your requirements." },
    { question: "How do I share VAS specifications and instructions with your team?", answer: "All VAS requirements are coordinated through your dedicated account manager, who handles scoping, instructions, and execution from start to finish." },
  ],
};

export function getFaqsForRoute(pathname: string): FaqItem[] | undefined {
  return pageFaqs[pathname];
}