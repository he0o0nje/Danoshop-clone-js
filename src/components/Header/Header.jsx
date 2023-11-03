import { useState, useEffect } from "react";
import * as style from "./HeaderStyle";
import { Link } from "react-router-dom";

function Header({ isAboutHeader }) {
  const [isHeaderFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setHeaderFixed(true) : setHeaderFixed(false);
    });

    return () => {
      // window.removeEventListener("scroll", () => {});
    };
  }, []);

  const cate = [
    { id: 1, name: "전 상품" },
    { id: 2, name: "SALE" },
    { id: 3, name: "100원딜" },
    { id: 4, name: "식단관리" },
    { id: 5, name: "간편식" },
    { id: 6, name: "베이커리" },
    { id: 7, name: "간식·음료" },
    { id: 8, name: "분식·반찬" },
    { id: 9, name: "홈트용품" },
    { id: 10, name: "리빙용품" },
  ];
  return (
    <>
      <style.HeaderWrap isFixed={isHeaderFixed} isAboutHeader={isAboutHeader}>
        <style.Header>
          <style.HeaderTop>
            <ul className="top_list">
              <li>
                <style.Link href="/">회원가입</style.Link>
              </li>
              <li>
                <style.Link href="/login">로그인</style.Link>
              </li>
              <li>
                <style.Link href="/">주문조회</style.Link>
              </li>
              <li>
                <style.Link href="/">최근본상품</style.Link>
              </li>
              <li>
                <style.boardList>
                  <style.Link href="/">
                    고객센터
                    <i className="arrRgt"></i>
                  </style.Link>
                  <ul className="board_list">
                    <li>
                      <style.Link href="/">공지사항</style.Link>
                    </li>
                    <li>
                      <style.Link href="/">상품 사용후기</style.Link>
                    </li>
                    <li>
                      <style.Link href="/">상품 Q&A</style.Link>
                    </li>
                  </ul>
                </style.boardList>
              </li>
            </ul>
          </style.HeaderTop>
          <style.HeaderBottom>
            <style.LogoWrap>
              <Link to="/">
                <img src="/img/header/logo.jpg" alt="" />
              </Link>
            </style.LogoWrap>
            <style.MypageWrap>
              <Link to="/Login">
                <img src="/img/header/mypage1.svg" alt="" />
              </Link>
              <Link to="/cart">
                <img src="/img/header/mypage2.svg" alt="" />
              </Link>
              <Link to="/">
                <img src="/img/header/mypage3.svg" alt="" />
              </Link>
            </style.MypageWrap>
            <style.BotCategory>
              <ul>
                {cate.map((item, index) => (
                  <li key={index}>
                    <Link to={`/detail/${item.id}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </style.BotCategory>
          </style.HeaderBottom>
        </style.Header>
      </style.HeaderWrap>
    </>
  );
}

export default Header;
