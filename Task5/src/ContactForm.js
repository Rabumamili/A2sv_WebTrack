import React from "react";
import { useForm } from "react-hook-form";
import "./contactForm.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Contact Us</h2>
        <p>Got a question or just want to say hello? 
        We're all ears, drop us a line below!</p>
        
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only alphabets are allowed",
              },
            })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Your Mail"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <textarea
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>

        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
