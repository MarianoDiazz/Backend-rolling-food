import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import './database'
//crear la instanciade Express
const app = express()

//configurar o crear el puerto
//llamo a la instancia de express
//

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('****************************');
    console.log('Estoy en el puerto ' + app.get('port'));
    console.log('****************************');

})
//Instalo nodemon 


//Antes de las rutas realizamos unas config "MIDDLEWARES"

app.use(morgan('dev')) //nos da la info de la consulta como ser el tipo, status etc
app.use(cors()) //permite recibir peticiones remotas a nuestra api
app.use(express.json())
app.use(express.urlencoded({ extended: true }))  //estos dos ultimos permitenrecibir e interpretar el json de la request

app.use(express.static('public'))


//Rutas

app.get('/', (req, res) => {
    res.send('esto es una prueba desde el backend')
})