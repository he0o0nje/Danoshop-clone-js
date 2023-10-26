import styled from "styled-components";

export const TopBanner = styled.div`
  position: relative;
  background-color: #000;
  width: 100%;
  padding: 2rem 0;
`;

export const TopBanInner = styled.div`
  max-width: 1680px;
  width: 92%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const TopBanTxt = styled.div`
  text-align: left;
  flex: 1;
  a {
    color: #fff;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.6;
    word-spacing: 0.1rem;
  }
`;

export const TopBanClose = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  color: #fff;
  line-height: 1;
  display: flex;
  align-items: center;
  margin-left: 3rem;
  input {
    width: 1.5rem;
    height: 1.5rem;
    background: url("/img/header/checkbox_off.svg") no-repeat center;
    background-size: 1.5rem;
    border: 0.1rem solid #d9d9d9;
    cursor: pointer;
    appearance: none;
  }
  input[type="checkbox"]:checked {
    background: url("/img/header/checkbox_on.svg") no-repeat center;
    background-size: 1.5rem;
    transition: none;
  }
  label {
    margin: 0 1.5rem 0 0.5rem;
    cursor: pointer;
  }
  i {
    cursor: pointer;
    display: block;
    position: relative;
    overflow: hidden;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto;
    font-size: 0.1rem;
    line-height: 0;
    color: transparent;
    white-space: nowrap;
    transform: rotate(45deg);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0.7rem;
      width: 0.1rem;
      height: 1.5rem;
      background: #fff;
      transition: 0.3s ease-out;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0.7rem;
      right: 0;
      width: 1.5rem;
      height: 0.1rem;
      background: #fff;
      transition: 0.3s ease-out;
    }
  }
`;
