import * as React from "react";
import * as AntD from "antd";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { validUserSchema } from "@airbnb_clone/common";
import InputField from "../../shared/InputField";

const {
  Form: { Item: FormItem },
  Icon,
  Button
} = AntD;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class RegisterForm extends React.PureComponent<
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
          <Field
            name="password"
            // tslint:disable-next-line:jsx-no-multiline-js
            prefix={
              <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any
              // tslint:disable-next-line:jsx-curly-spacing
            }
            placeholder="password"
            type="password"
            component={InputField}
          />
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>{" "}
            Or <a href="">Login</a>
          </FormItem>
          <FormItem>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validateOnChange: true,
  validateOnBlur: false,
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RegisterForm);
