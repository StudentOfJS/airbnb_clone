import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input } from "antd";

const FormItem = Form.Item;

const InputField: React.SFC<
  FieldProps<any> & { prefix: React.ReactNode; label?: string }
> = ({ field, form: { touched, errors }, label, ...props }) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const status = errorMsg ? "error" : undefined;
  return (
    <FormItem label={label} help={errorMsg} validateStatus={status}>
      <Input {...field} {...props} />
    </FormItem>
  );
};
export default InputField;
