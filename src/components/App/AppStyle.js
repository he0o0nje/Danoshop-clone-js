import styled from "styled-components";

export const ShadowLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
`;
