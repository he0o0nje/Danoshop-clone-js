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

export const CartContainer = styled.div`
  max-width: 1420px;
  width: 92%;
  margin: 0 auto;
  .cart {
    display: flex;
    .cart_prod {
      flex: 1;
      .inner {
        position: relative;
        .title {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          font-size: 13px;
          line-height: 1.3;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          h3 {
            font-size: 16px;
            font-weight: bold;
            padding: 20px 0;
          }
          &:after {
            content: "";
            position: absolute;
            top: 25px;
            right: 5px;
            overflow: hidden;
            display: inline-block;
            width: 10px;
            height: 10px;
            border-left: 1px solid #000;
            border-bottom: 1px solid #000;
            transform: rotate(135deg);
            transition: 0.3s ease-out;
          }
        }
        .contents {
          .sub_title {
            background-color: #f9f9f9;
            font-size: 16px;
            display: block;
            padding: 0 0 0 15px;
            line-height: 55px;
            font-weight: normal;
          }
        }
        .order_list {
          position: relative;
          border-bottom: 1px solid #e8e8e8;
          box-sizing: border-box;
          background: #fff;
          .prod_box {
            display: flex;
            flex-wrap: wrap;
            padding: 35px 0;
            position: relative;
            input[type="checkbox"] {
              display: inline-block;
              margin-right: 10px;
              width: 24px;
              height: 24px;
              border: 1px solid #d9d9d9;
              background: url(/img/header/checkbox_off.svg) no-repeat center;
              appearance: none;
              cursor: pointer;
            }
            .thumbnail {
              width: 120px;
              height: auto;
              border: 0;
              overflow: hidden;
              margin-right: 15px;
              img {
                width: 100%;
              }
            }
            .description {
              margin-right: 20%;
              flex: 1;
              line-height: 18px;
              font-size: 13px;
              .name {
                color: #000;
              }
              .price {
                color: #000;
                line-height: 20px;
                .discount {
                  color: #ef441f;
                }
              }
              .delivery_info {
                margin-top: 5px;
                li {
                  margin: 0 0 3px;
                  font-size: 12px;
                  color: #7d7d7d;
                }
              }
            }
            .option_grp {
              margin: 35px 0 0 37px;
              padding: 10px 16px 13px;
              width: 100%;
              background-color: #f9f9f9;
              font-size: 14px;
              li {
                margin: 5px 0 0;
                line-height: 20px;
                color: #7d7d7d;
                .name {
                  position: relative;
                  padding-left: 15px;
                  span {
                    display: inline-block;
                    margin-right: 10px;
                    color: #000;
                  }
                  &:before {
                    content: "";
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    top: 7px;
                    left: 0;
                    border-left: 1px solid #000;
                    border-bottom: 1px solid #000;
                  }
                }
              }
            }
            .quantity {
              padding: 0 0 0 37px;
              display: flex;
              align-items: center;
              width: 100%;
              margin: 24px 0;
              .label {
                flex: 1;
                font-size: 14px;
                color: #7a7a7a;
              }
              .change_btn {
                width: 123px;
                padding: 0 40px;
                position: relative;
                display: inline-block;
                /* vertical-align: top; */
                input[type="text"] {
                  width: 45px;
                  height: 40px;
                  line-height: 38px;
                  margin-left: -1px;
                  border: 1px solid #e5e5e5;
                  text-align: center;
                  appearance: none;
                  font-size: 13px;
                }
                button {
                  width: 40px;
                  height: 40px;
                  border: 1px solid #e5e5e5;
                  overflow: hidden;
                  white-space: nowrap;
                  text-indent: 150%;
                  color: transparent;
                  font-size: 1px;
                  line-height: 1px;
                  &:before {
                    content: "";
                    position: absolute;
                    left: 14px;
                    top: 50%;
                    width: 11px;
                    height: 1px;
                    background: #000;
                  }
                }
                .up {
                  position: absolute;
                  right: 0;
                  top: 0;
                  &:after {
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 1px;
                    height: 11px;
                    margin-top: -5px;
                    background: #000;
                  }
                }
                .down {
                  position: absolute;
                  left: 0;
                  top: 0;
                }
              }
              .modify {
                height: 40px;
                font-size: 14px;
                padding: 13px 20px;
                margin-left: 6px;
                line-height: 12px;
                border: 1px solid #d6d6d6;
              }
            }
            .sum_price {
              padding: 24px 0 0 0;
              display: flex;
              align-items: center;
              width: 100%;
              margin: 0 0 24px 37px;
              border-top: 1px solid #e8e8e8;
              font-size: 13px;
              .label {
                flex: 1;
                font-size: 14px;
                color: #1a1a1a;
                text-align: left;
              }
              strong {
                font-weight: bold;
                font-size: 16px;
              }
            }
            .btn_group {
              position: static;
              width: 100%;
              display: flex;
              margin-left: 37px;
              button {
                flex: 1;
                height: 50px;
                padding: 16px 20px;
                font-weight: 400;
                min-width: 80px;
                font-size: 14px;
                line-height: 18px;
                border: 1px solid #d6d6d6;
              }
              button + button {
                margin-left: 8px;
              }
            }
          }
          .delete_btn {
            display: block;
            position: absolute;
            top: 30px;
            right: -5px;
            overflow: hidden;
            width: 30px;
            height: 30px;
            margin: 0 auto;
            font-size: 1px;
            line-height: 0;
            color: transparent;
            white-space: nowrap;
            transform: rotate(45deg);
            &:before {
              content: "";
              position: absolute;
              top: 4px;
              right: 14px;
              width: 1px;
              height: 21px;
              background: #b5b5b5;
              transition: 0.3s ease-out;
            }
            &:after {
              content: "";
              position: absolute;
              top: 14px;
              right: 4px;
              width: 21px;
              height: 1px;
              background: #b5b5b5;
              transition: 0.3s ease-out;
            }
          }
        }
        .summary {
          margin: 0 0 40px 0;
          font-size: 14px;
          padding: 24px;
          border-bottom: 1px solid #e8e8e8;
          background: #f9f9f9;
          .title {
            margin-bottom: 10px;
          }
          .contents {
            line-height: 20px;
          }
          .total {
            display: block;
            margin-top: 5px;
          }
        }
      }
    }
    .cart_total {
      width: 36rem;
      margin-left: 4.7rem;
      position: relative;
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
