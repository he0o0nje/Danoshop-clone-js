import styled from "styled-components";

export const Header = styled.div`
  max-width: 1680px;
  width: 92%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderTop = styled.div`
  background-color: yellow;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 3.125rem;
  position: relative;
  .top_list {
    display: flex;
  }
  li {
    font-size: 0.75rem;
    margin-left: 0.9375rem;
    font-family: "Noto Sans KR", Arial, sans-serif !important;
  }
`;

export const boardList = styled.div`
  margin-left: 0.9375rem;
  position: relative;
  .board_list {
    position: absolute;
    top: 1.375rem;
    right: -1.9375rem;
    padding: 0 20px;
    border: 1px solid #999;
    background: #fff;
  }
  li {
    margin: 15px 0;
  }
  a {
    display: block;
    font-size: 0.75rem;
    white-space: nowrap;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #666;
  .arrRgt {
    display: inline-block;
    width: 5px;
    height: 5px;
    margin-left: 5px;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    transform: rotate(-135deg);
  }
`;
