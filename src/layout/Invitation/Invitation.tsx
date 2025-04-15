import data from "data.json";
import * as Text from "@/components/Text.tsx";
import Host from "../Contact/Host.tsx";
import * as Styled from "./styled.ts";

const Invitation = () => {
  const { greeting } = data;
  return (
    <Styled.InvitationWrapper>
      <Text.Paragraph>{greeting.message}</Text.Paragraph>
      <Host />
    </Styled.InvitationWrapper>
  );
};

export default Invitation;
