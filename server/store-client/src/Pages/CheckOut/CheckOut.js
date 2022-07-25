import React, { useContext, useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import CartContext from "../../context/cart-context";
import { useNavigate } from 'react-router-dom';
import './Checkout.css'

const CheckOut = () => {
    //Delivery info
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [floor, setFloor] = useState("")
    const [entrance, setEntrance] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [cardOwner, setCardOwner] = useState('')
    const [fullName, setFullName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [ccv, setCcv] = useState('')
    const [mm, setMm] = useState('')
    const [yy, setYy] = useState('')
    const Navigate = useNavigate()



    const cartCtx = useContext(CartContext)

    const config = {
        header: {
            "Content-Type": "application/json",
        },
    };

    const submitOrderHandler = async (e) => {


        try {
            const { data } = await axios.post('http://localhost:8000/api/v1/order/new', ({

                orderItems: cartCtx.items,
                addressDetails: {
                    state,
                    city,
                    street,
                    zipCode,
                    floor,
                    entrance,
                    number
                },
                paymentOrder: {
                    fullName,
                    cardOwner,
                    cardNumber,
                    mm,
                    ccv,
                    yy
                }

            }), config)

            console.log(data)

            cartCtx.clearCart()
            Navigate('/success')




        } catch (error) {
            return error

        }
    }






    return (


        <Container fluid className='header-checkout'>

            <Card className="profile-card-view-checkout">
                <Card.Body className=''>

                    <h4 className='h4'>Address</h4>

                    <form onSubmit={submitOrderHandler}>

                        <div className="form-group mt-3">
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <label>State</label>
                                    <input
                                        type="text"
                                        onChange={(e) => setState(e.target.value)}
                                        value={state}
                                        className="form-control mt-1"
                                        placeholder='Street'
                                        required />
                                </div>
                                <div className='col-sm-6'>
                                    <label>City</label>
                                    <input
                                        type="text"
                                        onChange={(e) => setCity(e.target.value)}
                                        value={city}
                                        className="form-control mt-1"
                                        placeholder='City'
                                        required />
                                </div>


                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <label>Street</label>
                                    <input
                                        type="text"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                        className="form-control mt-1"
                                        placeholder='Street'
                                        required />
                                </div>
                                <div className='col-sm-6'>
                                    <label>Zip Code</label>
                                    <input
                                        type="text"
                                        value={zipCode}
                                        onChange={(e) => setZipCode(e.target.value)}
                                        className="form-control mt-1"
                                        placeholder='Zip Code'
                                        required
                                    />
                                </div>

                            </div>

                        </div>


                        <div className="form-group mt-3">
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <label >Home Number</label>
                                    <input
                                        type='number'
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                        className="form-control mt-1"
                                        placeholder=' Number'
                                        required />
                                </div>
                                <div className='col-sm-4'>
                                    <label>Floor</label>
                                    <input
                                        type="number"
                                        value={floor}
                                        onChange={(e) => setFloor(e.target.value)}
                                        className="form-control mt-1"
                                        placeholder='Floor'
                                        required />
                                </div>
                                <div className='col-sm-4'>
                                    <label>Entrance</label>
                                    <input
                                        type="text"
                                        value={entrance}
                                        onChange={(e) => setEntrance(e.target.value)}
                                        className="form-control mt-1"
                                        placeholder='Entrance'
                                        required />
                                </div>
                            </div>
                        </div>


                        <h4 className='h3'>Payment Method</h4>


                        <div className="form-group mt-3">
                            <label htmlFor='name'>Full Name</label>
                            <input
                                type="text"
                                onChange={(e) => setFullName(e.target.value)}
                                value={fullName}
                                className="form-control mt-1"
                                placeholder='Full Name'
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="name">Card Owner ID</label>
                            <input
                                type="text"
                                onChange={(e) => setCardOwner(e.target.value)}
                                autoComplete='true'
                                value={cardOwner}
                                className="form-control mt-1"
                                placeholder="Card Owner Name"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="cardnumber">Card Number</label>
                            <input
                                type="text"
                                onChange={(e) => setCardNumber(e.target.value)}
                                autoComplete='true'
                                value={cardNumber}
                                className="form-control mt-1"
                                placeholder="Valid card number"
                                required
                            />
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="form-group mt-3"> <label><span className="hidden-xs">
                                        <h6>Expiration Date</h6>
                                    </span></label>
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                onChange={(e) => setMm(e.target.value)}
                                                placeholder="MM"
                                                value={mm}
                                                name="" className="form-control"
                                                required />
                                            <input
                                                type="number"
                                                placeholder="YY"
                                                onChange={(e) => setYy(e.target.value)}
                                                value={yy}
                                                name=""
                                                className="form-control"
                                                required />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="form-group mt-3"> <label >
                                        <h6>CVV </h6>
                                    </label>
                                        <input
                                            type="text"
                                            onChange={(e) => setCcv(e.target.value)}
                                            value={ccv}
                                            required
                                            className="form-control"
                                            placeholder='XXX'
                                        /> </div>
                                </div>
                            </div>
                        </div>

                        <div className='b1'>
                            <Button variant="primary" type='submit'> Check Out </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>



        </Container>
    )

}

export default CheckOut