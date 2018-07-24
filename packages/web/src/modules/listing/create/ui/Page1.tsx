import * as React from "react";
import { Field } from "formik";
import InputField from "../../../shared/InputField";
import DropzoneField from "../../../shared/DropzoneField";

const Page1: React.SFC = () => (
  <React.Fragment>
    <Field
      label="Name:"
      name="name"
      placeholder="Name"
      component={InputField}
    />
    <Field
      label="Description:"
      name="description"
      placeholder="Description"
      component={InputField}
    />
    <Field
      label="Category:"
      name="category"
      placeholder="Category"
      component={InputField}
    />
    <Field label="Picture:" name="picture" component={DropzoneField} />
  </React.Fragment>
);

export default Page1;
