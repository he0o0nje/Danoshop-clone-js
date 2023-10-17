import * as style from "./MainStyle";
import TopBanner from "../../components/TopBanner/TopBanner";
import Header from "../../components/Header/Header";
import Banner from "../../components/Main/Banner";
import Am7 from "../../components/Main/Am7";
import Am10 from "../../components/Main/Am10";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <TopBanner></TopBanner>
      <Header></Header>
      <style.Main>
        <Banner></Banner>
        <Am7></Am7>
        <Am10></Am10>
      </style.Main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
