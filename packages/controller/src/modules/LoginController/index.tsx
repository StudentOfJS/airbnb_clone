import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { loginMutationVariables, loginMutation } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";

interface Props {
  children: (
    data: {
      submit: (
        values: loginMutationVariables
      ) => Promise<{ [key: string]: string } | null>;
    }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, loginMutation, loginMutationVariables>
> {
  submit = async (values: loginMutationVariables) => {
    console.log(values);
    const {
      data: { login }
    } = await this.props.mutate({ variables: values });
    console.log(`response: ${JSON.stringify(login)}`);

    if (login) {
      return normalizeErrors(login);
    }
    return null;
  };

  public render() {
    return this.props.children({ submit: this.submit });
  }
}

const loginMutation = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        path
        message
      }
      sessionId
    }
  }
`;

export const LoginController = graphql<
  Props,
  loginMutation,
  loginMutationVariables
>(loginMutation)(C);
