import { ImageGalleryProps } from '../types';

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  if (!images.length) return null;
  return <div>ImageGallery</div>;
};

export default ImageGallery;
