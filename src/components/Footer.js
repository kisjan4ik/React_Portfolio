import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from  "react-bootstrap/Col";

function Footer() {


    return (
        <footer className="mt-5">
<Container fluid={true}>
    <Row className="border-top justify-content-center p-3">
<Col className="p-0 text-center" md={3} sm={12}>
© Made by Olena Turetska
</Col>
    </Row>
</Container>
        </footer>
    );
}

export default Footer;