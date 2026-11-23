# ARCHITECTURE — PLC Landing web

Fecha: 2026-11-23  
Estado: describe la arquitectura actual del repositorio.

## Índice

- [Stack](#stack)
- [A. Capas y responsabilidades](#a-capas-y-responsabilidades)
- [A. Renderizado y enrutamiento](#a-renderizado-y-enrutamiento)
- [A. Imágenes](#a-imágenes)
- [A. Formulario](#a-formulario)
- [A. Estilos](#a-estilos)
- [A. Pruebas](#a-pruebas)
- [Restricciones](#restricciones)

## Stack

- React 19, TypeScript y Vite 8.
- TanStack Start y TanStack Router con enrutamiento por archivos.
- Tailwind CSS v4 con tokens en `src/styles.css`.
- Componentes UI de Radix/shadcn en `src/components/ui/`.
- Vitest, Testing Library y jsdom para pruebas.
- FormSubmit como servicio externo de correo: no hay backend propio.
- Proyecto conectado a Lovable; los commits en `main` sincronizan con el editor.

## A. Capas y responsabilidades

| ID | Capa | Ubicación | Responsabilidad |
| --- | --- | --- | --- |
| A-01 | Ruta | `src/routes/index.tsx` | Define metadatos y ensambla las secciones. |
| A-02 | Shell | `src/routes/__root.tsx` | Envuelve la aplicación y conserva `<Outlet />`. |
| A-03 | Secciones | `src/components/industrial/sections.tsx` | Todo el contenido visual de la página. |
| A-04 | Contenido | `src/components/industrial/content.ts` | Datos de negocio, enlaces, servicios y configuración de FormSubmit. |
| A-05 | UI genérica | `src/components/ui/` | Botones, acordeón y otros primitivos reutilizables. |
| A-06 | Estilos | `src/styles.css` | Tokens de color, tipografía y utilidades como `reveal`. |
| A-07 | Recursos | `src/assets/*.asset.json` | Punteros a las fotos alojadas en Lovable. |
| A-08 | Pruebas | `src/test/` | Pruebas de datos, ruta, imágenes, accesibilidad y formulario. |
| A-09 | Servicio externo | FormSubmit | Recibe la solicitud y envía el correo sin backend propio. |

## A. Renderizado y enrutamiento

- Hay una sola ruta pública: `/`.
- `src/routes/index.tsx` usa `createFileRoute("/")` y define título, descripción y metadatos Open Graph.
- `src/routeTree.gen.ts` es generado automáticamente: no se edita a mano.
- La navegación es por anclas (`#inicio`, `#servicios`, `#nosotros`, `#proceso`, `#faq`, `#contacto`).

## A. Imágenes

- `IndustrialImage` pide primero la `url` del puntero de Lovable.
- Si el puntero falla, cambia a una copia local en `/src/assets/*.jpg`.
- Las copias `.jpg` están en `.gitignore`: no se suben al repositorio.
- No se importan imágenes binarias desde el código, para no incluirlas en el bundle.

## A. Formulario

- `Contact` reúne los campos con `FormData` y hace un `POST` JSON a `https://formsubmit.co/ajax/cesarcg1@gmail.com`.
- El destinatario y el asunto viven en `contactForm`, dentro de `content.ts`.
- La respuesta `{"success":"true"}` muestra la confirmación; cualquier otro caso muestra un error con `role="alert"`.
- `_replyto` usa el correo del visitante, `_honey` es la trampa anti-spam y `_captcha` queda en `false`.

## A. Estilos

- Los colores se definen con `oklch` en `:root` y se mapean a utilidades en `@theme inline`.
- El color primario es `oklch(0.57 0.17 44)` y el de WhatsApp `oklch(0.5 0.13 150)`.
- Las utilidades `reveal` e `is-visible` animan las secciones al hacer scroll.

## A. Pruebas

- `npm test` ejecuta Vitest sobre cinco archivos de prueba.
- La verificación visual se hace en el navegador integrado sobre `http://localhost:8080`.
- Lighthouse complementa las pruebas con accesibilidad, buenas prácticas y SEO.

## Restricciones

- No agregar base de datos, migraciones ni secretos al repositorio.
- No reescribir historial publicado de Lovable: sin `push --force` ni rebase de commits ya subidos.
- Mantener la experiencia de una sola página.
- Los cambios pequeños se validan con `npm test` antes de commitear.
