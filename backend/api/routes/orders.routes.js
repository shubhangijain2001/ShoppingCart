const express=require('express')
const router= express.Router()

const orders=require('../controller/orders.controller')

router.post('/cart',orders.add)
router.get('/cart',orders.get)
router.patch('/cart/:uuid',orders.update)
router.patch('/cart1/:uuid',orders.delete)
router.get('/cart/:uuid',orders.edit)
router.get('/cartCount',orders.count)



module.exports=router
