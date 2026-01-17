/* =====================================================
   GITHUB PAGES SITE - MAIN JAVASCRIPT
   Handles navigation, dynamic content rendering, and interactions
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initMobileNav();
  setActiveNavLink();
  renderDynamicContent();
});

/* ----- NAVIGATION ----- */
function initNavigation() {
  const nav = document.querySelector('.main-nav');
  if (!nav || typeof CONFIG === 'undefined') return;
  
  // Clear existing links (except those you want to keep)
  nav.innerHTML = '';
  
  // Build navigation from config
  CONFIG.navigation.forEach(item => {
    if (item.enabled) {
      const link = document.createElement('a');
      link.href = item.href;
      link.className = 'nav-link';
      link.textContent = item.name;
      nav.appendChild(link);
    }
  });
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  
  if (!toggle || !nav) return;
  
  toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
  });
  
  // Close nav when clicking a link
  nav.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link')) {
      toggle.classList.remove('active');
      nav.classList.remove('active');
    }
  });
  
  // Close nav when clicking outside
  document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      toggle.classList.remove('active');
      nav.classList.remove('active');
    }
  });
}

/* ----- DYNAMIC CONTENT RENDERING ----- */
function renderDynamicContent() {
  if (typeof CONFIG === 'undefined') return;
  
  // Update site name in header
  const siteLogoText = document.querySelector('.site-logo-text');
  if (siteLogoText) {
    siteLogoText.textContent = CONFIG.name;
  }
  
  // Update footer
  renderFooter();
  
  // Page-specific rendering
  const page = document.body.dataset.page;
  
  switch(page) {
    case 'about':
      renderAboutPage();
      break;
    case 'pillars':
      renderPillarsPage();
      break;
    case 'cv':
      renderCVPage();
      break;
    case 'speaking':
      renderSpeakingPage();
      break;
    case 'projects':
      renderProjectsPage();
      break;
    case 'publications':
      renderPublicationsPage();
      break;
    case 'press':
      renderPressPage();
      break;
    case 'toolkit':
      renderToolkitPage();
      break;
  }
}

/* ----- ABOUT PAGE ----- */
function renderAboutPage() {
  // Name and title
  const nameEl = document.getElementById('about-name');
  const titleEl = document.getElementById('about-title');
  const introEl = document.getElementById('about-intro');
  const bioEl = document.getElementById('about-bio');
  const imageEl = document.getElementById('about-image');
  
  if (nameEl) nameEl.textContent = CONFIG.name;
  if (titleEl) titleEl.textContent = CONFIG.title;
  if (introEl) introEl.textContent = CONFIG.about.intro;
  
  if (bioEl && CONFIG.about.bio) {
    bioEl.innerHTML = CONFIG.about.bio.map(p => `<p>${p}</p>`).join('');
  }
  
  if (imageEl && CONFIG.about.image) {
    imageEl.innerHTML = `<img src="${CONFIG.about.image}" alt="${CONFIG.name}">`;
  }
  
  // Contact info
  renderContactInfo();
}

function renderContactInfo() {
  const contactList = document.getElementById('contact-list');
  if (!contactList || !CONFIG.contact) return;
  
  const icons = {
    email: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
    twitter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>',
    location: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
  };
  
  let html = '';
  
  Object.entries(CONFIG.contact).forEach(([key, value]) => {
    if (!value) return;
    
    const icon = icons[key] || icons.location;
    let linkHtml = '';
    
    if (key === 'email') {
      linkHtml = `<a href="mailto:${value}" class="contact-link">${value}</a>`;
    } else if (key === 'linkedin' || key === 'twitter') {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      linkHtml = `<a href="${value}" class="contact-link" target="_blank" rel="noopener">${label}</a>`;
    } else if (key === 'location') {
      linkHtml = `<span class="contact-link">${value}</span>`;
    } else {
      linkHtml = `<a href="${value}" class="contact-link" target="_blank" rel="noopener">${value}</a>`;
    }
    
    html += `<li class="contact-item">${icon}${linkHtml}</li>`;
  });
  
  contactList.innerHTML = html;
}

