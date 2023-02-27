export type CommentType = {
  quote_id: number;
  user: {
    profile_picture: string;
    name: string;
  };
  comment: string;
};
