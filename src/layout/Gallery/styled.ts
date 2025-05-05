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

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(88px, auto));
  grid-gap: 6px;
  width: 100%;
`;

export const Thumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
`;
