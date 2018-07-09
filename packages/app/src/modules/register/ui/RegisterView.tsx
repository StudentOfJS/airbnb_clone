import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { validUserSchema } from "@airbnb_clone/common";
import InputField from "../../shared/InputField";
import { View, Button } from "react-native";

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
      <View style={{ width: 400, margin: "auto" }}>
        <Field
          name="email"
          // tslint:disable-next-line:jsx-no-multiline-js
          placeholder="email"
          component={InputField}
        />
        <Field
          name="password"
          // tslint:disable-next-line:jsx-no-multiline-js
          placeholder="password"
          type="password"
          component={InputField}
        />
        <Button title="submit" onPress={handleSubmit as any} />
      </View>
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
