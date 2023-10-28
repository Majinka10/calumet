# Ejercicios de capacitación - Calumet

Este es un proyecto que incluye varios subproyectos en diferentes carpetas. Cada subproyecto se centra en un conjunto particular de tecnologías y funcionalidades. A continuación, se presenta una descripción general de cada uno de los subproyectos:

## Carpeta: HTML, CSS y JS

En esta carpeta, encontrarás tres subproyectos, cada uno desarrollado utilizando HTML, CSS y JavaScript puro:

1. **Calculadora:** Una aplicación de calculadora simple que realiza operaciones matemáticas básicas.
2. **Menú Interactivo:** Un menú interactivo que permite a los usuarios navegar entre diferentes opciones.
3. **Lista de Contactos:** Una lista de contactos que se pueden agregar, editar la posición en la lista y eliminar directamente en la interfaz web.

**Instrucciones de Ejecución:**

Para ejecutar cada subproyecto, abre el archivo `index.html` correspondiente ubicado en la carpeta de cada uno.

## Carpeta: AngularJS

Este subproyecto se basa en AngularJS y no utiliza una base de datos. Contiene dos vistas:

1. **Lista de Productos:** Muestra una lista de productos y permite agregar nuevos productos con nombre y precio. La lista de productos se actualiza automáticamente en una tabla.
2. **Cajero:** Permite a los usuarios crear una lista de compras a partir de los productos disponibles. Calcula el total de la compra en función de la cantidad y muestra la información en una tabla.
   
## Carpeta: Vistas_anidadas

Este subproyecto demuestra cómo implementar vistas anidadas en una aplicación AngularJS utilizando la biblioteca "ui.router". Proporciona ejemplos de cómo organizar y navegar entre vistas anidadas.

## Carpeta: Project

El subproyecto en la carpeta "Project" es el más completo y utiliza componentes de los subproyectos anteriores. Incluye:

1. **Subproyecto AngularJS (sin base de datos):** Aquí se utiliza AngularJS para gestionar una lista de productos y el cajero.
2. **Lista de Contactos (con base de datos):** Esta lista de contactos utiliza una base de datos MySQL para almacenar y gestionar los contactos. Los usuarios pueden agregar, eliminar y ver los contactos.
3. **Vistas Anidadas:** La aplicación implementa vistas anidadas utilizando "ui.router" para organizar y navegar por las páginas.

**Instrucciones de Ejecución:**

1. Inicializa los servicios de MySQL y crea una base de datos que contenga una tabla llamada `contactos`.

```sql
CREATE TABLE contactos (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(20) NOT NULL,
    typeId VARCHAR(3) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    address VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    phone VARCHAR(12) NOT NULL,
    favorite TINYINT(1),
    PRIMARY KEY (id)
);
```


3. Abre el proyecto en Apache NetBeans y asegúrate de que esté correctamente configurado para acceder a la base de datos.

4. Inicializa el servidor Tomcat desde Apache NetBeans.

## Instrucciones Generales de Ejecución

Todos los proyectos se pueden inicializar de la misma manera, a excepción de "[Project](Project)", abriendo el archivo index.html que se encuentra dentro de la carpeta 'web' de cada uno o abriéndolo en Apache NetBeans y luego ejecutándolo con F6.

## Requisitos Generales

1. **Navegador Web:**
  Navegador web moderno como Google Chrome, Brave, Mozilla Firefox, o cualquier otro compatible con HTML5 y CSS3 para ejecutar los subproyectos HTML, CSS y JS, así como los proyectos basados en AngularJS.
  
2. **Apache NetBeans (Opcional)**
   
3. **Servidor Web Local (Opcional):**
  Si se desea ejecutar el proyecto "[Project](Project)" con la base de datos, es recomendable tener configurado un servidor web local. Puedes usar soluciones como Tomcat, XAMPP o MAMP según tu sistema operativo.
