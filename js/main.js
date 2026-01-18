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
    case 'project-detail':
      renderProjectDetailPage();
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
    <a href="project-${project.id}.html" class="project-card-link">
      <article class="project-card">
        <div class="project-cover">
          ${project.coverImage 
            ? `<img src="${project.coverImage}" alt="${project.title}">`
            : `<div class="project-cover-placeholder">Project Image</div>`
          }
        </div>
        <div class="project-card-content">
          <div class="project-header">
            <h3>${project.title}</h3>
            <span class="project-status ${project.status.toLowerCase()}">${project.status}</span>
          </div>
          <p>${project.shortDescription}</p>
          <span class="project-link-text">View Project →</span>
        </div>
      </article>
    </a>
  `).join('');
}

/* ----- PROJECT DETAIL PAGE ----- */
function renderProjectDetailPage() {
  // Get project ID from URL
  const path = window.location.pathname;
  const filename = path.split('/').pop();
  const match = filename.match(/^project-(.+)\.html$/);
  
  if (!match || !CONFIG.projects) return;
  
  const projectId = match[1];
  const project = CONFIG.projects.find(p => p.id === projectId);
  
  if (!project) {
    document.getElementById('project-content').innerHTML = '<p>Project not found.</p>';
    return;
  }
  
  // Update page title
  document.title = `${project.title} | ${CONFIG.name}`;
  
  // Render project header
  const headerEl = document.getElementById('project-header');
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="project-detail-header">
        <div>
          <h1>${project.title}</h1>
          <span class="project-status ${project.status.toLowerCase()}">${project.status}</span>
        </div>
        ${project.externalLink ? `
          <a href="${project.externalLink}" class="btn btn-primary" target="_blank" rel="noopener">
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Visit Project
          </a>
        ` : ''}
      </div>
    `;
  }
  
  // Render gallery
  const galleryEl = document.getElementById('project-gallery');
  if (galleryEl && project.gallery && project.gallery.length > 0) {
    galleryEl.innerHTML = `
      <div class="project-gallery">
        ${project.gallery.map((img, index) => `
          <div class="gallery-item ${index === 0 ? 'gallery-item-large' : ''}">
            <img src="${img}" alt="${project.title} - Image ${index + 1}">
          </div>
        `).join('')}
      </div>
    `;
  } else if (galleryEl) {
    galleryEl.innerHTML = `
      <div class="project-gallery">
        <div class="gallery-item gallery-item-large">
          <div class="gallery-placeholder">Project images will appear here</div>
        </div>
      </div>
    `;
  }
  
  // Render description
  const descEl = document.getElementById('project-description');
  if (descEl && project.fullDescription) {
    descEl.innerHTML = project.fullDescription.map(p => `<p>${p}</p>`).join('');
  }
  
  // Render related publications
  const pubsEl = document.getElementById('project-publications');
  if (pubsEl && project.relatedPublications && project.relatedPublications.length > 0) {
    const relatedPubs = project.relatedPublications
      .map(title => CONFIG.publications.find(p => p.title === title))
      .filter(Boolean);
    
    if (relatedPubs.length > 0) {
      pubsEl.innerHTML = `
        <h2>Related Publications</h2>
        <ul class="related-list">
          ${relatedPubs.map(pub => `
            <li>
              <a href="publications.html#pub-${pub.id}">
                <span class="related-title">${pub.title}</span>
                <span class="related-meta">${pub.type} · ${pub.year}</span>
              </a>
            </li>
          `).join('')}
        </ul>
      `;
    } else {
      pubsEl.innerHTML = '';
    }
  } else if (pubsEl) {
    pubsEl.innerHTML = '';
  }
  
  // Render related press
  const pressEl = document.getElementById('project-press');
  if (pressEl && project.relatedPress && project.relatedPress.length > 0) {
    const relatedPress = project.relatedPress
      .map(title => CONFIG.press.find(p => p.title === title))
      .filter(Boolean);
    
    if (relatedPress.length > 0) {
      pressEl.innerHTML = `
        <h2>Press Coverage</h2>
        <ul class="related-list">
          ${relatedPress.map(item => `
            <li>
              <a href="press.html#press-${item.id}">
                <span class="related-title">${item.title}</span>
                <span class="related-meta">${item.outlet} · ${item.date}</span>
              </a>
            </li>
          `).join('')}
        </ul>
      `;
    } else {
      pressEl.innerHTML = '';
    }
  } else if (pressEl) {
    pressEl.innerHTML = '';
  }
}

/* ----- PUBLICATIONS PAGE ----- */
function renderPublicationsPage() {
  const filtersEl = document.getElementById('publication-filters');
  const countEl = document.getElementById('publication-count');
  const list = document.getElementById('publications-list');
  
  if (!list || !CONFIG.publications) return;
  
  // Handle hash navigation (for links from project pages)
  if (window.location.hash) {
    setTimeout(() => {
      const targetEl = document.querySelector(window.location.hash);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetEl.classList.add('highlight');
        setTimeout(() => targetEl.classList.remove('highlight'), 2000);
      }
    }, 100);
  }
  
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
    const hasLink = pub.link && pub.link.trim() !== '';
    const hasDownload = pub.downloadFile && pub.downloadFile.trim() !== '';
    
    return `
      <article class="publication-item" id="pub-${pub.id}" data-category="${categoryId}">
        <div class="publication-year">${pub.year}</div>
        <div class="publication-content">
          <h3>${pub.title}</h3>
          <div class="publication-meta">
            <span class="publication-type">${pub.type}</span>
            <span class="publication-publisher">${pub.publisher}</span>
          </div>
          <p class="publication-description">${pub.description}</p>
          ${(hasLink || hasDownload) ? `
            <div class="publication-actions">
              ${hasLink ? `
                <a href="${pub.link}" class="btn-small btn-small-primary" target="_blank" rel="noopener">
                  <svg class="btn-small-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  View
                </a>
              ` : ''}
              ${hasDownload ? `
                <a href="${pub.downloadFile}" class="btn-small btn-small-secondary" download>
                  <svg class="btn-small-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download
                </a>
              ` : ''}
            </div>
          ` : ''}
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
  
  // Handle hash navigation (for links from project pages)
  if (window.location.hash) {
    setTimeout(() => {
      const targetEl = document.querySelector(window.location.hash);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetEl.classList.add('highlight');
        setTimeout(() => targetEl.classList.remove('highlight'), 2000);
      }
    }, 100);
  }
  
  list.innerHTML = CONFIG.press.map(item => `
    <article class="press-item" id="press-${item.id}">
      <div>
        <div class="press-outlet">${item.outlet}</div>
        <div class="press-title">${item.link ? `<a href="${item.link}" target="_blank" rel="noopener">${item.title}</a>` : item.title}</div>
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
