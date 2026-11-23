# PRD — PLC Landing web

Fecha: 2026-11-23  
Estado: documento base. Describe la página existente y lo que queda pendiente.

## Índice

- [Objetivo](#objetivo)
- [RF. Requisitos funcionales](#rf-requisitos-funcionales)
- [RNF. Requisitos no funcionales](#rnf-requisitos-no-funcionales)
- [FC. Fuera de alcance](#fc-fuera-de-alcance)
- [Pendientes](#pendientes)

## Objetivo

Presentar en una sola página los servicios de mantenimiento industrial de TecnoMantenimiento Industrial MTY y facilitar el primer contacto por WhatsApp, teléfono o formulario. El formulario envía la solicitud por correo a través de FormSubmit; no hay base de datos propia.

## RF. Requisitos funcionales

| ID | Requisito | Estado |
| --- | --- | --- |
| RF-01 | Una sola página en `/` con navegación por anclas. | Implementado |
| RF-02 | Encabezado fijo con menú móvil y botón de cotización. | Implementado |
| RF-03 | Hero con propuesta de valor, cobertura y dos llamadas a la acción. | Implementado |
| RF-04 | Secciones: servicios, por qué nosotros, proceso, marcas y testimonios, FAQ y contacto. | Implementado |
| RF-05 | Formulario conectado a FormSubmit, con confirmación, error visible y opción de enviar otra solicitud. | Implementado |
| RF-06 | Datos de negocio editables en `src/components/industrial/content.ts`. | Implementado |
| RF-07 | Enlaces de teléfono, WhatsApp, correo y mapa en la sección de contacto. | Implementado |
| RF-08 | Aviso de privacidad provisional que informa del envío por correo, accesible desde el formulario y el pie de página. | Implementado |

## RNF. Requisitos no funcionales

| ID | Requisito | Estado |
| --- | --- | --- |
| RNF-01 | Accesibilidad: Lighthouse sin fallos. | Implementado (100/100) |
| RNF-02 | SEO y buenas prácticas: Lighthouse 100/100. | Implementado |
| RNF-03 | Fotos servidas por punteros de Lovable; copias locales fuera del repo. | Implementado |
| RNF-04 | Interfaz y documentación en español. | Implementado |
| RNF-05 | Carga diferida de imágenes secundarias. | Implementado |

## FC. Fuera de alcance

| ID | Elemento |
| --- | --- |
| FC-01 | Backend, base de datos o migraciones. |
| FC-02 | Base de datos propia para almacenar las solicitudes. |
| FC-03 | Rutas adicionales o blog. |
| FC-04 | Login, panel de administración, pagos o carrito. |

## Pendientes

- PD-01: reemplazar los datos de ejemplo que quedan (años de experiencia, cobertura, certificaciones y testimonios) por datos reales.
- PD-03: publicar el aviso de privacidad definitivo.
- PD-05: hacer el primer envío real y confirmar el correo de FormSubmit.
