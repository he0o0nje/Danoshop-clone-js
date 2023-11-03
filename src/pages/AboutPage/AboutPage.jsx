import TopBanner from "../../components/TopBanner/TopBanner";
import Header from "../../components/Header/Header";
import Top from "../../components/Sub/Top";
import ProdDetail from "../../components/Sub/ProdDetail";
import ProdReview from "../../components/Sub/ProdReview";
import ProdQnA from "../../components/Sub/ProdQnA";
import ProdInfo from "../../components/Sub/ProdInfo";
import Footer from "../../components/Footer/Footer";
import * as style from "./SubStyle";
import am7 from "../../data/product/7am.json";
import am10 from "../../data/product/10am.json";
import pm1 from "../../data/product/1pm.json";
import pm3 from "../../data/product/3pm.json";
import pm6 from "../../data/product/6pm.json";
import pm9 from "../../data/product/9pm.json";
import pm11 from "../../data/product/11pm.json";
import TryEat from "../../data/product/TryEat.json";
import { useParams } from "react-router-dom";

function AboutPage() {
  const { id } = useParams();
  const dummy = [
    ...am7,
    ...am10,
    ...pm1,
    ...pm3,
    ...pm6,
    ...pm9,
    ...pm11,
    ...TryEat,
  ];
  const product = dummy.find((item) => item.id === parseInt(id));

  if (!product) {
    return <style.Alert404>제품을 찾을 수 없습니다.</style.Alert404>;
  }

  window.scroll({ top: 0, behavior: "instant" });

  return (
    <>
      <TopBanner />
      <Header isAboutHeader={true} />
      <style.Sub>
        <Top />
        <style.DetailSec>
          <ProdDetail />
          <ProdReview />
          <ProdQnA />
          <ProdInfo />
        </style.DetailSec>
      </style.Sub>
      <Footer />
    </>
  );
}

export default AboutPage;
