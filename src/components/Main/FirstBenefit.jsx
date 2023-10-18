import * as title from "./ProdTitStyle";
import * as style from "./FirstBenefitStyle";

function FirstBenefit() {
  return (
    <>
      <title.MainCont>
        <title.MainTit>
          <p>다노샵이 처음이라면 ?</p>
          <p>🎇신규회원을 위한 푸짐한 혜택🎇</p>
        </title.MainTit>
        <style.FirstBeneCont>
          <ul>
            <li>
              <a href="!">
                <div className="img_area">
                  <img src="img/1stBenefit/01.jpg" alt="" />
                </div>
                <div className="txt_area">
                  <p>첫 구매 100원!</p>
                  <p>자세히 보기{">"}</p>
                </div>
              </a>
            </li>
            <li>
              <a href="!">
                <div className="img_area">
                  <img src="img/1stBenefit/02.jpg" alt="" />
                </div>
                <div className="txt_area">
                  <p>무료 배송 쿠폰</p>
                  <p>자세히 보기{">"}</p>
                </div>
              </a>
            </li>
            <li>
              <a href="!">
                <div className="img_area">
                  <img src="img/1stBenefit/03.jpg" alt="" />
                </div>
                <div className="txt_area">
                  <p>웰컴 쿠폰팩</p>
                  <p>자세히 보기{">"}</p>
                </div>
              </a>
            </li>
          </ul>
        </style.FirstBeneCont>
      </title.MainCont>
    </>
  );
}

export default FirstBenefit;
