import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import "../assets/css/Wallet.css"
import { BiWallet} from 'react-icons/bi'
import { FaPlus} from 'react-icons/fa'
import { FiDownload} from 'react-icons/fi'
import { BsWallet2} from 'react-icons/bs'

const Wallet = () => {
  return (
    <div>
        <Container className='bott-bg-img'>
        <Row className="margin-top-100-wallet">
          <Col md={3}></Col>
          <Col md={6}>
            <p className="black-head-cent-Wallet">Please provide additional information to verify your identity.</p>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}></Col>
          <Col md={4}></Col>
          <Col md={4}>
            <button className="wallet-button-sing">
              Fill out ID Verification Info
            </button>
          </Col>
        </Row>
        <Row className='marg-wallet-50'>
            <Col md={6}>
                <div className='green-bg-card'>
                    <p className='bal-text'>Current Balance</p>
                    <p className='ammount'>$0.00</p>
                    <div className='flex-cent'>
                        <button className='black-bg-btn'><span className='plus-icon'><FaPlus/></span> Load Funds</button>
                        <button className='trans-bg-btn'><span className='withdraw-icon'><FiDownload/></span>Withdraw</button>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <div className='grey-bg-card'>
                    <p className='bal-text'>Bank Accounts</p>
                    <p className='ammount'>$0.00</p>
                    <button className='trans-bg-btn-two'><span className='bank-icon'><BsWallet2/></span>Link your Bank Account</button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={4}></Col>
            <Col md={4}>
                <button className="button-wallet-page"><span className="wallet-page-icon"><BiWallet/></span>Setup your wallet</button>
            </Col>
            <Col md={4}></Col>
        </Row>
        </Container>
    </div>
  )
}

export default Wallet