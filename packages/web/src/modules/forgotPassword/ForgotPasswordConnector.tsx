import * as React from "react";

import { ForgotPasswordView } from "./ui/ForgotPasswordView";
import { ForgotPasswordController } from "@airbnb_clone/controller";

const ForgotPasswordConnector: React.SFC = () => (
  <ForgotPasswordController>
    {({ submit }: { submit: any }) => <ForgotPasswordView submit={submit} />}
  </ForgotPasswordController>
);

export default ForgotPasswordConnector;
