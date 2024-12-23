import React, { useState } from "react";
import {
  Container,
  Form,
  ErrorMessage,
  Field,
  SubmitButton,
} from "styles/ValidationForm.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStore } from "libs";
import { useNavigate } from "react-router-dom";
import { sendData } from "utils/API";

const Register = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, setToken } = useStore();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required...")
        .min(3, "Minimum 3 characters...")
        .max(50, "Maximum 50 characters..."),
      email: Yup.string()
        .required("Email is required...")
        .email("Invalid Email"),
      password: Yup.string()
        .required("Password is required...")
        .min(8, "Minimum 8 characters...")
        .max(50, "Maximum 50 characters..."),
    }),

    async onSubmit(values) {
      setLoading(true);
      await sendData('register', values, setUser, setToken, setError, navigate);
      setLoading(false);
    },
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <ErrorMessage>{error}</ErrorMessage>
        <Field
          id="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/*//! check if filed focus and handle an error  */}
        {formik.touched.name && formik.errors.name && (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        )}

        <Field
          id="email"
          label="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
        <Field
          id="password"
          label="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        )}
        <SubmitButton type="submit" variant="contained" disabled={loading}>
          {loading ? "wait..." : "Register"}
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Register;
