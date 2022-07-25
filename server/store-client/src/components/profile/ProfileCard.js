import React from 'react'
import { Card,Button } from 'react-bootstrap'
import './Profile.css'

const ProfileCard = (props) => {

    return (

        <Card className="profile-card-view">
            <Card.Body className='profle-card'>
                <div className='p'>
                    <p>Personal Information
                        This is the place to edit and change the personal information, so that the user information on the site will always be updated</p>
                </div>

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
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            autoComplete='true'
                            className="form-control mt-1"
                            placeholder="Email Address"     
                            required
                        />
                        </div>
                        <div className="form-group mt-3">
                        <label htmlFor="phone">Phone number</label>
                        <input
                            type="text"
                           
                            autoComplete='true'
                            className="form-control mt-1"
                            placeholder="Phone number"     
                            required
                        />
                        </div>
                        <div className='b1'>
                        <Button  target="_blank" variant="primary"> Save </Button>
                        </div>
                
            </Card.Body>
        </Card>


    )

}

export default ProfileCard