import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import { images } from "../../API/images"
const Freeguide = () => {
  return (
    <div>  <section className="bg-color-faroz">
    <Container>
      <Row>
        <Col md={6}>
        <h2 className="left-black-head-48">Get a free guide on investing <br></br>with investing together</h2>
        <p className="desc-froz-bg padding-right-130">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
        <button className="download-guide-but">Download Guide</button>
        </Col>
        <Col md={2}></Col>
        <Col md={4}>
          <div className="black-bg">
            <Image src={images.logobbg} width="18%"/>
            <p className="feroze-left-head">A guide to <br></br>investing together</p>
            <div className="feroze-divider"></div>
            <p className="by-owner-name">by Alejandro</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section></div>
  )
}

export default Freeguide