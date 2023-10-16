import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  position: ${(props) => (props.isFixed ? "fixed" : "absolute")};
  top: ${(props) => (props.isFixed ? "-5rem" : "auto")};
  border-bottom: ${(props) =>
    props.isFixed ? "1px solid #e8e8e8" : "1px solid #fff"};
`;

export const Header = styled.div`
  max-width: 1680px;
  width: 92%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 5rem;
  position: relative;
  .top_list {
    display: flex;
  }
  li {
    font-size: 1.3rem;
    margin-left: 1.5rem;
  }
`;

export const boardList = styled.div`
  position: relative;
  .board_list {
    display: none;
    position: absolute;
    top: 2.2rem;
    right: -3.1rem;
    padding: 0 2rem;
    border: 0.1rem solid #999;
    background: #fff;
  }
  .board_list li {
    margin: 1.5rem 0;
  }
  .board_list a {
    font-size: 1.2rem;
    white-space: nowrap;
  }
`;

export const Link = styled.a`
  color: #666;
  display: flex;
  align-items: center;
  .arrRgt {
    width: 0.6rem;
    height: 0.6rem;
    margin-left: 0.5rem;
    border-left: 0.1rem solid #000;
    border-bottom: 0.1rem solid #000;
    transform: rotate(-135deg);
  }
`;

export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-top: 3rem;
`;

export const LogoWrap = styled.div`
  order: 1;
  flex-basis: 50%;
  flex-shrink: 0;
  height: 6rem;
  img {
    max-width: 40rem;
    max-height: 6rem;
  }
`;

export const MypageWrap = styled.div`
  order: 2;
  display: flex;
  justify-content: flex-end;
  flex-basis: 50%;
  flex-shrink: 0;
  margin-left: auto;
  a {
    margin-left: 3rem;
  }
`;

export const BotCategory = styled.div`
  order: 3;
  display: flex;
  width: 100%;
  ul {
    display: flex;
    height: 8rem;
  }
  li {
    padding-right: 5rem;
  }
  a {
    font-size: 1.6rem;
    line-height: 7.8rem;
    color: #1a1a1a;
  }
`;
