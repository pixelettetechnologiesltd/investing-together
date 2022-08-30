

import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import  {images} from "../../API/images"
import "../css/WhitePaper.css"
const Whitepaper = () => {
  return (
    <>
    <div className="" style={{ marginTop: "5%" }}>
    <Row className="">
      <Col sm={12} md={6} className="mt-3">
        <div>
          <h3 className="section4Heading">
            White Paper
          </h3>
        </div>
        <div>
          <p className="lastSectionParagraph">
            Introcution to investing together
          </p>
          <p className="lastSectionParagraph2">
            There are many variations of passages of Lorem Ipsum <br />
            available, but the majority have suffered alteration in some <br />
            form, by injected humour, or randomised words which don't <br />
            look even slightly believable. If you are going to use a <br />
            passage of Lorem Ipsum, you need to be sure.
          </p>
        </div>
        <div className="mt-5" >
          <Link to="/" className="downloadBtn">
            Download White paper
          </Link>
        </div>
      </Col>
      <Col sm={12} md={6} className="mt-3">
        <Image className='img-wid-mbl' src={images.whitePaper} />
      </Col>
    </Row>
  </div>
  <Row className='mt-5 mb-5' >
  <Col md={6} className="mt-5">
    <div style={{ display: "grid", justifyContent: "center", backgroundColor: "#7DD9CA", padding: "110px 60px" }}>
      <div className="">
        <h3 className="footerAboveHeading">
          Ready to get started?
        </h3>
      </div>
      <div>
        <p className="lastSectionParagraph">
          Start investing or get in touch
        </p>
      </div>
      <div className="downloadBtnDi">
        <div className="downloadBtnDiv mt-5" >
        {/* <button className="before-footer-btn">Start investing together</button> */}
          <Link to="/" className="before-footer-btn set-btn-white">
            Start investing together
          </Link>
          <span style={{ marginLeft: "20px" }}>
            <Link to="/" className="downloadBtn">
              FAQs
            </Link>
          </span>
        </div>
      </div>

    </div>
  );
};

export default WhitePaper;
