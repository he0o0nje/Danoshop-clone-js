import TopBanner from "../../components/TopBanner/TopBanner";
import Header from "../../components/Header/Header";
import Top from "../../components/Sub/Top";
import ProdDetail from "../../components/Sub/ProdDetail";
import ProdReview from "../../components/Sub/ProdReview";
import ProdQnA from "../../components/Sub/ProdQnA";
import ProdInfo from "../../components/Sub/ProdInfo";
import Footer from "../../components/Footer/Footer";
import * as style from "./SubStyle";
import dummy from "../../data/sub/7am.json";
import { useParams } from "react-router-dom";

function AboutPage() {
  const { id } = useParams();

  const product = dummy.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>제품을 찾을 수 없습니다.</div>;
  }
  return (
    <>
      <TopBanner></TopBanner>
      <Header></Header>
      <style.Sub>
        <Top></Top>
        <style.DetailSec>
          <ProdDetail></ProdDetail>
          <ProdReview></ProdReview>
          <ProdQnA></ProdQnA>
          <ProdInfo></ProdInfo>
        </style.DetailSec>
      </style.Sub>
      <Footer></Footer>
    </>
  );
}

export default AboutPage;
