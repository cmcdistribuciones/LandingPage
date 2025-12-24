# Historial de Cambios

## [24 de Diciembre, 2025]

### Agregado
- **Modal Premium de Productos**: Implementado sistema de popup/modal con diseño glassmorphism para mostrar información detallada de productos.
  - Base de datos JSON (`health/products-data.json`) con información completa de 13 productos.
  - Diseño premium con efectos de glassmorphism, animaciones suaves y scrollbar personalizado.
  - Opciones de precio (Unidad, Combo x2, Combo x3) con cálculo automático de ahorros.
  - Beneficios principales listados con emojis para mejor lectura.
  - Instrucciones de uso para cada producto.
  - Integración con WhatsApp manteniendo funcionalidad existente.
  - Múltiples formas de cierre: botón X, botón Cerrar, tecla ESC, click fuera del modal.
  - Documentación completa en `health/MODAL_DOCUMENTATION.md`.

### Cambiado
- **Tarjetas de Productos**: Agregados atributos `data-product-id` y eventos `onclick` para abrir el modal.
- **JavaScript**: Nuevo sistema de carga dinámica de productos desde JSON (`health/script.js`).
- **CSS**: Agregados ~370 líneas de estilos para el modal premium (`health/style.css`).

## [Sin Publicar]

### Agregado
- **Catálogo de Salud**: Se actualizaron las imágenes de los productos en `health/index.html` para usar las versiones con fondo blanco (`_white.png`), mejorando la consistencia visual del catálogo.

### Cambiado
- **Rebranding General**:
    - Se cambió el nombre de la empresa/portal principal a **"CMC Distribuciones"**.
    - Se actualizó el título y logo del portal (`index.html`) a "CMC DISTRIBUCIONES".
    - Se actualizó la categoría de Tecnología a "**CMC Tech**".
    - Se actualizó la categoría de Salud a "**CMC Salud**" pero manteniendo la mención a "**Línea Fitovit**" como marca de productos.
    - Se actualizaron los pies de página (footers) en todas las páginas para reflejar "CMC Distribuciones".

### Agregado
- **Categoría Misteriosa**: Se añadió una tarjeta "Secret / Coming Soon" (`card-mystery`) al portal `index.html`.
- **Página Portal**: Nuevo diseño inmersivo "Premium Dark".
- **Categoría Salud**: `health/index.html` (Verde/Dorado).
- **Categoría Tecnología**: `technology/index.html` (Azul/Tech).

### Eliminado
- **Modo Oscuro**: Eliminado.
- **Estructura Anterior**: Archivos reorganizados en carpetas.
