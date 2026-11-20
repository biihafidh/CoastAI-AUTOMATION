import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://coast-ai-automation.vercel.app";

export const metadata: Metadata = {
  title: "AI Automation for Agriculture & Agribusiness | CoastAI",
  description:
    "CoastAI helps farms, agricultural suppliers and agribusinesses automate customer enquiries, product requests, order communication, lead management and business workflows.",
  alternates: { canonical: "/ai-automation-for-agriculture-agribusiness" },
  openGraph: {
    title: "AI Automation for Agriculture & Agribusiness | CoastAI",
    description:
      "Streamline customer communication, sales enquiries and everyday operations with practical AI automation for agriculture businesses.",
    url: siteUrl + "/ai-automation-for-agriculture-agribusiness",
    siteName: "CoastAI",
    type: "website",
  },
};

const solutions = [
  {
    title: "Customer enquiry assistants",
    description:
      "Answer business-approved questions about products, services, operating hours, locations and ordering processes through your website or supported messaging channels.",
  },
  {
    title: "Product and supply enquiries",
    description:
      "Collect requests about seeds, fertiliser, animal feed, equipment and other supplies, then route them to the right sales representative.",
  },
  {
    title: "Order communication",
    description:
      "Organise order requests, share status updates and keep customers informed through connected systems and approved business processes.",
  },
  {
    title: "Lead capture and follow-ups",
    description:
      "Record prospective buyers, distributors and business partners, organise their requirements and schedule timely follow-ups.",
  },
  {
    title: "Supplier and team coordination",
    description:
      "Route incoming requests, notify relevant team members and organise routine coordination tasks using supported tools.",
  },
  {
    title: "Administrative workflows",
    description:
      "Reduce repetitive data entry, organise customer requests and connect supported business applications to simplify everyday operations.",
  },
];

const businessTypes = [
  "Commercial farms and farm businesses",
  "Agricultural input and equipment suppliers",
  "Agribusiness distributors and wholesalers",
  "Agricultural cooperatives and associations",
  "Food producers and processors",
  "Livestock and animal-feed businesses",
];

const faqs = [
  {
    q: "Can CoastAI help agricultural suppliers manage product enquiries?",
    a: "Yes. An assistant can collect enquiries about products, availability and customer requirements, then route them to your sales team. Current stock and pricing should come from an integrated, maintained business system.",
  },
  {
    q: "Can customers submit orders through WhatsApp?",
    a: "A supported WhatsApp workflow can collect order requests and pass them to your team or connected order system. Orders, prices and payments should be confirmed through your approved process.",
  },
  {
    q: "Can automation provide farming or crop advice?",
    a: "A chatbot can share information your business has reviewed and approved, such as product instructions or published resources. It should not replace qualified agronomists, veterinarians or other agricultural professionals for specialised advice.",
  },
  {
    q: "Is CoastAI suitable for small farms and cooperatives?",
    a: "Yes. Workflows can be scoped to the size and needs of a small farm, cooperative, supplier or larger agribusiness, depending on its processes and available tools.",
  },
];

export default function AgricultureAgribusinessPage() {
  return (
    <main>
      <nav className="container nav">
        <Link href="/" className="brand">CoastAI</Link>
        <div className="navlinks">
          <Link href="/#services">Services</Link>
          <Link href="/#audit">Free audit</Link>
          <a className="button nav-cta" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20agriculture%20or%20agribusiness.">Talk to CoastAI</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <p className="eyebrow hero-pill">AI AUTOMATION · AGRICULTURE & AGRIBUSINESS</p>
          <h1>Grow your agribusiness with smarter automation</h1>
          <p>
            CoastAI helps farms, agricultural suppliers and food producers organise
            customer enquiries, streamline order communication and reduce repetitive
            administration with practical AI assistants and connected workflows.
          </p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20want%20to%20automate%20my%20agriculture%20or%20agribusiness.">Discuss your business</a>
            <Link className="button button-outline" href="/#services">Explore services</Link>
          </div>
          <p className="hero-note">For farms, suppliers and agribusinesses in Kenya and worldwide.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <p className="section-kicker">WHAT YOU CAN AUTOMATE</p>
          <h2>Practical AI solutions for agriculture businesses</h2>
          <p className="section-intro">
            Make it easier for buyers and partners to reach your team while helping
            staff manage routine requests. Integrations depend on the tools your
            business uses.
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
          <h2>Automation across the agricultural supply chain</h2>
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
          <h2>Agriculture automation FAQs</h2>
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
          <h2>Ready to simplify your agribusiness operations?</h2>
          <p>Tell us how your business handles product enquiries, orders and customer communication. We can help identify practical automation opportunities.</p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/254726495238?text=Hello%20CoastAI%2C%20I%20would%20like%20an%20automation%20consultation%20for%20my%20agriculture%20business.">Contact CoastAI</a>
            <Link className="button button-outline" href="/#audit">Request a free audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
