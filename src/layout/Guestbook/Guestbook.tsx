import { useState } from "react";
import * as Text from "@/components/Text.tsx";
import CommentForm from "./form/CommentForm.tsx";
import RecentComments from "./recent/RecentComments.tsx";
import Comments from "./list/Comments.tsx";
import * as Styled from "./styled.ts";

const Guestbook = () => {
  const [showList, setShowList] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <Styled.Wrapper>
      <Text.Heading2>축하의 메시지를 남겨주세요.</Text.Heading2>
      <Styled.Container>
        <Styled.Button onClick={() => setShowList(true)}>전체보기</Styled.Button>
        <Styled.Button onClick={() => setShowForm(true)}>작성하기</Styled.Button>
      </Styled.Container>

      <RecentComments />
      {showForm && <CommentForm closeHandler={() => setShowForm(false)} />}
      {showList && <Comments closeHandler={() => setShowList(false)} />}
    </Styled.Wrapper>
  );
};

export default Guestbook;
