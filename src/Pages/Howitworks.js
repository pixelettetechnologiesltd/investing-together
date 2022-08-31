import React from "react";
import "../assets/css/Howitworks.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { images } from "../API/images";

import Freeguide from "../assets/components/Freeguide";
import BeforeFooter from "../assets/components/BeforeFooter";
import Whitepaper from "../assets/components/Whitepaper";
const Howitworks = () => {
  return (
    <div>
      <section className="set-container-bg">
        <Container>
          <Row></Row>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <p className="main-black-head-center">How does it work?</p>
              <p className="desc-cent-grey">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five.
              </p>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </section>
      <Container className="margin-top-250px">
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Image
              className="gave-img-border"
              src={images.field}
              width="100%"
            />
            <Image className="set-position" src={images.vidico} />
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <Image
              className="margin-top-100"
              src={images.numbers}
              width="100%"
            />
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
      <Container className="background-image-leaf">
        <Row>
          <Col md={6}>
            <h2 className="select-nft-plan">
              Select NFT Planting and Creation{" "}
            </h2>
            <p className="desc-grey-left padding-right-130">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </Col>
          <Col md={6}>
            <Image src={images.farm} width="80%" />
          </Col>
        </Row>
      </Container>
      <section className="margin-top-100">
        <Col md={8}>
          <Image src={images.investNow} width="100%" />
        </Col>
        <Col md={4}></Col>
      </section>
      <Freeguide />
      <Container>
        <Row>
          <Whitepaper />
        </Row>
      </Container>
      <BeforeFooter />
    </div>
  );
};

export default Howitworks;
