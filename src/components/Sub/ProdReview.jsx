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
            <div className="right_content"></div>
          </div>
        </style.ReviewWrap>
      </style.ProdReview>
    </>
  );
}

export default ProdReview;
