import * as style from "./HeaderStyle";

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
          </ul>
        </style.HeaderTop>
      </style.Header>
    </>
  );
}

export default Header;
