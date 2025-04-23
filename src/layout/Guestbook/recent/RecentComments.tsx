import { useEffect, useState } from "react";
import Firebase from "@/components/Firebase";
import { formatDate } from "../function.ts";
import * as Styled from "./styled.ts";

type Comment = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
};
const RecentComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        await Firebase.getRecentComments((comments) => {
          setComments(comments);
        });
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();

    return () => {
      Firebase.unsubscribe && Firebase.unsubscribe();
    };
  }, []);
  return (
    <Styled.Container>
      {comments.map((coment, index) => (
        <Styled.Wrapper key={index}>
          <Styled.Title>
            <Styled.From>FROM. {coment.name}</Styled.From>
          </Styled.Title>
          <Styled.Message>{coment.message}</Styled.Message>
        </Styled.Wrapper>
      ))}
    </Styled.Container>
  );
};

export default RecentComments;
