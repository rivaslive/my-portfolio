import { StyleBrand } from './style';

type BrandProps = BaseComponent & {
  fontSize?: string;
  margin?: string;
};

const Brand = ({ fontSize = '2rem', ...props }: BrandProps) => {
  return (
    <StyleBrand htmlTag="div" fontSize={fontSize} {...props}>
      Kevin R.
    </StyleBrand>
  );
};

export default Brand;
