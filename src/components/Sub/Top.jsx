import * as style from "./TopStyle";
import am7 from "../../data/sub/7am.json";
import am10 from "../../data/sub/10am.json";
import { useParams } from "react-router-dom";

function Top() {
  const { id } = useParams();
  const dummy = [...am7, ...am10];
  const product = dummy.find((item) => item.id === parseInt(id));

  return (
    <>
      <style.HeadCategory>
        <ol>
          <li>
            <a href="#none">홈</a>
          </li>
          <li>
            <a href="#none">다노절 이벤트</a>
          </li>
        </ol>
      </style.HeadCategory>
      <style.SubTop>
        <style.DetailArea>
          <style.ImgArea>
            <div className="prod_img">
              <a href="#none">
                <img src={product.top[0].product_imgB} alt="" />
              </a>
            </div>
            <div className="list_img">
              <ul>
                <li>
                  <img src={product.top[0].product_imgS} alt="" />
                </li>
              </ul>
            </div>
          </style.ImgArea>
          <style.InfoArea {...(product.top[0].discount ? { sale: true } : {})}>
            <div className="heading_area">
              <h1>{product.top[0].header}</h1>
            </div>
            <table className="sale_info">
              <tbody>
                <tr>
                  <th>
                    <span>상품요약정보</span>
                  </th>
                  <td>
                    <span>{product.top[0].summary_info}</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="price">판매가</span>
                  </th>
                  <td>
                    <span className="price">
                      <strong>{product.top[0].price}</strong>
                    </span>
                  </td>
                </tr>
                <tr className="sale">
                  <th>
                    <span className="sale_price">할인판매가</span>
                  </th>
                  <td>
                    <span className="sale_price">
                      {product.top[0].sale_price}
                      <span className="percent">{product.top[0].discount}</span>
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
                      {product.top[0].composition}
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
                      {product.top[0].select.map((item, index) => (
                        <option key={index}>{item.option}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="guide_area">
              <p className="info ">(최소주문수량 1개 이상)</p>
            </div>
            <div className="total_products">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p className="product">
                        {product.top[0].header}
                        <br></br> -{" "}
                        <span>자이언트 브라운라이스소울 프로틴_베리</span>
                      </p>
                    </td>
                    <td>
                      <span className="quantity">
                        <input type="text" value={1} />
                        <a href="#none" className="up">
                          +
                        </a>
                        <a href="#none" className="down">
                          -
                        </a>
                      </span>
                      <a href="#none" className="delete">
                        <img src="img/icon/ico_product_delete.svg" alt="" />
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
            <div className="total_price">
              <strong className="title">
                TOTAL <span className="qty">(QUANTITY)</span>
              </strong>
              <span className="total">
                <strong>
                  <em>29,000원</em>
                </strong>{" "}
                (1개)
              </span>
            </div>
            <div className="delivery_info">
              <div className="title">배송정보</div>
              <div className="info_value">
                <p className="type">다노배송(새벽/택배)</p>
                <p className="value">
                  새벽배송 : <span className="highlight">오후 5시</span>까지
                  결제 시 <span className="highlight">내일 오전 7시 전</span>{" "}
                  도착
                </p>
                <p className="value">
                  택배배송 : <span className="highlight">오후 5시</span>까지
                  결제 시 <span className="highlight">오늘</span> 출고
                </p>
              </div>
            </div>
            <div className="action_btn_wrap">
              <div className="action_btn">
                <button className="btn_submit sizeL">구매하기</button>
                <button className="btn_normal sizeL action_cart">
                  장바구니
                </button>
                <button className="btn_normal sizeL action_wish">
                  관심상품
                </button>
              </div>
              <div className="naver_btn">
                <div className="npay_store">
                  <div className="npay_btn_box">
                    <div className="npay_btn">
                      <div className="npay_txt">
                        <span className="npay_blind"></span>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <a href="#none" className="npay_btn_pay">
                                -
                              </a>
                            </td>
                            <td>
                              <a href="#none" className="npay_btn_zzim">
                                -
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="npay_event">
                      <p>
                        <strong>현장결제</strong>
                        <a href="#none">결제할 때 마다, 월 50번 포인트 뽑기!</a>
                      </p>
                      <a href="#none" className="npay_more prev">
                        -
                      </a>
                      <a href="#none" className="npay_more next">
                        -
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </style.InfoArea>
        </style.DetailArea>
      </style.SubTop>
    </>
  );
}

export default Top;
