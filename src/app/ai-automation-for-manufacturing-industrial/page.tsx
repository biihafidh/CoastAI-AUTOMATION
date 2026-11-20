import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://coast-ai-automation.vercel.app";

export const metadata: Metadata = {
  title: "AI Automation for Manufacturing & Industrial Businesses | CoastAI",
  description:
    "CoastAI helps manufacturers, factories and industrial suppliers automate customer enquiries, quotation requests, order communication, lead management and administrative workflows.",
  alternates: { canonical: "/ai-automation-for-manufacturing-industrial" },
  openGraph: {
    title: "AI Automation for Manufacturing & Industrial Businesses | CoastAI",
    description:
      "Streamline customer communication, sales enquiries and repetitive operations with practical AI automation for manufacturers and industrial businesses.",
    url: siteUrl + "/ai-automation-for-manufacturing-industrial",
    siteName: "CoastAI",
    type: "website",
  },
};

const solutions = [
  {
    title: "Customer enquiry assistants",
    description:
      "Answer approved questions about product ranges, services, operating hours and enquiry processes through your website or supported messaging channels.",
  },
  {
    title: "Quotation requests",
    description:
      "Collect product specifications, quantities, delivery requirements and contact details, then route quote requests to your sales or technical team.",
  },
  {
    title: "Order communication",
    description:
      "Organise customer order enquiries and share status updates using connected systems and your approved order-confirmation process.",
  },
  {
    title: "Lead capture and follow-ups",
    description:
      "Record prospective buyers, distributors and business partners, organise their requirements and schedule timely follow-ups.",
  },
  {
    title: "Supplier coordination",
    description:
      "Route supplier enquiries, send internal notifications and organise routine communication between relevant team members.",
  },
  {
    title: "Administrative workflows",
    description:
      "Reduce repetitive data entry, organise requests and connect supported business applications to simplify everyday operations.",
  },
];

const businessTypes = [
  "Manufacturing companies and factories",
  "Industrial equipment and machinery suppliers",
  "Packaging and materials manufacturers",
  "Wholesale and industrial distributors",
  "Construction materials producers",
  "Assembly, fabrication and processing businesses",
];

const faqs = [
  {
    q: "Can CoastAI automate quotation requests?",
    a: "Yes. A workflow can collect the information needed for a quotation and route it to your team. Technical review, pricing and the final quote should be approved by authorised staff.",
  },
  {
    q: "Can an AI assistant answer questions about industrial products?",
    a: "It can provide business-approved product information, specifications and documentation. Complex technical, safety or compliance questions should be referred to qualified staff.",
  },
  {
    q: "Can CoastAI connect with our inventory or ERP system?",
    a: "Integration may be possible when your system provides a supported API or another suitable connection method. The exact integration needs to be assessed before implementation.",
  },
  {
    q: "Is automation useful for small manufacturers?",
    a: "Yes. Workflows can be tailored to a small workshop or manufacturer as well as a larger factory or industrial supplier, depending on its processes and available tools.",
  },
];

export default function ManufacturingIndustrialPage() {
  return (
    <main>
      <nav className="container nav">
        <Link href="/" className="brand">CoastAI</Link>
        <div className="navlinks">
          <Link href="/#services">Services</Link>
          <Link href="/#audit">Free audit</Link>
          <a className="button nav-cta" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20manufacturing%20or%20industrial%20business.">Talk to CoastAI</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <p className="eyebrow hero-pill">AI AUTOMATION · MANUFACTURING & INDUSTRY</p>
          <h1>Make industrial business operations work smarter</h1>
          <p>
            CoastAI helps manufacturers, factories and industrial suppliers organise
            customer enquiries, streamline quotation communication and reduce
            repetitive administration with practical AI assistants and workflows.
          </p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20manufacturing%20or%20industrial%20business.">Discuss your business</a>
            <Link className="button button-outline" href="/#services">Explore services</Link>
          </div>
          <p className="hero-note">For manufacturers and industrial businesses in Kenya and worldwide.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <p className="section-kicker">WHAT YOU CAN AUTOMATE</p>
          <h2>Practical AI solutions for industrial businesses</h2>
          <p className="section-intro">
            Help customers reach the right team and make routine business processes
            easier to manage. Integrations depend on the systems your business uses.
          </p>
          <div className="service-grid">
            {solutions.map((item) => (
              <article className="service-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <p className="section-kicker">WHO WE HELP</p>
          <h2>Automation across manufacturing and industry</h2>
          <div className="process-grid">
            {businessTypes.map((type) => (
              <div className="service-card" key={type}><h3>{type}</h3></div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <p className="section-kicker">COMMON QUESTIONS</p>
          <h2>Manufacturing automation FAQs</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audit-section" id="get-started">
        <div className="container audit-panel">
          <p className="section-kicker">GET STARTED WITH COASTAI</p>
          <h2>Ready to streamline your industrial workflows?</h2>
          <p>Tell us how your business handles customer enquiries, quotations and orders. We can help identify practical automation opportunities.</p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20would%20like%20an%20automation%20consultation%20for%20my%20manufacturing%20business.">Contact CoastAI</a>
            <Link className="button button-outline" href="/#audit">Request a free audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
