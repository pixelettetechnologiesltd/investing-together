import React from 'react'
import "../css/BeforeFooter.css";
import {Col} from "react-bootstrap";
const BeforeFooter = () => {
  return (
    <div>
        <section className="make-section-row">
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
                  <button className="before-footer-btn">See Returns History</button>
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
                <button className="before-footer-btn">See Investor Info</button>
                </div>
              </Col>
            </section>
    </div>
  )
}

export default BeforeFooter