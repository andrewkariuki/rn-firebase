import { Formik } from "formik";
import React from "react";
import { ShareFormTitle } from "../../molecules";

interface ShareFormProps {}

const ShareForm: React.FC<ShareFormProps> = ({}) => {
  return (
    <Formik
      initialValues={{ title: "", body: "" }}
      onSubmit={(values) => console.log(values)}>
      <ShareFormTitle />
    </Formik>
  );
};
export default ShareForm;
