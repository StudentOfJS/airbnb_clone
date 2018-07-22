import * as React from "react";
import * as AntD from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import InputField from "../../shared/InputField";
import { loginSchema } from "@airbnb_clone/common";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@airbnb_clone/controller";
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
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class LoginForm extends React.PureComponent<FormikProps<FormValues> & Props> {
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
    return (
      <div style={{ display: "flex" }}>
        <Form style={{ margin: "auto" }}>
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
              Login
            </Button>{" "}
            Or <Link to="/register">Register</Link>
          </FormItem>
          <FormItem>
            <Link to="/forgot-password">forgot password</Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validateOnChange: false,
  validateOnBlur: false,
  validationSchema: loginSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(LoginForm);
