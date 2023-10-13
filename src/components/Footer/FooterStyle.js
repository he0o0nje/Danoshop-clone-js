import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  margin: 10rem auto 0;
  background: #f8f8f8;
`;

export const FooterInner = styled.div`
  max-width: 1680px;
  width: 92%;
  margin: 0 auto;
  padding: 10rem 0;
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
  margin-bottom: 5rem;
  font-size: 4rem;
  img {
    max-width: 40rem;
    max-height: 6rem;
  }
`;

export const BtnUtil = styled.div`
  margin-bottom: 5rem;
  ul {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  li {
    margin: 0 0 1rem 2rem;
  }
  a {
    display: block;
    font-size: 1.4rem;
    color: #696969;
  }
`;

export const Inquiry = styled.div`
  font-size: 1.4rem;
  color: #696969;
  line-height: 1.6;
  div {
    flex-basis: 50%;
  }
  strong {
    font-weight: 500;
    padding-right: 1rem;
  }
  .inq_wrap span {
    padding-right: 1rem;
  }
  .inq_wrap + .inq_wrap {
    margin-top: 2rem;
  }
  .cs_list {
    margin-top: 1rem;
  }
`;

export const InqTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 550;
  margin-bottom: 1rem;
`;
