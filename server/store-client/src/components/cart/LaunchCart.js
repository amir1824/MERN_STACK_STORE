import React,{useState,useContext} from 'react'
import { Badge, Button,Offcanvas } from 'react-bootstrap';
import {BsFillCartFill} from 'react-icons/bs'
import Cart from './Cart';
import CartContext from '../../context/cart-context';

const LaunchCart =(props)=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0

    
  
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
  
    return (
      <>
      
      <Button className='offcanvas-body' variant='ligth' onClick={handleShow}>
         <BsFillCartFill size={25} />
         <Badge>{ numberOfCartItems }</Badge>
        </Button>
 
        <Offcanvas placement='end' show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

           {!hasItems && <h2>Your cart is empty!</h2> } 
            {hasItems && <Cart/>}

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );

}

export default LaunchCart