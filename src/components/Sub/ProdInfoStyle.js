import styled from "styled-components";

export const ProdInfo = styled.div`
  padding-top: 15rem;
`;

export const DetailGuide = styled.div`
  display: flex;
  flex-wrap: wrap;
  .info_box + .info_box {
    margin-top: 3rem;
  }
  .info_box {
    width: 50%;
    .title {
      font-size: 2rem;
      h2 {
        font-size: 1.8rem;
        padding: 2.5rem 0;
      }
    }
    .contents {
      display: block;
      .info {
        padding-right: 4.5rem;
        color: #6d6d6d;
        line-height: 2.2rem;
        font-size: 1.3rem;
        word-spacing: 0.08rem;
        strong {
          font-weight: bold;
        }
      }
    }
  }
`;
