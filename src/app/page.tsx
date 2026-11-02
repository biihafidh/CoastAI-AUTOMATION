import ChatWidget from "@/components/ChatWidget";
import AuditForm from "@/components/AuditForm";

const services = [
  ["🤖","AI chatbots","Answer questions and qualify leads 24/7."],
  ["💬","WhatsApp chatbots","Bookings and support on the app customers already use."],
  ["⚙️","Workflow automation","Sync customer records, invoicing, and follow-ups automatically."],
  ["🧠","AI agents","Digital assistants that research, draft, and help your team get work done."]
];
const steps = [
  ["01","Audit","We map the manual steps, missed enquiries, and repetitive work worth automating."],
  ["02","Build","We create a bot, workflow, or agent around your tools and process."],
  ["03","Launch","We test, launch, and improve the system as your business grows."]
];
const upgrades = [
  ["Website AI chatbot","KSh 15,000","Add an AI assistant to your website to answer visitor questions and capture enquiries."],
  ["Facebook and Instagram lead automation","KSh 20,000","Capture social media enquiries and route new leads into your follow-up process."],
  ["Advanced sales dashboard","KSh 25,000","See lead activity, sales pipeline progress, and key performance information in one place."],
  ["Multi-agent sales management","KSh 30,000","Coordinate multiple sales agents, assign leads, and track follow-up activity."],
  ["Advanced reporting and analytics","Custom quote","Get tailored reports and deeper insights based on your business requirements."]
];
const whatsappUrl = "https://wa.me/254726495238?text=Hi%20CoastAI!%20I%27d%20like%20to%20talk%20about%20automation.";
export default function Home() {
 return <main>
  <header className="container nav"><a className="brand" href="#">Coast<span>AI</span><small> AUTOMATION AGENCY</small></a><nav className="navlinks"><a href="#services">What we build</a><a href="/login">Sign in</a><a className="button nav-cta" href="/signup">Start free ↗</a><a href="#process">How it works</a><a href="#upgrades">Optional upgrades</a><a href="#audit">Free audit</a><a className="button nav-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to us ↗</a></nav></header>
  <section className="hero"><div className="hero-glow"/><div className="container hero-inner"><div className="eyebrow hero-pill">AI AUTOMATION AGENCY · MOMBASA, KENYA</div><h1>Automate the busywork.<br/><span>Keep the human touch.</span></h1><p>CoastAI builds chatbots, WhatsApp flows, and AI agents that help your business respond faster and run smoother.</p><div className="hero-actions"><a className="button" href="#audit">Get a free automation audit ↗</a><a className="button-outline" href="#services">See what we build</a></div><div className="hero-note">Practical automation for hotels, tour operators, and growing service businesses.</div></div></section>
  <section id="services" className="services-section"><div className="container"><div className="section-kicker">WHAT WE BUILD</div><div className="section-intro"><h2>Smart systems.<br/>More human time.</h2><p>From the first customer question to the final follow-up, remove repetitive work without losing the personal touch.</p></div><div className="service-grid">{services.map(([icon,title,desc])=><article className="service-card" key={title}><div className="service-icon">{icon}</div><div><h3>{title}</h3><p>{desc}</p></div><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Explore service ↗</a></article>)}</div></div></section>
  <section id="process" className="process-section"><div className="container"><div className="section-kicker">HOW IT WORKS</div><div className="process-grid">{steps.map(([n,title,desc])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
  <section id="upgrades" className="upgrades-section"><div className="container"><div className="section-kicker">OPTIONAL FUTURE UPGRADES</div><div className="section-intro"><h2>Extend your<br/>automation.</h2><p>Add more capabilities as your business grows. Each upgrade can be scoped around your team's tools and requirements.</p></div><div className="upgrade-grid">{upgrades.map(([title,price,desc])=><article className="upgrade-card" key={title}><div className="upgrade-card-top"><h3>{title}</h3><span className="upgrade-price">{price}</span></div><p>{desc}</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Enquire about this upgrade ↗</a></article>)}</div><p className="upgrade-note">Prices are starting prices in Kenyan Shillings. Final pricing depends on scope. Third-party subscriptions and usage charges are quoted separately.</p></div></section>
  <section id="audit" className="audit-section"><div className="audit-panel"><div className="section-kicker">START WITH A FREE AUDIT</div><h2>Get a free automation audit</h2><p>Tell us what's slowing your team down. We'll map a practical next step.</p><AuditForm /></div></section>
  <footer><div className="container footer-inner"><a className="brand" href="#">Coast<span>AI</span></a><p>AI-powered growth. Smarter business.</p><span>© {new Date().getFullYear()} CoastAI Automation Agency · Mombasa, Kenya</span></div></footer><ChatWidget/><a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with CoastAI on WhatsApp">☏ <span>WhatsApp us</span></a>
 </main>;
}