import { useState } from "react";
import { Firebase } from "@/components/Firebase";
import * as Styled from "./styled.ts";

interface Props {
  closeHandler: () => void;
}
const CommentForm = (props: Props) => {
  const { closeHandler } = props;
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const disabled = !name || !message;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (disabled) {
      alert("이름과 메시지를 채워주세요. 🥹");
    } else {
      try {
        await Firebase.db.addComment({ name, message });
        setName("");
        setMessage("");
        alert("메시지를 등록했습니다. 💌");
        closeHandler();
      } catch (e) {
        console.error("Error adding comment: ", e);
      }
    }
  };

  return (
    <Styled.Modal>
      <Styled.Background onClick={closeHandler} />
      <Styled.Wrapper>
        <Styled.Subject>
          방명록 작성하기
          <Styled.CloseIcon onClick={closeHandler}>X</Styled.CloseIcon>
        </Styled.Subject>
        <Styled.Form onSubmit={handleSubmit}>
          <Styled.Input
            placeholder="성함을 입력해주세요."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Styled.Textarea
            placeholder="내용을 입력해주세요. (비방, 욕설, 정치적 성향의 글은 임의로 삭제되며 형사처벌의 대상이 될 수 있습니다.)"
            rows={5}
            maxLength={150}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Styled.Button type="submit" disabled={disabled}>
            작성하기
          </Styled.Button>
        </Styled.Form>
      </Styled.Wrapper>
    </Styled.Modal>
  );
};

export default CommentForm;
