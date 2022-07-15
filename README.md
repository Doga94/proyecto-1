# proyecto-1
Aprendiendo-desarrollo

Lo primero es descargar el paquete NPM
-intalaremos la dependencia de SASS en la terminal con (npm i sass) para que se intale como dependencia
 si deseas que sea solo para el desarrollo usa (npm i  sass --save-dev)
-creamos una carpeta llamada src (source)
-dentro de la carpeta de src creamos otra con el nombre de (scss)
-instalar la extension live-sass-compiler (Para compilar las hojas de estilo de sass)
-creamos un archivo dentro de la carpeta scss que se llame (app.sass) hay colocaremos nuestras variables de sass
-Al crear las variables en SASS no es necesario colocarlas dentro de un ROOT si no que ya las puedes dejar por fuera
lo unico que si es oblicatorio es colocar ($) antes de cada variable EJEMPLO($rojo: #FF0000;)
y cuando se llaman las variables ya no es necesario llamar por medio de var si no solo el nombre de la variable
-Despues se hara una modificacion a package.json para que compile sass (  "scripts": {
    "sass": "sass --watch src/scss:build/css"
  },)
-Se coloca watch para que se verifique los cambios que van a tener y no tener que estar corriendo codigo para compilarlo manualmente
lo unico que se debe hacer despues de colocar el watch es iniciarlo nuevamente y listo ya se actualiza solo
-La forma para llamar los scripts de package.json es por medio de la terminal (npm run sass)

** crear gulp y gulpfile
-Instalaremos GULP (npm i -D gulp)
-gulp va a requerir un archivo llamado (gulpfile) se debe crear el archivo se debe crear en la raiz 
 del proyecto se debe llamar (gulpfile.js)
 gulpfile: va a ser el contenedor de las tareas

-se requiere NODE para que se ejecute 
-para poder llamar la tarea que esta en gulpfile se debe ejecutar en la terminal (npx gulp primeraTarea)
-llamar la tarea por medio del package.json
    -creare otro script que se llamara (tarea(ya como se quiera nombrar)) se crea el script ( "tarea": "gulp primeraTarea")
    -y se ejecuta (npm run tarea(se manda a llamar por el nombre de la parte izquiera))
 

**Compilar sass con gulp

npm gulp css
npx gulp css

npm run dev
npx gulp dev

*** Crear diferentes archivos de scss

@forward solo va en el archivo index

** con esto se puede hacer para que se compile sin tener que guardar los cambios en el archivo original

*** Observaciones: ***
    - Puedes eliminar la carpeta node_modules, mientras no elimines package.json se puede recuperar
    *** pipe: es una accion que se realiza despues de otra
