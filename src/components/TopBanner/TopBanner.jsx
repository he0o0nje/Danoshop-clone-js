import * as style from "./TopBannerStyle";
import { useState } from "react";

function TopBanner() {
  const [isHidden, setIsHidden] = useState(false);

  const handleCloseClick = () => {
    setIsHidden(true);
  };

  return (
    !isHidden && (
      <>
        <style.TopBanner>
          <style.TopBanInner>
            <style.TopBanTxt>
              <a href="!">다노샵 회원가입 시 최대 10만원 쿠폰팩 증정</a>
            </style.TopBanTxt>
            <style.TopBanClose>
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">오늘 하루 보지 않기</label>
              <i onClick={handleCloseClick}>닫기</i>
            </style.TopBanClose>
          </style.TopBanInner>
        </style.TopBanner>
      </>
    )
  );
}

export default TopBanner;
