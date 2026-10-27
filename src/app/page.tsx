const services = [
  { n: "01", title: "AI customer assistant", text: "Answer common questions quickly and guide customers to the right next step, any time of day." },
  { n: "02", title: "Lead capture & follow-up", text: "Collect enquiries, organize prospects, and follow up so fewer opportunities go cold." },
  { n: "03", title: "Booking inquiry workflows", text: "Make it easier to handle availability questions, quote requests, and booking handoffs." }
];
export default function Home() {
  return <main>
    <header className="container nav">
      <a className="brand" href="#">Coast<span>AI</span></a>
      <nav className="navlinks"><a href="#services">Services</a><a href="#process">How it works</a><a className="button" href="mailto:hello@coastai.co.ke?subject=CoastAI%20automation%20enquiry">Talk to us</a></nav>
    </header>
    <section className="hero"><div className="container">
      <div className="eyebrow">AI automation · Mombasa, Kenya</div>
      <h1>AI-powered growth.<br/>Smarter business.</h1>
      <p>CoastAI helps hotels, tour operators, and service businesses save time, respond faster, and turn more enquiries into customers with practical automation.</p>
      <div className="hero-actions"><a className="button" href="mailto:hello@coastai.co.ke?subject=Book%20a%20CoastAI%20consultation">Book a free consultation ↗</a><a className="button-outline" href="#services">Explore services</a></div>
    </div></section>
    <section id="services"><div className="container">
      <div className="section-head"><div className="eyebrow">What we do</div><h2>Less repetitive work.<br/>More room to grow.</h2><p className="muted">Start with one clear business problem. We map the workflow, recommend the right tools, and help you implement a solution that fits your team.</p></div>
      <div className="cards">{services.map(s => <article className="card" key={s.n}><div className="num">{s.n} / SERVICE</div><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>
    </div></section>
    <section id="process" className="steps"><div className="container">
      <div className="section-head"><div className="eyebrow">Simple process</div><h2>From bottleneck to better workflow.</h2></div>
      <div className="cards"><article className="card"><div className="num">STEP 01</div><h3>Discover</h3><p>We identify the tasks taking up too much of your team's time.</p></article><article className="card"><div className="num">STEP 02</div><h3>Design</h3><p>We map a practical automation with clear handoffs and safeguards.</p></article><article className="card"><div className="num">STEP 03</div><h3>Launch & improve</h3><p>Test with real scenarios, train your team, and improve based on results.</p></article></div>
    </div></section>
    <section><div className="container"><div className="cta"><div><div className="eyebrow">Ready to simplify?</div><h2>Let's automate the busywork.</h2><p className="muted" style={{color:"#d5e4ec"}}>Tell us what slows your business down. We'll explore a practical next step.</p></div><a className="button" href="mailto:hello@coastai.co.ke?subject=CoastAI%20automation%20enquiry">hello@coastai.co.ke ↗</a></div></div></section>
    <footer><div className="container">© {new Date().getFullYear()} CoastAI Automation Agency · Mombasa, Kenya</div></footer>
  </main>;
}
