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
          font-size: 1.3rem;
          line-height: 1.3;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          h3 {
            font-size: 1.6rem;
            font-weight: bold;
            padding: 2rem 0;
          }
          &:after {
            content: "";
            position: absolute;
            top: 2.5rem;
            right: 0.5rem;
            overflow: hidden;
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border-left: 0.1rem solid #000;
            border-bottom: 0.1rem solid #000;
            transform: rotate(135deg);
            transition: 0.3s ease-out;
          }
        }
        .contents {
          .sub_title {
            background-color: #f9f9f9;
            font-size: 1.6rem;
            display: block;
            padding-left: 1.5rem;
            line-height: 5.5rem;
            font-weight: normal;
          }
          .order_list {
            position: relative;
            border-bottom: 0.1rem solid #e8e8e8;
            box-sizing: border-box;
            background: #fff;
            .prod_box {
              display: flex;
              flex-wrap: wrap;
              padding: 3.5rem 0;
              position: relative;
              input[type="checkbox"] {
                display: inline-block;
                margin-right: 1rem;
                width: 2.4rem;
                height: 2.4rem;
                border: 0.1rem solid #d9d9d9;
                background: url(/img/header/checkbox_off.svg) no-repeat center;
                appearance: none;
                cursor: pointer;
              }
              input[type="checkbox"]:checked {
                background: url(/img/header/checkbox_on.svg) no-repeat center;
              }
              .thumbnail {
                width: 12rem;
                height: auto;
                border: 0;
                overflow: hidden;
                margin-right: 1.5rem;
                img {
                  width: 100%;
                }
              }
              .description {
                margin-right: 20%;
                flex: 1;
                line-height: 1.8rem;
                font-size: 1.3rem;
                .name {
                  color: #000;
                }
                .price {
                  color: #000;
                  line-height: 2rem;
                  .discount {
                    color: #ef441f;
                  }
                }
                .delivery_info {
                  margin-top: 0.5rem;
                  li {
                    margin-bottom: 0.3rem;
                    font-size: 1.2rem;
                    color: #7d7d7d;
                  }
                }
              }
              .option_grp {
                margin: 3.5rem 0 0 3.7rem;
                padding: 1rem 1.6rem 1.3rem;
                width: 100%;
                background-color: #f9f9f9;
                font-size: 1.4rem;
                li {
                  margin: 0.5rem 0 0;
                  line-height: 2rem;
                  color: #7d7d7d;
                  .name {
                    position: relative;
                    padding-left: 1.5rem;
                    span {
                      display: inline-block;
                      margin-right: 1rem;
                      color: #000;
                    }
                    &:before {
                      content: "";
                      position: absolute;
                      width: 0.6rem;
                      height: 0.6rem;
                      top: 0.7rem;
                      left: 0;
                      border-left: 0.1rem solid #000;
                      border-bottom: 0.1rem solid #000;
                    }
                  }
                }
              }
              .quantity {
                padding-left: 3.7rem;
                display: flex;
                align-items: center;
                width: 100%;
                margin: 2.4rem 0;
                .label {
                  flex: 1;
                  font-size: 1.4rem;
                  color: #7a7a7a;
                }
                .change_btn {
                  width: 12.3rem;
                  padding: 0 4rem;
                  position: relative;
                  display: inline-block;
                  /* vertical-align: top; */
                  input[type="text"] {
                    width: 4.5rem;
                    height: 4rem;
                    line-height: 3.8rem;
                    margin-left: -0.1rem;
                    border: 0.1rem solid #e5e5e5;
                    text-align: center;
                    appearance: none;
                    font-size: 1.3rem;
                  }
                  button {
                    width: 4rem;
                    height: 4rem;
                    border: 0.1rem solid #e5e5e5;
                    overflow: hidden;
                    white-space: nowrap;
                    text-indent: 150%;
                    color: transparent;
                    font-size: 0.1rem;
                    line-height: 0.1rem;
                    &:before {
                      content: "";
                      position: absolute;
                      left: 1.4rem;
                      top: 50%;
                      width: 1.1rem;
                      height: 0.1rem;
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
                      width: 0.1rem;
                      height: 1.1rem;
                      margin-top: -0.5rem;
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
                  height: 4rem;
                  font-size: 1.4rem;
                  padding: 1.3rem 2rem;
                  margin-left: 0.6rem;
                  line-height: 1.2rem;
                  border: 0.1rem solid #d6d6d6;
                }
              }
              .sum_price {
                padding-top: 2.4rem;
                display: flex;
                align-items: center;
                width: 100%;
                margin: 0 0 2.4rem 3.7rem;
                border-top: 0.1rem solid #e8e8e8;
                font-size: 1.3rem;
                .label {
                  flex: 1;
                  font-size: 1.4rem;
                  color: #1a1a1a;
                  text-align: left;
                }
                strong {
                  font-weight: bold;
                  font-size: 1.6rem;
                }
              }
              .btn_group {
                position: static;
                width: 100%;
                display: flex;
                margin-left: 3.7rem;
                button {
                  flex: 1;
                  height: 5rem;
                  padding: 1.6rem 2rem;
                  font-weight: 400;
                  min-width: 8rem;
                  font-size: 1.4rem;
                  line-height: 1.8rem;
                  border: 0.1rem solid #d6d6d6;
                }
                button + button {
                  margin-left: 0.8rem;
                }
              }
            }
            .delete_btn {
              display: block;
              position: absolute;
              top: 3rem;
              right: -0.5rem;
              overflow: hidden;
              width: 3rem;
              height: 3rem;
              margin: 0 auto;
              font-size: 0.1rem;
              line-height: 0;
              color: transparent;
              white-space: nowrap;
              transform: rotate(45deg);
              &:before {
                content: "";
                position: absolute;
                top: 0.4rem;
                right: 1.4rem;
                width: 0.1rem;
                height: 2.1rem;
                background: #b5b5b5;
                transition: 0.3s ease-out;
              }
              &:after {
                content: "";
                position: absolute;
                top: 1.4rem;
                right: 0.4rem;
                width: 2.1rem;
                height: 0.1rem;
                background: #b5b5b5;
                transition: 0.3s ease-out;
              }
            }
          }
          .summary {
            margin-bottom: 4rem;
            font-size: 1.4rem;
            padding: 2.4rem;
            border-bottom: 0.1rem solid #e8e8e8;
            background: #f9f9f9;
            .title {
              margin-bottom: 1rem;
            }
            .contents {
              line-height: 2rem;
            }
            .total {
              display: block;
              margin-top: 0.5rem;
            }
          }
          .base_btn {
            float: left;
            text-align: left;
            button {
              height: 5rem;
              padding: 1.7rem 2rem;
              line-height: 1;
              font-size: 1.4rem;
              border: 0.1rem solid #d6d6d6;
            }
            button + button {
              margin-left: 1rem;
            }
          }
        }
      }
    }
    .cart_total {
      width: 36rem;
      margin-left: 4.7rem;
      position: relative;
      .total_summary {
        padding: 35px 24px;
        border: 1px solid #000;
        .summary_item {
          margin-bottom: 25px;
        }
        .shipping {
          margin-bottom: 25px;
        }
        .heading {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          h4 {
            font-size: 16px;
            color: #1a1a1a;
          }
          .data {
            font-size: 14px;
            color: #1a1a1a;
            strong {
              font-size: 16px;
              color: #1a1a1a;
            }
          }
        }
        .benefit_price {
          .item {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            color: #6d6d6d;
            .title {
              font-size: 16px;
              color: #1a1a1a;
              &:before {
                content: "";
                display: inline-block;
                width: 9px;
                height: 9px;
                margin: -4px 10px 0 0;
                vertical-align: top;
                border-left: 1px solid #dadada;
                border-bottom: 1px solid #dadada;
              }
            }
            .data {
              font-size: 14px;
              color: #1a1a1a;
            }
          }
        }
        .total {
          display: flex;
          justify-content: space-between;
          overflow: hidden;
          margin-top: 35px;
          padding-top: 35px;
          border-top: 1px solid #e8e8e8;
          .title {
            font-size: 16px;
            color: #1a1a1a;
            font-weight: bold;
          }
          .payment_price {
            color: #1a1a1a;
            strong {
              font-size: 16px;
              font-weight: bold;
            }
          }
        }
      }
      .order_item {
        .order_btn {
          margin: 20px 0;
          text-align: center;
          button {
            width: 100%;
            height: 56px;
            padding: 0;
            line-height: 56px;
            font-size: 16px;
          }
          button + button {
            margin-top: 10px;
          }
          .all {
            background: #1a1a1a;
            color: #fff;
          }
          .select {
            border: 1px solid #d6d6d6;
          }
        }
      }
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

export const NoneCart = styled.div`
  border-bottom: 0.1rem solid #e6e6e6;
  font-size: 1.6rem;
  color: #9a9a9a;
  padding: 1.6rem 0 6.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 2rem;
  }
`;
