import * as React from "react";
import { RegisterController } from "@airbnb_clone/controller";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
