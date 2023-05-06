import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import viewsRouter from './router/view.router.js'
const uri = 'mongodb+srv://coder:coder@backend39755.3gncg2t.mongodb.net/'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', 'views')
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)

await mongoose.connect(uri, {
    dbName: 'marathon9'
})

app.listen(8080, () => console.log('Server Up'))
