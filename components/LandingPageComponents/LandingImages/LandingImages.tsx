import { LandingImage } from 'components';
import { ImagesDataType } from 'types';

export default function LandingImages(props: ImagesDataType) {
  const displayImages = props.imagesData.map((image) => {
    return (
      <LandingImage
        key={image.name}
        src={image.name}
        quote={image.quote}
        title={image.title}
      />
    );
  });

  return <>{displayImages}</>;
}
