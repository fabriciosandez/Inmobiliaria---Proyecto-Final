import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrusel.css";

function Carrusel() {
  return (
    <Carousel className="carouselContainer">
      <Carousel.Item className="imgsContainer">
        <img className="d-block w-100 " src="/Images/casa4.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="carouselContainer">
        <img
          className="d-block w-100 "
          src="./Images/casa5.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carouselContainer">
        <img
          className="d-block w-100 "
          src="./Images/casa3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
