import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import NavBar from '../Shared/NavBar/NavBar';

const Project = () => {
    const {id} = useParams()
    const [project,setProject]= useState([])
    useEffect(() => {
        fetch('/project.json')
        .then(res => res.json())
        .then(data => setProject(data))
    },[])
    const projectDetails = project.find(p => p.id === id)
    console.log(project);
    return (
        <>
        <NavBar></NavBar>
        <Container className='py-5'>
            <div className="heading mb-5">
                <h3>Project Details </h3>
            </div>
            <Row>
                <Col lg='5'>
                    <ProjectCarousel projectDetails={projectDetails}></ProjectCarousel>
                </Col>
                <Col lg='6'>
                    <h1 className='title'>{projectDetails?.name}</h1>
                    <p>{projectDetails?.details[1]?.desc}</p>
                    {
                        projectDetails?.details[0]?.technologies?.map(t => <button style={{background : '#007BEC', fontSize:'14px'}} className='m-1 btn fw-bold '>{t}</button>)
                    }
                    <div className="details-button mt-3">
                        <a href={projectDetails?.live} className="m-1 fs-5 btn"><i className="me-2 fs-4 fab fa-firefox-browser"></i>Live Site</a>
                        <a href={projectDetails?.client_site} className="m-1 fs-5 btn fw-semi-bold"><i className=" me-2 fs-4 fab fa-github"></i>Client Code</a>
                        {
                            projectDetails?.server_site ? <button className="m-1 fs-5 btn fw-semi-bold"><i className=" me-2 fs-4 fab fa-github"></i>Server Code</button> : ''
                        }
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Project;