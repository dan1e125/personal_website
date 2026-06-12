(function () {
  'use strict';

  var STORAGE_KEY = 'portfolio-lang';

  var COPY = {
    en: {
      'wordpress-intranet-static-code-analysis': {
        documentTitle: 'Case Study: WordPress Intranet Static Code Analysis — Daniel Ordonez Arango',
        metaDescription: 'Penetration test case study: full source code review of a corporate WordPress intranet in Colombia. 20 vulnerabilities discovered including hardcoded credentials for HR and payment systems.',
        selectors: {
          '#case-back': '? Back to portfolio',
          '#case-tag': '[ CASE STUDY ]',
          '#case-title': 'WordPress Intranet — Static Code Analysis',
          '#case-h2-summary': 'Executive Summary',
          '#case-h2-findings': 'Findings (20 Total)',
          '#case-h2-methodology': 'Methodology',
          '#case-h2-outcome': 'Outcome',
          '#case-p-summary': 'Full source code review of a private WordPress intranet used by a Colombian company. The assessment revealed 20 vulnerabilities across the codebase, server configuration, and third-party integrations — including hardcoded credentials for external HR and payment systems that could allow complete account takeover and financial data exposure.',
          '#case-p-methodology': 'Static code analysis using manual review and automated scanning. Dynamic testing against a staging environment. OWASP Testing Guide v4 methodology. Findings validated with proof-of-concept exploits for all critical and high issues.',
          '#case-p-outcome': 'All 20 vulnerabilities documented with CVSS v3.1 scores, exploit steps, and specific remediation guidance. Client applied all remediations within 2 weeks. Re-test confirmed successful closure of all critical and high findings.'
        },
        htmlSelectors: {
          '#case-meta-client': '<strong>Client:</strong> Corporate intranet, Colombia, 2025',
          '#case-meta-service': '<strong>Service:</strong> Web Application Pentest',
          '#case-meta-type': '<strong>Type:</strong> White-box / source code review',
          '#case-finding-1': '<strong>Critical (3):</strong> Hardcoded plaintext API keys and credentials for external HR platform and payment processor embedded in custom plugin source code',
          '#case-finding-2': '<strong>Critical (1):</strong> SQL injection in custom reporting module — unauthenticated, full database read access',
          '#case-finding-3': '<strong>High (4):</strong> Insecure Direct Object Reference (IDOR) allowing any authenticated user to access any other employee\'s documents',
          '#case-finding-4': '<strong>High (2):</strong> Stored XSS in employee profile fields, no output encoding',
          '#case-finding-5': '<strong>Medium (6):</strong> Missing CSRF tokens on state-changing forms, outdated dependencies with known CVEs, overly permissive file uploads',
          '#case-finding-6': '<strong>Low (4):</strong> Information disclosure, missing security headers, verbose error messages in production'
        }
      },
      'active-seo-spam-injection-remediation': {
        documentTitle: 'Case Study: Active SEO Spam Injection & Remediation — Daniel Ordonez Arango',
        metaDescription: 'Penetration test case study: active WordPress e-commerce compromise in Colombia. Hidden SEO spam injected into the CMS database across three attack waves, ranking 51 illegal gambling domains on Google.',
        selectors: {
          '#case-back': '? Back to portfolio',
          '#case-tag': '[ CASE STUDY ]',
          '#case-title': 'Active SEO Spam Injection & Full Remediation',
          '#case-h2-summary': 'Executive Summary',
          '#case-h2-findings': 'Findings',
          '#case-h2-methodology': 'Methodology',
          '#case-h2-outcome': 'Outcome',
          '#case-p-summary': 'A production WordPress e-commerce site was actively compromised. An attacker injected hidden SEO spam into the CMS database across three attack waves, exploiting the client\'s domain authority to rank 51 illegal gambling domains on Google — invisible to human visitors and monitoring tools for over 2 months.',
          '#case-p-methodology': 'Database forensics, file integrity analysis, and HTTP response comparison to identify injected content. Attack waves were mapped chronologically. All persistence mechanisms were traced from public backup exposure through database injection to search-engine-visible spam output.',
          '#case-p-outcome': 'All 9 findings remediated in a single session. Eight automated verification checks passed. Hidden spam removed from the database, exposed backup secured, hardcoded credentials rotated, and integrity monitoring recommendations delivered with prioritized remediation steps.'
        },
        htmlSelectors: {
          '#case-meta-client': '<strong>Client:</strong> Automotive industry e-commerce, Colombia, 2026',
          '#case-meta-service': '<strong>Service:</strong> Web Application Pentest',
          '#case-meta-type': '<strong>Type:</strong> Incident response + DB & file forensics',
          '#case-finding-1': '<strong>Critical:</strong> 60 hidden div elements serving 51 gambling domains — undetected for 2.5 months',
          '#case-finding-2': '<strong>Critical:</strong> 3.8 GB backup file publicly exposed — probable initial access vector',
          '#case-finding-3': '<strong>Critical:</strong> Admin credentials hardcoded in 13 locations across the codebase',
          '#case-finding-4': '<strong>High:</strong> Database-level SEO injection persisting across theme and plugin updates',
          '#case-finding-5': '<strong>High:</strong> Missing integrity monitoring on CMS content tables'
        }
      },
      'seo-injection-malware-discovery': {
        documentTitle: 'Case Study: SEO Injection & Malware Discovery — Daniel Ordonez Arango',
        metaDescription: 'Penetration test case study: production WordPress e-commerce site in Colombia silently compromised with SEO spam injection. Malicious PHP served gambling content exclusively to Google crawlers.',
        selectors: {
          '#case-back': '? Back to portfolio',
          '#case-tag': '[ CASE STUDY ]',
          '#case-title': 'SEO Injection & Malware Discovery',
          '#case-h2-summary': 'Executive Summary',
          '#case-h2-findings': 'Findings',
          '#case-h2-methodology': 'Methodology',
          '#case-h2-outcome': 'Outcome',
          '#case-p-summary': 'A production WordPress e-commerce site was silently compromised with a PHP-based SEO spam injection. Malicious code served gambling and illegal content exclusively to Google search crawlers — invisible to human visitors — exploiting the client\'s established domain authority to rank illegal content in Google Search results.',
          '#case-p-methodology': 'Server log analysis, raw HTTP response comparison with Googlebot User-Agent versus normal browsers, and full WordPress file integrity check. The attack vector was traced to an outdated WooCommerce plugin with a known unauthenticated RCE vulnerability (CVSS 9.8).',
          '#case-p-outcome': 'All malicious files identified and removed. Plugin ecosystem fully updated. File permission hardening applied. Client\'s domain authority was successfully restored in Google Search Console within 6 weeks of remediation. Full remediation report delivered with CVSS scores and prioritized action items.'
        },
        htmlSelectors: {
          '#case-meta-client': '<strong>Client:</strong> E-commerce company, Colombia, 2025',
          '#case-meta-service': '<strong>Service:</strong> Web Application Pentest',
          '#case-meta-type': '<strong>Type:</strong> Incident response + black-box testing',
          '#case-finding-1': '<strong>Critical:</strong> Malicious PHP backdoor injected into core WordPress files, conditionally serving spam HTML to Googlebot based on User-Agent',
          '#case-finding-2': '<strong>Critical:</strong> Server-side SEO cloaking — human visitors saw normal site, Google crawlers saw gambling/drug content',
          '#case-finding-3': '<strong>High:</strong> Unauthorized admin account created in WordPress database',
          '#case-finding-4': '<strong>High:</strong> Outdated plugins with known RCE vulnerabilities used as initial access vector',
          '#case-finding-5': '<strong>Medium:</strong> File permission misconfigurations allowing PHP execution in uploads directory'
        }
      }
    },
    es: {
      'wordpress-intranet-static-code-analysis': {
        documentTitle: 'Caso de estudio: Análisis estático de intranet WordPress — Daniel Ordonez Arango',
        metaDescription: 'Caso de estudio de pentest: revisión completa del código fuente de una intranet WordPress corporativa en Colombia. 20 vulnerabilidades, incluidas credenciales hardcodeadas de RR.HH. y sistemas de pago.',
        selectors: {
          '#case-back': '? Volver al portafolio',
          '#case-tag': '[ CASO DE ESTUDIO ]',
          '#case-title': 'Intranet WordPress — Análisis estático de código',
          '#case-h2-summary': 'Resumen ejecutivo',
          '#case-h2-findings': 'Hallazgos (20 en total)',
          '#case-h2-methodology': 'Metodología',
          '#case-h2-outcome': 'Resultado',
          '#case-p-summary': 'Revisión completa del código fuente de una intranet WordPress privada usada por una empresa colombiana. La evaluación reveló 20 vulnerabilidades en el código, la configuración del servidor e integraciones de terceros — incluidas credenciales hardcodeadas de plataformas externas de RR.HH. y pagos que podían permitir toma de cuentas y exposición de datos financieros.',
          '#case-p-methodology': 'Análisis estático con revisión manual y escaneo automatizado. Pruebas dinámicas contra un entorno de staging. Metodología OWASP Testing Guide v4. Hallazgos validados con pruebas de concepto para todos los issues críticos y altos.',
          '#case-p-outcome': 'Las 20 vulnerabilidades documentadas con puntajes CVSS v3.1, pasos de explotación y guía de remediación específica. El cliente aplicó todas las correcciones en 2 semanas. El re-test confirmó el cierre exitoso de todos los hallazgos críticos y altos.'
        },
        htmlSelectors: {
          '#case-meta-client': '<strong>Cliente:</strong> Intranet corporativa, Colombia, 2025',
          '#case-meta-service': '<strong>Servicio:</strong> Pentest de aplicación web',
          '#case-meta-type': '<strong>Tipo:</strong> Caja blanca / revisión de código fuente',
          '#case-finding-1': '<strong>Crítico (3):</strong> API keys y credenciales en texto plano de plataforma de RR.HH. y procesador de pagos embebidas en código de plugin personalizado',
          '#case-finding-2': '<strong>Crítico (1):</strong> Inyección SQL en módulo de reportes personalizado — sin autenticación, lectura completa de la base de datos',
          '#case-finding-3': '<strong>Alto (4):</strong> IDOR que permitía a cualquier usuario autenticado acceder a documentos de otros empleados',
          '#case-finding-4': '<strong>Alto (2):</strong> XSS almacenado en campos de perfil de empleado, sin encoding de salida',
          '#case-finding-5': '<strong>Medio (6):</strong> Tokens CSRF ausentes en formularios, dependencias desactualizadas con CVEs conocidos, uploads demasiado permisivos',
          '#case-finding-6': '<strong>Bajo (4):</strong> Divulgación de información, headers de seguridad ausentes, mensajes de error verbosos en producción'
        }
      },
      'active-seo-spam-injection-remediation': {
        documentTitle: 'Caso de estudio: Inyección SEO activa y remediación — Daniel Ordonez Arango',
        metaDescription: 'Caso de estudio de pentest: compromiso activo de e-commerce WordPress en Colombia. Spam SEO oculto inyectado en la base de datos del CMS en tres oleadas, posicionando 51 dominios de apuestas ilegales en Google.',
        selectors: {
          '#case-back': '? Volver al portafolio',
          '#case-tag': '[ CASO DE ESTUDIO ]',
          '#case-title': 'Inyección SEO activa y remediación completa',
          '#case-h2-summary': 'Resumen ejecutivo',
          '#case-h2-findings': 'Hallazgos',
          '#case-h2-methodology': 'Metodología',
          '#case-h2-outcome': 'Resultado',
          '#case-p-summary': 'Un sitio e-commerce WordPress en producción estaba comprometido activamente. Un atacante inyectó spam SEO oculto en la base de datos del CMS en tres oleadas, explotando la autoridad del dominio del cliente para posicionar 51 dominios de apuestas ilegales en Google — invisible para visitantes humanos y herramientas de monitoreo durante más de 2 meses.',
          '#case-p-methodology': 'Forense de base de datos, análisis de integridad de archivos y comparación de respuestas HTTP para identificar contenido inyectado. Las oleadas de ataque se mapearon cronológicamente. Se rastrearon los mecanismos de persistencia desde backup público expuesto hasta spam visible en buscadores.',
          '#case-p-outcome': 'Los 9 hallazgos remediados en una sola sesión. Ocho verificaciones automatizadas pasaron. Spam oculto eliminado de la base de datos, backup expuesto asegurado, credenciales hardcodeadas rotadas y recomendaciones de monitoreo de integridad entregadas con pasos priorizados.'
        },
        htmlSelectors: {
          '#case-meta-client': '<strong>Cliente:</strong> E-commerce industria automotriz, Colombia, 2026',
          '#case-meta-service': '<strong>Servicio:</strong> Pentest de aplicación web',
          '#case-meta-type': '<strong>Tipo:</strong> Respuesta a incidente + forense de BD y archivos',
          '#case-finding-1': '<strong>Crítico:</strong> 60 divs ocultos sirviendo 51 dominios de apuestas — no detectado durante 2.5 meses',
          '#case-finding-2': '<strong>Crítico:</strong> Backup de 3.8 GB expuesto públicamente — probable vector de acceso inicial',
          '#case-finding-3': '<strong>Crítico:</strong> Credenciales de admin hardcodeadas en 13 ubicaciones del codebase',
          '#case-finding-4': '<strong>Alto:</strong> Inyección SEO a nivel de base de datos persistiendo tras actualizaciones de tema y plugins',
          '#case-finding-5': '<strong>Alto:</strong> Monitoreo de integridad ausente en tablas de contenido del CMS'
        }
      },
      'seo-injection-malware-discovery': {
        documentTitle: 'Caso de estudio: Inyección SEO y descubrimiento de malware — Daniel Ordonez Arango',
        metaDescription: 'Caso de estudio de pentest: sitio e-commerce WordPress en Colombia comprometido silenciosamente con inyección SEO. PHP malicioso sirviendo contenido de apuestas solo a crawlers de Google.',
        selectors: {
          '#case-back': '? Volver al portafolio',
          '#case-tag': '[ CASO DE ESTUDIO ]',
          '#case-title': 'Inyección SEO y descubrimiento de malware',
          '#case-h2-summary': 'Resumen ejecutivo',
          '#case-h2-findings': 'Hallazgos',
          '#case-h2-methodology': 'Metodología',
          '#case-h2-outcome': 'Resultado',
          '#case-p-summary': 'Un sitio e-commerce WordPress en producción fue comprometido silenciosamente con inyección SEO basada en PHP. Código malicioso sirvió contenido de apuestas e ilegal exclusivamente a crawlers de Google — invisible para visitantes humanos — explotando la autoridad del dominio del cliente para posicionar contenido ilegal en resultados de búsqueda.',
          '#case-p-methodology': 'Análisis de logs del servidor, comparación de respuestas HTTP con User-Agent de Googlebot versus navegadores normales, y revisión de integridad de archivos WordPress. El vector de ataque se rastreó a un plugin WooCommerce desactualizado con vulnerabilidad RCE sin autenticación conocida (CVSS 9.8).',
          '#case-p-outcome': 'Todos los archivos maliciosos identificados y eliminados. Ecosistema de plugins actualizado por completo. Endurecimiento de permisos de archivos aplicado. La autoridad del dominio del cliente se restauró en Google Search Console en 6 semanas. Reporte de remediación entregado con puntajes CVSS y acciones priorizadas.'
        },
        htmlSelectors: {
          '#case-meta-client': '<strong>Cliente:</strong> Empresa e-commerce, Colombia, 2025',
          '#case-meta-service': '<strong>Servicio:</strong> Pentest de aplicación web',
          '#case-meta-type': '<strong>Tipo:</strong> Respuesta a incidente + prueba de caja negra',
          '#case-finding-1': '<strong>Crítico:</strong> Backdoor PHP inyectado en archivos core de WordPress, sirviendo HTML spam a Googlebot según User-Agent',
          '#case-finding-2': '<strong>Crítico:</strong> Cloaking SEO en servidor — visitantes humanos veían sitio normal, crawlers de Google veían contenido de apuestas/drogas',
          '#case-finding-3': '<strong>Alto:</strong> Cuenta admin no autorizada creada en la base de datos WordPress',
          '#case-finding-4': '<strong>Alto:</strong> Plugins desactualizados con vulnerabilidades RCE conocidas como vector de acceso inicial',
          '#case-finding-5': '<strong>Medio:</strong> Permisos de archivos mal configurados permitiendo ejecución PHP en directorio uploads'
        }
      }
    }
  };

  function pageSlug() {
    var slug = document.body && document.body.getAttribute('data-case-slug');
    if (slug) return slug;
    var match = location.pathname.match(/\/case-studies\/([^/]+)\.html$/);
    return match ? match[1] : null;
  }

  function getLocale() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'es' ? 'es' : 'en';
  }

  function applySelectors(map, useHtml) {
    if (!map) return;
    Object.keys(map).forEach(function (selector) {
      var node = document.querySelector(selector);
      if (!node) return;
      if (useHtml) node.innerHTML = map[selector];
      else node.textContent = map[selector];
    });
  }

  function applyLocale(locale) {
    var slug = pageSlug();
    if (!slug) return;
    var page = COPY[locale] && COPY[locale][slug];
    if (!page) return;

    document.documentElement.lang = locale === 'es' ? 'es' : 'en';
    if (page.documentTitle) document.title = page.documentTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && page.metaDescription) meta.setAttribute('content', page.metaDescription);

    applySelectors(page.selectors, false);
    applySelectors(page.htmlSelectors, true);

    document.querySelectorAll('[data-case-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-case-lang') === locale;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    localStorage.setItem(STORAGE_KEY, locale);
  }

  function initLangSwitch() {
    document.querySelectorAll('[data-case-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLocale(btn.getAttribute('data-case-lang') || 'en');
      });
    });
  }

  applyLocale(getLocale());
  initLangSwitch();
})();
