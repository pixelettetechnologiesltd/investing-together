import React, { useState } from 'react'
import { Container, Dropdown, Row, Image, Col, Form } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import { images } from '../API/images'
import "../assets/css/profile.css"
import AccountInfo from "./AccountInfo"
import { Notification } from './Notification';
import Wallet from "./Wallet"
import Setting from "./Settings"

export const Profile = () => {
    const style = {
        fontFamily: "Manrope",
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "20px",
        letterSpacing: "0em",
        textAlign: "left",
        color: "#303030"
    }
    const DateStyle = {
        fontFamily: "Manrope",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "10px",
        letterSpacing: "0em",
        textAlign: "left",
        color: "#A5A5A5"
    }
    const [value, setValue] = useState("Portfolio")
    switch (value) {
        case "Portfolio":
            return (
                <div>
                    <Container className='bott-bg-img'>
                        <Row style={{ marginTop: "5%" }}>
                            <div style={{ textAlign: "center" }}>
                                <Dropdown as={ButtonGroup}>
                                    <div className='mainDivImg' style={{ backgroundColor: "#F2F2F2", display: "flex", justifyContent: "space-around" }}>
                                        <Image src={images.investp} style={{ height: "50px" }} />
                                        <div>
                                            <p className='' style={style}>JOhn Doe</p>
                                            <p className='mb-2' style={DateStyle}>Dec 09, 2022</p>
                                        </div>
                                    </div>
                                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#F2F2F2", color: "#000000", border: "none" }} />
                                </Dropdown>
                            </div>
                        </Row >
                        <Row>
                            <div className='linkDiv mt-5 mb-5' style={{ textAlign: "center" }}>
                                <button className='link' onClick={() => setValue("Portfolio")}>Portfolio</button>
                                <button className='link' onClick={() => setValue("Accounts")}>Accounts</button>
                                <button className='link' onClick={() => setValue("Wallet")}>Wallet</button>
                                <button className='link' onClick={() => setValue("Notifications")}>Notifications</button>
                                <button className='link' onClick={() => setValue("Setting")}>Setting</button>
                            </div>
                            {/* <Col md={2}></Col> */}
                            <Col md={4} sm={4} style={{ display: "flex", justifyContent: "center", marginRight: "-4%" }}>
                                <div>
                                    <ul className='noBullets'>
                                        <li className='listStyle'>
                                            <Link to="/" className='link linkButton' style={{ backgroundColor: "#303030", color: "#7DD9CA" }}>Overview</Link>
                                        </li>
                                        <li className='listStyle'>
                                            <Link to="/" className='link'>Funding</Link>
                                        </li>
                                        <li className='listStyle'>
                                            <Link to="/" className='link'>Active</Link>
                                        </li>
                                        <li className='listStyle'>
                                            <Link to="/" className='link'>Exited</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={8} sm={8}>
                                <div className="map">
                                    <iframe
                                        width="100%"
                                        height="400px"
                                        loading="lazy"
                                        allowfullscreen={true}
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=56%20Elizabeth%20St%20Port%20Henry,%20New%20York(NY),%2012974+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    >
                                        <a href="https://www.maps.ie/distance-area-calculator.html">
                                            measure distance on map
                                        </a>
                                    </iframe>
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
                    </Container >
                </div >
            );
        case "Accounts":
            return (
                <div>
                    <div className='mt-5 selectDiv'>
                        <Form.Select aria-label="Default select example" className='dropdownDiv'>
                            <option>Individual Investment Account</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className='linkDiv mt-5' style={{ textAlign: "center" }}>
                        <button className='link' onClick={() => setValue("Portfolio")}>Portfolio</button>
                        <button className='link' onClick={() => setValue("Accounts")}>Accounts</button>
                        <button className='link' onClick={() => setValue("Wallet")}>Wallet</button>
                        <button className='link' onClick={() => setValue("Notifications")}>Notifications</button>
                        <button className='link' onClick={() => setValue("Setting")}>Setting</button>
                    </div>
                    <AccountInfo />
                </div>
            );
        case "Wallet":
            return (
                <div>
                    <div className='linkDiv mt-5 mb-5' style={{ textAlign: "center" }}>
                        <button className='link' onClick={() => setValue("Portfolio")}>Portfolio</button>
                        <button className='link' onClick={() => setValue("Accounts")}>Accounts</button>
                        <button className='link' onClick={() => setValue("Wallet")}>Wallet</button>
                        <button className='link' onClick={() => setValue("Notifications")}>Notifications</button>
                        <button className='link' onClick={() => setValue("Setting")}>Setting</button>
                    </div>
                    < Wallet />
                </div>
            );
        case "Notifications":
            return (
                <div>
                    <div className='linkDiv mt-5 mb-5' style={{ textAlign: "center" }}>
                        <button className='link' onClick={() => setValue("Portfolio")}>Portfolio</button>
                        <button className='link' onClick={() => setValue("Accounts")}>Accounts</button>
                        <button className='link' onClick={() => setValue("Wallet")}>Wallet</button>
                        <button className='link' onClick={() => setValue("Notifications")}>Notifications</button>
                        <button className='link' onClick={() => setValue("Setting")}>Setting</button>
                    </div>
                    < Notification />
                </div>
            );
        case "Setting":
            return (
                <div>
                    <div className='linkDiv mt-5 mb-5' style={{ textAlign: "center" }}>
                        <button className='link' onClick={() => setValue("Portfolio")}>Portfolio</button>
                        <button className='link' onClick={() => setValue("Accounts")}>Accounts</button>
                        <button className='link' onClick={() => setValue("Wallet")}>Wallet</button>
                        <button className='link' onClick={() => setValue("Notifications")}>Notifications</button>
                        <button className='link' onClick={() => setValue("Setting")}>Setting</button>
                    </div>
                    <Setting />
                </div>
            );
        default:
            console.log("default behaviour")
            break;
    }
    // return (
    //     <div>
    //         <Container className='bott-bg-img'>
    //             <Row style={{ marginTop: "5%" }}>
    //                 <div style={{ textAlign: "center" }}>
    //                     <Dropdown as={ButtonGroup}>
    //                         <div className='mainDivImg' style={{ backgroundColor: "#F2F2F2", display: "flex", justifyContent: "space-around" }}>
    //                             <Image src={images.investp} style={{ height: "50px" }} />
    //                             <div>
    //                                 <p className='' style={style}>JOhn Doe</p>
    //                                 <p className='mb-2' style={DateStyle}>Dec 09, 2022</p>
    //                             </div>
    //                         </div>
    //                         <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#F2F2F2", color: "#000000", border: "none" }} />
    //                     </Dropdown>
    //                 </div>
    //             </Row >
    //             <Row>
    //                 <div className='linkDiv mt-5 mb-5' style={{ textAlign: "center" }}>
    //                     <Link to="/" className='link linkButton'>Portfolio</Link>
    //                     <Link to="/" className='link '>Accounts</Link>
    //                     <Link to="/" className='link '>Wallet</Link>
    //                     <Link to="/" className='link '>Notifications</Link>
    //                     <Link to="/" className='link '>Setting</Link>
    //                 </div>
    //                 {/* <Col md={2}></Col> */}
    //                 <Col md={4} sm={4} style={{ display: "flex", justifyContent: "center", marginRight:"-4%" }}>
    //                     <div>
    //                         <ul className='noBullets'>
    //                             <li className='listStyle'>
    //                                 <Link to="/" className='link linkButton' style={{ backgroundColor: "#303030", color: "#7DD9CA" }}>Overview</Link>
    //                             </li>
    //                             <li className='listStyle'>
    //                                 <Link to="/" className='link'>Funding</Link>
    //                             </li>
    //                             <li className='listStyle'>
    //                                 <Link to="/" className='link'>Active</Link>
    //                             </li>
    //                             <li className='listStyle'>
    //                                 <Link to="/" className='link'>Exited</Link>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </Col>
    //                 <Col md={8} sm={8}>
    //                     <div className="map">
    //                         <iframe
    //                             width="100%"
    //                             height="400px"
    //                             loading="lazy"
    //                             allowfullscreen={true}
    //                             src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=56%20Elizabeth%20St%20Port%20Henry,%20New%20York(NY),%2012974+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    //                         >
    //                             <a href="https://www.maps.ie/distance-area-calculator.html">
    //                                 measure distance on map
    //                             </a>
    //                         </iframe>
    //                     </div>
    //                 </Col>
    //                 <div className='mt-5 mb-5' style={{ textAlign: "center" }}>
    //                     <Link to='/' className='walletLink'>
    //                         <Image src={images.walletIcon} />
    //                         <span style={{ marginLeft: "2%" }}>
    //                             Setup your wallet
    //                         </span>
    //                     </Link>
    //                 </div>
    //             </Row>
    //         </Container >
    //     </div >
    // )
}
