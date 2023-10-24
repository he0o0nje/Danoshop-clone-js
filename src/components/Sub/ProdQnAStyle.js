import styled from "styled-components";

export const ProdQnA = styled.div`
  padding-top: 15rem;
`;

export const BoardTit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  h2 {
    font-size: 2rem;
  }
  .QnA_btn_wrap {
    a {
      display: inline-block;
      padding: 1.2rem 2rem;
      height: 4rem;
      width: 11rem;
      font-size: 1.3rem;
      border: 0.1rem solid #d6d6d6;
      text-align: center;
      color: #000;
      background-color: #fff;
    }
    a + a {
      margin-left: 0.9rem;
    }
  }
`;

export const Contents = styled.div`
  font-size: 1.3rem;
  table {
    width: 100%;
    text-align: center;
    th {
      padding: 1.5rem 1rem 1.6rem;
      background-color: #f6f6f6;
      height: 2.9rem;
      line-height: 2.2rem;
    }
    td {
      padding: 1.5rem 1rem 1.6rem;
      border-bottom: 1px solid #e5e5e5;
      height: 2.9rem;
      line-height: 2.2rem;
      vertical-align: middle;
      .comment {
        display: inline-block;
        margin-right: 5rem;
        vertical-align: middle;
        color: #ef441f;
      }
    }
    .subject {
      padding: 0 2rem;
    }
    .left {
      text-align: left;
    }
  }
`;
