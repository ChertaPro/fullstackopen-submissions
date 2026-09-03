# Ejercicio 0.4: Nueva nota

Diagrama de secuencia que describe la situación en la que el usuario crea una nueva nota en `https://studies.cs.helsinki.fi/exampleapp/notes` escribiendo algo en el campo de texto y haciendo clic en el botón **Guardar**, en la versión tradicional de la aplicación.

```mermaid
sequenceDiagram
    participant browser as Navegador
    participant server as Servidor

    Note over browser: El usuario escribe el contenido<br>de una nueva nota y pulsa Guardar
    browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note over server: El servidor guarda la nueva nota
    server-->>browser: HTTP 302 redirige a /notes

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: documento HTML

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: main.css

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>browser: main.js

    Note over browser: El navegador empieza a ejecutar<br>el código JS y solicita los datos
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: [{ contenido: "...", fecha: "..." }, ...]

    Note over browser: El navegador ejecuta el callback<br>que renderiza las notas en pantalla
```
