import * as style from "./Am7Style";
import prod1 from "../../assets/images/am7/01.png";
import Product from "./Product";

function Am7() {
  return (
    <>
      <style.MainCont>
        <style.MainTit>
          <p>아침 7시, 통곡물&고단백 아침식단</p>
          <p>준비하는데 3분컷, 간편하게 영양만점 하루 시작!</p>
        </style.MainTit>
        <Product></Product>
      </style.MainCont>
    </>
  );
}

export default Am7;
