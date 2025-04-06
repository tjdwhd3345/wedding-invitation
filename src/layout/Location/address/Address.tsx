import data from "data.json";
import * as Text from "@/components/Text.tsx";
import { ILocationInfo } from "@/types/data.ts";
import * as Styled from "./styled.ts";

const Address = () => {
  const { locationInfo } = data;
  return (
    <Styled.WayWrapper>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <Styled.Way key={title}>
            <Text.PointTitle>{title}</Text.PointTitle>
            <Text.Caption>{desc}</Text.Caption>
          </Styled.Way>
        );
      })}
    </Styled.WayWrapper>
  );
};

export default Address;
