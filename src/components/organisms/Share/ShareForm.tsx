import { Formik } from "formik";
import React from "react";
import { GLOBAL } from "../../../constants";
import { yupStoriesSchema } from "../../../utils";
import { ShareFormTitle } from "../../molecules";

interface ShareFormProps {}

const ShareForm: React.FC<ShareFormProps> = ({}) => {
  return (
    <Formik
      initialValues={{ title: "", body: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={yupStoriesSchema}>
      {({ handleChange, handleBlur, values, errors }) => (
        <ShareFormTitle
          label={GLOBAL.title}
          onBlurFunction={handleBlur("title")}
          value={values.title}
          onChangeTextFunction={handleChange("title")}
          errors={errors.title}
        />
      )}
    </Formik>
  );
};
export default ShareForm;
