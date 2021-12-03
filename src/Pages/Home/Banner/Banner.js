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
                        <div className="details heading w-75">
                            <h3>Front End Developer</h3>
                            <h1 className='fw-bold'>Kazi Mohammad Fahad Kibira</h1>
                            
                            <a  href='https://drive.google.com/uc?export=download&id=1Cz5--O4XeMujxHfempYcLEWX2SR6eAhg' className="btn fs-5 ">Download Resume</a>
                            <div className='mt-3'>
                            <a target='blank' href='https://github.com/Fahad98723' className="social"><i className=" me-2 fs-1 fab fa-github-square"></i></a>
                            <a target='blank' href='https://www.linkedin.com/in/kazi-fahad-221a91211/' className="social"><i className=" me-2 fs-1 fab fa-linkedin"></i></a>
                            <a target='blank' href='https://twitter.com/Mdravi88' className="social"><i className=" me-2 fs-1 fab fa-twitter-square"></i></a>
                            <a target='blank' href='https://www.facebook.com/profile.php?id=100007037043156' className="social"><i className=" me-2 fs-1 fab fa-facebook-square"></i></a>
                            </div>                           
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