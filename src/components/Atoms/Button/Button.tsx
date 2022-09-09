import { ReactNode, MouseEvent } from 'react';

import Loading from 'components/Atoms/Loading';
import { ColorType } from 'styles/theme';

import { VariantType, ButtonStyle } from './style';

type ButtonProps = BaseComponent & {
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  rounded?: boolean;
  title?: string;
  fontWeight?: FontWeightType;
  margin?: string;
  color?: ColorType;
  bgColor?: ColorType;
  borderColor?: ColorType;
  variant?: VariantType;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  type,
  onClick,
  disabled,
  className,
  loading = false,
  rounded = false,
  variant = 'default', // default | link
  fontWeight = 'bold',
  margin = 'initial',
  color = variant === 'link' ? 'primary' : 'white',
  bgColor = variant === 'link' ? 'transparent' : 'primary',
  borderColor = 'transparent',
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      $variant={variant}
      $isRounded={rounded}
      disabled={disabled}
      $isLoading={loading}
      $color={color}
      $margin={margin}
      $bgColor={bgColor}
      $fontWeight={fontWeight}
      $borderColor={borderColor}
      className={`btn ${className}`}
      {...restProps}
    >
      {loading && <Loading size="1.2rem" right={7} />}
      {children}
    </ButtonStyle>
  );
};

export default Button;
