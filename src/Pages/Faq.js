import React from "react";
import FarmerInvester from "../assets/components/FarmerInvester";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { images } from "../API/images";
import Accordion from "react-bootstrap/Accordion";
const Faq = () => {
  return (
    <div>
      <h2 className="faq_heading">Frequently Asked Questions</h2>
      <Container>
        <h2 className="general">General</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <h2 className="privacy">Privacy/Security</h2>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="catonary">
          <h2 className="catonary-heading">CAUTIONARY STATEMENT REGARDING FORWARD-LOOKING STATEMENTS</h2>
          <p style={{marginTop:"3%"}}>
            These FAQs contain certain forward-looking statements that are
            subject to various risks and uncertainties. Forward-looking
            statements are generally identifiable by the use of forward-looking
            terminology such as “may,” “will,” “should,” “potential,” “intend,”
            “expect,” “outlook,” “seek,” “anticipate,” “estimate,”
            “approximately,” “believe,” “could,” “project,” “predict,” or other
            similar words or expressions, but the absence of these words does
            not mean that a statement is not forward-looking. Forward-looking
            statements are based on certain assumptions, discuss future
            expectations, describe future plans and strategies, or state other
            forward-looking information.
          </p>
          <p>
            These FAQs contain certain forward-looking statements that are
            subject to various risks and uncertainties. Forward-looking
            statements are generally identifiable by the use of forward-looking
            terminology such as “may,” “will,” “should,” “potential,” “intend,”
            “expect,” “outlook,” “seek,” “anticipate,” “estimate,”
            “approximately,” “believe,” “could,” “project,” “predict,” or other
            similar words or expressions, but the absence of these words does
            not mean that a statement is not forward-looking. Forward-looking
            statements are based on certain assumptions, discuss future
            expectations, describe future plans and strategies, or state other
            forward-looking information.
          </p>
          <p>
            These FAQs contain certain forward-looking statements that are
            subject to various risks and uncertainties. Forward-looking
            statements are generally identifiable by the use of forward-looking
            terminology such as “may,” “will,” “should,” “potential,” “intend,”
            “expect,” “outlook,” “seek,” “anticipate,” “estimate,”
            “approximately,” “believe,” “could,” “project,” “predict,” or other
            similar words or expressions, but the absence of these words does
            not mean that a statement is not forward-looking. Forward-looking
            statements are based on certain assumptions, discuss future
            expectations, describe future plans and strategies, or state other
            forward-looking information.
          </p>
        </div>
      </Container>
      <Container>
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
                <button className="before-footer-btn">
                  Start Investing Togather
                </button>
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
      <FarmerInvester />
    </div>
  );
};

export default Faq;
