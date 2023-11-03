import styled from "styled-components";

export const Login = styled.div`
  width: 100%;
  zoom: 1;
  position: relative;
  margin: 0 auto;
  margin-top: 22rem;
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
  .login_form {
    margin: 4.5rem auto 0;
    text-align: center;
    .login {
      max-width: 40rem;
      margin: 0 auto;
      input {
        height: 4.8rem;
        margin-bottom: 0.8rem;
        border: 0.1rem solid #e3e3e3;
        width: 100%;
        line-height: 4.8rem;
        padding: 0 2rem;
        margin: 0 0 1rem;
        font-size: 1.3rem;
      }
    }
  }

  .security {
    max-width: 40rem;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    .login_security {
      display: flex;
      align-items: flex-end;
      margin: 1rem 0 2rem;
      font-size: 1.3rem;
      span {
        height: 2.4rem;
        position: relative;
        line-height: 1.7rem;
        input[type="checkbox"] {
          background: url("/img/header/checkbox_off.svg") no-repeat center;
          border: 0.1rem solid #d9d9d9;
          width: 2.4rem;
          height: 2.4rem;
          appearance: none;
          cursor: pointer;
        }
        input[type="checkbox"]:checked {
          background: url(/img/header/checkbox_on.svg) no-repeat center;
        }
      }
      label {
        margin-bottom: 0.3rem;
      }
    }
  }
  .login_btn {
    max-width: 40rem;
    margin: 0 auto;
    button {
      font-size: 1.6rem;
      height: 5.6rem;
      line-height: 1.8rem;
      font-weight: bold;
      background: #1a1a1a;
      color: #fff;
      width: 100%;
    }
  }
  .wrap_find {
    display: flex;
    justify-content: center;
    div {
      margin: 2rem 0 0;
      padding: 0 1rem;
      font-size: 1.4rem;
      &:last-child::before {
        content: "|";
        display: inline-block;
        margin: 0 0.9rem 0 -0.9rem;
        color: #ddd;
      }
    }
  }
  .login__util {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px auto 0;
    width: 100%;
    max-width: 400px;
    height: 232px;
    border: 1px solid #e3e3e3;
    box-sizing: border-box;
    text-align: center;
    div {
      font-size: 18px;
      font-weight: 700;
      color: #1a1a1a;
      &:nth-child(2) {
        margin: 8px 0 23px 0;
        font-size: 14px;
        font-weight: normal;
        color: #8a8a8a;
        line-height: 20px;
        margin-top: 13px;
      }
      &:nth-child(3) {
        width: 152px;
        height: 56px;
        margin: 0 auto;
        border: 1px solid #d6d6d6;
        box-sizing: border-box;
        button {
          display: block;
          width: 100%;
          height: 100%;
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 56px;
        }
      }
    }
  }
  .login_sns {
    max-width: 400px;
    margin: 40px auto 0 auto;
    .sns {
      margin-bottom: 24px;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
    }
    .wrap_sns_log {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      button {
        width: calc(50% - 4px);
        height: 56px;
        padding: 0 24px;
        margin-bottom: 8px;
        font-size: 14px;
        color: #1a1a1a;
        background-color: #fff;
        text-align: right;
        border: 1px solid #e3e3e3;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      .btnKakao {
        background: url("/img/icon/icon_sns_kakao.svg") no-repeat center left
          24px;
      }
      .btnNaver {
        background: url("/img/icon/icon_sns_naver.svg") no-repeat center left
          24px;
      }
      .btnApple {
        background: url("/img/icon/icon_sns_apple.svg") no-repeat center left
          24px;
      }
    }
  }
`;
