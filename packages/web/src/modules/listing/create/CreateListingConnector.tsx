import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import * as AntD from "antd";
import { Formik, Form } from "formik";
import Page1 from "./ui/Page1";
import Page2 from "./ui/Page2";
import Page3 from "./ui/Page3";

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

export class CreateListingConnector extends React.PureComponent<
  RouteComponentProps<{}>,
  State
> {
  state = { page: 1 };
  submit = (values: any) => {
    console.log(values);
  };
  nextPage = () => this.setState(prevState => ({ page: prevState.page + 1 }));
  render() {
    return (
      <Formik<{}, FormValues>
        initialValues={{
          name: "string",
          description: "string",
          category: "string",
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
            <Form style={{ margin: "auto" }}>
              {pages[this.state.page]}
              <FormItem>
                {this.state.page === 3 ? (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    create listing
                  </Button>
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
            </Form>
          </div>
        )}
      </Formik>
    );
  }
}
