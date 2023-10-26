import * as style from "./BotBannerStyle";

function BotBanner() {
  return (
    <>
      <style.BotBanner>
        <div className="bot_banner_title">HEALTHY CAN BE EASY!</div>
        <div className="bot_banner_txt">
          <p>식단관리식은 어째서 비싸고, 맛없고, 양 적고</p>
          <p>귀찮고 복잡한 것이 되었을까요?&nbsp;</p>
          <p>DANO는 '맛있고 간편한 건강식'을 개발합니다.</p>
          <p>&nbsp;</p>
          <p>DANO의 깐깐한 기준으로</p>
          <p>나와 내 가족이 먹고 쓸 제품을 만듭니다.</p>
          <p>
            우리 제품이 더 건강한 몸, 더 행복한 삶을 만들 수 있다고 믿습니다.
          </p>
          <p>
            <br></br>
          </p>
          <p>당신의 더 나은 삶을 위한 DANO의 제품을 만나보세요.</p>
        </div>
        <div className="bot_banner_link">
          <a href="/">회원가입</a>
        </div>
      </style.BotBanner>
    </>
  );
}

export default BotBanner;
