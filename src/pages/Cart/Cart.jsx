import * as style from "./CartStyle.js";
import { NaverButton } from "../../components/Sub/TopStyle.js";
import TopBanner from "../../components/TopBanner/TopBanner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  decreaseCount,
  deleteItem,
  calculateItemPrice,
  totalDiscount,
  totalPrice,
  finalPrice,
  updateQuantity,
} from "../../store";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  // 체크박스 전체선택/해제
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // items 기반으로 checkboxes 상태 초기화
    // items 배열이 변경될 때마다 checkboxes 상태 초기화
    const initialCheckboxes = {};
    items.forEach((item) => {
      initialCheckboxes[item.id] = false;
    });
    setCheckboxes(initialCheckboxes);
  }, [items]);

  const handleAllCheck = () => {
    const updatedCheckboxes = { ...checkboxes };
    for (const key in updatedCheckboxes) {
      updatedCheckboxes[key] = !selectAll;
    }
    setCheckboxes(updatedCheckboxes);
    setSelectAll(!selectAll);
  };

  const handleSingleCheck = (id) => {
    const updatedSelectedItems = [...selectedItems];

    if (checkboxes[id]) {
      // 확인란이 선택된 경우, 선택한 항목을 selectedItems에서 제거
      const index = updatedSelectedItems.indexOf(id);
      if (index !== -1) {
        updatedSelectedItems.splice(index, 1);
      }
    } else {
      // 확인란이 선택 해제된 경우, 항목을 selectedItems에 추가
      updatedSelectedItems.push(id);
    }

    setSelectedItems(updatedSelectedItems);

    // 확인란 상태를 업데이트
    const updatedCheckboxes = { ...checkboxes };
    updatedCheckboxes[id] = !updatedCheckboxes[id];
    setCheckboxes(updatedCheckboxes);
  };

  const handleDeleteSelected = () => {
    if (selectAll) {
      // 전체 선택된 경우, 모든 항목 삭제
      items.forEach((item) => {
        dispatch(deleteItem(item.id));
      });
    } else {
      // 선택한 항목만 삭제
      selectedItems.forEach((itemId) => {
        dispatch(deleteItem(itemId));
      });
    }

    // 선택한 항목을 지우고 확인란을 재설정
    setSelectedItems([]);
    const initialCheckboxes = {};
    items.forEach((item) => {
      initialCheckboxes[item.id] = false;
    });
    setCheckboxes(initialCheckboxes);
  };

  // 가격 계산 디스패치
  useEffect(() => {
    dispatch(calculateItemPrice({ items }));
    dispatch(totalDiscount({ items }));
    dispatch(totalPrice({ items }));
    dispatch(finalPrice({ items }));
  }, [dispatch, items]);
  const calculateItemPriceValue = useSelector(
    (state) => state.calculatePrice.calculateItemPrice
  );
  const totalDiscountValue = useSelector(
    (state) => state.calculatePrice.totalDiscount
  );
  const totalPriceValue = useSelector(
    (state) => state.calculatePrice.totalPrice
  );
  const finalPriceValue = useSelector(
    (state) => state.calculatePrice.finalPrice
  );

  return (
    <>
      <TopBanner />
      <Header isAboutHeader={true} />
      <style.Cart>
        <div className="section_path">
          <ol>
            <li>
              <a href="/">홈</a>
            </li>
            <li>
              <strong>장바구니</strong>
            </li>
          </ol>
        </div>
        <div className="title_area">
          <h2>장바구니</h2>
        </div>
        <div className="step_area">
          <ol className="step">
            <li className="selected">1. 장바구니</li>
            <li>2. 주문서작성</li>
            <li>3. 주문완료</li>
          </ol>
        </div>
        <style.CartContainer>
          {items.length === 0 ? (
            <style.NoneCart>
              <img src="/img/icon/none_cart.svg" alt="" />
              <p>장바구니가 비어 있습니다.</p>
            </style.NoneCart>
          ) : (
            <div className="cart">
              <div className="cart_prod">
                <div className="inner">
                  <div className="title">
                    <h3>장바구니 상품</h3>
                  </div>
                  <div className="contents">
                    <div className="sub_title">일반상품(1)</div>
                    {items.map((product, index) => (
                      <div className="order_list" key={index}>
                        <div className="prod_box">
                          <input
                            type="checkbox"
                            className="check"
                            checked={checkboxes[product.id]}
                            onChange={() => handleSingleCheck(product.id)}
                          />{" "}
                          &nbsp;
                          <div className="thumbnail">
                            <Link to={`/detail/${product.id}`}>
                              <img
                                src={product.img ? product.img : product.image}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="description">
                            <strong>
                              <Link
                                to={`/detail/${product.id}`}
                                className="name"
                              >
                                {product.name}
                              </Link>
                            </strong>
                            <ul className="price">
                              <li>
                                <strong>
                                  {product.price.replace(/원/, "")}
                                </strong>
                                원
                              </li>
                              <li>
                                <span className="discount">
                                  -
                                  {product.sale_price
                                    ? parseInt(
                                        product.price.replace(/,/g, "")
                                      ) -
                                      parseInt(
                                        product.sale_price.replace(/,/g, "")
                                      )
                                    : 0}
                                </span>
                                원
                              </li>
                            </ul>
                            <ul className="delivery_info">
                              <li>
                                배송 : <span>3,500원</span> [조건] / 기본배송
                              </li>
                            </ul>
                          </div>
                          <ul className="option_grp">
                            <li>
                              <div className="name">
                                <span>
                                  [옵션:{" "}
                                  {product.options
                                    ? product.options
                                    : product.option}
                                  ]
                                </span>
                              </div>
                            </li>
                          </ul>
                          <div className="quantity">
                            <span
                              className="label"
                              onChange={(e) => {
                                const newQuantity = e.target.value; // 사용자가 입력한 새로운 수량
                                // 유효성 검사: 숫자인지 확인
                                if (!isNaN(newQuantity)) {
                                  // 숫자로 변환
                                  const quantityAsNumber = parseInt(
                                    newQuantity,
                                    10
                                  );
                                  // 숫자로 변환한 값을 사용하여 product.quantity를 업데이트하는 액션을 디스패치하거나
                                  // 컴포넌트 상태를 업데이트할 수 있습니다.
                                  // 예를 들어 Redux를 사용한다면:
                                  dispatch(
                                    updateQuantity(product.id, quantityAsNumber)
                                  );
                                }
                              }}
                            >
                              수량
                            </span>
                            <div>
                              <span className="change_btn">
                                <input type="text" value={product.quantity} />
                                <button
                                  className="up"
                                  onClick={() => {
                                    // 상품 수량 증가 액션을 디스패치
                                    dispatch(addCount(product.id));
                                  }}
                                >
                                  +
                                </button>
                                <button
                                  className="down"
                                  onClick={() => {
                                    // 상품 수량 감소 액션을 디스패치
                                    dispatch(decreaseCount(product.id));
                                  }}
                                >
                                  -
                                </button>
                              </span>
                              <button
                                className="modify"
                                onClick={() => {
                                  const newQuantity = parseInt(
                                    product.quantity,
                                    10
                                  );
                                  if (!isNaN(newQuantity)) {
                                    dispatch(
                                      updateQuantity(product.id, newQuantity)
                                    );
                                  }
                                }}
                              >
                                변경
                              </button>
                            </div>
                          </div>
                          <div className="sum_price">
                            <span className="label">주문금액</span>
                            <strong>{calculateItemPriceValue[index]}</strong>원
                          </div>
                          <div className="btn_group">
                            <button>관심상품</button>
                            <button>주문하기</button>
                          </div>
                        </div>
                        <button
                          className="delete_btn"
                          onClick={() => {
                            // 상품 삭제 액션을 디스패치
                            dispatch(deleteItem(product.id));
                          }}
                        >
                          삭제
                        </button>
                      </div>
                    ))}
                    <div className="summary">
                      <div class="title">
                        <h5>[기본배송]</h5>
                      </div>
                      <div className="contents">
                        상품구매금액 <strong>{totalPriceValue}</strong> + 배송비
                        <strong>
                          {" "}
                          {totalPriceValue >= 70000 ? "0 (무료)" : "3,500"}
                        </strong>
                        <span className="sale">
                          {" "}
                          - 상품할인금액 {totalDiscountValue}
                        </span>
                      </div>
                      <span class="total">
                        합계 : <strong>{finalPriceValue}</strong>원
                      </span>
                    </div>
                    <div className="base_btn">
                      <button onClick={handleAllCheck}>전체선택</button>
                      <button onClick={handleDeleteSelected}>선택삭제</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart_total">
                <div className="total_summary">
                  <div className="summary_item">
                    <div class="heading">
                      <h4 class="title">총 상품금액</h4>
                      <div class="data">
                        <strong>
                          <span>{totalPriceValue}</span>
                        </strong>
                        원
                      </div>
                    </div>
                  </div>
                  <div className="shipping">
                    <div class="heading">
                      <h4 class="title">총 배송비</h4>
                      <div class="data">
                        <strong>
                          <span>
                            {totalPriceValue >= 70000 ? "0" : "3,500"}
                          </span>
                        </strong>
                        원
                      </div>
                    </div>
                  </div>
                  {totalDiscountValue > 0 && (
                    <div className="benefit_price">
                      <div class="heading">
                        <h4 class="title">총 할인금액</h4>
                        <div class="data">
                          <strong>
                            <span>{totalDiscountValue.toLocaleString()}</span>
                          </strong>
                          원
                        </div>
                      </div>
                      <div className="list">
                        <div class="item">
                          <h5 class="title">기간할인</h5>
                          <div class="data">3000원</div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="total">
                    <h3 class="title">결제예정금액</h3>
                    <div className="payment_price">
                      <strong>{finalPriceValue}</strong>원
                    </div>
                  </div>
                </div>
                <div className="order_item">
                  <div className="order_btn">
                    <button className="all">전체상품주문</button>
                    <button className="select">선택상품주문</button>
                  </div>
                  <NaverButton>
                    <div className="npay_store" style={{ width: "66%" }}>
                      <div className="npay_btn_box">
                        <div className="npay_btn">
                          <div className="npay_txt">
                            <span className="npay_blind"></span>
                          </div>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <a
                                    href="#none"
                                    className="npay_btn_pay"
                                    style={{ width: "14rem" }}
                                  >
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
                            <a href="#none">
                              결제할 때 마다, 월 50번 포인트 뽑기!
                            </a>
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
                  </NaverButton>
                </div>
              </div>
            </div>
          )}
        </style.CartContainer>
        <style.Help>
          <h3>이용안내</h3>
          <div class="inner">
            <h4>장바구니 이용안내</h4>
            <ul>
              <li>
                선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을
                누르시면 됩니다.
              </li>
              <li>
                [쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.
              </li>
              <li>
                장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나
                관심상품으로 등록하실 수 있습니다.
              </li>
              <li>
                파일첨부 옵션은 동일상품을 장바구니에 추가할 경우 마지막에
                업로드 한 파일로 교체됩니다.
              </li>
            </ul>
            <h4>무이자할부 이용안내</h4>
            <ul>
              <li>
                상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여
                [주문하기] 버튼을 눌러 주문/결제 하시면 됩니다.
              </li>
              <li>
                [전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든
                상품에 대한 주문/결제가 이루어집니다.
              </li>
              <li>
                단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을
                받으실 수 없습니다.
              </li>
              <li>
                무이자할부 상품은 장바구니에서 별도 무이자할부 상품 영역에
                표시되어, 무이자할부 상품 기준으로 배송비가 표시됩니다.<br></br>
                실제 배송비는 함께 주문하는 상품에 따라 적용되오니 주문서 하단의
                배송비 정보를 참고해주시기 바랍니다.
              </li>
            </ul>
          </div>
        </style.Help>
      </style.Cart>
      <Footer />
    </>
  );
}

export default Cart;
