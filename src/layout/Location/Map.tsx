import { Container as MapDiv, Marker, NaverMap, useNavermaps } from "react-naver-maps";
import ErrorBoundary from "@/components/ErrorBoundary";
import data from "data.json";

const Map = () => {
  const { lat, lon } = data.mapInfo;
  const navermaps = useNavermaps();

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "300px",
      }}>
      <ErrorBoundary fallback={<div>Loading...</div>}>
        <NaverMap
          defaultCenter={new navermaps.LatLng(lat, lon)}
          defaultZoom={17}
          draggable={false}
          pinchZoom={false}
          scrollWheel={false}
          keyboardShortcuts={false}>
          <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
        </NaverMap>
      </ErrorBoundary>
    </MapDiv>
  );
};

export default Map;
