import * as style from "./ProductStyle";
import dummy from "../../data/main/7am.json";
import { Link, useNavigate } from "react-router-dom";

function Product() {
  return (
    <>
      <style.MainProdList>
        <ul className="prod_list">
          {dummy.map((item, index) => (
            <li className="product" key={index}>
              <style.MainProd {...(item.sticker ? { sale: true } : {})}>
                <div className="prod_thumb">
                  <Link to={`detail/${index}`}>
                    <img src={item.image} alt="" />
                  </Link>
                  <div className="icon_box">
                    <span>WISH</span>
                    <span>ADD</span>
                    <span>OPTION</span>
                  </div>
                  <span className="sale_sticker">{item.sticker}</span>
                </div>
                <div className="prod_desc">
                  <div className="name">
                    <Link to={`detail/${index}`}>{item.name}</Link>
                  </div>
                  <ul>
                    <li className="composition">
                      <strong>구성 : </strong>
                      <span>
                        <Link to={`detail/${index}`}>{item.composition}</Link>
                      </span>
                    </li>
                    <li className="price">
                      <span>
                        <Link to={`detail/${index}`}>{item.price}</Link>
                      </span>
                    </li>
                    <li className="sale_price">
                      <span>
                        <Link to={`detail/${index}`}>{item.sale_price}</Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </style.MainProd>
            </li>
          ))}
        </ul>
      </style.MainProdList>
    </>
  );
}

export default Product;
