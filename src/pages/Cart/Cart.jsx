import * as style from "./CartStyle.js";
import TopBanner from "../../components/TopBanner/TopBanner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import store, {
  deleteItem,
  sortName,
  addCount,
  decreaseCount,
} from "../../store.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  window.scroll({ top: 0, behavior: "instant" });

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSortByName = () => {
    dispatch(sortName());
  };

  function getImgExtension(image) {
    if (image.endsWith(".webp")) {
      return ".webp";
    } else if (image.endsWith(".png")) {
      return ".png";
    } else if (image.endsWith(".jpg")) {
      return ".jpg";
    }
    // 여기에 다른 이미지 확장자에 대한 처리를 추가할 수 있습니다.
    return ".jpg"; // 기본적으로 .jpg로 설정
  }

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
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>상품이미지</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경하기</th>
            </tr>
          </thead>
          <tbody>
            {state.cart.map((product, index) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <Link to={`/detail/${product.id}`}>
                    <img
                      src={`/img/main/1pm/0${product.id}${getImgExtension(
                        product.image
                      )}`}
                      alt=""
                    />
                  </Link>
                </td>

                <td>{product.name}</td>
                <td>{product.count}</td>
                <td>
                  <Button
                    onClick={() => {
                      // 상품 수량 증가 액션을 디스패치
                      dispatch(addCount(product.id));
                    }}
                    variant="outline-success"
                    style={{ marginRight: "10px" }}
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => {
                      // 상품 수량 감소 액션을 디스패치
                      dispatch(decreaseCount(product.id));
                    }}
                    variant="outline-warning"
                    style={{ marginRight: "10px" }}
                  >
                    -
                  </Button>
                  <Button
                    onClick={() => {
                      // 상품 삭제 액션을 디스패치
                      dispatch(deleteItem(product.id));
                    }}
                    variant="outline-danger"
                  >
                    상품삭제
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="outline-primary" onClick={handleSortByName}>
          이름순으로 정렬
        </Button>
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
