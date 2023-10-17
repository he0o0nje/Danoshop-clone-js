import * as style from "./BannerStyle";
import Carousel from "react-bootstrap/Carousel";
import mbn1 from "../../assets/images/banner/01.png";
import mbn2 from "../../assets/images/banner/02.jpeg";
import mbn3 from "../../assets/images/banner/03.png";
import mbn4 from "../../assets/images/banner/04.png";
import mbn5 from "../../assets/images/banner/05.png";
import mbn6 from "../../assets/images/banner/06.png";
import mbn7 from "../../assets/images/banner/07.png";

function Banner() {
  return (
    <>
      <style.MainBanner>
        <Carousel fade controls={false}>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src={mbn1} alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src={mbn2} alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src={mbn3} alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src={mbn4} alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src={mbn5} alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src={mbn6} alt="" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <a href="!">
              <img src={mbn7} alt="" />
            </a>
          </Carousel.Item>
        </Carousel>
      </style.MainBanner>
    </>
  );
}

export default Banner;
