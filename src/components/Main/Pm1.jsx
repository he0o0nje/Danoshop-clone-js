import * as style from "./ProdTitStyle";
import Product from "./Pm1Product";

function Pm1() {
  return (
    <>
      <style.MainCont>
        <style.MainTit>
          <p>오후 1시, 단백질 든든히 챙기는 점심</p>
          <p>바빠도 끼니 거르지 마요. 우리가 있으니까</p>
        </style.MainTit>
        <Product></Product>
        {/* <style.MoreProd>
          <a href="!">
            상품 더보기
            <div>
              (<span>1</span>/<span>2</span>)
            </div>
          </a>
        </style.MoreProd> */}
      </style.MainCont>
    </>
  );
}

export default Pm1;
