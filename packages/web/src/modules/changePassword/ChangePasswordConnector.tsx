import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordController } from "@airbnb_clone/controller";

import { ChangePasswordView } from "./ui/ChangePasswordView";

const ChangePasswordConnector: React.SFC<
  RouteComponentProps<{ key: string }>
> = ({
  history,
  match: {
    params: { key }
  }
}) => {
  const onFinish = () => history.push("/login");
  return (
    <ChangePasswordController>
      {({ submit }: { submit: any }) => (
        <ChangePasswordView
          onFinish={onFinish}
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
