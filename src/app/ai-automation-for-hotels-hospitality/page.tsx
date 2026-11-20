import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://coast-ai-automation.vercel.app";

export const metadata: Metadata = {
  title: "AI Automation for Hotels & Hospitality | CoastAI",
  description:
    "CoastAI helps hotels, resorts, restaurants and hospitality businesses automate guest enquiries, booking support, WhatsApp communication, follow-ups and routine operations.",
  alternates: { canonical: siteUrl + "/ai-automation-for-hotels-hospitality" },
  openGraph: {
    title: "AI Automation for Hotels & Hospitality | CoastAI",
    description:
      "Improve guest communication and streamline hospitality workflows with AI chat assistants and business automation from CoastAI.",
    url: siteUrl + "/ai-automation-for-hotels-hospitality",
    siteName: "CoastAI",
    type: "website",
  },
};

const solutions = [
  {
    title: "Guest enquiries around the clock",
    description:
      "Help answer common questions about rooms, facilities, menus, services, opening hours, directions and property policies using information approved by your team.",
  },
  {
    title: "Booking enquiry assistance",
    description:
      "Capture stay, dining and service enquiries, collect the details your team needs and route requests to the right booking channel or staff member.",
  },
  {
    title: "WhatsApp guest communication",
    description:
      "Support guest conversations and approved follow-up messages through WhatsApp Business integrations configured for your business.",
  },
  {
    title: "Lead capture and follow-ups",
    description:
      "Organize enquiries from your website and campaigns, record guest preferences where appropriate and help staff follow up promptly.",
  },
  {
    title: "Guest updates and reminders",
    description:
      "Send configured confirmations, reminders and useful pre-arrival or service updates when connected systems and guest consent allow.",
  },
  {
    title: "Staff and operations workflows",
    description:
      "Route requests, notify relevant teams and reduce repetitive admin tasks such as handling routine questions and tracking service requests.",
  },
];

const businessTypes = [
  "Hotels and resorts",
  "Guest houses and serviced apartments",
  "Restaurants, cafés and food-service businesses",
  "Tourism lodges and boutique accommodation",
  "Event venues and conference facilities",
  "Spas and other guest-service businesses",
];

const faqs = [
  {
    question: "Can an AI assistant answer hotel guest questions?",
    answer:
      "Yes. It can answer common questions using information your business provides, such as facilities, check-in guidance, menus, location and policies. Your team should review the information and provide a way to contact a staff member when needed.",
  },
  {
    question: "Can CoastAI take bookings automatically?",
    answer:
      "CoastAI can capture booking enquiries and route customers to your booking team or a compatible reservation system. Confirmed real-time bookings require an appropriate integration and configuration; availability should never be assumed without checking the booking system.",
  },
  {
    question: "Can we use WhatsApp for guest support?",
    answer:
      "WhatsApp workflows may be configured using the WhatsApp Business Platform and an approved integration. Availability depends on your account, provider setup and the message types you want to send.",
  },
  {
    question: "Will automation replace our hospitality staff?",
    answer:
      "The goal is to support your team, not replace personal hospitality. Automation can handle repetitive questions and routine workflows while staff focus on guest care and situations that need human attention.",
  },
  {
    question: "Can it connect to our hotel or restaurant software?",
    answer:
      "Possibly. Integration depends on the software's APIs, permissions, security requirements and technical compatibility. We assess the systems and workflow before confirming what can be connected.",
  },
];

export default function HotelsHospitalityAutomationPage() {
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
          <p className="eyebrow hero-pill">AI AUTOMATION FOR HOTELS &amp; HOSPITALITY</p>
          <h1>Give every guest a smoother experience with smarter automation.</h1>
          <p className="section-intro">
            CoastAI helps hotels, resorts, restaurants and hospitality businesses
            respond to enquiries, support booking journeys, manage follow-ups and
            streamline routine guest-service workflows with practical AI solutions.
          </p>
          <div className="hero-actions">
            <Link href="/#audit" className="button">Request a free automation audit</Link>
            <a
              href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%27m%20interested%20in%20hospitality%20automation."
              className="button button-outline"
              target="_blank"
              rel="noreferrer"
            >
              Talk to CoastAI
            </a>
          </div>
          <p className="hero-note">
            Based in Mombasa, Kenya · Supporting hospitality businesses in Kenya and worldwide
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <p className="section-kicker">HOSPITALITY AUTOMATION SOLUTIONS</p>
          <h2>Make guest communication easier to manage</h2>
          <p className="section-intro">
            Reduce repetitive work, help guests find information and give your
            staff more time to focus on welcoming people and delivering great service.
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
          <h2>Automation for different hospitality businesses</h2>
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
          <h2>Hotel and hospitality automation FAQs</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audit-section">
        <div className="container audit-panel">
          <p className="section-kicker">READY TO IMPROVE GUEST COMMUNICATION?</p>
          <h2>Discover where automation can help your hospitality business.</h2>
          <p>
            Tell us how your business handles guest enquiries, bookings and daily
            requests. We can help identify practical automation opportunities.
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
