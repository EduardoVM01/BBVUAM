const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()


app.set('port', process.env.PORT || 9000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())


const main = require('./routes/main')
app.use('/', main)

app.listen(app.get('port'), () =>{
    console.log('Servidor escuchando en el puerto', app.get('port'))
})
