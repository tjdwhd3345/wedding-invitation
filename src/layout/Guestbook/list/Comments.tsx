import { useEffect, useState } from "react";
import { Firebase } from "@/components/Firebase";
import { Comment } from "@/components/Firebase";
import { formatDate } from "../function.ts";
import Close from "@/assets/icons/close.svg?react";
import * as Styled from "./styled.ts";
import Delete from "./delete/Delete.tsx";

interface Props {
  closeHandler: () => void;
}
const Comments = (props: Props) => {
  const { closeHandler } = props;
  const [comments, setComments] = useState<Comment[]>([]);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteComment, setDeleteComment] = useState<Comment | null>(null);

  const fetchComments = async () => {
    try {
      const comments = await Firebase.db.getAllComments();
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
      await Firebase.db.deleteComment(comment);
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
        <Styled.CloseIcon onClick={closeHandler}>
          <Close fontSize={24} />
        </Styled.CloseIcon>
      </Styled.Subject>
      <Styled.Container>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <Styled.Wrapper key={index}>
              <Styled.Title>
                <Styled.From>FROM. {comment.name}</Styled.From>
                <Styled.Delete>
                  <Styled.Date>{formatDate(comment.createdAt)}</Styled.Date>
                  <Styled.DeleteIcon
                    onClick={() => {
                      setShowDelete(true);
                      setDeleteComment(comment);
                    }}>
                    <Close fontSize={12} />
                  </Styled.DeleteIcon>
                </Styled.Delete>
              </Styled.Title>
              <Styled.Message>{comment.message}</Styled.Message>
            </Styled.Wrapper>
          ))
        ) : (
          <Styled.NoDataContainer>
            <Styled.NoDataText>첫 번째 축하글을 남겨주세요!</Styled.NoDataText>
          </Styled.NoDataContainer>
        )}
      </Styled.Container>
      {showDelete && (
        <Delete
          closeHandler={() => {
            setShowDelete(false);
            setDeleteComment(null);
          }}
          comment={deleteComment}
          handleDelete={handleDelete}
        />
      )}
    </Styled.Modal>
  );
};

export default Comments;
