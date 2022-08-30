import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import {images} from "../API/images"
import "../assets/css/LearnDetail.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import InvestTogather from '../assets/components/InvestTogather'
import BeforeFooter from '../assets/components/BeforeFooter'

const LearnDetail = () => {
  return (
    <div>
        <Container className='marg-top-100'>
            <Row>
                <Col md={8}>
                    <div className='learn-make-row-flex'>
                        <Image src={images.investp} width="18%"/>
                        <p className='learn-user'>John Doe</p>
                        <p className='learn-date'>Dec 09, 2022</p>
                    </div>
                    <p className='title-Learn mt-3'>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <p className='grey-desc-left'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <Image className='mt-3' src={images.learndetail}/>
                    <p className='detail-head marg-top-100'>Where does it come from?</p>
                    <p className='desc-detail'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <p className='detail-head mt-5'>Where can I get some?</p>
                    <p className='desc-detail'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <p className='detail-head mt-5'>Investment Highlights</p>
                    <ul>
                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                        <li>Randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</li>
                        <li>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</li>
                        <li>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</li>
                        <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li>
                        <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li>
                        <li>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</li>
                    </ul>
                    <p className='detail-head mt-5'>Can you speak to Corey Dickman and Dickman Farms’s experience or eagerness to work with AcreTrader?</p>
                    <p className='desc-detail'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <div className='learn-make-row-flex-detail'>
                        <Image src={images.investp} width="30%"/>
                        <p className='learn-user'>John Doe</p>
                    </div>
                    <p className='desc-detail mt-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                </Col>
                <Col md={4}>
                    <div className='subscribe-sec'>
                        <p className='subscribe-head'>Subscribe our <br></br>newsletter</p>
                        <button className='button-subs'>Subscribe</button>
                        <p className='share-text'>Share</p>
                        <div className='make-center'>
                            <a href='www.facebook.com' style={{color:"black"}}><FaFacebookF className='icons-set'/></a>
                            <a href='www.twitter.com' style={{color:"black"}}><FaTwitter className='icons-set'/></a>
                            <a href='www.instagram.com' style={{color:"black"}}><FaInstagram className='icons-set'/></a>
                            <a href='www.youtube.com' style={{color:"black"}}><FaYoutube className='icons-set'/></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <InvestTogather/>
        <BeforeFooter/>
    </div>
  )
}

export default LearnDetail