import * as style from "./ProdTitStyle";
import Product from "./TryEatProduct";

function TryEat() {
  return (
    <>
      <style.MainCont>
        <style.MainTit>
          <p>먹어보고 결정해요! 다노 맛보기 세트🍱</p>
          <p>다노샵의 스테디 셀러 상품 모음💓</p>
        </style.MainTit>
        <Product></Product>
      </style.MainCont>
    </>
  );
}

export default TryEat;
