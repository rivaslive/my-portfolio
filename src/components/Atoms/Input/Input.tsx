import {
  ChangeEvent,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes
} from 'react';
import { ColorType } from 'styles/theme';
import { StyleInput, StyleLabel, StyleWrapper } from './style';

type BaseInput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputProps = BaseComponent &
  BaseInput & {
    isRequired?: boolean;
    withErrors?: boolean;
    rows?: number;
    labelColor?: ColorType;
    bgColor?: ColorType;
    borderColor?: ColorType;
    htmlTag?: 'input' | 'textarea';
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    value?: string | number | boolean;
    onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  };

const Input = forwardRef<HTMLTextAreaElement, InputProps>(
  (
    {
      isRequired,
      id,
      style,
      className,
      withErrors,
      htmlTag = 'input',
      labelColor = 'text',
      bgColor = 'input',
      borderColor = 'borderColor',
      ...restInputProps
    },
    _ref
  ) => {
    return (
      <StyleWrapper
        id={id}
        style={style}
        $isTextArea={htmlTag === 'textarea'}
        className={className}
        $color={labelColor}
        $bgColor={bgColor}
        $borderColor={withErrors ? 'error' : borderColor}
      >
        <StyleLabel>
          {/* @ts-ignore */}
          <StyleInput
            // @ts-ignore
            ref={_ref}
            as={htmlTag}
            // override props
            {...restInputProps}
          />
        </StyleLabel>
      </StyleWrapper>
    );
  }
);

Input.displayName = 'Input';

export default Input;
