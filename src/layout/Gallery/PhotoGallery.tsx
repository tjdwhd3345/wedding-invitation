import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import images from "@/layout/Gallery/Images.ts";

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
        zoom: false,
        wheelToZoom: false,
        // pinchToClose: false,
        maxZoomLevel: 1,
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
              // cropped
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
                  onClick={open}
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
