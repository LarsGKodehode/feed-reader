// CSS
import styles from './FeedCard.module.css';


// Types
interface FeedCardProps {
  imageSrc: string,
  imageType: string,
};

function FeedCard(props: FeedCardProps): JSX.Element {
  const {
    imageSrc,
    imageType,

  } = props;

  // Props
  const allProps = {
    className:
    [
      styles['wrapper'],
    ].join(" "),
  };

  const imageProps = {
    src: imageSrc,
    imageType: imageType,
  }

  return (
    <div {...allProps}>
      <img {...imageProps} />
    </div>
  );
};

export default FeedCard;

export type {
  FeedCardProps,
};