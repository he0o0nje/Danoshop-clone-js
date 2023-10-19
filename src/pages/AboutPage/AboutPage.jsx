import TopBanner from "../../components/TopBanner/TopBanner";
import Header from "../../components/Header/Header";
import Top from "../../components/Sub/Top";
import Footer from "../../components/Footer/Footer";
import * as style from "./SubStyle";

function AboutPage() {
  return (
    <>
      <TopBanner></TopBanner>
      <Header></Header>
      <style.Sub>
        <Top></Top>
      </style.Sub>
      <Footer></Footer>
    </>
  );
}

export default AboutPage;
