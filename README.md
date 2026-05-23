# Abishek A — Interactive Portfolio Website

A personal portfolio built to showcase the dual expertise of a **Software Engineer** and **UI/UX Designer**. This site merges robust backend architectures and AI models with a beautiful, professional, and highly performant front-end experience.

---

## 🎨 Design Philosophy & Accents
- **Theme**: *Neural Glassmorphism* (Deep Slate background with high-performance frosted glass containers).
- **Accents**:
  - **Electric Indigo (`#6366f1`)**: Represents rigorous backend systems, Spring Boot gatekeepers, database layers, and AI logic.
  - **Neon Teal (`#14b8a6`)**: Represents user interface visuals, accessibility, client mockups, and front-end aesthetics.
- **Aesthetic Additions**: Bespoke trailing custom cursor, slow atmospheric glowing background orbs, high-end float triggers, and a persistent dark/light theme switcher (preference saved in `localStorage`).

---

## ✨ Immersive Features

1. **Rotating Keyword Writer**: Smooth typing subtitle highlighting skills: *"Software Engineering"*, *"UI/UX Design Mockups"*, *"Java Backend Architecture"*, *"FastAPI & Machine Learning"*, and *"Robust AI System Integration"*.
2. **UI/UX Design Playground**: A mini interactive sandbox demonstrating how designs evolve from mock to deployment. Click through:
   - **Wireframe View**: An abstract dashed design blueprint.
   - **High-Fi Prototype**: A glowing high-fidelity mockup preview card.
   - **Production Code**: A clean React code block snippet.
3. **Dynamic System Architecture Visualizer**: Projects include a "Deep Architecture" modal that dynamically renders an **interactive, animated SVG connection node graph** detailing your service pipelines (e.g. *React UI ➔ Spring Boot Gateway (RLS RLS) ➔ FastAPI Sidecar (DenseNet-121)*).
4. **Offline message CRM logging**: Form submissions are stored directly in `localStorage` with submission timestamps and metadata, showing an elegant checkmark confirmation card on complete.
5. **Resume Download**: Easily downloadable resume pre-configured to look up your personal resume PDF (`Abishek.pdf`).

---

## 📁 Repository Structure
- `index.html` — SEO-optimized semantic markup.
- `style.css` — Centralized CSS variables, glassmorphic filters, keyframe animations, and fully responsive grids down to `320px`.
- `app.js` — Core logic rendering controller.
- `portfolio-config.js` — **Easy personal configurations!** Change any text, highlights, email, phone, or projects simply by updating variables here.

---

## ⚙️ Configuration & Personalization
You do not need to write HTML/CSS code to update your portfolio details! Simply open `portfolio-config.js` and modify any fields:
```javascript
const PortfolioConfig = {
  profile: {
    name: "Abishek A",
    email: "your.email@example.com",
    phone: "+91 XXXXX XXXXX",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    resumeFile: "Your_Resume.pdf",
    ...
  }
}
```

---

## 🚀 Opening Locally
Since the website is built with highly optimized vanilla standards, you do not need to run a server or compile code!
1. Double-click `index.html` to load it in any browser (Chrome, Safari, Firefox).
2. Place your resume PDF in the directory and rename it exactly to `Abishek.pdf` to enable the resume download links.
