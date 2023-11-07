import * as style from "./DetailTabStyle";

function DetailTab04({ openTab, onTabClick }) {
  return (
    <>
      <style.DetailTab>
        <ul>
          <li className={openTab === 1 ? "tab_open" : ""}>
            <a onClick={() => onTabClick(1)}>상세정보</a>
          </li>
          <li className={openTab === 2 ? "tab_open" : ""}>
            <a onClick={() => onTabClick(2)}>
              상품후기
              <span>2,020</span>
            </a>
          </li>
          <li className={openTab === 3 ? "tab_open" : ""}>
            <a onClick={() => onTabClick(3)}>
              상품문의
              <span>306</span>
            </a>
          </li>
          <li className={openTab === 4 ? "tab_open" : ""}>
            <a onClick={() => onTabClick(4)}>배송/교환/환불 안내</a>
          </li>
        </ul>
      </style.DetailTab>
    </>
  );
}

export default DetailTab04;
