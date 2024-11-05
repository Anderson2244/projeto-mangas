import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
//importando rotas no index
import mainRoutes from './routes/index'
dotenv.config()

const server = express()

server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))
//usando main routes no index
server.use(mainRoutes)

server.use((req,res) =>{
    res.render('pages/404')
})

server.use((req,res) =>{
    res.send('Páginas não encontrada!')
})

//acessando o servidor
server.listen(process.env.PORT)

server.use((req,res)=>{
    res.send("Pagina não encontrada")
})