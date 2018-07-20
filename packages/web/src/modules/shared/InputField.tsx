import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input, InputNumber } from "antd";

const FormItem = Form.Item;

const InputField: React.SFC<
  FieldProps<any> & {
    prefix: React.ReactNode;
    label?: string;
    useNumberComponent?: boolean;
  }
> = ({
  field: { onChange, ...field },
  form: { touched, errors, setFieldValue },
  label,
  useNumberComponent = false,
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const status = errorMsg ? "error" : undefined;
  const Comp = useNumberComponent ? InputNumber : Input;
  return (
    <FormItem label={label} help={errorMsg} validateStatus={status}>
      <Comp
        {...field}
        {...props}
        onChange={
          useNumberComponent
            ? (newValue: any) => setFieldValue(field.name, newValue)
            : onChange
        }
      />
    </FormItem>
  );
};
export default InputField;
