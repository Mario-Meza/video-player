
## Script JavaScript:
1. Utiliza el metodo querySelector para seleccionar el primer elemento **<video>** en el documento y lo asigna a la
```javascript
const $video = document.querySelector('#video');
```
2. Selecciona el elemento con el identificador **pause**(que es un boton) y lo asigna a la variable **$play**
```javascript
const play = document.querySelector('#pause');
```
3. Selecciona nuevamente
```javascript
const $pause = document.querySelector('video');
```
## Elementos HTML
1. **h1**: Define un encabezado de nivel 1
2. **button**: Crea un boton interactivo.
3. **video**: Insera contenido de video en la pagina.

## Atributos HTML:
4. **class**: Asigna una  o mas clases CSS a un elemento para aplicar estilos especificos.
5. **id**: Asigna un identificador unico a un elemento, util para seleccionarlo mediante JavaScript o CSS.
6. **controls**: Añade controles predeterminados al elemento que se poducira.
7. **src**: Especifica la ruta del archivo de video que se reproducira.

## JavaScript y el DOM:
1. **documento.querySelector()**:Metodo que devuelve el primer elemento del documento que coincide con el selector CSS proporcionado.
2. **const**: Declara una constante de solo lectura en javaScript.
3. **console.log()**: Metodo que imprime mensajes en la consola del navegador, util para depuracion.


## Conceptos:
1. **evento**: Un una señal que indica que ha ocurrido una accion o suceso en el navegador.Estos eventos pueden ser generados por interacciones del usuario
como hacer clic en un boton o presionar una tecla, o por opciones del sistema, como la carga completa de una pagina o la finalizacion de una 
animación.
2. **poster**: Permite colocar una imagen de preview en un elemento de **<video>**.
3. **interfaz prolija**:Es cuando yo pudo darle play no deberia verse el boton  de pause y viseversa.
2. 
## Eventos:
### Eventos del mouse:
1. **clic**: Cuando el usuario hace clic en un elemento
2. **mouseover**:Cuando el cursor del mouse pasa sobre un elemento.
3. **mouseout**: Cuando el cursor del mouse sale de un elemento.

### Eventos del teclado:
1. **keydown**: Cuando se presiona una tecla.
2. **keyup**: Cuando se suelta una tecla.

### Eventos de formulario:
3. **submit**: Cuando se envia un formulario.
4. **change**: Cuando el valor de un campo cambia.

### Eventos de la ventana:
1. **load**: Cuando la pagina ha cargado completamente.
2. **resize**: Cuando se cambia el tamaño de la ventana del nevegador.



