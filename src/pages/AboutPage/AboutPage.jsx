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

function AboutPage() {
  const product = dummy.find((item) => item.id);

  if (!product) {
    return <style.Alert404>제품을 찾을 수 없습니다.</style.Alert404>;
  }

  const isAboutHeader = true;

  window.scroll({ top: 0, behavior: "instant" });

  return (
    <>
      <TopBanner></TopBanner>
      <Header isAboutHeader={isAboutHeader}></Header>
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
