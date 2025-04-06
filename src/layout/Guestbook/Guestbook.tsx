import styled from "styled-components";
import * as Text from "@/components/Text.tsx";
import CommentForm from "./CommentForm.tsx";

const Guestbook = () => {
  return (
    <GuestBookWrapper>
      <Text.Heading2>
        메시지를 남겨주세요.
        <br />
        결혼식 하루 뒤, 신랑 신부에게 전달됩니다.
      </Text.Heading2>
      <CommentForm />
    </GuestBookWrapper>
  );
};

export default Guestbook;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 56px;
`;
