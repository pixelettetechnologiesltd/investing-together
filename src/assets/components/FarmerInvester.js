import React from 'react'
import { Button, Col, Container, Image, Row } from "react-bootstrap";
const FarmerInvester = () => {
  return (
    <Row style={{ marginTop: "5%" }}>
    <Col md={6} className="farmerBG">
      <div>
        <h3 className="section2Heading" style={{ textAlign: "center", paddingTop: "15%", color: "#FFFFFF" }}>
          Farmer
        </h3>
      </div>
      <div>
        <p className="section5Paragraph" style={{ textAlign: "center" }}>
          See additional information about farmland investment <br />
          performance.
        </p>
      </div>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <Button className="farmerBtn" style={{ textAlign: "center", backgroundColor: "#7DD9CA", border: "none", borderRadius: "36px", padding: "12px 30px", color: "#303030" }}>
          See Returns History
        </Button>
      </div>
    </Col>
    <Col md={6} className="investorBG">
      <div>
        <h3 className="section2Heading" style={{ textAlign: "center", paddingTop: "15%", color: "#FFFFFF" }}>
          Investor
        </h3>
      </div>
      <div>
        <p className="section5Paragraph" style={{ textAlign: "center" }}>
          See additional information about partnering with <br />
          Investing together
        </p>
      </div>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <Button className="farmerBtn" style={{ textAlign: "center", backgroundColor: "#7DD9CA", border: "none", borderRadius: "36px", padding: "12px 30px", color: "#303030" }}>
          See Investor Info
        </Button>
      </div>
    </Col>
  </Row>
  )
}

export default FarmerInvester