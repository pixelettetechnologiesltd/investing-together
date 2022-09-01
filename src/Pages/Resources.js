import React from "react";
import Freeguide from "../assets/components/Freeguide";
import { Container, Row, Col, Image } from "react-bootstrap";
import { images } from "../API/images";
import "../assets/css/Resources.css"
import FAQ from "../assets/components/FAQ";
const Resources = () => {
  return (
    <div>
      <section className="resource_hero">
      <Container>
      <div className="additional_resources">
        <h3>Additional Resources</h3>
      </div>
      <div className="additional_description">
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
        <Row>
          <Col lg={6} style={{marginTop:"5%"}}>
            <div className="left_section">
              <h3 className="learning">Learning</h3>
              <p className="more">Learn more about investing together’s mission and our individual team members.</p>
              <button className="btn_learn">Learn More</button>
              <h3 className="learning" style={{marginTop:"5%"}}>FAQs</h3>
              <p className="more">Recently with dsktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <button className="btn_learn">Learn More</button>
            </div>
          </Col>
          <Col lg={6} style={{marginTop:"5%"}}><img src={images.group29} height="90%" width="90%"/></Col>
        </Row>
       
      </Container>
      </section>
      <Freeguide />
      <Container>
      <h3 className="faq_heading">Frequently Asked Questions</h3>
      <FAQ/>
      </Container>
      <Container style={{ marginBottom: "100px" }}> 
      <Row style={{ marginTop: "100px" }}>
        <Col md={6} className="mt-5">
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              backgroundColor: "#7DD9CA",
              padding: "24px 22px 39px 21px",
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

export default Resources;
