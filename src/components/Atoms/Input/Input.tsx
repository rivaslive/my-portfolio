import {
  ChangeEvent,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import { ColorType } from 'styles/theme';
import { StyleInput, StyleLabel, StyleWrapper } from './style';

type BaseInput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputProps = BaseComponent & BaseInput & {
  isRequired?: boolean;
  withErrors?: boolean;
  labelColor?: ColorType;
  bgColor?: ColorType;
  borderColor?: ColorType;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  value?: string | number | boolean;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isRequired,
      id,
      style,
      className,
      withErrors,
      labelColor = 'text',
      bgColor = 'input',
      borderColor = 'borderColor',
      ...restInputProps
    },
    _ref,
  ) => {
    return (
      <StyleWrapper
        id={id}
        style={style}
        className={className}
        $color={labelColor}
        $bgColor={bgColor}
        $borderColor={withErrors ? 'error' : borderColor}
      >
        <StyleLabel>
          <StyleInput
            // @ts-ignore
            ref={_ref}
            // override props
            {...restInputProps}
          />
        </StyleLabel>
      </StyleWrapper>
    );
  },
);

export default Input;
