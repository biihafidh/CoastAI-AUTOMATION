import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://coast-ai-automation.vercel.app";

export const metadata: Metadata = {
  title: "AI Automation for Professional Services & Consulting | CoastAI",
  description:
    "CoastAI helps consulting firms, law firms, agencies and professional service providers automate client enquiries, lead management, appointment requests and administrative workflows.",
  alternates: { canonical: "/ai-automation-for-professional-services" },
  openGraph: {
    title: "AI Automation for Professional Services & Consulting | CoastAI",
    description:
      "Streamline client communication, lead follow-ups and everyday operations with practical AI automation from CoastAI.",
    url: siteUrl + "/ai-automation-for-professional-services",
    siteName: "CoastAI",
    type: "website",
  },
};

const solutions = [
  {
    title: "Client enquiry assistants",
    description:
      "Answer business-approved questions about your services, office hours, process and contact options through your website or supported messaging channels.",
  },
  {
    title: "Lead capture and qualification",
    description:
      "Collect prospective client details, understand their service requirements and route enquiries to the appropriate team member.",
  },
  {
    title: "Appointment requests",
    description:
      "Gather preferred dates, times and meeting details, then send requests to your team or a supported scheduling system for confirmation.",
  },
  {
    title: "Follow-ups and reminders",
    description:
      "Organise timely follow-ups, consultation reminders and client communications using connected tools and appropriate consent.",
  },
  {
    title: "Document request workflows",
    description:
      "Guide clients through document submission steps and route received items securely using your approved systems and access controls.",
  },
  {
    title: "Internal workflow automation",
    description:
      "Reduce repetitive administration by assigning enquiries, creating task notifications and connecting supported business applications.",
  },
];

const businessTypes = [
  "Law firms and legal practices",
  "Management and business consultants",
  "Marketing, creative and digital agencies",
  "Recruitment and staffing agencies",
  "Accounting and bookkeeping practices",
  "Engineering and other professional firms",
];

const faqs = [
  {
    q: "Can CoastAI help professional firms get more leads?",
    a: "CoastAI can help capture enquiries, collect initial information and organise follow-ups. Results depend on your offer, traffic, sales process and how consistently enquiries are handled.",
  },
  {
    q: "Can an AI assistant answer legal or professional questions?",
    a: "An assistant can share general, firm-approved information about services and processes. It should not provide legal, financial or other regulated professional advice, assess a case or replace a qualified professional.",
  },
  {
    q: "Can clients book consultations automatically?",
    a: "A workflow can collect meeting preferences and connect to a supported calendar or scheduling tool. The appointment is confirmed only when the configured system or your team confirms it.",
  },
  {
    q: "How should confidential client documents be handled?",
    a: "Sensitive documents should only be collected and processed through approved systems with appropriate security, access controls, retention rules and privacy safeguards. Avoid sending confidential material through unapproved channels.",
  },
];

export default function ProfessionalServicesPage() {
  return (
    <main>
      <nav className="container nav">
        <Link href="/" className="brand">CoastAI</Link>
        <div className="navlinks">
          <Link href="/#services">Services</Link>
          <Link href="/#audit">Free audit</Link>
          <a className="button nav-cta" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20professional%20services%20business.">Talk to CoastAI</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <p className="eyebrow hero-pill">AI AUTOMATION · PROFESSIONAL SERVICES</p>
          <h1>Spend less time on admin and more time serving clients</h1>
          <p>
            CoastAI helps professional service providers manage client enquiries,
            organise leads and streamline repetitive work with practical AI
            assistants and connected workflows.
          </p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20professional%20services%20business.">Discuss your business</a>
            <Link className="button button-outline" href="/#services">Explore services</Link>
          </div>
          <p className="hero-note">For professional firms, consultants and agencies in Kenya and worldwide.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <p className="section-kicker">WHAT YOU CAN AUTOMATE</p>
          <h2>Practical AI solutions for client-focused businesses</h2>
          <p className="section-intro">
            Make it easier for prospective clients to reach your team and help staff
            manage routine tasks. Integrations depend on the tools your business uses.
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
          <h2>Automation for a wide range of professional services</h2>
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
          <h2>Professional services automation FAQs</h2>
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
          <h2>Ready to improve your client experience?</h2>
          <p>Tell us how your firm handles enquiries, consultations and follow-ups. We can help identify practical automation opportunities.</p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20would%20like%20an%20automation%20consultation%20for%20my%20professional%20services%20business.">Contact CoastAI</a>
            <Link className="button button-outline" href="/#audit">Request a free audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
