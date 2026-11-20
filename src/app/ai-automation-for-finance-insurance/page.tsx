import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://coast-ai-automation.vercel.app";

export const metadata: Metadata = {
  title: "AI Automation for Finance & Insurance | CoastAI",
  description:
    "CoastAI helps accounting firms, insurance agencies and financial service businesses streamline enquiries, appointments, document workflows, reminders and lead management with AI automation.",
  alternates: { canonical: siteUrl + "/ai-automation-for-finance-insurance" },
  openGraph: {
    title: "AI Automation for Finance & Insurance | CoastAI",
    description:
      "Streamline customer enquiries, appointments, document requests and routine workflows for financial and insurance businesses.",
    url: siteUrl + "/ai-automation-for-finance-insurance",
    siteName: "CoastAI",
    type: "website",
  },
};

const solutions = [
  {
    title: "Customer enquiry handling",
    description:
      "Answer common questions about services, business hours, required next steps and how to contact the right team.",
  },
  {
    title: "Lead capture and follow-ups",
    description:
      "Capture prospective client details, organize enquiries and support timely follow-ups across approved channels.",
  },
  {
    title: "Appointment scheduling",
    description:
      "Help clients request consultations, arrange callbacks and receive appointment confirmations or reminders.",
  },
  {
    title: "Document request workflows",
    description:
      "Send approved document checklists, collect submission-status updates and route requests to the appropriate staff.",
  },
  {
    title: "Client reminders",
    description:
      "Automate routine reminders for appointments, outstanding administrative steps and important service follow-ups.",
  },
  {
    title: "Internal workflow automation",
    description:
      "Reduce repetitive admin by routing enquiries, notifying teams and keeping routine processes organized.",
  },
];

const businessTypes = [
  "Accounting and bookkeeping firms",
  "Insurance agencies and brokers",
  "Tax advisory and preparation firms",
  "Financial consulting businesses",
  "Mortgage and lending service providers",
  "Other professional financial service businesses",
];

const faqs = [
  {
    question: "Can CoastAI provide financial or insurance advice?",
    answer:
      "No. CoastAI automation can help handle general administrative enquiries and route clients to qualified staff. It should not make regulated financial recommendations, assess insurance suitability or make decisions on behalf of a licensed professional.",
  },
  {
    question: "Can it collect client documents?",
    answer:
      "A workflow can guide clients through an approved document-request process. Before handling personal or financial documents, the business must review the proposed tools, access controls, retention rules and applicable privacy requirements.",
  },
  {
    question: "Can it work with WhatsApp?",
    answer:
      "WhatsApp automation may be configured where the business has the required WhatsApp Business Platform access and approved integrations. The exact workflow depends on the provider and setup.",
  },
  {
    question: "Can automation connect to our existing systems?",
    answer:
      "Potentially. Integration depends on the systems' available APIs, permissions, security requirements and technical compatibility. We review these before confirming the scope.",
  },
];

export default function FinanceInsuranceAutomationPage() {
  return (
    <main>
      <nav className="container nav">
        <Link href="/" className="brand">CoastAI</Link>
        <div className="navlinks">
          <Link href="/#services">Services</Link>
          <Link href="/#process">How it works</Link>
          <Link href="/#audit">Free automation audit</Link>
        </div>
        <Link href="/#audit" className="button nav-cta">Get started</Link>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <p className="eyebrow hero-pill">AI AUTOMATION FOR FINANCE &amp; INSURANCE</p>
          <h1>Spend less time on routine admin. Give clients a smoother experience.</h1>
          <p className="section-intro">
            CoastAI helps accounting firms, insurance agencies and financial service
            businesses organize customer enquiries, appointments, document requests
            and everyday workflows with practical AI-powered automation.
          </p>
          <div className="hero-actions">
            <Link href="/#audit" className="button">Request a free automation audit</Link>
            <a
              href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%27m%20interested%20in%20finance%20and%20insurance%20automation."
              className="button button-outline"
              target="_blank"
              rel="noreferrer"
            >
              Talk to CoastAI
            </a>
          </div>
          <p className="hero-note">
            Based in Mombasa, Kenya · Supporting businesses in Kenya and worldwide
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <p className="section-kicker">PRACTICAL AUTOMATION</p>
          <h2>Where automation can help your team</h2>
          <p className="section-intro">
            Reduce repetitive communication and help your team focus on client
            relationships and professional work.
          </p>
          <div className="service-grid">
            {solutions.map((solution) => (
              <article className="service-card" key={solution.title}>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <p className="section-kicker">WHO WE SUPPORT</p>
          <h2>Built for a range of financial service businesses</h2>
          <div className="process-grid">
            {businessTypes.map((type, index) => (
              <article className="service-card" key={type}>
                <p className="section-kicker">0{index + 1}</p>
                <h3>{type}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <p className="section-kicker">COMMON QUESTIONS</p>
          <h2>Finance and insurance automation FAQs</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
          <p className="section-intro">
            CoastAI focuses on administrative support and workflow efficiency.
            Businesses remain responsible for professional advice, regulatory
            compliance, client consent and the secure handling of sensitive data.
          </p>
        </div>
      </section>

      <section className="audit-section">
        <div className="container audit-panel">
          <p className="section-kicker">READY TO IMPROVE YOUR WORKFLOWS?</p>
          <h2>Find the right automation opportunities for your business.</h2>
          <p>
            Tell us how your team handles enquiries and routine administration.
            We can help identify practical opportunities and discuss a suitable setup.
          </p>
          <div className="hero-actions">
            <Link href="/#audit" className="button">Request a free automation audit</Link>
            <Link href="/" className="button button-outline">Explore CoastAI</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
