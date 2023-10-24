import * as style from "./ProdQnAStyle";
import DetailTab03 from "./DetailTab03";

function ProdQnA() {
  return (
    <>
      <style.ProdQnA>
        <DetailTab03></DetailTab03>
        <div>
          <style.BoardTit>
            <h2>Q&amp;A</h2>
            <div class="QnA_btn_wrap">
              <a href="!" class="normal_btn">
                LIST
              </a>
              <a href="!" class="normal_btn">
                WRITE
              </a>
            </div>
          </style.BoardTit>
          <style.Contents>
            <table>
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
              <tbody class="center">
                <tr class=" xans-record-">
                  <td class="RW">306</td>
                  <td>기타문의</td>
                  <td class="subject left txtBreak">
                    <img
                      src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_lock.gif"
                      alt="비밀글"
                      class="ec-common-rwd-image"
                    />{" "}
                    <a
                      href="/article/상품-qa/6/687017/?no=687017&amp;board_no=6&amp;spread_flag=T"
                      class=""
                    >
                      다노샵 상품이 궁금해요🙋‍♀️
                    </a>{" "}
                    <span class="comment"></span>
                  </td>
                  <td> 한****</td>
                  <td>2023-10-16 18:36:22</td>
                  <td>3</td>
                </tr>
                <tr class=" xans-record-">
                  <td class="RW">305</td>
                  <td>기타문의</td>
                  <td class="subject left txtBreak">
                    &nbsp;&nbsp;&nbsp;
                    <img
                      src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_re.gif"
                      alt="답변"
                      class="ec-common-rwd-image"
                    />{" "}
                    <img
                      src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_lock.gif"
                      alt="비밀글"
                      class="ec-common-rwd-image"
                    />{" "}
                    <a
                      href="/article/상품-qa/6/687020/?no=687020&amp;board_no=6&amp;spread_flag=T"
                      class=""
                    >
                      안녕하세요, 다노샵입니다. 💁‍♀️
                    </a>{" "}
                    <span class="comment"></span>
                  </td>
                  <td> 다노샵</td>
                  <td>2023-10-17 11:55:12</td>
                  <td>1</td>
                </tr>
                <tr class=" xans-record-">
                  <td class="RW">304</td>
                  <td>상품 문의</td>
                  <td class="subject left txtBreak">
                    <img
                      src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_lock.gif"
                      alt="비밀글"
                      class="ec-common-rwd-image"
                    />{" "}
                    <a
                      href="/article/상품-qa/6/686910/?no=686910&amp;board_no=6&amp;spread_flag=T"
                      class=""
                    >
                      다노샵 상품이 궁금해요🙋‍♀️
                    </a>{" "}
                    <span class="comment"></span>
                  </td>
                  <td> 이****</td>
                  <td>2023-10-04 13:23:55</td>
                  <td>2</td>
                </tr>
                <tr class=" xans-record-">
                  <td class="RW">303</td>
                  <td>상품 문의</td>
                  <td class="subject left txtBreak">
                    &nbsp;&nbsp;&nbsp;
                    <img
                      src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_re.gif"
                      alt="답변"
                      class="ec-common-rwd-image"
                    />{" "}
                    <img
                      src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_lock.gif"
                      alt="비밀글"
                      class="ec-common-rwd-image"
                    />{" "}
                    <a
                      href="/article/상품-qa/6/686921/?no=686921&amp;board_no=6&amp;spread_flag=T"
                      class=""
                    >
                      안녕하세요, 다노샵입니다. 💁‍♀️
                    </a>{" "}
                    <span class="comment"></span>
                  </td>
                  <td> 다노샵</td>
                  <td>2023-10-04 15:43:16</td>
                  <td>1</td>
                </tr>
                <tr class=" xans-record-">
                  <td class="RW">302</td>
                  <td>기타문의</td>
                  <td class="subject left txtBreak">
                    <img
                      src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_lock.gif"
                      alt="비밀글"
                      class="ec-common-rwd-image"
                    />{" "}
                    <a
                      href="/article/상품-qa/6/686895/?no=686895&amp;board_no=6&amp;spread_flag=T"
                      class=""
                    >
                      다노샵 상품이 궁금해요🙋‍♀️
                    </a>{" "}
                    <span class="comment"></span>
                  </td>
                  <td> 권****</td>
                  <td>2023-10-02 18:57:56</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </style.Contents>
        </div>
      </style.ProdQnA>
    </>
  );
}

export default ProdQnA;
