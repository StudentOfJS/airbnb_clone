import * as React from "react";
import { RegisterController } from "@airbnb_clone/controller";

import { RegisterView } from "./ui/RegisterView";
import { RouteComponentProps } from "react-router-dom";

const RegisterConnector: React.SFC<RouteComponentProps<{}>> = ({ history }) => {
  const onFinish = () =>
    history.push("/m/confirm-email", {
      message: "check your email for signup confirmation"
    });
  return (
    <RegisterController>
      {({ submit }: { submit: any }) => (
        <RegisterView onFinish={onFinish} submit={submit} />
      )}
    </RegisterController>
  );
};

export default RegisterConnector;
