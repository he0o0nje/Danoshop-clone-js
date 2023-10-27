import * as style from "./ProdDetailStyle";
import DetailTab01 from "./DetailTab01";
import am7 from "../../data/sub/7am.json";
import am10 from "../../data/sub/10am.json";
import pm1 from "../../data/sub/1pm.json";
import pm3 from "../../data/sub/3pm.json";
import pm6 from "../../data/sub/6pm.json";
import pm9 from "../../data/sub/9pm.json";
import pm11 from "../../data/sub/11pm.json";
import Try from "../../data/sub/Try.json";
import { useParams } from "react-router-dom";

function ProdDetail() {
  const { id } = useParams();
  const dummy = [
    ...am7,
    ...am10,
    ...pm1,
    ...pm3,
    ...pm6,
    ...pm9,
    ...pm11,
    ...Try,
  ];
  const product = dummy.find((item) => item.id === parseInt(id));

  return (
    <>
      <DetailTab01></DetailTab01>
      <style.ProdDetail
        {...(product.detail[0].info_name ? { show: true } : {})}
      >
        <div>
          <p>
            {product.detail[0].image_set.map((item, index) => (
              <div>
                <img key={index} src={item.image} alt="" />
              </div>
            ))}
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
                      <span>{product.detail[0].info_name}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <strong>보관방법</strong>
                    </th>
                    <td>
                      <div>
                        <span>{product.detail[0].keep}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <strong>용량</strong>
                    </th>
                    <td>
                      <div>
                        <span>{product.detail[0].volume}</span>
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
