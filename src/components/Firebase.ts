import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
  limit,
  onSnapshot,
  Unsubscribe,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export type Comment = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
};

class Firebase {
  private collectionRef;
  public unsubscribe: Unsubscribe | null = null;

  constructor() {
    const commentsDocumentRef = doc(db, "test-collection", "comments");
    this.collectionRef = collection(commentsDocumentRef, "comment");
  }

  public async getAllComments() {
    const q = query(this.collectionRef, orderBy("createdAt", "desc"), where("deleted", "==", false));
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
    const q = query(this.collectionRef, orderBy("createdAt", "desc"), where("deleted", "==", false), limit(3));
    let comments: { id: string; name: string; message: string; createdAt: number }[] = [];

    this.unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        comments = [];
        querySnapshot.forEach((doc) => {
          const createdAt = doc.data().createdAt?.seconds * 1000;
          comments.push({ id: doc.id, ...(doc.data() as { name: string; message: string }), createdAt });
        });
        fn(comments);
      },
      (error) => {
        console.error("스냅샷 리스너 오류:", error);
        throw error;
      },
    );

    return comments;
  }

  public async addComment(comment: { name: string; message: string }) {
    await addDoc(this.collectionRef, {
      ...comment,
      createdAt: serverTimestamp(),
      deleted: false,
    });
  }

  public async deleteComment(comment: { id: string; name: string; message: string; createdAt: number }) {
    const commentDocRef = doc(db, "test-collection", "comments", "comment", comment.id);
    await updateDoc(commentDocRef, { deleted: true });
  }
}

export default new Firebase();
