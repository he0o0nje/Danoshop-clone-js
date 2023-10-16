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
        <style.MainCont>
          <style.MainTit>
            <p>아침 7시, 통곡물&고단백 아침식단</p>
            <p>준비하는데 3분컷, 간편하게 영양만점 하루 시작!</p>
          </style.MainTit>
          <style.MainProdList>
            <ul>
              <li>
                <style.MainProd>
                  <div className="prod_thumb">
                    <a href="!">
                      <img src="" alt="" />
                    </a>
                    <div className="icon_box"></div>
                    <span></span>
                  </div>
                  <div className="prod_desc"></div>
                </style.MainProd>
              </li>
            </ul>
          </style.MainProdList>
        </style.MainCont>
      </style.Main>
    </>
  );
}

export default Main;
