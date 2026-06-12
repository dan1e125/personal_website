// ── i18n — EN & ES translations ─────────────────────────────────────
// Edit text here to update all visible copy on the site.
// Loaded before script.js; exposes global `translations` object.
const SITE_STATS = {
  targets: 702,
  paths: 12,
  ranking: 'Top 1%',
  modules: 102
};

const translations = {
  en: {
    // ── Document meta ──
    documentTitle: 'Daniel Ordonez Arango | Penetration Tester',
    metaDescription: 'Freelance penetration tester for startups and SMBs. Web app and Active Directory security. HTB Top 1%, 702 lab targets. Remote-first, clear deliverables.',
    ogTitle: 'Daniel Ordonez Arango | Penetration Tester',
    ogDescription: 'Freelance pentester for startups and SMBs. Web app and Active Directory pentest. HTB Top 1%, 702 lab targets. Remote engagements, clear reporting.',
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
      '.hero-copy h2': 'A breach costs more than a pentest.',
      '.hero-copy .lead': 'I find the vulnerabilities in your systems before someone exploits them. Structured methodology, written deliverables, and a report your team can act on. From initial scoping to final report delivery, every phase is tracked and documented.',
      '.hero-actions .button.primary': 'Start with a free call',
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
      '#svc-ad-desc': 'BloodHound-driven mapping of your internal attack surface. Simulates real credential and lateral movement attacks — showing exactly how far an attacker could reach.',
      '#svc2-del1': 'BloodHound attack path mapping',
      '#svc2-del2': 'Credential attack simulation',
      '#svc2-del3': 'Domain privilege escalation PoC',
      '#svc2-del4': 'Written remediation roadmap',
      '#svc2-price': 'From $3,000 USD',
      '#services-retest-note': 'All services include a free re-test after fixes are applied.',
      // ── Case Studies ──
      '#cs-tag': '[ CASE STUDIES ]',
      '#case-studies-heading': 'Real engagements, real findings',
      '#cs1-client': 'E-commerce · Colombia · 2025',
      '#cs1-high': '3 High',
      '#cs1-title': 'SEO Injection & Malware Discovery',
      '#cs1-f2': 'Remote content injection via cURL from attacker-controlled Cloudflare Pages subdomain',
      '#cs1-outcome': 'All critical and high findings remediated. Re-test passed.',
      '#cs2-type': 'WordPress · Static Analysis',
      '#cs2-client': 'Corporate Intranet · Colombia · 2025',
      '#cs2-crit': '5 Critical',
      '#cs2-high': '6 High',
      '#cs2-total': '20 findings',
      '#cs2-title': 'WordPress Intranet — Static Code Analysis',
      '#cs2-f1': 'Hardcoded API credentials for HR and payment systems in source code (CVSS 9.8)',
      '#cs2-f2': 'JWT auth bypass via undefined secret key — CVSS 9.3',
      '#cs2-f3': 'Stored XSS + path traversal in file handler',
      '#cs2-outcome': '20 vulnerabilities documented. Client applied all remediations within 2 weeks.',
      '#cs2-read-link': 'Read case study →',
      '#cs2-report-link': 'View redacted report →',
      '#cs3-type': 'WordPress · DB & File Forensics',
      '#cs3-client': 'Automotive Industry · Colombia · 2026',
      '#cs3-crit': '5 Critical',
      '#cs3-high': '3 High',
      '#cs3-total': '9 findings',
      '#cs3-title': 'Active SEO Spam Injection & Full Remediation',
      '#cs3-f1': '60 hidden divs — 51 gambling domains, undetected 2.5 months',
      '#cs3-f2': '3.8 GB backup publicly exposed — probable entry point',
      '#cs3-f3': 'Admin credentials hardcoded in 13 places across codebase',
      '#cs3-outcome': 'All 9 findings remediated in a single session. 8/8 automated verification checks passed.',
      '#cs3-read-link': 'Read case study →',
      '#cs3-report-link': 'View redacted report →',
      // ── Certifications ──
      '#certifications-tag': '[ CREDENTIALS ]',
      '#certifications-heading': 'Training & Experience',
      '#cert-intro': '702 lab targets · Top 1% on HTB — verifiable training paths below.',
      '#cert-completed-label': 'Completed paths',
      '#cert-htb-web': 'Web Penetration Tester',
      '#cert-htb-web-meta': 'CWEE · Exam pending',
      '#cert-htb-pt': 'Penetration Tester',
      '#cert-htb-pt-meta': 'CPTS · Exam pending',
      '#cert-htb-soc': 'SOC Analyst',
      '#cert-htb-soc-meta': 'CDSA · Exam pending',
      '#cert-cjca-title': 'Junior Cybersecurity Analyst',
      '#cert-cjca-meta': 'CJCA · Exam pending',
      '.cert-status--done': 'Path complete',
      '#cert-htb-profile-link': 'View HTB profile →',
      '#cert-transcript-link': 'Download transcript →',
      '#cert-progress-label': 'In progress',
      '#cert-htb-ad': 'Active Directory Pentesting Expert',
      '#cert-badge-progress': 'In progress',
      '#cert-htb-ad-meta': 'Aligns with Active Directory pentest service',
      '#cert-bg-label': 'Background',
      '#cert-exp-role': 'Full-Stack Developer · Cybersecurity',
      '#cert-exp-desc': 'Development background means sharper app testing and remediation guidance your dev team can act on.',
      '#cert-exp-link': 'Verify on LinkedIn →',
      '#cert-about-link': 'Read full background →',

      // ── About ──
      '#about-tag': '[ ABOUT ]',
      '#about-heading': 'Background',
      '#about-p1': 'I started as a full-stack developer. That background changes how I test — I know how applications are built, which means I know exactly where developers leave gaps.',
      '#about-p2': 'My training covers the full offensive attack surface: web exploitation, Active Directory attacks, network pivoting, privilege escalation and post-exploitation techniques. I don\'t just find vulnerabilities — I explain why they exist, what a real attacker would do with them, and how to fix them correctly.',
      '#about-p3': 'I work remotely with startups and SMBs across Latin America, the US and Europe. Fixed-price engagements, bilingual delivery, and a free re-test to confirm your fixes actually hold.',

      // ── Process ──
      '#process-tag': '[ HOW IT WORKS ]',
      '#process-heading': 'Simple, end-to-end process',
      '#process-step1-title': 'Scoping Call',
      '#process-step1-desc': 'Free 30-minute call to understand your environment, define targets and agree on rules of engagement. No commitment required.',
      '#process-step2-title': 'Proposal & NDA',
      '#process-step2-desc': 'You receive a written proposal with scope, timeline, methodology and fixed price. NDA signed before any work begins.',
      '#process-step3-title': 'Active Testing',
      '#process-step3-desc': 'Active testing phase. You get progress updates throughout. Any critical findings are reported immediately — no waiting for the final report.',
      '#process-step4-title': 'Report & Re-test',
      '#process-step4-desc': 'Detailed PDF report with risk ratings, proof-of-concept and remediation steps. Free re-test included to verify fixes were applied correctly.',
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
      '#contact .section-tag': '[ CONTACT ]',
      '#contact h3': 'Direct message',
    },

    // ── FAQ ──
    faq: {
      tag: '[ FAQ ]',
      heading: 'Common questions',
      copy: 'Everything you need to know before booking a scoping call.',
      nav: 'FAQ',
      items: [{
        q: 'How much does a penetration test cost?',
        a: 'Web app from $2,000 · Active Directory from $3,000. Use the pricing calculator above for an instant estimate, or book a free scoping call.'
      }, {
        q: 'How long does a penetration test take?',
        a: '1–3 weeks from scoping call to final report. Timeline is fixed in the written proposal before any work begins.'
      }, {
        q: 'Is an NDA signed before work begins?',
        a: 'Yes. A mutual NDA is signed before any scoping call or work begins. All findings and client data are kept strictly confidential and never shared with third parties.'
      }, {
        q: 'Why hire you instead of a larger security firm?',
        a: 'Cost, focus, and direct access. As a LATAM-based independent tester, my rates are significantly lower than US/EU firms without sacrificing methodology or quality. You work directly with the person doing the testing — from scoping to final report.'
      }, {
        q: 'What happens if you find a critical vulnerability?',
        a: 'I report it immediately — you don\'t wait for the final report. Critical and high findings are communicated as soon as confirmed so your team can begin remediation while the engagement is still active.'
      }, {
        q: 'Is the first call free?',
        a: 'Yes, free and no commitment. In 30 minutes we define your environment and agree on targets and rules of engagement. You receive a written proposal with a fixed price afterwards.'
      }, {
        q: 'Are you certified as a penetration tester?',
        a: 'I have completed the CPTS, CDSA, CJCA and CWEE certification paths on HTB Academy (exams pending) and rank in the Top 1% on Hack The Box with 702 machines pwned. All training is verifiable via my HTB profile and transcript.'
      }]    },

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
      emailCopy: 'Copy email address to clipboard'
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
    documentTitle: 'Daniel Ordonez Arango | Pentester',
    metaDescription: 'Pentester freelance para startups y PYMEs. Seguridad en apps web y Active Directory. HTB Top 1%, 702 objetivos de laboratorio. Trabajo remoto, reportes claros.',
    ogTitle: 'Daniel Ordonez Arango | Pentester',
    ogDescription: 'Portafolio de seguridad ofensiva enfocado en penetration testing, análisis defensivo, reportes detallados y superficies de ataque modernas.',
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
      '.hero-copy h2': 'Una brecha cuesta más que un pentest.',
      '.hero-copy .lead': 'Encuentro las vulnerabilidades en tus sistemas antes de que alguien las explote. Metodología estructurada, entregables escritos y un reporte que tu equipo puede ejecutar. Desde el alcance inicial hasta la entrega del reporte final, cada fase es rastreada y documentada.',
      '.hero-actions .button.primary': 'Empezar con una llamada gratuita',
      '#stat-paths': 'Paths de entrenamiento completados',
      '#stat-targets': 'Máquinas de laboratorio comprometidas',
      '#stat-ranking': 'En el top 1% de la Academia',
      '.hero-actions .button.gold[href="htb-academy-student-transcript.pdf"]': 'Descargar transcript',
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
      '#svc-ad-desc': 'Mapeo con BloodHound de tu superficie de ataque interna. Simula ataques reales de credenciales y movimiento lateral — mostrando hasta dónde podría llegar un atacante.',
      '#svc2-del1': 'Mapeo de rutas de ataque con BloodHound',
      '#svc2-del2': 'Simulación de ataques de credenciales',
      '#svc2-del3': 'PoC de escalación de privilegios de dominio',
      '#svc2-del4': 'Hoja de ruta de remediación escrita',
      '#svc2-price': 'Desde $3,000 USD',
      '#services-retest-note': 'Todos los servicios incluyen un re-test gratuito tras aplicar las correcciones.',
      // ── Case Studies ──
      '#cs-tag': '[ CASOS DE ESTUDIO ]',
      '#case-studies-heading': 'Proyectos reales, hallazgos reales',
      '#cs1-client': 'E-commerce · Colombia · 2025',
      '#cs1-high': '3 Altos',
      '#cs1-title': 'Inyección SEO y Descubrimiento de Malware',
      '#cs1-f2': 'Inyección de contenido remoto vía cURL desde subdominio Cloudflare Pages controlado por el atacante',
      '#cs1-outcome': 'Todos los hallazgos críticos y altos remediados. Re-test aprobado.',
      '#cs2-type': 'WordPress · Análisis Estático',
      '#cs2-client': 'Intranet Corporativa · Colombia · 2025',
      '#cs2-crit': '5 Críticos',
      '#cs2-high': '6 Altos',
      '#cs2-total': '20 hallazgos',
      '#cs2-title': 'Intranet WordPress — Análisis Estático de Código',
      '#cs2-f1': 'Credenciales de API hardcodeadas para sistemas de RRHH y pagos en código fuente (CVSS 9.8)',
      '#cs2-f2': 'Bypass de autenticación JWT vía clave secreta indefinida — CVSS 9.3',
      '#cs2-f3': 'XSS almacenado + path traversal en manejador de archivos',
      '#cs2-outcome': '20 vulnerabilidades documentadas. El cliente aplicó todas las correcciones en 2 semanas.',
      '#cs2-read-link': 'Leer caso de estudio →',
      '#cs2-report-link': 'Ver reporte redactado →',
      '#cs3-type': 'WordPress · Forense de BD y Archivos',
      '#cs3-client': 'Industria Automotriz · Colombia · 2026',
      '#cs3-crit': '5 Críticos',
      '#cs3-high': '3 Altos',
      '#cs3-total': '9 hallazgos',
      '#cs3-title': 'Inyección de Spam SEO Activo y Remediación Completa',
      '#cs3-f1': '60 divs ocultos — 51 dominios de apuestas, sin detección 2.5 meses',
      '#cs3-f2': 'Backup de 3.8 GB expuesto públicamente — probable vector de entrada',
      '#cs3-f3': 'Credenciales de admin hardcodeadas en 13 lugares del código',
      '#cs3-outcome': 'Los 9 hallazgos remediados en una sola sesión. 8/8 verificaciones automáticas aprobadas.',
      '#cs3-read-link': 'Leer caso de estudio →',
      '#cs3-report-link': 'Ver reporte redactado →',
      // ── Certifications ──
      '#certifications-tag': '[ CREDENCIALES ]',
      '#certifications-heading': 'Formación y Experiencia',
      '#cert-intro': '702 objetivos de laboratorio · Top 1% en HTB — paths de formación verificables abajo.',
      '#cert-completed-label': 'Paths completados',
      '#cert-htb-web': 'Web Penetration Tester',
      '#cert-htb-web-meta': 'CWEE · Examen pendiente',
      '#cert-htb-pt': 'Penetration Tester',
      '#cert-htb-pt-meta': 'CPTS · Examen pendiente',
      '#cert-htb-soc': 'SOC Analyst',
      '#cert-htb-soc-meta': 'CDSA · Examen pendiente',
      '#cert-cjca-title': 'Analista Junior de Ciberseguridad',
      '#cert-cjca-meta': 'CJCA · Examen pendiente',
      '.cert-status--done': 'Path completo',
      '#cert-htb-profile-link': 'Ver perfil HTB →',
      '#cert-transcript-link': 'Descargar transcript →',
      '#cert-progress-label': 'En progreso',
      '#cert-htb-ad': 'Active Directory Pentesting Expert',
      '#cert-badge-progress': 'En progreso',
      '#cert-htb-ad-meta': 'Alineado con el servicio de pentest Active Directory',
      '#cert-bg-label': 'Experiencia',
      '#cert-exp-role': 'Desarrollador Full-Stack · Ciberseguridad',
      '#cert-exp-desc': 'El background en desarrollo permite pruebas más precisas en apps y guías de remediación que tu equipo puede ejecutar.',
      '#cert-exp-link': 'Verificar en LinkedIn →',
      '#cert-about-link': 'Leer background completo →',

      // ── About ──
      '#about-tag': '[ SOBRE MÍ ]',
      '#about-heading': 'Sobre mí',
      '#about-p1': 'Empecé como desarrollador full-stack. Ese contexto cambia cómo pruebo — entiendo cómo se construyen las aplicaciones, sé exactamente dónde los desarrolladores dejan brechas, y puedo rastrear cada vulnerabilidad hasta su causa raíz para que la corrección sea precisa y duradera.',
      '#about-p2': 'Mi entrenamiento cubre toda la superficie de ataque ofensivo: explotación web, ataques a Active Directory, pivoting en redes, escalada de privilegios y post-explotación — complementado con análisis SOC, DFIR y respuesta a incidentes. Pensar como defensor me hace mejor atacante: sé qué detectan tus herramientas de monitoreo y qué no.',
      '#about-p3': 'Trabajo de forma remota con startups y PYMEs en Latinoamérica, EE.UU. y Europa. Proyectos a precio fijo, entregables en inglés y español, y un re-test gratuito para confirmar que las correcciones realmente funcionan.',
      // ── Process ──
      '#process-tag': '[ CÓMO FUNCIONA ]',
      '#process-heading': 'Un proceso simple de principio a fin',
      '#process-step1-title': 'Llamada de alcance',
      '#process-step1-desc': 'Llamada gratuita de 30 min para definir objetivos y reglas de engagement. Sin compromiso.',
      '#process-step2-title': 'Propuesta y NDA',
      '#process-step2-desc': 'Recibirás una propuesta escrita con alcance, cronograma, metodología y precio fijo. El NDA se firma antes de iniciar.',
      '#process-step3-title': 'Prueba Activa',
      '#process-step3-desc': 'Fase de pruebas activas con actualizaciones de progreso. Hallazgos críticos notificados de inmediato.',
      '#process-step4-title': 'Reporte y re-test',
      '#process-step4-desc': 'Reporte PDF con clasificación de riesgos, PoC y pasos de remediación. Re-test gratuito incluido.',
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
      '#contact .section-tag': '[ CONTACTO ]',
      '#contact h3': 'Contáctame',
    },

    // ── FAQ ──
    faq: {
      tag: '[ FAQ ]',
      heading: 'Preguntas comunes',
      copy: 'Todo lo que necesitas saber antes de agendar una llamada de alcance.',
      nav: 'FAQ',
      items: [{
        q: '¿Cuánto cuesta un pentest?',
        a: 'App web desde $2,000 · Active Directory desde $3,000. Usa la calculadora de precios para una estimación inmediata o agenda una llamada de alcance gratuita.'
      }, {
        q: '¿Cuánto tiempo tarda un pentest?',
        a: '1–3 semanas desde la llamada de alcance hasta el reporte final. El cronograma se fija en la propuesta escrita antes de comenzar.'
      }, {
        q: '¿Se firma un NDA antes de comenzar el trabajo?',
        a: 'Sí. Se firma un NDA mutuo antes de cualquier llamada o inicio de trabajo. Todos los hallazgos y datos del cliente se mantienen confidenciales y nunca se comparten con terceros.'
      }, {
        q: '¿Por qué contratarte a ti en lugar de una empresa de seguridad?',
        a: 'Costo, enfoque y acceso directo. Como tester independiente en LATAM, mis tarifas son significativamente más bajas que firmas de EE.UU./Europa sin sacrificar metodología ni calidad. Trabajas directamente con quien realiza el testing, de inicio a fin.'
      }, {
        q: '¿Qué pasa si encuentras una vulnerabilidad crítica?',
        a: 'La reporto de inmediato — no esperas al reporte final. Los hallazgos críticos y altos se comunican en cuanto se confirman para que tu equipo pueda iniciar la remediación mientras el proyecto sigue activo.'
      }, {
        q: '¿La primera llamada es gratuita?',
        a: 'Sí, gratuita y sin compromiso. En 30 minutos definimos tu entorno y acordamos objetivos y reglas. Recibes una propuesta escrita con precio fijo después.'
      }, {
        q: '¿Estás certificado como pentester?',
        a: 'He completado los paths CPTS, CDSA, CJCA y CWEE en HTB Academy (exámenes pendientes) y estoy en el Top 1% de Hack The Box con 702 máquinas comprometidas. Toda la formación es verificable en mi perfil HTB y transcript.'
      }]
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
      emailCopy: 'Copiar correo al portapapeles'
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
