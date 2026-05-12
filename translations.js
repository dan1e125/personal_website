// ── i18n — EN & ES translations ─────────────────────────────────────
// Edit text here to update all visible copy on the site.
// Loaded before script.js; exposes global `translations` object.
var SITE_STATS = {
  targets:  702,
  paths:    12,
  ranking:  'Top 1%',
  modules:  102
};

var translations={en:{documentTitle:'Daniel Ordonez Arango | Penetration Tester',metaDescription:'Freelance penetration tester for startups and SMBs. Web app, Active Directory & network security. HTB Top 1%, 702 targets. Remote-first, clear deliverables.',ogTitle:'Daniel Ordonez Arango | Penetration Tester',ogDescription:'Freelance pentester for startups and SMBs. Web app, AD & network pentest. HTB Top 1%, 702 targets. Remote engagements, clear reporting.',selectors:{'.topnav a[href="#about"]':'About','.topnav a[href="#certifications"]':'Credentials','.topnav a[href="#contact"]':'Contact','.hero-copy .lead':'I help startups and SMBs find exploitable vulnerabilities before attackers do. From first contact to final report — I handle everything. You get clear findings, real risk ratings, and a report your team can start fixing the same day.','#spec-web':'Web Pentest','#spec-ai':'AI / LLM Security','#spec-ad':'Active Directory','#spec-net':'Network Pentest','.hero-actions .button.primary':'Request a free scoping call','.hero-actions .button.gold[href="daniel_cv_new.pdf"]':'View original CV','.hero-actions .button.gold[href="htb-academy-student-transcript.pdf"]':'Verified by HTB Academy','#stat-paths':'HTB paths completed','#stat-targets':'Targets compromised','#stat-ranking':'HTB ranking','#stat-modules':'Modules completed',
    // ── Quote result panel labels ──
    '#qr-svc-label':'Selected service',
    '#qr-label':'Estimated range',
    '#qr-scope-key':'Scope',
    '#qr-cplx-key':'Complexity',
    '#qr-tbox-key':'Testing',
    '#qr-duration-key':'Duration',
    '#qc-disclaimer':'Automated estimate only — not a binding quote.<br>A signed authorization agreement is required before any engagement begins.',
    // ── Service deliverables ──
    '#svc1-del1':'OWASP Top 10 manual testing',
    '#svc1-del2':'PDF report with risk rankings',
    '#svc1-del3':'Remediation recommendations',
    '#svc1-del4':'Free re-test after fixes',
    '#svc2-del1':'BloodHound attack path mapping',
    '#svc2-del2':'Credential attack simulation',
    '#svc2-del3':'Written remediation roadmap',
    '#svc2-del4':'Free re-test after fixes',
    '#svc3-del1':'Prompt injection (direct & indirect)',
    '#svc3-del2':'LLM output & jailbreak testing',
    '#svc3-del3':'AI data pipeline review',
    '#svc3-del4':'Abuse vector & misuse simulation',
    '#svc3-del5':'Free re-test after fixes',
    '#svc4-del1':'External & internal recon',
    '#svc4-del2':'Vulnerability exploitation & PoC',
    '#svc4-del3':'Lateral movement & segmentation check',
    '#svc4-del4':'Written findings report',
    '#svc4-del5':'Free re-test after fixes',
    // ── QC service card labels ──
    '#qcs-name-pentest_web':'Web App Pentest',
    '#qcs-price-pentest_web':'From $3,000',
    '#qcs-name-pentest_ad':'Active Directory',
    '#qcs-price-pentest_ad':'From $5,000',
    '#qcs-name-ai_llm':'AI / LLM',
    '#qcs-price-ai_llm':'From $3,500',
    '#qcs-name-pentest_ai':'Network Pentest',
    '#qcs-price-pentest_ai':'From $3,500','#quote-heading':'Price your engagement in 60 seconds','#quote-copy':'Fill in the details below to get an instant price range. A formal proposal will be sent after a scoping call.','#ql-service':'Service','#terminal-panel-label':'[ STATUS PANEL ]','#svc1-price':'From $3,000 USD','#svc2-price':'From $5,000 USD','#svc3-price':'From $3,500 USD','#svc4-price':'From $3,500 USD','#ql-env-params':'Environment parameters','#tgl-small-label':'Small','#tgl-small-desc':'1–5 targets','#tgl-medium-label':'Medium','#tgl-medium-desc':'6–15 targets','#tgl-large-label':'Large','#tgl-large-desc':'15+ targets','#tgl-low-cplx':'Standard','#tgl-low-cplx-desc':'Common stack','#tgl-medium-cplx':'Custom','#tgl-medium-cplx-desc':'Proprietary logic','#tgl-high-cplx':'Enterprise','#tgl-high-cplx-desc':'Complex / hybrid','#tgl-black-tbox':'Black-box','#tgl-black-tbox-desc':'No prior access','#tgl-grey-tbox':'Grey-box','#tgl-grey-tbox-desc':'Partial credentials','#tgl-white-tbox':'White-box','#tgl-white-tbox-desc':'Full access + code','#ql-scope':'Scope size','#ql-complexity':'Complexity','#ql-tbox':'Testing type','#about-tag':'[ ABOUT ]','#about-heading':'Background','#contact .section-tag':'[ CONTACT ]','#tbox-info-black-title':'Black-box','#tbox-info-black-desc':'No prior knowledge of the target. Simulates a real external attacker. Ideal for testing your defenses from an adversarial perspective.','#tbox-info-black-rec':'✓ Most common','#tbox-info-grey-title':'Grey-box','#tbox-info-grey-desc':'Partial credentials or context provided. Simulates a compromised account or insider threat. Best coverage-to-cost ratio.','#tbox-info-grey-rec':'✓ Recommended','#tbox-info-white-title':'White-box','#tbox-info-white-desc':'Full access + source code provided. Maximum depth and coverage. Best for thorough audits or when regulations require it.','#tbox-info-white-rec':'✓ Most thorough','#qc-tbox-help-btn':'?',
    '#qc-main-cta':'Book a free scoping call <span class="qc-cta-arrow">→</span>','.hero-copy h2':'Penetration tester specialized in web apps, AI / LLM & Active Directory.','.service-cta':'Get a quote →',
    // ── Nav ──
    '.topnav a[href="#services"]':'Services',
    '.topnav a[href="#process"]':'Process',
    '.topnav a[href="#quote"]':'Pricing',
    // ── Hero extras ──
    '.avail-text':'Available for engagements',
    // ── Terminal / Status ──
    '.terminal-label':'daniel@portfolio:~$ ./profile_scan',
    '#sg-status-lbl':'Status',
    '#sg-status-val':'ACTIVE',
    '#sg-mode-lbl':'Response',
    '#sg-mode-val':'< 24h',
    '#sg-loc-lbl':'Location',
    '#sg-loc-val':'REMOTE',
    '#sg-scope-lbl':'Scope',
    '#sg-scope-val':'WEB / AD / NET / AI',
    '#sg-avail-lbl':'Availability',
    '#sg-avail-val':'OPEN',
    '#sg-lang-lbl':'Languages',
    '#sg-lang-val':'EN / ES',
    // ── Services ──
    '#services-tag':'[ SERVICES ]',
    '#services-heading':'Services',
    '#services-copy':'Remote engagements, clear deliverables, and findings your team can act on.',
    '#svc-web-title':'Web Application Pentest',
    '#svc-web-desc':'Find exploitable vulnerabilities in your app before a breach does. OWASP-aligned manual testing with a written report your team can act on immediately.',
    '#svc-ad-title':'Active Directory Pentest',
    '#svc-ad-desc':'Identify attack paths through your internal network before a threat actor does. BloodHound mapping, credential attacks, and a clear remediation roadmap.',
    '#svc-va-title':'AI / LLM Security Assessment',
    '#svc-va-desc':'Red-team your AI and LLM integrations against the OWASP LLM Top 10. Covers prompt injection, jailbreaks, model output attacks, data pipeline vulnerabilities and AI abuse vectors.',
    '#svc-net-title':'Network Pentest',
    '#svc-net-desc':'Map your external and internal attack surface, exploit network vulnerabilities, and receive a prioritized remediation report before a real attacker does.',
    // ── Process ──
    '#process .section-heading .section-tag':'[ HOW IT WORKS ]',
    '#process-heading':'From first contact to final report',
    '#process-copy':'A straightforward engagement cycle designed to minimize disruption and maximize actionable output. Most engagements complete in 1–3 weeks from scoping call to final report.',
    '#process-step1-title':'Scoping Call',
    '#process-step1-desc':'Free 30-minute call to understand your environment, define targets and agree on rules of engagement. No commitment required.',
    '#process-step2-title':'Proposal & NDA',
    '#process-step2-desc':'You receive a written proposal with scope, timeline, methodology and fixed price. NDA signed before any work begins.',
    '#process-step3-title':'Engagement',
    '#process-step3-desc':'Active testing phase. You get progress updates throughout. Any critical findings are reported immediately — no waiting for the final report.',
    '#process-step4-title':'Report & Re-test',
    '#process-step4-desc':'Detailed PDF report with risk ratings, proof-of-concept and remediation steps. Free re-test included to verify fixes were applied correctly.',
    // ── Pricing ──
    '#quote-tag':'[ PRICING ]',
    // ── Certifications ──
    '#certifications-tag':'[ CERTIFICATIONS ]',
    '#certifications-heading':'Training, Certifications & Experience',
    '#cert-exp-label':'Professional Experience',
    '#cert-exp-role':'Full-Stack Developer & Security Specialist · Ongoing',
    '#cert-exp-link':'Verify on LinkedIn →',
    '#cert-external-label':'Professional Certifications',
    '#cert-ibm-title':'IBM Cybersecurity Analyst Professional Certificate',
    '#cert-google-title':'Google Cybersecurity Professional Certificate',
    '#cert-credly-link':'Verify on Credly →',
    '#cert-htb-tag':'HTB Paths Completed',
    '#cert-cjca-title':'Junior Cybersecurity Analyst',
    '#cert-transcript-link':'View HTB Transcript →',
    // ── About ──
    '#about-p1':'I started as a full-stack developer. That background changes how I test — I know how applications are built, which means I know exactly where developers leave gaps.',
    '#about-p2':'My training covers the full offensive attack surface: web exploitation, Active Directory attacks, network pivoting, privilege escalation and post-exploitation techniques. I don\'t just find vulnerabilities — I explain why they exist, what a real attacker would do with them, and how to fix them correctly.',
    '#about-p3':'I work remotely with startups and SMBs across Latin America, the US and Europe. Fixed-price engagements, bilingual delivery, and a free re-test to confirm your fixes actually hold.',
    // ── Contact ──
    '#contact h3':'Direct message',
    '.contact-form-card .section-tag':'[ SEND A MESSAGE ]',
    '.cf-heading':'Direct message',
    'label[for="cf-name"]':'Name',
    'label[for="cf-email"]':'Email',
    'label[for="cf-message"]':'Message',
    '.cf-btn-text':'Send message',
    // ── Case Studies ──
    '.topnav a[href="#case-studies"]':'Cases',
    '#cs-tag':'[ CASE STUDIES ]',
    '#case-studies-heading':'Redacted Assessment Reports',
    '#cs-sub':'Real engagements — findings, methodology and remediation guidance, redacted for confidentiality.',
    '#cs1-type':'Web Application · Black-Box',
    '#cs1-client':'E-commerce · Colombia · 2025',
    '#cs1-crit':'1 Critical',
    '#cs1-high':'3 High',
    '#cs1-total':'10 findings',
    '#cs1-title':'SEO Injection & Malware Discovery',
    '#cs1-desc':'Production WordPress site silently compromised. Malicious PHP served gambling content exclusively to Google crawlers — invisible to human visitors — exploiting the client\'s domain authority to rank illegal content on Search.',
    '#cs1-f1':'PHP backdoor with Google FCrDNS verification serving casino content to Googlebot — active and undetected on production',
    '#cs1-f2':'Remote content injection via cURL from attacker-controlled Cloudflare Pages subdomain',
    '#cs1-f3':'Unrestricted file write on web root — persistent attacker-controlled server-side execution',
    '#cs1-outcome':'All critical and high findings remediated. Re-test passed.',
    '#cs1-link':'View redacted report →',
    '#cs2-type':'WordPress · Static Analysis',
    '#cs2-client':'Corporate Intranet · Colombia · 2025',
    '#cs2-crit':'5 Critical',
    '#cs2-high':'6 High',
    '#cs2-total':'20 findings',
    '#cs2-title':'WordPress Intranet — Static Code Analysis',
    '#cs2-desc':'Full source code review of a private WordPress intranet. 20 vulnerabilities across the codebase, server configuration, and third-party integrations — including hardcoded credentials for external HR and payment systems.',
    '#cs2-f1':'Hardcoded API credentials for HR and payment systems in source code (CVSS 9.8)',
    '#cs2-f2':'JWT plugin active with secret key undefined — full authentication bypass vector (CVSS 9.3)',
    '#cs2-f3':'Stored XSS via unescaped third-party API output · Path traversal in file download handler',
    '#cs2-outcome':'20 vulnerabilities documented. Client applied all remediations within 2 weeks.',
    '#cs2-link':'View redacted report →',
    '#cs3-type':'WordPress · DB & File Forensics',
    '#cs3-client':'Automotive Industry · Colombia · 2026',
    '#cs3-crit':'5 Critical',
    '#cs3-high':'3 High',
    '#cs3-total':'9 findings',
    '#cs3-title':'Active SEO Spam Injection & Full Remediation',
    '#cs3-desc':'Production WordPress e-commerce site actively compromised. Hidden SEO spam injected into the CMS database across three attack waves, exploiting domain authority to rank 51 illegal gambling domains on Google — invisible to all monitoring tools for over 2 months.',
    '#cs3-f1':'Hidden HTML injected into CMS database (60 invisible divs + 1px widget) — 51 gambling domains in 5 languages, 3 attack waves, active 2.5 months',
    '#cs3-f2':'Full 3.8 GB site backup publicly accessible via HTTP without authentication — probable initial attack vector',
    '#cs3-f3':'Admin credentials hardcoded as Base64 HTTP Basic Auth token in 5 PHP files — 13 exposed instances across codebase',
    '#cs3-outcome':'All 9 findings remediated in a single session. 8/8 automated verification checks passed.',
    '#cs3-link':'View redacted report →',
    },placeholders:{'#cf-name':'Your name','#cf-email':'your@email.com','#cf-message':'Describe the engagement or project...'},
  formMessages:{
    requiredFields:'Please fill in all fields.',
    invalidEmail:'Please enter a valid email address.',
    success:'✓ Message sent! I will get back to you within 24 hours.',
    submitFailed:'Submission failed. Please try again.',
    networkError:'Network error. Please try again or use the email channel.'
  },terminalLines:['> Scanning operator profile...','> [✓] Services: Web · AD · Net · AI/LLM','> [✓] Mode: REMOTE · Available','> [✓] Report: EN / ES · Actionable','> [✓] Ranking: Top 1% globally','> [!] Slots open: 2','> HTB paths: 12 · Modules: 102','> Targets compromised: 702'],
  waMsg:'Hi Daniel, I\'m interested in learning more about your pentesting services.',
  aria:{
    svc:{
      pentest_web:'Select Web App Pentest, from $3,000',
      pentest_ad:'Select Active Directory Pentest, from $5,000',
      ai_llm:'Select AI / LLM Security, from $3,500',
      pentest_ai:'Select Network Pentest, from $3,500'
    },
    tgl:{
      small:'Scope: Small, 1 to 5 targets',
      medium:'Scope: Medium, 6 to 15 targets',
      large:'Scope: Large, 15 or more targets',
      low:'Complexity: Standard, common tech stack',
      'medium-cplx':'Complexity: Custom, proprietary logic',
      high:'Complexity: Enterprise, complex or hybrid',
      black:'Testing type: Black-box, no prior access',
      grey:'Testing type: Grey-box, partial credentials',
      white:'Testing type: White-box, full access and code'
    },
    termToggle:'Toggle status panel',
    emailCopy:'Copy email address to clipboard'
  },
  labels:{
    scope:{ small:'Small · 1–5', medium:'Medium · 6–15', large:'Large · 15+' },
    cplx:{ low:'Standard', medium:'Custom', high:'Enterprise' },
    tbox:{ black:'Black-box', grey:'Grey-box', white:'White-box' },
    scopeSets:{
      pentest_web:{ small:'1–5 pages/endpoints', medium:'6–15 pages/endpoints', large:'15+ pages/endpoints' },
      pentest_ad:{ small:'1–3 hosts', medium:'4–10 hosts', large:'10+ hosts' },
      ai_llm:{ small:'1–3 AI integrations', medium:'4–8 AI integrations', large:'Full AI system' },
      pentest_ai:{ small:'1–10 IPs/hosts', medium:'11–50 IPs/hosts', large:'50+ IPs/hosts' }
    },
    durations:{
      pentest_web:{ small:'3–5 days', medium:'1–2 weeks', large:'2–3 weeks' },
      pentest_ad:{ small:'1 week', medium:'1–2 weeks', large:'2–3 weeks' },
      ai_llm:{ small:'3–5 days', medium:'1 week', large:'2 weeks' },
      pentest_ai:{ small:'3–5 days', medium:'1–2 weeks', large:'2–3 weeks' }
    }
  },
  faq:{
    tag:'[ FAQ ]',
    heading:'Frequently asked questions',
    copy:'Everything you need to know before booking a scoping call.',
    nav:'FAQ',
    groups:['Services', 'Pricing', 'Process', 'Credentials'],
    items:[
      { q:'What penetration testing services do you offer?',
        a:'Web application penetration testing, Active Directory security assessments, network infrastructure pentests, and AI / LLM security assessments. All engagements are remote-first, include a detailed PDF report and a free re-test after fixes.' },
      { q:'Are you certified as a penetration tester?',
        a:'I have completed the CPTS, CDSA, CJCA and CWEE paths on HTB Academy and rank in the Top 1% globally on Hack The Box with 702 targets compromised. I also hold the IBM Cybersecurity Analyst and Google Cybersecurity Professional certificates.' },
      { q:'How much does a penetration test cost?',
        a:'An AI / LLM Security Assessment starts from $3,500 USD, a web app pentest from $3,000, a network pentest from $3,500, and an Active Directory pentest from $5,000. Use the pricing calculator above for an instant estimate.' },
      { q:'What does a pentest report include?',
        a:'Every report includes an executive summary, detailed technical findings with evidence, CVSS risk ratings, reproducible proof-of-concept steps, and prioritized remediation recommendations. A free re-test is included to verify fixes.' },
      { q:'Do you work remotely and with international clients?',
        a:'Yes. I am based in Colombia and fully available for remote engagements worldwide. I work in both English and Spanish. Most engagements are conducted remotely with no disruption to your production environment.' },
      { q:'How long does a penetration test take?',
        a:'Most engagements complete in 1–3 weeks from the scoping call to the final report. An AI / LLM security assessment for focused integrations can be delivered in 3–5 days. Timeline is agreed and fixed in the written proposal before any work begins.' },
      { q:'Is the first call free? What happens during it?',
        a:'Yes, the scoping call is free and carries no commitment. In 30 minutes we define your environment, agree on targets and rules of engagement, and determine the right service. You receive a written proposal with a fixed price afterwards.' },
      { q:'What is network penetration testing?',
        a:'Network penetration testing is an offensive security assessment of your external and internal infrastructure — servers, firewalls, routers, and services — to identify misconfigurations, open ports, exploitable vulnerabilities, and lateral movement paths before a real attacker does.' },
      { q:'What happens if you find a critical vulnerability during the engagement?',
        a:'I report it immediately — you don\'t wait for the final report. Critical and high-severity findings are communicated as soon as they are confirmed, so your team can begin remediation while the engagement is still active. Everything is documented in the final report regardless.' }
    ]
  }
},es:{
  documentTitle:'Daniel Ordonez Arango | Pentester',
  metaDescription:'Pentester freelance para startups y PYMEs. Seguridad en apps web, Active Directory y redes. HTB Top 1%, 702 objetivos. Trabajo remoto, reportes claros.',
  ogTitle:'Daniel Ordonez Arango | Pentester',
  ogDescription:'Portafolio de seguridad ofensiva enfocado en penetration testing, análisis defensivo, reportes detallados y superficies de ataque modernas.',
  selectors:{
    // ── Header ──
    
    '.topnav a[href="#services"]':'Servicios',
    '.topnav a[href="#about"]':'Sobre mí',
    '#about-tag':'[ SOBRE MÍ ]','#about-heading':'Sobre mí',
    '.topnav a[href="#process"]':'Proceso',
    '.topnav a[href="#quote"]':'Precios',
    
    
    '.topnav a[href="#certifications"]':'Credenciales',
    '.topnav a[href="#contact"]':'Contacto',

    // ── Hero ──
    
    '.hero-copy h2':'Pentester especializado en aplicaciones web, AI / LLM y Active Directory.',
    '.hero-copy .lead':'Ayudo a startups y pymes a encontrar vulnerabilidades explotables antes de que los atacantes lo hagan. Del primer contacto al informe final — me encargo de todo. Obtienes hallazgos claros, clasificación de riesgo real y un reporte que tu equipo puede empezar a corregir el mismo día.',
    '#spec-web':'Pentest Web',
    '#spec-ai':'AI / LLM Security',
    '#spec-ad':'Active Directory',
    
    '#spec-net':'Pentest de Redes',
    '#process-heading':'Del primer contacto al informe final','#process .section-heading .section-tag':'[ CÓMO FUNCIONA ]','#process-copy':'Un ciclo de trabajo claro, diseñado para minimizar interrupciones y maximizar resultados concretos y aplicables. La mayoría de los proyectos se completan en 1–3 semanas desde la llamada de alcance hasta el informe final.','#process-step1-title':'Llamada de alcance','#process-step1-desc':'Llamada gratuita de 30 min para definir objetivos y reglas de engagement. Sin compromiso.','#process-step2-title':'Propuesta y NDA','#process-step2-desc':'Recibirás una propuesta escrita con alcance, cronograma, metodología y precio fijo. El NDA se firma antes de iniciar.','#process-step3-title':'Engagement','#process-step3-desc':'Fase de pruebas activas con actualizaciones de progreso. Hallazgos críticos notificados de inmediato.','#process-step4-title':'Reporte y re-test','#process-step4-desc':'Reporte PDF con clasificación de riesgos, PoC y pasos de remediación. Re-test gratuito incluido.','.hero-actions .button.primary':'Solicitar una llamada de alcance gratuita',
    '.hero-actions .button.gold[href="daniel_cv_new.pdf"]':'Ver CV original',
    '.hero-actions .button.gold[href="htb-academy-student-transcript.pdf"]':'Descargar transcript',
    '#stat-paths':'Paths HTB completados',
    '#stat-targets':'Objetivos comprometidos',
    '#stat-ranking':'Ranking HTB','#stat-modules':'Módulos completados',
    
    
    '.avail-text':'Disponible para proyectos',

    // ── Terminal ──
    '.terminal-label':'daniel@portfolio:~$ ./escaneo_perfil',
    '#sg-status-lbl':'Estado',
    '#sg-status-val':'ACTIVO',
    '#sg-mode-lbl':'Respuesta',
    '#sg-mode-val':'< 24h',
    '#sg-loc-lbl':'Modo',
    '#sg-loc-val':'REMOTO',
    '#sg-scope-lbl':'Cobertura',
    '#sg-scope-val':'WEB / AD / RED / IA','#sg-avail-lbl':'Disponibilidad','#sg-avail-val':'ABIERTO','#sg-lang-lbl':'Idiomas','#sg-lang-val':'ES / EN',




    // ── Certifications ──
    
    
    
    
    
    
    
    
    

    // ── About ──

    // ── Certifications ──
    '#certifications-tag':'[ CERTIFICACIONES ]',
    '#certifications-heading':'Formación, Certificaciones y Experiencia',
    '#cert-exp-label':'Experiencia Profesional',
    '#cert-exp-role':'Desarrollador Full-Stack y Especialista en Seguridad · En curso',
    '#cert-exp-link':'Ver en LinkedIn →',
    '#cert-external-label':'Certificaciones Profesionales',
    '#cert-ibm-title':'Certificado Profesional de Analista de Ciberseguridad de IBM',
    '#cert-google-title':'Certificado Profesional de Ciberseguridad de Google',
    '#cert-credly-link':'Ver en Credly →',
    '#cert-htb-tag':'Paths HTB Completados',
    '#cert-cjca-title':'Analista Junior de Ciberseguridad',
    '#cert-transcript-link':'Ver transcript HTB →',

    '#about-p1':'Empecé como desarrollador full-stack. Ese contexto cambia cómo pruebo — entiendo cómo se construyen las aplicaciones y sé exactamente dónde los desarrolladores dejan brechas.','#about-p2':'Mi entrenamiento cubre toda la superficie de ataque ofensivo: explotación web, ataques a Active Directory, pivoting en redes, escalada de privilegios y técnicas de post-explotación. No solo encuentro vulnerabilidades — explico por qué existen, qué haría un atacante real con ellas y cómo corregirlas correctamente.','#about-p3':'Trabajo de forma remota con startups y PYMEs en Latinoamérica, EE.UU. y Europa. Proyectos a precio fijo, entregables en inglés y español, y un re-test gratuito para confirmar que las correcciones realmente funcionan.','#about-hl5-title':'NDA desde el primer día','#cs-tag':'[ CASOS DE ESTUDIO ]','#case-studies-heading':'Reportes de Evaluación (Anonimizados)','#cs-sub':'Proyectos reales — hallazgos, metodología y guía de remediación, anonimizados por confidencialidad.','#cs1-type':'Aplicación Web · Black-Box','#cs1-crit':'1 Crítico','#cs1-high':'3 Altos','#cs1-total':'10 hallazgos','#cs1-title':'Inyección SEO y Descubrimiento de Malware','#cs1-desc':'Sitio WordPress de producción comprometido silenciosamente. Código PHP malicioso servía contenido de apuestas exclusivamente a los crawlers de Google — invisible para visitantes humanos — explotando la autoridad del dominio del cliente para posicionar contenido ilegal en los resultados de búsqueda.','#cs1-f1':'Backdoor PHP con verificación FCrDNS de Google sirviendo contenido de casino a Googlebot — activo y sin detectar en producción','#cs1-f2':'Inyección de contenido remoto vía cURL desde subdominio Cloudflare Pages controlado por el atacante','#cs1-f3':'Escritura irrestricta de archivos en la raíz web — ejecución de código persistente del lado del servidor','#cs1-link':'Ver reporte redactado →','#cs2-type':'WordPress · Análisis Estático','#cs2-crit':'5 Críticos','#cs2-high':'6 Altos','#cs2-total':'20 hallazgos','#cs2-title':'Intranet WordPress — Análisis Estático de Código','#cs2-desc':'Revisión completa del código fuente de una intranet WordPress privada. 20 vulnerabilidades en el código base, configuración del servidor e integraciones de terceros — incluyendo credenciales hardcodeadas para sistemas externos de RRHH y pagos.','#cs2-f1':'Credenciales de API hardcodeadas para sistemas de RRHH y pagos en código fuente (CVSS 9.8)','#cs2-f2':'Plugin JWT activo con clave secreta indefinida — vector de bypass de autenticación completo (CVSS 9.3)','#cs2-f3':'XSS almacenado vía salida de API de terceros sin escapar · Path traversal en manejador de descarga','#cs2-link':'Ver reporte redactado →','#cs1-client':'E-commerce · Colombia · 2025','#cs2-client':'Intranet Corporativa · Colombia · 2025','#cs1-outcome':'Todos los hallazgos críticos y altos remediados. Re-test aprobado.','#cs2-outcome':'20 vulnerabilidades documentadas. El cliente aplicó todas las correcciones en 2 semanas.','#cs3-type':'WordPress · Forense de BD y Archivos','#cs3-client':'Industria Automotriz · Colombia · 2026','#cs3-crit':'5 Críticos','#cs3-high':'3 Altos','#cs3-total':'9 hallazgos','#cs3-title':'Inyección de Spam SEO Activo y Remediación Completa','#cs3-desc':'Sitio WordPress de e-commerce comprometido activamente. Un actor inyectó spam SEO oculto en la base de datos CMS en tres oleadas de ataque, explotando la autoridad del dominio para posicionar 51 dominios ilegales de apuestas en Google — invisible para todas las herramientas de monitoreo por más de 2 meses.','#cs3-f1':'HTML oculto inyectado en la BD CMS (60 divs invisibles + widget de 1px) — 51 dominios de apuestas en 5 idiomas, 3 oleadas de ataque, activo 2.5 meses','#cs3-f2':'Backup completo del sitio (3.8 GB) accesible vía HTTP sin autenticación — probable vector de ataque inicial','#cs3-f3':'Credenciales de admin hardcodeadas como token HTTP Basic Auth en Base64 en 5 archivos PHP — 13 instancias expuestas','#cs3-link':'Ver reporte redactado →','#cs3-outcome':'Los 9 hallazgos remediados en una sola sesión. 8/8 verificaciones automáticas aprobadas.','.topnav a[href="#case-studies"]':'Casos',
    
    

        
    
    
    
    
    
    
    // ── Contact ──
    '#services-tag':'[ SERVICIOS ]','#services-heading':'Servicios','#services-copy':'Proyectos remotos, entregables claros, hallazgos que tu equipo puede corregir.','#svc-web-title':'Pentest de Aplicación Web','#svc-web-desc':'Encuentra vulnerabilidades explotables en tu aplicación antes de que ocurra una brecha. Testing manual alineado con OWASP con un reporte que tu equipo puede implementar de inmediato.','#svc-ad-title':'Pentest de Active Directory','#svc-ad-desc':'Identifica rutas de ataque en tu red interna antes de que lo haga un actor de amenaza. Mapeo con BloodHound, simulación de ataques de credenciales y una hoja de ruta de remediación clara.','#svc-va-title':'Evaluación de Seguridad AI / LLM','#svc-net-title':'Pentest de Redes','#svc-va-desc':'Evaluación red-team de tus integraciones de IA y LLM frente al OWASP LLM Top 10. Cubre prompt injection, jailbreaks, ataques de salida del modelo, vulnerabilidades en el pipeline de datos y vectores de abuso de IA.','#svc-net-desc':'Identifica servicios expuestos, configuraciones incorrectas, rutas de movimiento lateral y vulnerabilidades explotables en tu red interna y externa.','.service-cta':'Solicitar cotización →','#tbox-info-black-title':'Caja negra','#tbox-info-black-desc':'Sin conocimiento previo del objetivo. Simula un atacante externo real. Ideal para evaluar tus defensas desde la perspectiva del atacante.','#tbox-info-black-rec':'✓ Más común','#tbox-info-grey-title':'Caja gris','#tbox-info-grey-desc':'Se proporcionan credenciales o contexto parcial. Simula una cuenta comprometida o amenaza interna. Mejor relación cobertura/costo.','#tbox-info-grey-rec':'✓ Recomendado','#tbox-info-white-title':'Caja blanca','#tbox-info-white-desc':'Acceso completo + código fuente. Máxima profundidad y cobertura. Ideal para auditorías exhaustivas o cuando las normativas lo exigen.','#tbox-info-white-rec':'✓ Más exhaustivo','#qc-tbox-help-btn':'?',
    '#qc-main-cta':'Reservar llamada de alcance gratis <span class="qc-cta-arrow">→</span>','#quote-tag':'[ PRECIOS ]','#see-pricing-cta':'Ver precios →',
    // ── Etiquetas del panel de resultados ──
    '#qr-svc-label':'Servicio seleccionado',
    '#qr-label':'Rango estimado',
    '#qr-scope-key':'Alcance',
    '#qr-cplx-key':'Complejidad',
    '#qr-tbox-key':'Modalidad',
    '#qr-duration-key':'Duración',
    '#qc-disclaimer':'Estimación automatizada — no es una cotización vinculante.<br>Se requiere un acuerdo de autorización firmado antes de iniciar cualquier compromiso.',
    // ── Entregables del servicio ──
    '#svc1-del1':'Testing manual OWASP Top 10',
    '#svc1-del2':'Informe PDF con clasificación de riesgos',
    '#svc1-del3':'Recomendaciones de remediación',
    '#svc1-del4':'Re-test gratuito tras correcciones',
    '#svc2-del1':'Mapeo de rutas de ataque con BloodHound',
    '#svc2-del2':'Simulación de ataques de credenciales',
    '#svc2-del3':'Hoja de ruta de remediación escrita',
    '#svc2-del4':'Re-test gratuito tras correcciones',
    '#svc3-del1':'Prompt injection (directa e indirecta)',
    '#svc3-del2':'Testing de outputs y jailbreaks LLM',
    '#svc3-del3':'Revisión del pipeline de datos IA',
    '#svc3-del4':'Simulación de vectores de abuso',
    '#svc3-del5':'Re-test gratuito tras correcciones',
    '#svc4-del1':'Reconocimiento externo e interno',
    '#svc4-del2':'Explotación de vulnerabilidades y PoC',
    '#svc4-del3':'Verificación de movimiento lateral y segmentación',
    '#svc4-del4':'Informe de hallazgos escrito',
    '#svc4-del5':'Re-test gratuito tras correcciones',
    // ── Etiquetas del servicio QC ──
    '#qcs-name-pentest_web':'Pentest de Aplicación Web',
    '#qcs-price-pentest_web':'Desde $3,000',
    '#qcs-name-pentest_ad':'Directorio Activo',
    '#qcs-price-pentest_ad':'Desde $5,000',
    '#qcs-name-ai_llm':'AI / LLM',
    '#qcs-price-ai_llm':'Desde $3,500',
    '#qcs-name-pentest_ai':'Pentest de Redes',
    '#qcs-price-pentest_ai':'Desde $3,500','#quote-heading':'Conoce el precio en 60 segundos','#quote-copy':'Completa los detalles para obtener un rango de precio al instante. Se enviará una propuesta formal después de la llamada de alcance.','#ql-service':'Servicio','#terminal-panel-label':'[ PANEL DE ESTADO ]','#svc1-price':'Desde $3,000 USD','#svc2-price':'Desde $5,000 USD','#svc3-price':'Desde $3,500 USD','#svc4-price':'Desde $3,500 USD','#ql-env-params':'Parámetros del entorno','#tgl-small-label':'Pequeño','#tgl-small-desc':'1–5 objetivos','#tgl-medium-label':'Mediano','#tgl-medium-desc':'6–15 objetivos','#tgl-large-label':'Grande','#tgl-large-desc':'15+ objetivos','#tgl-low-cplx':'Estándar','#tgl-low-cplx-desc':'Stack común','#tgl-medium-cplx':'Personalizado','#tgl-medium-cplx-desc':'Lógica propietaria','#tgl-high-cplx':'Empresarial','#tgl-high-cplx-desc':'Complejo / híbrido','#tgl-black-tbox':'Caja negra','#tgl-black-tbox-desc':'Sin acceso previo','#tgl-grey-tbox':'Caja gris','#tgl-grey-tbox-desc':'Credenciales parciales','#tgl-white-tbox':'Caja blanca','#tgl-white-tbox-desc':'Acceso completo + código','#ql-scope':'Tamaño del alcance','#ql-complexity':'Complejidad','#ql-tbox':'Tipo de testing','#contact .section-tag':'[ CONTACTO ]',
    '#contact h3':'Contáctame',
    '#cg-profiles':'Perfiles online','.contact-intro':'Disponible para proyectos remotos en todo el mundo. Respondo en menos de 24h. La primera llamada es gratuita — definimos alcance, cronograma y compatibilidad antes de cualquier acuerdo.',
    
    
    '.contact-card-phone-title':'Teléfono',
    '.contact-card-phone-copy':'Llamada directa — respuesta inmediata',
    '.cg-li-title':'LinkedIn',
    '.cg-li-desc':'Perfil profesional y red de contactos',
    '.cg-gh-title':'GitHub',
    '.cg-gh-desc':'Código, proyectos y huella técnica',


    // ── Contact form ──
    '.contact-form-card .section-tag':'[ ENVIAR MENSAJE ]',
    '.cf-heading':'Mensaje directo',
    'label[for="cf-name"]':'Nombre',
    'label[for="cf-email"]':'Correo',
    'label[for="cf-message"]':'Mensaje',
    '.cf-btn-text':'Enviar mensaje'
  },
  placeholders:{
    '#cf-name':'Tu nombre',
    '#cf-email':'tu@correo.com',
    '#cf-message':'Describe el proyecto o evaluación...'
  },
  formMessages:{
    requiredFields:'Por favor, completa todos los campos.',
    invalidEmail:'Por favor, ingresa una dirección de correo válida.',
    success:'✓ Mensaje enviado. Te respondo en menos de 24 horas.',
    submitFailed:'Error al enviar. Por favor, inténtalo de nuevo.',
    networkError:'Error de red. Inténtalo de nuevo o usa el canal de correo electrónico.'
  },
  terminalLines:[
    '> Escaneando perfil del operador...','> [✓] Servicios: Web · AD · Red · IA/LLM','> [✓] Modo: REMOTO · Disponible','> [✓] Reporte: EN / ES · Accionable','> [✓] Ranking: Top 1% global','> [!] Slots disponibles: 2','> Paths HTB: 12 · Módulos: 102','> Objetivos comprometidos: 702'
  ],
  waMsg:'Hola Daniel, me interesa conocer más sobre tus servicios de pentesting.',
  aria:{
    svc:{
      pentest_web:'Seleccionar Pentest Web App, desde $3,000',
      pentest_ad:'Seleccionar Pentest Active Directory, desde $5,000',
      ai_llm:'Seleccionar Seguridad AI / LLM, desde $3,500',
      pentest_ai:'Seleccionar Pentest de Redes, desde $3,500'
    },
    tgl:{
      small:'Alcance: Pequeño, 1 a 5 objetivos',
      medium:'Alcance: Mediano, 6 a 15 objetivos',
      large:'Alcance: Grande, 15 o más objetivos',
      low:'Complejidad: Estándar, stack común',
      'medium-cplx':'Complejidad: Personalizado, lógica propietaria',
      high:'Complejidad: Empresarial, complejo o híbrido',
      black:'Modalidad: Caja negra, sin acceso previo',
      grey:'Modalidad: Caja gris, credenciales parciales',
      white:'Modalidad: Caja blanca, acceso completo y código'
    },
    termToggle:'Alternar panel de estado',
    emailCopy:'Copiar correo al portapapeles'
  },
  labels:{
    scope:{ small:'Pequeño · 1–5', medium:'Mediano · 6–15', large:'Grande · 15+' },
    cplx:{ low:'Estándar', medium:'Personalizado', high:'Empresarial' },
    tbox:{ black:'Caja negra', grey:'Caja gris', white:'Caja blanca' },
    scopeSets:{
      pentest_web:{ small:'1–5 páginas/endpoints', medium:'6–15 páginas/endpoints', large:'15+ páginas/endpoints' },
      pentest_ad:{ small:'1–3 hosts', medium:'4–10 hosts', large:'10+ hosts' },
      ai_llm:{ small:'1–3 integ. IA', medium:'4–8 integ. IA', large:'Sistema IA completo' },
      pentest_ai:{ small:'1–10 IPs/hosts', medium:'11–50 IPs/hosts', large:'50+ IPs/hosts' }
    },
    svcNames:{ pentest_web:'Pentest de Aplicación Web', pentest_ad:'Directorio Activo', ai_llm:'Seguridad AI / LLM', pentest_ai:'Pentest de Redes' },
    durations:{
      pentest_web:{ small:'3–5 días', medium:'1–2 semanas', large:'2–3 semanas' },
      pentest_ad:{ small:'1 semana', medium:'1–2 semanas', large:'2–3 semanas' },
      ai_llm:{ small:'3–5 días', medium:'1 semana', large:'2 semanas' },
      pentest_ai:{ small:'3–5 días', medium:'1–2 semanas', large:'2–3 semanas' }
    }
  },
  faq:{
    tag:'[ FAQ ]',
    heading:'Preguntas frecuentes',
    copy:'Todo lo que necesitas saber antes de agendar una llamada de alcance.',
    nav:'FAQ',
    groups:['Servicios', 'Precios', 'Proceso', 'Credenciales'],
    items:[
      { q:'¿Qué servicios de pentesting ofreces?',
        a:'Pentest de aplicaciones web, evaluaciones de Active Directory, pentests de infraestructura de red y evaluaciones de seguridad AI / LLM. Todos los proyectos son remotos, incluyen un reporte PDF detallado y un re-test gratuito después de las correcciones.' },
      { q:'¿Estás certificado como pentester?',
        a:'Completé los paths CPTS, CDSA, CJCA y CWEE en HTB Academy y estoy en el Top 1% global de Hack The Box con 702 objetivos comprometidos. También cuento con los certificados de IBM Cybersecurity Analyst y Google Cybersecurity Professional.' },
      { q:'¿Cuánto cuesta un pentest?',
        a:'Una evaluación de seguridad AI / LLM parte desde $3,500 USD, un pentest de aplicación web desde $3,000, un pentest de red desde $3,500 y un pentest de Active Directory desde $5,000. Usa la calculadora de precios para obtener una estimación al instante.' },
      { q:'¿Qué incluye un informe de pentest?',
        a:'Cada reporte incluye un resumen ejecutivo, hallazgos técnicos detallados con evidencia, clasificación de riesgos CVSS, pasos de explotación reproducibles y recomendaciones de remediación priorizadas. Se incluye un re-test gratuito para verificar las correcciones.' },
      { q:'¿Trabajas de forma remota y con clientes internacionales?',
        a:'Sí. Estoy basado en Colombia y disponible para proyectos remotos en todo el mundo. Trabajo en inglés y español. La mayoría de los proyectos se realizan de forma remota sin interrupciones en tu entorno de producción.' },
      { q:'¿Cuánto tiempo tarda un pentest?',
        a:'La mayoría de los proyectos se completan en 1–3 semanas desde la llamada de alcance hasta el informe final. Una evaluación de seguridad AI / LLM para integraciones puntuales puede entregarse en 3–5 días. El cronograma se acuerda y fija por escrito antes de comenzar.' },
      { q:'¿La primera llamada es gratuita? ¿Qué sucede en ella?',
        a:'Sí, la llamada de alcance es gratuita y sin compromiso. En 30 minutos definimos tu entorno, acordamos objetivos y reglas de engagement, y determinamos el servicio adecuado. Recibes una propuesta escrita con precio fijo después.' },
      { q:'¿Qué es el pentesting de redes?',
        a:'Es una evaluación de seguridad ofensiva de tu infraestructura externa e interna — servidores, firewalls, routers y servicios — para identificar configuraciones incorrectas, puertos abiertos, vulnerabilidades explotables y rutas de movimiento lateral antes de que lo haga un atacante real.' },
      { q:'¿Qué pasa si encuentras una vulnerabilidad crítica durante el pentest?',
        a:'La reporto de inmediato — no tienes que esperar al informe final. Los hallazgos críticos y de alta severidad se comunican en cuanto se confirman, para que tu equipo pueda comenzar la remediación mientras el proyecto sigue activo. Todo queda documentado en el informe final.' }
    ]
  }
}}
