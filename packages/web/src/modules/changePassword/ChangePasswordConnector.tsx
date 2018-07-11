import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordView } from "./ui/ChangePasswordView";
import { ChangePasswordController } from "@airbnb_clone/controller";

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
      {({ submit }: { submit: any }) => <ChangePasswordView submit={submit} />}
    </ChangePasswordController>
  );
};

export default ChangePasswordConnector;
