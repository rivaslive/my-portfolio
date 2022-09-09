import { forwardRef } from 'react';
import NextImage from 'next/image';
import { StaticImageData } from 'next/dist/client/image';
import { StyleImage } from './style';

interface StaticRequire {
  default: StaticImageData;
}

declare type StaticImport = StaticRequire | StaticImageData;

type ImageProps = BaseComponent & {
  src: string | StaticImport;
  alt?: string;
  width?: string | number;
  quality?: number;
  height?: string | number;
  unoptimized?: boolean;
  objectFit?: 'cover' | 'contain' | 'none';
};

const Image = forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      id,
      className,
      src,
      width,
      height,
      alt,
      objectFit = 'contain',
      style = {},
      ...rest
    },
    _ref
  ) => {
    return (
      <StyleImage ref={_ref} id={id} className={className} style={style}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <NextImage
          alt={alt}
          src={src}
          width={width}
          height={height}
          objectFit={objectFit}
          {...rest}
        />
      </StyleImage>
    );
  }
);

Image.displayName = 'Image';

export default Image;
