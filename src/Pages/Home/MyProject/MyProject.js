import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyProject.css'
// const projects = [
//     {
//         name : "Triangle Bike Shop",
//         img: 'https://i.ibb.co/N6KmQkz/Triangle-Bike-Sh.png',
//         about : "This project is about a bike shop company. where you can purchase any type of bike you want. To ride your favourite bike, visit the site and give your reviews in the review form.",
//         live : 'https://triangle-bike-shop.web.app/', 
//         client_site : 'https://github.com/Fahad98723/bike-shop-client-site',
//         server_site : 'https://github.com/Fahad98723/triangle-travel-server-site'
//     },
//     {
//         name : "Triangle Travel",
//         img: 'https://i.ibb.co/YPsLdDr/Triangle-Travel.png',
//         about : "This project is about a travel guide company. Where you can book any travel destination for your holiday. They have their own traveling team or places where you can also join in with their hiking and travel by booking.",
//         live : 'https://travel-booking-site.web.app/', 
//         client_site : 'https://github.com/Fahad98723/triangle-travel-client-site',
//         server_site : 'https://github.com/Fahad98723/triangle-travel-server-site'
//     },
//     {
//         name : "Triangle Health Care",
//         img: 'https://i.ibb.co/dpTXm88/Triangle-Care-Ho.png',
//         about : "This project is about a medical center. where you can see the details of the doctor and the scene of the medical center. This project is all about doctors and medical centers.",
//         link : 'https://triangle-care-hospital.web.app/',
//         client_site : 'https://github.com/Fahad98723/triangle-care-hospital-client-site'
//     },
//     {
//         name : "Red Onion",
//         img: 'https://i.ibb.co/qdQks8G/React-App.png',
//         about : "This project is about a Hotel . Where you can order theirs food items to enjoy meals, dinner and breakfast. Order booking functions are not complete yet.I am working on it.",
//         link : 'https://hot-onion-restaurant-a367b.web.app/',
//         client_site : 'https://github.com/Fahad98723/triangle-learning-center',
//     },
//     {
//         name : "Triangle Learning Center",
//         img: 'https://i.ibb.co/605sV6K/Triangle-Learnin-1.png',
//         about : "This project based on childrens learning center. You can see details of their teachers and their courses . Courses enroll function are not ready yet. I am working on it",
//         link : 'https://trusting-dubinsky-16e05c.netlify.app/'
//         ,
//         client_site : 'https://github.com/Fahad98723/best-restaurant-site'
//     }
// ]
const MyProject = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('./project.json')
        .then(res => res.json())
        .then(data => setProjects(data)) 
    },[])
    return (
        <Container className='py-5'>
            <div className="heading mb-5">
                <h1>My Projects</h1>
            </div>
            <Row>
                {
                    projects.map(project => 
                        <Col lg='4' className='mb-4'  >
                            {/* <div
                             style={{background : `url(${project.img}), linear-gradient(#3A4256,#3A4256)` , backgroundRepeat: 'no-repeat', backgroundSize : 'contained', backgroundBlendMode: 'overlay',
                             height : '500px', width : '100%'}}>
                                
                             </div> */}
                             <div  className='project p-3 ' style={{ boxShadow: '#909090 0px 5px 10px' , borderRadius:'10px'}}>
                             <img className='img-fluid mb-4 project-image' src={project.img} alt="" /> 
                            <h3 className='title fw-bold'>{project.name}</h3>
                          <p>{project.about}</p>
                          <a href={project.live} className="m-1 fs-6 btn fw-semi-bold me-3"> <i className="me-2 fs-5 fab fa-firefox-browser"></i>Live Site</a>
                          <Link to={`/project/${project.id}`} className="m-1 fs-6 btn fw-semi-bold  "> <i className="me-2 fs-5 fas fa-info-circle"></i>Details</Link>
                        </div>
                            
                        </Col>)
                }
            </Row>
        </Container>
    );
};

export default MyProject;