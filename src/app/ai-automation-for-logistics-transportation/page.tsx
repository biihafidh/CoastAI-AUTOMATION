import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://coast-ai-automation.vercel.app";

export const metadata: Metadata = {
  title: "AI Automation for Logistics & Transportation | CoastAI",
  description:
    "CoastAI helps logistics, courier, delivery and transport businesses automate customer enquiries, booking requests, delivery communication, lead management and workflows.",
  alternates: { canonical: "/ai-automation-for-logistics-transportation" },
  openGraph: {
    title: "AI Automation for Logistics & Transportation | CoastAI",
    description:
      "Streamline customer communication and repetitive operations with practical AI automation for logistics and transport businesses.",
    url: siteUrl + "/ai-automation-for-logistics-transportation",
    siteName: "CoastAI",
    type: "website",
  },
};

const solutions = [
  {
    title: "Customer enquiry assistants",
    description:
      "Answer common questions about service areas, operating hours, delivery options and booking requirements through your website or supported messaging channels.",
  },
  {
    title: "Booking and quote requests",
    description:
      "Collect shipment details, pickup and destination information, service preferences and contact details, then route requests to your team for review.",
  },
  {
    title: "Delivery communication",
    description:
      "Help customers receive updates and find answers about deliveries through connected systems. Live tracking information depends on your configured logistics platform.",
  },
  {
    title: "Lead capture and follow-ups",
    description:
      "Organise new business enquiries, qualify service needs and schedule timely follow-ups with prospective customers.",
  },
  {
    title: "Dispatch and team notifications",
    description:
      "Route incoming requests to the right staff and send internal notifications using supported tools and your existing operating procedures.",
  },
  {
    title: "Administrative workflows",
    description:
      "Reduce repetitive data entry, organise service requests and connect supported business applications to simplify everyday work.",
  },
];

const businessTypes = [
  "Courier and parcel delivery companies",
  "Freight forwarding and cargo businesses",
  "Road transport and haulage operators",
  "Moving and relocation companies",
  "Fleet and vehicle management businesses",
  "E-commerce and last-mile delivery teams",
];

const faqs = [
  {
    q: "Can CoastAI provide live parcel tracking?",
    a: "CoastAI can help communicate tracking updates when connected to a logistics platform or tracking system that provides the required data. Live tracking is not automatic without that integration.",
  },
  {
    q: "Can customers request delivery quotes through WhatsApp?",
    a: "A supported WhatsApp workflow can collect shipment details and pass quote requests to your team. Your business can review and confirm prices before sending an official quotation.",
  },
  {
    q: "Can automation help with dispatch operations?",
    a: "Automation can route requests, send team notifications and organise administrative tasks. Dispatch decisions and operational control should remain with your authorised staff and configured systems.",
  },
  {
    q: "Is this suitable for a small transport company?",
    a: "Yes. Workflows can be tailored to a small courier service, independent transport operator or larger logistics company based on its tools and processes.",
  },
];

export default function LogisticsTransportationPage() {
  return (
    <main>
      <nav className="container nav">
        <Link href="/" className="brand">CoastAI</Link>
        <div className="navlinks">
          <Link href="/#services">Services</Link>
          <Link href="/#audit">Free audit</Link>
          <a className="button nav-cta" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20logistics%20or%20transport%20business.">Talk to CoastAI</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <p className="eyebrow hero-pill">AI AUTOMATION · LOGISTICS & TRANSPORTATION</p>
          <h1>Move business forward with smarter logistics automation</h1>
          <p>
            CoastAI helps logistics and transportation businesses organise customer
            enquiries, simplify delivery communication and reduce repetitive
            administrative work with AI assistants and connected workflows.
          </p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20logistics%20or%20transport%20business.">Discuss your business</a>
            <Link className="button button-outline" href="/#services">Explore services</Link>
          </div>
          <p className="hero-note">For logistics, courier, freight and transport businesses in Kenya and worldwide.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <p className="section-kicker">WHAT YOU CAN AUTOMATE</p>
          <h2>Practical AI solutions for transport and logistics</h2>
          <p className="section-intro">
            Improve how your team receives requests and keeps customers informed.
            Available integrations depend on the systems your business uses.
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
          <h2>Automation for different logistics business models</h2>
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
          <h2>Logistics automation FAQs</h2>
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
          <h2>Ready to streamline your logistics operations?</h2>
          <p>Tell us how your business handles bookings, delivery enquiries and customer updates. We can help identify practical automation opportunities.</p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20would%20like%20an%20automation%20consultation%20for%20my%20logistics%20business.">Contact CoastAI</a>
            <Link className="button button-outline" href="/#audit">Request a free audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
