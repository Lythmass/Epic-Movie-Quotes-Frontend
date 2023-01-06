import { LandingImage } from 'components';

export default function LandingImages(props: {
  imagesData: { name: string; title: string; quote: string }[];
}) {
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
