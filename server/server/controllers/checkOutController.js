const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const Product = require('../models/productModel')
const factory = require('./handlerFactory')
const stirpe = require('stripe')
const Order = require('../models/orderModel')

exports.getCheckOutSession = catchAsync(async(req,res,next) =>{
//Get the currently order item
    const prodcut = await Product.findById(req.params.prodcutId)
//Create checkout session
 const session = await stirpe.checkout.sessions.create({
    payament_methon_types: ['card'],
    seccess_url: `${req.protocol}://${req.get('host')}/?product=${req.params.prodcutId}
    &user=${req.params.id}&price=${prodcut.price}`,

    cancel_url: `${req.protocol}://${req.get('host')}/product/${prodcut.name}`,
    customer_email: req.user.email,
    client_reference_id: req.params.prodcutId,
    line_items:[
        {
           name: `${prodcut.name} Product`,
           description: prodcut.description,
           images:[],
           amount: prodcut.price ,
           currency: 'israeli shekel',
           qunatity: 1
           
        }
    ]

})
// Create session as response

res.status(200),json({
    status:'success',
    session
})

})

exports.createOrderCheckout = catchAsync(async(req,res,next)=>{
    const {prodcut,user,price} = req.query


    if(!prodcut&&!user&&!price) return next()
   await Cart.create({prodcut,user,price})

   next()

   res.ridirect(req.originalUrl.split('?')[0])
})


exports.addOrder = catchAsync(async(req,res,next)=>{
    const cart = await Cart.find({user: req.user.id})

    if(cart.length === 0 ){
        return  next(new AppError('your cart is empty'))
    }

    const order = await Order.create({
        allCart: cart,
        amount: req.body.amount,
        address: req.body.address
    })
    res.status(201).json({
        status: 'success',
        data:order
      })
})
exports.getOrder = factory.getOne(Order)
exports.getAllOrders = factory.getAll(Order)
exports.updateOrder = factory.updateOne(Order)
exports.deleteOrder = factory.deleteOne(Order)
