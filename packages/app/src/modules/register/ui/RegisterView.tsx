import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { validUserSchema } from "@airbnb_clone/common";
import InputField from "../../shared/InputField";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-elements";

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
      <View style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Card>
          <Text style={{ fontSize: 30, marginBottom: 10 }}>Register</Text>
          <Field
            name="email"
            secureTextEntry={false}
            placeholder="email"
            component={InputField}
            containerStyle={{ width: "100%" }}
            autoCapitalize="none"
          />
          <Field
            name="password"
            secureTextEntry={true}
            placeholder="password"
            type="password"
            component={InputField}
            containerStyle={{ width: "100%", marginBottom: 30 }}
          />
          <Button title="submit" onPress={handleSubmit as any} />
        </Card>
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
