import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addSelectedOption, removeSelectedOption } from "../../store";
import * as style from "./TopStyle";
import am7 from "../../data/product/7am.json";
import am10 from "../../data/product/10am.json";
import pm1 from "../../data/product/1pm.json";
import pm3 from "../../data/product/3pm.json";
import pm6 from "../../data/product/6pm.json";

function Top() {
  const { id } = useParams();
  const dummy = [
    ...am7,
    ...am10,
    ...pm1,
    ...pm3,
    ...pm6,
    // ...pm9,
    // ...pm11,
    // ...Try,
  ];
  const product = dummy.find((item) => item.id === parseInt(id));

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [optionQuantities, setOptionQuantities] = useState([]);

  const handleProductSelect = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === "") {
      // 옵션 선택이 해제된 경우 선택목록에서 제거
      setSelectedOptions(
        selectedOptions.filter((option) => option !== selectedValue)
      );
      dispatch(removeSelectedOption(selectedValue));

      const updatedOptionQuantities = optionQuantities.filter(
        (entry) => entry.option !== selectedValue
      );
      setOptionQuantities(updatedOptionQuantities);
    } else {
      // 이미 선택한 옵션이 아니면 추가
      if (!selectedOptions.includes(selectedValue)) {
        setSelectedOptions([...selectedOptions, selectedValue]);
        dispatch(addSelectedOption(selectedValue));

        // 옵션 수량을 객체로 만들어 배열에 추가
        const optionQuantityEntry = {
          option: selectedValue,
          quantity:
            optionQuantities.find((entry) => entry.option === selectedValue)
              ?.quantity || 1,
        };
        setOptionQuantities([...optionQuantities, optionQuantityEntry]);
      } else {
        alert("이미 선택한 옵션입니다.");
      }
    }
  };

  const handleProductDelete = (selectedOption) => {
    setSelectedOptions(
      selectedOptions.filter((option) => option !== selectedOption)
    );
    const updatedOptionQuantities = optionQuantities.filter(
      (entry) => entry.option !== selectedOption
    );
    setOptionQuantities(updatedOptionQuantities);
  };

  const handleQuantityChange = (event, selectedOption) => {
    const newQuantity = parseInt(event.target.value);
    const updatedOptionQuantities = optionQuantities.map((entry) => {
      if (entry.option === selectedOption) {
        entry.quantity = newQuantity;
      }
      return entry;
    });
    setOptionQuantities(updatedOptionQuantities);
  };

  // 옵션별 가격을 저장하는 객체
  const optionPrices = {};

  product.top[0].select.forEach((option) => {
    const priceWithoutWon = option.sale_price || option.price;
    const optionPrice = parseInt(priceWithoutWon.replace(/,/g, ""));
    optionPrices[option.option] = optionPrice;
  });

  const calculateSubTotal = (option) => {
    const optionQuantityEntry = optionQuantities.find(
      (entry) => entry.option === option
    );
    if (optionQuantityEntry) {
      const optionPrice = optionPrices[option];
      return optionPrice * optionQuantityEntry.quantity;
    }
    return 0;
  };

  const totalQuantity = optionQuantities.reduce(
    (total, entry) => total + entry.quantity,
    0
  );

  const totalPrice = selectedOptions.reduce((total, option) => {
    const subTotal = calculateSubTotal(option);
    return total + subTotal;
  }, 0);

  let dispatch = useDispatch();

  const item = useSelector((state) => state.detail); // Redux 스토어에서 제품 세부 정보 가져오기

  function SendToCart(item) {
    optionQuantities.forEach((entry) => {
      const cartItem = {
        id: product.id,
        img: product.image,
        name: product.name,
        price: product.price,
        sale_price: product.sale_price,
        option: entry.option,
        quantity: entry.quantity,
      };

      dispatch(addItem(cartItem));
    });
  }

  const [CartAlert, setCartAlert] = useState(false);
  function activeCartAlert() {
    setCartAlert(!CartAlert);
  }

  console.log("옵션", selectedOptions);
  console.log("선택옵션", optionQuantities);
  console.log("수량", optionQuantities[selectedOptions]);

  return (
    <>
      <style.HeadCategory>
        <ol>
          <li>
            <Link to="">홈</Link>
          </li>
          <li>
            <Link to="">다노절 이벤트</Link>
          </li>
        </ol>
      </style.HeadCategory>
      <style.SubTop>
        <style.DetailArea>
          <style.ImgArea>
            <div className="prod_img">
              <Link to="">
                <img src={product.top[0].product_imgB} alt="" />
              </Link>
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
                    <select name="" id="" onChange={handleProductSelect}>
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
            {selectedOptions.map((selectedOption, index) => (
              <div className="total_products" key={index}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p className="product">
                          {product.top[0].header}
                          <br></br> - <span>{selectedOption}</span>
                        </p>
                      </td>
                      <td>
                        <span className="quantity">
                          <input
                            type="number"
                            // value={optionQuantities[selectedOption] || 0}
                            value={
                              optionQuantities.find(
                                (entry) => entry.option === selectedOption
                              )?.quantity || 0
                            }
                            onChange={(e) =>
                              handleQuantityChange(e, selectedOption)
                            }
                          />
                          <button
                            className="up"
                            // onClick={() =>
                            //   handleQuantityChange(
                            //     {
                            //       target: {
                            //         value:
                            //           (optionQuantities[selectedOption] || 0) +
                            //           1,
                            //       },
                            //     },
                            //     selectedOption
                            //   )
                            // }
                            onClick={() =>
                              handleQuantityChange(
                                {
                                  target: {
                                    value:
                                      (optionQuantities.find(
                                        (entry) =>
                                          entry.option === selectedOption
                                      )?.quantity || 0) + 1,
                                  },
                                },
                                selectedOption
                              )
                            }
                          >
                            +
                          </button>
                          <button
                            className="down"
                            // onClick={() =>
                            //   handleQuantityChange(
                            //     {
                            //       target: {
                            //         value:
                            //           (optionQuantities[selectedOption] || 0) -
                            //             1 >=
                            //           1
                            //             ? (optionQuantities[selectedOption] ||
                            //                 0) - 1
                            //             : 1,
                            //       },
                            //     },
                            //     selectedOption
                            //   )
                            // }
                            onClick={() =>
                              handleQuantityChange(
                                {
                                  target: {
                                    value: Math.max(
                                      (optionQuantities.find(
                                        (entry) =>
                                          entry.option === selectedOption
                                      )?.quantity || 0) - 1,
                                      1
                                    ),
                                  },
                                },
                                selectedOption
                              )
                            }
                          >
                            -
                          </button>
                        </span>
                        <button
                          className="delete"
                          onClick={() => handleProductDelete(selectedOption)}
                        >
                          <img src="/img/icon/ico_product_delete.svg" alt="" />
                        </button>
                      </td>
                      <td>
                        <span className="right">
                          <span>{calculateSubTotal(selectedOption)} 원</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
            <div className="total_price">
              <strong className="title">
                TOTAL <span className="qty">(QUANTITY)</span>
              </strong>
              <span className="total">
                <strong>
                  <em>{totalPrice}원</em>
                </strong>{" "}
                ({totalQuantity}개)
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
                <button className="btn_submit sizeL" onClick={activeCartAlert}>
                  구매하기
                </button>
                <button
                  className="btn_normal sizeL action_cart"
                  onClick={activeCartAlert}
                >
                  장바구니
                </button>
                <button className="btn_normal sizeL action_wish">
                  관심상품
                </button>
              </div>
              <style.NaverButton>
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
              </style.NaverButton>
            </div>
          </style.InfoArea>
        </style.DetailArea>
      </style.SubTop>
      {CartAlert && (
        <style.AlertWrap>
          <div className="alert">
            <div className="content">
              <p>
                장바구니에 상품이<br></br>정상적으로 담겼습니다.
              </p>
            </div>
            <div className="submit_btn">
              <button className="continue" onClick={activeCartAlert}>
                계속 쇼핑하기
              </button>
              <Link
                to="/cart"
                className="cart"
                onClick={() => SendToCart(item)}
              >
                장바구니 이동
              </Link>
            </div>
            <button className="close_btn" onClick={activeCartAlert}>
              닫기
            </button>
          </div>
        </style.AlertWrap>
      )}
    </>
  );
}

export default Top;
