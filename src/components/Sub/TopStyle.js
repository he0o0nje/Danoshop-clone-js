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
  letter-spacing: 0.017rem;
  width: 60rem;
  margin-left: 10rem;
  display: inline-block;
  font-size: 1.3rem;
  line-height: 1;
  vertical-align: top;
  .heading_area {
    border-bottom: 0.1rem solid #e5e5e5;
    padding-bottom: 2.5rem;
    h1 {
      font-size: 2.8rem;
      display: inline-block;
      line-height: 3rem;
      vertical-align: middle;
      margin-top: 1.5rem;
    }
  }
  table {
    margin-top: 2rem;
    table-layout: fixed;
    line-height: 1.8rem;
    width: 100%;
  }
  .sale_info {
    th {
      width: 11.1rem;
      padding: 0.7rem 0.5rem 0.6rem 0;
    }
    td {
      padding: 0.7rem 0.6rem 0.8rem 0;
    }
    span {
      font-size: 1.4rem;
      color: #555;
    }
    .price {
      font-size: 1.6rem;
      color: #000;
      font-weight: bold;
      strong {
        text-decoration: line-through;
      }
    }
    .sale_price {
      font-size: 1.8rem;
      color: #000;
      font-weight: bold;
      .percent {
        font-size: 1.8rem;
        color: #f96b06;
        margin-left: 0.5rem;
      }
    }
  }
  .option {
    tbody {
      border-top: 0.1rem solid #e5e5e5;
      tr {
        width: 100%;
        display: revert;
        th {
          padding-top: 2.2rem;
          width: 11.1rem;
          vertical-align: top;
        }
        td {
          padding: 1.3rem 0;
          select {
            width: 100%;
            max-width: 100%;
            height: 4rem;
            padding: 0 3rem 0 1.5rem;
            font-size: 1.3rem;
            border: 0.1rem solid #e0e0e0;
            box-sizing: border-box;
            background: #fff url("img/product/ico_select.png") no-repeat right
              1rem center;
            background-size: 1.4rem 0.8rem;
            appearance: none;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .guide_area {
    margin: 2.5rem 0 1rem;
    .info {
      float: left;
    }
  }
  .total_products {
    margin-top: 5.9rem;
    table {
      margin: 0;
      tr {
        border-top: 0.1rem solid #e5e5e5;
      }
      td {
        padding: 3rem 0;
        line-height: 1.8rem;
        vertical-align: middle;
        word-wrap: break-word;
        word-break: break-all;
        &:first-child {
          padding-right: 1rem;
        }
        &:last-child {
          width: 10rem;
        }
        .product {
          span {
            color: #7d7d7d;
            line-height: 1.8rem;
          }
        }
        .quantity {
          display: inline-block;
          position: relative;
          width: 10.3rem;
          padding: 0 3rem;
          input {
            width: 4.5rem;
            height: 3rem;
            line-height: 2.8rem;
            margin-left: -0.1rem;
            padding: 0;
            border: 0.1rem solid #e5e5e5;
            text-align: center;
          }
          a {
            width: 3rem;
            height: 3rem;
            border: 0.1rem solid #e5e5e5;
            box-sizing: border-box;
            overflow: hidden;
            white-space: nowrap;
            text-indent: 150%;
            color: transparent;
            font-size: 0.1rem;
            line-height: 0.1rem;
            &::before {
              content: "";
              position: absolute;
              left: 1rem;
              top: 50%;
              width: 0.9rem;
              height: 0.1rem;
              background: #000;
            }
          }
          .up {
            position: absolute;
            top: 0;
            right: 0;
            &::after {
              content: "";
              position: absolute;
              left: 50%;
              top: 50%;
              width: 0.1rem;
              height: 0.9rem;
              margin: -0.4rem 0 0 0;
              background: #000;
            }
          }
          .down {
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .delete {
          display: inline-block;
          margin: 0.8rem 0 0 0.5rem;
          vertical-align: top;
        }
        .right {
          font-weight: bold;
          text-align: right;
          float: right;
        }
      }
    }
  }
  .total_price {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    border-top: 1px solid #e5e5e5;
    vertical-align: middle;
    background: #fff;
    padding: 27px 0 26px;
    .qty {
      color: #7d7d7d;
    }
    .total {
      color: #7d7d7d;
      font-size: 1.3rem;
      strong {
        color: #000;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }
  .delivery_info {
    display: flex;
    font-size: 1.4rem;
    margin-bottom: 2rem;
    .title {
      width: 10.6rem;
      padding: 0.8rem 0;
    }
    .info_value {
      padding: 0.8rem 0;
      color: #555;
      .type {
        margin-bottom: 1.2rem;
      }
      .value {
        margin-bottom: 0.8rem;
        .highlight {
          font-weight: bold;
          color: #ff8934;
        }
      }
    }
  }
`;
