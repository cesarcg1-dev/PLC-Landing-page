# CONVENCIONES DE CÓDIGO — PLC Landing web

Fecha: 2026-11-23  
Estado: convenciones observadas en el código actual.

## Índice

- [CV. Convenciones](#cv-convenciones)
- [Nombres de anclas](#nombres-de-anclas)
- [Commits](#commits)

## CV. Convenciones

| ID | Convención |
| --- | --- |
| CV-01 | La interfaz y los documentos van en español; los identificadores de código van en inglés. |
| CV-02 | Las secciones viven en `src/components/industrial/sections.tsx`. |
| CV-03 | Los datos editables viven en `src/components/industrial/content.ts`. |
| CV-04 | Los componentes en `src/components/ui/` son genéricos: no se editan salvo necesidad clara. |
| CV-05 | Los colores se definen en `oklch` dentro de `src/styles.css`; no se usan hex en componentes. |
| CV-06 | No se importan archivos `.jpg` al código; se usa el puntero y el respaldo en `IndustrialImage`. |
| CV-07 | `src/routeTree.gen.ts` es generado: nunca se edita a mano ni se incluye en commits. |
| CV-08 | Un cambio por commit, con mensaje corto y prefijo `feat:`, `fix:` o `docs:`. |

## Nombres de anclas

Las anclas van en minúsculas, sin acentos y sin espacios: `inicio`, `servicios`, `nosotros`, `proceso`, `faq`, `contacto`. Se definen una sola vez en `links`, dentro de `content.ts`.

## Commits

Los mensajes pueden citar IDs de otros documentos cuando aplique, por ejemplo `fix: accesibilidad (D-06, D-07)` o `docs: CHANGELOG C-001`.
