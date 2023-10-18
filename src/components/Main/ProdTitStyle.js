import styled from "styled-components";

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

export const MoreProd = styled.div`
  text-align: center;
  margin: 0 auto;
  position: relative;
  width: 100%;
  a {
    background-color: #fff;
    display: inline-block;
    min-width: auto;
    padding: 1.5rem 6rem;
    border: 0.1rem solid #dadada;
    text-align: center;
    transition: all 400ms;
    font-size: 1.6rem;
    color: #1a1a1a;
    div {
      display: inline-block;
      font-size: 1.4rem;
      color: #b7b7b7;
      padding-left: 0.5rem;
      transition: all 400ms;
    }
  }
`;
