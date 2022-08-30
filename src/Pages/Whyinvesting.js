import React from "react";
import FarmerInvester from "../assets/components/FarmerInvester";
import {Col, Container, Row } from "react-bootstrap";
import ChartApex from "../assets/components/ChartApex";
import "../assets/css/whyinvesting.css";
import WhitePaper from "../assets/components/WhitePaper"
const Whyinvesting = () => {
  return (
    <>
      <Container>
        <section className="hero">
          <div className="heading">
            {" "}
            <h1>Lorem Ipsum is simply dummy</h1>
          </div>
        </section>
        <div className="subtitle">
          A transformative investment for both investors’ portfolios and
          tomorrow’s world.
        </div>
        <Row style={{ marginTop: "100px" }}>
          <Col lg={2}>
            <p>
              <button className="performance">Performance</button>
            </p>
            <p>
              <button className="Stability">Stability</button>
            </p>
            <p>
              <button className="Diversification">Diversification</button>
            </p>
          </Col>
          <Col lg={10}>
            <h4 className="additional-detail">Additional Details</h4>
            <span>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the first true
              generator on the Internet.
            </span>
            <ChartApex/>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
        <Col lg={10}>
            <h4 className="additional-detail">Additional Details</h4>
            <span>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the first true
              generator on the Internet.
            </span>
            <ChartApex/>
          </Col>
          <Col lg={2}>
            <p>
              <button className="performance">Performance</button>
            </p>
            <p>
              <button className="Stability">Stability</button>
            </p>
            <p>
              <button className="Diversification">Diversification</button>
            </p>
          </Col>
          
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col lg={2}>
            <p>
              <button className="performance">Performance</button>
            </p>
            <p>
              <button className="Stability">Stability</button>
            </p>
            <p>
              <button className="Diversification">Diversification</button>
            </p>
          </Col>
          <Col lg={10}>
            <h4 className="additional-detail">Additional Details</h4>
            <span>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the first true
              generator on the Internet.
            </span>
            <ChartApex/>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
        <Col lg={10}>
            <h4 className="additional-detail">Additional Details</h4>
            <span>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the first true
              generator on the Internet.
            </span>
            <ChartApex/>
          </Col>
          <Col lg={2}>
            <p>
              <button className="performance">Performance</button>
            </p>
            <p>
              <button className="Stability">Stability</button>
            </p>
            <p>
              <button className="Diversification">Diversification</button>
            </p>
          </Col>
         
        </Row>
        <WhitePaper />
      </Container>
      <FarmerInvester />
    </>
  );
};

export default Whyinvesting;
