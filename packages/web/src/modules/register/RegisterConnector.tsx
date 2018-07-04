import * as React from "react";
import { RegisterView } from "./ui/RegisterView";

interface RegisterConnectorProps {
  text: string;
}

const RegisterConnector: React.SFC<RegisterConnectorProps> = props => {
  const dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };
  return <RegisterView submit={dummySubmit} />;
};

export default RegisterConnector;
