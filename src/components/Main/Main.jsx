import * as style from "./MainStyle";
import Carousel from "react-bootstrap/Carousel";
import mbn1 from "../../assets/images/main/mainBann1.png";
import mbn2 from "../../assets/images/main/mainBann2.jpeg";
import mbn3 from "../../assets/images/main/mainBann3.png";
import mbn4 from "../../assets/images/main/mainBann4.png";
import mbn5 from "../../assets/images/main/mainBann5.png";
import mbn6 from "../../assets/images/main/mainBann6.png";
import mbn7 from "../../assets/images/main/mainBann7.png";

function Main() {
  return (
    <>
      <style.Main>
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
      </style.Main>
    </>
  );
}

export default Main;
