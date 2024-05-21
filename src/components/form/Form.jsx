import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Form.scss";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (formSubmitted) {
    return (
      <p className="success">
        Thank you, you will hear from us shortly
      </p>
    );
  }
  return (
      <form
        className="form"
        onSubmit={handleSubmit}
        method="POST"
        data-netlify="true"
      >
        <h3 className="form__heading">Reach Us By Email</h3>
        <div className="form__input">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="* Name"
          />
        </div>
        <div className="form__input">
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="* Phone Number"
          />
        </div>
        <div className="form__input">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="* Email"
          />
        </div>
      
        <div className="form__input">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            placeholder=" Message"
          />
        </div>
        <div className="form__buttons">
          <button className="form__button" type="submit">
            SUBMIT
          </button>{" "}
          <button className="form__button">
            {" "}
            <a className="form__button" href="tel:+167786083401">
              GIVE US A CALL
            </a>
          </button>
        </div>
      </form>
  );
}

export default Form;
