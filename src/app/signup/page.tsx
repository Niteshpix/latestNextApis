"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/auth.module.css';

interface SignupValues {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  password: Yup.string().min(8, 'Password should be at least 8 characters long').required('Password is required'),
});

export default function Signup() {
  const formik = useFormik<SignupValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
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
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <span className={styles.error}>{formik.errors.name}</span>
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
