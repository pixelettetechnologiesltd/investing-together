import React from 'react'
import { Container, Dropdown, Row, Image, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { images } from '../API/images'
import "../assets/css/profile.css"

export const Notification = () => {
    return (
        <div>
            <Container>
                <Row style={{ marginTop: "5%" }}>
                </Row >
                <Row>
                    <div className='linkDiv mt-5 mb-5' style={{ textAlign: "center" }}>
                        <Link to="/" className='link linkButton'>Portfolio</Link>
                        <Link to="/" className='link '>Accounts</Link>
                        <Link to="/" className='link '>Wallet</Link>
                        <Link to="/" className='link '>Notifications</Link>
                        <Link to="/" className='link '>Setting</Link>
                    </div>
                    <Col md={4}>
                        <div>
                            <ul className='noBullets'>
                                <li className='' style={{ textAlign: "center" }}>
                                    <Link to="/" className='link linkButton' style={{ backgroundColor: "#303030", color: "#7DD9CA" }}>System Notification</Link>
                                </li>
                                <li className='mt-5' style={{ textAlign: "center" }}>
                                    <Link to="/" className='link'>Updates</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div>
                            <p className='notificationParagraph'>
                                Please verify your email address.
                                Check your email for the link we sent you, then click it to confirm your address.
                                Didn't receive an email? Please check your spam or junk folder or click here to resend another verification email.
                            </p>
                            <div>

                                <div className='notificationParagraph' style={{ float: "right", color: "#7DD9CA", marginRight: "4%" }}>
                                    August 14, 2022
                                    <span style={{ color: "#BDBDBD", paddingLeft: "20px" }}>
                                        2:26 pm
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <div className='mt-5 mb-5' style={{ textAlign: "center" }}>
                        <Link to='/' className='walletLink'>
                            <Image src={images.walletIcon} />
                            <span style={{ marginLeft: "2%" }}>
                                Setup your wallet
                            </span>
                        </Link>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
