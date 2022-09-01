import React from "react";
import "../css/WhitePaper.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { images } from "../../API/images";
const WhitePaper = () => {
  return (
    <div >
      <Container className="margin-top-100">
        <Row>
          <Col md={6}>
            <h2 className="select-nft-plan">White Paper</h2>
            <p className="desc-grey-left-14px">
              Introcution to investing together
            </p>
            <p className="desc-grey-left padding-right-130">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <button className="download-guide-but">Download White paper</button>
          </Col>
          <Col md={6}>
            <Image className="img-wid-mbl" src={images.whitePaper} />
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col md={6} className="mt-5">
            <div className="set-padd-for-mbl"
              style={{
                display: "grid",
                justifyContent: "center",
                backgroundColor: "#7DD9CA",
                padding: "100px",
              }}
            >
              <div className="">
                <h3 className="footerAboveHeading">Ready to get started?</h3>
              </div>
              <div>
                <p className="lastSectionParagraph">
                  Start investing or get in touch
                </p>
              </div>
              <div className="downloadBtnDi">
                <div className="downloadBtnDiv mt-5">
                  <button className="download-guide-but">Start Investing Togather</button>
                  <span style={{ marginLeft: "20px" }}>
                    <button className="download-guide-but">FAQ's</button>
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
    </div>
  );
};

export default WhitePaper;
