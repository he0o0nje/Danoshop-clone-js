import * as style from "./BannerStyle";
import Carousel from "react-bootstrap/Carousel";
import dummy from "../../data/main/Banner.json";

function Banner() {
  return (
    <>
      <style.MainBanner>
        <Carousel fade controls={false}>
          {dummy.map((item, index) => (
            <Carousel.Item interval={1500} key={index}>
              <a href="/">
                <img src={item.image} alt="" />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </style.MainBanner>
    </>
  );
}

export default Banner;
