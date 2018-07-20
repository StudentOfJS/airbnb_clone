import * as React from "react";
import { FieldProps } from "formik";
import { Form, Select } from "antd";

const FormItem = Form.Item;

const TagField: React.SFC<
  FieldProps<any> & {
    prefix: React.ReactNode;
    label?: string;
  }
> = ({
  field: { onChange, onBlur: _, ...field },
  form: { touched, errors, setFieldValue },
  label,
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const status = errorMsg ? "error" : undefined;
  return (
    <FormItem label={label} help={errorMsg} validateStatus={status}>
      <Select
        {...field}
        {...props}
        mode="tags"
        onChange={(newValue: any) => setFieldValue(field.name, newValue)}
      />
    </FormItem>
  );
};
export default TagField;
