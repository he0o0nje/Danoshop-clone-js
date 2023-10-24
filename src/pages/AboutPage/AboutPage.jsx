import TopBanner from "../../components/TopBanner/TopBanner";
import Header from "../../components/Header/Header";
import Top from "../../components/Sub/Top";
import ProdDetail from "../../components/Sub/ProdDetail";
import ProdReview from "../../components/Sub/ProdReview";
import ProdInfo from "../../components/Sub/ProdInfo";
import Footer from "../../components/Footer/Footer";
import * as style from "./SubStyle";

function AboutPage() {
  return (
    <>
      <TopBanner></TopBanner>
      <Header></Header>
      <style.Sub>
        <Top></Top>
        <style.DetailSec>
          <ProdDetail></ProdDetail>
          <ProdReview></ProdReview>
          <ProdInfo></ProdInfo>
        </style.DetailSec>
      </style.Sub>
      <Footer></Footer>
    </>
  );
}

export default AboutPage;
