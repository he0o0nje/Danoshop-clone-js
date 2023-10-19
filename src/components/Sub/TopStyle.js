import styled from "styled-components";

export const HeadCategory = styled.div`
  max-width: 1420px;
  width: 92%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 3rem;
  height: 3rem;
  line-height: 3rem;
  ol {
    float: right;
    li {
      display: inline-block;
      &:not(:first-child)::before {
        content: "/";
        display: inline-block;
        margin: 0 0.5rem 0 0.4rem;
        color: #7d7d7d;
        vertical-align: top;
      }
      a {
        font-size: 1.2rem;
        color: #7d7d7d;
      }
    }
  }
`;

export const SubTop = styled.div`
  max-width: 1420px;
  width: 92%;
  margin: 0 auto 8rem;
  padding-top: 3rem;
`;

export const DetailArea = styled.div`
  position: relative;
  font-size: 0;
  line-height: 0;
`;

export const ImgArea = styled.div`
  display: inline-block;
  width: calc(100% - 70rem);
  .prod_img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
  }
  .list_img {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    margin-top: 2.4rem;
    ul {
      margin: 0 -0.6rem;
      li {
        width: 9.4rem;
        display: inline-block;
        margin: 0 0.6rem;
        font-size: 1.2rem;
        line-height: 1.4rem;
        img {
          max-width: 100%;
          cursor: pointer;
        }
      }
    }
  }
`;

export const InfoArea = styled.div`
  width: 60rem;
  margin-left: 10rem;
  display: inline-block;
  font-size: 1.3rem;
  line-height: 1;
  vertical-align: top;
`;
