import * as style from "./ProdQnAStyle";
import DetailTab from "./DetailTab";
import { useState, useRef } from "react";

function ProdQnA() {
  // const [selectedTab, setSelectedTab] = useState(1);
  // const tabContentRef = useRef(null);
  // const handleTabClick = (tab) => {
  //   setSelectedTab(tab);
  //   if (tabContentRef.current) {
  //     const tabContentOffset = tabContentRef.current.offsetTop;
  //     window.scrollTo({
  //       top: tabContentOffset,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <>
      <style.ProdQnA>
        <DetailTab
          openTab={3}
          // selectedTab={selectedTab}
          // onTabClick={handleTabClick}
          // ref={tabContentRef}
        />
        <div>
          <style.BoardTit>
            <h2>Q&amp;A</h2>
            <div className="QnA_btn_wrap">
              <a href="!" className="normal_btn">
                LIST
              </a>
              <a href="!" className="normal_btn">
                WRITE
              </a>
            </div>
          </style.BoardTit>
          <style.Contents>
            <table>
              <colgroup>
                <col style={{ width: "70px" }} />
                <col style={{ width: "134px" }} />
                <col style={{ width: "auto" }} />
                <col style={{ width: "80px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "55px" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>카테고리</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>조회</th>
                </tr>
              </thead>
              <tbody className="center">
                <tr>
                  <td>306</td>
                  <td>기타문의</td>
                  <td className="left subject">
                    <img src="/img/icon/ico_lock.gif" alt="" />
                    &nbsp;&nbsp;&nbsp;
                    <a href="!">다노샵 상품이 궁금해요🙋‍♀️</a>
                    &nbsp;&nbsp;&nbsp;
                    <span className="comment"></span>
                  </td>
                  <td> 한****</td>
                  <td>2023-10-16 18:36:22</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>305</td>
                  <td>기타문의</td>
                  <td className="left subject">
                    &nbsp;&nbsp;&nbsp;
                    <img src="/img/icon/ico_re.gif" alt="" />
                    &nbsp;&nbsp;&nbsp;
                    <img src="/img/icon/ico_lock.gif" alt="" />
                    &nbsp;&nbsp;&nbsp;
                    <a href="!">안녕하세요, 다노샵입니다. 💁‍♀️</a>
                    &nbsp;&nbsp;&nbsp;
                    <span className="comment"></span>
                  </td>
                  <td> 다노샵</td>
                  <td>2023-10-17 11:55:12</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>304</td>
                  <td>상품 문의</td>
                  <td className="left subject">
                    <img src="/img/icon/ico_lock.gif" alt="" />
                    &nbsp;&nbsp;&nbsp;
                    <a href="!">다노샵 상품이 궁금해요🙋‍♀️</a>
                    &nbsp;&nbsp;&nbsp;
                    <span className="comment"></span>
                  </td>
                  <td> 이****</td>
                  <td>2023-10-04 13:23:55</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>303</td>
                  <td>상품 문의</td>
                  <td className="left subject">
                    &nbsp;&nbsp;&nbsp;
                    <img src="/img/icon/ico_re.gif" alt="" />
                    &nbsp;&nbsp;&nbsp;
                    <img src="/img/icon/ico_lock.gif" alt="" />
                    &nbsp;&nbsp;&nbsp;
                    <a href="!">안녕하세요, 다노샵입니다. 💁‍♀️</a>
                    &nbsp;&nbsp;&nbsp;
                    <span className="comment"></span>
                  </td>
                  <td> 다노샵</td>
                  <td>2023-10-04 15:43:16</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>302</td>
                  <td>기타문의</td>
                  <td className="left subject">
                    <img src="/img/icon/ico_lock.gif" alt="" />
                    &nbsp;&nbsp;&nbsp;
                    <a href="!">다노샵 상품이 궁금해요🙋‍♀️</a>
                    &nbsp;&nbsp;&nbsp;
                    <span className="comment"></span>
                  </td>
                  <td> 권****</td>
                  <td>2023-10-02 18:57:56</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
            <div className="paginate">
              <a href="!" className="first">
                첫 페이지
              </a>
              <a href="!">이전 페이지</a>
              <ol>
                <li>
                  <a href="!" className="this">
                    1
                  </a>
                </li>
                <li>
                  <a href="!" className="other">
                    2
                  </a>
                </li>
                <li>
                  <a href="!" className="other">
                    3
                  </a>
                </li>
                <li>
                  <a href="!" className="other">
                    4
                  </a>
                </li>
                <li>
                  <a href="!" className="other">
                    5
                  </a>
                </li>
              </ol>
              <a href="!">다음 페이지</a>
              <a href="!" className="last">
                마지막 페이지
              </a>
            </div>
          </style.Contents>
        </div>
      </style.ProdQnA>
    </>
  );
}

export default ProdQnA;
