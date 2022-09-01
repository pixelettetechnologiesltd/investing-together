import React from 'react'
import { Container, Card, Row, Col, Image } from 'react-bootstrap'
import "../assets/css/marketPlace.css"
import { Link } from "react-router-dom"
import { images } from '../API/images';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Whitepaper from "../assets/components/Whitepaper"
import InvestTogather from "../assets/components/InvestTogather"
export const MarketPlace = () => {
    const slides = [
        {
            img: images.slide1,
            name: "Project Name",
            plan: "Plan 3 years",
            rate: "80% Rate of return",
            investment: "Min.Investment",
            price: "$20,2500",
            location: images.locationIcon
        },
        {
            img: images.slide2,
            name: "Project Name",
            plan: "Plan 3 years",
            rate: "80% Rate of return",
            investment: "Min.Investment",
            price: "$20,2500",
            location: images.locationIcon
        },
        {
            img: images.slide3,
            name: "Project Name",
            plan: "Plan 3 years",
            rate: "80% Rate of return",
            investment: "Min.Investment",
            price: "$20,2500",
            location: images.locationIcon
        },
        {
            img: images.slide1,
            name: "Project Name",
            plan: "Plan 3 years",
            rate: "80% Rate of return",
            investment: "Min.Investment",
            price: "$20,2500",
            location: images.locationIcon
        },
        {
            img: images.slide2,
            name: "Project Name",
            plan: "Plan 3 years",
            rate: "80% Rate of return",
            investment: "Min.Investment",
            price: "$20,2500",
            location: images.locationIcon
        },
        {
            img: images.slide3,
            name: "Project Name",
            plan: "Plan 3 years",
            rate: "80% Rate of return",
            investment: "Min.Investment",
            price: "$20,2500",
            location: images.locationIcon
        },
        {
            img: images.slide1,
            name: "Project Name",
            plan: "Plan 3 years",
            rate: "80% Rate of return",
            investment: "Min.Investment",
            price: "$20,2500",
            location: images.locationIcon
        },
        {
            img: images.slide2,
            name: "Project Name",
            plan: "Plan 3 years",
            rate: "80% Rate of return",
            investment: "Min.Investment",
            price: "$20,2500",
            location: images.locationIcon
        },
        {
            img: images.slide3,
            name: "Project Name",
            plan: "Plan 3 years",
            rate: "80% Rate of return",
            investment: "Min.Investment",
            price: "$20,2500",
            location: images.locationIcon
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='main'>
            <div className='header'>
                <Container>
                    <div className='div1InsideContainer'>
                        <h2 className='MPH1'>
                            Investing Together <br /> Impact Beyond Returns
                        </h2>
                        <div className='mt-3'>
                            <p className='MP-paragraph'>
                                Both the portfolios of investors and the world of tomorrow will<br /> benefit from this investment.
                            </p>
                        </div>
                        <div className="mt-5" style={{ textAlign: "center" }}>
                            <Link to="/" className="learn-more">
                                Start Investment
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <Container>
                    <div className='mt-5'>
                        <h3 className='MPH2'>
                            Explore collections
                        </h3>
                    </div>
                    <Row>
                        {
                            slides.map(slide =>
                                <Col md={4} className="mt-4">
                                    <Card className='sliderCard' style={{ border: "none" }}>
                                        <Card.Img variant="top" src={slide.img} />
                                        <Card.Body bg="dark" style={{ background: "#303030" }}>
                                            <Card.Title className='slideTitle' style={{ color: "#4BBDAB" }}>{slide.name}
                                                <span style={{ float: "right" }}><Image src={slide.location} /></span>
                                            </Card.Title>
                                            <Card.Text>
                                                <div className='mt-3'>
                                                    <p className='cardBodyText' style={{ color: "#4BBDAB", }}>
                                                        {slide.plan} <span style={{ padding: "0px 20px" }}> | </span> {slide.rate}
                                                    </p>
                                                </div>
                                            </Card.Text>
                                            <div style={{ border: "#4BBDAB 1px solid", backgroundColor: "#4BBDABFF" }}>
                                            </div>
                                            <div className='mt-3'>
                                                <p className='cardBodyText' style={{ color: "#4BBDAB" }}>
                                                    {slide.investment}
                                                    <span className='cardPrice' style={{ color: "#4BBDAB", float: "right" }}>
                                                        {slide.price}
                                                    </span>
                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                    <div className="mt-5" style={{ textAlign: "center" }}>
                        <Link to="/" className="learn-more">
                            Load More Collection
                        </Link>
                    </div>
                </Container>
            </div>
            <div className='header' style={{ marginTop: "5%" }}>
                <Container>
                    <div style={{ marginTop: "7%" }}>
                        <h3 className='MPH3'>
                            Which is what our popular<br /> customers are saying
                        </h3>
                        <div>
                            <p className=''>
                                But I must explain to you how all this mistaken idea of<br /> denouncing pleasure and praising pain was born.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <Image src={images.sliderCard1} style={{ width: "100%" }} />
                            </div>
                            <div>
                                <Image src={images.sliderCard2} style={{ width: "100%" }} />
                            </div>
                            <div>
                                <Image src={images.sliderCard3} style={{ width: "100%" }} />
                            </div>
                            <div>
                                <Image src={images.sliderCard3} style={{ width: "100%" }} />
                            </div>
                            <div>
                                <Image src={images.sliderCard3} style={{ width: "100%" }} />
                            </div>
                            <div>
                                <Image src={images.sliderCard3} style={{ width: "100%" }} />
                            </div>
                        </Slider>
                    </div>
                </Container >
            </div>
            <Container>
                <Row className="mt-5">
                    <h3 className="section3Heading">How to Investing together</h3>
                    <div className="section6Di">
                        <p className="section3Paragraph">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting <br />
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever
                            <br />
                            since the 1500s, when an unknown printer.
                        </p>
                    </div>
                </Row>
                <InvestTogather />
                <Whitepaper />
            </Container>
        </div >
    )
}
