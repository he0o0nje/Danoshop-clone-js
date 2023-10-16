import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 22rem;
  position: relative;
`;

export const MainBanner = styled.div`
  width: 100%;
  height: 69.8rem;
  margin: 0 auto 12rem;
  img {
    width: 100%;
  }
`;

export const MainCont = styled.div`
  width: 92%;
  max-width: 1680px;
  margin: 0 auto 2.7rem;
`;

export const MainTit = styled.div`
  margin-bottom: 3.2rem;
  text-align: left;
  p {
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.25;
    color: #222222;
    word-spacing: 0.2rem;
    &:last-child {
      font-size: 1.5rem;
      font-weight: 350;
      line-height: 1;
      color: #a2a2a2;
      word-spacing: 0.1rem;
      margin-top: 1.6rem;
    }
  }
`;

export const MainProdList = styled.div`
  margin-top: 2.2rem;
  ul {
    margin: 0 -1rem 0;
    text-align: left;
    font-size: 0;
    line-height: 0;
  }
  li {
    display: inline-block;
    width: 25%;
    margin-left: 7rem;
    color: #757575;
    vertical-align: top;
  }
`;

export const MainProd = styled.div`
  margin: 0 1rem;
  .prod_thumb {
    position: relative;
    margin-bottom: 1rem;
    text-align: center;
    width: auto;
    white-space: normal;
    img {
      width: 100%;
      max-width: 100%;
      vertical-align: middle;
    }
  }
`;
