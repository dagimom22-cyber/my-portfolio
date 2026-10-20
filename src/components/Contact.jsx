import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "That email doesn't look right.";
    }
    if (!form.message.trim()) newErrors.message = "Please add a short message.";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="section__inner">
        <p className="eyebrow">Contact</p>
        <h2 className="section__title">Let's build something together 🚀</h2>

        <div className="contact__grid">
          <div className="contact__info">
            <p>
              I'm always open to conversations about frontend work, backend
              systems, or anything in between. Reach out — I'll get back to
              you.
            </p>
            <ul className="contact__links">
              <li>
                <span>Email</span>
                <a href="mailto:Add-your-email-here@example.com">Add-your-email-here@example.com</a>
              </li>
              <li>
                <span>GitHub</span>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  Add your GitHub profile
                </a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  Add your LinkedIn profile
                </a>
              </li>
            </ul>
          </div>

          <form className="card contact__form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <p className="contact__success" role="status">
                Thanks — your message has been noted. I'll reply soon.
              </p>
            )}

            <label className="field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              {errors.name && <em className="field__error">{errors.name}</em>}
            </label>

            <label className="field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              {errors.email && <em className="field__error">{errors.email}</em>}
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to build?"
                rows={5}
              />
              {errors.message && <em className="field__error">{errors.message}</em>}
            </label>

            <button type="submit" className="btn btn--primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
