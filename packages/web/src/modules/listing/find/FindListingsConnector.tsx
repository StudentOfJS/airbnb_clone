import * as React from "react";

export interface IFindListingsConnectorProps {
  hello?: string;
}

export default class FindListingsConnector extends React.PureComponent<
  IFindListingsConnectorProps,
  any
> {
  public render() {
    return <div>hello</div>;
  }
}
