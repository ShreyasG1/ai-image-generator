import { ImageGalleryProps } from '../types';
import styled from 'styled-components';

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  if (!images.length) return null;
  return (
    <ImageGrid>
      {images.map((src, index) => (
        <Image
          src={src}
          alt={`generated_img_${index + 1}`}
          key={`generated_img_${index + 1}`}
        />
      ))}
    </ImageGrid>
  );
};

export default ImageGallery;

const Image = styled.img`
  width: 200px;
  ${({
    theme: {
      colors: { light, dark },
    },
  }) => `
  background-color: ${light};
  border: 4px solid ${dark};
  `}
`;

const ImageGrid = styled.div`
  ${({
    theme: {
      spacing: { xl },
    },
  }) => `
    margin-top: ${xl};
    grid-gap: ${xl};
  `}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`;
