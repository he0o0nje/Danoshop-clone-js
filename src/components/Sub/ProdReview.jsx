import * as style from "./ProdReviewStyle";
import DetailTab02 from "./DetailTab02";
import am7 from "../../data/sub/7am.json";
import am10 from "../../data/sub/7am.json";
import { useParams } from "react-router-dom";

function ProdReview() {
  const { id } = useParams();
  const dummy = [...am7, ...am10];
  const product = dummy.find((item) => item.id === parseInt(id));

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
              <a href="#none">전체 상품 리뷰 보기</a>
            </div>
          </div>
          <style.ReviewSummary>
            <div className="left_content">
              <div className="score">
                <div className="icon">
                  <img src="/img/icon/ico_star.svg" alt="" />
                </div>
                <span className="text">5.0</span>
              </div>
              <div className="score_percentage">
                <b>99%</b>의 구매자가 이 상품을 좋아합니다.
              </div>
              <button className="create_review_btn">상품 리뷰 작성하기</button>
            </div>
            <div className="right_content">
              <ul>
                <li className="highlighted">
                  <div className="title">아주 좋아요</div>
                  <div className="gauge">
                    <div
                      style={{ width: "max(97%, 12px)" }}
                      className="percentile"
                    ></div>
                  </div>
                  <div className="count">1,964</div>
                </li>
                <li>
                  <div className="title">맘에 들어요</div>
                  <div className="gauge">
                    <div
                      style={{ width: "max(2%, 12px)" }}
                      className="percentile"
                    ></div>
                  </div>
                  <div className="count">42</div>
                </li>
                <li>
                  <div className="title">보통이에요</div>
                  <div className="gauge">
                    <div
                      style={{ width: "max(0%, 0px)" }}
                      className="percentile"
                    ></div>
                  </div>
                  <div className="count">10</div>
                </li>
                <li>
                  <div className="title">그냥 그래요</div>
                  <div className="gauge">
                    <div
                      style={{ width: "max(0%, 0px)" }}
                      className="percentile"
                    ></div>
                  </div>
                  <div className="count">3</div>
                </li>
                <li>
                  <div className="title">별로예요</div>
                  <div className="gauge">
                    <div
                      style={{ width: "max(0%, 0px)" }}
                      className="percentile"
                    ></div>
                  </div>
                  <div className="count">4</div>
                </li>
              </ul>
            </div>
          </style.ReviewSummary>
          <style.MediaSummary>
            <div className="header">
              <div className="title_wrap">
                <span className="title">포토&동영상</span>
                <span className="review_count">(1,542)</span>
              </div>
              <div className="more_btn">
                <a href="#none">
                  전체보기
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 8"
                    className="show_all_arrow"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M.667 2.333L4 5.667l3.333-3.334"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="summary_content">
              <ul>
                {product.media_review.map((item, index) => (
                  <li key={index}>
                    <img src={item.media} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </style.MediaSummary>
          <style.SortFilter>
            <ul>
              <li className="basic_sort">
                <ul>
                  <li> 추천순 </li>
                  <li> 최신순 </li>
                  <li className="selected"> 별점순 </li>
                </ul>
              </li>
              <li className="search">
                <div className="input_container">
                  <input type="text" placeholder="리뷰 키워드 검색" />
                  <a href="#none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 18 18"
                      className="search_input_icon"
                    >
                      <rect
                        width="10.5"
                        height="10.5"
                        x="2.25"
                        y="2.25"
                        stroke-width="1.5"
                        rx="5.25"
                      ></rect>
                      <path
                        stroke-width="1.5"
                        d="M11.78 11.47L16.28 15.97"
                      ></path>
                    </svg>
                  </a>
                </div>
              </li>
              <li className="media_first">
                <a href="#none">
                  <div className="toggle_btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="on"
                    >
                      <rect
                        width="18.5"
                        height="18.5"
                        x="2.75"
                        y="2.75"
                        stroke-width="1.5"
                        rx="9.25"
                      ></rect>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M7 12l4 4 6-7"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      className=""
                    >
                      <rect
                        width="12.333"
                        height="12.333"
                        x="1.833"
                        y="1.833"
                        rx="6.167"
                      ></rect>
                      <path
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.667 8l2.666 2.667 4-4.667"
                      ></path>
                    </svg>
                    <span>포토/동영상 먼저 보기</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="filter_list">
              <ul>
                <li>
                  <div className="filter_btn">
                    <div className="dropdown">
                      <div className="dropdown_btn">
                        별점
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 8 8"
                          className="dropdown_arrow"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M.667 2.333L4 5.667l3.333-3.334"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </style.SortFilter>
          <style.ReviewList>
            <ul className="review_list">
              {product.review.map((item, index) => (
                <li key={index}>
                  <div className="left_content">
                    <div className="tag_section">
                      {item.tag_new && (
                        <span className="tag_new">{item.tag_new}</span>
                      )}
                      {item.tag_repurchase && (
                        <span className="tag_repurchase">
                          {item.tag_repurchase}
                        </span>
                      )}
                    </div>
                    <div className="score_section">
                      <div className="score_container">
                        <div className="score_star">
                          <div>
                            <img src="/img/icon/ico_star.svg" alt="" />
                          </div>
                          <div>
                            <img src="/img/icon/ico_star.svg" alt="" />
                          </div>
                          <div>
                            <img src="/img/icon/ico_star.svg" alt="" />
                          </div>
                          <div>
                            <img src="/img/icon/ico_star.svg" alt="" />
                          </div>
                          <div>
                            <img src="/img/icon/ico_star.svg" alt="" />
                          </div>
                        </div>
                        <div className="score_text">아주 좋아요</div>
                      </div>
                      <div className="edit_container">
                        <div className="date">{item.date}</div>
                      </div>
                    </div>
                    <div className="content_section">
                      <div className="message">{item.message}</div>
                    </div>
                    <div className="like_section">
                      <div className="comment_info">
                        <a href="#none">
                          <span className="text">댓글</span>
                          <span className="count">0</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 8 8"
                            className=""
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M.667 2.333L4 5.667l3.333-3.334"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="right_content">
                    <div className="user_name_msg">
                      <b>{item.user_name}****</b>
                      님의 리뷰입니다.
                    </div>
                    <div className="options_section">
                      <span className="name">옵션</span>
                      <span className="value">{item.option}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </style.ReviewList>
          <style.ReviewPagination>
            <div className="pagination">
              <a href="#none" className="disabled">
                {"<"}
              </a>
              <a href="#none" className="active">
                1
              </a>
              <a href="#none">2</a>
              <a href="#none">3</a>
              <a href="#none">4</a>
              <a href="#none">5</a>
              <a href="#none">6</a>
              <a href="#none">7</a>
              <a href="#none">8</a>
              <a href="#none">9</a>
              <a href="#none">{">"}</a>
            </div>
          </style.ReviewPagination>
        </style.ReviewWrap>
      </style.ProdReview>
    </>
  );
}

export default ProdReview;
