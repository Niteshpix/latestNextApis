"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../styles/auth.module.css";
import { useRouter } from "next/navigation";

interface SignupValues {
  username: string;
  email: string;
  phone: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters long")
    .required("Password is required"),
});

export default function Signup() {
  const router = useRouter()
  const formik = useFormik<SignupValues>({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log("User registered successfully");
          // Perform any additional actions on successful registration
          router.push('/login')
          
        } else {
          console.error("Error registering user:", response.statusText);
          // Handle the error condition
        }
      } catch (error) {
        console.error("Error registering user:", error);
        // Handle the error condition
      }
    },
  });

  return (
    <div className={styles.container}>
      <h2>Signup</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <span className={styles.error}>{formik.errors.username}</span>
          )}
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <span className={styles.error}>{formik.errors.email}</span>
          )}
        </label>
        <label>
          <span>Phone:</span>
          <input
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <span className={styles.error}>{formik.errors.phone}</span>
          )}
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <span className={styles.error}>{formik.errors.password}</span>
          )}
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
