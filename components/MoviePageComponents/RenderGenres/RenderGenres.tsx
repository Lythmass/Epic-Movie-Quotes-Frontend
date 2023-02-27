import { DisplayGenres } from 'components';
import { useTranslation } from 'next-i18next';
import { MovieType } from 'types';

export const RenderGenres: React.FC<{ movie: MovieType }> = (props) => {
  const { t } = useTranslation('movies');

  const displayGenres = props.movie?.genres.map(
    (genre: { name: string }, index: number) => {
      return <DisplayGenres key={index} name={t('genres.' + genre.name)} />;
    }
  );

  return <>{displayGenres}</>;
};

export default RenderGenres;
