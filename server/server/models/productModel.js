const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
         type:String,
         required:true,
         unique: true,
         maxlength:[20],
         minlength:[5]
     },
     amount:{
          type: Number
     },
                   
      image: { 
      type: [String], 
       type: Date,
       default:Date.now(),
       select:false
      },

      price: {
              type:Number,
              required: true
              
           },
      description:{
          type: String,
          required: true
     } ,
   createdAt:{
        type:Date,
        default:Date.now,
        select: false
   } 
         

})
productSchema.index()

const Product =  mongoose.model('Product', productSchema)
module.exports = Product
