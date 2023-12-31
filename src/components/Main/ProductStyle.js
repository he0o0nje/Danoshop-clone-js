import styled from "styled-components";

export const MainProdList = styled.div`
  margin-top: 2.2rem;
  .prod_list {
    margin: 0 -1rem 0;
    text-align: left;
    font-size: 0;
    line-height: 0;
    .product {
      display: inline-block;
      width: ${(props) => (props.small ? "20%" : "25%")};
      margin-bottom: 7rem;
      color: #757575;
      vertical-align: top;
    }
  }
`;

export const MainProd = styled.div`
  margin: 0 1rem;
  .prod_thumb {
    position: relative;
    margin-bottom: 1rem;
    text-align: center;
    width: auto;
    white-space: normal;
    img {
      width: 100%;
      max-width: 100%;
      vertical-align: middle;
    }
  }
  .icon_box {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: flex-end;
    transition: all 0.3s;
    opacity: 0;
    span {
      display: block;
      position: relative;
      font-size: 1.1rem;
      font-weight: 500;
      color: #f87126;
      border: 0.1rem solid #f87126;
      border-radius: 1rem;
      box-sizing: border-box;
      cursor: pointer;
      margin: 0.3rem 0;
      width: 7.2rem;
      height: auto;
      line-height: 1;
      padding: 1rem 1.5rem;
      background-color: rgba(255, 255, 255, 0.7);
    }
    span:hover {
      color: #fff;
      background-color: #f87126;
    }
  }
  &:hover .icon_box {
    opacity: 1;
    right: 5%;
  }
  .sale_sticker {
    font-size: 1.6rem;
    color: white;
    position: absolute;
    left: 3.5%;
    bottom: 3.5%;
    width: 6rem;
    height: 6rem;
    background-color: #f87126;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${(props) => (props.sale ? 1 : 0)};
  }
  .prod_desc {
    margin-top: 2rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-align: left;
    white-space: normal;
    .name {
      line-height: 1.2;
      display: block;
      text-align: left;
      font-weight: normal;
      a {
        font-size: 1.4rem;
        color: #222;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    ul {
      margin-top: 0.5rem;
      li {
        margin-bottom: 0.5rem;
        text-align: left;
        line-height: 1.9rem;
        font-size: 1.2rem;
        color: #696969;
        strong {
          font-weight: bold;
        }
      }
      .price {
        display: inline-block;
        margin-top: 1rem;
        span {
          font-size: 1.8rem;
          color: #000000;
          font-weight: bold;
          text-decoration: ${(props) => (props.sale ? "line-through" : "none")};
        }
      }
      .sale_price {
        display: ${(props) => (props.sale ? "inline-block" : "none")};
        span {
          font-size: 1.6rem;
          color: #ff8934;
          font-weight: bold;
          margin-left: 0.5rem;
        }
      }
    }
  }
  .ico_soldout {
    margin-top: 0.5rem;
    img {
      margin-right: 0.4rem;
      max-height: 2.3rem;
    }
  }
`;
