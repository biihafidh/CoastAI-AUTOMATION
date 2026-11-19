import type { Metadata } from "next";
import Link from "next/link";

const whatsappUrl = "https://wa.me/254726495238?text=Hi%20CoastAI!%20I%27d%20like%20to%20automate%20my%20business.";

export const metadata: Metadata = {
  title: "AI Automation for Small Businesses and Startups",
  description: "Help your small business save time, respond to customers faster, capture leads, and streamline daily work with CoastAI chatbots and business automation.",
  alternates: { canonical: "/ai-automation-for-small-businesses" },
  openGraph: {
    title: "AI Automation for Small Businesses | CoastAI",
    description: "Practical AI chatbots, WhatsApp automation, lead follow-up, and workflows for small businesses and startups.",
    url: "https://coast-ai-automation.vercel.app/ai-automation-for-small-businesses",
    siteName: "CoastAI",
    type: "website"
  }
};

const solutions = [
  ["Customer support automation", "Answer common questions, share useful information, and help customers get a response even outside business hours."],
  ["WhatsApp and website chat", "Give visitors and customers an easy way to ask questions, request information, and start a conversation."],
  ["Lead capture and follow-up", "Collect enquiries, organize new prospects, and help your team follow up consistently."],
  ["Workflow automation", "Reduce repetitive admin by connecting routine steps such as notifications, data entry, and task handovers."],
  ["AI assistants for your team", "Use practical AI assistants to help prepare responses, organize information, and support everyday work."]
];

const businessTypes = [
  "Retail shops and distributors",
  "Startups and growing businesses",
  "Online stores and e-commerce brands",
  "Real estate agencies and property teams",
  "Hospitality, travel, and tour businesses",
  "Education and training providers",
  "Healthcare and wellness businesses",
  "Professional and financial services",
  "Logistics and transport companies"
];

const faqs = [
  ["Is AI automation suitable for a small business?", "Yes. A small business can start with one focused improvement, such as answering common questions or organizing incoming enquiries, then expand as its needs grow."],
  ["Do I need a large team or technical knowledge?", "No. CoastAI works with you to understand your current process and identify a practical solution. We discuss the tools, setup, and support required before implementation."],
  ["Can automation work with WhatsApp?", "Yes. WhatsApp automation can help handle common questions, collect enquiries, and route conversations. The exact features depend on the approved WhatsApp setup and your requirements."],
  ["How much does a solution cost?", "Pricing depends on the workflow, integrations, and level of customization. CoastAI can discuss your goals and provide a scope and quote before work begins."],
  ["Does CoastAI only serve businesses in Mombasa?", "No. CoastAI is based in Mombasa, Kenya and works with businesses across Kenya and internationally."]
];

export default function SmallBusinessAutomationPage() {
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
          <div className="eyebrow hero-pill">AI AUTOMATION FOR SMALL BUSINESSES · KENYA & WORLDWIDE</div>
          <h1>Make everyday work<br /><span>simpler with AI.</span></h1>
          <p>CoastAI helps small businesses and startups respond to customers faster, capture more enquiries, and reduce repetitive work with practical AI chatbots and business automation.</p>
          <div className="hero-actions">
            <Link className="button" href="/#audit">Get a free automation audit ↗</Link>
            <a className="button-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to CoastAI</a>
          </div>
          <div className="hero-note">Start with one useful automation. Expand when your business is ready.</div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-kicker">WHERE AUTOMATION HELPS</div>
          <div className="section-intro">
            <h2>More time for<br />the work that matters.</h2>
            <p>Small teams often manage customer messages, sales enquiries, follow-ups, and admin at the same time. The right automation can make those processes easier to manage.</p>
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
          <div className="section-kicker">BUILT AROUND YOUR BUSINESS</div>
          <div className="section-intro">
            <h2>Start small.<br />Grow with confidence.</h2>
            <p>You do not need to automate everything at once. We focus on a clear business problem and recommend a sensible next step.</p>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Understand</h3><p>We learn how your team works, where time is being lost, and what customers need.</p></article>
            <article><span>02</span><h3>Plan and build</h3><p>We scope an automation that fits your process, tools, and budget.</p></article>
            <article><span>03</span><h3>Launch and improve</h3><p>We test the solution and help you refine it as your business changes.</p></article>
          </div>
        </div>
      </section>

      <section className="upgrades-section">
        <div className="container">
          <div className="section-kicker">WHO WE HELP</div>
          <div className="section-intro">
            <h2>Flexible across<br />industries.</h2>
            <p>Our solutions can be adapted to different customer journeys and business workflows, including:</p>
          </div>
          <div className="faq-list">
            {businessTypes.map((type) => <div className="faq-item" key={type}><p>{type}</p></div>)}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-kicker">SMALL BUSINESS AUTOMATION FAQ</div>
          <div className="section-intro"><h2>Questions,<br />answered.</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="audit-section">
        <div className="audit-panel">
          <div className="section-kicker">YOUR NEXT STEP</div>
          <h2>Find the right first automation.</h2>
          <p>Tell us what takes up too much time in your business. We will help you explore a practical way forward.</p>
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
