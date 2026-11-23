# CHANGELOG

Resúmenes ejecutivos de los cambios del proyecto. Cada entrada lleva un ID consecutivo.

## Índice

| ID | Fecha | Resumen |
| --- | --- | --- |
| [C-001](#c-001-revisión-inicial-fotos-y-accesibilidad) | 2026-11-23 | Revisión inicial, fotos y accesibilidad |

## C-001. Revisión inicial, fotos y accesibilidad

Fecha: 2026-11-23  
Estado: implementado. Quedan pendientes los puntos 3 y 4 de `Docs/MEJORAS.md`.

### Resumen ejecutivo

Se revisó la landing industrial y se documentaron sus mejoras. Se corrigió la visualización de las fotografías en el entorno local sin subir binarios al repositorio, y se elevó la accesibilidad de 92 a 100 en Lighthouse. La página conserva su estructura de una sola sección con navegación por anclas y el formulario simulado.

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
- Commit actual — cierra accesibilidad y agrega este CHANGELOG.
