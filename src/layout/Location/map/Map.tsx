import { Container as MapDiv, Marker, NaverMap, useNavermaps } from "react-naver-maps";
import data from "data.json";
import ErrorBoundary from "@/components/ErrorBoundary";

const Map = () => {
  const { lat, lon } = data.mapInfo;
  const navermaps = useNavermaps();
  return (
    <MapDiv style={{ width: "90%", height: "300px" }}>
      <ErrorBoundary fallback={<div>Loading...</div>}>
        <NaverMap
          defaultCenter={new navermaps.LatLng(lat, lon)}
          defaultZoom={17}
          scrollWheel={false}
          keyboardShortcuts={false}>
          <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
        </NaverMap>
      </ErrorBoundary>
    </MapDiv>
  );
};

export default Map;
