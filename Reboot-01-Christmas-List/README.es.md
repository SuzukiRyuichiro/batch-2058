## Contexto y Objetivos

Hoy construirás una lista de regalos navideños, igual que hiciste en el módulo de Introducción a Ruby, ¡pero esta vez **tendrá un front-end real**!

Crearás un formulario mediante el cual podrás subir regalos a tu lista. También usarás una [API](https://fakestoreapi.com/) para obtener ideas de regalos que puedas agregar a tu lista.

¡La hoja de estilos de Bootstrap ya está enlazada en el archivo `index.html`, así que siéntete libre de usar sus clases predefinidas o intentar crear las tuyas en `style.css`!

Nota: ¡no habrá `rake` para este ejercicio! Para ver si tu página funciona, tendrás que probarlo tú misme en el navegador.

## 1. HTML y CSS

### 1.1. Crear un formulario

![Formulario y lista](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step1.png)

Comenzaremos creando nuestro formulario de regalos. Debe tener los siguientes campos:

1. Nombre
2. Precio

Usa un poco de CSS y/o Bootstrap para que se vea ordenado y centrarlo en medio de la página. No te preocupes por pasar demasiado tiempo en esto; puedes volver al final si quieres hacerlo más bonite 🖌️

### 1.2. Crear lista

Creemos una lista con dos o tres elementos predefinidos. Los quitaremos pronto para poder agregar elementos mediante el formulario; por ahora solo están para poder dar estilo a nuestra lista :)

## 2. Formulario con JavaScript

![Formulario y lista dinámicos](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step2.gif)

¡Hagamos que nuestro formulario funcione!

### 2.1. Escuchar el envío

¿En qué momento queremos agregar un elemento a nuestra lista? ¡Cuando **enviamos** nuestro formulario, por supuesto!

Primero, selecciona el formulario. Luego, escucha el envío del formulario. Por ahora, solo haremos `console.log('¡Formulario enviado!')` cuando lo escuchemos.

Nota: ¡Recuerda que el comportamiento predeterminado de un formulario es refrescar la página a menos que le indiques lo contrario!

### 2.2. Obtener los campos

Antes de pensar en agregar cosas a la lista, comencemos por obtener el nombre y el precio de los campos del formulario.

Recuerda que primero necesitas seleccionar cada campo de entrada y _luego_ puedes acceder a su valor.

Para verificar si estás accediendo a los elementos correctos, puedes usar `console.log()` en cada etapa.

### 2.3. Agregar información de los campos a la lista

Ahora que tenemos la información del formulario, seleccionemos nuestra lista y agreguemos nuestro regalo al **final** de ella.

## 3. Fetch y API

A veces es difícil pensar en regalos para todas las personas. ¡Así que usaremos la Fake Store API para obtener algunas ideas! Tómate un minuto para leer la [documentación](https://fakestoreapi.com/docs) antes de comenzar.

### 3.1. Crear un formulario para 'encontrar ideas'

![Formulario de ideas](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step3.gif)

Para nuestro formulario de 'ideas', queremos tener un menú desplegable con las diferentes categorías de la Fake Store API. Puedes ver las opciones aquí: `[https://fakestoreapi.com/products/categories](https://fakestoreapi.com/products/categories)`

```json
[
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]
```

_Nota: La palabra "jewelery" está mal escrita, ¡pero así es en la API! No podemos cambiarla._

**Importante:** No importa si tienes el texto mostrado en las opciones con mayúsculas o no, pero el `value` de cada uno _debe_ estar escrito igual que [aquí](https://fakestoreapi.com/products/categories)

Sigue los mismos pasos que hiciste con tu formulario anterior (HTML, CSS básico y escuchar el envío).

### 3.2. Al enviar, llamar a la API

Haremos una solicitud `fetch` para llamar a la API.

Como hay un endpoint para cada categoría, querremos asegurarnos de poder acceder a cualquier endpoint usando el mismo código.

Aquí hay un código para comenzar. ¡No olvides primero obtener la categoría elegida por le usuarie desde el campo de entrada!

Aquí hay un código que hace una llamada al endpoint de la categoría "jewelery". Puedes usarlo como punto de partida para ayudarte a descubrir cómo hacer llamadas dinámicas a la API según la categoría seleccionada por le usuarie.

```
fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(response => response.json())
            .then(data => console.log(data))
```

Usa `console.log()` para ver qué obtuviste de la API.

### 3.3. Mostrar ideas de regalos en una lista

![Mostrar ideas de regalos](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step4.gif)

Mira cuidadosamente lo que te dio la API - ¿qué información es relevante para nuestra lista? ¿Cómo accedemos a ella?

Mostremos las opciones de regalos en una lista separada para que le usuarie pueda ver qué opciones tiene disponibles.

En un momento querremos poder seleccionar ideas y agregarlas a nuestra lista principal, así que puedes crear un botón de "Agregar" para cada una.

### 3.4. Elegir una idea y agregarla a la lista

![Seleccionar ideas de regalos](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step5.gif)

Ahora, cuando se escuche un clic en el botón "Agregar" de cada idea, quitemos ese elemento de la lista de ideas y agreguémoslo a la lista principal de regalos.

## Opcionales

### Hacer clic en un elemento para tacharlo

![Seleccionar ideas de regalos](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/js-reboot/step6.gif)

¿Ya compraste un regalo? ¡Genial! Entonces, vamos a tacharlo en nuestra lista.

Para los elementos que agregamos mediante nuestro formulario y también los que vienen de nuestra lista de ideas, escucha un clic. Al hacer clic, queremos tachar el elemento.

🤔 Bonus: ¿Puedes hacer que al pasar el mouse sobre un elemento, este cambie a un 👆🏽?

### Guardar la lista

Observa cómo al refrescar la página, perdemos los elementos que agregamos a nuestra lista. ¿Puedes guardar los elementos en [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) mientras los agregamos y cargarlos cuando se refresque?

### Mejorarlo con paquetes de JS

Intenta implementar [Tom Select](https://tom-select.js.org/) para mejorar la apariencia de la lista desplegable.
