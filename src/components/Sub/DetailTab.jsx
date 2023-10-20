import * as style from "./DetailTabStyle";

function DetailTab() {
  return (
    <>
      <style.DetailTab>
        <ul>
          <li className="tab_open">
            <a href="!">상세정보</a>
          </li>
          <li>
            <a href="!">
              상품후기
              <span>2,020</span>
            </a>
          </li>
          <li>
            <a href="!">
              상품문의
              <span>306</span>
            </a>
          </li>
          <li>
            <a href="!">배송/교환/환불 안내</a>
          </li>
        </ul>
      </style.DetailTab>
    </>
  );
}

export default DetailTab;
