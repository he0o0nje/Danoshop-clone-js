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
import { useScroll } from "../../components/Sub/ScrollContext";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function AboutPage() {
  const { id } = useParams();
  // const { selectedTab } = useScroll();
  // const sectionRefs = [useRef(), useRef(), useRef(), useRef()];

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

  // useEffect(() => {
  //   // 선택한 탭의 위치로 스크롤
  //   window.scrollTo({
  //     top: sectionRefs[selectedTab].current.offsetTop,
  //     behavior: "smooth",
  //   });
  // }, [selectedTab]);

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
          <ProdDetail
          // ref={sectionRefs[1]}
          />
          <ProdReview
          // ref={sectionRefs[2]}
          />
          <ProdQnA
          // ref={sectionRefs[3]}
          />
          <ProdInfo
          // ref={sectionRefs[4]}
          />
        </style.DetailSec>
      </style.Sub>
      <Footer />
    </>
  );
}

export default AboutPage;
