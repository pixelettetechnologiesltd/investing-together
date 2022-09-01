import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container } from 'react-bootstrap';
import { images } from '../../API/images';

const slides = [
    {
        img: images.slide1,
        name: "Project Name",
        plan: "Plan 3 years",
        rate: "80% Rate of return",
        investment: "Min.Investment",
        price: "$20,2500",
    },
    {
        img: images.slide2,
        name: "Project Name",
        plan: "Plan 3 years",
        rate: "80% Rate of return",
        investment: "Min.Investment",
        price: "$20,2500",
    },
    {
        img: images.slide3,
        name: "Project Name",
        plan: "Plan 3 years",
        rate: "80% Rate of return",
        investment: "Min.Investment",
        price: "$20,2500",
    },
    {
        img: images.slide1,
        name: "Project Name",
        plan: "Plan 3 years",
        rate: "80% Rate of return",
        investment: "Min.Investment",
        price: "$20,2500",
    },
    {
        img: images.slide2,
        name: "Project Name",
        plan: "Plan 3 years",
        rate: "80% Rate of return",
        investment: "Min.Investment",
        price: "$20,2500",
    },
    {
        img: images.slide3,
        name: "Project Name",
        plan: "Plan 3 years",
        rate: "80% Rate of return",
        investment: "Min.Investment",
        price: "$20,2500",
    },
]

export const SliderComponent = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        // dots: true,
        // className: "center",
        // centerMode: true,
        // infinite: true,
        // centerPadding: "300px",
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // speed: 3000,
        // autoplaySpeed: 3000,
        // // cssEase: "linear",
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
        <div style={{ margin: "0px 2%" }}>
            <Container>
            </Container>

            <Slider {...settings} className="slider">
                {
                    slides.map(slide =>
                        <div>
                            <Card className='sliderCard' style={{ width: "22rem", border: "none", backgroundColor: "#7DD9CA" }}>
                                <Card.Img variant="top" src={slide.img} />
                                <Card.Body bg="dark" style={{ background: "#303030" }}>
                                    <Card.Title className='slideTitle' style={{ color: "#4BBDAB" }}>{slide.name}</Card.Title>
                                    <Card.Text>
                                        <div className='mt-3'>
                                            <p className='cardBodyText' style={{ color: "#4BBDAB", }}>
                                                {slide.plan} <span style={{ padding: "0px 20px" }}> | </span> {slide.rate}
                                            </p>
                                        </div>
                                    </Card.Text>
                                    <div style={{ border: "#4BBDAB 1px solid", backgroundColor: "#4BBDAB" }}>
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
                        </div>
                    )
                }
            </Slider>
        </div>
    )
}
