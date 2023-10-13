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
                <a href="!">회사소개</a>
              </li>
              <li>
                <a href="!">이용약관</a>
              </li>
              <li>
                <a href="!">개인정보처리방침</a>
              </li>
              <li>
                <a href="!">이용안내</a>
              </li>
            </ul>
          </style.BtnUtil>
          <style.Inquiry>
            <div className="inq_wrap">
              <style.InqTitle>고객센터 정보</style.InqTitle>
              <div className="cs_list">
                <strong nbr>상담/주문전화</strong>
                <span>02-2135-1885</span>
              </div>
              <div className="cs_list">
                <strong>상담/주문 이메일</strong>
                <div>support@danoshop.net</div>
              </div>
              <div className="cs_list">
                <strong>CS운영시간</strong>
                <div>10시 ~ 17시 (점심 시간 12시 30분 ~ 13시 30분)</div>
              </div>
            </div>
            <div className="inq_wrap">
              <style.InqTitle>결제 정보</style.InqTitle>
              <div>
                <strong>무통장 계좌정보</strong>
                <div>
                  <span>우리은행</span>
                  <span>1005502842082</span>
                  <span>(주)다노</span>
                </div>
              </div>
            </div>
            <div className="inq_wrap">
              <style.InqTitle>입점/제휴 문의</style.InqTitle>
              <div>
                <div>입점문의: danoshop.md@gmail.com</div>
                <div>제휴문의: danoshop.mkt@gmail.com</div>
              </div>
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
