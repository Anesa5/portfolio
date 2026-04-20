import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import './InfoSlider.css';

import { FaArrowRight } from "react-icons/fa";
import slider from "./slider.jpg";
import slider1 from "./images.jpg";
import slider2 from "./slider2.jpg"; // Make sure this image exists

const InfoSlider = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-1">Portfolio</h2>
            <p className="text-center mb-5">
                Most Recent Work
            </p>

            <Carousel>
                {/* Slide 1 */}
                <Carousel.Item>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} className="mb-4 mb-md-0">
                            <img
                                src={slider}
                                alt="Slide 1"
                                className="img-fluid rounded mx-auto d-block"
                                style={{ height: "auto", maxHeight: "250px", objectFit: "cover", width: "100%", maxWidth: "400px" }}
                            />
                        </Col>
                        <Col xs={12} md={6} className="text-center text-md-start">
                            <h4>Brand Design</h4>
                            <p>
                                A creative brand design adaptable to all<br /> devices,
                                built using reusable UI components and<br /> smooth user interactions.
                            </p>
                            <Button variant="primary">
                                Demo<FaArrowRight className="ms-2" />
                            </Button>
                        </Col>
                    </Row>
                </Carousel.Item>

                {/* Slide 2 */}
                <Carousel.Item>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} className="mb-4 mb-md-0">
                            <img
                                src={slider1}
                                alt="Slide 2"
                                className="img-fluid rounded mx-auto d-block"
                                style={{ height: "auto", maxHeight: "250px", objectFit: "cover", width: "100%", maxWidth: "400px" }}
                            />
                        </Col>
                        <Col xs={12} md={6} className="text-center text-md-start">
                            <h4>Modern Dashboard</h4>
                            <p>
                                A clean, data-focused dashboard for analytics, adaptable to
                                all<br /> devices with engaging UI and <br />responsive layout.
                            </p>
                            <Button variant="success">
                                Demo<FaArrowRight className="ms-2" />
                            </Button>
                        </Col>
                    </Row>
                </Carousel.Item>

                {/* Slide 3 */}
                <Carousel.Item>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} className="mb-4 mb-md-0">
                            <img
                                src={slider2}
                                alt="Slide 3"
                                className="img-fluid rounded mx-auto d-block"
                                style={{ height: "auto", maxHeight: "250px", objectFit: "cover", width: "100%", maxWidth: "400px" }}
                            />
                        </Col>
                        <Col xs={12} md={6} className="text-center text-md-start">
                            <h4>Responsive UI</h4>
                            <p>
                                A creative brand design adaptable to all<br /> devices,
                                built using reusable UI components and<br /> smooth user interactions.
                            </p>
                            <Button variant="warning">
                                Demo <FaArrowRight className="ms-2" />
                            </Button>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default InfoSlider;