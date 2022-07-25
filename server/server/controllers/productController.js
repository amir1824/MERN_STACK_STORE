
const Product = require('../models/productModel')
const factory = require('./handlerFactory')
const multer = require('multer')
const AppError = require('../utils/appError')
const multerStorage =  multer.memoryStorage()
const sharp = require('sharp')
const catchAsync = require('../utils/catchAsync')

const multerFilter = (req,file,cb) =>{
  if(file.mimetype.startWith('image')){
    cb(null,true)
  }else{
    cd(new AppError('Not an image! Please upload only image',400),false)
  }
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
})

exports.uploadProductImages = upload.fields([
  {name:'images',maxCount:4}
 
])

//upload multi image
upload.array('images',4)

exports.resizeProductImages = catchAsync(async(req,res,next) =>{

  if( !req.file.images ) return next()

  //images
  req.body.images =[]

   await Promise.all(
    req.files.images.map(async(file,i)=>{
    const filename = `Product-${req.params.id}-${Date.now()}-${i+1}.jpeg`
  
   await sharp(file.buffer)
   .resize(2000,1333)
   .toFormat('jpeg')
   .jpeg({quality:90})
   .toFile(`public/img/Product/${filename}`)
  
   req.body.images.push(filename)
  })
  
   )
    next()
})


exports.aliasTopProduct = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'price';
  req.query.fields = 'name,price';
  next();
};

exports.getAllProduct = factory.getAll(Product)

exports.getProduct = factory.getOne(Product)

exports.createProduct =factory.createOne(Product)
  
exports.updateProduct = factory.updateOne(Product)

exports.deleteProduct =  factory.deleteOne(Product)

