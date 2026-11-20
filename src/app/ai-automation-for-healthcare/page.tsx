import type { Metadata } from "next";
import Link from "next/link";

const whatsappUrl = "https://wa.me/254726495238?text=Hi%20CoastAI!%20I%27d%20like%20to%20explore%20automation%20for%20my%20healthcare%20business.";

export const metadata: Metadata = {
  title: "AI Automation for Clinics and Healthcare Businesses | CoastAI",
  description: "CoastAI helps clinics and healthcare businesses streamline appointment enquiries, patient communication, reminders, lead handling, and administrative workflows with practical automation.",
  alternates: { canonical: "/ai-automation-for-healthcare" },
  openGraph: {
    title: "AI Automation for Healthcare Businesses | CoastAI",
    description: "Streamline appointment enquiries, reminders, and administrative communication with CoastAI automation.",
    url: "https://coast-ai-automation.vercel.app/ai-automation-for-healthcare",
    siteName: "CoastAI",
    type: "website"
  }
};

const solutions = [
  ["Appointment enquiries", "Help visitors ask about services, opening hours, location, availability, and how to request an appointment."],
  ["Appointment reminders", "Set up reminder workflows using approved scheduling systems and communication channels to help reduce missed appointments."],
  ["Patient communication", "Automate routine administrative messages, such as confirmations and directions, with clear handover to staff when needed."],
  ["Website chat assistants", "Give website visitors a convenient way to find general service information and contact your reception team."],
  ["Enquiry capture and routing", "Organize incoming enquiries and direct them to the appropriate reception or administration team."],
  ["Administrative workflows", "Reduce repetitive tasks with internal notifications, task routing, and connections to compatible business tools."]
];

const businessTypes = [
  "Medical clinics and medical centres",
  "Dental practices",
  "Diagnostic and testing laboratories",
  "Physiotherapy and rehabilitation centres",
  "Optical and eye-care practices",
  "Mental wellness and counselling practices",
  "Specialist healthcare providers",
  "Wellness and allied health businesses"
];

const faqs = [
  ["Can an AI assistant answer healthcare questions?", "It can provide approved general information about your services, location, opening hours, and appointment process. It should not diagnose conditions, recommend treatment, or replace a qualified healthcare professional."],
  ["Can CoastAI automate appointment requests?", "Yes. A workflow can collect appointment requests and preferred times, then send them to your staff or compatible scheduling system. An appointment should only be considered confirmed once your clinic confirms it."],
  ["Can patients receive reminders?", "Reminder workflows may be configured through supported systems and approved communication channels. The exact setup depends on your scheduling platform and consent requirements."],
  ["Can automation manage medical records?", "This page describes administrative communication and workflow automation, not automated clinical record handling. Any integration involving patient information requires a separate privacy, security, and compliance review before implementation."],
  ["How is sensitive patient information handled?", "Automation should collect only the information necessary for the intended task. We recommend avoiding sensitive medical details in general chat channels and reviewing applicable privacy, security, consent, and healthcare requirements before launch."],
  ["Does CoastAI work with healthcare businesses outside Mombasa?", "Yes. CoastAI is based in Mombasa, Kenya and can work with businesses across Kenya and internationally, subject to the requirements of each project."]
];

export default function HealthcareAutomationPage() {
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
          <div className="eyebrow hero-pill">AI AUTOMATION FOR HEALTHCARE · KENYA & WORLDWIDE</div>
          <h1>Make everyday healthcare<br /><span>communication simpler.</span></h1>
          <p>CoastAI helps clinics and healthcare businesses streamline appointment enquiries, routine communication, reminders, and administrative workflows so teams can spend less time on repetitive tasks.</p>
          <div className="hero-actions">
            <Link className="button" href="/#audit">Get a free automation audit ↗</Link>
            <a className="button-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to CoastAI</a>
          </div>
          <div className="hero-note">Practical administrative automation, with appropriate staff oversight and privacy safeguards.</div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-kicker">HEALTHCARE AUTOMATION SOLUTIONS</div>
          <div className="section-intro">
            <h2>Support your team<br />with smarter workflows.</h2>
            <p>Healthcare teams handle calls, appointment requests, routine questions, and follow-ups every day. The right automation can make these administrative processes more organized and responsive.</p>
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
          <div className="section-kicker">A CAREFUL, PRACTICAL APPROACH</div>
          <div className="section-intro">
            <h2>Designed around<br />your administrative needs.</h2>
            <p>We begin with your existing processes and tools, then identify suitable tasks to automate while keeping clinical decisions and sensitive matters with qualified staff.</p>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Review</h3><p>Understand your enquiry channels, appointment process, team responsibilities, and current software.</p></article>
            <article><span>02</span><h3>Plan</h3><p>Define a suitable workflow, information boundaries, staff handovers, and any integration requirements.</p></article>
            <article><span>03</span><h3>Implement</h3><p>Test the administrative workflow with your team and refine it before wider use.</p></article>
          </div>
        </div>
      </section>

      <section className="upgrades-section">
        <div className="container">
          <div className="section-kicker">HEALTHCARE BUSINESSES WE SUPPORT</div>
          <div className="section-intro">
            <h2>Flexible for different<br />healthcare services.</h2>
            <p>Automation can be scoped to the administrative needs and approved communication processes of different healthcare providers.</p>
          </div>
          <div className="faq-list">
            {businessTypes.map((type) => <div className="faq-item" key={type}><p>{type}</p></div>)}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-kicker">HEALTHCARE AUTOMATION FAQ</div>
          <div className="section-intro"><h2>Questions healthcare<br />teams often ask.</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
          <p>CoastAI provides business automation, not medical advice or clinical decision-making tools. Any use involving personal or health information must be assessed for applicable privacy, security, consent, and regulatory requirements before launch.</p>
        </div>
      </section>

      <section className="audit-section">
        <div className="audit-panel">
          <div className="section-kicker">IMPROVE YOUR ADMINISTRATIVE WORKFLOWS</div>
          <h2>Explore practical automation for your healthcare business.</h2>
          <p>Tell us how your team handles appointment enquiries and routine communication. We can help identify a suitable next step.</p>
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
