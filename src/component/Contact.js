import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    return (
        <Container className="py-5">
            <h2 className="text-center mb-3">Get in Touch</h2>
            <p className="text-center mb-5">We’d love to hear from you. Contact us anytime!</p>

            <Row className="custom-flex-row">
                {/* Left Section */}
                <Col sm={12} md={6} lg={6} className="mb-5 contact-left">
                    {/* Call Me */}
                    <div className="mb-4 align-items-start" style={{ marginRight: "0%" }}>
                        <a href="tel:+923156834066" className="d-flex text-decoration-none" style={{ color: "inherit" }}>
                            <FaPhoneAlt className="mt-1 text-primary" size={20} style={{ marginRight: "15px", flexShrink: 0 }} />
                            <div>
                                <h5>Call Me</h5>
                                <p className="mb-2">+92 3146984066</p>
                            </div>
                        </a>
                    </div>

                    {/* Email */}
                    <div className="mb-4 align-items-start" style={{ marginRight: "0%" }}>
                        <a href="mailto:anesch501@gmail.com" className="d-flex text-decoration-none" style={{ color: "inherit" }}>
                            <FaEnvelope className="mt-1 text-primary" size={20} style={{ marginRight: "15px", flexShrink: 0 }} />
                            <div>
                                <h5>Email</h5>
                                <p className="mb-2">anesch501@gmail.com</p>
                            </div>
                        </a>
                    </div>

                    {/* Location */}
                    <div className="mb-4 align-items-start" style={{ marginRight: "0%" }}>
                        <a href="https://www.google.com/maps/place/Central+sri+Lanka" target="_blank" rel="noopener noreferrer" className="d-flex text-decoration-none" style={{ color: "inherit" }}>
                            <FaMapMarkerAlt className="mt-1 text-primary" size={20} style={{ marginRight: "15px", flexShrink: 0 }} />
                            <div>
                                <h5>Location</h5>
                                <p>Lahore</p>
                            </div>
                        </a>
                    </div>
                </Col>

                {/* Right Section - Form */}
                <Col md={12} lg={6}>
                    <Form className="contact-form" style={{ marginLeft: "0%" }}>
                        <div className="d-flex flex-wrap gap-3">
                            <Form.Group className="mb-3 form-half" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" className="custom-input" />
                            </Form.Group>

                            <Form.Group className="mb-3 form-half" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" className="custom-input" />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" controlId="formSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter subject" className="custom-input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Type your message" className="custom-input" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="px-4 rounded-pill w-100 w-md-auto">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;