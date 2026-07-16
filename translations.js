// ── i18n — EN & ES translations ─────────────────────────────────────
// Edit visible copy here. FAQ items are generated from content/faq.json via npm run build.
// Site links/stats: scripts/site.config.js
const SITE_STATS = window.SITE_CONFIG.stats;
const SITE_LINKS = { booking: window.SITE_CONFIG.links.calendly };

const translations = {
  en: {
    // ── Document meta ──
    documentTitle: 'Daniel Ordonez Arango | Freelance Penetration Tester — Colombia & Remote',
    metaDescription: 'Freelance penetration tester for startups and SMBs. Web app and Active Directory security. HTB Top 1%, 720 lab targets, 105 modules. Remote-first, bilingual delivery.',
    ogTitle: 'Daniel Ordonez Arango | Freelance Penetration Tester — Colombia & Remote',
    ogDescription: 'Freelance pentester for startups and SMBs. Web app and Active Directory pentest. HTB Top 1%, 720 lab targets, 105 modules. Remote engagements, clear reporting.',
    waMsg: 'Hi Daniel, I\'m interested in learning more about your pentesting services.',

    selectors: {
      // ── Nav ──
      '.topnav a[href="#services"]': 'What I do',
      '.topnav a[href="#case-studies"]': 'Cases',
      '.topnav a[href="#certifications"]': 'Credentials',
      '.topnav a[href="#process"]': 'Process',
      '.topnav a[href="#quote"]': 'Pricing',
      '.topnav a[href="#about"]': 'About',
      '.topnav a[href="#contact"]': 'Contact',

      // ── Hero ──
      '.hero-copy h1': 'A breach costs more than a pentest.',
      '.hero-copy .lead': 'I find the vulnerabilities in your systems before someone exploits them. Structured methodology, written deliverables, and a report your team can act on. From initial scoping to final report delivery, every phase is tracked and documented.',
      '#hero-book-btn-label': 'Schedule a scoping call',
      '#cert-htb-profile-link': 'HTB profile',
      '#hero-htb-btn .btn-label': 'Curriculum',
      '#stat-paths': 'Structured training paths completed',
      '#stat-targets': 'Vulnerable lab machines exploited',
      '#stat-ranking': 'Ranked in the top 1% on HTB Academy',
      // ── Terminal ──

      // ── Services ──
      '#htb-stats-tag': '[ HACK THE BOX PROFILE ]',
      '#services-tag': '[ SERVICES ]',
      '#services-heading': 'What I do',
      '#svc-web-title': 'Web Application Pentest',
      '#svc-web-desc': 'OWASP-aligned manual testing of your web app. You get a prioritized report with exploitable findings your dev team can remediate immediately.',
      '#svc1-del1': 'OWASP Top 10 manual testing',
      '#svc1-del2': 'Severity-ranked PDF report',
      '#svc1-del3': 'Business impact per finding',
      '#svc1-del4': 'Remediation guidance included',
      '#svc1-price': 'From $2,000 USD',
      '.service-cta': 'Get a quote →',
      '#svc-ad-title': 'Active Directory Pentest',
      '#svc-ad-desc': 'Find identity and privilege gaps in your Active Directory before lateral movement becomes a domain compromise. Identity-focused manual testing with a severity-ranked report your IT team can act on immediately.',
      '#svc2-del1': 'Kerberos, ACL & delegation testing',
      '#svc2-del2': 'Severity-ranked PDF report',
      '#svc2-del3': 'Domain compromise path analysis',
      '#svc2-del4': 'Remediation guidance included',
      '#svc2-price': 'From $3,000 USD',
      '#services-retest-note': 'All services include a free re-test after fixes are applied.',
      // ── Case Studies ──
      '#cs-tag': '[ CASE STUDIES ]',
      '#case-studies-heading': 'Real engagements, real findings',
      '#cs2-client': 'Corporate Intranet · Colombia · 2025',
      '#cs2-crit': '5 Critical',
      '#cs2-high': '6 High',
      '#cs2-title': 'WordPress Intranet — Static Code Analysis',
      '#cs2-desc': 'Auth bypass, hardcoded credentials, and XSS in a corporate WordPress stack — all remediated within two weeks.',
      '#cs2-read-link': 'Read case study →',
      '#cs3-client': 'Automotive Industry · Colombia · 2026',
      '#cs3-crit': '5 Critical',
      '#cs3-high': '3 High',
      '#cs3-title': 'Active SEO Spam Injection & Full Remediation',
      '#cs3-desc': 'Hidden gambling SEO spam and exposed backups on WordPress — full cleanup verified in one session.',
      '#cs3-read-link': 'Read case study →',
      // ── Certifications ──
      '#certifications-tag': '[ CREDENTIALS ]',
      '#certifications-heading': 'Training & Experience',
      '#cert-completed-label': 'Completed paths',
      '#cert-htb-web': 'Web Penetration Tester',
      '#cert-htb-web-meta': 'CWES',
      '#cert-htb-pt': 'Penetration Tester',
      '#cert-htb-pt-meta': 'CPTS',
      '#cert-htb-soc': 'SOC Analyst',
      '#cert-htb-soc-meta': 'CDSA',
      '#cert-cjca-title': 'Junior Cybersecurity Analyst',
      '#cert-cjca-meta': 'CJCA',
      '#cert-progress-label': 'In progress',
      '#cert-htb-senior-web': 'Senior Web Penetration Tester',
      '#cert-htb-senior-web-meta': 'CWEE',
      '#cert-htb-ad': 'Active Directory Pentesting Expert',
      '#cert-htb-ad-meta': 'CAPE',
      '#cert-htb-ai': 'Offensive AI Expert',
      '#cert-htb-ai-meta': 'COAE',
      '#cert-htb-wifi': 'Wi-Fi Pentesting Expert',
      '#cert-htb-wifi-meta': 'CWPE',
      // ── About ──
      '#about-tag': '[ ABOUT ]',
      '#about-heading': 'Why work with me',
      '#about-p1': 'I began as a full-stack developer before moving into offensive security. That foundation is practical: I read application logic and architecture, not just scanner output — so every finding ties to a root cause and remediation your team can implement without guesswork.',
      '#about-p2': 'I specialize in web application and Active Directory assessments for startups and SMBs. Work follows a structured methodology — scope agreed in writing, manual testing, severity-ranked reports with evidence. The case studies on this site are from real engagements: corporate WordPress intranets, active SEO spam compromises, and post-incident remediation.',
      '#about-p3': 'You work directly with me — not a sales team or junior tester. Based in Colombia, I deliver remotely across Latin America, the US, and Europe in English or Spanish, with fixed scope and pricing agreed before testing begins.',

      // ── Process ──
      '#process-tag': '[ HOW IT WORKS ]',
      '#process-heading': 'Structured engagement process',
      '#process-step1-title': 'Scoping & proposal',
      '#process-step1-desc': 'Free scoping call to define your environment, targets and rules of engagement. You receive a written proposal with scope, methodology, fixed price and NDA — before any work begins.',
      '#process-step2-title': 'Assessment & testing',
      '#process-step2-desc': 'Manual offensive testing with progress updates throughout. Critical and high findings are reported immediately — not held for the final report.',
      '#process-step3-title': 'Reporting & verification',
      '#process-step3-desc': 'Severity-ranked PDF report with evidence and remediation steps.',
      // ── Pricing / Quote calculator ──
      '#quote-tag': '[ PRICING ]',
      '#quote-heading': 'Get an instant estimate',
      '#ql-service': 'Service',
      '#qcs-name-pentest_web': 'Web App Pentest',
      '#qcs-price-pentest_web': 'From $2,000',
      '#qcs-name-pentest_ad': 'Active Directory',
      '#qcs-price-pentest_ad': 'From $3,000',
      '#ql-env-params': 'Environment parameters',
      '#ql-scope': 'Scope size',
      '#tgl-small-label': 'Small',
      '#tgl-small-desc': '1–5 targets',
      '#tgl-medium-label': 'Medium',
      '#tgl-medium-desc': '6–15 targets',
      '#tgl-large-label': 'Large',
      '#tgl-large-desc': '15+ targets',
      '#ql-complexity': 'Complexity',
      '#tgl-low-cplx': 'Standard',
      '#tgl-low-cplx-desc': 'Common stack',
      '#tgl-medium-cplx': 'Custom',
      '#tgl-medium-cplx-desc': 'Proprietary logic',
      '#tgl-high-cplx': 'Enterprise',
      '#tgl-high-cplx-desc': 'Complex / hybrid',
      '#ql-tbox': 'Testing type',
      '#qc-tbox-help-btn': '?',
      '#tbox-info-black-title': 'Black-box',
      '#tbox-info-black-desc': 'No prior knowledge of the target. Simulates a real external attacker. Ideal for testing your defenses from an adversarial perspective.',
      '#tbox-info-black-rec': '✓ Most common',
      '#tbox-info-grey-title': 'Grey-box',
      '#tbox-info-grey-desc': 'Partial credentials or context provided. Simulates a compromised account or insider threat. Best coverage-to-cost ratio.',
      '#tbox-info-grey-rec': '✓ Recommended',
      '#tbox-info-white-title': 'White-box',
      '#tbox-info-white-desc': 'Full access + source code provided. Maximum depth and coverage. Best for thorough audits or when regulations require it.',
      '#tbox-info-white-rec': '✓ Most thorough',
      '#tgl-black-tbox': 'Black-box',
      '#tgl-black-tbox-desc': 'No prior access',
      '#tgl-grey-tbox': 'Grey-box',
      '#tgl-grey-tbox-desc': 'Partial credentials',
      '#tgl-white-tbox': 'White-box',
      '#tgl-white-tbox-desc': 'Full access + code',
      '#qr-svc-label': 'Selected service',
      '#qr-label': 'Estimated range',
      '#qr-scope-key': 'Scope',
      '#qr-cplx-key': 'Complexity',
      '#qr-tbox-key': 'Testing',
      '#qr-duration-key': 'Duration',
      '#qc-main-cta': 'Book a free scoping call <span class="qc-cta-arrow">→</span>',
      '#qc-disclaimer': 'Automated estimate only — not a binding quote.<br>A signed authorization agreement is required before any engagement begins.',
      // ── Contact ──
      'label[for="cf-name"]': 'Name',
      'label[for="cf-email"]': 'Email',
      'label[for="cf-message"]': 'Message',
      '.cf-btn-text': 'Send message',
      '#contact .section-tag': '[ SEND A MESSAGE ]',
      '#contact h3': 'Direct message',
    },

    // ── FAQ ──
    faq: {
      tag: '[ FAQ ]',
      heading: 'Common questions',
      copy: 'Everything you need to know before booking a scoping call.',
      nav: 'FAQ',
      items: [
    // @build:faq-en-items
      {
        q: 'Why hire you instead of a larger security firm?',
        a: 'Cost, focus, and direct access. As a LATAM-based independent tester, my rates are significantly lower than US/EU firms without sacrificing methodology or quality. You work directly with the person doing the testing — from scoping to final report.'
      },
      {
        q: 'What happens if you find a critical vulnerability?',
        a: 'I report it immediately — you don\'t wait for the final report. Critical and high findings are communicated as soon as confirmed so your team can begin remediation while the engagement is still active.'
      },
      {
        q: 'How long does a penetration test take?',
        a: 'Most web app engagements run 1–2 weeks; Active Directory assessments typically 2–3 weeks. Exact timing depends on scope, environment size, and testing type. You get a fixed timeline in the written proposal before work begins.'
      },
      {
        q: 'What do I need to prepare before the engagement?',
        a: 'A short scoping call is enough to start. Before testing begins, you\'ll need a signed authorization agreement, a technical point of contact, and access details aligned with the agreed testing type (black-box, grey-box, or white-box). I provide a checklist in the proposal.'
      },
      {
        q: 'Do you sign an NDA?',
        a: 'Yes. Mutual NDAs are standard and included in the engagement paperwork. Your data, credentials, and findings are handled confidentially — nothing is shared with third parties.'
      }
    // @end:faq-en-items
      ]
    },

    // ── Contact ──
    placeholders: {
      '#cf-name': 'Your name',
      '#cf-email': 'your@email.com',
      '#cf-message': 'Describe the engagement or project...'
    },
    formMessages: {
      requiredFields: 'Please fill in all fields.',
      invalidEmail: 'Please enter a valid email address.',
      success: '✓ Message sent! I will get back to you within 24 hours.',
      submitFailed: 'Submission failed. Please try again.',
      networkError: 'Network error. Please try again or use the email channel.'
    },

    // ── Aria labels ──
    aria: {
      svc: {
        pentest_web: 'Select Web App Pentest, from $2,000',
        pentest_ad: 'Select Active Directory Pentest, from $3,000'  
      },
      tgl: {
        small: 'Scope: Small, 1 to 5 targets',
        medium: 'Scope: Medium, 6 to 15 targets',
        large: 'Scope: Large, 15 or more targets',
        low: 'Complexity: Standard, common tech stack',
        'medium-cplx': 'Complexity: Custom, proprietary logic',
        high: 'Complexity: Enterprise, complex or hybrid',
        black: 'Testing type: Black-box, no prior access',
        grey: 'Testing type: Grey-box, partial credentials',
        white: 'Testing type: White-box, full access and code'
      },
      emailCopy: 'Copy email address to clipboard',
      bookCall: 'Schedule a virtual scoping call on Calendly'
    },

    // ── Labels ──
    labels: {
      scope: {
        small: 'Small · 1–5',
        medium: 'Medium · 6–15',
        large: 'Large · 15+'
      },
      cplx: {
        low: 'Standard',
        medium: 'Custom',
        high: 'Enterprise'
      },
      tbox: {
        black: 'Black-box',
        grey: 'Grey-box',
        white: 'White-box'
      },
      scopeSets: {
        pentest_web: {
          small: '1–5 pages/endpoints',
          medium: '6–15 pages/endpoints',
          large: '15+ pages/endpoints'
        },
        pentest_ad: {
          small: '1–3 hosts',
          medium: '4–10 hosts',
          large: '10+ hosts'
        }
      },
      durations: {
        pentest_web: {
          small: '3–5 days',
          medium: '1–2 weeks',
          large: '2–3 weeks'
        },
        pentest_ad: {
          small: '1 week',
          medium: '1–2 weeks',
          large: '2–3 weeks'
        }
      }
    }
  },
  es: {
    // ── Document meta ──
    documentTitle: 'Daniel Ordonez Arango | Pentester Freelance — Colombia y Remoto',
    metaDescription: 'Pentester freelance para startups y PYMEs. Seguridad en apps web y Active Directory. HTB Top 1%, 720 objetivos de laboratorio, 105 módulos. Trabajo remoto, reportes claros.',
    ogTitle: 'Daniel Ordonez Arango | Pentester Freelance — Colombia y Remoto',
    ogDescription: 'Pentester freelance para startups y PYMEs. Pentest web y Active Directory. HTB Top 1%, 720 objetivos, 105 módulos. Trabajo remoto, reportes claros.',
    waMsg: 'Hola Daniel, me interesa conocer más sobre tus servicios de pentesting.',

    selectors: {
      // ── Nav ──
      '.topnav a[href="#services"]': 'Lo que hago',
      '.topnav a[href="#case-studies"]': 'Casos',
      '.topnav a[href="#certifications"]': 'Credenciales',
      '.topnav a[href="#process"]': 'Proceso',
      '.topnav a[href="#quote"]': 'Precios',
      '.topnav a[href="#about"]': 'Sobre mí',
      '.topnav a[href="#contact"]': 'Contacto',

      // ── Hero ──
      '.hero-copy h1': 'Una brecha cuesta más que un pentest.',
      '.hero-copy .lead': 'Encuentro las vulnerabilidades en tus sistemas antes de que alguien las explote. Metodología estructurada, entregables escritos y un reporte que tu equipo puede ejecutar. Desde el alcance inicial hasta la entrega del reporte final, cada fase es rastreada y documentada.',
      '#hero-book-btn-label': 'Agendar videollamada de alcance',
      '#cert-htb-profile-link': 'HTB profile',
      '#hero-htb-btn .btn-label': 'Currículum',
      '#stat-paths': 'Paths de entrenamiento completados',
      '#stat-targets': 'Máquinas de laboratorio comprometidas',
      '#stat-ranking': 'En el top 1% de la Academia',
      // ── Terminal ──

      // ── Services ──
      '#htb-stats-tag': '[ PERFIL HACK THE BOX ]',
      '#services-tag': '[ SERVICIOS ]',
      '#services-heading': 'Lo que hago',
      '#svc-web-title': 'Pentest de Aplicación Web',
      '#svc-web-desc': 'Testing manual de tu aplicación web alineado con OWASP. Obtienes un reporte priorizado con hallazgos que tu equipo de desarrollo puede remediar de inmediato.',
      '#svc1-del1': 'Testing manual OWASP Top 10',
      '#svc1-del2': 'Informe PDF ordenado por severidad',
      '#svc1-del3': 'Impacto de negocio por hallazgo',
      '#svc1-del4': 'Guía de remediación incluida',
      '#svc1-price': 'Desde $2,000 USD',
      '.service-cta': 'Solicitar cotización →',
      '#svc-ad-title': 'Pentest de Active Directory',
      '#svc-ad-desc': 'Encuentra brechas de identidad y privilegios en tu Active Directory antes de que el movimiento lateral se convierta en un compromiso de dominio. Testing manual enfocado en identidad con un reporte priorizado por severidad que tu equipo de IT puede ejecutar de inmediato.',
      '#svc2-del1': 'Testing de Kerberos, ACL y delegación',
      '#svc2-del2': 'Informe PDF ordenado por severidad',
      '#svc2-del3': 'Análisis de rutas de compromiso de dominio',
      '#svc2-del4': 'Guía de remediación incluida',
      '#svc2-price': 'Desde $3,000 USD',
      '#services-retest-note': 'Todos los servicios incluyen un re-test gratuito tras aplicar las correcciones.',
      // ── Case Studies ──
      '#cs-tag': '[ CASOS DE ESTUDIO ]',
      '#case-studies-heading': 'Proyectos reales, hallazgos reales',
      '#cs2-client': 'Intranet Corporativa · Colombia · 2025',
      '#cs2-crit': '5 Críticos',
      '#cs2-high': '6 Altos',
      '#cs2-title': 'Intranet WordPress — Análisis Estático de Código',
      '#cs2-desc': 'Bypass de auth, credenciales hardcodeadas y XSS en WordPress corporativo — remediado en dos semanas.',
      '#cs2-read-link': 'Leer caso de estudio →',
      '#cs3-client': 'Industria Automotriz · Colombia · 2026',
      '#cs3-crit': '5 Críticos',
      '#cs3-high': '3 Altos',
      '#cs3-title': 'Inyección de Spam SEO Activo y Remediación Completa',
      '#cs3-desc': 'Spam SEO de apuestas oculto y backups expuestos en WordPress — limpieza completa verificada en una sesión.',
      '#cs3-read-link': 'Leer caso de estudio →',
      // ── Certifications ──
      '#certifications-tag': '[ CREDENCIALES ]',
      '#certifications-heading': 'Formación y Experiencia',
      '#cert-completed-label': 'Paths completados',
      '#cert-htb-web': 'Web Penetration Tester',
      '#cert-htb-web-meta': 'CWES',
      '#cert-htb-pt': 'Penetration Tester',
      '#cert-htb-pt-meta': 'CPTS',
      '#cert-htb-soc': 'SOC Analyst',
      '#cert-htb-soc-meta': 'CDSA',
      '#cert-cjca-title': 'Analista Junior de Ciberseguridad',
      '#cert-cjca-meta': 'CJCA',
      '#cert-progress-label': 'En progreso',
      '#cert-htb-senior-web': 'Senior Web Penetration Tester',
      '#cert-htb-senior-web-meta': 'CWEE',
      '#cert-htb-ad': 'Active Directory Pentesting Expert',
      '#cert-htb-ad-meta': 'CAPE',
      '#cert-htb-ai': 'Offensive AI Expert',
      '#cert-htb-ai-meta': 'COAE',
      '#cert-htb-wifi': 'Wi-Fi Pentesting Expert',
      '#cert-htb-wifi-meta': 'CWPE',
      // ── About ──
      '#about-tag': '[ SOBRE MÍ ]',
      '#about-heading': 'Por qué trabajar conmigo',
      '#about-p1': 'Empecé como desarrollador full-stack antes de especializarme en seguridad ofensiva. Esa base es práctica: leo la lógica y arquitectura de las aplicaciones, no solo resultados de escáneres — cada hallazgo se vincula a una causa raíz y a una remediación que tu equipo puede ejecutar sin ambigüedades.',
      '#about-p2': 'Me especializo en evaluaciones de aplicaciones web y Active Directory para startups y PYMEs. Cada proyecto sigue una metodología estructurada: alcance acordado por escrito, pruebas manuales y reportes priorizados por severidad con evidencia. Los casos de estudio de este sitio son trabajo real: intranets WordPress corporativas, compromisos activos por inyección SEO y remediación post-incidente.',
      '#about-p3': 'Trabajas directamente conmigo — sin equipo comercial ni testers junior de por medio. Con base en Colombia, entrego de forma remota en Latinoamérica, EE.UU. y Europa, en inglés o español, con alcance y precio fijo acordados antes de iniciar las pruebas.',
      // ── Process ──
      '#process-tag': '[ CÓMO FUNCIONA ]',
      '#process-heading': 'Proceso de engagement estructurado',
      '#process-step1-title': 'Alcance y propuesta',
      '#process-step1-desc': 'Llamada de alcance gratuita para definir entorno, objetivos y reglas de engagement. Recibes una propuesta escrita con alcance, metodología, precio fijo y NDA — antes de iniciar cualquier trabajo.',
      '#process-step2-title': 'Evaluación y pruebas',
      '#process-step2-desc': 'Testing ofensivo manual con actualizaciones de progreso. Los hallazgos críticos y altos se reportan de inmediato — no se retienen para el reporte final.',
      '#process-step3-title': 'Reporte y verificación',
      '#process-step3-desc': 'Reporte PDF priorizado por severidad con evidencia y pasos de remediación.',
      // ── Pricing / Quote calculator ──
      '#quote-tag': '[ PRECIOS ]',
      '#quote-heading': 'Obtén una estimación al instante',
      '#ql-service': 'Servicio',
      '#qcs-name-pentest_web': 'Pentest de Aplicación Web',
      '#qcs-price-pentest_web': 'Desde $2,000',
      '#qcs-name-pentest_ad': 'Directorio Activo',
      '#qcs-price-pentest_ad': 'Desde $3,000',
      '#ql-env-params': 'Parámetros del entorno',
      '#ql-scope': 'Tamaño del alcance',
      '#tgl-small-label': 'Pequeño',
      '#tgl-small-desc': '1–5 objetivos',
      '#tgl-medium-label': 'Mediano',
      '#tgl-medium-desc': '6–15 objetivos',
      '#tgl-large-label': 'Grande',
      '#tgl-large-desc': '15+ objetivos',
      '#ql-complexity': 'Complejidad',
      '#tgl-low-cplx': 'Estándar',
      '#tgl-low-cplx-desc': 'Stack común',
      '#tgl-medium-cplx': 'Personalizado',
      '#tgl-medium-cplx-desc': 'Lógica propietaria',
      '#tgl-high-cplx': 'Empresarial',
      '#tgl-high-cplx-desc': 'Complejo / híbrido',
      '#ql-tbox': 'Tipo de testing',
      '#qc-tbox-help-btn': '?',
      '#tbox-info-black-title': 'Caja negra',
      '#tbox-info-black-desc': 'Sin conocimiento previo del objetivo. Simula un atacante externo real. Ideal para evaluar tus defensas desde la perspectiva del atacante.',
      '#tbox-info-black-rec': '✓ Más común',
      '#tbox-info-grey-title': 'Caja gris',
      '#tbox-info-grey-desc': 'Se proporcionan credenciales o contexto parcial. Simula una cuenta comprometida o amenaza interna. Mejor relación cobertura/costo.',
      '#tbox-info-grey-rec': '✓ Recomendado',
      '#tbox-info-white-title': 'Caja blanca',
      '#tbox-info-white-desc': 'Acceso completo + código fuente. Máxima profundidad y cobertura. Ideal para auditorías exhaustivas o cuando las normativas lo exigen.',
      '#tbox-info-white-rec': '✓ Más exhaustivo',
      '#tgl-black-tbox': 'Caja negra',
      '#tgl-black-tbox-desc': 'Sin acceso previo',
      '#tgl-grey-tbox': 'Caja gris',
      '#tgl-grey-tbox-desc': 'Credenciales parciales',
      '#tgl-white-tbox': 'Caja blanca',
      '#tgl-white-tbox-desc': 'Acceso completo + código',
      '#qr-svc-label': 'Servicio seleccionado',
      '#qr-label': 'Rango estimado',
      '#qr-scope-key': 'Alcance',
      '#qr-cplx-key': 'Complejidad',
      '#qr-tbox-key': 'Modalidad',
      '#qr-duration-key': 'Duración',
      '#qc-main-cta': 'Reservar llamada de alcance gratis <span class="qc-cta-arrow">→</span>',
      '#qc-disclaimer': 'Estimación automatizada — no es una cotización vinculante.<br>Se requiere un acuerdo de autorización firmado antes de iniciar cualquier compromiso.',
      // ── Contact ──
      'label[for="cf-name"]': 'Nombre',
      'label[for="cf-email"]': 'Correo',
      'label[for="cf-message"]': 'Mensaje',
      '.cf-btn-text': 'Enviar mensaje',
      '#contact .section-tag': '[ ENVÍA UN MENSAJE ]',
      '#contact h3': 'Mensaje directo',
    },

    // ── FAQ ──
    faq: {
      tag: '[ FAQ ]',
      heading: 'Preguntas comunes',
      copy: 'Todo lo que necesitas saber antes de agendar una llamada de alcance.',
      nav: 'FAQ',
      items: [
    // @build:faq-es-items
      {
        q: '¿Por qué contratarte a ti en lugar de una empresa de seguridad?',
        a: 'Costo, enfoque y acceso directo. Como tester independiente en LATAM, mis tarifas son significativamente más bajas que firmas de EE.UU./Europa sin sacrificar metodología ni calidad. Trabajas directamente con quien realiza el testing, de inicio a fin.'
      },
      {
        q: '¿Qué pasa si encuentras una vulnerabilidad crítica?',
        a: 'La reporto de inmediato — no esperas al reporte final. Los hallazgos críticos y altos se comunican en cuanto se confirman para que tu equipo pueda iniciar la remediación mientras el proyecto sigue activo.'
      },
      {
        q: '¿Cuánto dura un pentest?',
        a: 'La mayoría de proyectos web toman 1–2 semanas; evaluaciones de Active Directory suelen ser 2–3 semanas. El tiempo exacto depende del alcance, tamaño del entorno y modalidad de prueba. Recibes un cronograma fijo en la propuesta escrita antes de iniciar.'
      },
      {
        q: '¿Qué necesito preparar antes del engagement?',
        a: 'Basta con una llamada corta de alcance para empezar. Antes del testing necesitas un acuerdo de autorización firmado, un contacto técnico y los accesos acordados según la modalidad (caja negra, gris o blanca). Incluyo una checklist en la propuesta.'
      },
      {
        q: '¿Firmas NDA?',
        a: 'Sí. Los NDA mutuos son estándar y forman parte de la documentación del proyecto. Tus datos, credenciales y hallazgos se manejan de forma confidencial — no se comparten con terceros.'
      }
    // @end:faq-es-items
      ]
    },

    // ── Contact ──
    placeholders: {
      '#cf-name': 'Tu nombre',
      '#cf-email': 'tu@correo.com',
      '#cf-message': 'Describe el proyecto o evaluación...'
    },
    formMessages: {
      requiredFields: 'Por favor, completa todos los campos.',
      invalidEmail: 'Por favor, ingresa una dirección de correo válida.',
      success: '✓ Mensaje enviado. Te respondo en menos de 24 horas.',
      submitFailed: 'Error al enviar. Por favor, inténtalo de nuevo.',
      networkError: 'Error de red. Inténtalo de nuevo o usa el canal de correo electrónico.'
    },

    // ── Aria labels ──
    aria: {
      svc: {
        pentest_web: 'Seleccionar Pentest Web App, desde $2,000',
        pentest_ad: 'Seleccionar Pentest Active Directory, desde $3,000'  
      },
      tgl: {
        small: 'Alcance: Pequeño, 1 a 5 objetivos',
        medium: 'Alcance: Mediano, 6 a 15 objetivos',
        large: 'Alcance: Grande, 15 o más objetivos',
        low: 'Complejidad: Estándar, stack común',
        'medium-cplx': 'Complejidad: Personalizado, lógica propietaria',
        high: 'Complejidad: Empresarial, complejo o híbrido',
        black: 'Modalidad: Caja negra, sin acceso previo',
        grey: 'Modalidad: Caja gris, credenciales parciales',
        white: 'Modalidad: Caja blanca, acceso completo y código'
      },
      emailCopy: 'Copiar correo al portapapeles',
      bookCall: 'Agendar videollamada de alcance en Calendly'
    },

    // ── Labels ──
    labels: {
      scope: {
        small: 'Pequeño · 1–5',
        medium: 'Mediano · 6–15',
        large: 'Grande · 15+'
      },
      cplx: {
        low: 'Estándar',
        medium: 'Personalizado',
        high: 'Empresarial'
      },
      tbox: {
        black: 'Caja negra',
        grey: 'Caja gris',
        white: 'Caja blanca'
      },
      scopeSets: {
        pentest_web: {
          small: '1–5 páginas/endpoints',
          medium: '6–15 páginas/endpoints',
          large: '15+ páginas/endpoints'
        },
        pentest_ad: {
          small: '1–3 hosts',
          medium: '4–10 hosts',
          large: '10+ hosts'
        }
      },
      svcNames: {
        pentest_web: 'Pentest de Aplicación Web',
        pentest_ad: 'Directorio Activo'
      },
      durations: {
        pentest_web: {
          small: '3–5 días',
          medium: '1–2 semanas',
          large: '2–3 semanas'
        },
        pentest_ad: {
          small: '1 semana',
          medium: '1–2 semanas',
          large: '2–3 semanas'
        }
      }
    }
  }
}
