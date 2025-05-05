import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Close from "@/assets/icons/close.svg?react";
import images from "@/layout/Gallery/Images.ts";
import "./Di_Gallery.css";
import * as Styled from "./styled";

interface Props {
  index: number;
  closeHandler: () => void;
}
const Di_Gallery = (props: Props) => {
  const { index, closeHandler } = props;
  return (
    <Styled.Container>
      <Styled.Background onClick={closeHandler} />
      <Styled.GalleryNavbar>
        <Styled.CloseIcon onClick={closeHandler}>
          <Close style={{ fontSize: 24 }} />
        </Styled.CloseIcon>
      </Styled.GalleryNavbar>
      <Styled.GalleryContainer>
        <Swiper modules={[Navigation]} initialSlide={index} spaceBetween={30} navigation className="gallery">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.source}
                alt={`Image ${index + 1}`}
                style={{ width: "100%", height: "60vh", objectFit: "contain" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.GalleryContainer>
    </Styled.Container>
  );
};

export default Di_Gallery;
