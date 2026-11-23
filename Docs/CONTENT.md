# CONTENT — PLC Landing web

Fecha: 2026-11-23  
Estado: inventario del contenido editable y de los datos de ejemplo.

## Índice

- [CT. Fuentes de contenido](#ct-fuentes-de-contenido)
- [Datos de ejemplo](#datos-de-ejemplo)
- [Regla de datos reales](#regla-de-datos-reales)

## CT. Fuentes de contenido

| ID | Contenido | Ubicación |
| --- | --- | --- |
| CT-01 | Datos de contacto y métricas | `business` en `src/components/industrial/content.ts`. |
| CT-02 | Enlaces del menú y del footer | `links` en `content.ts`. |
| CT-03 | Servicios y listas de bullets | `services` en `content.ts`. |
| CT-04 | Textos de secciones, FAQ y testimonios | `src/components/industrial/sections.tsx`. |
| CT-05 | Metadatos de la página | `src/routes/index.tsx`. |

## Datos de ejemplo

- Teléfono, WhatsApp y correo: `+52 81 1234 5678` y `contacto@tecnoindustrialmty.mx`.
- Años de experiencia: 15. Respuesta a emergencias: 4 horas.
- Cobertura: Nuevo León, Coahuila, Tamaulipas y San Luis Potosí.
- Certificaciones mostradas: ISO 9001:2015 y REPSE.
- Testimonios, marcas y sectores atendidos.
- Aviso de privacidad provisional y formulario simulado.

## Regla de datos reales

Los valores anteriores son de demostración. No se inventan datos reales: se piden al cliente y se reemplazan en `content.ts` o en `sections.tsx`, según corresponda. Los pendientes PD-01 a PD-03 de `DECISIONES.md` registran lo que falta.
