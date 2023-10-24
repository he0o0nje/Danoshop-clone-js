import styled from "styled-components";

export const ProdReview = styled.div`
  padding-top: 15rem;
`;

export const ReviewWrap = styled.div`
  width: 100%;
  margin: 3.2rem 0;
  padding: 0 3.2rem 4.4rem;
  font-size: 1.2rem;
  background: transparent;
  font-family: "돋움", Dotum, Helvetica, "Apple SD Gothic Neo", Sans-serif;
  .header {
    display: flex;
    border-bottom: 0.2rem solid #14161a;
    padding: 1.6rem 0;
    .title_wrap {
      flex-grow: 1;
      line-height: 3rem;
      font-size: 2rem;
      color: #14161a;
      .title {
        margin-right: 0.4rem;
      }
      .review_count {
        letter-spacing: 0.05rem;
        font-weight: bold;
      }
    }
    .all_review {
      display: flex;
      height: 2rem;
      margin-top: 0.3rem;
      a {
        white-space: nowrap;
        font-size: 1.6rem;
        color: #707680;
        padding: 0 0 1.6rem 1.2rem;
      }
    }
  }
  .review_summary {
    padding: 32px 0;
    border-bottom: 1px solid #ebeff5;
    display: flex;
    .left_content {
      width: 400px;
      min-height: 122px;
      border-right: solid 1px #d8dde5;
      text-align: center;
      .icon {
        width: 48px;
        height: 48px;
        margin: 12px 0;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        margin-left: 4px;
        font-size: 48px;
        font-weight: bold;
        line-height: 72px;
        color: #14161a;
        vertical-align: bottom;
      }
      .score_percentage {
        margin-top: 8px;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #14161a;
        b {
          font-weight: bold;
        }
      }
      .create_review_btn {
        margin-top: 24px;
        background-color: #14161a;
        color: #fff;
        width: 158px;
        height: 44px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;
