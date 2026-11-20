import type { Metadata } from "next";
import Link from "next/link";

const whatsappUrl = "https://wa.me/254726495238?text=Hi%20CoastAI!%20I%27d%20like%20to%20explore%20automation%20for%20my%20retail%20business.";

export const metadata: Metadata = {
  title: "AI Automation for Retail Businesses and Shops | CoastAI",
  description: "CoastAI helps retail businesses automate customer enquiries, product questions, WhatsApp sales conversations, order updates, lead capture, and customer follow-ups.",
  alternates: { canonical: "/ai-automation-for-retail" },
  openGraph: {
    title: "AI Automation for Retail Businesses | CoastAI",
    description: "Improve retail customer communication, sales enquiries, and everyday workflows with CoastAI.",
    url: "https://coast-ai-automation.vercel.app/ai-automation-for-retail",
    siteName: "CoastAI",
    type: "website"
  }
};

const solutions = [
  ["Product enquiries", "Help customers find approved product information, availability details, store locations, and ways to speak with your team."],
  ["WhatsApp sales assistance", "Organize incoming sales conversations, answer common questions, capture customer interest, and route complex requests to staff."],
  ["Lead capture and follow-ups", "Collect relevant customer enquiries and create follow-up tasks so potential buyers are less likely to be overlooked."],
  ["Order and delivery updates", "Send routine order-status and delivery communications when connected to a compatible order or inventory system."],
  ["Customer support automation", "Handle common questions about store hours, returns policies, payment options, and delivery using information approved by your business."],
  ["Retail workflow automation", "Connect compatible tools to notify staff, organize requests, and reduce repetitive administrative work."]
];

const retailTypes = [
  "Supermarkets and grocery stores",
  "Fashion, footwear, and clothing shops",
  "Electronics and appliance retailers",
  "Furniture and homeware stores",
  "Beauty and cosmetics retailers",
  "Wholesale and distribution businesses",
  "Specialty and convenience stores",
  "Retailers with both online and physical shops"
];

const faqs = [
  ["Can an AI assistant answer product questions?", "Yes. It can respond using product information, policies, and answers your business has approved. Questions requiring judgement or confirmation can be handed to a staff member."],
  ["Can CoastAI automate WhatsApp sales conversations?", "Yes. A WhatsApp workflow can help organize enquiries, collect customer details, share approved information, and route sales opportunities to your team. Availability depends on the required WhatsApp integration and account setup."],
  ["Can customers check order or delivery status?", "This can be configured when your store uses a compatible order-management or delivery system that provides the necessary status information."],
  ["Will automation update stock levels?", "Stock updates require integration with a compatible inventory or point-of-sale system. The exact functions depend on the software and access available."],
  ["Can it support more than one store location?", "Yes. Workflows can be designed for multiple branches, with enquiries routed according to location, product category, or team responsibility when supported by your systems."],
  ["Does CoastAI work with retailers outside Mombasa?", "Yes. CoastAI is based in Mombasa, Kenya and can work with retailers across Kenya and internationally, depending on project requirements and available integrations."]
];

export default function RetailAutomationPage() {
  return (
    <main>
      <header className="container nav">
        <Link className="brand" href="/">Coast<span>AI</span><small> AUTOMATION AGENCY</small></Link>
        <nav className="navlinks">
          <Link href="/#services">Services</Link>
          <Link href="/#faq">FAQs</Link>
          <Link className="button nav-cta" href="/#audit">Free audit ↗</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <div className="eyebrow hero-pill">AI AUTOMATION FOR RETAIL · KENYA & WORLDWIDE</div>
          <h1>Make every customer conversation<br /><span>easier to manage.</span></h1>
          <p>CoastAI helps shops, retailers, and wholesalers streamline product enquiries, WhatsApp sales conversations, customer support, order updates, and everyday business workflows.</p>
          <div className="hero-actions">
            <Link className="button" href="/#audit">Get a free automation audit ↗</Link>
            <a className="button-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to CoastAI</a>
          </div>
          <div className="hero-note">Practical automation for online stores, physical shops, and growing retail teams.</div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-kicker">RETAIL AUTOMATION SOLUTIONS</div>
          <div className="section-intro">
            <h2>Support customers<br />from enquiry to purchase.</h2>
            <p>Retail teams handle product questions, sales conversations, order requests, and after-sales support across multiple channels. Suitable automation can help keep these interactions organized and responsive.</p>
          </div>
          <div className="service-grid">
            {solutions.map(([title, description]) => (
              <article className="service-card" key={title}>
                <div><h3>{title}</h3><p>{description}</p></div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Discuss this solution ↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-kicker">A PRACTICAL IMPLEMENTATION PROCESS</div>
          <div className="section-intro">
            <h2>Designed around how<br />your retail business works.</h2>
            <p>We review your customer journey and existing tools, then identify useful tasks to automate without losing the human service your customers expect.</p>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Discover</h3><p>Review your sales channels, customer questions, order process, and current systems.</p></article>
            <article><span>02</span><h3>Build</h3><p>Design suitable automations, approved responses, staff handovers, and integrations.</p></article>
            <article><span>03</span><h3>Improve</h3><p>Test with your team, monitor how the workflow performs, and refine it as your business grows.</p></article>
          </div>
        </div>
      </section>

      <section className="upgrades-section">
        <div className="container">
          <div className="section-kicker">RETAIL BUSINESSES WE SUPPORT</div>
          <div className="section-intro">
            <h2>Flexible for different<br />retail categories.</h2>
            <p>Automation can be tailored to the products, customer channels, branch structure, and operating processes of your retail business.</p>
          </div>
          <div className="faq-list">
            {retailTypes.map((type) => <div className="faq-item" key={type}><p>{type}</p></div>)}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-kicker">RETAIL AUTOMATION FAQ</div>
          <div className="section-intro"><h2>Questions retailers<br />often ask.</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
          <p>Specific features such as live stock checks, order tracking, and payment updates depend on compatible third-party systems, account permissions, and integration availability.</p>
        </div>
      </section>

      <section className="audit-section">
        <div className="audit-panel">
          <div className="section-kicker">GROW WITH SMARTER RETAIL WORKFLOWS</div>
          <h2>Explore practical automation for your retail business.</h2>
          <p>Tell us how your team handles product enquiries, sales conversations, and customer support. We can help identify a suitable next step.</p>
          <div className="hero-actions">
            <Link className="button" href="/#audit">Request a free audit ↗</Link>
            <a className="button-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
          </div>
          <p><Link href="/">← Back to CoastAI home</Link></p>
        </div>
      </section>
    </main>
  );
}
