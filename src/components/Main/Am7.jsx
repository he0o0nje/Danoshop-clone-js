import * as style from "./ProductStyle";
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
          <ul className="prod_list">
            <li className="product">
              <style.MainProd sale>
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
                <div className="prod_desc">
                  <div className="name">
                    <a href="!">
                      [다노] 자이언트 브라운라이스소울 프로틴 2종_식사대용 현미
                      시리얼 그래놀라
                    </a>
                  </div>
                  <ul>
                    <li className="composition">
                      <strong>구성 : </strong>
                      <span>1개</span>
                    </li>
                    <li className="price">
                      <span>32,000원</span>
                    </li>
                    <li className="sale_price">
                      <span>29,000원</span>
                    </li>
                  </ul>
                </div>
              </style.MainProd>
            </li>
          </ul>
        </style.MainProdList>
      </style.MainCont>
    </>
  );
}

export default Am7;
