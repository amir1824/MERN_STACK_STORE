import React, { useContext, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem';
import CartContext from "../../context/cart-context";


const Cart = () => {

    
     const cartCtx = useContext(CartContext)
   
     const  Navigate = useNavigate()

     const totalAmount = `$${cartCtx.totalAmount}`
     const hasItems = cartCtx.items.length > 0
     console.log(totalAmount)

  

     const cartItemRemoveHandler = (id) => {
          cartCtx.removeItem(id)

     }
     const cartItemAddHandler = (item) => {
          cartCtx.addItem(item)

     }

     const orderHandler = () => {

          
          Navigate('/CheckOut')

     }
    

     const cartItem = <ul className='cart-items'>{cartCtx.items.map((item) =>
          <><CartItem key={item.name}
               name={item.name}
               amount={item.amount}
               price={item.price}
               onRemove={cartItemRemoveHandler.bind(null, item.id)}
               onAdd={cartItemAddHandler.bind(null, item)}
               
          /></>)}</ul>



     const modalActions = <div className='actions'>

          {hasItems && <button className='button' onClick={orderHandler} >Check Out</button>}
     </div>

     const cartrModalContent =
          <Fragment>
               {cartItem}
               <div className='total'>
                    <span> Total Amount</span>
                    <span> {totalAmount}</span>
               </div>

          </Fragment>





     return (
          <div>
               
              {cartrModalContent}
              {modalActions}

          </div>

     )
}
export default Cart
