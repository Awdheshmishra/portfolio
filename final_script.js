const { useEffect, useState } = React;

const profile = {
  github: "https://github.com/Awdheshmishra",
  linkedin: "https://www.linkedin.com/in/awdhesh-mishra-09780932a",
  leetcode: "https://leetcode.com/u/awdheshmishra/",
  portfolio: "https://awdheshmishra.netlify.app/",
  resume: "awdheshmishra.pdf",
  email: "awdheshmishra310@gmail.com",
  phone: "+91-6388573740",
};

const projects = [
  { number: "01", title: "NepCart", description: "A production-oriented MERN e-commerce application with product browsing, cart management, order flow, responsive UI, REST APIs, and a MongoDB data layer.", tags: ["React", "Node.js", "MongoDB"], category: "Full-stack", accent: "mint", live: "https://npcart.vercel.app/" },
  { number: "02", title: "Climate Intelligence Hub", description: "An AI-powered climate platform for real-time weather insights and generated environmental forecasts, built with event-driven workflows and an accessible React UI.", tags: ["React", "Python", "AI"], category: "AI / ML", accent: "orange", live: "https://climate-frontend-i8x6.onrender.com/", github: "https://github.com/Awdheshmishra/climate-change-predictor" },
  { number: "03", title: "Fake News Detector", description: "A MERN platform with role-based access control, scalable REST APIs, centralized error handling, and Redux Toolkit state management.", tags: ["MERN", "Redux", "REST API"], category: "Full-stack", accent: "blue", github: "https://github.com/Awdheshmishra/fake-news-detector-1" },
];

