# Ejercicio 0.5: Diagrama de aplicación de una sola página

Diagrama de secuencia que describe la situación en la que el usuario accede a la versión de aplicación de una sola página (SPA) de la aplicación de notas en `https://studies.cs.helsinki.fi/exampleapp/spa`.

```mermaid
sequenceDiagram
    participant browser as Navegador
    participant server as Servidor

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser: documento HTML

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: main.css

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->>browser: spa.js

    Note over browser: El navegador empieza a ejecutar<br>spa.js y solicita los datos
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: [{ contenido: "...", fecha: "..." }, ...]

    Note over browser: El navegador ejecuta el callback<br>que renderiza las notas en pantalla
```
