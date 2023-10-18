import styled from "styled-components";

export const FirstBeneCont = styled.div`
  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 -1rem;
    li {
      flex: 0 1 33.3334%;
      margin: 0 0 3rem;
      max-width: 566px;
      box-sizing: border-box;
      padding: 0 1rem;
      a:hover {
        p:last-child {
          text-decoration: underline;
        }
      }
      .txt_area {
        width: 100%;
        margin-top: 3rem;
        p {
          font-size: 2.6rem;
          font-weight: 500;
          line-height: 1.2;
          color: #1a1a1a;
          &:last-child {
            font-size: 1.6rem;
            font-weight: 300;
            line-height: 1.5;
            color: #999;
            margin-top: 1.5rem;
          }
        }
      }
    }
  }
`;
