/**
   * Main Application Controller - Abishek A
   * Implements full dynamic configuration rendering, responsive navigation, custom cursors,
   * keyword typewriter loops, state controllers, SVG system visualizers, and contact routing.
   */

  document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial State Check
    if (typeof PortfolioConfig === "undefined") {
      console.error("PortfolioConfig is missing! Make sure portfolio-config.js is loaded first.");
      return;
    }
    
    const config = PortfolioConfig;
  
    // 2. Dynamic DOM Binding & Render Engine
    renderPortfolio(config);
  
    // 3. Bespoke Typing Rotation
    initTypewriter();
  
    // 4. Floating Header Scroll Listener
    initScrollHeader();
  
    // 5. Custom Glowing Mouse Trailing
    initCustomCursor();
  
    // 6. Navigation Link Intersection Observer
    initActiveNavObserver();
  
    // 7. Interactive UI/UX Playground Toggles
    initPlaygroundSandbox();
  
    // 8. Experience Timeline Bullets Expandable Interaction
    initTimelineTriggers();
  
    // 9. Case Study Modal Overlay & Dynamic SVG Node Graphs
    initProjectModals(config);
  
    // 10. Form Submission Mock CRM
    initContactForm();
  
    // 11. Persistent Theme Toggle
    initThemeManager();
  
    // 12. Programmatic Resume Download Flows
    initResumeDownload(config);

    // 13. Dynamic SVG Fluid Wave Mesh
    initFluidWaves();

    // 14. Interactive Developer Console Card
    initInteractiveTerminal(config);
  });
  
  /* ==========================================================================
     DOM BINDING ENGINE
     ========================================================================== */
  function renderPortfolio(config) {
    // Bind profile text
    const bioContainer = document.getElementById("aboutBio");
    if (bioContainer) {
      bioContainer.innerHTML = config.profile.bio.map(p => `<p>${p}</p>`).join("");
    }
  
    const highlightsContainer = document.getElementById("aboutHighlights");
    if (highlightsContainer) {
      highlightsContainer.innerHTML = config.profile.highlights.map(h => `<li>${h}</li>`).join("");
    }
  
    // Render Education
    const eduTimeline = document.getElementById("aboutEdu");
    if (eduTimeline) {
      eduTimeline.innerHTML = config.education.map(edu => `
        <div class="edu-item">
          <div class="edu-header">
            <span class="edu-inst">${edu.institution}</span>
            <span class="edu-period">${edu.period}</span>
          </div>
          <div class="edu-deg">${edu.degree}</div>
          <div class="edu-details">${edu.details}</div>
        </div>
      `).join("");
    }
  
    // Render Language Badges
    const langContainer = document.getElementById("languagesContainer");
    if (langContainer) {
      langContainer.innerHTML = config.skills.languages.map(lang => `
        <div class="lang-badge">
          <i class="fa-solid fa-comments accent-teal"></i>
          <span>${lang.name}</span>
          <span class="lang-proficiency">${lang.proficiency}</span>
        </div>
      `).join("");
    }
  
    // Bind Contact Card details
    const emailLink = document.getElementById("configEmail");
    if (emailLink) {
      emailLink.href = `mailto:${config.profile.email}`;
      emailLink.textContent = config.profile.email;
    }
    const phoneLink = document.getElementById("configPhone");
    if (phoneLink) {
      phoneLink.href = `tel:${config.profile.phone.replace(/\s+/g, '')}`;
      phoneLink.textContent = config.profile.phone;
    }
    const locText = document.getElementById("configLocation");
    if (locText) {
      locText.textContent = config.profile.location;
    }
  
    // Initial Render of Skills (UI/UX Default)
    renderSkillsCategory(config, "design");
    initSkillTabs(config);
  
    // Render Experience Timeline
    const expTimeline = document.getElementById("experienceTimeline");
    if (expTimeline) {
      expTimeline.innerHTML = config.experience.map((exp, idx) => `
        <div class="timeline-node-card">
          <div class="timeline-dot-anchor"></div>
          <div class="timeline-card-inner card frosted-glass">
            <div class="timeline-header">
              <div class="timeline-role-info">
                <h3>${exp.role}</h3>
                <div class="timeline-company">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>${exp.company}</span>
                </div>
              </div>
              <div class="timeline-meta-info">
                <span class="timeline-date-badge">${exp.period}</span>
                <span class="timeline-loc">${exp.location}</span>
              </div>
            </div>
            <ul class="timeline-content-bullets">
              ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
            </ul>
            <div class="tag-capsule-row">
              ${exp.tags.map(t => `<span class="tag-capsule">${t}</span>`).join("")}
            </div>
          </div>
        </div>
      `).join("");
    }
  
    // Render Featured Engineering Projects
    const projectsGrid = document.getElementById("projectsGrid");
    if (projectsGrid) {
      projectsGrid.innerHTML = config.projects.map(proj => {
        // Tag styles
        let styleClass = "pc-mummysss";
        if (proj.id === "medisync") styleClass = "pc-medisync";
        if (proj.id === "campusbus") styleClass = "pc-campusbus";
        if (proj.id === "fleetmanagement") styleClass = "pc-fleetmanagement";
        if (proj.id === "artryon") styleClass = "pc-artryon";
  
        // Live link button if present
        let liveBtnHtml = "";
        if (proj.liveDemo) {
          const isFigma = proj.liveDemo.includes("figma.com");
          const iconClass = isFigma ? "fa-brands fa-figma" : "fa-solid fa-arrow-up-right-from-square";
          const titleText = isFigma ? "View Figma Workspace Design" : "View Live Deployment";
          liveBtnHtml = `<a href="${proj.liveDemo}" target="_blank" class="p-link-node" title="${titleText}"><i class="${iconClass}"></i></a>`;
        }
  
        return `
          <div class="project-showcase-card card frosted-glass" id="project-card-${proj.id}">
            <div class="project-card-header-bar">
              <span class="project-category-badge ${styleClass}">${proj.tag}</span>
              <div class="tag-capsule-row">
                ${proj.tags.slice(0, 3).map(t => `<span class="tag-capsule">${t}</span>`).join("")}
              </div>
            </div>
            <div class="project-card-body">
              <h3 class="project-card-title">${proj.title}</h3>
              <p class="project-card-subtitle">${proj.subTitle}</p>
              <p class="project-card-desc">${proj.bullets[0]} ${proj.bullets[1] || ''}</p>
              
              <div class="project-micro-metrics">
                ${Object.entries(proj.metrics).map(([key, val]) => `
                  <div class="pmm-item">
                    <span class="pmm-val">${val}</span>
                    <span class="pmm-label">${key}</span>
                  </div>
                `).join("")}
              </div>
            </div>
            <div class="project-card-footer">
              <div class="btn-text-link accent-teal trigger-case-study" data-project-id="${proj.id}">
                <span>Deep Architecture</span>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
              <div class="flex" style="gap:8px">
                ${liveBtnHtml}
                <div class="p-link-node trigger-case-study" data-project-id="${proj.id}" style="cursor:pointer" title="Deep View"><i class="fa-solid fa-eye"></i></div>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }
  }
  
  /* ==========================================================================
     THE SKILLS SWITCHER
     ========================================================================== */
  function renderSkillsCategory(config, category) {
    const skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return;
  
    const categorySkills = config.skills[category];
    if (!categorySkills) return;
  
    // Map coloring rules
    let barColor = "linear-gradient(90deg, var(--accent-teal), #0d9488)";
    if (category === "frontend") barColor = "linear-gradient(90deg, var(--accent-indigo), #4338ca)";
    if (category === "backend") barColor = "linear-gradient(90deg, var(--accent-indigo), var(--accent-teal))";
    if (category === "tools") barColor = "linear-gradient(90deg, var(--text-muted), var(--text-secondary))";
  
    skillsContainer.innerHTML = categorySkills.map(skill => `
      <div class="skill-item">
        <div class="skill-info">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-percent">${skill.value}%</span>
        </div>
        <div class="skill-track-outer">
          <div class="skill-fill-bar" style="width: 0%; background: ${barColor};" data-percent="${skill.value}"></div>
        </div>
      </div>
    `).join("");
  
    // Small timeout to trigger hardware-accelerated bar fill-up animation
    setTimeout(() => {
      const bars = skillsContainer.querySelectorAll(".skill-fill-bar");
      bars.forEach(bar => {
        const percent = bar.getAttribute("data-percent");
        bar.style.width = `${percent}%`;
      });
    }, 50);
  }
  
  function initSkillTabs(config) {
    const skillsTabs = document.querySelectorAll("#skillsTabs .skills-tab");
    skillsTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        skillsTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        
        const category = tab.getAttribute("data-category");
        renderSkillsCategory(config, category);
      });
    });
  }
  
  /* ==========================================================================
     TYPEWRITER ROTATION
     ========================================================================== */
  function initTypewriter() {
    const textElement = document.getElementById("typingText");
    if (!textElement) return;
  
    const words = [
      "Software Engineering",
      "UI/UX Design Mockups",
      "Java Backend Architecture",
      "FastAPI & Machine Learning",
      "Robust AI System Integration"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150;
  
    function type() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        delay = 60;
      } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        delay = 120;
      }
  
      if (!isDeleting && charIndex === currentWord.length) {
        delay = 1800; // Hold full word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400; // Small rest before next word
      }
  
      setTimeout(type, delay);
    }
  
    type();
  }
  
  /* ==========================================================================
     HEADER SCROLL LOGIC
     ========================================================================== */
  function initScrollHeader() {
    const header = document.getElementById("mainHeader");
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const navMenu = document.getElementById("navMenu");
    
    if (!header) return;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  
    // Mobile Navigation burger triggers
    if (mobileMenuToggle && navMenu) {
      mobileMenuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        const icon = mobileMenuToggle.querySelector("i");
        if (navMenu.classList.contains("open")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      });
  
      // Clicking links inside mobile menu shuts it down
      const navLinks = navMenu.querySelectorAll(".nav-link");
      navLinks.forEach(link => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("open");
          const icon = mobileMenuToggle.querySelector("i");
          if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
          }
        });
      });
    }
  }
  
  /* ==========================================================================
     CUSTOM GLOWING CURSOR
     ========================================================================== */
  function initCustomCursor() {
    const cursor = document.getElementById("customCursor");
    const dot = document.getElementById("customCursorDot");
    
    if (!cursor || !dot) return;
  
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
  
    // Detect screen touch capabilities
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      cursor.style.display = "none";
      dot.style.display = "none";
      document.body.style.cursor = "default";
      return;
    }
  
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Dot instantly maps to mouse coordinates
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    });
  
    // Outer circle trails behind using light linear interpolation (lerp)
    function animateCursor() {
      const lerpFactor = 0.15;
      cursorX += (mouseX - cursorX) * lerpFactor;
      cursorY += (mouseY - cursorY) * lerpFactor;
  
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
  
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  
    // Interactive feedback when clicking links or buttons
    const clickables = document.querySelectorAll("a, button, .skills-tab, .playground-tab, .trigger-case-study");
    clickables.forEach(item => {
      item.addEventListener("mouseenter", () => {
        cursor.style.width = "48px";
        cursor.style.height = "48px";
        cursor.style.borderColor = "var(--accent-indigo)";
      });
      item.addEventListener("mouseleave", () => {
        cursor.style.width = "32px";
        cursor.style.height = "32px";
        cursor.style.borderColor = "var(--accent-teal)";
      });
    });
  
    // Scale on active click down
    window.addEventListener("mousedown", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    });
    window.addEventListener("mouseup", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
  }
  
  /* ==========================================================================
     ACTIVE NAVIGATION HIGHLIGHTS (OBSERVERS)
     ========================================================================== */
  function initActiveNavObserver() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");
    
    if (!sections.length || !navLinks.length) return;
  
    const options = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Focus central viewport area
      threshold: 0
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    }, options);
  
    sections.forEach(section => observer.observe(section));
  }
  
  /* ==========================================================================
     UI/UX PLAYGROUND STATE MANAGER
     ========================================================================== */
  function initPlaygroundSandbox() {
    const tabs = document.querySelectorAll(".playground-controls .playground-tab");
    const displays = document.querySelectorAll(".playground-display .playground-state");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
  
        const state = tab.getAttribute("data-state");
        displays.forEach(disp => {
          disp.classList.remove("state-active");
          if (disp.getAttribute("id") === `state-${state}`) {
            disp.classList.add("state-active");
          }
        });
      });
    });
  }
  
  /* ==========================================================================
     EXPERIENCE CARD INTERACTIVE EXPANDER
     ========================================================================== */
  function initTimelineTriggers() {
    const cards = document.querySelectorAll(".timeline-card-inner");
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.borderColor = "var(--accent-teal)";
        card.style.boxShadow = "0 10px 30px var(--accent-teal-glow)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.borderColor = "var(--card-border)";
        card.style.boxShadow = "var(--shadow-sm)";
      });
    });
  }
  
  /* ==========================================================================
     CASE STUDY DEEP MODALS & VECTOR GRAPHS
     ========================================================================== */
  function initProjectModals(config) {
    const modal = document.getElementById("projectModal");
    const closeBtn = document.getElementById("modalCloseBtn");
    const triggers = document.querySelectorAll(".trigger-case-study");
  
    if (!modal || !closeBtn) return;
  
    triggers.forEach(trigger => {
      trigger.addEventListener("click", () => {
        const id = trigger.getAttribute("data-project-id");
        const project = config.projects.find(p => p.id === id);
        
        if (project) {
          openCaseStudy(project);
        }
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  
    // Close on outside card clicks
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("open");
      }
    });
  
    function openCaseStudy(proj) {
      document.getElementById("modalTag").textContent = proj.tag;
      document.getElementById("modalTitle").textContent = proj.title;
      document.getElementById("modalSubTitle").textContent = proj.subTitle;
      document.getElementById("modalProblemText").textContent = proj.details.problem;
  
      // Render bullets
      const bulletsList = document.getElementById("modalBullets");
      bulletsList.innerHTML = proj.bullets.map(b => `<li>${b}</li>`).join("");
  
      // Dynamic architecture SVG render
      renderArchitectureSVG(proj.details.architecture);
  
      // Footer live demonstration logic
      const footerActions = document.getElementById("modalFooterActions");
      if (proj.liveDemo) {
        const isFigma = proj.liveDemo.includes("figma.com");
        const btnLabel = isFigma ? "Launch Figma Design Workspace" : "Launch Live Deployment";
        const iconClass = isFigma ? "fa-brands fa-figma" : "fa-solid fa-arrow-up-right-from-square";
        const gradientClass = isFigma ? "bg-gradient-indigo" : "bg-gradient-teal";
        footerActions.innerHTML = `
          <a href="${proj.liveDemo}" target="_blank" class="btn btn-primary ${gradientClass}">
            <span>${btnLabel}</span>
            <i class="${iconClass}"></i>
          </a>
        `;
      } else {
        footerActions.innerHTML = `
          <button class="btn btn-secondary" onclick="document.getElementById('projectModal').classList.remove('open')">
            Close Case Study
          </button>
        `;
      }
  
      modal.classList.add("open");
    }
  
    function renderArchitectureSVG(arch) {
      const container = document.getElementById("modalArchitecture");
      if (!container) return;
  
      const nodes = arch.nodes;
      const connections = arch.connections;
  
      // Compute coordinates dynamically
      // Grid arrangement: 4-node grid or 3-node flat flow
      let width = 680;
      let height = 185;
      
      let svgHtml = `
        <svg class="arch-graph-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet">
          <!-- Connection lines -->
      `;
  
      // Mapping node coordinates
      const coords = {};
      
      if (nodes.length === 4) {
        // Render 2x2 grid topology
        coords[nodes[0].id] = { x: 80, y: 40 };   // FE
        coords[nodes[1].id] = { x: 300, y: 40 };  // Spring Gateway
        coords[nodes[2].id] = { x: 520, y: 40 };  // AI FastAPI
        coords[nodes[3].id] = { x: 300, y: 130 }; // GenAI
      } else if (nodes.length === 3) {
        // Render horizontal 1x3 pipeline flow
        coords[nodes[0].id] = { x: 80, y: 80 };
        coords[nodes[1].id] = { x: 300, y: 80 };
        coords[nodes[2].id] = { x: 520, y: 80 };
      } else {
        // Fallback layout
        nodes.forEach((n, idx) => {
          coords[n.id] = { x: 100 + (idx * 200), y: 80 };
        });
      }
  
      // Render link paths
      connections.forEach(conn => {
        const from = coords[conn.from];
        const to = coords[conn.to];
        if (from && to) {
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;
  
          // SVG Dash path animation
          svgHtml += `
            <g>
              <line class="svg-link-line" x1="${from.x + 80}" y1="${from.y + 25}" x2="${to.x}" y2="${to.y + 25}" />
              <!-- Small arrow indicator -->
              <polygon points="${to.x},${to.y + 25} ${to.x - 6},${to.y + 21} ${to.x - 6},${to.y + 29}" fill="var(--accent-teal)"/>
              <text class="svg-link-text" x="${midX + 20}" y="${midY + 15}" text-anchor="middle">${conn.label}</text>
            </g>
          `;
        }
      });
  
      // Render node rectangles
      nodes.forEach(node => {
        const coord = coords[node.id];
        if (coord) {
          svgHtml += `
            <g class="svg-node" data-node-id="${node.id}">
              <rect class="svg-node-rect" x="${coord.x}" y="${coord.y}" width="150" height="50" rx="8" />
              <text class="svg-node-text-title" x="${coord.x + 12}" y="${coord.y + 20}">${node.label}</text>
              <text class="svg-node-text-desc" x="${coord.x + 12}" y="${coord.y + 34}">
                <tspan>${node.desc.substring(0, 24)}...</tspan>
              </text>
              <title>${node.desc}</title>
            </g>
          `;
        }
      });
  
      svgHtml += `</svg>`;
      container.innerHTML = svgHtml;
    }
  }
  
  /* ==========================================================================
     CONTACT CRM & STORAGE FLOW
     ========================================================================== */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    const successOverlay = document.getElementById("formSuccessOverlay");
    const resetBtn = document.getElementById("resetFormBtn");
    const submitBtn = document.getElementById("submitBtn");
  
    if (!form || !successOverlay) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("nameInput").value;
      const email = document.getElementById("emailInput").value;
      const message = document.getElementById("messageInput").value;
      
      const btnText = submitBtn.querySelector(".btn-text");
      const originalText = btnText.textContent;
      
      btnText.textContent = "Transmitting Details...";
      submitBtn.style.pointerEvents = "none";
      
      // Simulate network request delays
      setTimeout(() => {
        // Message CRM Logger in local storage
        const submittedData = {
          name,
          email,
          message,
          timestamp: new Date().toISOString()
        };
        
        const existingMessages = JSON.parse(localStorage.getItem("portfolio_messages") || "[]");
        existingMessages.push(submittedData);
        localStorage.setItem("portfolio_messages", JSON.stringify(existingMessages));
        
        // Show elegant frosted glass successful transaction card
        successOverlay.classList.add("show");
        
        // Clear variables
        btnText.textContent = originalText;
        submitBtn.style.pointerEvents = "auto";
      }, 1200);
    });
  
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        form.reset();
        successOverlay.classList.remove("show");
      });
    }
  }
  
  /* ==========================================================================
     THEME CONFIG MANAGER
     ========================================================================== */
  function initThemeManager() {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;
  
    const icon = toggle.querySelector("i");
  
    // Load preference
    const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
    setTheme(savedTheme);
  
    toggle.addEventListener("click", () => {
      const activeTheme = document.body.classList.contains("light") ? "dark" : "light";
      setTheme(activeTheme);
    });
  
    function setTheme(theme) {
      if (theme === "light") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        icon.className = "fa-solid fa-sun";
        localStorage.setItem("portfolio_theme", "light");
      } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        icon.className = "fa-solid fa-moon";
        localStorage.setItem("portfolio_theme", "dark");
      }
    }
  }
  
  /* ==========================================================================
     PROGRAMMATIC RESUME DOWNLOAD FLOWS
     ========================================================================== */
  function initResumeDownload(config) {
    // Both resumeBtn and downloadResume are now native HTML5 <a> elements with the download attribute.
    // Native browser downloading is extremely reliable and secure. No JS overrides needed!
    console.log("Resume download hooks initialized natively.");
  }

  /* ==========================================================================
     DYNAMIC SVG FLUID WAVE MESH
     ========================================================================== */
  function initFluidWaves() {
    const wave1 = document.getElementById("wave1");
    const wave2 = document.getElementById("wave2");
    const joint1 = document.getElementById("joint1");
    const joint2 = document.getElementById("joint2");
    const container = document.getElementById("visualContainer");
    
    if (!wave1 || !wave2) return;
    
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetOffset = 0;
    let currentOffset = 0;
    
    if (container) {
      container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        mouseX = e.clientX - rect.left - rect.width / 2;
        mouseY = e.clientY - rect.top - rect.height / 2;
        // Map distance from center to a magnetic offset factor
        targetOffset = Math.sqrt(mouseX * mouseX + mouseY * mouseY) * 0.15;
      });
      container.addEventListener("mouseleave", () => {
        targetOffset = 0;
      });
    }
    
    function animate() {
      time += 0.02;
      
      // Interpolate current magnetic offset
      currentOffset += (targetOffset - currentOffset) * 0.1;
      
      // Compute sine wave control coordinates
      const h1 = 120 + Math.sin(time) * 30 + Math.cos(time * 0.5) * 10 + currentOffset * 0.2;
      const h2 = 280 + Math.cos(time * 0.8) * 30 + Math.sin(time * 0.4) * 15 - currentOffset * 0.2;
      
      // Modify wave control paths
      wave1.setAttribute("d", `M 50,200 Q 125,${h1} 200,200 T 350,200`);
      wave2.setAttribute("d", `M 50,200 Q 125,${h2} 200,200 T 350,200`);
      
      // Move joints
      if (joint1 && joint2) {
        joint1.setAttribute("y1", (h1 + 200) / 2 - 20);
        joint1.setAttribute("y2", (h1 + 200) / 2 + 20);
        joint2.setAttribute("y1", (h2 + 200) / 2 - 20);
        joint2.setAttribute("y2", (h2 + 200) / 2 + 20);
      }
      
      requestAnimationFrame(animate);
    }
    animate();
  }

  /* ==========================================================================
     INTERACTIVE DEVELOPER CONSOLE CARD
     ========================================================================== */
  function initInteractiveTerminal(config) {
    const form = document.getElementById("terminalForm");
    const input = document.getElementById("terminalInput");
    const output = document.getElementById("terminalOutput");
    const body = document.getElementById("terminalBody");
    
    if (!form || !input || !output) return;
    
    // Command database
    const commands = {
      help: () => {
        return [
          "Available Commands:",
          "  <span class='accent-teal'>about</span>     - Display professional summary & background",
          "  <span class='accent-teal'>skills</span>    - List engineering & UI/UX proficiencies",
          "  <span class='accent-teal'>projects</span>  - Show deep-technical engineering builds",
          "  <span class='accent-teal'>contact</span>   - Print digital channels and email coordinate details",
          "  <span class='accent-teal'>resume</span>    - Open/Download official resume (Abishek.pdf)",
          "  <span class='accent-teal'>clear</span>     - Wipe console screen buffer log"
        ];
      },
      about: () => {
        return [
          "<b>Abishek A</b> - Software Engineer & UI/UX Designer",
          "----------------------------------------------",
          config.profile.bio[0],
          "",
          `Current Location: ${config.profile.location}`,
          `Active Campus:    ${config.education[0].institution} (${config.education[0].degree})`,
          `Major GPA Focus:  Computer Science & Software Systems`
        ];
      },
      skills: () => {
        const categories = Object.keys(config.skills);
        let lines = ["Technical Proficiencies Matrix:", "--------------------------------"];
        
        categories.forEach(cat => {
          if (cat === "languages") return; // handle separately
          const skillsList = config.skills[cat].map(s => s.name).join(", ");
          const prettyCat = cat.charAt(0).toUpperCase() + cat.slice(1);
          lines.push(`  <span class='accent-indigo'>${prettyCat}:</span> ${skillsList}`);
        });
        
        return lines;
      },
      projects: () => {
        let lines = ["Featured Engineering Deployments:", "----------------------------------"];
        config.projects.forEach(p => {
          lines.push(`🚀 <b>${p.title}</b> - ${p.subTitle}`);
          lines.push(`   Stack:    ${p.tag}`);
          lines.push(`   Deliverable: ${p.bullets[0]}`);
          if (p.liveDemo) {
            lines.push(`   Live:     <a href="${p.liveDemo}" target="_blank" style="color:var(--accent-teal);text-decoration:underline;">${p.liveDemo}</a>`);
          }
          lines.push("");
        });
        return lines;
      },
      contact: () => {
        return [
          "Coordinate Pipelines:",
          "---------------------",
          `  Email:    <a href="mailto:${config.profile.email}" style="color:var(--accent-teal);text-decoration:underline;">${config.profile.email}</a>`,
          `  Phone:    ${config.profile.phone}`,
          `  LinkedIn: <a href="${config.profile.linkedin}" target="_blank" style="color:var(--accent-teal);text-decoration:underline;">${config.profile.linkedin}</a>`,
          `  GitHub:   <a href="${config.profile.github}" target="_blank" style="color:var(--accent-teal);text-decoration:underline;">${config.profile.github}</a>`
        ];
      },
      resume: () => {
        // Trigger actual download programmatically
        const link = document.createElement("a");
        link.href = config.profile.resumeFile;
        link.download = config.profile.resumeFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        return [
          "🔄 Initiating download for Abishek.pdf...",
          "Download stream opened successfully."
        ];
      }
    };
    
    // Form submit listener
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const rawInput = input.value.trim();
      const cmd = rawInput.toLowerCase();
      
      // Add command line to log
      appendLine(`visitor@abishek-a:~# ${rawInput}`);
      
      if (cmd !== "") {
        if (cmd === "clear") {
          output.innerHTML = "";
        } else if (commands[cmd]) {
          const lines = commands[cmd]();
          lines.forEach(line => appendLine(line));
        } else {
          appendLine(`sh: command not found: ${rawInput}. Type <span class='accent-teal'>help</span> to view commands.`);
        }
      }
      
      input.value = "";
      
      // Auto scroll to bottom of terminal screen
      setTimeout(() => {
        body.scrollTop = body.scrollHeight;
      }, 20);
    });
    
    function appendLine(text) {
      const div = document.createElement("div");
      div.className = "terminal-line";
      div.innerHTML = text;
      output.appendChild(div);
    }
  }
