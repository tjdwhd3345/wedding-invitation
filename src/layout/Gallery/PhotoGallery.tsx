import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import images from "@/layout/Gallery/Images.ts";
import "./PhotoGallery.css";
import * as Styled from "./styled";

const PhotoGallery = () => {
  return (
    <Styled.GalleryContainer>
      <Swiper modules={[Navigation]} spaceBetween={30} navigation className="gallery" style={{}}>
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
  );
};

export default PhotoGallery;
