# EJERCICIO 3

Ahora vamos a explorar un nuevo API: el API de usuarios de GitHub. La URL de este API es (https://api.github.com/users/{username}), donde {username} es el nombre del usuario en GitHub.

Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:

-   nombre
-   número de repositorios
-   avatar (imagen)
