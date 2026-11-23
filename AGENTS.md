# AGENTS.md — Reglas para asistentes de IA

Aplican a cualquier asistente que escriba o revise código de **PLC-Landing-page** (Landing web para mostrar a los clientes los servicios de mantenimiento, reparación, y fabricación de maquinaria industrial en México).

## Índice

- [Cómo consultar la documentación](#cómo-consultar-la-documentación)
- [Reglas](#reglas)
- [Forma de trabajo](#forma-de-trabajo)

## Cómo consultar la documentación

No leas los documentos completos. Busca solo lo que necesitas:

1. Abre `README.md`: su tabla dice qué documento responde cada pregunta.
2. Abre ese documento y lee solo su `## Índice`, que está al inicio, justo debajo del título.
3. Ve directo a la sección que necesitas, buscando su encabezado, y lee solo esa sección.
4. Para un ID concreto (`A-13`, `PD-03`, `P05`, `P05-Ob02-Btn01`, `T-04`), busca el ID con la búsqueda de texto en el documento que lo define.
5. Antes de implementar algo que dependa de un acuerdo o de un pendiente, busca su ID en `DECISIONES.md`.
6. `MIGRACIONES.md` no tiene índice, porque se queda tal como lo necesita Supabase. Busca la migración (`### 004`) o la tabla (`T-04`) por su encabezado.

## Reglas

1. **Alcance:** implementar solo lo que está en F1. Lo marcado fuera de alcance en `PRD.md` no se agrega.
2. **Pendientes:** si algo figura como pendiente (PD-xx en `DECISIONES.md`), preguntar; no decidir por cuenta propia.
3. **Seguridad:** los permisos se validan en backend y base de datos. Ocultar un botón no cuenta como protección.
4. **Privacidad:** nunca exponer datos de contacto del vendedor ni datos de compradores fuera de lo permitido.
5. **Secretos:** nunca poner claves ni contraseñas en el código, el frontend o el repositorio.
6. **Ligereza:** no agregar librerías pesadas sin justificarlo. Imágenes optimizadas y carga diferida.
7. **Cambios pequeños:** un cambio por vez, fáciles de revisar.
8. **IDs:** referirse a pantallas, objetos y tablas por su ID (`P05`, `P05-Ob02-Btn01`, `T-04`) en commits y comentarios.
9. **Documentación:** si el código contradice un documento, avisar y proponer cuál actualizar. Primero `DECISIONES.md`. Si cambias, agregas o quitas una sección, actualiza el índice de ese documento.

## Forma de trabajo

- Responder y comentar en español.
- Explicar cada cambio en pasos cortos: qué se hace y por qué. Avanzar cuando el paso anterior quede entendido.
- Convención de nombres y estructura del código: `MU Web/Docs/CONVENCIONES_CODIGO.md` (A-28).
