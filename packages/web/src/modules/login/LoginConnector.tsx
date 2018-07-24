import * as React from "react";

import { LoginView } from "./ui/LoginView";
import { LoginController } from "@airbnb_clone/controller";
import { RouteComponentProps } from "react-router-dom";

const LoginConnector: React.SFC<RouteComponentProps<{}>> = ({
  history,
  location: { state }
}) => {
  const onFinish = () => {
    if (state && state.next) {
      return history.push(state.next);
    }
    history.push("/");
  };
  return (
    <LoginController>
      {({ submit }: { submit: any }) => (
        <LoginView submit={submit} onFinish={onFinish} />
      )}
    </LoginController>
  );
};

export default LoginConnector;
