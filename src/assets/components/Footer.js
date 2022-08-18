import React from 'react'
import { Col, Container, Form, Image, Row, Button } from 'react-bootstrap'
import "../css/footer.css"
import { images } from '../../API/images'

const Footer = () => {
    return (
        <div className='footerDiv'>
            <Container fluid>
                <Row className=''>
                    <Col style={{ display: "grid", justifyContent: "center" }}>
                        <div style={{ marginTop: "20%" }}>
                            <h2 className='footerCol1Heading'>
                                We’d love to have you join us!
                            </h2>
                        </div>
                        <div className='mt-3'>
                            <p className='footerCol1Paragraph'>
                                You didn't become a freelancer to spend hours every week hunched <br /> in front of your computer scrolling through endless job listings.
                            </p>
                        </div>
                        <div style={{ marginTop: "10%" }}>
                            <p className='socialMedia'>
                                SOCIAL MEDIA
                            </p>
                        </div>
                        <div className='mt-3'>
                            <span style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <Image src={images.facebook} />
                                <Image src={images.twitter} />
                                <Image src={images.insta} />
                                <Image src={images.youtube} />
                            </span>
                        </div>
                        <div style={{ marginTop: "55%" }}>
                            <p className='copyright'>
                                Copyright © 2021 pixelettetech.co.uk
                            </p>
                        </div>
                    </Col>
                    <Col >
                        <div style={{ marginLeft: "20%" }}>

                            <div style={{ marginTop: "10%" }}>
                                <h2 className='footerCol2Heading'>
                                    Contact us
                                </h2>
                            </div>
                            <Form style={{ width: "50%" }}>
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

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <div style={{ marginTop: "55%" }}>
                            <p className='copyright'>
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