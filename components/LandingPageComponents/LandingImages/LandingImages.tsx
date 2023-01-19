import { LandingImage } from 'components';
import { ImagesDataType } from 'types';
import { useTranslation } from 'next-i18next';

export default function LandingImages(props: ImagesDataType) {
  const { t } = useTranslation('common');
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
