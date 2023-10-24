import * as style from "./ProdInfoStyle";
import DetailTab04 from "./DetailTab04";

function ProdInfo() {
  return (
    <>
      <style.ProdInfo>
        <DetailTab04></DetailTab04>
        <style.DetailGuide>
          <div className="info_box">
            <div className="title">
              <h2>PAYMENT INFO</h2>
            </div>
            <div className="contents">
              <div class="info">
                고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도
                있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등
                정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는
                취소할 수 있습니다. &nbsp; <br></br> <br></br> 무통장 입금은
                상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운
                은행에서 직접 입금하시면 됩니다. &nbsp;<br></br> 주문시
                입력한&nbsp;입금자명과 실제입금자의 성명이 반드시 일치하여야
                하며, 7일 이내로 입금을 하셔야 하며&nbsp;입금되지 않은 주문은
                자동취소 됩니다. <br></br>{" "}
              </div>
            </div>
          </div>
          <div className="info_box">
            <div class="title">
              <h2>DELIVERY INFO</h2>
            </div>
            <div class="contents">
              <ul class="info">
                <li>배송 방법 : 택배</li>
                <li>배송 지역 : 전국지역</li>
                <li>배송 비용 : 3,500원</li>
                <li>배송 기간 : 3일 ~ 7일</li>
                <li>
                  배송 안내 : - 산간벽지나 도서지방은 별도의 추가금액을
                  지불하셔야 하는 경우가 있습니다.<br></br> 고객님께서 주문하신
                  상품은 입금 확인후 배송해 드립니다. 다만, 상품종류에 따라서
                  상품의 배송이 다소 지연될 수 있습니다.<br></br>
                </li>
              </ul>
            </div>
          </div>
          <div className="info_box">
            <div class="title">
              <h2>EXCHANGE INFO</h2>
            </div>
            <div class="contents">
              <div class="info">
                <strong>교환 및 반품 주소</strong>
                <br></br>&nbsp;- [17405] 경기도 이천시 부발읍 황무로 1780
                한진택배 이천택배지점<br></br>&nbsp;<br></br>
                <strong>교환 및 반품이 가능한 경우</strong>
                <br></br>&nbsp;-&nbsp;계약내용에 관한 서면을 받은
                날부터&nbsp;7일.&nbsp;단,&nbsp;그 서면을 받은 때보다 재화등의
                공급이 늦게 이루어진 경우에는 재화등을 공급받거나 재화등의
                공급이 시작된 날부터&nbsp;7일 이내<br></br>&nbsp;
                -&nbsp;공급받으신 상품 및 용역의 내용이 표시.광고 내용과
                다르거나 계약내용과 다르게 이행된 때에는 당해 재화 등을 공급받은
                날 부터&nbsp;3월이내,&nbsp;그사실을 알게 된 날 또는 알 수 있었던
                날부터&nbsp;30일이내<br></br>&nbsp;<br></br>
                <strong>교환 및 반품이 불가능한 경우</strong>
                <br></br>&nbsp;-&nbsp;이용자에게 책임 있는 사유로 재화 등이 멸실
                또는 훼손된 경우(다만,&nbsp;재화 등의 내용을 확인하기 위하여
                포장 등을 훼손한 경우에는 청약철회를 할 수 있습니다)<br></br>
                &nbsp; -&nbsp;이용자의 사용 또는 일부 소비에 의하여 재화 등의
                가치가 현저히 감소한 경우<br></br>&nbsp; -&nbsp;시간의 경과에
                의하여 재판매가 곤란할 정도로 재화등의 가치가 현저히 감소한 경우
                <br></br>&nbsp; -&nbsp;복제가 가능한 재화등의 포장을 훼손한 경우
                <br></br>&nbsp; -&nbsp;개별 주문 생산되는 재화 등 청약철회시
                판매자에게 회복할 수 없는 피해가 예상되어 소비자의 사전 동의를
                얻은 경우<br></br>&nbsp; -&nbsp;디지털 콘텐츠의 제공이 개시된
                경우, (다만,&nbsp;가분적 용역 또는 가분적 디지털콘텐츠로 구성된
                계약의 경우 제공이 개시되지 아니한 부분은 청약철회를 할 수
                있습니다.)<br></br>&nbsp;<br></br>※ 고객님의 마음이 바뀌어
                교환,&nbsp;반품을 하실 경우 상품반송 비용은 고객님께서
                부담하셔야 합니다.<br></br>&nbsp;(색상 교환,&nbsp;사이즈 교환 등
                포함)<br></br>{" "}
              </div>
            </div>
          </div>
          <div className="info_box">
            <div class="title">
              <h2>SERVICE INFO</h2>
            </div>
            <div class="contents">
              <div class="info"></div>
            </div>
          </div>
        </style.DetailGuide>
      </style.ProdInfo>
    </>
  );
}

export default ProdInfo;
