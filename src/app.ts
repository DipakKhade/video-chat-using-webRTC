import express , {Express , Request, Response} from 'express'

const app:Express=express();
const PORT:number =3000

app.get('/',function(req:Request,res:Response){
    res.send('hello from express')
    return  
})


app.listen(PORT,()=>console.log('server is up and running ...'))