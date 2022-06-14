const express= require('express');
const path=require ('path'); 
const app= express();
const morgan= require('morgan');
const mysql=require('mysql');
const miConnection=require('express-myconnection'); 

//?importando rutas
/* const customerRoutes=require('./routes/customers'); */
const customerRoutes = require('./routes/customers');
const { urlencoded } = require('express');


//?2settings
// es necesario para el despliegue
// verifica si hay un uerto asignado por el OS sino le adjudica el 3000
app.set('port',process.env.PORT||3000);
//?3
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views')); 

//?4middlewaressettings
 app.use(morgan('dev')); //para mostrar mensajes por consola sencillos
 app.use(miConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'javascriptcrud'   

 },'single'));
 
 //?7
 //este middleware no se tiene que instala ya viene en el core de express
 app.use(express.urlencoded({extended:false}));
 //express usara urlencoded para entender los que lelga a traves de la url
 //extend false es porque no nos va enviar archivos ni dato encryptados ni nada complicado, solo objetos

//dirname encontrara una ruta desde el sistema operativo donde eta el
//entry point

//?5Routes

app.use('/',customerRoutes)
//?6 static files
app.use(express.static(path.join(__dirname,'public')))
//!starting server
app.listen(app.get('port'),()=>{

    console.log('server on Port 3000');

});
//?1

