import styled, { css } from 'styled-components';
import { ColorType, mediaQueries } from 'styles/theme';

type TitleProps = {
  $fontStyle: FontStyleType;
  $letterSpacing: string;
  $fontWeight: FontWeightType;
  $textTransform: TextTransformType;
  $margin: string;
  $fontSize: string;
  $lineHeight: string;
  $color: ColorType;
  $textAlign: AlignType;
  $mobileSettings?: {
    fontSize?: string;
    lineHeight?: string;
    textTransform?: TextTransformType;
    letterSpacing?: string;
    fontWeight?: FontWeightType;
    textAlign?: AlignType;
    fontStyle?: FontStyleType;
  };
};

const cssResponsive = css<TitleProps>`
  font-style: ${({ $fontStyle, $mobileSettings }) =>
    $mobileSettings?.fontStyle ?? $fontStyle};

  letter-spacing: ${({ $letterSpacing, $mobileSettings }) =>
    $mobileSettings?.letterSpacing ?? $letterSpacing};

  font-weight: ${({ $fontWeight, $mobileSettings }) =>
    $mobileSettings?.fontWeight ?? $fontWeight};

  text-align: ${({ $textAlign, $mobileSettings }) =>
    $mobileSettings?.textAlign ?? $textAlign};

  font-size: ${({ $fontSize, $mobileSettings }) =>
    $mobileSettings?.fontSize ?? $fontSize};

  text-transform: ${({ $textTransform, $mobileSettings }) =>
    $mobileSettings?.textTransform ?? $textTransform};

  line-height: ${({ $lineHeight, $mobileSettings }) =>
    $mobileSettings?.lineHeight ?? $lineHeight};

  ${mediaQueries.tablet} {
    font-style: ${({ $fontStyle }) => $fontStyle};
    letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
    font-weight: ${({ $fontWeight }) => $fontWeight};
    text-align: ${({ $textAlign }) => $textAlign};
    font-size: ${({ $fontSize }) => $fontSize};
    text-transform: ${({ $textTransform }) => $textTransform};
    line-height: ${({ $lineHeight }) => $lineHeight};
  }
`;

const cssLineColor = css<TitleProps>`
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: ${({ $color, theme }) => theme.colors[$color]};
`;

export const TitleStyle = styled.h1`
  word-break: break-word;
  margin: ${({ $margin }) => $margin};
  color: ${({ $color, theme }) => theme.colors[$color]};
  ${({ $color, theme }) => theme.colors[$color].includes('line') && cssLineColor};
  ${cssResponsive}
`;
