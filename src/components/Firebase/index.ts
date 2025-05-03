import Firebase from "./Firebase";

export type Comment = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
};

export { Firebase };
