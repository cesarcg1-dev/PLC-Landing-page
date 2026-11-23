# CHANGELOG

Resúmenes ejecutivos de los cambios del proyecto. Cada entrada lleva un ID consecutivo.

## Índice

| ID | Fecha | Resumen |
| --- | --- | --- |
| [C-003](#c-003-datos-reales-año-del-footer-y-formulario-con-formsubmit) | 2026-11-23 | Datos reales y formulario con FormSubmit |
| [C-002](#c-002-documentación-del-proyecto) | 2026-11-23 | Documentación del proyecto |
| [C-001](#c-001-revisión-inicial-fotos-y-accesibilidad) | 2026-11-23 | Revisión inicial, fotos y accesibilidad |

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
