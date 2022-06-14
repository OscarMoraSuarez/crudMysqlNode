inicializar poryecto
npm init --yes

instalar modulos
npm install express
    Ayuda a escribir menos codigo de nodejs, nos da funciones que estan probadas y que funcionan
npm install mysql
    para conectar con mysql 
npm install express-myconnection
    integra exppres con mysql y permite escribir mysql mas rapido
npm install morgan
    ayuda a ver las peticiones que llegan al servidor
npm install ejs
    es un motor de plantilla que permite enviar html, que antes de enviarlos son porcesados en el servidor
    se pude ejecutar logica de porgramacion para crear el html, luego esta se porcesa en el servidor, y luego
    se envia al cliente          
con esas intalaciones ya se podria crear un servidor ques e conecte a mysql   
###
escribo el codigo de app.js es el entrypoint
//?1
=>node serc/app.js
  localhost ya debe estar funcionando en el puerto 3000
para no tener que estar parando el servidor cada que hago un cambio y volverlo a iniciar
 npm install nodemon -D el se encargara de reiniciar el servidor cada que alla un cambio
 la D significa que nos e instalar como los modulos anteriores, no loa grega a l package json
 lo instala en Dev dependencies dependencias de desarrollo porque no es necesario para el 
 funcionamiento de la app
###
//?2 escribimos los settings
=>nodemon para iniciar el servidor, ya no usamos el  node SRC/app.js 
arrojara un error porque no esta instalado globalmente, entonces hay que usarlo
desde los scripts  como "dev" y le decimos que queremos que haga


creamos views que va almacenar todos los archivos del motor de plantillas
###
//?3 en settings definimos el motor de plantillas
//?4 utilizar el modulo path para decirle donde estan las views
const path=require ('path');

###
//?4
configuracionde los middlewares
los middlewares son funciones qu e se ejecutan antes de que vengan las peticiones de los usarios
las peticiones por lo general las en exprs las conocemos como rutas 
/ es la ruta incial del servidor
/customer , productos/ y asi pordria ser otra ruta y asi antes de recibirlas vamosa ejecutar funciones
 antes de que lleguen, para eso instalmos morgan al pasar una url al servidor podemos ver la respuesta en consola
###
usar y configurar mysql y myconnection es decir haxer el requirey la conf
=>mysql -u root -p
###
crear la carpeta DB que contendra los scripts de consultas

### crear las rutas
//?5
//!1crear la carpeta  rutas en el SRC y crear la carpeta controllers
en controllers usar el router y configurar las rutas con el objetoq ue devuelve express router
luego importarlo desde el entrypoint
en este archivos vamos a escribir todas las url que la aplicacion del servidor va apoder manejar

//!1crear customer.controller en la carpeta de controllers
importarlo desde el archivo de rutas para usarlo
###
//?6
configurar los archivos estaticos
crear la carpeta public, por si quiero poner allí archivosfiles de cualquier tipo
archivos css, codigo js de frontend etc
### crear las vista en la carpeta indicada views




 

    