/* ----- PILLARS PAGE ----- */
function renderPillarsPage() {
  const grid = document.getElementById('pillars-grid');
  if (!grid || !CONFIG.pillars) return;
  
  grid.innerHTML = CONFIG.pillars.map(pillar => `
    <div class="pillar-card">
      <span class="pillar-icon">${pillar.icon}</span>
      <h3>${pillar.title}</h3>
      <p>${pillar.description}</p>
    </div>
  `).join('');
}

/* ----- CV PAGE ----- */
function renderCVPage() {
  const summaryEl = document.getElementById('cv-summary');
  const downloadBtn = document.getElementById('cv-download');
  const sectionsEl = document.getElementById('cv-sections');
  
  if (summaryEl) summaryEl.textContent = CONFIG.cv.summary;
  if (downloadBtn) downloadBtn.href = CONFIG.cv.downloadFile;
  
  if (sectionsEl && CONFIG.cv.sections) {
    sectionsEl.innerHTML = CONFIG.cv.sections.map(section => `
      <section class="cv-section">
        <h2>${section.title}</h2>
        ${section.items.map(item => `
          <div class="cv-item">
            <div>
              <div class="cv-role">${item.role}</div>
              <div class="cv-org">${item.organization}</div>
            </div>
            <div class="cv-period">${item.period}</div>
            <div class="cv-description">${item.description}</div>
          </div>
        `).join('')}
      </section>
    `).join('');
  }
}

/* ----- SPEAKING PAGE ----- */
function renderSpeakingPage() {
  const introEl = document.getElementById('speaking-intro');
  const topicsEl = document.getElementById('topics-grid');
  const engagementsEl = document.getElementById('engagements-list');
  const bookingEl = document.getElementById('booking-note');
  
  if (introEl) introEl.textContent = CONFIG.speaking.intro;
  
  if (topicsEl && CONFIG.speaking.topics) {
    topicsEl.innerHTML = CONFIG.speaking.topics.map(topic => `
      <div class="topic-card">
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
      </div>
    `).join('');
  }
  
  if (engagementsEl && CONFIG.speaking.pastEngagements) {
    engagementsEl.innerHTML = CONFIG.speaking.pastEngagements.map(eng => `
      <div class="engagement-item">
        <div class="engagement-event">${eng.event}</div>
        <span class="engagement-type">${eng.type}</span>
        <div class="engagement-meta">
          <div>${eng.date}</div>
          <div>${eng.location}</div>
        </div>
      </div>
    `).join('');
  }
  
  if (bookingEl) bookingEl.textContent = CONFIG.speaking.bookingNote;
}

/* ----- PROJECTS PAGE ----- */
function renderProjectsPage() {
  const grid = document.getElementById('projects-grid');
  if (!grid || !CONFIG.projects) return;
  
  grid.innerHTML = CONFIG.projects.map(project => `
    <div class="project-card">
      <div class="project-header">
        <h3>${project.title}</h3>
        <span class="project-status ${project.status.toLowerCase()}">${project.status}</span>
      </div>
      <p>${project.description}</p>
      ${project.link ? `<a href="${project.link}" class="project-link">${project.linkText || 'Learn More'}</a>` : ''}
    </div>
  `).join('');
}

/* ----- PUBLICATIONS PAGE ----- */
function renderPublicationsPage() {
  const filtersEl = document.getElementById('publication-filters');
  const countEl = document.getElementById('publication-count');
  const list = document.getElementById('publications-list');
  
  if (!list || !CONFIG.publications) return;
  
  // Calculate counts per category
  const counts = { all: CONFIG.publications.length };
  CONFIG.publications.forEach(pub => {
    const categoryId = pub.type.toLowerCase().replace(/\s+/g, '-');
    counts[categoryId] = (counts[categoryId] || 0) + 1;
  });
  
  // Render filter buttons
  if (filtersEl && CONFIG.publicationCategories) {
    filtersEl.innerHTML = CONFIG.publicationCategories.map(cat => {
      const count = counts[cat.id] || 0;
      // Only show categories that have publications (or "All")
      if (cat.id === 'all' || count > 0) {
        return `
          <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" data-filter="${cat.id}">
            ${cat.label}<span class="count">${count}</span>
          </button>
        `;
      }
      return '';
    }).join('');
    
    // Add filter event listeners
    filtersEl.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => handlePublicationFilter(btn.dataset.filter));
    });
  }
  
  // Render publications
  list.innerHTML = CONFIG.publications.map(pub => {
    const categoryId = pub.type.toLowerCase().replace(/\s+/g, '-');
    return `
      <article class="publication-item" data-category="${categoryId}">
        <div class="publication-year">${pub.year}</div>
        <div class="publication-content">
          <h3>${pub.link ? `<a href="${pub.link}">${pub.title}</a>` : pub.title}</h3>
          <div class="publication-meta">
            <span class="publication-type">${pub.type}</span>
            <span class="publication-publisher">${pub.publisher}</span>
          </div>
          <p class="publication-description">${pub.description}</p>
        </div>
      </article>
    `;
  }).join('');
  
  // Update count text
  updatePublicationCount('all');
}

