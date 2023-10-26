import styled from "styled-components";

export const ProdDetail = styled.div`
  p {
    text-align: center;
    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 1em;
    }
  }
  .detail_info {
    width: 100%;
    margin: 0 auto;
    .info_container {
      min-width: 32rem;
      max-width: 80rem;
      margin: 0 auto;
      padding: 2rem 0;
      font-family: "malgun Gothic", arial, sans-serif;
      font-size: 1.2rem;
      line-height: 1.2;
      letter-spacing: -0.1rem;
      color: #242424;
      .info_title {
        color: #303030;
        font-weight: bold;
        font-size: 2rem;
        text-align: center;
        padding-top: 9.3rem;
      }
      .information {
        margin-top: 4rem;
        position: relative;
        table {
          border-top: 0.1rem solid #cccccc;
          border-bottom: 0.1rem solid #cccccc;
          width: 100%;
          tbody {
            position: relative;
            th {
              padding: 0.8rem 0.5rem 1rem;
              width: 12rem;
              background-color: #f9f9fa;
              text-align: right;
              strong {
                line-height: 2.2rem;
                padding: 0 0.9rem;
                font-weight: bold;
              }
            }
            td {
              padding: 0.5rem;
              position: relative;
              span {
                padding: 0.2rem 0.5rem;
                border: 0.1rem solid transparent;
              }
            }
          }
        }
      }
    }
  }
`;
