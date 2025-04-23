import { useEffect, useState } from "react";
import Firebase, { Comment } from "@/components/Firebase";
import { formatDate } from "../function.ts";
import * as Styled from "./styled.ts";
import Delete from "./delete/Delete.tsx";

interface Props {
  closeHandler: () => void;
}
const Comments = (props: Props) => {
  const { closeHandler } = props;
  const [comments, setComments] = useState<Comment[]>([]);
  const [showDelete, setShowDelete] = useState(false);

  const fetchComments = async () => {
    try {
      const comments = await Firebase.getAllComments();
      setComments(comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleDelete = async (comment: Comment) => {
    try {
      await Firebase.deleteComment(comment);
      fetchComments();
    } catch (e) {
      console.error("Error deleteComment", e);
    }
  };

  return (
    <Styled.Modal>
      <Styled.Background />
      <Styled.Subject>
        방명록
        <Styled.CloseIcon onClick={closeHandler}>X</Styled.CloseIcon>
      </Styled.Subject>
      <Styled.Container>
        {comments.map((comment, index) => (
          <Styled.Wrapper key={index}>
            <Styled.Title>
              <Styled.From>FROM. {comment.name}</Styled.From>
              <Styled.Delete>
                <Styled.Date>{formatDate(comment.createdAt)}</Styled.Date>
                <Styled.DeleteIcon onClick={() => setShowDelete(true)}>X</Styled.DeleteIcon>
              </Styled.Delete>
            </Styled.Title>
            <Styled.Message>{comment.message}</Styled.Message>
          </Styled.Wrapper>
        ))}
      </Styled.Container>
      {showDelete && <Delete closeHandler={() => setShowDelete(false)} />}
    </Styled.Modal>
  );
};

export default Comments;
