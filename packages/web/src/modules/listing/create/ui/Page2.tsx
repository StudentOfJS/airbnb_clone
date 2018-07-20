import * as React from "react";
import { Field } from "formik";
import InputField from "../../../shared/InputField";

const Page2: React.SFC = () => (
  <React.Fragment>
    <Field
      label="Price:"
      name="price"
      placeholder="Price"
      component={InputField}
    />
    <Field
      label="Beds:"
      name="beds"
      placeholder="Beds"
      component={InputField}
    />
    <Field
      label="Guests:"
      name="guests"
      placeholder="Guests"
      component={InputField}
    />
  </React.Fragment>
);

export default Page2;
