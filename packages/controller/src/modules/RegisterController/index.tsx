import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { register, registerVariables } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../types/NormailizedErrorMap";

interface Props {
  children: (
    data: {
      submit: (values: registerVariables) => Promise<NormalizedErrorMap | null>;
    }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, register, registerVariables>
> {
  submit = async (values: registerVariables) => {
    console.log(values);
    const { data } = await this.props.mutate({ variables: values });
    console.log(`response: ${data.register}`);
    if (data.register) {
      return normalizeErrors(data.register);
    }
    return null;
  };
  public render() {
    return this.props.children({ submit: this.submit });
  }
}

const registerMutation = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      message
      path
    }
  }
`;

export const RegisterController = graphql<Props, register, registerVariables>(
  registerMutation
)(C);
