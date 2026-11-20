import type { Metadata } from "next";
import Link from "next/link";

const whatsappUrl = "https://wa.me/254726495238?text=Hi%20CoastAI!%20I%27d%20like%20to%20explore%20automation%20for%20my%20travel%20or%20tourism%20business.";

export const metadata: Metadata = {
  title: "AI Automation for Travel and Tourism Businesses | CoastAI",
  description: "CoastAI helps travel agencies, tour operators, safari companies, hotels, and tourism providers automate booking enquiries, customer communication, lead management, and follow-ups.",
  alternates: { canonical: "/ai-automation-for-travel-tourism" },
  openGraph: {
    title: "AI Automation for Travel and Tourism Businesses | CoastAI",
    description: "Streamline travel enquiries, booking communication, and customer follow-ups with CoastAI automation.",
    url: "https://coast-ai-automation.vercel.app/ai-automation-for-travel-tourism",
    siteName: "CoastAI",
    type: "website"
  }
};

const solutions = [
  ["Booking enquiries", "Help visitors ask about tours, travel packages, accommodation, transfers, availability, and the next steps to request a booking."],
  ["WhatsApp travel assistance", "Organize customer conversations, share approved trip information, collect enquiry details, and route complex requests to your team."],
  ["Lead capture and qualification", "Capture travel dates, group sizes, destinations, and service interests so your team can prioritize and respond to enquiries."],
  ["Booking follow-ups", "Create timely follow-up workflows for quotations and booking enquiries, with staff review before any booking is confirmed."],
  ["Customer information and FAQs", "Answer common questions about itineraries, inclusions, meeting points, operating hours, policies, and travel preparation using approved content."],
  ["Transfer and tour coordination", "Connect compatible tools to notify staff, organize requests, and coordinate administrative steps for transfers, excursions, and experiences."]
];

const businessTypes = [
  "Travel agencies and tour operators",
  "Safari and excursion companies",
  "Hotels, resorts, and guest houses",
  "Car hire and vehicle rental businesses",
  "Airport transfer and transport providers",
  "Boat trips and marine tour operators",
  "Adventure and outdoor experience providers",
  "Destination management companies"
];

const faqs = [
  ["Can an AI assistant answer questions about tours and packages?", "Yes. It can provide approved information about destinations, itineraries, inclusions, prices, policies, and how to request a booking. Your team can handle tailored recommendations and complex questions."],
  ["Can CoastAI automate booking enquiries on WhatsApp?", "Yes. A WhatsApp workflow can collect enquiry details, share approved information, and route requests to your reservations or sales team. Availability depends on your WhatsApp account setup and required integrations."],
  ["Can customers make confirmed bookings through the assistant?", "A workflow may collect booking requests or connect to a compatible booking platform. A booking should only be described as confirmed after availability, payment, and the provider's confirmation process have been completed."],
  ["Can the system follow up on travel quotations?", "Yes. Follow-up reminders and messages can be configured for enquiries and quotations, subject to your communication preferences, customer consent, and the tools you use."],
  ["Can it support international travellers?", "Yes. Workflows can be designed for customers in different markets and time zones. Language options and integrations should be agreed as part of the project scope."],
  ["Does CoastAI work with tourism businesses outside Mombasa?", "Yes. CoastAI is based in Mombasa, Kenya and can work with tourism and travel businesses across Kenya and internationally, depending on project requirements and available integrations."]
];

export default function TravelTourismAutomationPage() {
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
          <div className="eyebrow hero-pill">AI AUTOMATION FOR TRAVEL & TOURISM · KENYA & WORLDWIDE</div>
          <h1>Turn travel enquiries<br /><span>into better guest experiences.</span></h1>
          <p>CoastAI helps travel agencies, tour operators, accommodation providers, and tourism businesses manage booking enquiries, customer communication, lead follow-ups, and everyday coordination workflows.</p>
          <div className="hero-actions">
            <Link className="button" href="/#audit">Get a free automation audit ↗</Link>
            <a className="button-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to CoastAI</a>
          </div>
          <div className="hero-note">Responsive customer communication for travel businesses, from first enquiry to post-trip follow-up.</div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-kicker">TRAVEL & TOURISM AUTOMATION SOLUTIONS</div>
          <div className="section-intro">
            <h2>Make it easier to manage<br />every travel enquiry.</h2>
            <p>Customers often ask about dates, destinations, prices, availability, transfers, and trip details before making a decision. Automation can help your team respond consistently and keep enquiries organized.</p>
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
            <h2>Built around your<br />booking journey.</h2>
            <p>We review how customers discover, enquire, and book your services, then identify suitable workflows that support your team and existing booking systems.</p>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Map the journey</h3><p>Understand your channels, common questions, quotation process, booking steps, and customer handovers.</p></article>
            <article><span>02</span><h3>Design workflows</h3><p>Set up approved responses, enquiry capture, follow-up steps, and integrations where available.</p></article>
            <article><span>03</span><h3>Test and refine</h3><p>Test with your team to make sure information is accurate and booking decisions remain properly confirmed.</p></article>
          </div>
        </div>
      </section>

      <section className="upgrades-section">
        <div className="container">
          <div className="section-kicker">TRAVEL & TOURISM BUSINESSES WE SUPPORT</div>
          <div className="section-intro">
            <h2>Flexible for different<br />travel experiences.</h2>
            <p>Whether you sell tours, stays, transfers, or complete travel experiences, workflows can be tailored to your services and customer journey.</p>
          </div>
          <div className="faq-list">
            {businessTypes.map((type) => <div className="faq-item" key={type}><p>{type}</p></div>)}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-kicker">TRAVEL & TOURISM AUTOMATION FAQ</div>
          <div className="section-intro"><h2>Questions travel teams<br />often ask.</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
          <p>Live availability, payment processing, and booking confirmation depend on compatible third-party booking systems and the provider's own confirmation procedures.</p>
        </div>
      </section>

      <section className="audit-section">
        <div className="audit-panel">
          <div className="section-kicker">GROW WITH SMARTER TRAVEL WORKFLOWS</div>
          <h2>Explore practical automation for your travel business.</h2>
          <p>Tell us how your team handles travel enquiries, quotations, and bookings. We can help identify a suitable next step.</p>
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
