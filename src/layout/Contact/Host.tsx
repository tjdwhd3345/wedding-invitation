import data from "data.json";
import { BrideAndGroom } from "@/types/data.ts";
import * as Styled from "./styled.ts";

const Host = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <Styled.HostContainer>
      <HostInfo person={groom} />
      <HostInfo person={bride} />
    </Styled.HostContainer>
  );
};

export default Host;

const HostInfo = ({ person }: { person: BrideAndGroom }) => {
  const { relation, name } = person;

  const parents = person.parents.map((parent) => parent.name)?.join(" · ") || "";
  return (
    <Styled.HostDetails>
      {parents}
      <Styled.RelationText>
        <span>의</span>
        <Styled.Relation>{relation}</Styled.Relation>
      </Styled.RelationText>
      <Styled.HighlightedName>{name}</Styled.HighlightedName>
    </Styled.HostDetails>
  );
};
