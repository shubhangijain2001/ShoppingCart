const client=require('../../db/connection')

module.exports={
    add:(data,callback)=>{
        client.query(`insert into orders(product_name,description,price,qty,total)
        values('${data.product_name}','${data.description}',${data.price},${data.qty},${data.price*data.qty}) returning *`,(err,result)=>{
            if(err){
                callback(err)
            }
            else{
                callback(null,result)
            }
        })
       
       
    },
    get:(data,callback)=>{
        
        client.query(`select count(*) from orders where status=1`,(err,result)=>{
            if(!err){
                let total=result.rows[0].count;
                const offset = (data.page - 1) * data.pageSize;
                
                client.query(`select * from orders where status=1 order by uuid OFFSET ${offset} LIMIT ${data.pageSize}`,(err1,res1)=>{
                    if(!err){
                        callback(null,res1)
                    }
                    else{
                        callback(err1)
                    }
                })
                //callback(null,result)
            }
            else{
                callback(err)
            }
        })
    },
    update:(data,callback)=>{
      
        client.query(`update orders set price=${data.body.price}, qty=${data.body.qty}, total=${data.body.price*data.body.qty} where uuid=${data.params.uuid}`,(err,result)=>{
            if(err){
                callback(err)
            }
            else{
                callback(null,result)
            }
        })
    },
    delete:(data,callback)=>{
       
        client.query(`update orders set status=0 where uuid=${data.uuid}`,(err,result)=>{
            if(err){
                callback(err)
            }
            else{
                callback(null,result)
            }
        })
    },
    edit:(uuid,callback)=>{
        client.query(`select * from orders where uuid=${uuid} order by uuid`,(err,result)=>{
            if(!err){
                callback(null,result)
            }
            else{
                callback(err)
            }
        })
    },
    count:(callback)=>{
   
        client.query(`select count(*) from orders where status=1`,(err,result)=>{
            if(!err){
                callback(null,result)
            }
            else{
                callback(err)
            }
        })
    },
}