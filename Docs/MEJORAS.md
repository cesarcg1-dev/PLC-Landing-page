# Mejoras de la landing page

Fecha: 2026-11-22  
Proyecto: `12-PLC-Web/PLC-Landing-page`  
Estado: puntos 1, 2 y 4 resueltos; punto 3 resuelto en parte el 2026-11-23.

## Índice

- [Cómo se revisó](#cómo-se-revisó)
- [1. Fotos en local](#1-las-fotos-no-cargan-en-local-prioridad-alta)
- [2. Accesibilidad](#2-accesibilidad-3-fallos-concretos-prioridad-media)
- [3. Contenido de demostración](#3-contenido-todavía-de-demostración-prioridad-media)
- [4. Año del pie de página](#4-año-del-pie-de-página-prioridad-baja)
- [Pendiente de decidir](#pendiente-de-decidir)

## Cómo se revisó

- Servidor local: `npm run dev` → `http://localhost:8080/`.
- Pruebas: `npm test` → 5 archivos, 10 pruebas, todas pasan.
- Auditoría Lighthouse sobre la página inicial: accesibilidad 100/100, buenas prácticas 100/100, SEO 100/100, sin fallos.

## 1. Las fotos no cargan en local (prioridad alta)

Estado: resuelto el 2026-11-23 (commit `47502a4`). Los punteros de Lovable siguen siendo la fuente principal; `IndustrialImage` cae a las copias locales cuando fallan. Los `.jpg` están en `.gitignore` y no se suben al repo.

- Archivos implicados:
  - `src/assets/industrial-machine.jpg.asset.json`
  - `src/assets/industrial-workshop.jpg.asset.json`
  - `src/assets/cnc-factory.jpg.asset.json`
- Los tres apuntan a rutas `/__l5e/assets-v1/...` del hospedaje de Lovable. En el servidor local responden 404.
- En el navegador, las dos imágenes que sí se usan tienen `naturalWidth = 0`, es decir, no se muestran.
- `cnc-factory.jpg.asset.json` existe pero no se usa en `src/components/industrial/sections.tsx`.
- Restricción respetada: `AGENTS.md` pide servir las fotos mediante punteros de recurso y mantener los binarios fuera del repositorio. Se resolvió con copias locales ignoradas por git y el respaldo en `IndustrialImage`.

## 2. Accesibilidad: 3 fallos concretos (prioridad media)

Estado: resuelto el 2026-11-23. Se corrigieron esos tres fallos y los casos de contraste que aparecieron después: primario y verde de WhatsApp más oscuros, logo sin `aria-label` y estrellas con `role="img"`. Lighthouse quedó en 100/100 sin fallos.

Ubicaciones originales señaladas por la auditoría en `src/components/industrial/sections.tsx`:

- Línea 418: `aria-label="5 de 5 estrellas"` está en un `<div>` sin rol válido; ARIA no lo permite ahí.
- Línea 72: el texto «INDUSTRIAL MTY» tiene contraste 3.23:1 sobre blanco; el mínimo exigido es 4.5:1.
- Líneas 62 y 697: el `aria-label` del logo no coincidía con el texto visible; se eliminó para que el nombre accesible salga del propio enlace, hoy «Mtto MEX CNC».

Buenas prácticas y SEO quedaron en 100/100.

## 3. Contenido todavía de demostración (prioridad media)

Estado: resuelto en parte el 2026-11-23. Son datos reales el teléfono, WhatsApp, correo, ubicación, los 15 años de experiencia y la cobertura en el Area Metropolitana de Monterrey. El formulario envía solicitudes por correo mediante FormSubmit. No hay testimonios en la página: se agregarán cuando el cliente los proporcione. Siguen como ejemplo las certificaciones y las marcas.

- `src/components/industrial/content.ts` contiene los datos de contacto reales, los 15 años de experiencia y la cobertura real.
- En `sections.tsx` siguen siendo ejemplos las certificaciones ISO 9001 y REPSE y la lista de marcas. Los testimonios se retiraron de `SocialProof`.
- El formulario envía los datos por correo a través de FormSubmit; no hay base de datos propia.
- Los avisos de privacidad siguen marcados como provisionales, pero ya informan del envío por correo.
- Se desconocen los datos reales de la empresa; no deben inventarse.

## 4. Año del pie de página (prioridad baja)

Estado: resuelto el 2026-11-23. El footer dice «© 2026».

- En `sections.tsx` el footer decía «© 2025». La fecha actual es 2026.

## Pendiente de decidir

1. Validar las certificaciones ISO 9001:2015 y REPSE, que siguen siendo ejemplos (punto 3).
2. Agregar testimonios cuando el cliente los proporcione; no se inventarán frases ni nombres (punto 3).
3. Publicar el aviso de privacidad definitivo (punto 3).
4. Confirmar el correo de FormSubmit con el primer envío real.
