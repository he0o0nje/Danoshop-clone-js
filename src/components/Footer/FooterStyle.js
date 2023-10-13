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
  margin-bottom: 4.7rem;
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
    font-weight: 600;
    padding-right: 1rem;
  }
  .inq_wrap span {
    padding-right: 1.2rem;
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
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const BasicInfo = styled.div`
  text-align: right;
`;

export const BInfoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 50rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2;
  margin-left: auto;
  div {
    flex-basis: auto;
  }
`;

export const BInfoCont = styled.div`
  margin-left: 1rem;
  .field {
    font-weight: 600;
  }
  .value {
    margin-left: 0.5rem;
  }
`;
