import type { Metadata } from "next";
import Link from "next/link";

const whatsappUrl = "https://wa.me/254726495238?text=Hi%20CoastAI!%20I%27d%20like%20to%20automate%20my%20real%20estate%20business.";

export const metadata: Metadata = {
  title: "AI Automation for Real Estate Agencies and Property Businesses",
  description: "CoastAI helps real estate agencies and property businesses manage enquiries, qualify leads, coordinate viewing requests, automate follow-ups, and improve customer communication.",
  alternates: { canonical: "/ai-automation-for-real-estate" },
  openGraph: {
    title: "AI Automation for Real Estate | CoastAI",
    description: "Automate property enquiries, lead qualification, viewing requests, and customer follow-ups with CoastAI.",
    url: "https://coast-ai-automation.vercel.app/ai-automation-for-real-estate",
    siteName: "CoastAI",
    type: "website"
  }
};

const solutions = [
  ["Property enquiry assistants", "Respond to common questions about listings, locations, features, and next steps using the property information your team provides."],
  ["Lead capture and qualification", "Collect buyer, seller, tenant, and landlord enquiries, then organize key details so your team can prioritize follow-up."],
  ["Viewing request coordination", "Capture preferred viewing dates and property details, and route requests to the right agent for confirmation."],
  ["WhatsApp follow-ups", "Help agents keep conversations moving with timely enquiry acknowledgements and follow-up workflows."],
  ["Website chat automation", "Give website visitors a convenient way to ask about properties and request contact from your team."],
  ["Team workflow automation", "Reduce repetitive admin by routing new leads, sending internal notifications, and keeping enquiry records organized."]
];

const businessTypes = [
  "Residential real estate agencies",
  "Commercial property agencies",
  "Property management companies",
  "Rental and letting businesses",
  "Property developers and builders",
  "Independent real estate agents",
  "Holiday and short-stay property operators",
  "Facilities and property service providers"
];

const faqs = [
  ["Can AI respond to property enquiries?", "Yes. A configured assistant can answer common questions using the listing details and information your business supplies. More complex questions can be passed to an agent."],
  ["Can CoastAI help qualify property leads?", "Yes. An enquiry workflow can collect details such as property type, budget range, preferred location, and whether someone is buying, renting, selling, or investing."],
  ["Can customers request property viewings through chat?", "A chat assistant can collect viewing preferences and pass the request to your team. A viewing should only be treated as confirmed after your agent or booking system confirms it."],
  ["Can the system send WhatsApp messages?", "WhatsApp workflows may be set up through the appropriate approved WhatsApp Business integration. Available messaging features depend on your account and requirements."],
  ["Will it connect to our property management or CRM software?", "That depends on the software and its available integrations or API access. CoastAI can review your current tools before confirming the integration scope."],
  ["Does CoastAI serve real estate businesses outside Mombasa?", "Yes. CoastAI is based in Mombasa, Kenya and works with businesses across Kenya and internationally."]
];

export default function RealEstateAutomationPage() {
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
          <div className="eyebrow hero-pill">AI AUTOMATION FOR REAL ESTATE · KENYA & WORLDWIDE</div>
          <h1>Turn property enquiries<br /><span>into better conversations.</span></h1>
          <p>CoastAI helps real estate agencies and property businesses respond to enquiries, organize leads, coordinate viewing requests, and reduce repetitive admin with practical AI and automation.</p>
          <div className="hero-actions">
            <Link className="button" href="/#audit">Get a free automation audit ↗</Link>
            <a className="button-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to CoastAI</a>
          </div>
          <div className="hero-note">Help your team stay responsive while keeping agents focused on clients and property deals.</div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-kicker">REAL ESTATE AUTOMATION SOLUTIONS</div>
          <div className="section-intro">
            <h2>Respond faster.<br />Manage leads better.</h2>
            <p>Property businesses often receive enquiries across websites, calls, and messaging apps. Automation can help capture those enquiries and make the next step clearer for your team.</p>
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
          <div className="section-kicker">HOW WE WORK WITH YOUR TEAM</div>
          <div className="section-intro">
            <h2>Automation built<br />around your process.</h2>
            <p>We start by understanding how your agency receives enquiries, manages listings, and coordinates with clients before recommending a solution.</p>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Understand</h3><p>We review your enquiry channels, lead handovers, and everyday property workflows.</p></article>
            <article><span>02</span><h3>Configure</h3><p>We scope a suitable assistant or workflow around your business information and tools.</p></article>
            <article><span>03</span><h3>Launch</h3><p>We test the experience with your team and refine it as your property operations evolve.</p></article>
          </div>
        </div>
      </section>

      <section className="upgrades-section">
        <div className="container">
          <div className="section-kicker">PROPERTY BUSINESSES WE SUPPORT</div>
          <div className="section-intro">
            <h2>Flexible for your<br />property business.</h2>
            <p>CoastAI automation can be adapted to different property services and customer journeys.</p>
          </div>
          <div className="faq-list">
            {businessTypes.map((type) => <div className="faq-item" key={type}><p>{type}</p></div>)}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-kicker">REAL ESTATE AUTOMATION FAQ</div>
          <div className="section-intro"><h2>Common questions<br />from property teams.</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="audit-section">
        <div className="audit-panel">
          <div className="section-kicker">IMPROVE YOUR PROPERTY ENQUIRY PROCESS</div>
          <h2>Find the right automation for your agency.</h2>
          <p>Tell us how your team manages property enquiries and client follow-ups. We will help you explore a practical next step.</p>
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
