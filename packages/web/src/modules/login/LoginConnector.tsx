import * as React from "react";

import { LoginView } from "./ui/LoginView";
import { LoginController } from "@airbnb_clone/controller";

const LoginConnector: React.SFC = () => (
  <LoginController>
    {({ submit }: { submit: any }) => <LoginView submit={submit} />}
  </LoginController>
);

export default LoginConnector;
