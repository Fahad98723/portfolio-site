import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../../Images/IMGL8786.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <Container>
                <Row className='align-items-center py-5 g-5'>
                    <Col lg='7'>
                        <div className="details w-75">
                            <h3>Front End Developer</h3>
                            <h1 className='fw-bold'>Kazi Mohammad Fahad Kibira</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, error fugit! Sunt officia ipsum iusto consequatur, illum laudantium quaerat ab expedita odit. Corrupti quae sunt ab delectus eligendi tempore dolores.</p>
                            <a  href='https://drive.google.com/uc?export=download&id=1ToNDkse6cGF_FCzXQjIpSkZ6Eao0DOPK' className="btn">Download Resume</a>
                        </div>
                    </Col>
                    <Col lg='5'>
                    <div className="image">
                            <img style={{filter: 'grayscale(1)'}} className='img-fluid' src={image} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;