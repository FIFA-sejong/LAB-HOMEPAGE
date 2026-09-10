
const D = FIFA_DATA;
const qs = (s, el=document) => el.querySelector(s);
const qsa = (s, el=document) => [...el.querySelectorAll(s)];

function rootPath() {
  return document.body.dataset.root || ".";
}
function pathTo(p="") {
  const root = rootPath();
  if (!p) return root + "/";
  return `${root}/${p}`;
}
function initials(name) {
  return name.split(/\s+/).filter(Boolean).map(x => x[0]).join("").slice(0,2).toUpperCase();
}
function emailLink(email) {
  return `mailto:${email}`;
}

function renderHeader() {
  const mount = qs("#site-header");
  if (!mount) return;
  const page = document.body.dataset.page || "home";
  const r = rootPath();

  const active = key => page === key ? "active" : "";
  mount.innerHTML = `
    <header class="site-header">
      <div class="container nav-shell">
        <a class="brand" href="${r}/">
          <span class="brand-mark">FI</span>
          <span class="brand-text">
            <strong>${D.lab.shortName}</strong>
            <small>${D.lab.fullName}</small>
          </span>
        </a>

        <button class="mobile-menu-btn" aria-label="Open menu" aria-expanded="false">☰</button>

        <nav class="site-nav">
          <a class="${active("home")}" href="${r}/">Home</a>
          <a class="${active("research")}" href="${r}/research/">Research</a>

          <div class="nav-item">
            <span class="nav-dropdown-label">People ▾</span>
            <div class="nav-dropdown">
              <a class="${active("professor")}" href="${r}/professor/">Professor</a>
              <a class="${active("members")}" href="${r}/members/">Members</a>
            </div>
          </div>

          <a class="${active("projects")}" href="${r}/projects/">Projects</a>
          <a class="${active("publications")}" href="${r}/publications/">Publications</a>
          <a class="${active("news")}" href="${r}/news/">News</a>
          <a class="${active("gallery")}" href="${r}/gallery/">Gallery</a>
          <a class="${active("contact")}" href="${r}/contact/">Contact</a>
        </nav>
      </div>
    </header>
  `;

  const btn = qs(".mobile-menu-btn");
  const nav = qs(".site-nav");
  btn?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

function renderFooter() {
  const mount = qs("#site-footer");
  if (!mount) return;
  mount.innerHTML = `
    <section class="contact-strip">
      <div class="container contact-grid">
        <div>
          <p class="section-kicker">CONTACT</p>
          <h2>Let’s build<br>intelligence together.</h2>
          <p>${D.lab.department}<br>${D.lab.university} · ${D.lab.labRoom}</p>
        </div>
        <div class="contact-links">
          <a class="contact-link" href="${emailLink(D.lab.email)}">Email ↗</a>
          <a class="contact-link" href="${D.lab.scholar}" target="_blank" rel="noreferrer">Google Scholar ↗</a>
          <a class="contact-link" href="${D.lab.github}" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
    <footer class="site-footer">
      <div class="container footer-inner">
        <strong>${D.lab.shortName} · ${D.lab.university}</strong>
        <span>© ${new Date().getFullYear()} ${D.lab.fullName}. All rights reserved.</span>
      </div>
    </footer>
  `;
}

function robotVisual() {
  return `
    <div class="robot-stage">
      <div class="robot-object"></div>
      <div class="robot-base"></div>
      <div class="robot-arm arm-1"></div>
      <div class="robot-arm arm-2"></div>
      <div class="joint j1"></div>
      <div class="joint j2"></div>
      <div class="joint j3"></div>
      <div class="scan-line"></div>
    </div>
  `;
}

function financeVisual() {
  const heights = [42, 58, 36, 67, 48, 75, 62, 88, 54, 78, 70, 94];
  return `
    <div class="finance-bars">
      ${heights.map(h => `<span class="finance-bar" style="height:${h}%"></span>`).join("")}
    </div>
    <span class="visual-label">FINANCIAL SIGNALS · DECISION INTELLIGENCE</span>
  `;
}

function forecastVisual() {
  return `
    <svg class="forecast-svg" viewBox="0 0 500 300" preserveAspectRatio="none" aria-hidden="true">
      <line class="axis" x1="0" y1="250" x2="500" y2="250"></line>
      <line class="axis" x1="0" y1="150" x2="500" y2="150"></line>
      <line class="axis" x1="0" y1="50" x2="500" y2="50"></line>
      <path class="band" d="M300,95 C350,72 400,120 500,60 L500,170 C420,145 365,160 300,140 Z"></path>
      <path class="history" d="M0,215 C35,190 55,220 88,175 S150,145 180,168 S230,90 265,126 S285,110 305,118"></path>
      <path class="future" d="M305,118 C340,83 370,122 405,95 S450,78 500,63"></path>
    </svg>
    <span class="visual-label">OBSERVED → FORECAST → DECISION</span>
  `;
}

function visualMarkup(type) {
  if (type === "finance") return financeVisual();
  if (type === "forecast") return forecastVisual();
  return robotVisual();
}

function renderHome() {
  const mount = qs("#home-content");
  if (!mount) return;
  const featured = D.currentProjects.find(p => p.featured) || D.currentProjects[0];

  mount.innerHTML = `
    <section class="hero">
      <div class="hero-track">
        ${D.heroSlides.map((s, i) => `
          <article class="hero-slide ${i===0 ? "active" : ""}">
            <div class="container hero-slide-inner">
              <div class="hero-copy">
                <p class="eyebrow">${s.eyebrow}</p>
                <h1>${s.title}</h1>
                <p>${s.text}</p>
                <a class="hero-link" href="${pathTo(s.link)}">${s.linkText} →</a>
              </div>
              <div class="hero-visual">${visualMarkup(s.visual)}</div>
            </div>
          </article>
        `).join("")}
        <div class="hero-dots">
          ${D.heroSlides.map((_, i) => `<button class="hero-dot ${i===0?"active":""}" aria-label="Slide ${i+1}" data-slide="${i}"></button>`).join("")}
        </div>
      </div>
    </section>

    <section class="section white">
      <div class="container">
        <p class="section-kicker">ABOUT FIFA LAB</p>
        <p class="big-lead">${D.about.lead}</p>
        <div class="about-body">
          <div class="meta">
            ${D.lab.fullName}<br>
            ${D.lab.university}
          </div>
          <p>${D.about.body}</p>
        </div>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="section-kicker">RESEARCH DIRECTIONS</p>
            <h2>What we study.</h2>
          </div>
          <p>Our core identity remains FinTech and forecasting analytics, while new projects expand our methods toward intelligent physical systems.</p>
        </div>
        <div class="research-grid">
          ${D.researchAreas.map(a => `
            <article class="research-card">
              <div class="research-top">
                <span class="research-number">${a.number}</span>
                <span class="status-badge ${a.status==="EMERGING"?"emerging":""}">${a.status}</span>
              </div>
              <h3>${a.title}</h3>
              <p>${a.description}</p>
              <div class="tags">${a.topics.map(t => `<span class="tag">${t}</span>`).join("")}</div>
            </article>
          `).join("")}
        </div>
        <a class="text-link" href="${pathTo("research/")}">View all research →</a>
      </div>
    </section>

    <section class="section white">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="section-kicker">FEATURED PROJECT</p>
            <h2>New frontier.</h2>
          </div>
          <p>FIFA Lab is extending its decision-intelligence expertise into on-device AI and collaborative robotics.</p>
        </div>

        <div class="feature-project">
          <div class="project-visual">${robotVisual()}</div>
          <div class="feature-content">
            <span class="kicker">${featured.category}</span>
            <h3>${featured.title}</h3>
            <p>${featured.description}</p>
            <span class="partner">${featured.partner}</span>
            <div class="tags">${featured.topics.map(t => `<span class="tag">${t}</span>`).join("")}</div>
            <a class="hero-link" href="${pathTo("projects/")}">View projects →</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="section-kicker">LATEST NEWS</p>
            <h2>What’s happening.</h2>
          </div>
          <p>Publications, conference news, new projects, and lab updates.</p>
        </div>
        <div class="news-preview">
          ${D.news.slice(0,3).map(n => newsRow(n)).join("")}
        </div>
        <a class="text-link" href="${pathTo("news/")}">View all news →</a>
      </div>
    </section>
  `;

  setupSlider();
}

function newsRow(n) {
  return `
    <article class="news-row">
      <div class="date">${n.date}</div>
      <div class="category">${n.category}</div>
      <div>
        <h3>${n.title}</h3>
        <p>${n.text}</p>
      </div>
      <span class="arrow">→</span>
    </article>
  `;
}

function setupSlider() {
  const slides = qsa(".hero-slide");
  const dots = qsa(".hero-dot");
  if (!slides.length) return;
  let current = 0;
  let timer;

  const show = i => {
    current = i;
    slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
    dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
  };
  const auto = () => {
    clearInterval(timer);
    timer = setInterval(() => show((current + 1) % slides.length), 6500);
  };
  dots.forEach((d, i) => d.addEventListener("click", () => { show(i); auto(); }));
  auto();
}

function renderResearch() {
  const mount = qs("#research-list");
  if (!mount) return;
  mount.innerHTML = D.researchAreas.map(a => `
    <article class="area-detail">
      <div class="area-number">${a.number}</div>
      <div>
        <span class="status-badge ${a.status==="EMERGING"?"emerging":""}">${a.status}</span>
        <h2 style="margin-top:14px">${a.title}</h2>
      </div>
      <div class="area-copy">
        <p class="description">${a.description}</p>
        <div class="topic-list">
          ${a.topics.map(t => `<div class="topic-item">${t}</div>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderProfessor() {
  const mount = qs("#professor-content");
  if (!mount) return;
  const p = D.professor;
  const photo = p.image
    ? `<img src="${pathTo(p.image)}" alt="${p.name}">`
    : `<span class="initials">${initials(p.name)}</span>`;

  mount.innerHTML = `
    <section class="section white">
      <div class="container profile-grid">
        <div class="profile-photo">${photo}</div>
        <div>
          <p class="section-kicker">PRINCIPAL INVESTIGATOR</p>
          <h2 class="profile-name">${p.name}</h2>
          <div class="profile-role">${p.koreanName} · ${p.title}</div>
          <p class="profile-bio">${p.bio}</p>

          <div class="profile-meta">
            <div class="meta-row"><small>Affiliation</small><span>${p.affiliation}</span></div>
            <div class="meta-row"><small>Office</small><span>${p.office}</span></div>
            <div class="meta-row"><small>Email</small><a href="mailto:${p.email}">${p.email}</a></div>
            <div class="meta-row"><small>Phone</small><span>${p.phone}</span></div>
            <div class="meta-row"><small>Google Scholar</small><a href="${D.lab.scholar}" target="_blank">Open profile ↗</a></div>
            <div class="meta-row"><small>GitHub</small><a href="${D.lab.github}" target="_blank">FIFA Lab GitHub ↗</a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section soft">
      <div class="container content-columns">
        <div class="content-block">
          <p class="section-kicker">RESEARCH INTERESTS</p>
          <h3>Research Interests</h3>
          <div class="tags">${p.interests.map(x => `<span class="tag">${x}</span>`).join("")}</div>
        </div>
        <div class="content-block">
          <p class="section-kicker">TEACHING</p>
          <h3>Selected Courses</h3>
          <div class="timeline">
            ${p.teaching.map(x => `<div class="timeline-item"><div class="period">COURSE</div><div><strong>${x}</strong></div></div>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section white">
      <div class="container content-columns">
        <div class="content-block">
          <p class="section-kicker">EXPERIENCE</p>
          <h3>Academic Positions</h3>
          <div class="timeline">
            ${p.positions.map(x => `
              <div class="timeline-item">
                <div class="period">${x.period}</div>
                <div><strong>${x.position}</strong><p>${x.institution}</p></div>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="content-block">
          <p class="section-kicker">EDUCATION</p>
          <h3>Education</h3>
          <div class="timeline">
            ${p.education.map(x => `
              <div class="timeline-item">
                <div class="period">${x.year}</div>
                <div><strong>${x.degree}</strong><p>${x.school}</p></div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderMembers() {
  const mount = qs("#members-grid");
  if (!mount) return;
  mount.innerHTML = D.members.map(m => {
    const photo = m.image
      ? `<img src="${pathTo(m.image)}" alt="${m.name}">`
      : `<span class="initials" style="font-size:2.8rem">${initials(m.name)}</span>`;
    return `
      <article class="member-card">
        <div class="member-photo">${photo}</div>
        <div class="member-info">
          <h3>${m.name}</h3>
          <div class="role">${m.role} · ${m.since}</div>
          <p>${m.education}</p>
          <div class="tags">${m.research.map(x => `<span class="tag">${x}</span>`).join("")}</div>
          <p><a href="mailto:${m.email}">${m.email}</a></p>
        </div>
      </article>
    `;
  }).join("");

  const alumni = qs("#alumni-list");
  if (alumni) {
    alumni.innerHTML = D.alumni.length
      ? D.alumni.map(a => `<div class="timeline-item"><div class="period">${a.degree}</div><div><strong>${a.name}</strong><p>${a.next}</p></div></div>`).join("")
      : `<div class="empty-note">Alumni information can be added in <strong>assets/js/data.js</strong>.</div>`;
  }
}

function renderProjects() {
  const mount = qs("#projects-list");
  if (!mount) return;
  mount.innerHTML = D.currentProjects.map(p => `
    <article class="project-card ${p.featured ? "featured" : ""}">
      <div class="project-side">
        <div class="category">${p.category}</div>
        <div class="period">${p.period}</div>
      </div>
      <div>
        <h2>${p.title}</h2>
        ${p.partner ? `<div class="partner">${p.partner}</div>` : ""}
        <p class="desc">${p.description}</p>
        <div class="tags">${p.topics.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
}

function renderPublications() {
  const mount = qs("#publication-list");
  const toolbar = qs("#pub-toolbar");
  if (!mount || !toolbar) return;

  const years = ["All", ...new Set(D.publications.map(p => p.year))];
  toolbar.innerHTML = years.map((y, i) => `<button class="filter-btn ${i===0?"active":""}" data-year="${y}">${y}</button>`).join("");

  const draw = year => {
    const items = year === "All" ? D.publications : D.publications.filter(p => p.year === year);
    mount.innerHTML = items.map(p => `
      <article class="pub-item">
        <div class="pub-year">${p.year}</div>
        <div>
          <h3>${p.url ? `<a href="${p.url}" target="_blank">${p.title}</a>` : p.title}</h3>
          <p>${p.authors}</p>
          <p><strong>${p.venue}</strong></p>
        </div>
        <div class="pub-type">${p.type}</div>
      </article>
    `).join("");
  };

  toolbar.addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    qsa(".filter-btn", toolbar).forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    draw(btn.dataset.year);
  });
  draw("All");

  const working = qs("#working-papers");
  if (working) {
    working.innerHTML = D.workingPapers.map(p => `
      <div class="timeline-item">
        <div class="period">${p.status}</div>
        <div><strong>${p.title}</strong><p>${p.topic}</p></div>
      </div>
    `).join("");
  }
}

function renderNews() {
  const mount = qs("#news-list");
  if (!mount) return;
  mount.innerHTML = D.news.map(n => newsRow(n)).join("");
}

function renderGallery() {
  const mount = qs("#gallery-grid");
  if (!mount) return;
  if (!D.gallery.length) {
    mount.innerHTML = `
      ${["gallery-01.jpg","gallery-02.jpg","gallery-03.jpg"].map((name, i) => `
        <article class="gallery-card">
          <div class="gallery-placeholder">
            <div>
              <strong>Gallery Photo ${i+1}</strong><br>
              <span>Put ${name} in assets/images<br>and add it in data.js</span>
            </div>
          </div>
          <div class="gallery-caption">
            <strong>FIFA Lab</strong>
            <span>Seminar · Conference · Lab Activity</span>
          </div>
        </article>
      `).join("")}
    `;
    return;
  }
  mount.innerHTML = D.gallery.map(g => `
    <article class="gallery-card">
      <img class="gallery-image" src="${pathTo(g.image)}" alt="${g.title}">
      <div class="gallery-caption">
        <strong>${g.title}</strong>
        <span>${g.date}${g.caption ? ` · ${g.caption}` : ""}</span>
      </div>
    </article>
  `).join("");
}

function renderContact() {
  const mount = qs("#contact-content");
  if (!mount) return;
  mount.innerHTML = `
    <section class="section white">
      <div class="container contact-page-grid">
        <div class="contact-card">
          <p class="section-kicker">CONTACT</p>
          <h3>${D.lab.shortName}</h3>
          <p>${D.lab.fullName}<br>${D.lab.department}<br>${D.lab.university}</p>
          <div class="contact-detail"><small>LAB</small><strong>${D.lab.labRoom}</strong></div>
          <div class="contact-detail"><small>ADDRESS</small><strong>${D.lab.address}</strong></div>
          <div class="contact-detail"><small>EMAIL</small><a href="mailto:${D.lab.email}">${D.lab.email}</a></div>
          <div class="contact-detail"><small>PHONE</small><strong>${D.lab.phone}</strong></div>
          <div class="contact-detail"><small>GOOGLE SCHOLAR</small><a href="${D.lab.scholar}" target="_blank">Open profile ↗</a></div>
          <div class="contact-detail"><small>GITHUB</small><a href="${D.lab.github}" target="_blank">${D.lab.github} ↗</a></div>
        </div>

        <div class="join-box">
          <p class="section-kicker" style="color:#86b1ff">JOIN FIFA LAB</p>
          <h2>${D.join.lead}</h2>
          <p>${D.join.text}</p>
          <ul>${D.join.notes.map(n => `<li>${n}</li>`).join("")}</ul>
          <a class="hero-link" href="mailto:${D.lab.email}">Contact Prof. Lee →</a>
        </div>
      </div>
    </section>
  `;
}

function renderPageTitle() {
  const el = qs("[data-page-title]");
  if (!el) return;
  const title = el.dataset.pageTitle;
  const kicker = el.dataset.kicker || "FIFA LAB";
  const desc = el.dataset.description || "";
  el.innerHTML = `
    <div class="container page-title">
      <p class="section-kicker">${kicker}</p>
      <h1>${title}</h1>
      ${desc ? `<p>${desc}</p>` : ""}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderPageTitle();
  renderHome();
  renderResearch();
  renderProfessor();
  renderMembers();
  renderProjects();
  renderPublications();
  renderNews();
  renderGallery();
  renderContact();
  renderFooter();
});
