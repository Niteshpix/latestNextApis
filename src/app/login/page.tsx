"use client";
import React, { useState } from "react";
import styles from "../styles/auth.module.css";

interface SigninFormProps {
  onSignup: (formData: SignupFormData) => void;
}

interface SignupFormData {
  email: string;
  password: string;
}

const SignupForm: React.FC<SigninFormProps> = ({ onSignup }) => {
  const [formData, setFormData] = useState<SignupFormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSignup(formData);
  };

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
