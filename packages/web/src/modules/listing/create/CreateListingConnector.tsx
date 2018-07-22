import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import * as AntD from "antd";
import { Formik, Form } from "formik";
import Page1 from "./ui/Page1";
import Page2 from "./ui/Page2";
import Page3 from "./ui/Page3";
import {
  withCreateListing,
  NewPropsCreateListing
} from "@airbnb_clone/controller";

const {
  Form: { Item: FormItem },
  Button
} = AntD;

interface FormValues {
  name: string;
  description: string;
  category: string;
  price: number;
  beds: number;
  guests: number;
  lat: number;
  long: number;
  amenities: string[];
}

interface State {
  page: number;
}

const pages = { 1: <Page1 />, 2: <Page2 />, 3: <Page3 /> };

class C extends React.PureComponent<
  RouteComponentProps<{}> & NewPropsCreateListing,
  State
> {
  state = { page: 1 };
  submit = (values: FormValues) => {
    this.props.createListing(values);
  };
  nextPage = () => this.setState(prevState => ({ page: prevState.page + 1 }));
  render() {
    return (
      <Formik<{}, FormValues>
        initialValues={{
          name: "",
          description: "",
          category: "",
          price: 0,
          beds: 0,
          guests: 0,
          lat: 0,
          long: 0,
          amenities: []
        }}
        onSubmit={this.submit}
      >
        {() => (
          <div style={{ display: "flex" }}>
            <Form style={{ margin: "auto", paddingTop: 20 }}>
              {pages[this.state.page]}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: 300
                }}
              >
                <FormItem>
                  {this.state.page === 3 ? (
                    <div>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        create listing
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={this.nextPage}
                      type="primary"
                      htmlType="button"
                      className="login-form-button"
                    >
                      next page
                    </Button>
                  )}
                </FormItem>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    );
  }
}

export const CreateListingConnector = withCreateListing(C);
