import * as React from "react";
import { LogoutController } from "@airbnb_clone/controller";
import CallLogout from "./CallLogout";
import { RouteComponentProps } from "react-router-dom";

export default class Logout extends React.PureComponent<
  RouteComponentProps<{}>
> {
  public onFinish = () => {
    this.props.history.push("/login");
  };
  public render() {
    return (
      <LogoutController>
        {({ logout }) => (
          <CallLogout logout={logout} onFinish={this.onFinish} />
        )}
      </LogoutController>
    );
  }
}
