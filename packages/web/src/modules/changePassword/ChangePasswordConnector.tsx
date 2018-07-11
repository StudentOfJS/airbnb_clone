import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordController } from "@airbnb_clone/controller";

import { ChangePasswordView } from "./ui/ChangePasswordView";

const ChangePasswordConnector: React.SFC<
  RouteComponentProps<{ key: string }>
> = ({
  match: {
    params: { key }
  }
}) => {
  console.log(key);
  return (
    <ChangePasswordController>
      {({ submit }: { submit: any }) => (
        <ChangePasswordView
          // tslint:disable-next-line:jsx-no-lambda
          submit={async ({ newPassword }) =>
            submit({
              newPassword,
              key
            })
          }
        />
      )}
    </ChangePasswordController>
  );
};

export default ChangePasswordConnector;
