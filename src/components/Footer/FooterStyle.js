import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  margin: 6.25rem auto 0;
  background: #f8f8f8;
`;

export const FooterInner = styled.div`
  max-width: 1680px;
  width: 92%;
  margin: 0 auto;
  padding: 100px 0;
  color: #696969;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    flex-basis: 50%;
  }
`;

export const LogoWrap = styled.div`
  margin-bottom: 3.125rem;
  font-size: 2.5rem;
  img {
    max-width: 25rem;
    max-height: 3.75rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

export const BtnUtil = styled.div`
  margin-bottom: 3.125rem;
  ul {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  li {
    margin: 0 0 1.25rem 0.625rem;
  }
  a {
    display: block;
    font-size: 0.875rem;
    color: #696969;
  }
`;

export const Inquiry = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #696969;
  line-height: 1.6;
  div {
    flex-basis: 50%;
  }
  div + div {
    margin-top: 20px;
  }
`;

export const InqTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;
