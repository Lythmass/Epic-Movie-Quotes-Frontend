import { LandingImage } from 'components';
import { ImagesDataType } from 'types';
import { useTranslation } from 'react-i18next';

export default function LandingImages(props: ImagesDataType) {
  const { t } = useTranslation();
  const displayImages = props.imagesData.map((image) => {
    return (
      <LandingImage
        key={image.name}
        src={image.name}
        quote={t(image.quote)}
        title={t(image.title)}
      />
    );
  });

  return <>{displayImages}</>;
}
