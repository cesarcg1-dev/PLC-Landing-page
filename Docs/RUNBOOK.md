# RUNBOOK — PLC Landing web

Fecha: 2026-11-23  
Estado: procedimientos para trabajar y verificar el proyecto.

## Índice

- [OP. Operaciones](#op-operaciones)
- [Fotos locales](#fotos-locales)
- [FormSubmit](#formsubmit)
- [Lovable](#lovable)

## OP. Operaciones

| ID | Operación | Comando o acción |
| --- | --- | --- |
| OP-01 | Requisitos | Node.js y npm. Node 24 está probado en este proyecto. |
| OP-02 | Instalar dependencias | `npm install --no-package-lock` (el repo usa `bun.lock`, pero `bun` no está instalado). |
| OP-03 | Arrancar | `npm run dev` → `http://localhost:8080`. |
| OP-04 | Probar | `npm test`. |
| OP-05 | Compilar | `npm run build`. |
| OP-06 | Analizar código | `npm run lint`. |
| OP-07 | Formatear | `npm run format`. |
| OP-08 | Activar FormSubmit | Hacer un envío real desde el formulario y aceptar el correo de confirmación que llega a `cesarcg1@gmail.com`. |

## Fotos locales

Los punteros en `src/assets/*.asset.json` contienen `url` y `r2_key`. Si se descargan las fotos desde Lovable, colocarlas en `src/assets/` con los nombres `industrial-machine.jpg`, `industrial-workshop.jpg` y `cnc-factory.jpg`. Ya están ignoradas por git.

Sin esas copias, el puntero falla en local y la imagen no se muestra; en Lovable el puntero sí funciona.

## FormSubmit

- El formulario envía un JSON con `POST` a `https://formsubmit.co/ajax/cesarcg1@gmail.com`.
- El destinatario y el asunto están en `contactForm`, dentro de `src/components/industrial/content.ts`.
- Se envían `_subject`, `_replyto` con el correo del visitante y `_honey` como trampa para bots; reCAPTCHA queda desactivado con `_captcha: false`.
- La primera vez, FormSubmit envía un correo de confirmación al destinatario. Hasta aceptarlo, no llegan las solicitudes (PD-05).
- Para cambiar el destinatario, editar solo `contactForm.endpoint` en `content.ts`.

## Lovable

- El proyecto está conectado a Lovable; los commits en `main` sincronizan con el editor.
- No hacer `push --force`, rebase ni squash de commits ya publicados.
- Si una imagen o un cambio de esquema debe hacerse en Lovable, usar el editor en lugar de editar archivos generados.
