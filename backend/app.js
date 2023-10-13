const express=require('express')
const app=express()
const router=require('./api/routes/orders.routes')
// const dotenv=require('dotenv')
// dotenv.config()

require('dotenv').config()

const cors=require('cors')
app.use(cors())

app.use(express.json())
app.use(router)

app.listen(process.env.PORT,()=>{
    console.log('listening on port',process.env.PORT)
})