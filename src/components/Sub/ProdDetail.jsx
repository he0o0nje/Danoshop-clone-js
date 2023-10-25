import * as style from "./ProdDetailStyle";
import DetailTab01 from "./DetailTab01";

function ProdDetail() {
  return (
    <>
      <DetailTab01></DetailTab01>
      <style.ProdDetail>
        <div>
          <p>
            <img src="img/sub/prod001/detail01.png" alt="" />
            <img src="img/sub/prod001/detail02.png" alt="" />
          </p>
          <p>
            <img src="img/sub/prod001/detail03.jpg" alt="" />
            <img src="img/sub/prod001/detail04.png" alt="" />
            <img src="img/sub/prod001/detail05.png" alt="" />
          </p>
          <br></br>
        </div>
        <div className="detail_info">
          <div className="info_container">
            <div className="info_title">
              <span> 상세정보 </span>
            </div>
            <div className="information">
              <table>
                <tbody>
                  <tr>
                    <th>
                      <strong>제품명</strong>
                    </th>
                    <td>
                      <span>
                        자이언트 프로틴 브라운라이스소울 2종 (베리, 초코)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <strong>보관방법</strong>
                    </th>
                    <td>
                      <div>
                        <span>실온보관(직사광선을 피한 서늘한 곳에 보관)</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <strong>용량</strong>
                    </th>
                    <td>
                      <div>
                        <span>1개 500g</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <strong>소비기한</strong>
                    </th>
                    <td>
                      <div>
                        <span>제조일로부터 12개월(제품별도표기일까지)</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <strong>영양성분</strong>
                    </th>
                    <td>
                      <div>
                        <span>상세페이지 참조</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <strong>원재료명</strong>
                    </th>
                    <td>
                      <div>
                        <span>상세페이지 참조</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <strong>알레르기 정보</strong>
                    </th>
                    <td>
                      <div>
                        <span>상세페이지 참조</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
          </div>
        </div>
      </style.ProdDetail>
    </>
  );
}

export default ProdDetail;
