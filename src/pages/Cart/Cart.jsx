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

  const smallProductStyle = {
    border: "1px solid #ddd",
    width: "100px",
    height: "80px",
    cursor: "pointer",
  };

  const textVerticalAlign = {
    verticalAlign: "middle",
    textAlign: "center",
  };

  const handleSortByName = () => {
    dispatch(sortName());
  };

  function getImgExtension(imageUrl) {
    if (imageUrl.endsWith(".webp")) {
      return ".webp";
    } else if (imageUrl.endsWith(".png")) {
      return ".png";
    } else if (imageUrl.endsWith(".jpg")) {
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
        <h5 style={{ padding: "50px" }}>
          {state.user.name} {state.user.age}의 장바구니
        </h5>
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
                <td style={textVerticalAlign}>{product.id}</td>
                <td>
                  <Link to={`/detail/${product.id}`}>
                    <img
                      src={`/img/main/1pm/0${product.id}${getImgExtension(
                        product.image
                      )}`}
                      alt=""
                      style={smallProductStyle}
                    />
                  </Link>
                </td>

                <td style={textVerticalAlign}>{product.name}</td>
                <td style={textVerticalAlign}>{product.count}</td>
                <td style={textVerticalAlign}>
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
      </style.Cart>
      <Footer />
    </>
  );
}

export default Cart;
