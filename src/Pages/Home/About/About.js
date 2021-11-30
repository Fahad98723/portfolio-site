import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../../Images/about.png'
const About = () => {
    
    return (
        <Container id='about' className='py-5'>
            <Row className='align-items-center'>
                <Col lg='6'>
                    <img src={about} className='img-fluid
                    ' alt="" />
                </Col>
                <Col lg='6'>
                    <div className="heading mb-5">
                        <h3>About Me</h3>
                        <h1 className='fw-bolder' style={{fontFamily: `'Comforter Brush', cursive` ,color :'#007BEC', fontSize : '45px'}}>Front End  Developer & Web Designer</h1>
                    </div>
                    <div className="details">
                        <p>I'm a front-end web developer.Having the skills and training made me confident enough to call myself a Junior front-end web developer/Junior web developer. Ready to take on challenges and responsibility to grow as a full-fledged web developer. Recently, I graduated from the Complete Web Development with Jhankar Mahbub by Programming Hero. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</p>
                        <a className='btn' href="">Contact Me</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;