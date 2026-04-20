import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import "./ContactSection.css"; // Custom styles

const ContactSection = () => {
    return (
        <div className="contact-wrapper">
            <Container className="contact-box text-white py-5 px-4">
                <h2 className="mb-3">You have a new project?</h2>
                <p className="mb-4">
                    Contact me now and get discounts on your Web development projects.
                </p>
                <Button className="contact-btn">
                    Contact Me
                    <FaEnvelope className="me-2" />
                </Button>
            </Container>
        </div>
    );
};

export default ContactSection;
