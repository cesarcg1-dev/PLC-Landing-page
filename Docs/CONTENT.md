# CONTENT — PLC Landing web

Fecha: 2026-11-23  
Estado: inventario del contenido editable y de los datos de ejemplo.

## Índice

- [CT. Fuentes de contenido](#ct-fuentes-de-contenido)
- [Datos reales y de ejemplo](#datos-reales-y-de-ejemplo)
- [Regla de datos reales](#regla-de-datos-reales)

## CT. Fuentes de contenido

| ID | Contenido | Ubicación |
| --- | --- | --- |
| CT-01 | Datos de contacto reales, ubicación y métricas de ejemplo | `business` en `src/components/industrial/content.ts`. |
| CT-06 | Destinatario y asunto del formulario | `contactForm` en `content.ts`. |
| CT-02 | Enlaces del menú y del footer | `links` en `content.ts`. |
| CT-03 | Servicios y listas de bullets | `services` en `content.ts`. |
| CT-04 | Textos de secciones, FAQ y testimonios | `src/components/industrial/sections.tsx`. |
| CT-05 | Metadatos de la página | `src/routes/index.tsx`. |

## Datos reales y de ejemplo

Datos reales, proporcionados por el cliente el 2026-11-23:

- Teléfono y WhatsApp: `811-1917-150` (`tel:+528111917150`, `wa.me/528111917150`).
- Correo: `cesarcg1@gmail.com`.
- Ubicación: `Emancipacion Proletaria No. 1835 Col. CROC. Monterrey, Nuevo León; Mexico`.

Siguen siendo ejemplos:

- Años de experiencia: 15. Respuesta a emergencias: 4 horas.
- Cobertura: Nuevo León, Coahuila, Tamaulipas y San Luis Potosí.
- Certificaciones mostradas: ISO 9001:2015 y REPSE.
- Testimonios, marcas y sectores atendidos.
- Aviso de privacidad provisional; el formulario sí envía correo.

## Regla de datos reales

Los valores marcados como ejemplo son de demostración. No se inventan datos reales: se piden al cliente y se reemplazan en `content.ts` o en `sections.tsx`, según corresponda. Los pendientes PD-01 y PD-03 de `DECISIONES.md` registran lo que falta.
