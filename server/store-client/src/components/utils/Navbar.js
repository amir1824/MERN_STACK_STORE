import React, { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import LaunchCart from '../cart/LaunchCart'
import { AuthContext } from '../../context/auth-context'
import { BsFillPersonFill } from 'react-icons/bs'
import './Navbar.css'


const NavBar = (props) => {
    const {auth} = useContext(AuthContext)


    const logOutHandler = () => {
       
        localStorage.removeItem("authToken")
       
    }

    return (
        <div>
            <>
                <Navbar className='color-nav' variant='light' expand="md" fixed='top' >
                    <Container>
                        <Navbar.Brand as={Link} to='/'>BobutNatali</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"
                        />


                        <Navbar.Collapse id="responsive-navbar-nav"  >

                            <Nav className="me-auto" >
                                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/shop'>Shop </Nav.Link>
                                <Nav.Link href="#ourCostumes">Our Costumes </Nav.Link>

                            </Nav>
                            <Nav className='ms-auto'>
                                {auth ?auth.token : (<Nav.Link as={Link} to='/login'>Login </Nav.Link>)}
                                {auth ?auth.token : (<Nav.Link as={Link} to='/register'>Register </Nav.Link>)}
                                {auth && (<Nav.Link as={Link} to='/profile'> <BsFillPersonFill size={25} /> </Nav.Link>)}
                                <Nav.Link > <LaunchCart /> </Nav.Link>
                                {auth&& (<Nav.Link as={Link} to='/' onClick={logOutHandler()}> Logout </Nav.Link>)}



                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        </div>
    )


}
export default NavBar