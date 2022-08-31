import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
const Login = () => {
  return (
    <>
      <h2 className="contact-us">Login</h2>
      <Container style={{marginBottom:"100px"}}>
        <Row>
          <Col lg={4}></Col>
            <Col lg={4}>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <button className="before-footer-btn" style={{margin:"16px 27px 9px 110px"}}>Login</button>
            </Form>
            </Col>
            <Col lg={4}></Col>
            </Row>
      </Container>
    </>
  );
};

export default Login;
