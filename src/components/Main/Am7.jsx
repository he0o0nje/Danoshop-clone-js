import * as style from "./Am7Style";
import prod1 from "../../assets/images/am7/01.png";

function Am7() {
  return (
    <>
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
                    <img src={prod1} alt="" />
                  </a>
                  <div className="icon_box">
                    <span>WISH</span>
                    <span>ADD</span>
                    <span>OPTION</span>
                  </div>
                  <span className="sale_sticker">10%</span>
                </div>
                <div className="prod_desc"></div>
              </style.MainProd>
            </li>
          </ul>
        </style.MainProdList>
      </style.MainCont>
    </>
  );
}

export default Am7;
