# DECISIONES — PLC Landing web

Fecha: 2026-11-23  
Estado: decisiones tomadas hasta hoy y pendientes abiertos.

## Índice

- [Decisiones](#decisiones)
- [Pendientes](#pendientes)
- [Resueltos](#resueltos)
- [Cómo usar este archivo](#cómo-usar-este-archivo)

## Decisiones

| ID | Decisión | Motivo |
| --- | --- | --- |
| D-01 | Mantener una sola ruta con anclas. | El brief pide una página de scroll continuo. |
| D-02 | Separar `content.ts` de `sections.tsx`. | Permite cambiar datos de negocio sin tocar la estructura. |
| D-03 | El formulario envía solicitudes por correo mediante FormSubmit. | No hay backend propio y FormSubmit no requiere servidor. |
| D-04 | Las fotos usan punteros de Lovable con respaldo local ignorado por git. | Mantiene los `.jpg` fuera del repositorio y permite ver las fotos en local. |
| D-05 | Los colores viven como tokens `oklch` en `src/styles.css`. | Tailwind v4 centraliza el sistema visual. |
| D-06 | El nombre accesible del logo sale de su texto visible. | Evita contradicciones entre texto y lectores de pantalla. |
| D-07 | Sin aplicación desde 2026-11-23: se retiraron los testimonios y sus estrellas. | Antes corregía un `aria-label` inválido; ya no hay estrellas en la página. |
| D-08 | Se usa `package-lock.json` ignorado; el repo conserva `bun.lock`. | npm generó el archivo en local y no debe subirse. |
| D-09 | Teléfono, WhatsApp, correo y ubicación reales en `content.ts`. | Los proporcionó el cliente el 2026-11-23; se muestran en contacto y footer. |
| D-10 | FormSubmit usa el endpoint AJAX con `_subject`, `_replyto`, `_honey` y `_captcha: false`. | Conservar la confirmación dentro de la página; el honeypot cubre el spam. |
| D-11 | La página no muestra testimonios hasta que el cliente los proporcione. | No se inventan frases ni nombres; quedan pendientes en `Docs/MEJORAS.md`. |
| D-12 | La marca visible es `Mtto MEX CNC` en logo, textos, metadatos y documentación. | Lo pidió el cliente antes del commit; se conserva el logo en dos líneas. |

## Pendientes

| ID | Pendiente | Relación |
| --- | --- | --- |
| PD-01 | Certificaciones y marcas que siguen siendo ejemplos; los testimonios se registrarán en MEJORAS. | PRD, CONTENT, MEJORAS |
| PD-03 | Aviso de privacidad definitivo. | PRD RF-08 |
| PD-05 | Confirmar el correo de FormSubmit con el primer envío real. | RUNBOOK |

## Resueltos

| ID | Resolución | Relación |
| --- | --- | --- |
| PD-02 | Formulario conectado a FormSubmit. | D-03, D-10 |
| PD-04 | Footer actualizado a © 2026. | MEJORAS punto 4 |

## Cómo usar este archivo

Antes de implementar algo que dependa de una decisión o de un pendiente, busca su ID aquí con la búsqueda de texto. Si el código contradice una decisión, se avisa y se propone cuál documento actualizar.
