"use client";
import React, { useState } from 'react';
import styles from '../styles/auth.module.css';

interface SignupFormProps {
  onSignup: (formData: SignupFormData) => void;
}

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    phone: '',
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
    <form className={styles['form-container']} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
