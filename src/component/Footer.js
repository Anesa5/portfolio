import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css';


const Footer = () => {
    return (
        <footer className=" bg-success text-white py-4">
            <Container>
                <Row className="align-items-center text-center text-md-start">
                    {/* Left: Company Name */}
                    <Col md={4} className="mb-3 mb-md-0">
                        <h1 className="mb-1">Anesa <br />Dev</h1>
                        <p className="mb-0 small">Data Analyst</p>
                    </Col>

                    {/* Center: Links */}
                    <Col md={4} className="mb-3 mb-md-0 d-flex justify-content-center">
                        <div className="d-flex gap-4">
                            <span className="footer-tags" style={{ cursor: "pointer" }}>Services</span>
                            <span style={{ cursor: "pointer" }}>Portfolio</span>
                            <span style={{ cursor: "pointer" }}>Contact</span>
                        </div>
                    </Col>

                    {/* Right: Icons */}
                    <Col md={4} className="d-flex justify-content-md-end justify-content-center gap-3">
                        <FaFacebookF style={{ cursor: "pointer" }} />
                        <FaTwitter style={{ cursor: "pointer" }} />
                        <FaInstagram style={{ cursor: "pointer" }} />
                    </Col>
                </Row>

                {/* Bottom: Rights Text */}
                <Row className="mt-3">
                    <Col className="text-center">
                        <small>© 2025 MyCompany. All rights reserved.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

