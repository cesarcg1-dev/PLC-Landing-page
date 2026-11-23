# PLC Landing web — Roadmap

**Versión:** 1.0 · **Fecha:** 23 de noviembre de 2026 · **Estado:** etapas con avance registrado; sin fechas de entrega

Cada etapa termina cuando se cumple su condición. No se avanza con pendientes que la bloqueen (ver `Docs/DECISIONES.md`).

## Índice

Una sola tabla con las etapas 0 a 5: 0 Documentación, 1 Página y contenidos, 2 Formulario y privacidad, 3 Calidad y accesibilidad, 4 Contenido pendiente y 5 Publicación. Cada fila indica su trabajo, sus referencias y cuándo está lista.

| Etapa | Trabajo | Listo cuando |
|---|---|---|
| 0. Documentación | [x] `README.md` y los 9 documentos de `Docs/`; decisiones D-01 a D-12 y registro C-001 a C-006 | Los documentos no contradicen al código |
| 1. Página y contenidos | [x] Una ruta `/` con anclas, secciones, menú móvil, datos reales, cobertura y marca `Mtto MEX CNC` | La página muestra los datos vigentes y navega por anclas |
| 2. Formulario y privacidad | [ ] FormSubmit conectado (OP-08). Faltan activar el correo (PD-05) y publicar el aviso definitivo (PD-03) | El primer envío llega a `cesarcg1@gmail.com` y el aviso definitivo está publicado |
| 3. Calidad y accesibilidad | [x] Fotos con respaldo local, Lighthouse 100/100 y `npm test` con 10 pruebas | Los resultados quedan registrados en `Docs/TESTING.md` |
| 4. Contenido pendiente | [ ] Validar certificaciones y marcas (PD-01); agregar testimonios reales cuando se proporcionen | No queden ejemplos ni testimonios pendientes en `Docs/MEJORAS.md` |
| 5. Publicación | [x] Commits en `main` sincronizados con Lovable | La versión publicada coincide con el repositorio |

## Cómo usar este archivo

- Los IDs `PD-xx`, `D-xx`, `OP-xx` y `C-xxx` se definen en `Docs/DECISIONES.md`, `Docs/RUNBOOK.md` y `Docs/CHANGELOG.md`.
- Cuando una etapa cambie de estado, se actualiza esta tabla y su documento de origen.
