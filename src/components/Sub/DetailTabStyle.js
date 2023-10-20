import styled from "styled-components";

export const DetailTab = styled.div`
  display: block;
  height: 64px;
  margin: 0 auto 40px;
  ul {
    clear: both;
    li {
      display: inline-block;
      width: 25%;
      vertical-align: top;
      border-top: 1px solid #f8f8f8;
      border-bottom: 1px solid #e0e0e0;
      &:first-child {
        border-left: 1px solid #fff;
      }
      &:last-child {
        border-right: 1px solid #fff;
      }
      a {
        display: block;
        height: 60px;
        color: #9a9a9a;
        font-size: 16px;
        line-height: 60px;
        text-align: center;
        span {
          padding: 0 3px;
          margin-left: 5px;
          color: #fff;
          font-size: 11px;
          line-height: 16px;
          background-color: #9f9f9f;
          border-radius: 3px;
        }
      }
    }
    .tab_open {
      border: 1px solid #111;
      border-bottom: 2px solid #fff;
      a {
        color: #1a1a1a;
      }
    }
  }
`;
