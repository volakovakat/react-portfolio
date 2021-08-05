import React from "react";
import {Container, Col, Row, Form, Button, Image} from "react-bootstrap";
import Footer from "./Footer";
import "./Kontakt.css";

function Kontakt() {
    const [status, setStatus] = React.useState("Odeslat");
    const handleSubmit = (e) => {
        e.preventDefault();
        window.grecaptcha.ready(function() {
            window.grecaptcha.execute("6LeXo-AbAAAAAGM39paoSRJFodgQGJ3ZmVkVWgiq", {action: 'submit'}).then(async function(token) {
                setStatus("Odesílám...");
                const {name, email, message} = e.target.elements;
                let details = {
                    token: token,
                    action: "submit",
                    name: name.value,
                    email: email.value,
                    message: message.value,
                };
                let response = await fetch("https://stenlik.eu:25000/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify(details),
                });
                setStatus("Odesláno");
                let result = await response.json();
                e.target.reset();
            });
        });

    };

    return (
        <>
            <Container className="contactPage">
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <h2>Kontaktujte mě</h2>
                            <Form.Group className="mb-3" controlId={"name"}>
                                <Form.Label>Jméno</Form.Label>
                                <Form.Control size={"sm"} placeholder="Stanislav Novák"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId={"email"}>
                                <Form.Label>Váš e-mail</Form.Label>
                                <Form.Control size={"sm"} type="email" placeholder="name@example.com"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId={"message"}>
                                <Form.Label>Sem napište zprávu:</Form.Label>
                                <Form.Control as="textarea" rows={7}/>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{span: 12}}>
                                    <Button type="submit" variant="info" size="lg" block>{status}</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg={6} md={6}>
                        <Image className="contactMeImage" src="./images/contactmeimg.jpg" fluid/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default Kontakt;

