import * as style from "./ProdReviewStyle";
import DetailTab02 from "./DetailTab02";

function ProdReview() {
  return (
    <>
      <style.ProdReview>
        <DetailTab02></DetailTab02>
        <style.ReviewWrap>
          <div className="header">
            <div className="title_wrap">
              <span className="title"> REVIEW </span>
              <span className="review_count"> (2,020) </span>
            </div>
            <div className="all_review">
              <a href="!">전체 상품 리뷰 보기</a>
            </div>
          </div>
          <div className="review_summary">
            <div className="left_content">
              <div className="score">
                <div className="icon">
                  <img src="img/icon/ico_star.svg" alt="" />
                </div>
                <span class="text">5.0</span>
              </div>
              <div class="score_percentage">
                <b>99%</b>의 구매자가 이 상품을 좋아합니다.
              </div>
              <button class="create_review_btn">상품 리뷰 작성하기</button>
            </div>
            <div className="right_content">
              <ul>
                <li className="highlighted">
                  <div class="title">아주 좋아요</div>
                  <div class="gauge">
                    <div
                      style={{ width: "max(97%, 12px)" }}
                      class="percentile"
                    ></div>
                  </div>
                  <div class="count">1,964</div>
                </li>
                <li>
                  <div class="title">맘에 들어요</div>
                  <div class="gauge">
                    <div
                      style={{ width: "max(2%, 12px)" }}
                      class="percentile"
                    ></div>
                  </div>
                  <div class="count">42</div>
                </li>
                <li>
                  <div class="title">보통이에요</div>
                  <div class="gauge">
                    <div
                      style={{ width: "max(0%, 0px)" }}
                      class="percentile"
                    ></div>
                  </div>
                  <div class="count">10</div>
                </li>
                <li>
                  <div class="title">그냥 그래요</div>
                  <div class="gauge">
                    <div
                      style={{ width: "max(0%, 0px)" }}
                      class="percentile"
                    ></div>
                  </div>
                  <div class="count">3</div>
                </li>
                <li>
                  <div class="title">별로예요</div>
                  <div class="gauge">
                    <div
                      style={{ width: "max(0%, 0px)" }}
                      class="percentile"
                    ></div>
                  </div>
                  <div class="count">4</div>
                </li>
              </ul>
            </div>
          </div>
        </style.ReviewWrap>
      </style.ProdReview>
    </>
  );
}

export default ProdReview;
