export type MovieType = {
  title: {
    en: 'en';
    ka: 'ka';
  };
  description: {
    en: 'en';
    ka: 'ka';
  };
  director: {
    en: 'en';
    ka: 'ka';
  };
  budget: number;
  year: string;
  thumbnail: string;
  genres: { name: string }[];
};
