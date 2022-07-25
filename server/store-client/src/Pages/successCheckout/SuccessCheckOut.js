import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './SuccessCheckOut.css'
const SuccessAfterCheckOut = () => {

    const Navigate = useNavigate()

    const backToHomePageHandler = ()=>{
        Navigate('/')
    }

    return (
        <Container fluid className='body-success'>
           
            <Card className="profile-card-view-success">
                <Card.Body className='profle-card-success' >
                   <h1 className='h1-success'>Your Order Is On The Way! </h1>
                   <h5>Estimated to ship 7-10 business days after payment confirmation</h5>
                    <div className='b1-success'>
                    <Button onClick={backToHomePageHandler}>Home Page</Button>

                    </div>
                  
                   

                </Card.Body>
            </Card>

        </Container>

    )

}

export default SuccessAfterCheckOut