import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  Form,
  ErrorMessage,
  Field,
  SubmitButton,
} from "styles/ValidationForm.js";
import { useStore } from "libs";
import { useNavigate } from "react-router-dom";
import { sendData } from "utils/API";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, setToken } = useStore();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email..."),
      password: Yup.string()
        .required("Password is required...")
        .max(50, "Maximum 50 characters..."),
    }),

    async onSubmit(values) {
      setLoading(true);
      await sendData('login', values, setUser, setToken, setError, navigate);
      setLoading(false);
    }
  });
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
      <ErrorMessage>{error}</ErrorMessage>
        <Field
          id="email"
          label="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/*//! check if filed focus and handle an error  */}
        {formik.errors.email && formik.touched.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
        <Field
          id="password"
          label="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        )}
        <SubmitButton type="submit" variant="contained">
        {loading ? "wait..." : "Login"}
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Login;
