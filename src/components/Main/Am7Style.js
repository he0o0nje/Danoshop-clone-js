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
