import {forwardRef} from 'react';
import NextImage, {StaticImageData} from 'next/image';
import {StyleImage} from './style';

interface StaticRequire {
  default: StaticImageData;
}

declare type StaticImport = StaticRequire | StaticImageData;

type ImageProps = BaseComponent & {
  src: string;
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
        <img
          alt={alt}
          src={src}
          width={width}
          height={height}
          style={objectFit ? {
            objectFit,
          } : {}}
          {...rest}
        />
      </StyleImage>
    );
  }
);

Image.displayName = 'Image';

export default Image;
