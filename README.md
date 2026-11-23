# PLC Landing web

Landing de una sola página para **Mtto MEX CNC**: mantenimiento, reparación y fabricación de maquinaria industrial en México. La ruta pública es `/`, con navegación por anclas. El formulario envía la solicitud por correo a través de FormSubmit.

## Inicio rápido

- Requisitos: Node.js y npm. Node 24 está probado en este proyecto.
- Instalar: `npm install --no-package-lock` (el repo conserva `bun.lock`).
- Arrancar: `npm run dev` → `http://localhost:8080`.
- Probar: `npm test`.
- Compilar: `npm run build`. Revisar código: `npm run lint`. Formatear: `npm run format`.

Si no ves los cambios en el navegador, usa **Ctrl+F5**.

## ¿Qué documento consultar?

| Pregunta | Documento |
| --- | --- |
| ¿Qué hace la página y qué está fuera de alcance? | `Docs/PRD.md` |
| ¿Cómo está organizado el proyecto? | `Docs/ARCHITECTURE.md` |
| ¿Por qué se decidió cada cosa? | `Docs/DECISIONES.md` |
| ¿Cómo se nombran las cosas y se escriben los commits? | `Docs/CONVENCIONES_CODIGO.md` |
| ¿Cómo se ejecuta el proyecto y se activa FormSubmit? | `Docs/RUNBOOK.md` |
| ¿Cómo se prueba y qué se verificó? | `Docs/TESTING.md` |
| ¿Qué textos y datos se muestran? | `Docs/CONTENT.md` |
| ¿Qué falta mejorar? | `Docs/MEJORAS.md` |
| ¿Qué cambió en cada entrega? | `Docs/CHANGELOG.md` |
| ¿En qué orden se hará el trabajo? | `ROADMAP.md` |

Cada documento tiene un `## Índice` al inicio. Para un ID concreto (`RF-05`, `D-10`, `PD-05`, `OP-08`, `T-04`), busca ese texto en el documento que lo define.

## Estado actual

- Una sola página con anclas: `inicio`, `servicios`, `nosotros`, `proceso`, `faq`, `contacto`.
- Datos reales: teléfono y WhatsApp `811-1917-150`, correo `cesarcg1@gmail.com`, ubicación en Emancipacion Proletaria No. 1835, 15 años de experiencia y cobertura en el Area Metropolitana de Monterrey.
- El formulario envía correo por FormSubmit; el primer envío real requiere activar el correo del destinatario (PD-05).
- No hay testimonios en la página: se agregarán cuando el cliente los proporcione.
- Última verificación registrada: `npm test` con 10 pruebas en 5 archivos, y Lighthouse sin fallos.

## Pendientes

| ID | Pendiente |
| --- | --- |
| PD-01 | Validar las certificaciones y las marcas que todavía son ejemplos. |
| PD-03 | Publicar el aviso de privacidad definitivo. |
| PD-05 | Hacer el primer envío real y confirmar el correo de FormSubmit. |
| MEJORAS | Agregar testimonios reales cuando se tengan. |

## Nota

`AGENTS.md` se usa solo como referencia de estilo: fue copiado de otro proyecto. `roadmap.md` permanece borrado.
