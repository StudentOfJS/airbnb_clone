import * as React from "react";
import * as AntD from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import InputField from "../../shared/InputField";
// import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@airbnb_clone/controller";
import { ChangePasswordSchema } from "@airbnb_clone/common";

const {
  Form: { Item: FormItem },
  Icon,
  Button
} = AntD;

interface FormValues {
  newPassword: string;
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class ChangePasswordForm extends React.PureComponent<
  FormikProps<FormValues> & Props
> {
  validate = (touched: boolean | undefined, errors: any) => {
    if (!touched) {
      return "validating";
    }
    if (errors) {
      return "error";
    }
    return "success";
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <Form style={{ margin: "auto" }} onSubmit={handleSubmit}>
          <Field
            name="newPassword"
            type="password"
            placeholder="New Password"
            prefix={
              <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any
              // tslint:disable-next-line:jsx-curly-spacing
            }
            component={InputField}
          />
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              change password
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export const ChangePasswordView = withFormik<Props, FormValues>({
  validationSchema: ChangePasswordSchema,
  mapPropsToValues: () => ({ newPassword: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(ChangePasswordForm);
