import * as style from "./MainStyle";
import TopBanner from "../../components/TopBanner/TopBanner";
import Header from "../../components/Header/Header";
import Banner from "../../components/Main/Banner";
import Am7 from "../../components/Main/Am7";
import Am10 from "../../components/Main/Am10";
import Pm1 from "../../components/Main/Pm1";
import Pm3 from "../../components/Main/Pm3";
import Pm6 from "../../components/Main/Pm6";
import Pm9 from "../../components/Main/Pm9";
import Pm11 from "../../components/Main/Pm11";
import TryEat from "../../components/Main/TryEat";
import BotBanner from "../../components/Main/BotBanner";
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
        <Pm1></Pm1>
        <Pm3></Pm3>
        <Pm6></Pm6>
        <Pm9></Pm9>
        <Pm11></Pm11>
        <TryEat></TryEat>
        <BotBanner></BotBanner>
      </style.Main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
