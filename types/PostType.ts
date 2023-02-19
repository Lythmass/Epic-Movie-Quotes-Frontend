export type PostType = {
  thumbnail: string;
  quote: {
    en: string;
    ka: string;
  };
  movie: {
    title: {
      en: string;
      ka: string;
    };
    year: number;
  };
  user?: {
    name: string;
    profile_picture: string;
  };
  author?: string;
  authorPicture?: string;
  id?: number;
};
