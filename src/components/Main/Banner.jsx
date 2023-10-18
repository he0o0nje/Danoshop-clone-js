import * as style from "./BannerStyle";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <>
      <style.MainBanner>
        <Carousel fade controls={false}>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src="img/banner/01.png" alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src="img/banner/02.jpeg" alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src="img/banner/03.png" alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src="img/banner/04.png" alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src="img/banner/05.png" alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src="img/banner/06.png" alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src="img/banner/07.png" alt="" />
            </a>
          </Carousel.Item>
        </Carousel>
      </style.MainBanner>
    </>
  );
}

export default Banner;
