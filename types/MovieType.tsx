type movie = {
  'title-en': string;
  'title-ka': string;
  'description-en': string;
  'description-ka': string;
  'director-en': string;
  'director-ka': string;
  budget: number;
  date: string;
  thumbnail: string;
  genres: string[];
};

export type MovieType = movie | {};
