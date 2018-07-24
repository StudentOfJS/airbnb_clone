import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";

const dropStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name },
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  return (
    <Dropzone
      accept="image/jpeg, image/png"
      disablePreview={true}
      multiple={false}
      onDrop={([file]) => setFieldValue(name, file)}
      {...props}
    >
      {({ isDragActive, isDragReject }: any) => {
        if (isDragReject) {
          return (
            // @ts-ignore
            <div style={dropStyle}>
              <h3 style={{ color: "red" }}>File will be rejected</h3>
              <p>Only *.jpeg and *.png</p>
              <p>images will be accepted</p>
            </div>
          );
        }
        if (isDragActive) {
          return (
            // @ts-ignore
            <div style={dropStyle}>
              <h3 style={{ color: "green" }}>File accepted</h3>
            </div>
          );
        }
        return (
          // @ts-ignore
          <div style={dropStyle}>
            <h3>Drop an image here...</h3>
          </div>
        );
      }}
    </Dropzone>
  );
};
export default DropzoneField;
