const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
  allCart: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },

      products: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
          quantity: {
            type: Number,
            required: true,
            default: 1,
          },
        },
      ],
    },
  ],

  amount: {
    type: Number,
    required: true,
  },
  addressDetails: {
    type: Object,
    required: true,
  },
  paymentOrder:{
    type: Object,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order



