import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'

const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className='footer'>
            <Row>
                <Col md="4" className="footer-copywright">
                    <h5>Designed and Developed by Amir</h5>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h5>Copyright © {year} ABS</h5>
                </Col>
                <Col md="4" className="footer-copywright">
                    
                </Col>
            </Row>

        </Container>
    )

}

export default Footer