import styled from "styled-components";

export const AlertWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  .alert {
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0;
    transform: translateY(calc(-50% + 0.5rem));
    width: 36rem;
    z-index: 1001;
    border: 0.1rem solid #000;
    border-radius: 0;
    background: #fff;
    .content {
      padding: 4.5rem 0 2.5rem;
      text-align: center;
      font-size: 1.3rem;
      line-height: 2.2rem;
      min-height: 9rem;
      p {
        font-weight: bold;
        color: #2e2e2e;
      }
    }
    .submit_btn {
      margin: 2rem 0;
      text-align: center;
      button {
        height: 5rem;
        padding: 0 1rem;
        line-height: 5rem;
        font-size: 1.4rem;
      }
      button + button {
        margin-left: 0.8rem;
      }
      .continue {
        border: 0.1rem solid #d6d6d6;
      }
      .cart {
        background: #1a1a1a;
        color: #fff;
      }
    }
    .close_btn {
      position: absolute;
      right: 0.7rem;
      top: 2rem;
      padding: 1rem;
      cursor: pointer;
      display: block;
      width: 2rem;
      height: 2rem;
      font-size: 0.1rem;
      line-height: 0;
      color: transparent;
      white-space: nowrap;
      transform: rotate(45deg);
      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 1rem;
        width: 0.1rem;
        height: 2.1rem;
        margin: 1rem 1rem 0 0;
        background: #000;
        transition: 0.3s ease-out;
      }
      &::after {
        content: "";
        position: absolute;
        top: 1rem;
        right: 0;
        width: 2.1rem;
        height: 0.1rem;
        margin: 1rem 1rem 0 0;
        background: #000;
        transition: 0.3s ease-out;
      }
    }
  }
`;
