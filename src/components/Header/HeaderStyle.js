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
  }
`;

export const boardList = styled.div`
  position: relative;
  .board_list {
    display: none;
    position: absolute;
    top: 1.375rem;
    right: -1.9375rem;
    padding: 0 1.25rem;
    border: 1px solid #999;
    background: #fff;
  }
  .board_list li {
    margin: 15px 0;
  }
  .board_list a {
    font-size: 0.6875rem;
    white-space: nowrap;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #666;
  display: flex;
  align-items: center;
  .arrRgt {
    width: 0.3125rem;
    height: 0.3125rem;
    margin-left: 0.3125rem;
    border-left: 0.0625rem solid #000;
    border-bottom: 0.0625rem solid #000;
    transform: rotate(-135deg);
  }
`;

export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-top: 1.875rem;
`;

export const LogoWrap = styled.div`
  order: 1;
  flex-basis: 50%;
  flex-shrink: 0;
  height: 3.75rem;
  img {
    max-width: 25rem;
    max-height: 3.75rem;
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
    margin-left: 1.875rem;
  }
`;

export const TopCategory = styled.div`
  order: 3;
  display: flex;
  width: 100%;
  ul {
    display: flex;
    height: 5rem;
  }
  li {
    padding-right: 3.125rem;
  }
  a {
    font-size: 1rem;
    line-height: 4.875rem;
    color: #1a1a1a;
    letter-spacing: -0.0563rem;
  }
`;
