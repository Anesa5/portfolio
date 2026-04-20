import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Testimonial.css";
import hiba from "./Test2.jpg";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        title: "UI/UX Designer",
        feedback:
            "Working with her was seamless. She delivers high-quality designs on time and with precision.",
        image: { hiba } // Replace with real image
    },
    {
        id: 2,
        name: "Ali Khan",
        title: "Software Engineer",
        feedback:
            "Very professional and detail-oriented. A joy to collaborate with on all projects!",
        image: { hiba }, // Replace with real image
    },
];

const TestimonialSection = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Testimonials</h2>
            <Row className="justify-content-center">
                {testimonials.map((testimonial) => (
                    <Col md={5} className="mb-4" key={testimonial.id}>
                        <Card className="testimonial-card p-4">
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src={hiba}
                                    alt={testimonial.name}
                                    className="testimonial-img me-3"
                                />
                                <div>
                                    <h5 className="mb-0">{testimonial.name}</h5>
                                    <small className="text-muted">{testimonial.title}</small>
                                </div>
                            </div>
                            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TestimonialSection;
