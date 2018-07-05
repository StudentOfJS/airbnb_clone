import * as React from "react";
import { RegisterController } from "@airbnb_clone/controller";

import { RegisterView } from "./ui/RegisterView";

interface RegisterConnectorProps {
  text: string;
}

const RegisterConnector: React.SFC<RegisterConnectorProps> = props => {
  return (
    <RegisterController>
      {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
    </RegisterController>
  );
};

export default RegisterConnector;
