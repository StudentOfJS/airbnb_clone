import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";

const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name },
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  return (
    <Dropzone
      accept="image/jpeg, image/png"
      multiple={false}
      onDrop={([file]) => setFieldValue(name, file)}
      {...props}
    >
      <p>Try dropping some files here, or click to select files to upload.</p>
      <p>Only *.jpeg and *.png images will be accepted</p>
    </Dropzone>
  );
};
export default DropzoneField;
