import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../src/assets/css/AboutUs.css";
import { images } from "../API/images";
import { FaCheck } from 'react-icons/fa';
import BeforeFooter from "../assets/components/BeforeFooter";
import InvestTogather from "../assets/components/InvestTogather";

const AboutUs = () => {
  return (
    <div>
      <section className="feroz-bg-about">
        <Container>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <h2 className="main-black-head-center">About Us</h2>
              <p className="grey-desc-cent">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="margin-top-min">
          <Col md={4}>
            <div className="make-col-flex">
              <Image className="align-img-right" src={images.abt1} width="84%"/>
              <Image className="align-img-right" src={images.abt2} width="84%" style={{ marginTop: "25px" }} />
            </div>
          </Col>
          <Col md={4}>
            <div>
              <Image className="marg-top-at-mbl" src={images.abt3} width="100%" />
            </div>
          </Col>
          <Col md={4}>
            <div className="make-col-flex">
              <Image className="marg-top-at-mbl" src={images.abt4} width="84%"/>
              <Image src={images.abt5} style={{ marginTop: "25px" }} width="84%" />
            </div>
          </Col>
        </Row>
        <Row className="margin-top-100">
          <Col md={1}></Col>
          <Col md={10} className="make-flex-row">
            <Col md={3} className="margin-auto">
              <Image src={images.fire} width="20%" />
              <p className="black-head-48">12M</p>
              <p className="grey-desc-left">Daily Active Users</p>
            </Col>
            <Col md={3} className="margin-auto">
              <Image src={images.users} width="20%" />
              <p className="black-head-48">100K</p>
              <p className="grey-desc-left">Paid Customers</p>
            </Col>
            <Col md={3} className="margin-auto">
              <Image src={images.msg} width="20%" />
              <p className="black-head-48">31M+</p>
              <p className="grey-desc-left">Message Rotation </p>
            </Col>
            <Col md={3} className="margin-auto">
              <Image src={images.flag} width="20%" />
              <p className="black-head-48">40</p>
              <p className="grey-desc-left">Country Users</p>
            </Col>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row className="margin-top-100">
          <Col md={6}>
            <Image src={images.investabout}/>
          </Col>
          <Col md={1}></Col>
          <Col md={5}>
            <p className="left-black-head-40">
              Taking you to the next level!<br></br>Comfortable investment
              environment{" "}
            </p>
            <p className="grey-desc-left ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </Col>
        </Row>
      </Container>
      <section className="froz-bg-aboutus-sec marg-top-100">
        <Container>
            <Row>
                <Col md={5}>
                    <p className="black-head-left-48">Our Work<br></br>Culture Company’s</p>
                    <p className="grey-desc-left-18" style={{paddingRight:"50px"}}>Like Steve Jobs quotes, “Design is not just what it looks like and feels like. Design is how it works”. We always try to make a great output by this culture:</p>
                
                <div className="make-all-cult-row">
                    <div  className="mt-4">
                    <div className="make-flex-col-cult">
                        <FaCheck className="icon-set"/>
                        <p className="check-text">Easy Investment</p>
                    </div>
                    <div className="make-flex-col-cult">
                        <FaCheck className="icon-set"/>
                        <p className="check-text">Updated Portfolio</p>
                    </div>
                    <div className="make-flex-col-cult">
                        <FaCheck className="icon-set"/>
                        <p className="check-text">Secure System</p>
                    </div>
                </div>

                <div  className="mt-4">
                    <div className="make-flex-col-cult">
                        <FaCheck className="icon-set"/>
                        <p className="check-text">700+ Portfolios</p>
                    </div>
                    <div className="make-flex-col-cult">
                        <FaCheck className="icon-set"/>
                        <p className="check-text">350+ Investors</p>
                    </div>
                    <div className="make-flex-col-cult">
                        <FaCheck className="icon-set"/>
                        <p className="check-text">50% Revenue</p>
                    </div>
                </div>
                </div>
                </Col>
                <Col md={2}></Col>
                <Col md={5}>
                    <Image className="culture-img-mbl-set" src={images.culture} width="100%"/>
                </Col>
            </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <p className="black-head-center"> How to Investing together</p>
            <p className="desc-for-white-bg-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <InvestTogather/>
      <BeforeFooter/>
    </div>
  );
};

export default AboutUs;
