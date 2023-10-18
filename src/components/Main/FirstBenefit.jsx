import * as title from "./ProdTitStyle";
import * as style from "./FirstBenefitStyle";
import dummy from "../../data/1stBenefit.json";

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
            {dummy.map((item, index) => (
              <li key={index}>
                <a href="!">
                  <div className="img_area">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="txt_area">
                    <p>{item.title}</p>
                    <p>자세히 보기{">"}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </style.FirstBeneCont>
      </title.MainCont>
    </>
  );
}

export default FirstBenefit;
