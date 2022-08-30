import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../assets/css/Company.css";
import { images } from "../API/images";

const Company = () => {
  return (
    <div>
      <Container>
        <Row className="margin-top-100">
          <Col md={2}></Col>
          <Col md={8}>
            <p className="black-head-center">Investing together</p>
            <p className="grey-desc-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="margin-top-50">
          <Col md={6}>
            <p className="vision">Vision</p>
            <p className="vision-desc">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures.
            </p>
            <p className="vision mt-5">Mission</p>
            <p className="vision-desc">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures.
            </p>
          </Col>
          <Col md={6} className="black-bg-company">
            <Image src={images.logohd} />
          </Col>
        </Row>
        <Row className="margin-top-50 mb-5">
          <Col md={6}>
            <p className="vision">About</p>
            <p className="vision-desc">
              Learn more about investing together’s mission and our individual
              team members.
            </p>
            <button className="download-guide-but margin-top-min-btn">
              Know More
            </button>
          </Col>
          <Col md={6} className="marg-top-mbl">
            <p className="vision">Legal Documents</p>
            <p className="vision-desc">
              Recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>
            <button className="download-guide-but margin-top-min-btn">
              Legal Documents
            </button>
          </Col>
        </Row>
      </Container>
      <section className="grey-light-bg">
        <Container>
          <Row>
            <Col md={5} sm={12} className="right-border">
              <p className="black-head-left-34">As featured on</p>
              <p className="grey-desc-left-18 padd-right">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </Col>
            <Col md={1}></Col>
            <Col md={6} sm={10}>
              <Image className="img-set-for-mbl" src={images.companytest} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Company;
