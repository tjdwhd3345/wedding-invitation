import data from "data.json";
import { Caption, PointTitle } from "@/components/Text.tsx";
import Address from "./address/Address.tsx";
import Map from "./map/Map.tsx";
import MapButtons from "./mapButtons/MapButtons.tsx";
import * as Styled from "./styled.ts";

const Location = () => {
  const { mapInfo } = data;
  return (
    <Styled.LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={"center"}>{mapInfo.address2}</Caption>
      <Map />
      <MapButtons />
      <Address />
    </Styled.LocationWrapper>
  );
};

export default Location;
