import type { Metadata } from "next";
import Link from "next/link";

const whatsappUrl = "https://wa.me/254726495238?text=Hi%20CoastAI!%20I%27d%20like%20to%20automate%20my%20online%20store.";

export const metadata: Metadata = {
  title: "AI Automation for E-commerce and Online Stores",
  description: "Grow your online store with CoastAI automation. Improve customer support, capture sales enquiries, automate follow-ups, and streamline e-commerce workflows.",
  alternates: { canonical: "/ai-automation-for-ecommerce" },
  openGraph: {
    title: "AI Automation for E-commerce | CoastAI",
    description: "AI shopping assistants, customer messaging, lead capture, and workflow automation for online stores.",
    url: "https://coast-ai-automation.vercel.app/ai-automation-for-ecommerce",
    siteName: "CoastAI",
    type: "website"
  }
};

const solutions = [
  ["AI shopping assistants", "Help shoppers find product information, understand options, and get answers to common questions before they buy."],
  ["Automated customer enquiries", "Respond to frequent questions about products, availability, store policies, and how to place an order."],
  ["Order and delivery updates", "Help customers receive timely order-status and delivery information through connected workflows where supported."],
  ["WhatsApp sales automation", "Give customers a convenient way to ask questions, request assistance, and continue a sales conversation."],
  ["Lead capture and follow-ups", "Capture interested shoppers and help your team follow up with enquiries consistently."],
  ["Back-office workflow automation", "Reduce repetitive tasks by connecting notifications, customer records, and routine team handovers."]
];

const storeTypes = [
  "Fashion, clothing, and accessories stores",
  "Beauty, skincare, and wellness brands",
  "Electronics and home-goods retailers",
  "Food, grocery, and specialty shops",
  "Print-on-demand and direct-to-consumer brands",
  "Wholesale and online distributors",
  "Multi-channel retailers and growing online shops"
];

const faqs = [
  ["Can CoastAI automate customer support for my online store?", "Yes. A tailored chatbot or messaging workflow can answer common questions, collect customer details, and direct more complex requests to your team."],
  ["Can an AI assistant help customers choose products?", "An AI shopping assistant can guide shoppers using the product information and rules you provide. Recommendations should be checked against accurate, up-to-date catalogue data."],
  ["Can you automate order and delivery messages?", "Order and delivery notifications may be automated when your store platform, order data, and delivery systems provide the required integrations."],
  ["Will automation work with my e-commerce platform?", "The options depend on your platform and available integrations. CoastAI will review your current setup before confirming what can be connected."],
  ["Do I need a large online store to get started?", "No. You can begin with one useful workflow, such as answering common questions or organizing sales enquiries, and add more automation as your store grows."],
  ["Does CoastAI work outside Kenya?", "Yes. CoastAI is based in Mombasa, Kenya and works with businesses in Kenya and internationally."]
];

export default function EcommerceAutomationPage() {
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
          <div className="eyebrow hero-pill">AI AUTOMATION FOR E-COMMERCE · KENYA & WORLDWIDE</div>
          <h1>Make every online<br /><span>customer interaction count.</span></h1>
          <p>CoastAI helps e-commerce businesses and online stores improve customer communication, capture sales enquiries, and simplify repetitive work with practical AI and automation.</p>
          <div className="hero-actions">
            <Link className="button" href="/#audit">Get a free automation audit ↗</Link>
            <a className="button-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to CoastAI</a>
          </div>
          <div className="hero-note">Better customer experiences from the first product question to post-purchase support.</div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-kicker">E-COMMERCE AUTOMATION SOLUTIONS</div>
          <div className="section-intro">
            <h2>Support shoppers.<br />Simplify operations.</h2>
            <p>Online stores handle product questions, order enquiries, customer follow-ups, and daily admin. Automation can help your team manage these tasks more consistently.</p>
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
          <div className="section-kicker">HOW WE GET STARTED</div>
          <div className="section-intro">
            <h2>Automation that<br />fits your store.</h2>
            <p>We start with your customer journey and existing store tools, then identify a useful first workflow instead of adding unnecessary complexity.</p>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Review</h3><p>We understand your store, customer questions, sales process, and current systems.</p></article>
            <article><span>02</span><h3>Build</h3><p>We scope and configure a chatbot, messaging flow, or integration around your requirements.</p></article>
            <article><span>03</span><h3>Improve</h3><p>We test the workflow and identify improvements as your catalogue and customer needs evolve.</p></article>
          </div>
        </div>
      </section>

      <section className="upgrades-section">
        <div className="container">
          <div className="section-kicker">ONLINE BUSINESSES WE SUPPORT</div>
          <div className="section-intro">
            <h2>Built for different<br />types of stores.</h2>
            <p>CoastAI solutions can be adapted for a wide range of online retail and commerce businesses.</p>
          </div>
          <div className="faq-list">
            {storeTypes.map((type) => <div className="faq-item" key={type}><p>{type}</p></div>)}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-kicker">E-COMMERCE AUTOMATION FAQ</div>
          <div className="section-intro"><h2>What online stores<br />often ask.</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="audit-section">
        <div className="audit-panel">
          <div className="section-kicker">READY TO STREAMLINE YOUR STORE?</div>
          <h2>Find your next e-commerce automation.</h2>
          <p>Tell us where your team spends too much time or where shoppers need better support. We will help you explore a practical next step.</p>
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
