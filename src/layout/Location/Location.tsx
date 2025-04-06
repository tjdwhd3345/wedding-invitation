import data from "data.json";
import * as Text from "@/components/Text.tsx";
import Address from "./address/Address.tsx";
import Map from "./map/Map.tsx";
import MapButtons from "./mapButtons/MapButtons.tsx";
import * as Styled from "./styled.ts";

const Location = () => {
  const { mapInfo } = data;
  return (
    <Styled.Wrapper>
      <Text.PointTitle>{mapInfo.address1}</Text.PointTitle>
      <Text.Caption $textAlign={"center"}>{mapInfo.address2}</Text.Caption>
      <Map />
      <MapButtons />
      <Address />
    </Styled.Wrapper>
  );
};

export default Location;
