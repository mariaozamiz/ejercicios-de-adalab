# EJERCICIO 2

## Enunciado

Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.

## Comentarios

-   la URL base del API es (https://swapi.dev/api/)
-   no necesita autenticación
-   método HTTP que deben usar las peticiones a este API es **GET**
-   la URL para acceder a la info de "Luke Skywalker" es (https://swapi.dev/api/people/1/)
-   la URL para acceder a la película "A New Hope" es (https://swapi.dev/api/films/1/)
-   además de personajes y pelis, puedes acceder a información sobre planetas, naves espaciales, vehículos y especies de la saga.
-   para acceder al listado de personajes la URL es (https://swapi.dev/api/people/) y está paginada.
-   Para buscar personajes mediante la URL usaremos (https://swapi.dev/api/people/?search=r2)
-   Para que JSON devuelva una petición traducida a Wookiee, tan solo hay que añadir (?format=wookiee) al final de la URL de nuestra petición.
