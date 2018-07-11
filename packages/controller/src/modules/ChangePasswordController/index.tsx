import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  forgotPasswordChangeVariables,
  forgotPasswordChange
} from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../types/NormailizedErrorMap";

interface Props {
  onSessionId?: (sessionId: string) => void;
  children: (
    data: {
      submit: (
        values: forgotPasswordChangeVariables
      ) => Promise<NormalizedErrorMap | null>;
    }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, forgotPasswordChange, forgotPasswordChangeVariables>
> {
  submit = async (values: forgotPasswordChangeVariables) => {
    console.log(values);
    const {data} = await this.props.mutate({ variables: values });
    if(data.forgotPasswordChange) {
      console.log("response",data.forgotPasswordChange);
      return normalizeErrors(data.forgotPasswordChange)
    }
    return null;
  };

  public render() {
    return this.props.children({ submit: this.submit });
  }
}

const changePasswordMutation = gql`
  mutation forgotPasswordChange($newPassword: String!, $key: String!) {
    forgotPasswordChange(newPassword: $newPassword, key: $key) {
      path
      message
    }
  }
`;

export const ChangePasswordController = graphql<
  Props,
  forgotPasswordChange,
  forgotPasswordChangeVariables
>(changePasswordMutation)(C);
