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
      '.hero-actions .button.primary .btn-label': 'Start with a free call',
      '#cert-htb-profile-link': 'HTB profile',
      '#hero-htb-btn .btn-label': 'Curriculum',
      '#cert-exp-link': 'LinkedIn',
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
      '#cert-bg-label': 'Background',
      '#cert-exp-role': 'Full-Stack Developer',
      '#cert-exp-link': 'LinkedIn',

      // ── About ──
      '#about-tag': '[ ABOUT ]',
      '#about-heading': 'Background',
      '#about-p1': 'I started as a full-stack developer. That background changes how I test — I know how applications are built, which means I know exactly where developers leave gaps.',
      '#about-p2': 'My training covers the full offensive attack surface: web exploitation, Active Directory attacks, network pivoting, privilege escalation and post-exploitation techniques. I don\'t just find vulnerabilities — I explain why they exist, what a real attacker would do with them, and how to fix them correctly.',
      '#about-p3': 'I work remotely with startups and SMBs across Latin America, the US and Europe. Fixed-price engagements, bilingual delivery, and a free re-test to confirm your fixes actually hold.',

      // ── Process ──
      '#process-tag': '[ HOW IT WORKS ]',
      '#process-heading': 'Structured engagement process',
      '#process-lead': 'A documented, fixed-scope methodology from initial assessment through verified remediation.',
      '#process-step1-title': 'Scoping & proposal',
      '#process-step1-desc': 'An initial consultation is conducted to define the test environment, in-scope assets, and rules of engagement. A formal written proposal is provided detailing scope, methodology, timeline, and fixed-price terms — including a mutual NDA — prior to commencement of any testing activity.',
      '#process-step1-d1': 'Written scope document and rules of engagement',
      '#process-step1-d2': 'Fixed-price proposal with defined methodology',
      '#process-step1-d3': 'Mutual NDA executed before testing begins',
      '#process-step1-duration': 'Typical duration: 2–3 business days',
      '#process-step2-title': 'Assessment & testing',
      '#process-step2-desc': 'Manual offensive security assessment conducted in accordance with recognised frameworks (OWASP, MITRE ATT&CK). Findings are classified by severity with supporting evidence. Critical and High severity issues are reported upon confirmation to support timely remediation.',
      '#process-step2-d1': 'Manual testing methodology — no automated scan-only assessments',
      '#process-step2-d2': 'Immediate notification of Critical and High severity findings',
      '#process-step2-d3': 'Status updates provided throughout the engagement',
      '#process-step2-duration': 'Typical duration: 1–2 weeks (scope-dependent)',
      '#process-step3-title': 'Reporting & verification',
      '#process-step3-desc': 'Delivery of a formal, severity-ranked report comprising an executive summary, technical findings with CVSS scoring, and prioritised remediation guidance. A complementary re-test is performed following remediation to validate that corrective measures are effective.',
      '#process-step3-d1': 'Executive summary and technical findings report (PDF)',
      '#process-step3-d2': 'Evidence documentation and remediation guidance per finding',
      '#process-step3-d3': 'Complimentary re-test following remediation',
      '#process-step3-duration': 'Report delivered within 3 business days · Re-test within 2 weeks of fix deployment',
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
        q: 'Why hire you instead of a larger security firm?',
        a: 'Cost, focus, and direct access. As a LATAM-based independent tester, my rates are significantly lower than US/EU firms without sacrificing methodology or quality. You work directly with the person doing the testing — from scoping to final report.'
      }, {
        q: 'What happens if you find a critical vulnerability?',
        a: 'I report it immediately — you don\'t wait for the final report. Critical and high findings are communicated as soon as confirmed so your team can begin remediation while the engagement is still active.'
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
      '.hero-actions .button.primary .btn-label': 'Empezar con una llamada gratuita',
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
      '#cert-bg-label': 'Experiencia',
      '#cert-exp-role': 'Desarrollador Full-Stack',

      // ── About ──
      '#about-tag': '[ SOBRE MÍ ]',
      '#about-heading': 'Sobre mí',
      '#about-p1': 'Empecé como desarrollador full-stack. Ese contexto cambia cómo pruebo — entiendo cómo se construyen las aplicaciones, sé exactamente dónde los desarrolladores dejan brechas, y puedo rastrear cada vulnerabilidad hasta su causa raíz para que la corrección sea precisa y duradera.',
      '#about-p2': 'Mi entrenamiento cubre toda la superficie de ataque ofensivo: explotación web, ataques a Active Directory, pivoting en redes, escalada de privilegios y post-explotación — complementado con análisis SOC, DFIR y respuesta a incidentes. Pensar como defensor me hace mejor atacante: sé qué detectan tus herramientas de monitoreo y qué no.',
      '#about-p3': 'Trabajo de forma remota con startups y PYMEs en Latinoamérica, EE.UU. y Europa. Proyectos a precio fijo, entregables en inglés y español, y un re-test gratuito para confirmar que las correcciones realmente funcionan.',
      // ── Process ──
      '#process-tag': '[ CÓMO FUNCIONA ]',
      '#process-heading': 'Proceso de engagement estructurado',
      '#process-lead': 'Metodología documentada, alcance definido y remediación verificada en cada fase.',
      '#process-step1-title': 'Alcance y propuesta',
      '#process-step1-desc': 'Se realiza una consulta inicial para definir el entorno de prueba, los activos dentro del alcance y las reglas de engagement. Se entrega una propuesta formal por escrito que detalla alcance, metodología, cronograma y precio fijo — incluyendo un NDA mutuo — antes del inicio de cualquier actividad de prueba.',
      '#process-step1-d1': 'Documento de alcance y reglas de engagement',
      '#process-step1-d2': 'Propuesta de precio fijo con metodología definida',
      '#process-step1-d3': 'NDA mutuo firmado antes del inicio de las pruebas',
      '#process-step1-duration': 'Duración habitual: 2–3 días hábiles',
      '#process-step2-title': 'Evaluación y pruebas',
      '#process-step2-desc': 'Evaluación ofensiva manual conforme a marcos reconocidos (OWASP, MITRE ATT&CK). Los hallazgos se clasifican por severidad con evidencia de soporte. Los issues Críticos y Altos se reportan al confirmarse para permitir una remediación oportuna.',
      '#process-step2-d1': 'Metodología de prueba manual — sin entregables basados únicamente en escaneos automatizados',
      '#process-step2-d2': 'Notificación inmediata de hallazgos Críticos y Altos',
      '#process-step2-d3': 'Actualizaciones de estado durante el engagement',
      '#process-step2-duration': 'Duración habitual: 1–2 semanas (según alcance)',
      '#process-step3-title': 'Reporte y verificación',
      '#process-step3-desc': 'Entrega de un reporte formal priorizado por severidad que incluye resumen ejecutivo, hallazgos técnicos con puntuación CVSS y guía de remediación priorizada. Se realiza un re-test complementario tras la remediación para validar la efectividad de las correcciones.',
      '#process-step3-d1': 'Reporte con resumen ejecutivo y hallazgos técnicos (PDF)',
      '#process-step3-d2': 'Evidencia documentada y guía de remediación por hallazgo',
      '#process-step3-d3': 'Re-test complementario tras la remediación',
      '#process-step3-duration': 'Reporte en 3 días hábiles · Re-test dentro de las 2 semanas posteriores al despliegue de correcciones',
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
        q: '¿Por qué contratarte a ti en lugar de una empresa de seguridad?',
        a: 'Costo, enfoque y acceso directo. Como tester independiente en LATAM, mis tarifas son significativamente más bajas que firmas de EE.UU./Europa sin sacrificar metodología ni calidad. Trabajas directamente con quien realiza el testing, de inicio a fin.'
      }, {
        q: '¿Qué pasa si encuentras una vulnerabilidad crítica?',
        a: 'La reporto de inmediato — no esperas al reporte final. Los hallazgos críticos y altos se comunican en cuanto se confirman para que tu equipo pueda iniciar la remediación mientras el proyecto sigue activo.'
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
