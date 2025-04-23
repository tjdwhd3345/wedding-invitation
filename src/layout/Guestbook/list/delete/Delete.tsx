import { useState } from "react";
import * as Styled from "./styled";

interface Props {
  closeHandler: () => void;
}
const Delete = (props: Props) => {
  const { closeHandler } = props;
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_APP_DELETE_PASSWORD) {
      closeHandler();
    } else {
      alert("방명록 비밀번호를 확인해주세요!");
    }
  };

  const disabled = !password.length;
  return (
    <Styled.Modal>
      <Styled.Background />
      <Styled.Wrapper>
        <Styled.Subject>
          <Styled.Title>방명록 삭제하기</Styled.Title>
          <Styled.CloseIcon>X</Styled.CloseIcon>
        </Styled.Subject>
        <Styled.Form onSubmit={handleSubmit}>
          <Styled.Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Styled.Button onClick={closeHandler}>취소</Styled.Button>
          <Styled.Button type="submit" disabled={disabled}>
            삭제하기
          </Styled.Button>
        </Styled.Form>
      </Styled.Wrapper>
    </Styled.Modal>
  );
};

export default Delete;
