/**
 * Portfolio Configuration - Abishek A
 * Easily edit this file to update any details on your portfolio without changing the main code.
 */
const PortfolioConfig = {
  profile: {
    name: "Abishek A",
    title: "Software Engineer & UI/UX Designer",
    subTitle: "Crafting sleek interfaces, purposeful visuals, and seamless digital experiences.",
    location: "Bengaluru, India",
    email: "abhi0809abhishek@gmail.com",
    phone: "+91 78925 96421",
    github: "https://github.com/23btrct005-coder",
    linkedin: "https://www.linkedin.com/in/abishek-a-768582292/",
    resumeFile: "Abishek.pdf",
    bio: [
      "I'm Abishek A, a passionate and detail-oriented developer who loves transforming ideas into clean, modern, and impactful digital experiences. I’m deeply driven by creativity, problem-solving, and the desire to build interfaces that not only look great but also feel intuitive and smooth to use.",
      "With a growing foundation in front-end development, UI/UX principles, and modern web technologies, I constantly explore new tools, frameworks, and design methods that help me push the quality of my work to the next level.",
      "I believe in continuous learning, building meaningful projects, and staying consistent — because great products come from both skill and discipline. Whether it’s improving user experience, optimizing visuals, or writing clean code, I approach every task with focus and enthusiasm."
    ],
    highlights: [
      "Led a 4-member team to build a smart transportation system with live bus tracking.",
      "Designed and developed user-centered interfaces using Figma.",
      "Built a real-time E-Pass generator with GPS tracking using HTML, CSS, JS, and Firebase.",
      "Created a responsive company portfolio website for Mummy SSS Brooms.",
      "Strong in UI/UX design, front-end development, and clean interface creation.",
      "Improved usability and visual consistency across multiple UI/UX projects.",
      "Experienced in converting concepts into wireframes, prototypes, and high-fidelity layouts.",
      "Developed user flows and interactions that enhance overall engagement.",
      "Hands-on experience with Firebase and JavaScript for functional, real-time features.",
      "Skilled in collaboration, aligning project goals, and contributing to smooth development workflows."
    ]
  },

  education: [
    {
      institution: "Jain Deemed-to-be University",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 - 2027",
      location: "Bengaluru, India",
      details: "Focus on software architecture, clean backend design, and frontend systems."
    },
    {
      institution: "The Vijay Millennium Senior Secondary School",
      degree: "All India Senior School Certificate Examination (CBSE)",
      period: "2022 - 2023",
      location: "Dharmapuri, India",
      details: "Completed high school with high honors, focusing on Science and Mathematics."
    }
  ],

  experience: [
    {
      role: "Software & Design Intern",
      company: "Infotact Solutions",
      period: "Apr 2025 - Jul 2025",
      location: "Bengaluru, India",
      bullets: [
        "Designed and implemented intuitive UI/UX workflows for the <a href='https://www.figma.com/design/qpAtxea4sM2YSVjW4zfChE/Project-1--Web-App-for-a-Virtual-AR-Try-On?t=cgOB8s7aA3VEaGxF-0' target='_blank' style='color:var(--accent-teal);text-decoration:underline;'>Virtual AR Try-On Platform (AuraAR)</a>, resulting in a 20% increase in user engagement metrics.",
        "Developed user-friendly interfaces for the <a href='https://www.figma.com/design/eXPyzeA5RPA0zaZvHLRGDO/Fleet-Management---Delivery-Tracking?node-id=0-1&p=f&t=z47clMuiE3qmP3W0-0' target='_blank' style='color:var(--accent-teal);text-decoration:underline;'>Fleet Operations & Delivery Tracking System (FleetFlow)</a>, ensuring smooth navigation and operational efficiency for end-users.",
        "Produced cross-platform wireframes, interactive prototypes, and high-fidelity mockups in Figma, reducing front-end development iterations by 15%.",
        "Conducted comprehensive user research and usability testing, gathering actionable feedback to refine design solutions and align functionality with back-end requirements.",
        "Collaborated with cross-functional engineering and product teams to safeguard visual consistency and accessibility standards across multiple digital products."
      ],
      tags: ["Figma", "UI/UX Design", "Wireframing", "Usability Testing", "React"]
    },
    {
      role: "Project Lead (B.Tech)",
      company: "CampusBus Tracker",
      period: "2024 - 2025",
      location: "Jain University",
      bullets: [
        "Led a 4-member engineering team to design and build a responsive web application for managing digital transit e-passes and live route positioning.",
        "Deployed a functional tracking environment linking live GPS location streams onto interactive maps, significantly improving real-time visibility for 100+ daily commuters.",
        "Utilized Firebase to handle real-time database synchronization and authentication, ensuring secure and scalable user data management."
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "Firebase", "Live Tracking", "Leadership"]
    }
  ],

  skills: {
    design: [
      { name: "UI/UX Design", value: 90 },
      { name: "Figma", value: 95 },
      { name: "Wireframing & Prototyping", value: 88 },
      { name: "Design Thinking", value: 85 },
      { name: "Usability Testing", value: 80 }
    ],
    frontend: [
      { name: "HTML5", value: 95 },
      { name: "CSS3 / Custom Properties", value: 92 },
      { name: "JavaScript (ES6+)", value: 85 },
      { name: "React 18", value: 80 },
      { name: "TailwindCSS / Framer Motion", value: 82 }
    ],
    backend: [
      { name: "Java (Strong OOP)", value: 78 },
      { name: "Spring Boot 3.2", value: 75 },
      { name: "FastAPI / PyTorch", value: 70 },
      { name: "PostgreSQL / Row-Level Security", value: 74 },
      { name: "Firebase", value: 85 }
    ],
    tools: [
      { name: "Git / GitHub", value: 88 },
      { name: "RESTful APIs", value: 85 },
      { name: "Agile / Scrum", value: 80 },
      { name: "Figma Developer Handoff", value: 90 }
    ],
    languages: [
      { name: "English", proficiency: "Professional" },
      { name: "Tamil", proficiency: "Native" },
      { name: "Telugu", proficiency: "Conversational" },
      { name: "Kannada", proficiency: "Conversational" },
      { name: "Hindi", proficiency: "Conversational" }
    ]
  },

  projects: [
    {
      id: "medisync",
      title: "MediSync",
      subTitle: "Clinical Intelligence Platform",
      tag: "Java / React / AI Integration",
      metrics: {
        performance: "95+",
        security: "Row-Level Isolation",
        accuracy: "DenseNet-121 ML"
      },
      bullets: [
        "Engineered a high-availability backend using Java 17 and Spring Boot 3.2, enforcing PostgreSQL Row-Level Security (RLS) for strict multi-tenant data isolation.",
        "Created a specialized FastAPI sidecar utilizing PyTorch and MONAI (DenseNet-121) to perform automated diagnostic imaging classification on raw X-ray datasets.",
        "Integrated Generative AI (Gemini 1.5 Flash, GPT-4o) into a deterministic triage engine, converting complex radiological outputs into simplified, patient-friendly summaries.",
        "Designed and developed a responsive, high-performance UI using React 18, TailwindCSS, and Framer Motion, achieving a 95+ performance score on Lighthouse."
      ],
      tags: ["Java 17", "Spring Boot", "React", "FastAPI", "PyTorch", "MONAI", "PostgreSQL", "Generative AI"],
      liveDemo: "https://medisync-hos.ddns.net/",
      details: {
        problem: "Clinical diagnostic environments handle highly sensitive, multi-tenant datasets that require absolute security isolation. At the same time, practitioners need rapid access to computer-aided imaging classifications and clear, patient-friendly summaries to make critical decisions under pressure.",
        architecture: {
          nodes: [
            { id: "fe", label: "React Frontend", desc: "TailwindCSS & Framer Motion for highly responsive UI with 95+ Lighthouse Score." },
            { id: "be", label: "Spring Boot Gateway", desc: "Java 17 backend enforcing strict PostgreSQL Row-Level Security (RLS) for multi-tenant data isolation." },
            { id: "ai", label: "FastAPI PyTorch Sidecar", desc: "Runs DenseNet-121 (MONAI) models for automated X-ray diagnostic classification." },
            { id: "genai", label: "GenAI Triage Engine", desc: "Integrates Gemini 1.5 & GPT-4o to write simplified patient-friendly summaries." }
          ],
          connections: [
            { from: "fe", to: "be", label: "REST / HTTPS" },
            { from: "be", to: "ai", label: "Inter-Process RPC" },
            { from: "be", to: "genai", label: "Secure API" }
          ]
        }
      }
    },
    {
      id: "campusbus",
      title: "CampusBus Portal",
      subTitle: "Smart Transportation & Live Tracking",
      tag: "HTML / CSS / JS / Firebase",
      metrics: {
        commuters: "100+ Daily Users",
        transit: "E-Pass Issued",
        tracking: "Real-Time GPS"
      },
      bullets: [
        "Led a 4-member engineering team to design and build a responsive web application for managing digital transit e-passes and live route positioning.",
        "Deployed a functional tracking environment linking live GPS location streams onto interactive maps, significantly improving real-time visibility for 100+ daily commuters.",
        "Utilized Firebase to handle real-time database synchronization and authentication, ensuring secure and scalable user data management."
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "Firebase Database", "Firebase Auth", "Leaflet/Mapbox API"],
      liveDemo: "https://buss-passfinal-chi.vercel.app/",
      details: {
        problem: "Traditional university bus portals rely heavily on manual transit pass verification and lack real-time bus arrival tracking. This creates severe delays, queue congestion, and anxiety for over 100 daily student commuters navigating campus transit routes.",
        architecture: {
          nodes: [
            { id: "fe", label: "Client Frontend", desc: "Vanilla HTML/CSS/JS with Leaflet maps rendering dynamic route streams." },
            { id: "auth", label: "Firebase Auth", desc: "Secures authentication, allowing quick student check-in and portal login." },
            { id: "db", label: "Realtime Database", desc: "Synchronizes live GPS coordinates from bus-side devices instantly." }
          ],
          connections: [
            { from: "fe", to: "auth", label: "Auth Requests" },
            { from: "fe", to: "db", label: "Websocket Listen" }
          ]
        }
      }
    },
    {
      id: "mummysss",
      title: "Mummy SSS Brooms",
      subTitle: "Company Portfolio Website",
      tag: "HTML / CSS / JS (Client Work)",
      metrics: {
        speed: "Sub-Second Load",
        design: "Figma to Code",
        engagement: "Inquiry Funnel"
      },
      bullets: [
        "Built a fully responsive business website showcasing products and brand identity.",
        "Designed clean, elegant UI layouts for products, about-us, and inquiries.",
        "Added interactive inquiry forms with instant validation, improving customer outreach and conversion.",
        "Optimized image delivery and CSS rendering to achieve blazing fast load times on mobile devices."
      ],
      tags: ["HTML5", "Vanilla CSS", "JavaScript", "Responsive Design", "Client Handoff"],
      liveDemo: null,
      details: {
        problem: "Mummy SSS Brooms needed a professional online identity to showcase their premium commercial utility products. The goal was to build a fast-loading, mobile-friendly landing page with a direct product catalog and a functional contact pipeline.",
        architecture: {
          nodes: [
            { id: "fe", label: "Responsive UI", desc: "Hand-crafted CSS layouts featuring dynamic media queries and smooth image carousels." },
            { id: "funnel", label: "Inquiry Pipeline", desc: "Custom JS input filters validating client business requests in real-time." }
          ],
          connections: [
            { from: "fe", to: "funnel", label: "Form Event" }
          ]
        }
      }
    },
    {
      id: "fleetmanagement",
      title: "FleetFlow",
      subTitle: "Fleet Operations & Delivery Tracking",
      tag: "Figma / UI/UX Design / System",
      metrics: {
        efficiency: "+22% Route Savings",
        dispatch: "Sub-Second Dispatch",
        components: "40+ Figma Tokens"
      },
      bullets: [
        "Designed an end-to-end interactive Figma high-fidelity prototype mapping driver dispatch boards and fleet status dashboards.",
        "Standardized design token assets and reusable UI components, accelerating frontend developer handoff workflows.",
        "Formulated high-contrast mobile driver interfaces optimized for high visibility and swift parcel delivery scan workflows."
      ],
      tags: ["Figma UI/UX", "High-Fi Prototype", "Design Token System", "Driver Companion UI", "User Flow Maps", "Wireframes"],
      liveDemo: "https://www.figma.com/design/eXPyzeA5RPA0zaZvHLRGDO/Fleet-Management---Delivery-Tracking?node-id=0-1&p=f&t=z47clMuiE3qmP3W0-0",
      details: {
        problem: "Fleet logistics managers routinely manage complex, disjointed scheduling dashboards while delivery drivers require highly legible, non-distracting screen layouts to log real-time delivery statuses on the road. The goal was to build a cohesive, design-token-driven Figma prototype that merges deep operations monitoring with driver legibility.",
        architecture: {
          nodes: [
            { id: "fe", label: "Dispatcher Desktop Hub", desc: "Comprehensive dispatch management tracking vehicles, driver rosters, and delivery milestones." },
            { id: "tokens", label: "Figma Token System", desc: "Re-usable design system enforcing unified font typography scales, vehicle states, and HSL colors." },
            { id: "driver", label: "Driver Mobile App", desc: "High-contrast mobile utility allowing delivery scans, navigation support, and direct dispatch notifications." }
          ],
          connections: [
            { from: "fe", to: "driver", label: "Real-Time Sync" },
            { from: "driver", to: "tokens", label: "Component Sync" },
            { from: "fe", to: "tokens", label: "Grid Component Sync" }
          ]
        }
      }
    },
    {
      id: "artryon",
      title: "AuraAR",
      subTitle: "Virtual AR Try-On Platform",
      tag: "Figma / UI/UX Design / AR Platform",
      metrics: {
        engagement: "+20% Interaction",
        rendering: "<1.5s Rendering",
        components: "50+ Figma Tokens"
      },
      bullets: [
        "Designed high-fidelity interactive Figma prototype interfaces for a next-gen Virtual AR Try-On platform, enabling real-time item overlays.",
        "Designed intuitive user-flows with face-mesh tracking cues, contributing to a 20% surge in customer engagement metrics.",
        "Crafted minimalist layouts displaying dynamic catalog selectors, sizing adjusters, and unified high-contrast toggles."
      ],
      tags: ["Figma UI/UX", "AR Face Mesh", "Catalog Selectors", "High-Fi Prototype", "Design Systems", "User Flows"],
      liveDemo: "https://www.figma.com/design/qpAtxea4sM2YSVjW4zfChE/Project-1--Web-App-for-a-Virtual-AR-Try-On?t=cgOB8s7aA3VEaGxF-0",
      details: {
        problem: "Online consumers often face purchase uncertainty, which results in high cart abandonment and high product returns. The goal of this project was to design an intuitive, high-fidelity browser-based AR shopping experience that seamlessly overlays items on real-time face and hand meshes.",
        architecture: {
          nodes: [
            { id: "fe", label: "AR Viewport Grid", desc: "Interactive camera view displaying real-time 3D face mesh overlays and tracking indicators." },
            { id: "catalog", label: "Product Catalog Slider", desc: "Sleek selector menu displaying active jewelry, eyewear, and apparel variants." },
            { id: "checkout", label: "Customizer & Order Screen", desc: "Instant sizing calculators and streamlined order checkout pathways." }
          ],
          connections: [
            { from: "fe", to: "catalog", label: "AR Sync Overlay" },
            { from: "catalog", to: "checkout", label: "Direct Selection Checkout" }
          ]
        }
      }
    }
  ],

  certifications: [
    {
      title: "Programming using Java",
      issuer: "Infosys Springboard",
      date: "2024",
      link: "#"
    },
    {
      title: "Cloud Computing & Software Engineering",
      issuer: "IBM",
      date: "2024",
      link: "#"
    },
    {
      title: "Introduction to Graph Theory",
      issuer: "UC San Diego",
      date: "2023",
      link: "#"
    }
  ]
};

// Export to window object for browser access
if (typeof window !== "undefined") {
  window.PortfolioConfig = PortfolioConfig;
}