function handlePublicationFilter(filter) {
  const filtersEl = document.getElementById('publication-filters');
  const list = document.getElementById('publications-list');
  
  // Update active button
  filtersEl.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  
  // Filter publications
  const items = list.querySelectorAll('.publication-item');
  let visibleCount = 0;
  
  items.forEach((item, index) => {
    const category = item.dataset.category;
    const shouldShow = filter === 'all' || category === filter;
    
    if (shouldShow) {
      item.classList.remove('hidden');
      item.classList.add('fade-in');
      // Stagger animation
      item.style.animationDelay = `${visibleCount * 0.05}s`;
      visibleCount++;
    } else {
      item.classList.add('hidden');
      item.classList.remove('fade-in');
    }
  });
  
  // Update count
  updatePublicationCount(filter, visibleCount);
}

function updatePublicationCount(filter, count) {
  const countEl = document.getElementById('publication-count');
  if (!countEl) return;
  
  if (count === undefined) {
    count = CONFIG.publications.length;
  }
  
  const label = filter === 'all' ? 'all publications' : 
    CONFIG.publicationCategories.find(c => c.id === filter)?.label.toLowerCase() + 's';
  
  countEl.textContent = `Showing ${count} ${count === 1 ? 'publication' : 'publications'}${filter !== 'all' ? ` in ${label}` : ''}`;
}

/* ----- PRESS PAGE ----- */
function renderPressPage() {
  const list = document.getElementById('press-list');
  if (!list || !CONFIG.press) return;
  
  list.innerHTML = CONFIG.press.map(item => `
    <article class="press-item">
      <div>
        <div class="press-outlet">${item.outlet}</div>
        <div class="press-title">${item.link ? `<a href="${item.link}">${item.title}</a>` : item.title}</div>
      </div>
      <div class="press-meta">
        <span class="press-type">${item.type}</span>
        <span class="press-date">${item.date}</span>
      </div>
    </article>
  `).join('');
}

/* ----- TOOLKIT PAGE ----- */
function renderToolkitPage() {
  const titleEl = document.getElementById('toolkit-title');
  const subtitleEl = document.getElementById('toolkit-subtitle');
  const descEl = document.getElementById('toolkit-description');
  const downloadBtn = document.getElementById('toolkit-download');
  const contentsEl = document.getElementById('toolkit-contents-list');
  const licenseEl = document.getElementById('toolkit-license');
  
  if (titleEl) titleEl.textContent = CONFIG.toolkit.title;
  if (subtitleEl) subtitleEl.textContent = CONFIG.toolkit.subtitle;
  if (descEl) descEl.textContent = CONFIG.toolkit.description;
  if (downloadBtn) downloadBtn.href = CONFIG.toolkit.downloadFile;
  
  if (contentsEl && CONFIG.toolkit.contents) {
    contentsEl.innerHTML = CONFIG.toolkit.contents.map(item => `<li>${item}</li>`).join('');
  }
  
  if (licenseEl) licenseEl.textContent = CONFIG.toolkit.license;
}

/* ----- FOOTER ----- */
function renderFooter() {
  const messageEl = document.querySelector('.footer-message');
  const copyrightEl = document.querySelector('.footer-copyright');
  
  if (messageEl && CONFIG.footer) {
    messageEl.textContent = CONFIG.footer.message;
  }
  
  if (copyrightEl && CONFIG.footer) {
    copyrightEl.textContent = CONFIG.footer.copyright;
  }
}
