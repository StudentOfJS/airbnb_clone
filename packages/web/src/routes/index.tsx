import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterConnector from "../modules/register/RegisterConnector";
import LoginConnector from "../modules/login/LoginConnector";
import ForgotPasswordConnector from "../modules/forgotPassword/ForgotPasswordConnector";
import ChangePasswordConnector from "../modules/changePassword/ChangePasswordConnector";
import { TextPage } from "../modules/textPage";
import { AuthRoute } from "@airbnb_clone/controller";
import { CreateListingConnector } from "../modules/listing/create/CreateListingConnector";
import { FindListingsConnector } from "../modules/listing/find/FindListingsConnector";
import Logout from "../modules/logout";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/register" component={RegisterConnector} />
      <Route exact={true} path="/login" component={LoginConnector} />
      <Route
        exact={true}
        path="/forgot-password"
        component={ForgotPasswordConnector}
      />
      <Route
        exact={true}
        path="/change-password/:key"
        component={ChangePasswordConnector}
      />
      <Route path="/m" component={TextPage} />
      <AuthRoute path="/create-listing" component={CreateListingConnector} />
      <Route path="/logout" component={Logout} />
      <Route path="/" component={FindListingsConnector} />
    </Switch>
  </BrowserRouter>
);
