import React from 'react'
import "../css/InvestTogather.css"
import {Container, Row, Col, Image} from "react-bootstrap"
import {images} from "../../API/images"

const InvestTogather = () => {
  return (
    <div>
        <Container className='marg-top-50'>
            <Row>
                <Col md={4}>
                    <Image src={images.invest1} width="100%"/>
                    <div className='invest-black-bg'>
                        <p className='invest-head-left'>The title of the blog will go here, either one or two lines </p>
                        <div className='invest-flex-row-just-cent'>
                            <div className='invest-flex-row'>
                                <Image src={images.investp}/>
                                <p className='user-invest'>JOhn Doe</p>
                            </div>
                            <div>
                                <p className='user-invest'>Dec 09, 2022</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Image className='height-set marg-mbl' src={images.invest2} width="100%"/>
                    <div className='invest-black-bg'>
                        <p className='invest-head-left'>The title of the blog will go here, either one or two lines </p>
                        <div className='invest-flex-row-just-cent'>
                            <div className='invest-flex-row'>
                                <Image src={images.investp}/>
                                <p className='user-invest'>JOhn Doe</p>
                            </div>
                            <div>
                                <p className='user-invest'>Dec 09, 2022</p>
                            </div>
                        </div>
                    </div>
                    <Image className='height-set mt-4' src={images.invest3} width="100%"/>
                    <div className='invest-black-bg'>
                        <p className='invest-head-left'>The title of the blog will go here, either one or two lines </p>
                        <div className='invest-flex-row-just-cent'>
                            <div className='invest-flex-row'>
                                <Image src={images.investp}/>
                                <p className='user-invest'>JOhn Doe</p>
                            </div>
                            <div>
                                <p className='user-invest'>Dec 09, 2022</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="marg-col-mb-set">
                    <Image className='height-set' src={images.invest4} width="100%"/>
                    <div className='invest-black-bg'>
                        <p className='invest-head-left'>The title of the blog will go here, either one or two lines </p>
                        <div className='invest-flex-row-just-cent'>
                            <div className='invest-flex-row'>
                                <Image src={images.investp}/>
                                <p className='user-invest'>JOhn Doe</p>
                            </div>
                            <div>
                                <p className='user-invest'>Dec 09, 2022</p>
                            </div>
                        </div>
                    </div>
                    <Image className='height-set mt-4 ' src={images.invest5} width="100%"/>
                    <div className='invest-black-bg'>
                        <p className='invest-head-left'>The title of the blog will go here, either one or two lines </p>
                        <div className='invest-flex-row-just-cent'>
                            <div className='invest-flex-row'>
                                <Image src={images.investp}/>
                                <p className='user-invest'>JOhn Doe</p>
                            </div>
                            <div>
                                <p className='user-invest'>Dec 09, 2022</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="marg-col-mb-set">
                <Col md={5}></Col>
                <Col md={2}>
                    <button className='invest-why-btn'>Load More</button>
                </Col>
                <Col md={5}></Col>
            </Row>
        </Container>
    </div>
  )
}

export default InvestTogather