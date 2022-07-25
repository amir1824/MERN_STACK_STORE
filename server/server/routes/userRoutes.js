
const authController = require('../controllers/authController')   
const express = require('express');
const userController = require('../controllers/UserControllers');

const router = express.Router();
 
//const upload = multer({dest: 'public/img/users'})

router.post('/signup',authController.signup)
router.post('/login',authController.login)
router.get('/logout',authController.logOut)

router.post('/forgotPassword',authController.forgotPassword)
router.patch('/resetPassword/:token',authController.resetPassword)


//Protect all routes after this middleware
//router.use(authController.protect)

router.patch('/updateMyPassword',
authController.updatePassword)

////router.get('/me',
//authController.getMe,
//userController.getUser)

router.patch('/updateMe',
userController.updateMe)

router.delete('/deleteMe',
userController.deleteMe)

//Only the admin get accsess
//router.use(authController.restrictTo('admin'))

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;