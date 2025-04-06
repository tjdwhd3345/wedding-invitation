import { useState } from "react";
import PhotoGallery from "./PhotoGallery.tsx";
import * as Styled from "./styled.ts";

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <Styled.ContentsWrap>
      <Styled.ImageMoreWrap $isMoreView={isMoreView}>
        {!isMoreView && <Styled.WhiteGradientOverlay />}
        <PhotoGallery />
      </Styled.ImageMoreWrap>
      {!isMoreView && <Styled.PlusButton onClick={onClickImageMoreViewButton}>더보기</Styled.PlusButton>}
    </Styled.ContentsWrap>
  );
};

export default GalleryWrap;
