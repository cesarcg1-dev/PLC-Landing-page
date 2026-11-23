# TESTING — PLC Landing web

Fecha: 2026-11-23  
Estado: cómo se prueba y qué se verificó.

## Índice

- [T. Pruebas automáticas](#t-pruebas-automáticas)
- [Verificación manual](#verificación-manual)
- [Últimos resultados](#últimos-resultados)

## T. Pruebas automáticas

| ID | Prueba | Archivo | Qué cubre |
| --- | --- | --- | --- |
| T-01 | Datos de negocio | `src/test/business.test.ts` | Horas de emergencia, estados y años de experiencia. |
| T-02 | Enrutamiento | `src/test/app-routing.test.tsx` | La ruta `/` resuelve a una página real. |
| T-03 | Imágenes | `src/test/images.test.tsx` | El puntero se usa primero y el respaldo local entra si falla, sin bucles. |
| T-04 | Accesibilidad | `src/test/accessibility.test.tsx` | Nombre accesible del logo y sección de marcas sin testimonios. |
| T-05 | Formulario | `src/test/contact-form.test.tsx` | Envío a FormSubmit con `fetch` simulado y mensaje de error. |

Comando: `npm test`.

## Verificación manual

- Abrir `http://localhost:8080` en el navegador integrado y usar **Ctrl+F5** si no se ven los cambios.
- Confirmar que las dos fotos se muestran en el hero y en «Por qué elegirnos».
- Enviar el formulario y comprobar el mensaje de confirmación; en el primer envío real, activar el correo de FormSubmit (OP-08).
- Abrir y cerrar el menú móvil, y comprobar que las anclas llevan a su sección.
- Ejecutar Lighthouse sobre la ruta `/` y revisar accesibilidad, buenas prácticas y SEO.

## Últimos resultados

- `npm test`: 5 archivos, 10 pruebas, todas pasan.
- Lighthouse: accesibilidad 100/100, buenas prácticas 100/100, SEO 100/100, sin fallos.
- Fotos en local: 2400 px de ancho, cargadas desde las copias ignoradas por git.
