import type { Metadata } from "next";
import Link from "next/link";

const whatsappUrl = "https://wa.me/254726495238?text=Hi%20CoastAI!%20I%27d%20like%20to%20explore%20automation%20for%20my%20education%20business.";

export const metadata: Metadata = {
  title: "AI Automation for Schools and Education Businesses | CoastAI",
  description: "CoastAI helps schools, colleges, tutors, and education providers automate student enquiries, admissions communication, registration workflows, reminders, and administrative tasks.",
  alternates: { canonical: "/ai-automation-for-education" },
  openGraph: {
    title: "AI Automation for Education Businesses | CoastAI",
    description: "Simplify student enquiries, admissions communication, and education administration with CoastAI.",
    url: "https://coast-ai-automation.vercel.app/ai-automation-for-education",
    siteName: "CoastAI",
    type: "website"
  }
};

const solutions = [
  ["Student enquiry assistants", "Answer approved general questions about courses, programmes, fees, schedules, locations, and how to contact your admissions team."],
  ["Admissions communication", "Organize prospective student enquiries and guide applicants through the next steps in your admissions process."],
  ["Registration workflows", "Collect basic registration details and route submissions to the appropriate administrator for review and processing."],
  ["WhatsApp communication", "Help students and parents reach your institution through familiar messaging channels, with clear handover to staff."],
  ["Reminders and follow-ups", "Set up reminders for application deadlines, information sessions, registration milestones, and other important dates."],
  ["Administrative automation", "Connect compatible tools to route enquiries, notify staff, organize tasks, and reduce repetitive office work."]
];

const educationTypes = [
  "Primary and secondary schools",
  "Colleges and universities",
  "Vocational and technical institutions",
  "Online learning platforms",
  "Tutors and private tuition centres",
  "Coaching and examination preparation centres",
  "Professional development providers",
  "Language and skills training centres"
];

const faqs = [
  ["Can an AI assistant answer questions from students and parents?", "Yes. It can provide institution-approved general information about courses, admissions steps, schedules, fees, and contact details. Complex or sensitive questions can be passed to the relevant staff member."],
  ["Can CoastAI help with admissions enquiries?", "A workflow can capture prospective student enquiries, organize the details, and route them to your admissions team for follow-up. Your institution remains responsible for reviewing applications and making admission decisions."],
  ["Can we send reminders to students?", "Reminder workflows can be configured for suitable events such as application deadlines, registration dates, and scheduled sessions, using supported systems and appropriate consent."],
  ["Can automation collect student information?", "A workflow can collect only the information needed for a defined administrative purpose. The institution should review what is collected, where it is stored, who can access it, and how long it is retained."],
  ["Does CoastAI replace teachers or admissions staff?", "No. CoastAI focuses on repetitive communication and administrative workflows. Teaching, assessment, student support decisions, and admissions decisions remain with qualified people at your institution."],
  ["Can CoastAI work with education providers outside Mombasa?", "Yes. CoastAI is based in Mombasa, Kenya and can work with education businesses across Kenya and internationally, depending on project requirements and available integrations."]
];

export default function EducationAutomationPage() {
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
          <div className="eyebrow hero-pill">AI AUTOMATION FOR EDUCATION · KENYA & WORLDWIDE</div>
          <h1>Make student communication<br /><span>simpler and more responsive.</span></h1>
          <p>CoastAI helps schools, colleges, tutors, and education providers organize student enquiries, admissions communication, reminders, and everyday administrative workflows.</p>
          <div className="hero-actions">
            <Link className="button" href="/#audit">Get a free automation audit ↗</Link>
            <a className="button-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to CoastAI</a>
          </div>
          <div className="hero-note">Practical automation that supports educators and administrators without replacing their judgement.</div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-kicker">EDUCATION AUTOMATION SOLUTIONS</div>
          <div className="section-intro">
            <h2>Give your team more time<br />for meaningful work.</h2>
            <p>Education providers handle recurring questions, applications, registrations, and reminders. Suitable automation can make these processes easier to manage and help enquiries reach the right team.</p>
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
          <div className="section-kicker">A SIMPLE IMPLEMENTATION PROCESS</div>
          <div className="section-intro">
            <h2>Built around your<br />institution's workflow.</h2>
            <p>We start with the way your institution already works, then identify repetitive tasks that can be improved while keeping staff in control of important decisions.</p>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Understand</h3><p>Review your enquiry channels, admissions process, registration steps, and existing tools.</p></article>
            <article><span>02</span><h3>Design</h3><p>Map a practical workflow, approved responses, staff handovers, and information access.</p></article>
            <article><span>03</span><h3>Launch</h3><p>Test with your team, make improvements, and introduce the workflow with clear oversight.</p></article>
          </div>
        </div>
      </section>

      <section className="upgrades-section">
        <div className="container">
          <div className="section-kicker">EDUCATION PROVIDERS WE SUPPORT</div>
          <div className="section-intro">
            <h2>Flexible for different<br />learning environments.</h2>
            <p>Automation can be tailored to the communication and administrative needs of different education providers.</p>
          </div>
          <div className="faq-list">
            {educationTypes.map((type) => <div className="faq-item" key={type}><p>{type}</p></div>)}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-kicker">EDUCATION AUTOMATION FAQ</div>
          <div className="section-intro"><h2>Questions education<br />teams often ask.</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
          <p>Education providers should review applicable privacy, child safeguarding, consent, data security, and record-retention requirements before deploying workflows that involve student or family information.</p>
        </div>
      </section>

      <section className="audit-section">
        <div className="audit-panel">
          <div className="section-kicker">IMPROVE YOUR EDUCATION WORKFLOWS</div>
          <h2>Explore practical automation for your institution.</h2>
          <p>Tell us how your team manages student enquiries, admissions, and reminders. We can help identify a suitable next step.</p>
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
