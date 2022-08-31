import React from "react";
import "../assets/css/Contact.css";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaKey } from "react-icons/fa";
import { images } from "../API/images";
const Contactus = () => {
  return (
    <div>
      <h2 className="contact-us">Contact Investing together</h2>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="contact-information">
              <h4 className="heading4">Contact Information</h4>
              <div className="info">
                <p>
                  <span>
                    <FaEnvelope />
                  </span>
                  <span className="acetrdor">info@acretrader.com</span>
                </p>
                <p>
                  <span>
                    <FaPhone />
                  </span>
                  <span className="acetrdor">(888) 524-6570</span>
                </p>
                <p>
                  <span>
                    <FaKey />
                  </span>
                  <span className="acetrdor">
                    {" "}
                    (518) 320-8908 <br></br>56 Elizabeth St<br></br> Port Henry,
                    New York(NY), 12974
                  </span>
                </p>
              </div>
              <div className="map">
                <iframe
                  width="100%"
                  height="250"
                  loading="lazy"
                  allowfullscreen={true}
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=56%20Elizabeth%20St%20Port%20Henry,%20New%20York(NY),%2012974+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.maps.ie/distance-area-calculator.html">
                    measure distance on map
                  </a>
                </iframe>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Form>
              <Form.Group className="mb-3" controlId="fname">
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lname">
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Message">
                <Form.Control as="textarea" placeholder="Message" />
              </Form.Group>
              <button className="before-footer-btn">Submit</button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="featured" style={{ marginTop: "100px" }}>
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className="heading4">As Featured On</h3>
              <div className="description">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="images">
                <img src={images.bloomberg} height="18px" />
                <img src={images.forbe} height="18px" />
                <img src={images.techcrunch} height="18px"/>
              </div>
              <br></br>
              <br></br>
              <div className="images">
                <img src={images.fox} height="20px"/>
                <img src={images.fortune} height="20px" style={{marginLeft:"40px"}}/>
                <img src={images.amertide} height="20px" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contactus;
