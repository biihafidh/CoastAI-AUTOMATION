import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://coast-ai-automation.vercel.app";

export const metadata: Metadata = {
  title: "AI Automation for Beauty, Salons & Wellness | CoastAI",
  description:
    "CoastAI helps salons, barbershops, spas and wellness businesses automate appointment enquiries, booking requests, reminders, customer follow-ups and everyday workflows.",
  alternates: { canonical: "/ai-automation-for-beauty-salons-wellness" },
  openGraph: {
    title: "AI Automation for Beauty, Salons & Wellness | CoastAI",
    description:
      "Improve customer communication and appointment management with practical AI automation for beauty and wellness businesses.",
    url: siteUrl + "/ai-automation-for-beauty-salons-wellness",
    siteName: "CoastAI",
    type: "website",
  },
};

const solutions = [
  {
    title: "Appointment enquiries",
    description:
      "Answer common questions about services, prices, opening hours and availability, and collect appointment preferences for your team.",
  },
  {
    title: "Booking requests",
    description:
      "Collect preferred dates, times, services and contact details, then route requests to staff or a supported booking system for confirmation.",
  },
  {
    title: "WhatsApp customer support",
    description:
      "Help customers ask about treatments, grooming services, packages, location and preparation information through supported messaging workflows.",
  },
  {
    title: "Appointment reminders",
    description:
      "Send reminders and follow-up messages through connected tools, subject to customer consent and your business communication preferences.",
  },
  {
    title: "Customer follow-ups",
    description:
      "Organise feedback requests and appropriate return-visit communication to help your team maintain customer relationships.",
  },
  {
    title: "Business administration",
    description:
      "Route incoming enquiries, organise tasks and reduce repetitive administrative work by connecting supported business applications.",
  },
];

const businessTypes = [
  "Hair salons and barbershops",
  "Spas and wellness centres",
  "Nail studios and beauty bars",
  "Beauty and skincare clinics",
  "Massage and relaxation businesses",
  "Personal care and grooming businesses",
];

const faqs = [
  {
    q: "Can customers book appointments through WhatsApp?",
    a: "A supported WhatsApp workflow can collect appointment preferences and send them to your booking system or staff. An appointment should only be considered confirmed when your configured booking process confirms it.",
  },
  {
    q: "Can CoastAI send appointment reminders?",
    a: "Yes, reminders can be automated through supported integrations. Your business should obtain appropriate customer consent and provide a suitable way to manage communication preferences.",
  },
  {
    q: "Can an AI assistant answer questions about treatments?",
    a: "An assistant can provide business-approved information about services, prices and opening hours. Questions requiring professional assessment or health advice should be referred to a qualified practitioner.",
  },
  {
    q: "Is automation suitable for a small salon?",
    a: "Yes. Workflows can be tailored to a solo professional, small salon, spa or multi-location wellness business based on its needs and existing tools.",
  },
];

export default function BeautySalonsWellnessPage() {
  return (
    <main>
      <nav className="container nav">
        <Link href="/" className="brand">CoastAI</Link>
        <div className="navlinks">
          <Link href="/#services">Services</Link>
          <Link href="/#audit">Free audit</Link>
          <a className="button nav-cta" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20beauty%20or%20wellness%20business.">Talk to CoastAI</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <p className="eyebrow hero-pill">AI AUTOMATION · BEAUTY & WELLNESS</p>
          <h1>Give every client a smoother booking experience</h1>
          <p>
            CoastAI helps beauty, salon and wellness businesses manage appointment
            enquiries, improve customer communication and reduce repetitive admin
            with practical AI assistants and automated workflows.
          </p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20beauty%20or%20wellness%20business.">Discuss your business</a>
            <Link className="button button-outline" href="/#services">Explore services</Link>
          </div>
          <p className="hero-note">For salons, spas and wellness businesses in Kenya and worldwide.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <p className="section-kicker">WHAT YOU CAN AUTOMATE</p>
          <h2>Practical AI solutions for beauty and wellness</h2>
          <p className="section-intro">
            Make it easier for clients to get information and request appointments.
            Available integrations depend on the tools your business uses.
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
          <h2>Automation for different beauty and wellness businesses</h2>
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
          <h2>Beauty and wellness automation FAQs</h2>
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
          <h2>Ready to simplify appointment management?</h2>
          <p>Tell us how your business handles bookings and customer enquiries. We can help identify practical automation opportunities.</p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20would%20like%20an%20automation%20consultation%20for%20my%20beauty%20or%20wellness%20business.">Contact CoastAI</a>
            <Link className="button button-outline" href="/#audit">Request a free audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
