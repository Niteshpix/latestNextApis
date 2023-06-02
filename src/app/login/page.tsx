"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../styles/auth.module.css";
import { useRouter } from "next/navigation";

interface LoginValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters long")
    .required("Password is required"),
});

export default function Login() {
  const router = useRouter();
  const formik = useFormik<LoginValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values: any) => {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        console.log(response);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
      console.log(values);
    },
  });

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
