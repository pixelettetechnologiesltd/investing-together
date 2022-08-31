import React from "react";
import "../assets/css/AccountInfo.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BiWallet} from 'react-icons/bi'
const AccountInfo = () => {
  return (
    <div>
      <Container className="bott-bg-img">
        <Row className="margin-top-100-acc">
          <Col md={4}></Col>
          <Col md={4}>
            <p className="black-head-cent-acc">Account Information</p>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}></Col>
          <Col md={4}></Col>
          <Col md={4}>
            <button className="acc-button-sing">
              Fill out ID Verification Info
            </button>
          </Col>
        </Row>
        <Form>
          <Row className="mt-5">
            <Col md={4}>
              <Form.Control
                className="field-set"
                type="text"
                placeholder="First Name"
                required
              />
              <Form.Control
                className="field-set mt-4"
                type="tel"
                placeholder="Phone"
                required
              />
              <Form.Control
                className="field-set mt-4"
                type="text"
                placeholder="Address 1"
              />
               <Form.Control
                className="field-set mt-4"
                type="text"
                placeholder="Country"
              />
            </Col>
            <Col md={4} className="marg-top-mbl">
              <Form.Control
                className="field-set"
                type="text"
                placeholder="Middle Name"
              />
              <Form.Control
                className="field-set mt-4"
                type="date"
                placeholder="Date of Birth"
                required
              />
              <Form.Control
                className="field-set mt-4"
                type="text"
                placeholder="Address 2"
              />
               <Form.Control
                className="field-set mt-4"
                type="text"
                placeholder="State"
              />
            </Col>
            <Col md={4} className="marg-top-mbl">
              <Form.Control
                className="field-set"
                type="text"
                placeholder="Last Name"
                required
              />
              <Form.Control
                className="field-set mt-4"
                type="text"
                placeholder="Citizenship"
              />
              <Form.Control
                className="field-set mt-4"
                type="text"
                placeholder="City"
              />
               <Form.Control
                className="field-set mt-4"
                type="text"
                placeholder="Zip Code"
              />
            </Col>
          </Row>
        </Form>
        <Row>
            <Col md={4}></Col>
            <Col md={4}>
                <button className="button-wallet"><span className="wallet-icon"><BiWallet/></span>Setup your wallet</button>
            </Col>
            <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AccountInfo;
