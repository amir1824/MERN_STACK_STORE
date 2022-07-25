import React, { useState } from 'react'

import { Container, Card, Button } from 'react-bootstrap'
import ProfileCard from './ProfileCard'
import PaymentMethods from './PaymentMethods'
import ProfileCard3 from './ProfileCard3'
import AddressCard from './AddressCard'


const Profile = (props) => {

    const [active, setActive] = useState('')

    const profileHandelr = () => {
        setActive('one')
    }

    const addressHandelr = () => {
        setActive('tow')
    }

    const PaymentHandelr = () => {
        setActive('three')
    }
    const PasswordHandelr = () => {
        setActive('four')
    }



    const P = () => {
        return (
            <Card className="profile-card-view2">
                <Card.Body className='profle-card2'>

                    <div className="form-group mt-3">
                        <Button variant="primary2" onClick={profileHandelr}>Personal Details</Button>
                    </div>
                    <div className="form-group mt-3">
                        <Button variant="primary2">My Orders</Button>
                    </div>
                    <div className="form-group mt-3">
                        <Button variant="primary2" onClick={addressHandelr}>My Address</Button>
                    </div>
                    <div className="form-group mt-3">
                        <Button variant="primary2" onClick={PaymentHandelr} >Payment Methods</Button>
                    </div>
                    <div className="form-group mt-3">
                        <Button variant="primary2" onClick={PasswordHandelr}  >Reset Password</Button>
                    </div>

                </Card.Body>
            </Card>
        )
    }

    return (

        <Container fluid className='head' >

            <h1>Hi,Prfoile</h1>

            <P />

            {active === 'one' && <ProfileCard />}
            {active === 'tow' && <AddressCard />}
            {active === 'three' && <PaymentMethods />}
            {active === 'four' && <ProfileCard3 />}

        </Container>
    )



}

export default Profile