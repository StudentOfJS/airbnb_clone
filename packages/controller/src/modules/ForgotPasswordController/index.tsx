import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  sendForgotPasswordEmail,
  sendForgotPasswordEmailVariables
} from "../../schemaTypes";

interface Props {
  children: (
    data: {
      submit: (values: sendForgotPasswordEmailVariables) => Promise<null>;
    }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<
    Props,
    sendForgotPasswordEmail,
    sendForgotPasswordEmailVariables
  >
> {
  submit = async (values: sendForgotPasswordEmailVariables) => {
    console.log(values);
    const response = await this.props.mutate({ variables: values });
    console.log(`response: ${response}`);
    return null;
  };

  public render() {
    return this.props.children({ submit: this.submit });
  }
}

const forgotPasswordMutation = gql`
  mutation sendForgotPasswordEmail($email: String!) {
    sendForgotPasswordEmail(email: $email)
  }
`;

export const ForgotPasswordController = graphql<
  Props,
  sendForgotPasswordEmail,
  sendForgotPasswordEmailVariables
>(forgotPasswordMutation)(C);
