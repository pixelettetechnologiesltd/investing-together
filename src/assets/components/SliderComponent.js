import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card } from 'react-bootstrap';
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

    const sliderRef = useRef()
    const previous = () => {
        sliderRef.current.slickPrev()
    }
    const next = () => {
        console.log("tyoo", sliderRef.current)
        sliderRef.current.slickNext()
    }
    var settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "300px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
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
        <div>
            <Slider {...settings} className="slider">
                {
                    slides.map(slide =>
                        <div>
                            <Card className='sliderCard' style={{ width: '25rem' }}>
                                <Card.Img variant="top" src={slide.img} />
                                <Card.Body bg="dark" style={{ background: "#303030" }}>
                                    <Card.Title className='slideTitle' style={{ color: "#4BBDAB" }}>{slide.name}</Card.Title>
                                    <Card.Text>
                                        <div className='mt-3'>
                                            <p className='cardBodyText' style={{ color: "#4BBDAB", }}>
                                                {slide.plan} <span style={{ padding: "0px 20px" }}> | </span> {slide.rate}
                                            </p>
                                        </div>
                                        <div style={{ border: "#4BBDAB 1px solid" }}>
                                        </div>
                                        <div className='mt-3'>
                                            <p className='cardBodyText' style={{ color: "#4BBDAB" }}>
                                                {slide.investment}
                                                <span className='cardPrice' style={{ color: "#4BBDAB", float: "right" }}>
                                                    {slide.price}
                                                </span>
                                            </p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </Slider>
            {/* <Button onClick={previous}>Pervious</Button>
            <Button onClick={next}>Next</Button> */}
        </div>
    )
}
