import * as style from "./FooterStyle";
import logo from "../../assets/images/header/logo.jpg";
import sns1 from "../../assets/images/footer/sns1.png";
import sns2 from "../../assets/images/footer/sns2.png";
import sns3 from "../../assets/images/footer/sns3.png";
import sns4 from "../../assets/images/footer/sns4.png";

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
              <li>
                <a href="!"></a>
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
          <style.BasicInfo>
            <style.InqTitle>쇼핑몰 기본정보</style.InqTitle>
            <style.BInfoList>
              <style.BInfoCont>
                <span className="field">상호명</span>
                <span className="value">(주)다노</span>
              </style.BInfoCont>
              <style.BInfoCont>
                <span className="field">대표자명</span>
                <span className="value">정범윤</span>
              </style.BInfoCont>
              <style.BInfoCont>
                <span className="field">사업장 주소</span>
                <span className="value">
                  04212 서울특별시 마포구 마포대로 144 (공덕동) 마포T타운 14층
                </span>
              </style.BInfoCont>
              <style.BInfoCont>
                <span className="field">대표 전화</span>
                <span className="value">02-2135-1885</span>
              </style.BInfoCont>
              <style.BInfoCont>
                <span className="field">사업자 등록번호</span>
                <span className="value">106-87-00202</span>
              </style.BInfoCont>
              <style.BInfoCont>
                <span className="field">통신판매업 신고번호</span>
                <span className="value">
                  제2017-서울마포-0722
                  <a href="!"> [사업자정보확인]</a>
                </span>
              </style.BInfoCont>
              <style.BInfoCont>
                <span className="field">개인정보보호책임자</span>
                <span className="value">이지수</span>
              </style.BInfoCont>
            </style.BInfoList>
          </style.BasicInfo>
          <style.Sns>
            <style.SnsTit>SNS</style.SnsTit>
            <style.SnsBox>
              <a href="!">
                <img src={sns1} alt="" />
              </a>
              <a href="!">
                <img src={sns2} alt="" />
              </a>
              <a href="!">
                <img src={sns3} alt="" />
              </a>
              <a href="!">
                <img src={sns4} alt="" />
              </a>
            </style.SnsBox>
          </style.Sns>
          <style.Copyright>
            Copyright © 다노샵. All Rights Reserved. Hosting by Cafe24 Corp.
          </style.Copyright>
        </style.FooterInner>
      </style.Footer>
    </>
  );
}

export default Main;
