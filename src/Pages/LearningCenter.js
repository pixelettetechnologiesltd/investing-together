import React from "react";
import "../assets/css/LearningCenter.css";
import { Container, Col, Row, Image } from "react-bootstrap";
import { images } from "../API/images";
import InvestTogather from "../assets/components/InvestTogather";
import BeforeFooter from "../assets/components/BeforeFooter";
import Freeguide from "../assets/components/Freeguide";

const LearningCenter = () => {
  return (
    <div>
      <Container className="marg-top-100">
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <p className="main-black-head-cent">Learning Center</p>
            <p className="desc-cent mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five.
            </p>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="marg-top-60">
          <Col md={4}>
            <Image src={images.learning} width="100%" />
          </Col>
          <Col md={8}>
            <div className="learn-make-row-flex">
              <Image src={images.investp} width="18%" />
              <p className="learn-user">John Doe</p>
              <p className="learn-date">Dec 09, 2022</p>
            </div>
            <p className="title-Learn mt-3">
              The generated Lorem Ipsum is therefore always free from
              repetition, injected humour, or non-characteristic words etc.
            </p>
            <p className="grey-desc-left">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <p className="grey-desc-left mt-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of textIf you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text..
            </p>
            <button className="button-learn mt-4">Learn More</button>
          </Col>
        </Row>
      </Container>
      <InvestTogather />
      <Freeguide/>  
      <Container>
        <Row className="margin-top-100">
          <Col md={6}>
            <Image src={images.investabout} width="100%" />
          </Col>
          <Col md={1}></Col>
          <Col md={5}>
            <p className="left-black-head-40">
              Taking you to the next level!<br></br>Comfortable investment
              environment{" "}
            </p>
            <p className="grey-desc-left padd-right">
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
        <Row className="mt-5 mb-5">
          <Col md={6} className="mt-5">
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                backgroundColor: "#7DD9CA",
                padding: "110px 60px",
              }}
            >
              <div>
                <h3 className="footerAboveHeading">Ready to get started?</h3>
              </div>
              <div>
                <p className="lastSectionParagraph">
                  Start investing or get in touch
                </p>
              </div>
              <div className="downloadBtnDi">
                <div className="downloadBtnDiv mt-5">
                <button className="download-guide-but" style={{marginTop:"0px"}}>Start Investing Togather</button>  
                  <span style={{ marginLeft: "20px" }}>
                    <button className="white-bg-btn" to="/">
                      FAQs
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            className=""
            style={{ display: "grid", justifyContent: "center" }}
          >
            <div style={{ marginTop: "70px" }}>
              <Image src={images.videoImg} />
              <span className="spanTag">Watch Video</span>
            </div>
            <div>
              <p className="lastSectionParagraph2">
                There are many variations of passages of Lorem Ipsum <br />
                available, but the majority have suffered alteration in some
                <br />
                form, by injected humour, or randomised words which don't
                <br />
                look even slightly believable. If you are going to use a
                <br /> passage of Lorem Ipsum, you need to be sure.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <BeforeFooter />
    </div>
  );
};

export default LearningCenter;
