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
  .title_area {
    max-width: 1420px;
    width: 92%;
    margin: 8.3rem auto 4rem;
    text-align: center;
    h2 {
      font-weight: 500;
      font-size: 3.2rem;
      color: #1a1a1a;
    }
  }
  .step_area {
    max-width: 1420px;
    width: 92%;
    margin: 5rem auto 5rem;
    text-align: center;
    li {
      display: inline-block;
      font-size: 1.4rem;
      color: #8a8a8a;
      &:not(:last-child):after {
        content: "";
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        vertical-align: middle;
        border-left: 0.1rem solid #e0e0e0;
        border-bottom: 0.1rem solid #e0e0e0;
        transform: rotate(-135deg);
        margin: -0.2rem 3.2rem 0;
      }
    }
    .selected {
      color: #1a1a1a;
    }
  }
`;

export const Help = styled.div`
  max-width: 1420px;
  width: 92%;
  margin: 5rem auto 0;
  line-height: 1.8rem;
  h3 {
    display: block;
    margin: 0 0 2rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: #000;
  }
  .inner {
    padding: 2rem;
    border: 0.1rem solid #e5e5e5;
    border-top: 0.2rem solid #1a1a1a;
    h4 {
      margin: 2.2rem 0 -0.4rem;
      color: #000;
      font-size: 1.2rem;
      font-weight: normal;
      &:first-child {
        margin-top: 0;
      }
    }
    ul {
      margin-top: 1.5rem;
      li {
        padding-left: 1.2rem;
        color: #6d6d6d;
        font-size: 1.2rem;
        line-height: 2.1rem;
        &::before {
          content: "";
          display: inline-block;
          width: 0.3rem;
          height: 0.3rem;
          margin: 0.7rem 0.9rem 0 -1.2rem;
          vertical-align: top;
          border-radius: 50%;
          background: #6d6d6d;
        }
      }
    }
  }
`;
