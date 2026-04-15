import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message is required";
    else if (formData.message.trim().length < 10) errors.message = "Message must be at least 10 characters";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("Please fix the errors above");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("Message sent successfully! 🎉");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error(error);
      setStatus("Unable to send message. Please try again later. ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or just want to say hello? I'd love to hear from you!</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Tell me about your project or just say hello..."
                  className={errors.message ? 'error' : ''}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>

            {status && (
              <div className={`status-message ${status.includes('successfully') ? 'success' : 'error'}`}>
                {status}
              </div>
            )}
          </div>

          <div className="contact-info">
            <h3>Let's Connect</h3>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:chilepooja761@gmail.com">chilepooja761@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <i className="fab fa-github"></i>
                <div>
                  <strong>GitHub</strong>
                  <a href="https://github.com/pooja5267" target="_blank" rel="noopener noreferrer">
                    github.com/pooja5267
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <div>
                  <strong>LinkedIn</strong>
                  <a href="https://www.linkedin.com/in/pooja-chile-958223366/" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/pooja5267" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/pooja-chile-958223366/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:chilepooja761@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
