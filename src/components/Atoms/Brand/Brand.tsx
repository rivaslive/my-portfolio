import { StyleBrand } from './style';

type BrandProps = BaseComponent & {
  fontSize?: string;
  margin?: string;
};

const Brand = ({ fontSize = '2rem', margin, ...props }: BrandProps) => {
  return (
    <StyleBrand
      src="/logo.webp"
      width={50}
      height={50}
      alt="Kevin Rivas logo.png"
      {...props}
    />
  );
};

export default Brand;
