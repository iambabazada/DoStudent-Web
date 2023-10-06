import React from 'react'
import Card from '../../../components/Card/Card'
import Blog from '../../../components/Blog/Blog'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './Hero.module.css'
import LeftArrow from '../../../assets/icons/left-arrow.svg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={LeftArrow}
            onClick={onClick}
            alt=""
            className={className}
            style={{ ...style, display: "block", color: "green", rotate: "180deg", width: "60px", height: "60px", borderRadius: "100%", }}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={LeftArrow}
            onClick={onClick}
            alt=""
            className={className}
            style={{ ...style, display: "block", color: "green", rotate: "360deg", width: "60px", height: "60px", borderRadius: "100%", }}
        />
    );
}

const Hero = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className={styles.hero}>
            <Slider {...settings}>
                <Card />
                <Blog />
                <Card />
                <Blog />
                <Card />
                <Blog />
            </Slider>
        </div>
    )
}



export default Hero