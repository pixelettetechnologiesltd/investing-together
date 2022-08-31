import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { images } from "../API/images";
const Signup = () => {
  return (
    <>
      <h2 className="contact-us">Signup</h2>
      <Container style={{ marginBottom: "100px" }}>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Form>
              <Form.Group className="mb-3" controlId="fname">
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="lname">
                <Form.Control type="text" placeholder="Lirst Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to Investing Together’s Terms of Use and Privacy Policy. I also agree to Dwolla Terms of Service and Privacy Policy." />
              </Form.Group>
              <button
                className="before-footer-btn"
                style={{ margin: "16px 27px 9px 110px" }}
              >
                Signup
              </button>
            </Form>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
      <div className="featured" style={{ marginTop: "100px" }}>
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className="heading4">As Featured On</h3>
              <div className="description">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="images">
                <img src={images.bloomberg} height="18px" />
                <img src={images.forbe} height="18px" />
                <img src={images.techcrunch} height="18px" />
              </div>
              <br></br>
              <br></br>
              <div className="images">
                <img src={images.fox} height="20px" />
                <img
                  src={images.fortune}
                  height="20px"
                  style={{ marginLeft: "40px" }}
                />
                <img src={images.amertide} height="20px" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Signup;
