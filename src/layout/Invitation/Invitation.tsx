import data from "data.json";
import { Caption, Paragraph } from "@/components/Text.tsx";
import Host from "../Contact/Host.tsx";
import * as Styled from "./styled.ts";

const Invitation = () => {
  const { greeting } = data;
  return (
    <Styled.InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={"center"}>{greeting.eventDetail}</Caption>
      {/* TODO: 달력 UI 추가 */}
    </Styled.InvitationWrapper>
  );
};

export default Invitation;
