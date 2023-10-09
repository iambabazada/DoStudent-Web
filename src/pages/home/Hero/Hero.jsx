import React, { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";
import Blog from "../../../components/Blog/Blog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Hero.module.css";
import LeftArrow from "../../../assets/icons/left-arrow.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={LeftArrow}
      onClick={onClick}
      alt=""
      className={className}
      style={{
        ...style,
        display: "block",
        color: "green",
        rotate: "180deg",
        width: "60px",
        height: "60px",
        borderRadius: "100%",
      }}
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
      style={{
        ...style,
        display: "block",
        color: "green",
        rotate: "360deg",
        width: "60px",
        height: "60px",
        borderRadius: "100%",
      }}
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
    prevArrow: <SamplePrevArrow />,
  };

  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      // console.log(data);
      setUser(data);
    }
    getUser();
  }, []);

  const userData = [
    {
      id: 1,
      title: "title1",
      content: "content",
    },
    {
      id: 2,
      title: "title 2",
      content: "content 2",
    },
    {
      id: 3,
      title: "title 3",
      content: "content 3",
    },
    {
      id: 4,
      title: "title4",
      content: "content",
    },
    {
      id: 5,
      title: "title 5",
      content: "content 2",
    },
    {
      id: 6,
      title: "title 6",
      content: "content 3",
    },
    {
      id: 7,
      title: "title 7",
      content: "content",
    },
    {
      id: 8,
      title: "title 8",
      content: "content 2",
    },
    {
      id: 9,
      title: "title 9",
      content: "content 3",
    },
    {
      id: 10,
      title: "title 10",
      content: "content",
    },
    {
      id: 11,
      title: "title 11",
      content: "content 2",
    },
    {
      id: 12,
      title: "title 12",
      content: "content 3",
    },
  ];

  const card = [
    {
      id: 1,
      price: 500,
      location: "baki OYU",
      rooms: "3 otaqliii",
    },
    {
      id: 1,
      price: 600,
      location: "Samaxi OYU",
      rooms: "3 otaqliii",
    },
    {
      id: 1,
      price: 100,
      location: "Lenkeran OYU",
      rooms: "3 otaqliii",
    },
  ];

  const books = [
    {
      id: 1,
      title: "riyaziyyat",
      desc: "cdefvrgvbgrb",
    },
    {
      id: 2,
      title: "Informatika",
      desc: "cdefvrgvbgrb",
    },
    {
      id: 3,
      title: "Ana dili",
      desc: "cdefvrgvbgrb",
    },
    {
      id: 3,
      title: "Ana dili",
      desc: "cdefvrgvbgrb",
    },
    {
      id: 3,
      title: "Ana dili",
      desc: "cdefvrgvbgrb",
    },
    {
      id: 3,
      title: "Ana dili",
      desc: "cdefvrgvbgrb",
    },
  ];

  const mixData = [...books, ...userData, ...card];

  const roomsArray = mixData.filter((item) => item.rooms);
  const booksArray = mixData.filter((item) => item.desc);
  const usersArray = mixData.filter((item) => item.content);

  let concattedArr = [];

  let arrayIndex = 0;
  let arrayValue = 0;
  while (arrayIndex < usersArray.length) {
    arrayValue += 3;
    concattedArr.push(
      usersArray.slice(arrayIndex, arrayValue).map((arr) => arr)
    );  
    arrayIndex = arrayValue;
  }



  return (
    <div className={styles.hero}>
      <Slider {...settings}>
        {concattedArr.map((arr, i) => {
          if (i % 2 !== 0) {
            return <Blog data={arr} />;
          } else {
            return <Card />
          }
        })}
      </Slider>
    </div>
  );
};

export default Hero;
