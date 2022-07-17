import styled, { css } from 'styled-components';
import { ColorType } from 'styles/theme';

export const StyleCheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: 4px;
  background-color: #eee;
  transition: background 350ms;

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 0;
    right: 0;
    top: 1px;
    margin: 0 auto;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export const StyleInputCheck = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const cssChecked = css`
  ${StyleCheckMark} {
    background-color: #2196f3;

    &:after {
      display: block;
    }
  }
`;

type LabelProps = {
  $fontWeight: FontWeightType;
  $fontSize: string;
  $color: ColorType;
  $checked: boolean;
};

export const LabelStyle = styled.label<LabelProps>`
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  width: fit-content;
  cursor: pointer;
  user-select: none;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ $color, theme }) => theme.colors[$color]};

  ${({ $checked }) => $checked && cssChecked};
`;
