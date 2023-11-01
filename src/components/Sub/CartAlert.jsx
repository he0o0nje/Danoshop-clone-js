import * as style from "./CartAlertStyle";

function CartAlert() {
  return (
    <>
      <style.AlertWrap>
        <div className="alert">
          <div class="content">
            <p>
              장바구니에 상품이<br></br>정상적으로 담겼습니다.
            </p>
          </div>
          <div class="submit_btn">
            <button class="continue" onclick="">
              계속 쇼핑하기
            </button>
            <button class="cart">장바구니 이동</button>
          </div>
          <button class="close_btn" onclick="">
            닫기
          </button>
        </div>
      </style.AlertWrap>
    </>
  );
}

export default CartAlert;
