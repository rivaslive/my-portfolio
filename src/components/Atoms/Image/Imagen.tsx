import { StyleImage } from './style';
import { forwardRef } from 'react';

type ImageProps = BaseComponent & {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  objectFit?: 'cover' | 'contain' | 'none';
};

const Image = forwardRef<HTMLDivElement, ImageProps>(
  (
    { id, className, src, width, height, alt, objectFit = 'contain', ...rest },
    _ref
  ) => {
    return (
      <StyleImage ref={_ref} id={id} className={className}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={alt}
          src={src}
          width={width}
          loading="lazy"
          height={height}
          style={{ objectFit }}
          {...rest}
        />
      </StyleImage>
    );
  }
);

Image.displayName = 'Image';

export default Image;
