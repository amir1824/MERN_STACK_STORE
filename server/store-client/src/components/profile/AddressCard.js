import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import './AddressCard.css'


const AddressCard = () => {

    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [floor, setFloor] = useState("")
    const [entrance, setEntrance] = useState("")
    const [zipCode, setZipCode] = useState("")

    

    return (

        <Card className="address-card-view">
            <Card.Body className='address-card'>
                <div className="form-group mt-3">

                    <label>State</label>
                    <input
                        type="text"
                        onChange={(e) => setState(e.target.value)}
                        className="form-control mt-1"
                        placeholder='State'
                        value={state}
                        required />

                </div>

                <div className="form-group mt-3">

                    <label>City</label>
                    <input
                        type="text"
                        onChange={(e) => setCity(e.target.value)}
                        className="form-control mt-1"
                        placeholder='City'
                        value={city}
                        required />

                </div>
                <div className="form-group mt-3">
                    <label>Street</label>
                    <input
                        type="text"
                        onChange={(e) => setStreet(e.target.value)}
                        className="form-control mt-1"
                        placeholder='Street'
                        value={street}
                        required />

                </div>
                <div className="form-group mt-3">
                    <label>Number Of Home</label>
                    <input
                        type='text'
                        onChange={(e) => setNumber(e.target.value)}
                        className="form-control mt-1"
                        placeholder='Number Of Home'
                        value={number}
                        required />

                </div>
                <div className="form-group mt-3">
                    <label>Floor</label>
                    <input
                        type="text"
                        onChange={(e) => setFloor(e.target.value)}
                        className="form-control mt-1"
                        placeholder='Floor'
                        value={floor}
                        required />

                </div>
                <div className="form-group mt-3">
                    <label>Entrance</label>
                    <input
                        type="text"
                        onChange={(e) => setEntrance(e.target.value)}
                        className="form-control mt-1"
                        placeholder='Entrance'
                        value={entrance}
                        required />

                </div>
                <div className="form-group mt-3">
                    <label>Zip Code</label>
                    <input
                        type="text"
                        onChange={(e) => setZipCode(e.target.value)}
                        className="form-control mt-1"
                        placeholder='Zip Code'
                        value={zipCode}
                        required
                    />
                </div>

                <div className='b1'>
                    <Button target="_blank" variant="primary"> Save</Button>
                </div>
            </Card.Body>
        </Card>


    )


}
export default AddressCard