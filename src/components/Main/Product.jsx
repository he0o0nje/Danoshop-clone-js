import * as style from "./ProductStyle";
import dummy from "../../data/7am.json";

function Product() {
  return (
    <>
      <style.MainProdList>
        <ul className="prod_list">
          {dummy.map((item, index) => (
            <li className="product" key={index}>
              <style.MainProd sale>
                <div className="prod_thumb">
                  <a href="!">
                    <img src={item.image} alt="" />
                  </a>
                  <div className="icon_box">
                    <span>WISH</span>
                    <span>ADD</span>
                    <span>OPTION</span>
                  </div>
                  <span className="sale_sticker">{item.sticker}</span>
                </div>
                <div className="prod_desc">
                  <div className="name">
                    <a href="!">{item.name}</a>
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
