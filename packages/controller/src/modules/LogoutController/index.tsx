import gql from "graphql-tag";
import * as React from "react";
import { Mutation } from "react-apollo";
import { LogoutMutation } from "../../schemaTypes";

const logoutMutation = gql`
  mutation LogoutMutation {
    logout
  }
`;

interface IProps {
  children: (
    data: {
      logout: () => void;
    }
  ) => JSX.Element | null;
}
/* tslint:disable: jsx-no-multiline-js */
export const LogoutController: React.SFC<IProps> = ({ children }) => (
  <Mutation<LogoutMutation, {}> mutation={logoutMutation}>
    {(mutate, { client }) =>
      children({
        logout: async () => {
          await mutate();
          await client.resetStore();
        }
      })
    // tslint:disable-next-line:jsx-curly-spacing
    }
  </Mutation>
);
