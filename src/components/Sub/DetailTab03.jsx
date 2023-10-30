import * as style from "./DetailTabStyle";

function DetailTab03() {
  return (
    <>
      <style.DetailTab>
        <ul>
          <li>
            <a href="#none">상세정보</a>
          </li>
          <li>
            <a href="#none">
              상품후기
              <span>2,020</span>
            </a>
          </li>
          <li className="tab_open">
            <a href="#none">
              상품문의
              <span>306</span>
            </a>
          </li>
          <li>
            <a href="#none">배송/교환/환불 안내</a>
          </li>
        </ul>
      </style.DetailTab>
    </>
  );
}

export default DetailTab03;
