import styled, { css } from 'styled-components';

import { ColorType } from 'styles/theme';

export type VariantType = 'default' | 'link';

type ButtonProps = {
  $variant: VariantType;
  $isRounded: boolean;
  $isLoading: boolean;
  $color: ColorType;
  $margin: string;
  $bgColor: ColorType;
  $fontWeight: FontWeightType;
  $borderColor: ColorType;
};

const cssDisabled = css`
  opacity: 0.3;
  cursor: not-allowed;

  &:hover {
    opacity: 0.3;
  }
`;

const cssVariants = {
  default: css``,
  link: css`
    min-width: min-content;
    padding: 0 6px;
  `,
};

export const ButtonStyle = styled.button<ButtonProps>`
  border-width: 1px;
  border-style: solid;
  outline: none;
  height: 2.5rem;
  font-size: 0.875rem;
  line-height: 2.5rem;
  min-width: 12rem;
  padding: 0 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  text-align: center;
  white-space: nowrap;
  transition: background 0.25s ease 0s, color 0.25s ease 0s,
    border-color 0.25s ease 0s, box-shadow 0.25s ease 0s,
    transform 0.25s ease 0s, opacity 0.25s ease 0s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  pointer-events: auto;
  border-radius: 12px;
  appearance: none;
  margin: ${({ $margin }) => $margin};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ $color, theme }) => theme.colors[$color]};
  background: ${({ $bgColor, theme }) => theme.colors[$bgColor]};
  border-color: ${({ $borderColor, theme }) => theme.colors[$borderColor]};

  &:hover {
    opacity: 0.8;
  }

  ${({ $variant }) => cssVariants[$variant] ?? ''}
  ${({ disabled }) => disabled && cssDisabled}
  ${({ $isRounded }) => $isRounded && 'border-radius: 40px;'}
  ${({ $isLoading }) => $isLoading && 'pointer-events: none;'}
`;
