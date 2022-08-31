import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import "../assets/css/Settings.css"
import { BiWallet} from 'react-icons/bi'
import { FiSend} from 'react-icons/fi'

const Settings = () => {
  return (
    <div>
         <Container className='bott-bg-img'>
        <Row className="margin-top-100-setting">
          <Col md={3}></Col>
          <Col md={6}>
            <p className="black-head-cent-setting">Please provide additional information to verify your identity.</p>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}></Col>
          <Col md={4}></Col>
          <Col md={4}>
            <button className="wallet-button-setting">
              Fill out ID Verification Info
            </button>
          </Col>
        </Row>

        <Row className='marg-setting-50'>
            <Col md={6}>
                <div className='green-bg-card-setting'>
                    <p className='bal-text-setting'>Email Account Created</p>
                    <p className='email-setting'>alejandro1162002@gmail.com</p>
                    <p className='via-google'>8-22-2022 via Google</p>
                </div>
            </Col>
            <Col md={6}>
                <div className='grey-bg-card-setting'>
                    <p className='bal-text-setting'>Reset Password</p>
                    <p className='email-setting'>alejandro1162002@gmail.com</p>
                    <button className='trans-bg-btn-setting'><span className='message-icon'><FiSend/></span>Send Recovery Email</button>
                </div>
            </Col>
        </Row>

        <Row>
            <Col md={4}></Col>
            <Col md={4}>
                <button className="button-setting-page"><span className="setting-page-icon"><BiWallet/></span>Setup your wallet</button>
            </Col>
            <Col md={4}></Col>
        </Row>
        </Container>
    </div>
  )
}

export default Settings