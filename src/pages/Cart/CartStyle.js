import styled from "styled-components";

export const Cart = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 22rem;
  position: relative;
  .section_path {
    max-width: 1420px;
    width: 92%;
    height: 3rem;
    line-height: 3rem;
    margin: 0 auto;
    padding-top: 2rem;
    ol {
      float: right;
      li {
        display: inline-block;
        font-size: 1.3rem;
        a {
          font-size: 1.2rem;
          color: #7d7d7d;
        }
        strong {
          font-weight: bold;
        }
        &:not(:first-child)::before {
          content: "/";
          display: inline-block;
          margin: 0 0.4rem 0 0.4rem;
          color: #7d7d7d;
          vertical-align: top;
        }
      }
    }
  }
`;
