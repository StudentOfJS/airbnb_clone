import * as React from "react";
import * as AntD from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import InputField from "../../shared/InputField";
// import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@airbnb_clone/controller";
const {
  Form: { Item: FormItem },
  Icon,
  Button
} = AntD;

interface FormValues {
  email: string;
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class ForgotPasswordForm extends React.PureComponent<
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
            name="email"
            // tslint:disable-next-line:jsx-no-multiline-js
            prefix={
              <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
              // tslint:disable-next-line:jsx-curly-spacing
            }
            placeholder="email"
            component={InputField}
          />
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              reset password
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(ForgotPasswordForm);
