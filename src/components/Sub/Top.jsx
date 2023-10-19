import * as style from "./TopStyle";

function Top() {
  return (
    <>
      <style.HeadCategory>
        <ol>
          <li>
            <a href="!">홈</a>
          </li>
          <li>
            <a href="!">다노절 이벤트</a>
          </li>
        </ol>
      </style.HeadCategory>
      <style.SubTop>
        <style.DetailArea>
          <style.ImgArea>
            <div className="prod_img">
              <a href="!">
                <img src="img/product/01big.png" alt="" />
              </a>
            </div>
            <div className="list_img">
              <ul>
                <li>
                  <img src="img/product/01small.png" alt="" />
                </li>
              </ul>
            </div>
          </style.ImgArea>
          <style.InfoArea></style.InfoArea>
        </style.DetailArea>
      </style.SubTop>
    </>
  );
}

export default Top;
