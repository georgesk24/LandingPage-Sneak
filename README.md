# Landing Page - Prueba Frontend

![Badge en Finalizado](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)
![GitHub Org's stars](https://img.shields.io/github/stars/camilafernanda?style=social)

## Descripción del proyecto
El proyecto esta desarrollado en HTML, Javascript (VanillaJS), css, Igualmente se trabaja con un ejecutor de tareas el cual es GULP, cumplió una función muy puntual a la hora del desarrollo, y es la posibilidad de seccionar los archivos html.

## Estructura de Carpetas del proyecto

.
├── app <br>
│   ├── pages <br>
│   ├──  ├── layout <br>
├── assets <br>
│   ├── css <br>
│   ├── fonts <br>
│   ├── img <br>
│   ├── js <br>
├── build <br>
├── node_modules <br>
├── index.html <br>
├── files_configuration <br>
└── ...

Se trabaja con la siguiente estructura; en la carpeta assets agregaremos todos los recursos que se utilizaran en la aplicación; como es el caso, de los archivos CSS, JS, imagenes, fuentes externas etc.

En la carpeta App, contendrá los archivos del header y el footer los cuales podrán ser modificados de forma independiente, y al momento de compilar el proyecto, el task manager se encargará de unir todo el código html en el index.html

La carpeta Build, es el resultado final de la compilación del proyecto, y es lo que se subió al servidor web.

## ¿Como ejecutar el proyecto?

1. Instalar todas las dependencias, ejecutando el comando <b> npm install </b>
2. Compilar y ejecutar el proyecto, con el comando <b> gulp </b>



