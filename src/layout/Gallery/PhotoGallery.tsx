import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import images from "@/layout/Gallery/Images.ts";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: "pointer",
    objectFit: "contain",
    width: "100%",
    height: "150px",
  };

  return (
    <Gallery
      options={{
        zoom: false, // 확대 비활성화
        wheelToZoom: false, // 마우스 휠 확대 비활성화
        maxZoomLevel: 4, // 최대 확대 레벨을 4로 설정
        doubleTapAction: false,
      }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(88px, auto))",
          gridGap: 6,
        }}>
        {images.map((image, index) => {
          return (
            <Item
              key={index}
              original={image.source}
              thumbnail={image.source}
              width={image.width}
              height={image.height}>
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  alt={image.alt}
                  src={image.source}
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={(e) => {
                    e.preventDefault();
                    open(e);
                  }}
                />
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
