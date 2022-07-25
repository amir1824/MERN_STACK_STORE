import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from './ProductCard';
import axios from 'axios';

import './Product.css'


const Product = () => {

    //the states 
    const [products, setProducts] = useState([])



    useEffect(() => {

        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:8000/api/v1/product/')

            const responseData = response.data.data.data


            setProducts(responseData)


        }
        fetchProducts()
    }, [])

    console.log(products)
  



    return (
        <Container fluid className='product-section'>
            <Container >
                <h1 style={{ color: "black" }}>  The Puppets</h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {products.map((item, index) => {
                        return (
                            <Col md={3} className='product-card' key={index} >
                                <ProductCard
                                    id={item._id}
                                    imgPath={item.img}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                 
                                />
                            </Col>
                        )
                    })}
                </Row>

            </Container>

        </Container>
    )


}
export default Product