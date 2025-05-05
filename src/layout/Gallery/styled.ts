import styled from "styled-components";

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 24px 0;
  overflow: hidden;
`;

export const ImageMoreWrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 90%);
`;

export const PlusButton = styled.div`
  width: 100%;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(88px, auto));
  grid-gap: 6px;
  width: 100%;
`;
