import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from  "react-bootstrap/Col";

function Footer() {


    return (
        <footer className="mt-5">
<Container id="nav"  fluid={true}>
    <Row className="border-top justify-content-center p-3">
<Col className="p-0 text-center display-5" md={3} sm={12}>
Copyright © 2020 - Olena Turetska. 
<br></br>
All Rights Reserved.
</Col>
    </Row>
</Container>
        </footer>
    );
}

export default Footer;