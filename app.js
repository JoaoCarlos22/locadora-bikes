const express = require('express');
const fileUpload = require('express-fileupload');
const { engine } = require('express-handlebars')
const bikeRoutes = require('./routes/bikeRoutes')
const clienteRoutes = require('./routes/clientesRoutes')

const port = 5000
const app = express()

app.use('/css', express.static('public/css'))
app.use('/imagens', express.static('./public/imagens'))
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'))


app.engine('hbs', engine({
    helpers: {
        condicionalIgualdade: function(v1, v2, options) {
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        }
    }
}))
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())
app.use('/bicicleta', bikeRoutes)
app.use('/cliente', clienteRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na URL http://localhost:${port}`)
})