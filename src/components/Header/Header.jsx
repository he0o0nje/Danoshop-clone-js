import { useState, useEffect } from "react";
import * as style from "./HeaderStyle";
import logo from "../../assets/images/header/logo.jpg";
import mypage1 from "../../assets/images/header/mypage1.svg";
import mypage2 from "../../assets/images/header/mypage2.svg";
import mypage3 from "../../assets/images/header/mypage3.svg";
import { Button } from "react-bootstrap";

function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <style.Header>
        <style.HeaderTop>
          <ul className="top_list">
            <li>
              <style.Link href="!">회원가입</style.Link>
            </li>
            <li>
              <style.Link href="!">로그인</style.Link>
            </li>
            <li>
              <style.Link href="!">주문조회</style.Link>
            </li>
            <li>
              <style.Link href="!">최근본상품</style.Link>
            </li>
            <li>
              <style.boardList>
                <style.Link href="!">
                  고객센터
                  <i className="arrRgt"></i>
                </style.Link>
                <ul className="board_list">
                  <li>
                    <style.Link href="!">공지사항</style.Link>
                  </li>
                  <li>
                    <style.Link href="!">상품 사용후기</style.Link>
                  </li>
                  <li>
                    <style.Link href="!">상품 Q&A</style.Link>
                  </li>
                </ul>
              </style.boardList>
            </li>
          </ul>
        </style.HeaderTop>
        <style.HeaderBottom
          className={`header-bottom ${isHeaderFixed ? "fixed" : "relative"}`}
        >
          <style.LogoWrap>
            <a href="!">
              <img src={logo} alt="" />
            </a>
          </style.LogoWrap>
          <style.MypageWrap>
            <a href="!">
              <img src={mypage1} alt="" />
            </a>
            <a href="!">
              <img src={mypage2} alt="" />
            </a>
            <a href="!">
              <img src={mypage3} alt="" />
            </a>
          </style.MypageWrap>
          <style.BotCategory>
            <ul>
              <li>
                <style.Link href="!">전 상품</style.Link>
              </li>
              <li>
                <style.Link href="!">SALE</style.Link>
              </li>
              <li>
                <style.Link href="!">100원딜</style.Link>
              </li>
              <li>
                <style.Link href="!">식단관리</style.Link>
              </li>
              <li>
                <style.Link href="!">간편식</style.Link>
              </li>
              <li>
                <style.Link href="!">베이커리</style.Link>
              </li>
              <li>
                <style.Link href="!">간식·음료</style.Link>
              </li>
              <li>
                <style.Link href="!">분식·반찬</style.Link>
              </li>
              <li>
                <style.Link href="!">홈트용품</style.Link>
              </li>
              <li>
                <style.Link href="!">리빙용품</style.Link>
              </li>
            </ul>
          </style.BotCategory>
        </style.HeaderBottom>
      </style.Header>
    </>
  );
}

export default Header;
