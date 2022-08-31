import React from 'react'
import { Col, Container, Form, Image, Row, Button } from 'react-bootstrap'
import "../css/footer.css"
import { images } from '../../API/images'

const Footer = () => {
    return (
        <div className='footerDiv'>
            <Container>
                <Row>
                   <Col md={4} sm={12}  className='marg-top-120'>
                            <h2 className='footerCol1Heading'>
                                We’d love to have you join us!
                            </h2>
                       
                            <p className='footerCol1Paragraph'>
                                You didn't become a freelancer to spend hours every week hunched <br /> in front of your computer scrolling through endless job listings.
                            </p>
                       
                            <p className='socialMedia'>
                                SOCIAL MEDIA
                            </p>
                   
                        <div className='set-social-icons'>
                            <span style={{ display: "flex", justifyContent: "space-around" }}>
                                <Image src={images.facebook} />
                                <Image src={images.twitter} />
                                <Image src={images.insta} />
                                <Image src={images.youtube} />
                            </span>
                        </div>
                       
                    </Col>
                    <Col md={4}></Col>
                    <Col sm={12} md={4} style={{ display: "grid", justifyContent: "start" }}>
                        <div >
                            <div style={{ marginTop: "35%" }}>
                                <h2 className='footerCol2Heading'>
                                    Contact us
                                </h2>
                            </div>
                            <Form className='footerForm'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='footerCol1Paragraph'>Name</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Sam Davis" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='footerCol1Paragraph'>Email</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="samdavis@gmail.com" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='footerCol1Paragraph'>Your Message</Form.Label>
                                    <Form.Control as="textarea" name='textarea' rows={3} />
                                </Form.Group>

                                <Button className='submitBtn' type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        
                       
                    </Col>
                </Row>
                <Row className='marg-top-foot-100 pb-3'>
                    <Col md={6}>
                    <div>
                            <p className='copyright'>
                                Copyright © 2021 pixelettetech.co.uk
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                    <div>
                            <p className='copyright-left'>
                                Created by Pixelette Technologies
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer