import * as React from "react";
import { Field } from "formik";
import InputField from "../../../shared/InputField";
import TagField from "../../../shared/TagField";

const Page3: React.SFC = () => (
  <React.Fragment>
    <Field
      label="Latitude: "
      name="lat"
      placeholder="latitude"
      component={InputField}
      useNumberComponent={true}
    />
    <Field
      label="Lontitude:"
      name="long"
      placeholder="lontitude"
      component={InputField}
      useNumberComponent={true}
    />
    <Field
      label="Amenities:"
      name="amenities"
      placeholder="Amenities"
      component={TagField}
    />
  </React.Fragment>
);

export default Page3;
