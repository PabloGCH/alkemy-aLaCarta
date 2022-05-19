Projecto de Angular para alkemy
=================================

### Descripción
Un SPA realizada en Angular como desafío para el campus de alkemy. Esta es una aplicación para un restaurante ficticio llamado "A la carta", con el propósito de servir como un menu virtual, para esto, permite al usuario manipular un menu al cual le puede añadir (caso el cual se puede realizar una búsqueda de platos) o eliminar platos. Además hace uso del routing de angular y guards para evitar que el usuario acceda a la aplicación sin loguearse primero.
### Tecnologias utilizadas
Para realizar la aplicación se utilizó:
  - EL framework de Angular.
  - Bootstrap para realizar el maquetado de la aplicación y para hacer uso de sus componentes de formularios y sus herramientas para el colapsado de elementos.
  - SASS/SCSS para los estilos de la aplicación y sus componentes.
  - SweetAlert 2 para pop ups para confirmar acciones o notificar el exito o error de acciones.
  - La librería rxjs incluida en angular para hacer uso de sus observadores para recibir la respuestas de las peticiones GET y POST.
  - El reactiveFormModules para la validación de formularios
  - El AppRoutingModule para el control de rutas
  - Y el HttpClientModule para las peticiones a servidores.
### Setup
Después de clonar el repositorio solo es necesario ir al directorio de la aplicación y ejecutar el siguiente comando en la terminal:
``` bash
npm i
```
Para instalar las dependencias necesarias.

Para realizar las peticiones para conseguir platos se usa la API de [spoonacular](https://spoonacular.com/food-api), actualmente esta utilizando mi APIKEY, pero si decides utilizar otra APIKEY, o la aplicación no funciona porque yo resetee la mia, solo es necesario modificar la variable apiKey en el servicio dish-request.service.ts.
