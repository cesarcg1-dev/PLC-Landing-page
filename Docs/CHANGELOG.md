# CHANGELOG

Resúmenes ejecutivos de los cambios del proyecto. Cada entrada lleva un ID consecutivo.

## Índice

| ID | Fecha | Resumen |
| --- | --- | --- |
| [C-007](#c-007-roadmap-del-proyecto) | 2026-11-23 | Roadmap del proyecto |
| [C-006](#c-006-cambio-de-marca-a-mtto-mex-cnc) | 2026-11-23 | Cambio de marca a Mtto MEX CNC |
| [C-005](#c-005-readme-como-índice-del-proyecto) | 2026-11-23 | README como índice del proyecto |
| [C-004](#c-004-cobertura-real-y-retiro-de-testimonios) | 2026-11-23 | Cobertura real y retiro de testimonios |
| [C-003](#c-003-datos-reales-año-del-footer-y-formulario-con-formsubmit) | 2026-11-23 | Datos reales y formulario con FormSubmit |
| [C-002](#c-002-documentación-del-proyecto) | 2026-11-23 | Documentación del proyecto |
| [C-001](#c-001-revisión-inicial-fotos-y-accesibilidad) | 2026-11-23 | Revisión inicial, fotos y accesibilidad |

## C-007. Roadmap del proyecto

Fecha: 2026-11-23  
Estado: implementado.

### Resumen ejecutivo

Se creó `ROADMAP.md` tomando como forma el roadmap de otro proyecto: una tabla de etapas con su condición de cierre, sin fechas de entrega. El contenido se adaptó a la situación real de PLC Landing web.

### Cambios

- `ROADMAP.md`: etapas 0 a 5 para documentación, página, formulario y privacidad, calidad, contenido pendiente y publicación.
- `README.md`: nueva fila para consultar el roadmap.

### Verificación

- Las etapas y los IDs citados existen en `Docs/DECISIONES.md`, `Docs/RUNBOOK.md` y `Docs/CHANGELOG.md`.

### Commits relacionados

- `7e8a5a7` — estado anterior del repositorio.

## C-006. Cambio de marca a Mtto MEX CNC

Fecha: 2026-11-23  
Estado: implementado.

### Resumen ejecutivo

Se sustituyó el nombre anterior de la empresa por **Mtto MEX CNC** en la interfaz, los metadatos, las pruebas y la documentación. El logo mantiene dos líneas: «Mtto MEX» y «CNC», de modo que su nombre accesible es «Mtto MEX CNC».

### Cambios

- `src/components/industrial/sections.tsx`: logo, aviso de privacidad, descripción del footer y copyright.
- `src/routes/__root.tsx` y `src/routes/index.tsx`: título y `og:title`.
- `src/test/accessibility.test.tsx`: nombre accesible esperado.
- `README.md` y `Docs/PRD.md`: nombre de la empresa.
- `Docs/MEJORAS.md`: nota histórica de accesibilidad reformulada sin repetir el nombre anterior.
- `Docs/DECISIONES.md`: decisión D-12.

### Verificación

- `npm test`: 10 pruebas en 5 archivos, todas pasan.
- Búsqueda de texto: no quedan referencias al nombre anterior.

### Commits relacionados

- `7d0db2e` — estado anterior del repositorio.

## C-005. README como índice del proyecto

Fecha: 2026-11-23  
Estado: implementado.

### Resumen ejecutivo

Se recreó `README.md`, que estaba borrado en el árbol de trabajo. El nuevo archivo sirve de puerta de entrada: comandos básicos, tabla que indica qué documento responde cada pregunta, estado actual y pendientes.

### Cambios

- `README.md`: inicio rápido, índice de los 9 documentos de `Docs/`, estado actual, pendientes PD-01, PD-03 y PD-05 y nota sobre `AGENTS.md` como referencia.

### Verificación

- Los 9 documentos referenciados existen y tienen `## Índice` al inicio.

### Commits relacionados

- `7d0db2e` — estado anterior del repositorio.

## C-004. Cobertura real y retiro de testimonios

Fecha: 2026-11-23  
Estado: implementado. Siguen PD-01, PD-03 y PD-05, más el pendiente de testimonios en `Docs/MEJORAS.md`.

### Resumen ejecutivo

Se confirmaron como datos reales los 15 años de experiencia y la cobertura en el Area Metropolitana de Monterrey. Se retiraron los testimonios de demostración; se agregarán cuando el cliente proporcione frases y nombres reales.

### Cambios

- `src/components/industrial/content.ts`: `states` se sustituye por `coverage` con el Area Metropolitana de Monterrey.
- `src/components/industrial/sections.tsx`: cobertura real en tres puntos y bloque de testimonios retirado de `SocialProof`; el icono `Star` ya no se usa.
- `src/routes/index.tsx`: metadato de descripción actualizado.
- Pruebas: se ajustaron `business.test.ts` y `accessibility.test.tsx`.
- Documentación: PRD, DECISIONES, CONTENT, MEJORAS y TESTING actualizados.

### Verificación

- `npm test`: 10 pruebas en 5 archivos, todas pasan.

### Commits relacionados

- `7d0db2e` — estado anterior del repositorio.

## C-003. Datos reales, año del footer y formulario con FormSubmit

Fecha: 2026-11-23  
Estado: implementado. Quedan PD-01, PD-03 y PD-05.

### Resumen ejecutivo

Se reemplazaron los datos de contacto de ejemplo por los que proporcionó el cliente, se actualizó el año del pie de página y se conectó el formulario a FormSubmit. El envío ya es real: las solicitudes llegan por correo a `cesarcg1@gmail.com`. El aviso de privacidad sigue siendo provisional, pero ahora informa del envío.

### Cambios

- `src/components/industrial/content.ts`: teléfono y WhatsApp `811-1917-150`, correo `cesarcg1@gmail.com`, ubicación en Emancipacion Proletaria No. 1835 y configuración `contactForm`.
- `src/components/industrial/sections.tsx`: datos reales en contacto y footer, © 2026, envío JSON a FormSubmit con `_subject`, `_replyto`, `_honey` y `_captcha: false`, y mensajes de confirmación y error.
- Pruebas: nueva `src/test/contact-form.test.tsx`; `business.test.ts` verifica los datos reales.
- Documentación: PRD, DECISIONES, MEJORAS, CONTENT, ARCHITECTURE, RUNBOOK y TESTING actualizados.

### Verificación

- `npm test`: 10 pruebas en 5 archivos, todas pasan.
- Falta el primer envío real para activar el correo en FormSubmit (PD-05).

### Commits relacionados

- `93c3700` — sincronización documental previa.
- `8be9584` — documentación base.

## C-002. Documentación del proyecto

Fecha: 2026-11-23  
Estado: implementado.

### Resumen ejecutivo

Se creó la documentación base de PLC Landing web: producto, arquitectura, decisiones, convenciones, operación, pruebas y contenido. El `AGENTS.md` presente en el repo se usa solo como referencia de estilo, porque fue copiado de otro proyecto. `README.md` y `roadmap.md` permanecen borrados a petición.

### Cambios

- `Docs/PRD.md`: objetivos, requisitos, fuera de alcance y pendientes.
- `Docs/ARCHITECTURE.md`: stack, capas, renderizado, imágenes, estilos y pruebas.
- `Docs/DECISIONES.md`: decisiones D-01 a D-08 y pendientes PD-01 a PD-04.
- `Docs/CONVENCIONES_CODIGO.md`: convenciones CV-01 a CV-08, anclas y commits.
- `Docs/RUNBOOK.md`: comandos, fotos locales y normas de Lovable.
- `Docs/TESTING.md`: pruebas T-01 a T-04 y verificación manual.
- `Docs/CONTENT.md`: fuentes de contenido y datos de ejemplo.

### Verificación

- Los siete documentos tienen `## Índice` al inicio.
- `npm test`: 4 archivos, 7 pruebas, todas pasan.

### Commits relacionados

- `8be9584` — crea la documentación base y actualiza este CHANGELOG.

## C-001. Revisión inicial, fotos y accesibilidad

Fecha: 2026-11-23  
Estado: implementado. Quedan pendientes los puntos 3 y 4 de `Docs/MEJORAS.md`.

### Resumen ejecutivo

Se revisó la landing industrial y se documentaron sus mejoras. Se corrigió la visualización de las fotografías en el entorno local sin subir binarios al repositorio, y se elevó la accesibilidad de 92 a 100 en Lighthouse. La página conserva su estructura de una sola página con navegación por anclas y el formulario simulado.

### Cambios

- Documentación: nuevo `Docs/MEJORAS.md` con el inventario de mejoras y sus prioridades.
- Fotografías: los punteros de Lovable siguen siendo la fuente principal; `IndustrialImage` usa las copias locales solo cuando el puntero falla. Los `.jpg` están ignorados por git.
- Accesibilidad: se corrigió el `aria-label` inválido en las estrellas, el nombre accesible del logo y los contrastes del naranja primario y del verde de WhatsApp.
- Pruebas: nuevas pruebas para el respaldo de imágenes y para los puntos de accesibilidad.

### Verificación

- `npm test`: 7 pruebas en 4 archivos, todas pasan.
- Lighthouse: accesibilidad 100/100, buenas prácticas 100/100, SEO 100/100, sin fallos.
- Navegador: las dos fotografías cargan en local con 2400 px de ancho.

### Commits relacionados

- `a1a75fb` — documento inicial de mejoras.
- `47502a4` — respaldo local de fotografías.
- `a66ae11` — cierra accesibilidad y agrega este CHANGELOG.
