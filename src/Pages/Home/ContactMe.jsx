import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_or8i3c7", // Replace with your EmailJS service ID
        "template_ykbh7ep", // Replace with your EmailJS template ID
        formData,
        "gJCVxP7dQjZdVFySE" // Replace with your EmailJS user ID
      )
      .then((result) => {
        console.log(result.text);
        setSubmitted(true); // Set the submitted state to true
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <style>{`
        .checkmark-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .checkmark {
          width: 72px;
          height: 72px;
          stroke-width: 2;
          stroke: #4caf50;
          stroke-miterlimit: 10;
          animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
        }

        .checkmark-circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: #4caf50;
          fill: #fff;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .checkmark-check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.4s forwards;
        }

        @keyframes stroke {
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes scale {
          0%, 100% {
            transform: none;
          }
          50% {
            transform: scale3d(1.1, 1.1, 1);
          }
        }

        @keyframes fill {
          100% {
            box-shadow: inset 0px 0px 0px 30px #4caf50;
          }
        }

        .success-message {
          font-size: 1.2em;
          color: #4caf50;
          margin-top: 20px;
        }
      `}</style>
      <div>
        <h2>Get in touch</h2>
        <p className="text-lg">Would love to meet and speak with you!</p>
      </div>
      {submitted ? (
        <div className="checkmark-container">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark-circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark-check"
              fill="none"
              d="M14 27l10 10 14-14"
            />
          </svg>
          <p className="success-message">Message sent successfully!</p>
        </div>
      ) : (
        <form className="contact--form--container" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="fullName" className="contact--label">
              <input
                type="text"
                className="contact--input text-md"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="email" className="contact--label">
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label htmlFor="message" className="contact--label">
            <textarea
              className="contact--input text-md"
              id="message"
              name="message"
              rows="8"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <div>
            <button
              type="submit"
              className="btn btn-primary contact--form--btn"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
