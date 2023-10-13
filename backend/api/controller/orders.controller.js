const orders=require('../services/orders.service')

module.exports={
    add:(req,res)=>{
        console.log(req.body)
        let data=req.body
        orders.add(data,(err,result)=>{
            if(err){
                return res.send(err).status(400)
            }
            console.log(res.rows)
            res.send(result.rows)
        })
    },
    get:(req,res)=>{
        console.log(req.query);
        let data=req.query
        orders.get(data,(err,result)=>{
            //console.log('reached controller')
            if(err){
                console.log(err)
                return res.send(err).status(400)
            }
            //console.log(result);
            res.send(result.rows)
        })

    },
    update:(req,res)=>{
        let data={body:req.body,params:req.params}
        console.log('data1',data.body)
        console.log('data',data.params);
        orders.update(data,(err,result)=>{
            if(err){
                console.log(err)
                return res.send(err).status(400)
            }
            res.json({msg:'updated successfully'})
        })
    },
    delete:(req,res)=>{
        let data=req.params
        orders.delete(data,(err,result)=>{
            if(err){
                console.log(err)
                return res.send(err).status(400)
            }
            res.json({msg:'deleted successfully'})
        })
    },
    edit:(req,res)=>{
        let uuid=req.params.uuid
        orders.edit(uuid,(err,result)=>{
            //console.log('reached controller')
            if(err){
                console.log(err)
                return res.send(err).status(400)
            }
            //console.log(result);
            res.send(result.rows)
        })

    },
    count:(req,res)=>{
        //let uuid=req.params.uuid
        console.log('controller');
        orders.count((err,result)=>{
            //console.log('reached controller')
            if(err){
                console.log(err)
                return res.send(err).status(400)
            }
            //console.log(result);
            res.send(result.rows)
        })

    },
    
}
