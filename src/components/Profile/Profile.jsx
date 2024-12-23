import React from "react";
import FileUpload from "./DropImg";
import styled from "@emotion/styled";
import ProfileHeader from "./ProfileHeader";
import { Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import EditableInput from "./EditableInput";
import { colors } from "libs/Theme";
import { StanderS } from "utils/StanderStyles";

const Profile = ({setShowProfile}) => {
  const formik = useFormik({
    initialValues: {
      name: "ammar",
      email: "ammar@gmail.com",
      status: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required...")
        .min(3, "Minimum 3 characters..."),
      email: Yup.string().required("Email is required..."),
      status: Yup.string()
        .max(100, "Maximum 100 characters..."),
    }),
  });
  return (
    <ProfileContainer>
      <ProfileHeader setShowProfile={setShowProfile} />
      <FileUpload />

      <FieldsContainer spacing={2}>
        <EditableInput
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name}
          touched={formik.touched.name}
          label="name"
        />

        <EditableInput
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
          label="email"
        />

        <EditableInput
          value={formik.values.status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.status}
          touched={formik.touched.status}
          label="status"
        />
      </FieldsContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.bg};
  ${StanderS.Center("column", "center", "space-between")}
  padding-bottom: 30vh;
`;

const FieldsContainer = styled(Stack)`
  width: 90%;
`;

export default Profile;
