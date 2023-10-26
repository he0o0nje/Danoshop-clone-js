import * as style from "./ProductStyle";
import dummy from "../../data/main/1pm.json";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <style.MainProdList small>
        <ul className="prod_list">
          {dummy.map((item, index) => (
            <li className="product" key={index}>
              <style.MainProd {...(item.sticker ? { sale: true } : {})}>
                <div className="prod_thumb">
                  <Link to={`detail/${item.id}`}>
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
                    <Link to={`detail/${item.id}`}>{item.name}</Link>
                  </div>
                  <ul>
                    <li className="composition">
                      <strong>구성 : </strong>
                      <span>{item.composition}</span>
                    </li>
                    <li className="price">
                      <span>{item.price}</span>
                    </li>
                    <li className="sale_price">
                      <span>{item.sale_price}</span>
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
