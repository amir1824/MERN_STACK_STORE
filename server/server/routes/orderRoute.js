const orderController = require('../controllers/checkOutController')
const authController = require('../controllers/authController')   
const express = require('express');

const router = express.Router()


router.get('/checkout-session/:productId',orderController.getCheckOutSession)

router.route('/').get(orderController.getAllOrders)

router.route('/new')
.get(orderController.getOrder)
.patch(orderController.updateOrder)
.post(orderController.addOrder)
.delete(orderController.deleteOrder)

module.exports =router