import styled from 'styled-components';
import Button from 'components/Atoms/Button';
import { ColorType } from 'styles/theme';

type WrapperProps = {
  $color: ColorType;
  $bgColor: ColorType;
  $borderColor: ColorType;
  $isTextArea?: boolean;
};

export const StyleWrapper = styled.div<WrapperProps>`
  position: relative;
  height: ${({ $isTextArea }) => ($isTextArea ? 'auto' : 'calc(2 * 1.25rem)')};
  display: inline-flex;
  align-items: center;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  border-color: transparent;
  transition: box-shadow 0.3s ease-in-out;
  color: ${({ $color, theme }) => theme.colors[$color]};
  background: ${({ $bgColor, theme }) => theme.colors[$bgColor]};
  box-shadow: 0 0 0 2px
    ${({ $borderColor, theme }) => theme.colors[$borderColor]};

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.text};
  }
`;

export const StyleLabel = styled.label`
  flex: 1 1 0;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 12px;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  user-select: none;
`;

export const StyleInput = styled.input`
  border: none;
  background: transparent;
  color: currentColor;
  border-radius: 12px;
  outline: none;
  width: 100%;
  height: 100%;
  min-width: 0;
  appearance: none;
  padding: 0.25rem 0.625rem;
`;

export const StyleButtonSearch = styled(Button)`
  position: absolute;
  border-radius: 12px;
  padding: 0 12px !important;
  right: 0;
  top: 0;

  .anticon {
    margin-left: 10px;
  }
`;
