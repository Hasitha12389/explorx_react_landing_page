import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';                // install for check validation
import { ThemeContext } from '../context/ThemeContext';
import './ContactForm.css';

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { theme } = useContext(ThemeContext);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Form submitted', values);
      setFormSubmitted(true);
      resetForm();
    },
  });

  return (
    <div className={`form-container ${theme}`}>
      <h1>Contact Us</h1>
      {formSubmitted ? (
        <div className="success-message">
          <p>Thank you for your message!</p>
          <button onClick={() => setFormSubmitted(false)}>Submit another message</button>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className={formik.touched.name && formik.errors.name ? 'input-error' : ''}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={formik.touched.message && formik.errors.message ? 'input-error' : ''}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="error">{formik.errors.message}</div>
            )}
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
