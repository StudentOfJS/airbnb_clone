import * as React from "react";

import { ForgotPasswordView } from "./ui/ForgotPasswordView";
import { ForgotPasswordController } from "@airbnb_clone/controller";
import { RouteComponentProps } from "react-router-dom";

const ForgotPasswordConnector: React.SFC<RouteComponentProps<{}>> = ({
  history
}) => {
  const onFinish = () =>
    history.push("/m/reset-password", {
      message: "check your email for password reset link"
    });
  return (
    <ForgotPasswordController>
      {({ submit }: { submit: any }) => (
        <ForgotPasswordView submit={submit} onFinish={onFinish} />
      )}
    </ForgotPasswordController>
  );
};

export default ForgotPasswordConnector;
