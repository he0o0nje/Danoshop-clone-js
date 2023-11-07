import * as style from "./DetailTabStyle";
import { useScroll } from "./ScrollContext";
import { Link } from "react-router-dom";

function DetailTab({ openTab }) {
  const { selectedTab, setSelectedTab } = useScroll();

  const onTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  return (
    <>
      <style.DetailTab>
        <ul>
          <li className={openTab === 1 ? "tab_open" : ""}>
            <Link to="#none" onClick={() => onTabClick(1)}>
              상세정보
            </Link>
          </li>
          <li className={openTab === 2 ? "tab_open" : ""}>
            <Link to="#none" onClick={() => onTabClick(1)}>
              상품후기
              <span>2,020</span>
            </Link>
          </li>
          <li className={openTab === 3 ? "tab_open" : ""}>
            <Link to="#none" onClick={() => onTabClick(1)}>
              상품문의
              <span>306</span>
            </Link>
          </li>
          <li className={openTab === 4 ? "tab_open" : ""}>
            <Link to="#none" onClick={() => onTabClick(1)}>
              배송/교환/환불 안내
            </Link>
          </li>
        </ul>
      </style.DetailTab>
    </>
  );
}

export default DetailTab;
