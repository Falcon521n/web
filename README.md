# Sitio web personal

Proyecto PHP, HTML, CSS, JavaScript y MySQL. Incluye páginas personales y un CRUD de usuarios con registro, inicio de sesión, modificación y eliminación.

## Requisitos

- PHP con la extensión `mysqli`
- MySQL o MariaDB
- Apache o un servidor web que ejecute PHP

## Configuración de la base de datos

1. Crea una base de datos en MySQL o desde el panel de tu hosting.
2. Importa `mi_bd.sql` en esa base de datos.
3. Copia `PHP/db_config.example.php` como `PHP/db_config.local.php`.
4. Completa `PHP/db_config.local.php` con los datos que proporciona tu hosting. Ese archivo está excluido de Git y no debe publicarse.

También se pueden proporcionar los valores mediante las variables de entorno `DB_HOST`, `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE` y `DB_PORT`.

## Ejecutar en XAMPP

1. Coloca la carpeta `web` dentro de `C:\xampp\htdocs`.
2. Inicia Apache y MySQL desde el panel de XAMPP.
3. Abre `http://localhost/web/HTML/index.html`.

## Páginas

- Inicio y enlaces CRUD: `HTML/index.html`
- Registro: `HTML/Registro.html`
- Inicio de sesión: `HTML/Login.html`
- Modificación: `HTML/Editar.html`
- Eliminación: `HTML/Eliminar.html`

El respaldo `mi_bd.sql` contiene el esquema de la tabla, no los datos de usuarios.
