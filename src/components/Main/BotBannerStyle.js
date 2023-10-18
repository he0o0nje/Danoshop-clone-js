import styled from "styled-components";

export const BotBanner = styled.div`
  background-color: rgb(255, 119, 61);
  margin: 0 auto 3rem;
  padding: 6rem 0;
  text-align: center;
  width: 92%;
  max-width: 1680px;
  .bot_banner_title {
    color: #fff;
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
  }
  .bot_banner_txt {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.5;
  }
  .bot_banner_link {
    margin-top: 3rem;
    a {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 300;
      border-bottom: 0.1rem solid #fff;
      padding-bottom: 0.3rem;
    }
  }
`;
