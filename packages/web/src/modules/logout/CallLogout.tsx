import * as React from "react";

export interface CallLogoutProps {
  logout: () => void;
  onFinish: () => void;
}

export default class CallLogout extends React.PureComponent<CallLogoutProps> {
  public async componentDidMount() {
    await this.props.logout();
    this.props.onFinish();
  }
  public render() {
    return null;
  }
}
