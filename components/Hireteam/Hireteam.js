import React, { useState } from "react";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";

const Hireteam = () => {
  const [hiringModel, setHiringModel] = useState("Full Time");
  const [activeTab, setActiveTab] = useState("trending");

  // Tab definitions
  const tabs = [
    { id: "trending", label: "Trending Developers" },
    { id: "mobile",   label: "Mobile Developers" },
    { id: "web",      label: "Web Developers" },
    { id: "ecom",     label: "eCommerce & CMS Devs" },
  ];

  // Content per tab
  const tabContent = {
    trending: [
      { title: "MEAN Stack Developers",       desc: "Swatrixsoft's MEAN experts deliver full-stack apps with MongoDB, Express, Angular & Node.js." },
      { title: "MERN Stack Developers",       desc: "Our MERN team crafts dynamic React + Node.js/Express solutions." },
      { title: "Full Stack Developers",       desc: "End-to-end web and mobile expertise with Swatrixsoft from UI to API." },
      { title: "Python Developers",           desc: "Top-tier Django, Flask & FastAPI engineers for AI and data-driven apps." },
      { title: "Blockchain Developers",       desc: "Secure smart contracts & decentralized dApps with Swatrixsoft." },
      { title: "AWS Developers",              desc: "Scalable AWS Lambda, S3, QuickSight & EKS solutions by our team." },
      { title: "SaaS Platform Devs",          desc: "Custom multi-tenant SaaS platforms built by Swatrixsoft experts." },
      { title: "CRM Developers",              desc: "Salesforce, HubSpot & Zoho CRM customizations for enterprises." },
    ],
    mobile: [
      { title: "Flutter Developers",          desc: "Cross-platform apps with Flutter by Swatrixsoft." },
      { title: "React Native Devs",           desc: "Native-feel mobile apps with React Native expertise." },
      { title: "Swift & Kotlin",              desc: "Dedicated iOS (Swift) & Android (Kotlin) developers at your service." },
    ],
    web: [
      { title: "React.js Developers",         desc: "Interactive SPAs built with React and best practices." },
      { title: "Vue.js Developers",           desc: "Fast, progressive UIs with Vue.js and ecosystem libraries." },
      { title: "Angular Developers",          desc: "Enterprise-grade Angular applications from concept to deployment." },
    ],
    ecom: [
      { title: "Magento Devs",                desc: "Scalable enterprise e-commerce solutions with Magento." },
      { title: "Shopify Experts",             desc: "Custom & headless Shopify stores optimized for conversions." },
      { title: "WooCommerce Devs",            desc: "WordPress & WooCommerce shops with custom plugins." },
    ],
  };

  // Technology Expertise
  const techExpertise = [
    { label: "AI & Machine Learning", skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"] },
    { label: "Data Engineering",     skills: ["Apache Spark", "Kafka", "Snowflake", "BigQuery"] },
    { label: "Frontend Dev",         skills: ["React", "Vue", "Svelte", "Tailwind CSS"] },
    { label: "Backend Dev",          skills: ["Node.js", "Express", "Django", "Spring Boot"] },
    { label: "Mobile Dev",           skills: ["Flutter", "Swift", "Kotlin", "React Native"] },
    { label: "Cloud & DevOps",       skills: ["AWS", "Docker", "Kubernetes", "Terraform"] },
  ];

  // Hiring models
  const hiringModels = [
    {
      title: "Full Time Monthly Hire",
      badge: "bg-primary text-white",
      items: [
        ["Hours",       "180 hrs / 4 weeks"],
        ["Duration",    "1 Month"],
        ["Methodology", "Agile / Scrum"],
        ["Communication","Email, Chat, Phone"],
      ],
    },
    {
      title: "Hourly Hire",
      badge: "bg-success text-white",
      items: [
        ["Hours",       "Flexible based on project needs"],
        ["Duration",    "1 Month"],
        ["Methodology", "Agile / Scrum"],
        ["Communication","Email, Chat, Phone"],
      ],
    },
  ];

  // Benefits
  const benefits = [
    "Zero onboarding fees for project managers",
    "Direct & transparent communication",
    "Agile & Scrum‑based delivery",
    "Effortless team scaling",
    "Flexible engagement models",
    "Daily progress updates & releases",
    "Time zone–aligned collaboration",
    "Exclusive developer allocation",
    "Rapid onboarding process",
    "Advanced project management tools",
    "Robust version control & security",
    "Full code ownership & IP protection",
  ];

  // Code quality features
  const featureSections = [
    {
      title: "Coding Best Practices",
      items: [
        "Clean code & design patterns",
        "Three-level code reviews",
        "Performance optimization",
        "OWASP security compliance",
      ],
    },
    {
      title: "Test-Driven Development",
      items: [
        "Unit & integration tests",
        "Automated CI test pipelines",
        "Manual & exploratory testing",
        "Regression prevention",
      ],
    },
    {
      title: "CI/CD & Monitoring",
      items: [
        "Automated build & deploy",
        "Git-based version control",
        "Linting & static analysis",
        "Real‑time logging & alerts",
      ],
    },
    {
      title: "Architecture & Standards",
      items: [
        "DDD & SOLID principles",
        "Database indexing strategies",
        "Concurrency best practices",
        "Secure coding standards",
      ],
    },
  ];

  // Stats
  const stats = [
    { value: "240+", label: "Professionals" },
    { value: "15+",  label: "Years Experience" },
    { value: "2000+",label: "Projects Delivered" },
    { value: "46",   label: "Countries Served" },
  ];

  // Quick steps
  const quickSteps = [
    { step: 1, title: "Consultation", desc: "Discuss scope, goals & stack." },
    { step: 2, title: "Shortlist",    desc: "Review pre-vetted developers." },
    { step: 3, title: "Interview",    desc: "Meet & select your team." },
    { step: 4, title: "Start",        desc: "Kick off with agile rituals." },
  ];

  return (
    <>
      <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
      <MobileMenu />
      <Cart />

      {/* Hero Section */}
      <section className="rbt-section-gap bg-color-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="section-title pe-lg-5">
                <span className="subtitle bg-primary-opacity">Swatrixsoft, Jodhpur</span>
                <h1 className="title">Trusted Dedicated Developers</h1>
                <p className="mt--20">
                  Swatrixsoft in Jodhpur provides elite talent for web, mobile & AI to scale your business with cutting-edge solutions.
                </p>
                <ul className="rbt-list-style-1 mt--30">
                  <li>No onboarding fees for project managers</li>
                  <li>Pre-vetted senior developers</li>
                  <li>30-day satisfaction guarantee</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rbt-contact-form bg-color-light radius-10 p-4 p-md-5 shadow-lg">
                <h4 className="title mb--20">Request a Free Quote</h4>
                <form className="row g-3">
                  <div className="col-12">
                    <input type="text" className="form-control p-3" placeholder="Your Name*" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control p-3" placeholder="Email Address*" required />
                  </div>
                  <div className="col-md-6">
                    <input type="tel" className="form-control p-3" placeholder="Phone Number" />
                  </div>
                  <div className="col-12">
                    <label className="mb-2 fw-bold d-block">Engagement Model</label>
                    <div className="d-flex gap-3">
                      <button
                        type="button"
                        className={`rbt-btn btn-border px-5 py-3 ${hiringModel === "Full Time" ? "active" : ""}`}
                        onClick={() => setHiringModel("Full Time")}
                      >
                        Full Time
                      </button>
                      <button
                        type="button"
                        className={`rbt-btn btn-border px-5 py-3 ${hiringModel === "Hourly Hire" ? "active" : ""}`}
                        onClick={() => setHiringModel("Hourly Hire")}
                      >
                        Hourly Hire
                      </button>
                    </div>
                  </div>
                  <div className="col-12 mt--20">
                    <button className="rbt-btn btn-gradient w-100 py-3">Get Started</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Tab Section */}
      <section className="rbt-section-gap bg-color-white">
        <div className="container">
          <ul className="nav nav-pills justify-content-center mb--30">
            {tabs.map(tab => (
              <li className="nav-item mx-3" key={tab.id}>
                <button
                  className={`nav-link py-3 px-5 rounded-pill fw-semibold transition-all ${
                    activeTab === tab.id
                      ? "active bg-primary text-white shadow-lg"
                      : "bg-light text-secondary"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{ minWidth: 180 }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="bg-color-light radius-10 p-4">
            <div className="row g-4">
              {tabContent[activeTab].map((item, i) => (
                <div className="col-md-6" key={i}>
                  <h6 className="mb-2 fw-semibold">{item.title}</h6>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="rbt-section-gap bg-color-white">
        <div className="container">
          <div className="section-title text-center mb--40">
            <h4 className="title">Swatrixsoft Technology Expertise</h4>
            <p>Industry-leading tools & frameworks used by our Jodhpur team:</p>
          </div>
          <div className="row g-2">
            {techExpertise.map((group, idx) => (
              <React.Fragment key={idx}>
                <div className="col-md-3">
                  <div className="bg-primary btn-gradient radius-10 py-3 px-3 text-white">
                    {group.label}
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="bg-color-light radius-10 py-3 px-4">
                    <ul className="list-inline mb-0">
                      {group.skills.map((s, j) => (
                        <li className="list-inline-item me-4 mb-2" key={j}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Models */}
      <section className="rbt-section-gap bg-color-white">
        <div className="container">
          <h4 className="title text-center mb--40">Our Hiring Models</h4>
          <div className="row g-4">
            {hiringModels.map((m, i) => (
              <div className="col-md-6" key={i}>
                <div className="bg-color-light radius-10 p-4">
                  <span className={`badge mb-3 ${m.badge}`}>{m.title}</span>
                  <ul className="rbt-list-style-1 mt--20">
                    {m.items.map((it, j) => (
                      <li key={j}><strong>{it[0]}:</strong> {it[1]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & CTA */}
      <section className="rbt-section-gap bg-color-white">
        <div className="container">
          <div className="bg-color-light radius-10 p-4">
            <h4 className="title mb--30">Benefits</h4>
            <div className="row">
              {benefits.map((b, i) => (
                <div className="col-md-4" key={i}>
                  <ul className="rbt-list-style-1"><li>{b}</li></ul>
                </div>
              ))}
            </div>
            <div className="text-center mt--30">
              <a href="#" className="rbt-btn btn-gradient">Schedule Interview</a>
            </div>
          </div>
        </div>
      </section>

      {/* Code Quality & Standards */}
      <section className="rbt-section-gap bg-color-white">
        <div className="container">
          <h4 className="title text-center mb--40">Code Quality & Standards</h4>
          <div className="row g-4">
            {featureSections.map((f, i) => (
              <div className="col-md-6" key={i}>
                <div className="bg-color-light radius-10 p-4">
                  <h6 className="mb-3">{f.title}</h6>
                  <ul className="rbt-list-style-1">
                    {f.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore & Stats */}
      <section className="rbt-section-gap bg-color-white">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-3">
              <h5 className="mb-3">Explore More</h5>
              <ul className="rbt-list-style-1">
                <li><a href="#">Dribbble</a></li>
                <li><a href="#">Behance</a></li>
              </ul>
            </div>
            {stats.map((s, i) => (
              <div className="col-md-3 text-center" key={i}>
                <h2 className="mb-0">{s.value}</h2>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Hiring Process */}
      <section className="rbt-section-gap bg-color-white">
        <div className="container">
          <h4 className="title text-center mb--40">4-Step Hiring Process</h4>
          <div className="row g-4">
            {quickSteps.map((qs, i) => (
              <div className="col-md-3 text-center" key={i}>
                <div className="radius-10 bg-color-light d-inline-block p-4 mb-3">{qs.step}</div>
                <h6>{qs.title}</h6>
                <p>{qs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterOne />
    </>
  );
};

export default Hireteam;
