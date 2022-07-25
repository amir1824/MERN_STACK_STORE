import React ,{useContext}from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CartContext from '../../context/cart-context'


import './Product.css'



const ProductCard = (props) => {

  const cartCtx = useContext(CartContext)

 
  const addItemToCartHandler = () => {
      
    cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount: 1,
        price: props.price
    })

    console.log(props.id)
    

   

}
  



  return (

    <Card className="product-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body >
        <Card.Title>{props.name}</Card.Title>
        <Card.Title>{props.price}</Card.Title>
        <Card.Title>{props.amount}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
         

        </Card.Text>
        <Button  variant="primary" id={props.id} onClick={addItemToCartHandler}>
          {"Add to cart"}
        </Button>
      </Card.Body>
    </Card>
    
  )



}

export default ProductCard