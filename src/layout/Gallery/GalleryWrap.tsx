import PhotoGallery from "./PhotoGallery.tsx";
import * as Styled from "./styled.ts";

const GalleryWrap = () => {
  return (
    <Styled.ContentsWrap>
      <Styled.ImageMoreWrap>
        <PhotoGallery />
      </Styled.ImageMoreWrap>
    </Styled.ContentsWrap>
  );
};

export default GalleryWrap;
