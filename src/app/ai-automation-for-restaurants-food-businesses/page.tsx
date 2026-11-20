import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://coast-ai-automation.vercel.app";

export const metadata: Metadata = {
  title: "AI Automation for Restaurants & Food Businesses | CoastAI",
  description:
    "CoastAI helps restaurants, cafés, caterers and food businesses automate customer enquiries, WhatsApp orders, reservations, order updates and follow-ups.",
  alternates: { canonical: "/ai-automation-for-restaurants-food-businesses" },
  openGraph: {
    title: "AI Automation for Restaurants & Food Businesses | CoastAI",
    description:
      "Improve customer communication and streamline restaurant operations with practical AI automation from CoastAI.",
    url: siteUrl + "/ai-automation-for-restaurants-food-businesses",
    siteName: "CoastAI",
    type: "website",
  },
};

const solutions = [
  {
    title: "AI customer enquiry assistant",
    description:
      "Answer common questions about menus, opening hours, location, services and delivery options through your website or supported messaging channels.",
  },
  {
    title: "WhatsApp order enquiries",
    description:
      "Help customers ask about menu items, submit order requests and reach your team. Confirm orders and payments through your approved business process.",
  },
  {
    title: "Reservation requests",
    description:
      "Collect dining enquiries, preferred dates, times and party sizes, then route requests to staff for confirmation.",
  },
  {
    title: "Order and delivery updates",
    description:
      "Send useful status messages and route customer questions to the right team using your connected ordering and delivery systems.",
  },
  {
    title: "Customer follow-ups",
    description:
      "Organise enquiry follow-ups, feedback requests and repeat-customer communication with appropriate consent.",
  },
  {
    title: "Staff and admin workflows",
    description:
      "Reduce repetitive work by organising incoming requests, assigning tasks and connecting supported business tools.",
  },
];

const businessTypes = [
  "Restaurants and cafés",
  "Hotels, lodges and resort restaurants",
  "Food delivery and takeaway businesses",
  "Catering companies and event caterers",
  "Bakeries, cafés and dessert shops",
  "Cloud kitchens and online food brands",
];

const faqs = [
  {
    q: "Can CoastAI automate WhatsApp orders?",
    a: "CoastAI can help automate order enquiries and customer communication through supported WhatsApp integrations. Order acceptance, payment and fulfilment should follow your business's configured systems and confirmation process.",
  },
  {
    q: "Can customers make restaurant reservations through an AI assistant?",
    a: "An assistant can collect reservation details and pass requests to your team or a supported booking system. A reservation should only be treated as confirmed after your configured system or staff confirms it.",
  },
  {
    q: "Will automation replace restaurant staff?",
    a: "No. Automation is designed to handle repetitive enquiries and administrative steps so staff can focus on food quality and guest service. Your team remains in control of important decisions and confirmations.",
  },
  {
    q: "Can a small restaurant use CoastAI?",
    a: "Yes. Solutions can be scoped around the size, budget, communication channels and existing tools of a small restaurant or a larger food business.",
  },
];

export default function RestaurantsFoodBusinessesPage() {
  return (
    <main>
      <nav className="container nav">
        <Link href="/" className="brand">CoastAI</Link>
        <div className="navlinks">
          <Link href="/#services">Services</Link>
          <Link href="/#audit">Free audit</Link>
          <a className="button nav-cta" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20restaurant%20or%20food%20business.">Talk to CoastAI</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <p className="eyebrow hero-pill">AI AUTOMATION · RESTAURANTS & FOOD BUSINESSES</p>
          <h1>Serve customers better with smarter restaurant automation</h1>
          <p>
            CoastAI helps restaurants and food businesses manage customer enquiries,
            streamline order communication and reduce repetitive admin with practical
            AI assistants and automated workflows.
          </p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20restaurant%20or%20food%20business.">Discuss your business</a>
            <Link className="button button-outline" href="/#services">Explore services</Link>
          </div>
          <p className="hero-note">For restaurants, cafés, caterers and food businesses in Kenya and worldwide.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <p className="section-kicker">WHAT YOU CAN AUTOMATE</p>
          <h2>Practical AI solutions for food businesses</h2>
          <p className="section-intro">
            Make it easier for customers to get information and for your team to manage
            everyday requests. Integrations depend on the tools your business uses.
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
          <h2>Automation for different food business models</h2>
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
          <h2>Restaurant automation FAQs</h2>
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
          <h2>Ready to simplify customer communication?</h2>
          <p>Tell us how your restaurant handles enquiries, orders and reservations. We can help identify useful automation opportunities.</p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20would%20like%20an%20automation%20consultation%20for%20my%20food%20business.">Contact CoastAI</a>
            <Link className="button button-outline" href="/#audit">Request a free audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
