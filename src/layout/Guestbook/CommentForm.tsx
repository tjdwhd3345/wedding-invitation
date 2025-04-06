import { useState } from "react";
import styled from "styled-components";
// import { push, ref, serverTimestamp } from 'firebase/database';
// import { realtimeDb } from '../../firebase.ts';

// TODO: 방명록 기능 사용시, realtime db에 guestbook 추가
// const guestbookRef = ref(realtimeDb, 'guestbook');

const CommentForm = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const disabled = !name || !message;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (disabled) {
      alert("이름과 메시지를 채워주세요. 🥹");
    } else {
      // TODO: 이름, 메시지, 생성시간, 작성날짜 저장.
      // const guestbookMessage = {
      //   sender: name,
      //   message: message,
      //   createdAt: serverTimestamp(),
      //   date: new Date().toLocaleString(),
      // };
      // void push(guestbookRef, guestbookMessage);
      //
      // alert('메시지를 보냈습니다. 💌');
      setName("");
      setMessage("");
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <NameInput
        placeholder="성함을 입력해주세요."
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MessageInput
        placeholder="내용을 입력해주세요. (비방, 욕설, 정치적 성향의 글은 임의로 삭제되며 형사처벌의 대상이 될 수 있습니다.)"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SubmitButton type="submit" disabled={disabled}>
        등록
      </SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: visible;
  align-items: center;
`;

const NameInput = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 16px;
  line-height: 150%;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
`;

const MessageInput = styled.textarea`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 16px;
  line-height: 150%;
  outline: none;
  border: 1px solid #ccc;
  resize: none;
  font-family: inherit;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 150%;
  border: 1px solid lightgray;
  background-color: white;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  cursor: pointer;
`;
export default CommentForm;
