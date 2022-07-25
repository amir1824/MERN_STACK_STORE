import React from 'react'
import { Card, Button } from 'react-bootstrap'



const PaymentMethods = () => {

    return (
        <Card className="profile-card-view">
            <Card.Body className='profle-card'>

                <div className="form-group mt-3">
                    <label htmlFor='name'>Full Name</label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        placeholder='name'
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="name">Card Owner</label>
                    <input
                        type="text"
                        autoComplete='true'
                        className="form-control mt-1"
                        placeholder="Card Owner Name"
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="cardnumber">Card Number</label>
                    <input
                        type="text"
                        autoComplete='true'
                        className="form-control mt-1"
                        placeholder="Valid card number"
                        required
                    />
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="form-group mt-3"> <label><span className="hidden-xs">
                                <h6>Expiration Date</h6>
                            </span></label>
                                <div className="input-group"> <input type="number" placeholder="MM" name="" className="form-control" required/>
                                    <input type="number" placeholder="YY" name="" className="form-control" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group mt-3"> <label >
                                    <h6>CVV </h6>
                                </label> <input type="text" required className="form-control"  placeholder='XXX'/> </div>
                            </div>
                        </div>



                    </div>
                    <div className='b1'>
                        <Button target="_blank" variant="primary"> Save </Button>
                    </div>

            </Card.Body>
        </Card>



    )

}

export default PaymentMethods