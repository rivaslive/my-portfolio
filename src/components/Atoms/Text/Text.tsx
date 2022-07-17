import { ReactNode } from 'react';

// styles
import { ColorType } from 'styles/theme';
import { TextStyle } from './style';

type TextProps = BaseComponent & {
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
  htmlTag?: 'p' | 'span' | 'div';
  mobileSettings?: {
    fontSize: string;
    lineHeight: string;
    textTransform: TextTransformType;
    letterSpacing: string;
    fontWeight: FontWeightType;
    textAlign: AlignType;
    fontStyle: FontStyleType;
  };
};

const Text = ({
  children,
  mobileSettings,
  fontStyle = 'normal',
  htmlTag = 'p',
  letterSpacing = '-0.002em',
  fontWeight = 'bold',
  textTransform = 'none',
  margin = 'inherit',
  fontSize = '1rem',
  lineHeight = '1.5',
  color = 'text',
  align = 'left',
  ...restProps
}: TextProps) => {
  return (
    <TextStyle
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
    </TextStyle>
  );
};

export default Text;
