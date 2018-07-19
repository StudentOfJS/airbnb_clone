import * as React from "react";
import { Field } from "formik";
import InputField from "../../../shared/InputField";

const Page3: React.SFC = () => (
  <React.Fragment>
    <Field name="lat" placeholder="latitude" component={InputField} />
    <Field name="long" placeholder="lontitude" component={InputField} />
    <Field name="amenities" placeholder="Amenities" component={InputField} />
  </React.Fragment>
);

export default Page3;
