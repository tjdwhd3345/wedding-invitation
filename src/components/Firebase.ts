import {
  collection,
  doc,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
  limit,
  onSnapshot,
  Unsubscribe,
  where,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../firebase";

const isProduction = import.meta.env.MODE === "production";
const COLLECTION_NAME = isProduction ? "prod" : "test-collection";

export type Comment = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
};

class Firebase {
  private commentColRef;
  private likeRef;
  public unsubscribeComments: Unsubscribe | null = null;
  public unsubscribeLikes: Unsubscribe | null = null;

  constructor() {
    const commentsDocumentRef = doc(db, COLLECTION_NAME, "comments");
    this.commentColRef = collection(commentsDocumentRef, "comment");
    this.likeRef = doc(db, COLLECTION_NAME, "likes");
  }

  public async getLikeCounts(fn: (count: number) => void) {
    this.unsubscribeLikes = onSnapshot(
      this.likeRef,
      (doc) => {
        const { count } = doc.data() as { count: number };
        fn(count);
      },
      (error) => {
        console.error("스냅샷 리스너 오류: ", error);
        throw error;
      },
    );
  }

  public async increaseLike() {
    await updateDoc(this.likeRef, { count: increment(1) });
  }

  public async getAllComments() {
    const q = query(this.commentColRef, orderBy("createdAt", "desc"), where("deleted", "==", false));
    const querySnapshot = await getDocs(q);
    let comments: { id: string; name: string; message: string; createdAt: number }[] = [];
    querySnapshot.forEach((doc) => {
      const createdAt = doc.data().createdAt.seconds * 1000;
      comments.push({ id: doc.id, ...(doc.data() as { name: string; message: string }), createdAt });
    });
    return comments;
  }

  public async getRecentComments(
    fn: (comments: { id: string; name: string; message: string; createdAt: number }[]) => void,
  ) {
    const q = query(this.commentColRef, orderBy("createdAt", "desc"), where("deleted", "==", false), limit(3));
    let comments: { id: string; name: string; message: string; createdAt: number }[] = [];

    this.unsubscribeComments = onSnapshot(
      q,
      (querySnapshot) => {
        comments = [];
        querySnapshot.forEach((doc) => {
          const createdAt = (doc.data().createdAt?.seconds || 0) * 1000;
          comments.push({ id: doc.id, ...(doc.data() as { name: string; message: string }), createdAt });
        });
        fn(comments);
      },
      (error) => {
        console.error("스냅샷 리스너 오류: ", error);
        throw error;
      },
    );

    return comments;
  }

  public async addComment(comment: { name: string; message: string }) {
    await addDoc(this.commentColRef, {
      ...comment,
      createdAt: serverTimestamp(),
      deleted: false,
    });
  }

  public async deleteComment(comment: { id: string; name: string; message: string; createdAt: number }) {
    const commentDocRef = doc(db, COLLECTION_NAME, "comments", "comment", comment.id);
    await updateDoc(commentDocRef, { deleted: true });
  }
}

export default new Firebase();
