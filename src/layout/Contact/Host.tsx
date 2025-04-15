import data from "data.json";
import { BrideAndGroom } from "@/types/data.ts";
import * as Styled from "./styled.ts";

const Host = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <Styled.Container>
      <HostInfo person={groom} />
      <HostInfo person={bride} />
    </Styled.Container>
  );
};

export default Host;

const HostInfo = ({ person }: { person: BrideAndGroom }) => {
  const { relation, name } = person;

  const parents = person.parents.map((parent) => parent.name)?.join(" · ") || "";
  return (
    <Styled.Details>
      {parents}
      <Styled.RelationText>
        <span>의</span>
        <Styled.Relation>{relation}</Styled.Relation>
      </Styled.RelationText>
      <Styled.HighlightedName>{name}</Styled.HighlightedName>
    </Styled.Details>
  );
};
