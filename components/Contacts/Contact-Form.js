import { useState } from "react";

const ContactForm = ({ gap }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage("Thank you! We'll get back to you within 24 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setStatusMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`rbt-contact-address ${gap}`}>
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Replaced Image with iframe */}
          <div className="col-lg-6">
            <div className="thumbnail position-relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.988186948552!2d72.9273958!3d26.262046799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418fcbe7a1139d%3A0xcd1ee3709d5baa72!2sSwatrixsoft!5e0!3m2!1sen!2sin!4v1742318300744!5m2!1sen!2sin"
                className="w-100 radius-10 shadow-lg"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rbt-contact-form contact-form-style-1">
              <div className="section-title text-start">
                <span className="subtitle bg-primary-opacity">
                  GET IN TOUCH
                </span>
                <h3 className="title mb-4">
                  Start Your Digital Journey With Us
                </h3>
                <p className="description mb-4">
                  Have a project in mind? Fill out the form below and our experts will get back to you within 24 hours.
                </p>
              </div>

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="row g-3"
              >
                {/* Form Fields */}
                <div className="col-md-6">
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    required
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address*"
                    required
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="form-control"
                  />
                </div>

                <div className="col-12">
                  <input
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Type*"
                    required
                    className="form-control"
                  />
                </div>

                <div className="col-12">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project*"
                    required
                    className="form-control"
                    rows="4"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="rbt-btn btn-gradient hover-icon-reverse w-100"
                    disabled={isSubmitting}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      <span className="btn-icon">
                        <i className="feather-send"></i>
                      </span>
                    </span>
                  </button>
                </div>
              </form>

              {statusMessage && (
                <div
                  className={`alert ${
                    statusMessage.includes("Thank you")
                      ? "alert-success"
                      : "alert-danger"
                  } mt-4`}
                >
                  {statusMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
