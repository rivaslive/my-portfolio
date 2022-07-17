import { FormProps } from 'rc-field-form';
import FormItem from './FormItem';
import { StyleForm } from './style';

// export interface FormProps extends RcFormProps {}
const Form = ({ name, form, ...props }: FormProps) => {
  return <StyleForm name={name} form={form} {...props} />;
};

Form.Item = FormItem;

export default Form;
