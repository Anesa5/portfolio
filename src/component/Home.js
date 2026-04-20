import React, { useState, useEffect } from 'react';
import "./Home.css";
import anesa from "./2.jpg";
import main from "./3.jpg";
import { Container, Row, Col, Button, Accordion, } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram, FaMoon, FaSun } from "react-icons/fa";
import Edu from './edu';

function Home() {
    // Dark mode state
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode function
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Apply dark mode to body when darkMode changes
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#ffffff';
        } else {
            document.body.classList.remove('dark-mode');
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        }
    }, [darkMode]);

    const renderProgressBars = () => (
        <>
            <div className="d-flex justify-content-between">
                <span style={{ color: darkMode ? '#ffffff' : 'inherit' }}>Python</span>
                <span style={{ color: darkMode ? '#ffffff' : 'inherit' }}>60%</span>
            </div>
            <div className="progress mb-2" style={{ height: "9px", backgroundColor: darkMode ? '#333' : '#e9ecef' }}>
                <div className="progress-bar" style={{ width: '40%', backgroundColor: darkMode ? '#73c5f8' : '#0d6efd' }}></div>
            </div>

            <div className="d-flex justify-content-between">
                <span style={{ color: darkMode ? '#ffffff' : 'inherit' }}>JavaScript</span>
                <span style={{ color: darkMode ? '#ffffff' : 'inherit' }}>60%</span>
            </div>
            <div className="progress mb-2" style={{ height: "9px", backgroundColor: darkMode ? '#333' : '#e9ecef' }}>
                <div className="progress-bar" style={{ width: '60%', backgroundColor: darkMode ? '#73c5f8' : '#0d6efd' }}></div>
            </div>

            <div className="d-flex justify-content-between">
                <span style={{ color: darkMode ? '#ffffff' : 'inherit' }}>React</span>
                <span style={{ color: darkMode ? '#ffffff' : 'inherit' }}>60%</span>
            </div>
            <div className="progress mb-2" style={{ height: "9px", backgroundColor: darkMode ? '#333' : '#e9ecef' }}>
                <div className="progress-bar" style={{ width: '80%', backgroundColor: darkMode ? '#73c5f8' : '#0d6efd' }}></div>
            </div>

            <div className="d-flex justify-content-between">
                <span style={{ color: darkMode ? '#ffffff' : 'inherit' }}>SQL</span>
                <span style={{ color: darkMode ? '#ffffff' : 'inherit' }}>60%</span>
            </div>
            <div className="progress mb-2" style={{ height: "9px", backgroundColor: darkMode ? '#333' : '#e9ecef' }}>
                <div className="progress-bar" style={{ width: '30%', backgroundColor: darkMode ? '#73c5f8' : '#0d6efd' }}></div>
            </div>
        </>
    );

    return (
        <>
            <div style={{
                backgroundColor: darkMode ? '#121212' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
                minHeight: '100vh'
            }}>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg" style={{
                    backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
                    borderBottom: darkMode ? '1px solid #333' : '1px solid #eee'
                }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#default" style={{ color: darkMode ? "#ffffff" : "black" }}>
                            Anesa Dev
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#home" style={{ color: darkMode ? "#ffffff" : "black" }}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#About" style={{ color: darkMode ? "#ffffff" : "black" }}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Skills" style={{ color: darkMode ? "#ffffff" : "black" }}>Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Services" style={{ color: darkMode ? "#ffffff" : "black" }}>Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Portfolio" style={{ color: darkMode ? "#ffffff" : "black" }}>Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Contact" style={{ color: darkMode ? "#ffffff" : "black" }}>Contact</a>
                                </li>
                                <li className="nav-item ms-3" onClick={toggleDarkMode} style={{ cursor: "pointer" }}>
                                    {darkMode ? (
                                        <FaSun style={{ color: "#ffc107", fontSize: "20px" }} />
                                    ) : (
                                        <FaMoon style={{ color: "#000000", fontSize: "20px" }} />
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Three Column Section */}
                <Container fluid className="three-column-section mt-4">
                    <Row>
                        {/* Left Column */}
                        <Col md={4} className="left-column">
                            <FaFacebook className="social-icon fb" style={{ color: darkMode ? "#ffffff" : "#1877f2" }} />
                            <FaInstagram className="social-icon insta" style={{ color: darkMode ? "#ffffff" : "#e4405f" }} />
                            <FaTwitter className="social-icon twitter" style={{ color: darkMode ? "#ffffff" : "#1da1f2" }} />
                        </Col>

                        {/* Middle Column */}
                        <Col md={4} className="middle-column">
                            <h2 style={{ color: darkMode ? "#ffffff" : "inherit" }}>Hi, I'am <br />Anesa</h2>
                            <p style={{ color: darkMode ? "#cccccc" : "inherit" }}>
                                Data Analyst<br />
                                High level experience in data analitical<br /> knowledge and digital banking with <br />quality work.
                            </p>
                            <Button variant="primary" className="telegram-btn" style={{ background: "#73c5f8ff", color: "white", border: "none" }}>
                                Contact Me
                                <FaTelegram className="me-2" />
                            </Button>
                        </Col>

                        {/* Right Column */}
                        <Col md={4} className="right-column text-center">
                            <img src={anesa} alt="Profile" className="oval-image" />
                        </Col>
                    </Row>
                </Container >

                <Container className="my-section py-5">
                    {/* Main Heading and Paragraph */}
                    <h1 className="main-heading text-center" style={{ color: darkMode ? "#ffffff" : "inherit" }}>About Me</h1>
                    <p className="main-paragraph text-center" style={{ color: darkMode ? "#cccccc" : "inherit" }}>
                        My Introduction
                    </p>

                    {/* 2 Sections */}
                    <Row className="mt-5">
                        {/* Left Section - Image */}
                        <Col md={6} className="text-center">
                            <img src={main} alt="Description" className="responsive-image" style={{ width: "80%", height: "80%" }} />
                        </Col>

                        {/* Right Section - Text */}
                        <Col md={6}>
                            <p className="left-paragraph" style={{ color: darkMode ? "#ffffff" : "inherit" }}>
                                Data analyst, with extensive knowledge<br /> and years of experience, working in Digital <br />banking technologies and other data <br />analitical tools, delivering quality work.
                            </p>

                            <Row className="mt-4 justify-content-start">
                                <Col md={4} className="text-start">
                                    <h4 className="feature-heading" style={{ color: darkMode ? "#ffffff" : "inherit" }}>03+</h4>
                                    <p className="feature-description" style={{ color: darkMode ? "#cccccc" : "inherit" }}>Years<br />Experience</p>
                                </Col>
                                <Col md={4} className="text-start">
                                    <h4 className="feature-heading" style={{ color: darkMode ? "#ffffff" : "inherit" }}>05+</h4>
                                    <p className="feature-description" style={{ color: darkMode ? "#cccccc" : "inherit" }}>Completed<br />Certifications</p>
                                </Col>
                                <Col md={4} className="text-start">
                                    <h4 className="feature-heading" style={{ color: darkMode ? "#ffffff" : "inherit" }}>02+</h4>
                                    <p className="feature-description" style={{ color: darkMode ? "#cccccc" : "inherit" }}>Companies<br />Worked</p>
                                </Col>
                            </Row>



                            {/* Button */}
                            <Button variant="primary" className="mt-5 left-button" style={{ backgroundColor: darkMode ? "#73c5f8" : "#0d6efd", border: "none" }}>
                                Download CV
                            </Button>
                        </Col>
                    </Row>
                </Container>


                <Container className="py-5">
                    <h2 className="text-center mb-4" style={{ color: darkMode ? "#ffffff" : "inherit" }}>My Skills</h2>
                    <p className="text-center mb-4" style={{ color: darkMode ? "#cccccc" : "inherit" }}>Click any section to view skill details.</p>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff', color: darkMode ? '#ffffff' : 'inherit' }}>
                            <Accordion.Header style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff', color: darkMode ? '#ffffff' : 'inherit' }}>
                                <span className="me-2">
                                    <i className="bi bi-bar-chart-line-fill" style={{ color: "blue" }}></i>
                                </span>
                                Data Analyst<br />More than 3 years
                            </Accordion.Header>

                            <Accordion.Body style={{ backgroundColor: darkMode ? '#121212' : '#ffffff', color: darkMode ? '#ffffff' : 'inherit' }}>
                                {renderProgressBars()}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff', color: darkMode ? '#ffffff' : 'inherit' }}>
                            <Accordion.Header style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff', color: darkMode ? '#ffffff' : 'inherit' }}>
                                <span className="me-2">
                                    <i className="bi bi-webcam" style={{ color: "blue" }}></i>
                                </span>
                                Banker<br />More than 3 yrears
                            </Accordion.Header>

                            <Accordion.Body style={{ backgroundColor: darkMode ? '#121212' : '#ffffff', color: darkMode ? '#ffffff' : 'inherit' }}>
                                {renderProgressBars()}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff', color: darkMode ? '#ffffff' : 'inherit' }}>
                            <Accordion.Header style={{ backgroundColor: darkMode ? '#1e1e1e' : '#ffffff', color: darkMode ? '#ffffff' : 'inherit' }}>
                                <span className="me-2">
                                    <i className="bi bi-braces" style={{ color: "blue" }}></i>
                                </span>
                                Web developer<br />More than 2 years
                            </Accordion.Header>

                            <Accordion.Body style={{ backgroundColor: darkMode ? '#121212' : '#ffffff', color: darkMode ? '#ffffff' : 'inherit' }}>
                                {renderProgressBars()}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>



            </div >
            <Edu />
        </>
    );
}

export default Home;