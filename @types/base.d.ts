type CSSProperties = import('react').CSSProperties;

declare type BaseComponent = {
  style?: CSSProperties;
  className?: string;
  id?: string;
};

declare type AlignType = 'left' | 'right' | 'center' | 'justify';

declare type FontWeightType = 'normal' | 'bold' | number | 'string';

declare type FontStyleType = 'normal' | 'italic';

declare type TextTransformType =
  | 'none'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize';
