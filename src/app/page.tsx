import ChatWidget from "@/components/ChatWidget";
import AuditForm from "@/components/AuditForm";

const services = [
  ["🤖","AI chatbots","Answer questions and qualify leads 24/7."],
  ["💬","WhatsApp chatbots","Bookings and support on the app customers already use."],
  ["⚙️","Workflow automation","Sync customer records, invoicing, and follow-ups automatically."],
  ["🧠","AI agents","Digital assistants that research, draft, and help your team get work done."]
];
const industryPages = [
  ["AI automation for small businesses","/ai-automation-for-small-businesses","Practical automation for startups and growing teams."],
  ["AI automation for e-commerce","/ai-automation-for-ecommerce","Support shoppers, capture enquiries, and streamline online orders."],
  ["AI automation for real estate","/ai-automation-for-real-estate","Manage property enquiries, qualify leads, and arrange viewings."],
  ["AI automation for healthcare","/ai-automation-for-healthcare","Support appointment enquiries and patient communication workflows."],
  ["AI automation for education","/ai-automation-for-education","Help manage student enquiries, admissions, and reminders."],
  ["AI automation for retail","/ai-automation-for-retail","Respond to product questions and support customer orders."],
  ["AI automation for travel and tourism","/ai-automation-for-travel-tourism","Handle travel enquiries, follow-ups, and booking communication."],
  ["AI automation for finance and insurance","/ai-automation-for-finance-insurance","Organize client enquiries, appointments, and document workflows."],
  ["AI automation for hotels and hospitality","/ai-automation-for-hotels-hospitality","Improve guest communication and booking enquiry support."],
  ["AI automation for restaurants and food businesses","/ai-automation-for-restaurants-food-businesses","Support order enquiries, reservations, and customer follow-ups."],
  ["AI automation for logistics and transportation","/ai-automation-for-logistics-transportation","Coordinate delivery enquiries, updates, and lead follow-ups."],
  ["AI automation for beauty, salons and wellness","/ai-automation-for-beauty-salons-wellness","Manage appointment requests, reminders, and client messages."],
  ["AI automation for professional services","/ai-automation-for-professional-services","Streamline client enquiries, consultations, and admin workflows."],
  ["AI automation for agriculture and agribusiness","/ai-automation-for-agriculture-agribusiness","Manage product enquiries, orders, and supplier communication."],
  ["AI automation for manufacturing and industrial businesses","/ai-automation-for-manufacturing-industrial","Organize quotation requests, customer enquiries, and order communication."]
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
const faqs = [
  ["What does CoastAI do?","CoastAI builds AI chatbots, WhatsApp automation, AI agents, and business workflows that help organizations respond to customers, manage enquiries, capture leads, and reduce repetitive tasks."],
  ["Which industries can use CoastAI?","Our solutions can be adapted for retail, hospitality, travel, real estate, education, healthcare, professional services, e-commerce, logistics, financial services, and many other industries."],
  ["Does CoastAI work with small businesses?","Yes. We work with businesses of different sizes, from small businesses and startups to growing teams and larger organizations. Solutions are scoped around your goals, workflows, and budget."],
  ["Where does CoastAI provide services?","CoastAI is based in Mombasa, Kenya and works with businesses in Kenya and internationally. Contact us to discuss your location and requirements."],
  ["What can business automation help with?","Automation can help answer common customer questions, route new enquiries, follow up with leads, organize information, support bookings, and connect repetitive tasks across business tools."]
];
const whatsappUrl = "https://wa.me/254726495238?text=Hi%20CoastAI!%20I%27d%20like%20to%20talk%20about%20automation.";
export default function Home() {
 return <main>
  <header className="container nav"><a className="brand" href="#">Coast<span>AI</span><small> AUTOMATION AGENCY</small></a><nav className="navlinks"><a href="#services">What we build</a><a href="/login">Sign in</a><a className="button nav-cta" href="/signup">Start free ↗</a><a href="#industries">Industries</a><a href="#process">How it works</a><a href="#upgrades">Optional upgrades</a><a href="#faq">FAQs</a><a href="#audit">Free audit</a><a className="button nav-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to us ↗</a></nav></header>
  <section className="hero"><div className="hero-glow"/><div className="container hero-inner"><div className="eyebrow hero-pill">AI AUTOMATION AGENCY · MOMBASA, KENYA · SERVING BUSINESSES WORLDWIDE</div><h1>Smarter Business<br/><span>Starts with CoastAI.</span></h1><p>CoastAI provides AI-powered messaging and business automation that helps businesses save time, respond to customers faster, capture more leads, and grow with confidence.</p><div className="hero-actions"><a className="button" href="#audit">Get a free automation audit ↗</a><a className="button-outline" href="#services">Explore our services</a></div><div className="hero-note">Practical AI solutions for startups, small businesses, growing teams, and established organizations across all industries.</div></div></section>
  <section id="services" className="services-section"><div className="container"><div className="section-kicker">WHAT WE BUILD</div><div className="section-intro"><h2>Automate smarter.<br/>Grow faster.</h2><p>From the first customer question to the final follow-up, CoastAI helps your team deliver better customer experiences while reducing repetitive work.</p></div><div className="service-grid">{services.map(([icon,title,desc])=><article className="service-card" key={title}><div className="service-icon">{icon}</div><div><h3>{title}</h3><p>{desc}</p></div><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Explore service ↗</a></article>)}</div></div></section>
  <section id="industries" className="services-section"><div className="container"><div className="section-kicker">INDUSTRIES WE SUPPORT</div><div className="section-intro"><h2>Explore AI automation<br/>by industry.</h2><p>See practical ways CoastAI can support different business types. Choose an industry to explore relevant solutions, common workflows, and next steps.</p></div><div className="service-grid">{industryPages.map(([title,url,desc])=><article className="service-card" key={url}><div><h3>{title}</h3><p>{desc}</p></div><a href={url}>Explore industry solutions ↗</a></article>)}</div></div></section>
  <section id="process" className="process-section"><div className="container"><div className="section-kicker">HOW IT WORKS</div><div className="process-grid">{steps.map(([n,title,desc])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
  <section id="upgrades" className="upgrades-section"><div className="container"><div className="section-kicker">OPTIONAL FUTURE UPGRADES</div><div className="section-intro"><h2>Extend your<br/>automation.</h2><p>Add more capabilities as your business grows. Each upgrade can be scoped around your team's tools and requirements.</p></div><div className="upgrade-grid">{upgrades.map(([title,price,desc])=><article className="upgrade-card" key={title}><div className="upgrade-card-top"><h3>{title}</h3><span className="upgrade-price">{price}</span></div><p>{desc}</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Enquire about this upgrade ↗</a></article>)}</div><p className="upgrade-note">Prices are starting prices in Kenyan Shillings. Final pricing depends on scope. Third-party subscriptions and usage charges are quoted separately.</p></div></section>
  <section id="faq" className="faq-section"><div className="container"><div className="section-kicker">COMMON QUESTIONS</div><div className="section-intro"><h2>AI automation<br/>for real businesses.</h2><p>Learn how CoastAI helps different types of organizations improve customer communication and everyday operations.</p></div><div className="faq-list">{faqs.map(([question,answer])=><details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
  <section id="audit" className="audit-section"><div className="audit-panel"><div className="section-kicker">START WITH A FREE AUDIT</div><h2>Get a free automation audit</h2><p>Tell us what's slowing your team down. We'll map a practical next step.</p><AuditForm /></div></section>
  <footer><div className="container footer-inner"><a className="brand" href="#">Coast<span>AI</span></a><p>Automate Smarter. Grow Faster.</p><span>© {new Date().getFullYear()} CoastAI Automation Agency · Mombasa, Kenya</span></div></footer><ChatWidget/><a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with CoastAI on WhatsApp">☏ <span>WhatsApp us</span></a>
 </main>;
}