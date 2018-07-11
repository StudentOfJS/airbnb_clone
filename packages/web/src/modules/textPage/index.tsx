import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

export class TextPage extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    const {
      location: { state }
    } = this.props.history;
    return <h2>{state && state.message ? state.message : "hello"}</h2>;
  }
}
