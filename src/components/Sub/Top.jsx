import * as style from "./TopStyle";

function Top() {
  return (
    <>
      <style.HeadCategory>
        <ol>
          <li>
            <a href="!">홈</a>
          </li>
          <li>
            <a href="!">다노절 이벤트</a>
          </li>
        </ol>
      </style.HeadCategory>
      <style.SubTop>
        <style.DetailArea>
          <style.ImgArea>
            <div className="prod_img">
              <a href="!">
                <img src="img/product/01big.png" alt="" />
              </a>
            </div>
            <div className="list_img">
              <ul>
                <li>
                  <img src="img/product/01small.png" alt="" />
                </li>
              </ul>
            </div>
          </style.ImgArea>
          <style.InfoArea>
            <div className="heading_area">
              <h1>
                [다노] 자이언트 브라운라이스소울 프로틴 2종_식사대용 현미 시리얼
                그래놀라
              </h1>
            </div>
            <table className="sale_info">
              <tbody>
                <tr>
                  <th>
                    <span>상품요약정보</span>
                  </th>
                  <td>
                    <span>달콤하게 즐기는 고단백 현미시리얼</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="price">판매가</span>
                  </th>
                  <td>
                    <span className="price">
                      <strong>32,000원</strong>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="sale_price">할인판매가</span>
                  </th>
                  <td>
                    <span className="sale_price">
                      29,000원
                      <span className="percent">10%</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span style={{ fontSize: "1.2rem", color: "#000" }}>
                      구성
                    </span>
                  </th>
                  <td>
                    <span style={{ fontSize: "1.2rem", color: "#000" }}>
                      1개
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>배송방법</span>
                  </th>
                  <td>
                    <span>택배</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>배송비</span>
                  </th>
                  <td>
                    <span>
                      <strong>3,500원</strong> (50,000원 이상 구매 시 무료)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="option">
              <tbody>
                <tr>
                  <th>옵션</th>
                  <td>
                    <select name="" id="">
                      <option value="">- [필수] 옵션을 선택해 주세요 -</option>
                      <option value="">-------------------</option>
                      <option>자이언트 브라운라이스소울 프로틴_베리</option>
                      <option>자이언트 브라운라이스소울 프로틴_초코</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="guide_area">
              <p class="info ">(최소주문수량 1개 이상)</p>
            </div>
            <div className="total_products">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p class="product">
                        [다노] 자이언트 브라운라이스소울 프로틴 2종_식사대용
                        현미 시리얼 그래놀라
                        <br></br> -{" "}
                        <span>자이언트 브라운라이스소울 프로틴_베리</span>
                      </p>
                    </td>
                    <td>
                      <span className="quantity">
                        <input type="text" value={1} />
                        <a href="!" className="up">
                          +
                        </a>
                        <a href="!" className="down">
                          -
                        </a>
                      </span>
                      <a href="!" className="delete">
                        <img src="img/product/ico_product_delete.svg" alt="" />
                      </a>
                    </td>
                    <td>
                      <span className="right">
                        <span>32,000원</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </style.InfoArea>
        </style.DetailArea>
      </style.SubTop>
    </>
  );
}

export default Top;
