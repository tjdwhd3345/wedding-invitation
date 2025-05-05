import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100vh;
  background-color: #00000066;
`;

export const GalleryNavbar = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 36px;
  background-color: #fff;
`;

export const GalleryContainer = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: #fff;
`;

export const CloseIcon = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
