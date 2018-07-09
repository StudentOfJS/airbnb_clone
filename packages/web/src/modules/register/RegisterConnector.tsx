import * as React from "react";
import { RegisterController } from "@airbnb_clone/controller";

import { RegisterView } from "./ui/RegisterView";

const RegisterConnector: React.SFC = () => {
  return (
    <RegisterController>
      {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
    </RegisterController>
  );
};

export default RegisterConnector;
