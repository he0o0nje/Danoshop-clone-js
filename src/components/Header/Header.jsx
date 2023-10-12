import * as style from "./HeaderStyle";
import logo from "../../assets/images/header/logo.jpg";
import mypage1 from "../../assets/images/header/mypage1.svg";
import mypage2 from "../../assets/images/header/mypage2.svg";
import mypage3 from "../../assets/images/header/mypage3.svg";

function Header() {
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
        <style.HeaderBottom>
          <style.LogoWrap>
            <style.Link href="!">
              <img src={logo} alt="" />
            </style.Link>
          </style.LogoWrap>
          <style.MypageWrap>
            <style.Link href="!">
              <img src={mypage1} alt="" />
            </style.Link>
            <style.Link href="!">
              <img src={mypage2} alt="" />
            </style.Link>
            <style.Link href="!">
              <img src={mypage3} alt="" />
            </style.Link>
          </style.MypageWrap>
          <style.TopCategory>
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
          </style.TopCategory>
        </style.HeaderBottom>
      </style.Header>
    </>
  );
}

export default Header;
