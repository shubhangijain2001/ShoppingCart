const {Client}= require('pg')

const client=new Client({
    host:'localhost',
    user:'postgres',
    password:'psql123',
    port:'5432',
    database:'shoppingDetails'
})

client.connect((err)=>{
    if(err){
        console.log('error',err)
    }
    else{
        console.log('database connected')
    }
})

module.exports=client