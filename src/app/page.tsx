import ChatWidget from "@/components/ChatWidget";

const services = [
  { n: "01", title: "AI chatbots", text: "Answer customer questions, qualify enquiries, and guide people to the right next step—day or night.", tag: "CUSTOMER SUPPORT" },
  { n: "02", title: "WhatsApp automation", text: "Handle first replies, collect useful details, and route conversations to the right person on your team.", tag: "MESSAGING" },
  { n: "03", title: "AI agents & workflows", text: "Connect repetitive tasks across your tools so leads, follow-ups, and everyday operations keep moving.", tag: "OPERATIONS" },
  { n: "04", title: "Lead capture & follow-up", text: "Turn website and social enquiries into organized leads, with timely follow-ups that help prevent missed opportunities.", tag: "GROWTH" },
  { n: "05", title: "Booking enquiry workflows", text: "Make it easier to collect booking details and pass requests to your team for availability checks and confirmation.", tag: "HOSPITALITY" },
  { n: "06", title: "Business process automation", text: "Reduce copy-and-paste work, simplify handoffs, and build reliable workflows around the way your business operates.", tag: "PRODUCTIVITY" }
];

const whatsappUrl = "https://wa.me/254726495238?text=Hi%20CoastAI!%20I%27d%20like%20to%20book%20a%20discovery%20call%20about%20business%20automation.";

export default function Home() {
  return <main>
    <header className="container nav">
      <a className="brand" href="#" aria-label="CoastAI home">Coast<span>AI</span><small> AUTOMATION AGENCY</small></a>
      <nav className="navlinks" aria-label="Main navigation">
        <a href="#services">What we build</a><a href="#process">How it works</a><a href="#pricing">Packages</a>
        <a className="button nav-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Book a discovery call <span>↗</span></a>
      </nav>
    </header>

    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="eyebrow hero-pill">AI AUTOMATION AGENCY · MOMBASA, KENYA</div>
        <h1>Automate the busywork.<br/><span>Keep the human touch.</span></h1>
        <p>CoastAI builds chatbots, WhatsApp workflows, and AI-powered systems that help your business respond faster and run smoother.</p>
        <div className="hero-actions">
          <a className="button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Book a discovery call <span>↗</span></a>
          <a className="button-outline" href="#pricing">Explore packages</a>
        </div>
        <div className="hero-note">Practical automation for hotels, tour operators, and growing service businesses.</div>
      </div>
    </section>

    <section id="services" className="services-section">
      <div className="container">
        <div className="section-kicker">WHAT WE BUILD</div>
        <div className="section-intro"><h2>Less busywork.<br/>More time for people.</h2><p>Start with the task that slows you down. We'll help shape an automation that fits your team, your customers, and your day-to-day operations.</p></div>
        <div className="service-grid">{services.map(s => <article className="service-card" key={s.n}>
          <div className="service-top"><span className="service-number">{s.n}</span><span className="service-tag">{s.tag}</span></div>
          <h3>{s.title}</h3><p>{s.text}</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ask about ${s.title}`}>Discuss this service <span>↗</span></a>
        </article>)}</div>
      </div>
    </section>

    <section id="process" className="process-section">
      <div className="container">
        <div className="section-kicker">A CLEAR, HUMAN PROCESS</div>
        <div className="section-intro"><h2>From first idea<br/>to a smarter workflow.</h2><p>No unnecessary complexity. We start by understanding your business, then build and test around a real operational need.</p></div>
        <div className="process-grid">
          <article><span>01</span><h3>Discover</h3><p>We learn how your team works and identify repetitive tasks or missed enquiries.</p></article>
          <article><span>02</span><h3>Design</h3><p>We map a practical solution, including clear human handoffs and safeguards.</p></article>
          <article><span>03</span><h3>Build & test</h3><p>We configure the workflow and test it against realistic customer scenarios.</p></article>
          <article><span>04</span><h3>Launch & improve</h3><p>We help your team get started and refine the automation as you learn.</p></article>
        </div>
      </div>
    </section>

    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="pricing-panel">
          <div><div className="section-kicker">PACKAGES THAT FIT YOUR BUSINESS</div><h2>Start with one workflow.<br/>Scale when you're ready.</h2><p>Every business is different. Tell us what you want to automate and we'll recommend a clear scope, timeline, and quote before work begins.</p></div>
          <a className="button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Get a tailored quote <span>↗</span></a>
        </div>
      </div>
    </section>

    <footer><div className="container footer-inner"><a className="brand" href="#">Coast<span>AI</span></a><p>AI-powered growth. Smarter business.</p><span>© {new Date().getFullYear()} CoastAI Automation Agency · Mombasa, Kenya</span></div></footer>
    <ChatWidget />
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with CoastAI on WhatsApp"><span aria-hidden="true">☏</span><span className="whatsapp-label">WhatsApp us</span></a>
  </main>;
}