import express , {Express , Request, Response} from 'express'
import http from 'http'
import {Server} from 'socket.io'
import path from 'path'


const app:Express=express();
const PORT:number =3000

const server = http.createServer(app)
app.use(express.static('./static'))

const ioServer=new Server(server)

app.get('/',function(req:Request,res:Response){
    res.sendFile(path.resolve()+'/static/index.js')
    
})


server.listen(PORT,()=>console.log('server is up and running ...'))

