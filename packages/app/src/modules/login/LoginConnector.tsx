import * as React from "react";
import { LoginController } from "@airbnb_clone/controller";
import { LoginView } from "./ui/LoginView";
import { SecureStore } from "expo";
import { SID_KEY } from "../shared/constants";

export class LoginConnector extends React.PureComponent {
  saveSessionId = (sid: string) => {
    SecureStore.setItemAsync(SID_KEY, sid);
  };

  render() {
    return (
      <LoginController onSessionId={this.saveSessionId}>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
