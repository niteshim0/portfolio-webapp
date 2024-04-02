import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import {
  ContactButton,
  ContactInput,
  ContactForm,
  ContactInputMessage,
  ContactTitle,
  Container,
  Wrapper,
  Title,
  Desc
} from './ContactStyle.js';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null); // State for handling errors
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const email = form.current.elements.from_email.value;
    const name = form.current.elements.from_name.value;
    const message = form.current.elements.message.value;
  
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address');
      return;
    }
  
    if (!name.trim()) {
      setError('Please provide your name');
      return;
    }
  
    if (!message.trim()) {
      setError('Please provide a message');
      return;
    }
  
    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICEID,import.meta.env.VITE_EMAILJS_TEMPLATE,form.current,import.meta.env.VITE_EMAILJS_PUBLICKEY)
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
          setError(null);
        },
        (error) => {
          setError('Failed to send email. Please try again later.');
          console.log(error.text);
        }
      );
  };
  

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          alert="success"
        />
        <Snackbar
          open={!!error} 
          autoHideDuration={3000}
          onClose={() => setError(null)}
          message={error}
          alert="error"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
