import styled from "styled-components";

export const DetailTab = styled.div`
  display: block;
  height: 6.4rem;
  margin: 0 auto 4rem;
  ul {
    clear: both;
    li {
      display: inline-block;
      width: 25%;
      vertical-align: top;
      border-top: 0.1rem solid #f8f8f8;
      border-bottom: 0.1rem solid #e0e0e0;
      &:first-child {
        border-left: 0.1rem solid #fff;
      }
      &:last-child {
        border-right: 0.1rem solid #fff;
      }
      a {
        display: block;
        height: 6rem;
        color: #9a9a9a;
        font-size: 1.6rem;
        line-height: 6rem;
        text-align: center;
        cursor: pointer;
        span {
          padding: 0 0.3rem;
          margin-left: 0.5rem;
          color: #fff;
          font-size: 1.1rem;
          line-height: 1.6rem;
          background-color: #9f9f9f;
          border-radius: 0.3rem;
        }
      }
    }
    .tab_open {
      border: 0.1rem solid #111;
      border-bottom: 0.2rem solid #fff;
      a {
        color: #1a1a1a;
      }
      span {
        background-color: #1a1a1a;
      }
    }
  }
`;
