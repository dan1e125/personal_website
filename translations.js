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
    metaDescription: 'Freelance penetration tester for startups and SMBs. Web app, Active Directory & network security. HTB Top 1%, 702 lab targets. Remote-first, clear deliverables.',
    ogTitle: 'Daniel Ordonez Arango | Penetration Tester',
    ogDescription: 'Freelance pentester for startups and SMBs. Web app, AD & network pentest. HTB Top 1%, 702 lab targets. Remote engagements, clear reporting.',
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
      '#hero-role': 'Penetration Tester',
      '.avail-text': 'Available for engagements',
      '.hero-copy h2': 'A breach costs more than a pentest.',
      '.hero-copy .lead': 'I find the vulnerabilities in your systems before someone exploits them. Structured methodology, written deliverables, and a report your team can act on.',
      '#spec-web': 'Web Pentest',
      '#spec-ai': 'AI / LLM Security',
      '#spec-ad': 'Active Directory',
      '#spec-net': 'Network Pentest',
      '.hero-actions .button.primary': 'Start with a free call',
      '#stat-paths': 'HTB paths completed',
      '#stat-targets': 'HTB machines pwned',
      '#stat-ranking': 'HTB ranking',

      // ── Terminal ──

      // ── Services ──
      '#services-tag': '[ SERVICES ]',
      '#services-heading': 'What I do',
      '#svc-web-title': 'Web Application Pentest',
      '#svc-web-desc': 'Find exploitable vulnerabilities in your app before a breach does. OWASP-aligned manual testing with a written report your team can act on immediately.',
      '#svc1-del1': 'OWASP Top 10 manual testing',
      '#svc1-del2': 'PDF report with risk rankings',
      '#svc1-del3': 'Remediation recommendations',
      '#svc1-del4': 'Free re-test after fixes',
      '#svc1-price': 'From $2,000 USD',
      '.service-cta': 'Get a quote →',
      '#svc-ad-title': 'Active Directory Pentest',
      '#svc-ad-desc': 'Identify attack paths through your internal network before a threat actor does. BloodHound mapping, credential attacks, and a clear remediation roadmap.',
      '#svc2-del1': 'BloodHound attack path mapping',
      '#svc2-del2': 'Credential attack simulation',
      '#svc2-del3': 'Written remediation roadmap',
      '#svc2-del4': 'Free re-test after fixes',
      '#svc2-price': 'From $3,000 USD',
      '#svc-va-title': 'AI / LLM Security Assessment',
      '#svc-va-desc': 'Red-team your AI and LLM integrations against the OWASP LLM Top 10. Covers prompt injection, jailbreaks, model output attacks, data pipeline vulnerabilities and AI abuse vectors.',
      '#svc3-del1': 'Prompt injection (direct & indirect)',
      '#svc3-del2': 'LLM output & jailbreak testing',
      '#svc3-del3': 'AI data pipeline review',
      '#svc3-del4': 'Abuse vector & misuse simulation',
      '#svc3-del5': 'Free re-test after fixes',
      '#svc3-price': 'From $4,000 USD',
      '#svc-net-title': 'Network Pentest',
      '#svc-net-desc': 'Map your external and internal attack surface, exploit network vulnerabilities, and receive a prioritized remediation report before a real attacker does.',
      '#svc4-del1': 'External & internal recon',
      '#svc4-del2': 'Vulnerability exploitation & PoC',
      '#svc4-del3': 'Lateral movement & segmentation check',
      '#svc4-del4': 'Written findings report',
      '#svc4-del5': 'Free re-test after fixes',
      '#svc4-price': 'From $2,000 USD',
      '#services-copy': 'Remote engagements, clear deliverables, and findings your team can act on.',

      // ── Case Studies ──
      '#cs-tag': '[ CASE STUDIES ]',
      '#case-studies-heading': 'Real engagements, real findings',
      '#cs1-type': 'Web Application · Black-Box',
      '#cs1-client': 'E-commerce · Colombia · 2025',
      '#cs1-crit': '1 Critical',
      '#cs1-high': '3 High',
      '#cs1-total': '10 findings',
      '#cs1-title': 'SEO Injection & Malware Discovery',
      '#cs1-desc': 'Production WordPress site silently compromised. Malicious PHP served gambling content exclusively to Google crawlers — invisible to human visitors — exploiting the client\'s domain authority to rank illegal content on Search.',
      '#cs1-f1': 'PHP backdoor with Google FCrDNS verification serving casino content to Googlebot — active and undetected on production',
      '#cs1-f2': 'Remote content injection via cURL from attacker-controlled Cloudflare Pages subdomain',
      '#cs1-f3': 'Unrestricted file write on web root — persistent attacker-controlled server-side execution',
      '#cs1-outcome': 'All critical and high findings remediated. Re-test passed.',
      '#cs1-link': 'View redacted report →',
      '#cs2-type': 'WordPress · Static Analysis',
      '#cs2-client': 'Corporate Intranet · Colombia · 2025',
      '#cs2-crit': '5 Critical',
      '#cs2-high': '6 High',
      '#cs2-total': '20 findings',
      '#cs2-title': 'WordPress Intranet — Static Code Analysis',
      '#cs2-desc': 'Full source code review of a private WordPress intranet. 20 vulnerabilities across the codebase, server configuration, and third-party integrations — including hardcoded credentials for external HR and payment systems.',
      '#cs2-f1': 'Hardcoded API credentials for HR and payment systems in source code (CVSS 9.8)',
      '#cs2-f2': 'JWT plugin active with secret key undefined — full authentication bypass vector (CVSS 9.3)',
      '#cs2-f3': 'Stored XSS via unescaped third-party API output · Path traversal in file download handler',
      '#cs2-outcome': '20 vulnerabilities documented. Client applied all remediations within 2 weeks.',
      '#cs2-link': 'View redacted report →',
      '#cs3-type': 'WordPress · DB & File Forensics',
      '#cs3-client': 'Automotive Industry · Colombia · 2026',
      '#cs3-crit': '5 Critical',
      '#cs3-high': '3 High',
      '#cs3-total': '9 findings',
      '#cs3-title': 'Active SEO Spam Injection & Full Remediation',
      '#cs3-desc': 'Production WordPress e-commerce site actively compromised. Hidden SEO spam injected into the CMS database across three attack waves, exploiting domain authority to rank 51 illegal gambling domains on Google — invisible to all monitoring tools for over 2 months.',
      '#cs3-f1': 'Hidden HTML injected into CMS database (60 invisible divs + 1px widget) — 51 gambling domains in 5 languages, 3 attack waves, active 2.5 months',
      '#cs3-f2': 'Full 3.8 GB site backup publicly accessible via HTTP without authentication — probable initial attack vector',
      '#cs3-f3': 'Admin credentials hardcoded as Base64 HTTP Basic Auth token in 5 PHP files — 13 exposed instances across codebase',
      '#cs3-outcome': 'All 9 findings remediated in a single session. 8/8 automated verification checks passed.',
      '#cs3-link': 'View redacted report →',
      '#cs-sub': 'Real engagements — findings, methodology and remediation guidance, redacted for confidentiality.',

      // ── Certifications ──
      '#certifications-tag': '[ CERTIFICATIONS ]',
      '#certifications-heading': 'Training & Experience',
      '#cert-completed-label': 'Completed',
      '#cert-htb-web': 'Web Penetration Tester',
      '#cert-htb-pt': 'Penetration Tester',
      '#cert-htb-soc': 'SOC Analyst',
      '#cert-cjca-title': 'Junior Cybersecurity Analyst',
      '#cert-exams-note': 'Exams pending',
      '#cert-transcript-link': 'View HTB Transcript →',
      '#cert-transcript-link': 'View HTB Transcript →',
      '#cert-progress-label': 'In Progress',
      '#cert-htb-ad': 'Active Directory Pentesting Expert',
      '#cert-htb-ai': 'Offensive AI Expert',
      '#cert-htb-wifi': 'Wi-Fi Pentesting Expert',
      '#cert-bg-label': 'Work Experience',
      '#cert-exp-role': 'Full-Stack Developer · Cybersecurity',
      '#cert-exp-link': 'Verify on LinkedIn →',

      // ── About ──
      '#about-tag': '[ ABOUT ]',
      '#about-heading': 'Background',
      '#about-p1': 'I started as a full-stack developer. That background changes how I test — I know how applications are built, which means I know exactly where developers leave gaps.',
      '#about-p2': 'My training covers the full offensive attack surface: web exploitation, Active Directory attacks, network pivoting, privilege escalation and post-exploitation techniques. I don\'t just find vulnerabilities — I explain why they exist, what a real attacker would do with them, and how to fix them correctly.',
      '#about-p3': 'I work remotely with startups and SMBs across Latin America, the US and Europe. Fixed-price engagements, bilingual delivery, and a free re-test to confirm your fixes actually hold.',

      // ── Process ──
      '#process-heading': 'Simple, end-to-end process',
      '#process-step1-title': 'Scoping Call',
      '#process-step1-desc': 'Free 30-minute call to understand your environment, define targets and agree on rules of engagement. No commitment required.',
      '#process-step2-title': 'Proposal & NDA',
      '#process-step2-desc': 'You receive a written proposal with scope, timeline, methodology and fixed price. NDA signed before any work begins.',
      '#process-step3-title': 'Active Testing',
      '#process-step3-desc': 'Active testing phase. You get progress updates throughout. Any critical findings are reported immediately — no waiting for the final report.',
      '#process-step4-title': 'Report & Re-test',
      '#process-step4-desc': 'Detailed PDF report with risk ratings, proof-of-concept and remediation steps. Free re-test included to verify fixes were applied correctly.',
      '#process .section-heading .section-tag': '[ HOW IT WORKS ]',
      '#process-copy': 'A straightforward engagement cycle designed to minimize disruption and maximize actionable output. Most engagements complete in 1–3 weeks from scoping call to final report.',

      // ── Pricing / Quote calculator ──
      '#quote-tag': '[ PRICING ]',
      '#quote-heading': 'Get an instant estimate',
      '#ql-service': 'Service',
      '#qcs-name-pentest_web': 'Web App Pentest',
      '#qcs-price-pentest_web': 'From $2,000',
      '#qcs-name-pentest_ad': 'Active Directory',
      '#qcs-price-pentest_ad': 'From $3,000',
      '#qcs-name-ai_llm': 'AI / LLM',
      '#qcs-price-ai_llm': 'From $4,000',
      '#qcs-name-pentest_ai': 'Network Pentest',
      '#qcs-price-pentest_ai': 'From $2,000',
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
      '#quote-copy': 'Fill in the details below to get an instant price range. A formal proposal will be sent after a scoping call.',

      // ── Contact ──
      '.contact-form-card .section-tag': '[ SEND A MESSAGE ]',
      'label[for="cf-name"]': 'Name',
      'label[for="cf-email"]': 'Email',
      'label[for="cf-message"]': 'Message',
      '.cf-btn-text': 'Send message',
      '#contact .section-tag': '[ CONTACT ]',
      '#contact h3': 'Direct message',
      '.cf-heading': 'Direct message'
    },

    // ── FAQ ──
    faq: {
      tag: '[ FAQ ]',
      heading: 'Common questions',
      copy: 'Everything you need to know before booking a scoping call.',
      nav: 'FAQ',
      groups: ['What I do', 'Pricing', 'Process', 'Credentials'],
      items: [{
        q: 'What penetration testing services do you offer?',
        a: 'Web application penetration testing, Active Directory security assessments, network infrastructure pentests, and AI / LLM security assessments. All engagements are remote-first, include a detailed PDF report and a free re-test after fixes.'
      }, {
        q: 'Are you certified as a penetration tester?',
        a: 'I have completed the CPTS, CDSA, CJCA and CWEE paths on HTB Academy and rank in the Top 1% globally on Hack The Box with 702 machines pwned. You can verify all training via my HTB profile.'
      }, {
        q: 'How much does a penetration test cost?',
        a: 'An AI / LLM Security Assessment starts from $4,000 USD, a web app pentest from $2,000, a network pentest from $2,000, and an Active Directory pentest from $3,000. Use the pricing calculator above for an instant estimate.'
      }, {
        q: 'How long does a penetration test take?',
        a: 'Most engagements complete in 1–3 weeks from the scoping call to the final report. An AI / LLM security assessment for focused integrations can be delivered in 3–5 days. Timeline is agreed and fixed in the written proposal before any work begins.'
      }, {
        q: 'What does a pentest report include?',
        a: 'Every report includes an executive summary, detailed technical findings with evidence, CVSS risk ratings, reproducible proof-of-concept steps, and prioritized remediation recommendations. A free re-test is included to verify fixes.'
      }, {
        q: 'Is the first call free? What happens during it?',
        a: 'Yes, the scoping call is free and carries no commitment. In 30 minutes we define your environment, agree on targets and rules of engagement, and determine the right service. You receive a written proposal with a fixed price afterwards.'
      }, {
        q: 'What happens if you find a critical vulnerability during the engagement?',
        a: 'I report it immediately — you don\'t wait for the final report. Critical and high-severity findings are communicated as soon as they are confirmed, so your team can begin remediation while the engagement is still active. Everything is documented in the final report regardless.'
      }, {
        q: 'Is an NDA signed before work begins?',
        a: 'Yes. A mutual Non-Disclosure Agreement is signed before any scoping call or work begins. All findings, system details and client information are kept strictly confidential. No data or results are ever shared with third parties.'
      }, {
        q: 'Why hire you instead of a larger security firm?',
        a: 'Three reasons: cost, focus, and direct access. As a LATAM-based independent tester, my rates are significantly lower than US or EU firms — without sacrificing methodology or report quality. You work directly with the person doing the testing, not a project manager. Every engagement is handled by me personally from scoping to final report.'
      }, {
        q: 'What if no vulnerabilities are found?',
        a: 'A clean report is still a valuable result. It provides documented evidence that your controls are working and your attack surface is hardened — useful for compliance, investor due diligence, or internal audits. You still receive a full technical report detailing what was tested, how, and what was confirmed secure.'
      }]
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
        pentest_ad: 'Select Active Directory Pentest, from $3,000',
        ai_llm: 'Select AI / LLM Security, from $4,000',
        pentest_ai: 'Select Network Pentest, from $2,000'
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
        },
        ai_llm: {
          small: '1–3 AI integrations',
          medium: '4–8 AI integrations',
          large: 'Full AI system'
        },
        pentest_ai: {
          small: '1–10 IPs/hosts',
          medium: '11–50 IPs/hosts',
          large: '50+ IPs/hosts'
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
        },
        ai_llm: {
          small: '3–5 days',
          medium: '1 week',
          large: '2 weeks'
        },
        pentest_ai: {
          small: '3–5 days',
          medium: '1–2 weeks',
          large: '2–3 weeks'
        }
      }
    }
  },
  es: {
    // ── Document meta ──
    documentTitle: 'Daniel Ordonez Arango | Pentester',
    metaDescription: 'Pentester freelance para startups y PYMEs. Seguridad en apps web, Active Directory y redes. HTB Top 1%, 702 objetivos de laboratorio. Trabajo remoto, reportes claros.',
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
      '#hero-role': 'Penetration Tester',
      '.avail-text': 'Disponible para proyectos',
      '.hero-copy h2': 'Una brecha cuesta más que un pentest.',
      '.hero-copy .lead': 'Encuentro las vulnerabilidades en tus sistemas antes de que alguien las explote. Metodología estructurada, entregables escritos y un reporte que tu equipo puede ejecutar.',
      '#spec-web': 'Pentest Web',
      '#spec-ai': 'AI / LLM Security',
      '#spec-ad': 'Active Directory',
      '#spec-net': 'Pentest de Redes',
      '.hero-actions .button.primary': 'Empezar con una llamada gratuita',
      '#stat-paths': 'Paths HTB completados',
      '#stat-targets': 'Máquinas HTB comprometidas',
      '#stat-ranking': 'Ranking HTB',
      '.hero-actions .button.gold[href="htb-academy-student-transcript.pdf"]': 'Descargar transcript',

      // ── Terminal ──

      // ── Services ──
      '#services-tag': '[ SERVICIOS ]',
      '#services-heading': 'Lo que hago',
      '#svc-web-title': 'Pentest de Aplicación Web',
      '#svc-web-desc': 'Encuentra vulnerabilidades explotables en tu aplicación antes de que ocurra una brecha. Testing manual alineado con OWASP con un reporte que tu equipo puede implementar de inmediato.',
      '#svc1-del1': 'Testing manual OWASP Top 10',
      '#svc1-del2': 'Informe PDF con clasificación de riesgos',
      '#svc1-del3': 'Recomendaciones de remediación',
      '#svc1-del4': 'Re-test gratuito tras correcciones',
      '#svc1-price': 'Desde $2,000 USD',
      '.service-cta': 'Solicitar cotización →',
      '#svc-ad-title': 'Pentest de Active Directory',
      '#svc-ad-desc': 'Identifica rutas de ataque en tu red interna antes de que lo haga un actor de amenaza. Mapeo con BloodHound, simulación de ataques de credenciales y una hoja de ruta de remediación clara.',
      '#svc2-del1': 'Mapeo de rutas de ataque con BloodHound',
      '#svc2-del2': 'Simulación de ataques de credenciales',
      '#svc2-del3': 'Hoja de ruta de remediación escrita',
      '#svc2-del4': 'Re-test gratuito tras correcciones',
      '#svc2-price': 'Desde $3,000 USD',
      '#svc-va-title': 'Evaluación de Seguridad AI / LLM',
      '#svc-va-desc': 'Evaluación red-team de tus integraciones de IA y LLM frente al OWASP LLM Top 10. Cubre prompt injection, jailbreaks, ataques de salida del modelo, vulnerabilidades en el pipeline de datos y vectores de abuso de IA.',
      '#svc3-del1': 'Prompt injection (directa e indirecta)',
      '#svc3-del2': 'Testing de outputs y jailbreaks LLM',
      '#svc3-del3': 'Revisión del pipeline de datos IA',
      '#svc3-del4': 'Simulación de vectores de abuso',
      '#svc3-del5': 'Re-test gratuito tras correcciones',
      '#svc3-price': 'Desde $4,000 USD',
      '#svc-net-title': 'Pentest de Redes',
      '#svc-net-desc': 'Identifica servicios expuestos, configuraciones incorrectas, rutas de movimiento lateral y vulnerabilidades explotables en tu red interna y externa.',
      '#svc4-del1': 'Reconocimiento externo e interno',
      '#svc4-del2': 'Explotación de vulnerabilidades y PoC',
      '#svc4-del3': 'Verificación de movimiento lateral y segmentación',
      '#svc4-del4': 'Informe de hallazgos escrito',
      '#svc4-del5': 'Re-test gratuito tras correcciones',
      '#svc4-price': 'Desde $2,000 USD',
      '#services-copy': 'Proyectos remotos, entregables claros, hallazgos que tu equipo puede corregir.',

      // ── Case Studies ──
      '#cs-tag': '[ CASOS DE ESTUDIO ]',
      '#case-studies-heading': 'Proyectos reales, hallazgos reales',
      '#cs1-type': 'Aplicación Web · Black-Box',
      '#cs1-client': 'E-commerce · Colombia · 2025',
      '#cs1-crit': '1 Crítico',
      '#cs1-high': '3 Altos',
      '#cs1-total': '10 hallazgos',
      '#cs1-title': 'Inyección SEO y Descubrimiento de Malware',
      '#cs1-desc': 'Sitio WordPress de producción comprometido silenciosamente. Código PHP malicioso servía contenido de apuestas exclusivamente a los crawlers de Google — invisible para visitantes humanos — explotando la autoridad del dominio del cliente para posicionar contenido ilegal en los resultados de búsqueda.',
      '#cs1-f1': 'Backdoor PHP con verificación FCrDNS de Google sirviendo contenido de casino a Googlebot — activo y sin detectar en producción',
      '#cs1-f2': 'Inyección de contenido remoto vía cURL desde subdominio Cloudflare Pages controlado por el atacante',
      '#cs1-f3': 'Escritura irrestricta de archivos en la raíz web — ejecución de código persistente del lado del servidor',
      '#cs1-outcome': 'Todos los hallazgos críticos y altos remediados. Re-test aprobado.',
      '#cs1-link': 'Ver reporte redactado →',
      '#cs2-type': 'WordPress · Análisis Estático',
      '#cs2-client': 'Intranet Corporativa · Colombia · 2025',
      '#cs2-crit': '5 Críticos',
      '#cs2-high': '6 Altos',
      '#cs2-total': '20 hallazgos',
      '#cs2-title': 'Intranet WordPress — Análisis Estático de Código',
      '#cs2-desc': 'Revisión completa del código fuente de una intranet WordPress privada. 20 vulnerabilidades en el código base, configuración del servidor e integraciones de terceros — incluyendo credenciales hardcodeadas para sistemas externos de RRHH y pagos.',
      '#cs2-f1': 'Credenciales de API hardcodeadas para sistemas de RRHH y pagos en código fuente (CVSS 9.8)',
      '#cs2-f2': 'Plugin JWT activo con clave secreta indefinida — vector de bypass de autenticación completo (CVSS 9.3)',
      '#cs2-f3': 'XSS almacenado vía salida de API de terceros sin escapar · Path traversal en manejador de descarga',
      '#cs2-outcome': '20 vulnerabilidades documentadas. El cliente aplicó todas las correcciones en 2 semanas.',
      '#cs2-link': 'Ver reporte redactado →',
      '#cs3-type': 'WordPress · Forense de BD y Archivos',
      '#cs3-client': 'Industria Automotriz · Colombia · 2026',
      '#cs3-crit': '5 Críticos',
      '#cs3-high': '3 Altos',
      '#cs3-total': '9 hallazgos',
      '#cs3-title': 'Inyección de Spam SEO Activo y Remediación Completa',
      '#cs3-desc': 'Sitio WordPress de e-commerce comprometido activamente. Un actor inyectó spam SEO oculto en la base de datos CMS en tres oleadas de ataque, explotando la autoridad del dominio para posicionar 51 dominios ilegales de apuestas en Google — invisible para todas las herramientas de monitoreo por más de 2 meses.',
      '#cs3-f1': 'HTML oculto inyectado en la BD CMS (60 divs invisibles + widget de 1px) — 51 dominios de apuestas en 5 idiomas, 3 oleadas de ataque, activo 2.5 meses',
      '#cs3-f2': 'Backup completo del sitio (3.8 GB) accesible vía HTTP sin autenticación — probable vector de ataque inicial',
      '#cs3-f3': 'Credenciales de admin hardcodeadas como token HTTP Basic Auth en Base64 en 5 archivos PHP — 13 instancias expuestas',
      '#cs3-outcome': 'Los 9 hallazgos remediados en una sola sesión. 8/8 verificaciones automáticas aprobadas.',
      '#cs3-link': 'Ver reporte redactado →',
      '#cs-sub': 'Proyectos reales — hallazgos, metodología y guía de remediación, anonimizados por confidencialidad.',

      // ── Certifications ──
      '#certifications-tag': '[ CERTIFICACIONES ]',
      '#certifications-heading': 'Formación y Experiencia',
      '#cert-completed-label': 'Completados',
      '#cert-htb-web': 'Web Penetration Tester',
      '#cert-htb-pt': 'Penetration Tester',
      '#cert-htb-soc': 'SOC Analyst',
      '#cert-cjca-title': 'Analista Junior de Ciberseguridad',
      '#cert-exams-note': 'Exámenes pendientes',
      '#cert-transcript-link': 'Ver transcript HTB →',
      '#cert-transcript-link': 'Ver transcript HTB →',
      '#cert-progress-label': 'En progreso',
      '#cert-htb-ad': 'Active Directory Pentesting Expert',
      '#cert-htb-ai': 'Offensive AI Expert',
      '#cert-htb-wifi': 'Wi-Fi Pentesting Expert',
      '#cert-bg-label': 'Experiencia laboral',
      '#cert-exp-role': 'Desarrollador Full-Stack · Ciberseguridad',
      '#cert-exp-link': 'Ver en LinkedIn →',

      // ── About ──
      '#about-tag': '[ SOBRE MÍ ]',
      '#about-heading': 'Sobre mí',
      '#about-p1': 'Empecé como desarrollador full-stack. Ese contexto cambia cómo pruebo — entiendo cómo se construyen las aplicaciones y sé exactamente dónde los desarrolladores dejan brechas.',
      '#about-p2': 'Mi entrenamiento cubre toda la superficie de ataque ofensivo: explotación web, ataques a Active Directory, pivoting en redes, escalada de privilegios y técnicas de post-explotación. No solo encuentro vulnerabilidades — explico por qué existen, qué haría un atacante real con ellas y cómo corregirlas correctamente.',
      '#about-p3': 'Trabajo de forma remota con startups y PYMEs en Latinoamérica, EE.UU. y Europa. Proyectos a precio fijo, entregables en inglés y español, y un re-test gratuito para confirmar que las correcciones realmente funcionan.',
      '#about-hl5-title': 'NDA desde el primer día',

      // ── Process ──
      '#process-heading': 'Un proceso simple de principio a fin',
      '#process-step1-title': 'Llamada de alcance',
      '#process-step1-desc': 'Llamada gratuita de 30 min para definir objetivos y reglas de engagement. Sin compromiso.',
      '#process-step2-title': 'Propuesta y NDA',
      '#process-step2-desc': 'Recibirás una propuesta escrita con alcance, cronograma, metodología y precio fijo. El NDA se firma antes de iniciar.',
      '#process-step3-title': 'Prueba Activa',
      '#process-step3-desc': 'Fase de pruebas activas con actualizaciones de progreso. Hallazgos críticos notificados de inmediato.',
      '#process-step4-title': 'Reporte y re-test',
      '#process-step4-desc': 'Reporte PDF con clasificación de riesgos, PoC y pasos de remediación. Re-test gratuito incluido.',
      '#process .section-heading .section-tag': '[ CÓMO FUNCIONA ]',
      '#process-copy': 'Un ciclo de trabajo claro, diseñado para minimizar interrupciones y maximizar resultados concretos y aplicables. La mayoría de los proyectos se completan en 1–3 semanas desde la llamada de alcance hasta el informe final.',

      // ── Pricing / Quote calculator ──
      '#quote-tag': '[ PRECIOS ]',
      '#quote-heading': 'Obtén una estimación al instante',
      '#ql-service': 'Servicio',
      '#qcs-name-pentest_web': 'Pentest de Aplicación Web',
      '#qcs-price-pentest_web': 'Desde $2,000',
      '#qcs-name-pentest_ad': 'Directorio Activo',
      '#qcs-price-pentest_ad': 'Desde $3,000',
      '#qcs-name-ai_llm': 'AI / LLM',
      '#qcs-price-ai_llm': 'Desde $4,000',
      '#qcs-name-pentest_ai': 'Pentest de Redes',
      '#qcs-price-pentest_ai': 'Desde $2,000',
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
      '#see-pricing-cta': 'Ver precios →',
      '#quote-copy': 'Completa los detalles para obtener un rango de precio al instante. Se enviará una propuesta formal después de la llamada de alcance.',

      // ── Contact ──
      '.contact-form-card .section-tag': '[ ENVIAR MENSAJE ]',
      'label[for="cf-name"]': 'Nombre',
      'label[for="cf-email"]': 'Correo',
      'label[for="cf-message"]': 'Mensaje',
      '.cf-btn-text': 'Enviar mensaje',
      '#contact .section-tag': '[ CONTACTO ]',
      '#contact h3': 'Contáctame',
      '#cg-profiles': 'Perfiles online',
      '.contact-intro': 'Disponible para proyectos remotos en todo el mundo. Respondo en menos de 24h. La primera llamada es gratuita — definimos alcance, cronograma y compatibilidad antes de cualquier acuerdo.',
      '.contact-card-phone-title': 'Teléfono',
      '.contact-card-phone-copy': 'Llamada directa — respuesta inmediata',
      '.cg-li-title': 'LinkedIn',
      '.cg-li-desc': 'Perfil profesional y red de contactos',
      '.cg-gh-title': 'GitHub',
      '.cg-gh-desc': 'Código, proyectos y huella técnica',
      '.cf-heading': 'Mensaje directo'
    },

    // ── FAQ ──
    faq: {
      tag: '[ FAQ ]',
      heading: 'Preguntas comunes',
      copy: 'Todo lo que necesitas saber antes de agendar una llamada de alcance.',
      nav: 'FAQ',
      groups: ['Lo que hago', 'Precios', 'Proceso', 'Credenciales'],
      items: [{
        q: '¿Qué servicios de pentesting ofreces?',
        a: 'Pentest de aplicaciones web, evaluaciones de Active Directory, pentests de infraestructura de red y evaluaciones de seguridad AI / LLM. Todos los proyectos son remotos, incluyen un reporte PDF detallado y un re-test gratuito después de las correcciones.'
      }, {
        q: '¿Estás certificado como pentester?',
        a: 'Completé los paths CPTS, CDSA, CJCA y CWEE en HTB Academy y estoy en el Top 1% global de Hack The Box con 702 máquinas pwned. Puedes verificar toda la formación a través de mi perfil HTB.'
      }, {
        q: '¿Cuánto cuesta un pentest?',
        a: 'Una evaluación de seguridad AI / LLM parte desde $4,000 USD, un pentest de aplicación web desde $2,000, un pentest de red desde $2,000 y un pentest de Active Directory desde $3,000. Usa la calculadora de precios para obtener una estimación al instante.'
      }, {
        q: '¿Cuánto tiempo tarda un pentest?',
        a: 'La mayoría de los proyectos se completan en 1–3 semanas desde la llamada de alcance hasta el informe final. Una evaluación de seguridad AI / LLM para integraciones puntuales puede entregarse en 3–5 días. El cronograma se acuerda y fija por escrito antes de comenzar.'
      }, {
        q: '¿Qué incluye un informe de pentest?',
        a: 'Cada reporte incluye un resumen ejecutivo, hallazgos técnicos detallados con evidencia, clasificación de riesgos CVSS, pasos de explotación reproducibles y recomendaciones de remediación priorizadas. Se incluye un re-test gratuito para verificar las correcciones.'
      }, {
        q: '¿La primera llamada es gratuita? ¿Qué sucede en ella?',
        a: 'Sí, la llamada de alcance es gratuita y sin compromiso. En 30 minutos definimos tu entorno, acordamos objetivos y reglas de engagement, y determinamos el servicio adecuado. Recibes una propuesta escrita con precio fijo después.'
      }, {
        q: '¿Qué pasa si encuentras una vulnerabilidad crítica durante el pentest?',
        a: 'La reporto de inmediato — no tienes que esperar al informe final. Los hallazgos críticos y de alta severidad se comunican en cuanto se confirman, para que tu equipo pueda comenzar la remediación mientras el proyecto sigue activo. Todo queda documentado en el informe final.'
      }, {
        q: '¿Se firma un NDA antes de comenzar el trabajo?',
        a: 'Sí. Se firma un Acuerdo de No Divulgación (NDA) mutuo antes de cualquier llamada de alcance o inicio de trabajo. Todos los hallazgos, detalles del sistema e información del cliente se mantienen estrictamente confidenciales. Ningún dato ni resultado se comparte con terceros.'
      }, {
        q: '¿Por qué contratarte a ti en lugar de una empresa de seguridad?',
        a: 'Tres razones: costo, enfoque y acceso directo. Como tester independiente basado en LATAM, mis tarifas son significativamente más bajas que las firmas de EE.UU. o Europa — sin sacrificar metodología ni calidad del reporte. Tratas directamente con la persona que hace el trabajo, no con un project manager. Cada proyecto lo manejo yo personalmente desde el alcance hasta el informe final.'
      }, {
        q: '¿Qué pasa si no se encuentran vulnerabilidades?',
        a: 'Un reporte limpio sigue siendo un resultado valioso. Proporciona evidencia documentada de que tus controles funcionan y tu superficie de ataque está protegida — útil para cumplimiento normativo, due diligence con inversores o auditorías internas. Igual recibes un reporte técnico completo detallando qué se probó, cómo y qué se confirmó como seguro.'
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
        pentest_ad: 'Seleccionar Pentest Active Directory, desde $3,000',
        ai_llm: 'Seleccionar Seguridad AI / LLM, desde $4,000',
        pentest_ai: 'Seleccionar Pentest de Redes, desde $2,000'
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
        },
        ai_llm: {
          small: '1–3 integ. IA',
          medium: '4–8 integ. IA',
          large: 'Sistema IA completo'
        },
        pentest_ai: {
          small: '1–10 IPs/hosts',
          medium: '11–50 IPs/hosts',
          large: '50+ IPs/hosts'
        }
      },
      svcNames: {
        pentest_web: 'Pentest de Aplicación Web',
        pentest_ad: 'Directorio Activo',
        ai_llm: 'Seguridad AI / LLM',
        pentest_ai: 'Pentest de Redes'
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
        },
        ai_llm: {
          small: '3–5 días',
          medium: '1 semana',
          large: '2 semanas'
        },
        pentest_ai: {
          small: '3–5 días',
          medium: '1–2 semanas',
          large: '2–3 semanas'
        }
      }
    }
  }
}
