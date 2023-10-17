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
    margin-bottom: 7rem;
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
  .icon_box {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 5%;
    z-index: 3;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: flex-end;
    transition: all 0.3s;
    span {
      display: block;
      position: relative;
      font-size: 1.1rem;
      font-weight: 500;
      color: #f87126;
      border: 0.1rem solid #f87126;
      border-radius: 1rem;
      box-sizing: border-box;
      cursor: pointer;
      margin: 0.3rem 0;
      width: 72px;
      height: auto;
      line-height: 1;
      padding: 1rem 1.5rem;
      background-color: rgba(255, 255, 255, 0.7);
    }
    span:hover {
      color: #fff;
      background-color: #f87126;
    }
  }
  .sale_sticker {
    font-size: 1.6rem;
    color: white;
    position: absolute;
    left: 3.5%;
    bottom: 3.5%;
    width: 6rem;
    height: 6rem;
    background-color: #f87126;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
