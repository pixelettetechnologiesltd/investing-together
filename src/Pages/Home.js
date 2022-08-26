import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { images } from "../API/images"
import "../assets/css/home.css";
import { SliderComponent } from "../assets/components/SliderComponent";
import FarmerInvester from "../assets/components/FarmerInvester";
const Home = () => {
  return (
    <div className="main">
      <div className="header">
        
        <div className="container mt-5">
          <div className="row" style={{ marginTop: "10%" }}>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <p className="header-para">
                Investing opportunity in land made easy to a rapid grwoth
              </p>
              <p className="header-heading">
                Investments that will make you grow
              </p>
              <Link to="/" className="learn-more">
                learn more
              </Link>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="sliderDiv">
                <p className="sliderParagraph">
                  “Lorem Ipsum is simply dummy text of the printing and <br />
                  typesetting industry. Lorem Ipsum has been the industry's<br />
                  standard dummy text ever since the 1500s, when an unknown<br />
                  printer took a galley of type and scrambled.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div>
        <Container className="section2">
          <Row className="section2Row">
            <Col md={6} className="section2Col">
              <div className="section2Div">
                <h2 className="sec2Heading">
                  Why Investing together?
                </h2>
                <div>
                  <p className="section2Paragraph">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.
                  </p>
                </div>
                <div className="mt-5">
                  <Link to="/" className="learn-more">
                    Start Investing
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6} className=""  >
              <div className="col2Div">
                <div className="imageDiv">
                  <Image className="imgTag" src={images.home} />
                </div>
                <div>
                  <ul style={{ listStyleType: "none" }}>
                    <li className="listTag mt-5">
                      <Image src={images.check} /> <span className="spanText"> Earn passive money, buy tree or hectare</span>
                    </li>
                    <li className="mt-3">
                      <Image src={images.check} /> <span className="spanText"> Low risk investment, due to the existence of the plantation. </span>
                    </li>
                    <li className="mt-3">
                      <Image src={images.check} /> <span className="spanText"> Portfolio diversification</span>
                    </li>
                    <li className="mt-3">
                      <Image src={images.check} /> <span className="spanText"> Protect yourself against inflation</span>
                    </li>
                    <li className="mt-3">
                      <Image src={images.check} /> <span className="spanText"> Comparison with other types of investments </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="section3" style={{ marginTop: "5%" }}>
            <div className="">
              <h3 className="section3Heading">
                How it works?
              </h3>
            </div>
            <div className="">
              <p className="section3Paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                industry. Lorem Ipsum has been the industry's standard dummy text ever<br />
                since the 1500s, when an unknown printer.
              </p>
            </div>
            <div className="section3ImgDiv" style={{ marginTop: "5%" }}>
              <Image src={images.numbers} width="100%" />
            </div>
          </Row>
          <Row className="mt-5">
            <Col md={6}>
              <div className="" style={{ display: "flex", justifyContent: "center" }}>
                <h3 className="section4Heading">
                  Select NFT Planting and Creation
                </h3>
              </div>
              <div className="" style={{ display: "flex", justifyContent: "center" }}>
                <p className="section3Paragraph" style={{ textAlign: "left", paddingLeft: "10%" }}>
                  There are many variations of passages of Lorem Ipsum<br />
                  available, but the majority have suffered alteration in some<br />
                  form, by injected humour, or randomised words which don't<br />
                  look even slightly believable. If you are going to use a<br />
                  passage of Lorem Ipsum, you need to be sure there isn't<br />
                  anything embarrassing hidden in the middle of text.
                </p>
              </div>
            </Col>
            <Col md={6} className="section3ImgDiv" style={{ justifyContent: "flex-start" }}>
              <Image src={images.farm} />
            </Col>
          </Row>
        </Container>
        <div>
          <Row className="" style={{ marginTop: "5%" }}>
            <Col md={12} lg={12}>
              <Image className="imageTagInvest" src={images.investNow} />
            </Col>
            {/* <Col md={6}></Col> */}
          </Row>
        </div>
        <div className="section5" style={{ display: "flex", justifyContent: "center" }}>
          <Row>
            <Col sm={12} md={6} className="section5Col1 mt-5">
              <div>
                <h3 className="section5Heading">
                  There are many variations<br /> of passages of Lorem <br /> Ipsum available, but the<br /> majority have suffered
                </h3>
                <div className="mt-5">
                  <Image className="" src={images.logo} />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} className="section5Col2">
              <div style={{ marginTop: "10%" }}>
                <p className="section5Paragraph">
                  There are many variations of passages of Lorem Ipsum<br />
                  available, but the majority have suffered alteration in some<br />
                  form, by injected humour.
                </p>
              </div>
              <div className="mt-5" style={{ textAlign: "center" }}>
                <Link to="/" className="learn-more" >
                  Explore Resources
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section6">
          <Row>
            <h3 className="section3Heading">
              Marketplace
            </h3>
            <div className="section6Di">
              <p className="section3Paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                industry. Lorem Ipsum has been the industry's standard dummy text ever<br />
                since the 1500s, when an unknown printer.
              </p>
            </div>
          </Row>
          <div className="mt-5">
            <div className=" slideDiv">
              <SliderComponent className="yolo" />
              <div className="mt-5" style={{ textAlign: "center" }}>
                <Link to="/" className="learn-more">
                  Start Investment
                </Link>
              </div>
            </div>
          </div>
          <div className="section3">
            <Row className="">
              <h3 className="section3Heading">
                How to Investing together
              </h3>
              <div className="section6Di">
                <p className="section3Paragraph">
                  Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                  industry. Lorem Ipsum has been the industry's standard dummy text ever<br />
                  since the 1500s, when an unknown printer.
                </p>
              </div>
            </Row>
            <Container>
              <Row>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  <Image src={images.invest1} />
                </Col>
                <Col style={{ display: "grid", justifyContent: "center" }}>
                  <Image src={images.invest2} className="img2" style={{ marginBottom: "30px" }} />
                  <Image src={images.invest4} />
                </Col>
                <Col style={{ display: "grid", justifyContent: "left" }}>
                  <Image src={images.invest3} className="img4" style={{ marginBottom: "30px" }} />
                  <Image src={images.invest5} />
                </Col>
              </Row>
              <div className="mt-5" style={{ textAlign: "center" }}>
                <Link to="/" className="learn-more">
                  Learn More
                </Link>
              </div>
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
                    <Image src={images.whitePaper} />
                  </Col>
                </Row>
              </div>
              <Row>
                <Col md={6} className="mt-5">
                  <div style={{ display: "grid", justifyContent: "center", backgroundColor: "#7DD9CA", padding: "100px" }}>
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
                        <Link to="/" className="learn-more" style={{ padding: "14px 30px" }}>
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
                </Col>
                <Col md={6} className="" style={{ display: "grid", justifyContent: "center" }}>
                  <div style={{ marginTop: "70px" }}>
                    <Image src={images.videoImg} />
                    <span className="spanTag">
                      Watch Video
                    </span>
                  </div>
                  <div>
                    <p className="lastSectionParagraph2">
                      There are many variations of passages of Lorem Ipsum <br />
                      available, but the majority have suffered alteration in some<br />
                      form, by injected humour, or randomised words which don't<br />
                      look even slightly believable. If you are going to use a
                      <br /> passage of Lorem Ipsum, you need to be sure.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
           <FarmerInvester/>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
