# Ejercicio 0.6: Nueva nota en diagrama de aplicación de una sola página

Diagrama de secuencia que describe la situación en la que el usuario crea una nueva nota utilizando la versión de aplicación de una sola página (SPA) de la aplicación de notas en `https://studies.cs.helsinki.fi/exampleapp/spa`.

A diferencia del ejercicio 0.4, aquí no hay recarga de página ni redirección 302: `spa.js` gestiona la creación de la nota mediante AJAX y actualiza el DOM directamente con la respuesta del servidor.

```mermaid
sequenceDiagram
    participant browser as Navegador
    participant server as Servidor

    Note over browser: El usuario escribe el contenido<br>de una nueva nota y pulsa Guardar
    browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note over server: El servidor procesa y guarda<br>la nota recibida en el payload
    server-->>browser: HTTP 201 { "message": "note created" }

    Note over browser: El navegador ejecuta el event handler<br>y añade la nota al DOM sin recargar la página
```
