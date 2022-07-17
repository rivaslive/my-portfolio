import { useState, useEffect, ReactNode, ChangeEvent } from 'react';

import { ColorType } from 'styles/theme';
import { LabelStyle, StyleInputCheck, StyleCheckMark } from './style';

type CheckboxProps = BaseComponent & {
  children?: ReactNode;
  disabled?: boolean;
  value?: boolean;
  fontSize?: string;
  color?: ColorType;
  fontWeight?: FontWeightType;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({
  children,
  disabled,
  value,
  onChange,
  className,
  style,
  fontWeight = 400,
  fontSize = '14px',
  color = 'text',
  ...restProps
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  useEffect(() => {
    if (typeof value === 'boolean') {
      setChecked((prev) => {
        if (prev !== value) return value;
        return prev;
      });
    }
  }, [value]);

  return (
    <LabelStyle
      className={className}
      style={style}
      $checked={checked}
      $fontWeight={fontWeight}
      $fontSize={fontSize}
      $color={color}
    >
      {children}
      <StyleInputCheck
        checked={checked}
        onChange={onChangeChecked}
        type="checkbox"
        {...restProps}
      />
      <StyleCheckMark />
    </LabelStyle>
  );
};

export default Checkbox;
