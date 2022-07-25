import React from 'react'
import './CartItem.css'

const CartItem = (props) => {
  

  return (
    <li className="cart-item">
      <div>
        <h3>{props.name}</h3>
        <div className="summary">
          <span className="price" >{props.price}</span>
          <span className="amount" > x {props.amount}</span>
        </div>
      </div>
      <div className="actions" >
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  )
}
export default CartItem