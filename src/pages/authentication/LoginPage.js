import React from "react";
import InputField from "../../components/InputField";
import { useFormik } from "formik";
import { loginSchema } from "../../utils/loginSchema";

const initialValues = {
  loginEmail: "",
  loginPassword: "",
};

const LoginPage = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        // Login work here
        console.log("Login Details : " + JSON.stringify(values));
        action.resetForm();
      },
    });

  return (
    <>
      <div>
        <div>
          <div>
            <h1>Welcome Back!</h1>
            <p>Please Login!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <InputField
                label="Email"
                name="loginEmail"
                type="email"
                value={values.loginEmail}
                handleChange={handleChange}
                error={errors.loginEmail}
                handleBlur={handleBlur}
                touched={touched.loginEmail}
              />
              <InputField
                label="Password"
                name="loginPassword"
                type="password"
                value={values.loginPassword}
                handleChange={handleChange}
                error={errors.loginPassword}
                handleBlur={handleBlur}
                touched={touched.loginPassword}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
