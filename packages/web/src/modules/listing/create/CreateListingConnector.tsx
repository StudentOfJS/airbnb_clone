import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import * as AntD from "antd";
import { Formik, Field, Form } from "formik";
import InputField from "../../shared/InputField";

const {
  Form: { Item: FormItem },
  Icon,
  Button
} = AntD;

export class CreateListingConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  submit = (values: any) => {
    console.log(values);
  };
  render() {
    return (
      <Formik initialValues={{}} onSubmit={this.submit}>
        {() => (
          <div style={{ display: "flex" }}>
            <Form style={{ margin: "auto" }}>
              <Field
                name="email"
                // tslint:disable-next-line:jsx-no-multiline-js
                prefix={
                  (
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  ) as any
                  // tslint:disable-next-line:jsx-curly-spacing
                }
                placeholder="email"
                component={InputField}
              />
              <Field
                name="password"
                // tslint:disable-next-line:jsx-no-multiline-js
                prefix={
                  (
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  ) as any
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
                  create listing
                </Button>
              </FormItem>
            </Form>
          </div>
        )}
      </Formik>
    );
  }
}
