import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "../assets/css/Marketplacedetail.css";
import { images } from "../API/images";
import "../assets/css/WhitePaper.css"
import FarmerInvester from "../assets/components/FarmerInvester";
const MarketplaceDetail = () => {
  return (
    <>
      <Container>
        <section className="hero">
          <div className="heading-marketplace">
            {" "}
            <h1>Lorem Ipsum is simply dummy</h1>
          </div>
        </section>
        <div className="icon">
          <img src={images.location} alt="location" />
          <div className="bar">
            <img src={images.bar} />{" "}
          </div>
          <div className="date">18-6-2022 </div>
        </div>
        <Row style={{ marginTop: "5%" }}>
          <Col lg={6}>
            <div className="image-grass">
              <img src={images.grass} height="100%" width="100%" />
            </div>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>ROW CROP</Card.Title>
                <Card.Text>
                  <span>
                    <img src={images.corn} />
                    <span className="text">Corn</span>
                  </span>
                  <span>
                    <img src={images.cotton} />
                    <span className="text">Cotton</span>
                  </span>
                  <span>
                    <img src={images.peanut} />
                    <span className="text">Peanuts</span>
                  </span>
                </Card.Text>
              </Card.Body>

              <ListGroup className="list-group-flush">
                <ListGroup.Item className="main">
                  <span className="text">Farm Price</span>
                  <span className="price">$27644.78</span>
                </ListGroup.Item>
                <ListGroup.Item className="main">
                  <span className="text">Total Acres</span>
                  <span className="price">$27644.78</span>
                </ListGroup.Item>
                <ListGroup.Item className="main">
                  <span className="text">Price/AC</span>
                  <span className="price">$27644.78</span>
                </ListGroup.Item>
                <ListGroup.Item className="main">
                  <span className="text">Est. ownership Duration</span>
                  <span className="price">$27644.78</span>
                </ListGroup.Item>
                <ListGroup.Item className="main">
                  <span className="text">Gross Cash Yield</span>
                  <span className="price">$27644.78</span>
                </ListGroup.Item>
                <ListGroup.Item className="main">
                  <span className="text">Net Cash Yield</span>
                  <span className="price">$27644.78</span>
                </ListGroup.Item>
              </ListGroup>
              <div className="current-price">
              <span>Current Price</span>
              <p>16.99</p>
              </div>
              <Card.Body>
                <Card.Link href="#"><button className="invest">Invest Now</button></Card.Link>
                <Card.Link href="#"><button className="investor">Investor relation</button></Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
            <Col lg={6} style={{marginTop:"5%"}}>
                <div className="tab">
                <button className="description">Description</button>
                <span className="description">Images</span>
                <span className="description">Finances </span>
                <span className="description">Maps</span>
                <span className="description">Legal Documents </span>
                <span className="description">Ranking</span>
                </div>
                <div className="paragraph">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               <div className="Investment">
                <h4>Investment Highlights</h4>
                <ul>
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                </ul>
               </div>
               <div className="detail">
               <h4>Additional Details</h4>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
               </div>
            </Col>
            <Col lg={6}></Col>
            </Row>
            <Row>
                <Col lg={6}>
                <div className="detail">
               <h4>Risk Factors and Disclosures</h4>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
               </div>
                </Col>
                <Col lg={6}>
                
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                backgroundColor: "#7DD9CA",
                padding: "24px 22px 39px 21px"
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
               
            </Row>

      </Container>
      <FarmerInvester/>
    </>
  );
};

export default MarketplaceDetail;
