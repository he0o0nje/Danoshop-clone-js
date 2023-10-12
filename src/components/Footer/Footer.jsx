import * as style from "./FooterStyle";
import logo from "../../assets/images/header/logo.jpg";

function Main() {
  return (
    <>
      <style.Footer>
        <style.FooterInner>
          <style.LogoWrap>
            <a href="!">
              <img src={logo} alt="" />
            </a>
          </style.LogoWrap>
          <style.BtnUtil>
            <ul>
              <li>
                <style.Link href="!">회사소개</style.Link>
              </li>
              <li>
                <style.Link href="!">이용약관</style.Link>
              </li>
              <li>
                <style.Link href="!">개인정보처리방침</style.Link>
              </li>
              <li>
                <style.Link href="!">이용안내</style.Link>
              </li>
            </ul>
          </style.BtnUtil>
          <style.Inquiry>
            <div>
              <style.InqTitle>고객센터 정보</style.InqTitle>
            </div>
            <div>
              <style.InqTitle>결제 정보</style.InqTitle>
            </div>
            <div>
              <style.InqTitle>입점/제휴 문의</style.InqTitle>
            </div>
          </style.Inquiry>
          <div></div>
          <div></div>
          <div></div>
        </style.FooterInner>
      </style.Footer>
    </>
  );
}

export default Main;
