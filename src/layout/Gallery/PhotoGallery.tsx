import { useState } from "react";
import images from "@/layout/Gallery/Images.ts";
import * as Styled from "./styled";
import Di_Gallery from "./dialog/Di_Gallery";

const PhotoGallery = () => {
  const [imageShow, setImageShow] = useState(false);
  const [imageId, setImageId] = useState(0);

  return (
    <Styled.GalleryContainer>
      {images.map((image, index) => (
        <Styled.Thumbnail
          key={index}
          onClick={() => {
            setImageShow(true);
            setImageId(index);
          }}>
          <img
            src={image.source}
            alt={`Image ${index + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Styled.Thumbnail>
      ))}
      {imageShow && <Di_Gallery index={imageId} closeHandler={() => setImageShow(false)} />}
    </Styled.GalleryContainer>
  );
};

export default PhotoGallery;
