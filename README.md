# Full Stack Open — Envíos de ejercicios

Repositorio único para los ejercicios del curso [Full Stack Open](https://fullstackopen.com/en/) (Universidad de Helsinki), organizado por partes según la estructura oficial recomendada.

## Estructura

Cada carpeta `partN` contiene los ejercicios de esa parte. Cuando una parte agrupa varias apps (como la parte 1), cada app va en su propia subcarpeta.

## Checklist de progreso

- [ ] Part 0 — Fundamentals of web apps
- [ ] Part 1 — Introduction to React
- [ ] Part 2 — Communicating with server
- [ ] Part 3 — Programming a server with NodeJS and Express
- [ ] Part 4 — Testing Express servers, user administration
- [ ] Part 5 — Testing React apps
- [ ] Part 6 — Advanced state management
- [ ] Part 7 — React router, custom hooks, styling
- [ ] Part 8 — GraphQL *(opcional en mi plan de estudio)*
- [ ] Part 9 — TypeScript
- [ ] Part 11 — CI/CD *(repo separado — ver nota abajo)*
- [ ] Part 12 — Containers
- [ ] Part 13 — Using relational databases

## Notas importantes de envío (verificadas en la web oficial del curso)

- Los ejercicios se envían por parte completa: una vez que marcas una parte como enviada en el sistema, **no puedes agregar más ejercicios pendientes de esa misma parte**. Termina todo lo que quieras entregar de una parte antes de marcarla.
- Puedes usar un solo repositorio para todo el curso (como este) o varios — lo único que importa es que la organización de carpetas sea clara.
- Excluye siempre `node_modules` del repo (ya cubierto en `.gitignore`).
- **La Parte 11 (CI/CD) es un caso especial:** no se hace en este mismo repositorio. Requiere un repositorio nuevo y separado porque hay que:
  1. Proteger la rama `main` (incluso contra los administradores).
  2. Configurar GitHub Actions.
  3. Pedir una revisión de código por pull request al usuario de GitHub `mluukkai` (avisando por Discord).
  4. Como el sistema de envíos solo acepta un repositorio por parte, si usas un repo separado para la 11, pon el link de este repo principal en el comentario del formulario de envío.
- Algunos nombres de ejercicios/apps pueden variar levemente según tu edición del curso — ajusta las subcarpetas de cada parte según lo que pida el enunciado al empezarla.
