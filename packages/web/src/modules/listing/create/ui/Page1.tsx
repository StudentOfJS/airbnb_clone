import * as React from "react";
import { Field } from "formik";
import InputField from "../../../shared/InputField";

const Page1: React.SFC = () => (
  <React.Fragment>
    <Field name="name" placeholder="Name" component={InputField} />
    <Field
      name="description"
      placeholder="Description"
      component={InputField}
    />
    <Field name="category" placeholder="Category" component={InputField} />
  </React.Fragment>
);

export default Page1;
