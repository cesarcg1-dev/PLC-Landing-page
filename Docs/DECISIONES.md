# DECISIONES — PLC Landing web

Fecha: 2026-11-23  
Estado: decisiones tomadas hasta hoy y pendientes abiertos.

## Índice

- [Decisiones](#decisiones)
- [Pendientes](#pendientes)
- [Cómo usar este archivo](#cómo-usar-este-archivo)

## Decisiones

| ID | Decisión | Motivo |
| --- | --- | --- |
| D-01 | Mantener una sola ruta con anclas. | El brief pide una página de scroll continuo. |
| D-02 | Separar `content.ts` de `sections.tsx`. | Permite cambiar datos de negocio sin tocar la estructura. |
| D-03 | El formulario es simulado y lo dice en pantalla. | No existe backend ni servicio de correo contratado. |
| D-04 | Las fotos usan punteros de Lovable con respaldo local ignorado por git. | Mantiene los `.jpg` fuera del repositorio y permite ver las fotos en local. |
| D-05 | Los colores viven como tokens `oklch` en `src/styles.css`. | Tailwind v4 centraliza el sistema visual. |
| D-06 | El nombre accesible del logo sale de su texto visible. | Evita contradicciones entre texto y lectores de pantalla. |
| D-07 | Las estrellas usan `role="img"`. | `aria-label` no es válido en un `div` sin rol. |
| D-08 | Se usa `package-lock.json` ignorado; el repo conserva `bun.lock`. | npm generó el archivo en local y no debe subirse. |

## Pendientes

| ID | Pendiente | Relación |
| --- | --- | --- |
| PD-01 | Datos reales de teléfono, correo, años, certificaciones y cobertura. | PRD, CONTENT |
| PD-02 | Definir si el formulario se conecta a un servicio real. | PRD RF-05 |
| PD-03 | Aviso de privacidad definitivo. | PRD RF-08 |
| PD-04 | Cambiar © 2025 por © 2026 en el footer. | MEJORAS punto 4 |

## Cómo usar este archivo

Antes de implementar algo que dependa de una decisión o de un pendiente, busca su ID aquí con la búsqueda de texto. Si el código contradice una decisión, se avisa y se propone cuál documento actualizar.
