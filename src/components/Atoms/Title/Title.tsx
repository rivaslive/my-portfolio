import { ReactNode } from 'react';

// styles
import { ColorType } from 'styles/theme';
import { TitleStyle } from './style';

type TitleProps = BaseComponent & {
  children?: ReactNode;
  fontStyle?: FontStyleType;
  letterSpacing?: string;
  fontWeight?: FontWeightType;
  textTransform?: TextTransformType;
  margin?: string;
  fontSize?: string;
  lineHeight?: string;
  color?: ColorType;
  align?: AlignType;
  htmlTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  mobileSettings?: {
    fontSize?: string;
    lineHeight?: string;
    textTransform?: TextTransformType;
    letterSpacing?: string;
    fontWeight?: FontWeightType;
    textAlign?: AlignType;
    fontStyle?: FontStyleType;
  };
};

const Title = ({
  children,
  mobileSettings,
  fontStyle = 'normal',
  htmlTag = 'h2',
  letterSpacing = '-0.005em',
  fontWeight = 'bold',
  textTransform = 'none',
  margin = 'initial',
  fontSize = '3rem',
  lineHeight = '1.5',
  color = 'text',
  align = 'left',
  ...restProps
}: TitleProps) => {
  return (
    <TitleStyle
      as={htmlTag}
      $color={color}
      $margin={margin}
      $fontStyle={fontStyle}
      $letterSpacing={letterSpacing}
      $fontWeight={fontWeight}
      $textAlign={align}
      $fontSize={fontSize}
      $textTransform={textTransform}
      $lineHeight={lineHeight}
      $mobileSettings={mobileSettings}
      {...restProps}
    >
      {children}
    </TitleStyle>
  );
};

export default Title;
