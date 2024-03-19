import React from "react";
import InputField from "../../components/InputField";
import { useFormik } from "formik";
import { signupSchema } from "../../utils/signupSchema";

const initialValues = {
  name: "",
  email: "",
  phone_no: "",
  password: "",
  confirm_password: "",
};

const SignupPage = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        // SignUp work here
        console.log("Registration Details : " + JSON.stringify(values));
        action.resetForm();
      },
    });

  return (
    <>
      <div>
        <div>
          <div>
            <h1>Welcomeee!</h1>
            <p>Please complete the registration!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <InputField
                label="Name"
                name="name"
                type="text"
                value={values.name}
                handleChange={handleChange}
                error={errors.name}
                handleBlur={handleBlur}
                touched={touched.name}
              />
              <InputField
                label="Email"
                name="email"
                type="text"
                value={values.email}
                handleChange={handleChange}
                error={errors.email}
                handleBlur={handleBlur}
                touched={touched.email}
              />
              <InputField
                label="Phone No."
                name="phone_no"
                type="tel"
                value={values.phone_no}
                handleChange={handleChange}
                error={errors.phone_no}
                handleBlur={handleBlur}
                touched={touched.phone_no}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                value={values.password}
                handleChange={handleChange}
                error={errors.password}
                handleBlur={handleBlur}
                touched={touched.password}
              />
              <InputField
                label="Confirm Password"
                name="confirm_password"
                type="password"
                value={values.confirm_password}
                handleChange={handleChange}
                error={errors.confirm_password}
                handleBlur={handleBlur}
                touched={touched.confirm_password}
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
