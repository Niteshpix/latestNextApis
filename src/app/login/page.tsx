"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { NextPage } from "next";
import { Mulish } from "next/font/google";
import styles from "../../app/login/contact.module.css";

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

interface User {
  username: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: NextPage = () => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      });

      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: ""
        });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className={mulish.className}
            value={user.username}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={mulish.className}
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            className={mulish.className}
            value={user.phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Enter your Message"
            className={mulish.className}
            value={user.message}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
        {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

        <button type="submit" className={mulish.className}>Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
