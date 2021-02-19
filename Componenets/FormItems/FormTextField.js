import React from "react";
import FormTextInput from "./FormTextInput";
import { useFormikContext } from "formik";
function FormTextField({ name, context, ...otherprops }) {
  const {
    setFieldTouched,
    handleChange,
    touched,
    values,
    errors,
  } = useFormikContext();
  return (
    <FormTextInput
      text={name[0].toUpperCase() + name.substring(1) + ":"}
      onChangeText={handleChange(name)}
      value={values[name]}
      textstyle={{ fontSize: 20, fontWeight: "900" }}
      textContentType={context}
      placeholder={"Enter " + name}
      errors={errors[name]}
      onBlur={() => setFieldTouched(name)}
      errorvisibility={touched[name]}
      {...otherprops}
    />
  );
}

export default FormTextField;
