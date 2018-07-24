import * as React from "react";
import { graphql, ChildProps } from "react-apollo";
import gql from "graphql-tag";
import { RouteProps, Route, RouteComponentProps, Redirect } from "react-router";
import { meQuery } from "../../schemaTypes";

type Props = RouteProps;

class C extends React.PureComponent<ChildProps<Props, meQuery>> {
  renderRoute = (routeProps: RouteComponentProps<{}>) => {
    const { data, component } = this.props;
    if (!data || data.loading) {
      return null;
    }
    if (!data.me) {
      return (
        <Redirect
          // tslint:disable-next-line:jsx-no-multiline-js
          to={{
            pathname: "/login",
            state: { next: routeProps.location.pathname }
          }}
        />
      );
    }
    const Component = component as any;
    return <Component {...routeProps} />;
  };

  render() {
    const { data: _, component: __, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
  }
}

const meQuery = gql`
  query meQuery {
    me {
      email
    }
  }
`;

export const AuthRoute = graphql<Props, meQuery>(meQuery)(C);
