import * as React from "react";
import {
  graphql,
  ChildMutateProps,
  withApollo,
  WithApolloClient
} from "react-apollo";
import gql from "graphql-tag";
import { loginMutationVariables, loginMutation } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../types/NormailizedErrorMap";

interface Props {
  onSessionId?: (sessionId: string) => void;
  children: (
    data: {
      submit: (
        values: loginMutationVariables
      ) => Promise<NormalizedErrorMap | null>;
    }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<
    WithApolloClient<Props>,
    loginMutation,
    loginMutationVariables
  >
> {
  submit = async (values: loginMutationVariables) => {
    const {
      data: {
        login: { errors, sessionId }
      }
    } = await this.props.mutate({ variables: values });

    if (errors) {
      return normalizeErrors(errors);
    }
    if (sessionId && this.props.onSessionId) {
      this.props.onSessionId(sessionId);
    }

    this.props.client.resetStore();

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
>(loginMutation)(withApollo<Props>(C as any));