const skills = [
  ["Languages", ["C", "JavaScript (ES6+)", "TypeScript", "Python", "Java"]],
  ["Frontend", ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]],
  ["Backend & Data", ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"]],
  ["Engineering", ["DSA", "OOP", "DBMS", "OS", "Low-Level Design", "Git", "Docker"]],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = ["about", "work", "skills", "contact"].map(id => document.getElementById(id));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, .25, .6] });
    sections.forEach(section => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <nav className="nav">
    <a className="brand" href="#top"><span className="brand-mark">AM</span><span>Awdhesh Mishra</span></a>
    <div className={`nav-links ${open ? "open" : ""}`}>
      {["About", "Work", "Skills", "Contact"].map(item => <a className={active === item.toLowerCase() ? "active" : ""} key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
    </div>
    <a className="nav-cta" href={`mailto:${profile.email}`}>Let's talk <Arrow /></a>
    <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
  </nav>;
}

function Hero() {
  return <header className="hero" id="top">
    <div className="container hero-grid">
      <div>
        <p className="eyebrow">Computer Science · Lucknow, India</p>
        <h1>Building digital products with <em>purpose.</em></h1>
        <p className="hero-copy">I'm Awdhesh, a CSE student and aspiring software developer focused on thoughtful interfaces, strong fundamentals, and AI-driven solutions.</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">See my work <Arrow /></a>
          <a className="button secondary" href={profile.resume} download="Awdhesh-Mishra-Resume.pdf" target="_blank" rel="noreferrer">Download resume ↓</a>
        </div>
        <div className="availability"><span className="pulse"></span> Open to opportunities & freelance projects</div>
      </div>
      <div className="hero-art">
        <div className="photo-frame">
          <img src="image.png" alt="Awdhesh Mishra" />
          <div className="photo-caption"><span className="mono">PROFILE / 2026</span><span>Available</span></div>
        </div>
        <div className="float-card bottom"><strong>01</strong><span>curious mind</span></div>
      </div>
    </div>
  </header>;
}

function Stats({ solvedCount }) {
  return <div className="stats"><div className="container stats-grid">
    {[["2027", "B.Tech CSE graduation"], [solvedCount === null ? "..." : `${solvedCount}+`, "LeetCode problems"], ["03", "Production projects"], ["2026", "Web Developer internship"]].map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
  </div></div>;
}

function About() {
  return <section className="section" id="about"><div className="container about-grid">
    <div className="section-heading"><p className="eyebrow">01 / About me</p><h2>Engineer by study. Builder by instinct.</h2></div>
    <div className="about-copy">
      <p>I'm a B.Tech Computer Science and Engineering undergraduate at Sr. Institute of Management and Technology, Lucknow, graduating in 2027. I build full-stack products with the MERN stack and enjoy solving real-world problems with clean, maintainable code.</p>
      <p>During my Web Developer internship at Codec Technologies, I worked in a professional engineering environment, applying full-stack concepts to real project tasks and earning a Letter of Recommendation for my performance and dedication.</p>
      <div className="principles">
        <div className="principle"><strong>01 — 225+ problems solved</strong><span>Consistent LeetCode practice across arrays, trees, graphs, DP, and binary search.</span></div>
        <div className="principle"><strong>02 — Lead and communicate</strong><span>Former School Captain with experience leading initiatives, presenting ideas, and collaborating through code reviews.</span></div>
      </div>
      <div className="resume-details">
        <div><strong>Education</strong><span>B.Tech CSE · Sr. Institute of Management and Technology, Lucknow · 2023–2027</span></div>
        <div><strong>Internship</strong><span>Web Developer Intern · Codec Technologies Pvt. Ltd. · Jun–Jul 2026</span></div>
        <div><strong>Certifications</strong><span>Oracle Generative AI · Java Spring Boot · HTML & CSS · DSA (pwskills)</span></div>
      </div>
    </div>
  </div></section>;
}

function Work() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", ...new Set(projects.map(project => project.category))];
  const visibleProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

  return <section className="section" id="work"><div className="container">
    <div className="section-heading"><p className="eyebrow">02 / Selected work</p><h2>A few things I've been making.</h2><p>Projects that reflect my curiosity across software, automation, and interactive web experiences.</p></div>
    <div className="filter-row" role="group" aria-label="Filter projects">{filters.map(item => <button className={`filter-button ${filter === item ? "selected" : ""}`} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
    <div className="project-grid">{visibleProjects.map(project => <article className="project-card" key={project.title}>
      <div className={`project-visual ${project.accent}`}><span className="project-index mono">{project.number} / PROJECT</span><h3>{project.title}</h3></div>
      <div className="project-body"><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <Arrow /></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>}</div></div>
    </article>)}</div>
  </div></section>;
}

function Skills() {
  return <section className="section skills-section" id="skills"><div className="container">
    <div className="section-heading"><p className="eyebrow">03 / Toolkit</p><h2>Tools for turning ideas into something real.</h2><p>The technologies I use to build production-oriented products and keep learning every day.</p></div>
    <div className="skills-grid">{skills.map(([title, list]) => <div className="skill-card" key={title}><h3>{title}</h3><div className="skill-list">{list.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
  </div></section>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = event => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return <section className="section" id="contact"><div className="container contact-wrap">
    <div><p className="eyebrow">04 / Contact</p><h2>Have a good idea? Let's make it happen.</h2><p>Whether you have a project in mind or just want to say hello, my inbox is open.</p><div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a><a href={`tel:${profile.phone}`}>{profile.phone} <Arrow /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <Arrow /></a></div></div>
    <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label></div><label>Message<textarea required name="message" placeholder="Tell me a little about your idea..."></textarea></label>{sent && <div className="form-status">Thanks! Your message is ready — I’ll get back to you soon.</div>}<button className="button primary" type="submit">Send message <Arrow /></button></form>
  </div></section>;
}

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [solvedCount, setSolvedCount] = useState(null);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: .12 });
    document.querySelectorAll(".section, .stat, .project-card, .skill-card, .contact-form").forEach(element => revealObserver.observe(element));
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  useEffect(() => {
    const loadLeetCodeStats = async () => {
      try {
        const response = await fetch("https://alfa-leetcode-api.onrender.com/userProfile/awdheshmishra");
        if (!response.ok) throw new Error(`LeetCode stats request failed with ${response.status}`);
        const data = await response.json();
        const count = Number(data.totalSolved);
        if (!Number.isFinite(count)) throw new Error("LeetCode stats response did not include totalSolved");
        setSolvedCount(count);
      } catch (error) {
        console.warn("Live LeetCode count unavailable; showing the resume snapshot instead.", error);
        setSolvedCount(225);
      }
    };
    loadLeetCodeStats();
  }, []);

  return <><div className="scroll-progress" style={{ width: `${scrollProgress}%` }} /><Nav /><Hero /><Stats solvedCount={solvedCount} /><main><About /><Work /><Skills /><Contact /></main><footer><div className="container footer-inner"><span>© 2026 Awdhesh Mishra</span><span className="mono">DESIGNED + BUILT WITH CARE</span><span><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> · <a href={profile.portfolio} target="_blank" rel="noreferrer">Portfolio</a></span></div></footer></>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
