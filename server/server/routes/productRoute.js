const express = require('express');
const productController = require('../controllers/productController');
const authController = require('../controllers/authController')
const router = express.Router();

//router.param('id', productController.checkID);

router.route('/top-5')
.get(productController.getAllProduct,productController.aliasTopProduct)
  

router
  .route('/')
  .get( productController.getAllProduct)
  .post(productController.createProduct);

router
  .route('/:id')
  .get(productController.getProduct)
  
  .patch(authController.protect,
    authController.restrictTo('admin'),
    productController.uploadProductImages,
    productController.resizeProductImages,
    productController.updateProduct)
     
  .delete(authController.protect,
    authController.restrictTo('admin'),
    productController.deleteProduct)

module.exports = router;