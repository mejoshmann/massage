import "./Contact.scss";
import contactImage from "../../assets/images/massage.webp";
import Form from "../../components/form/Form";

function Contact() {
  return (
    <>
      <div id="contact" className="contact">
        <div className="contact__container">
          <h2 className="contact__container--heading">Get In Touch</h2>
          <p className="contact__container--copy">
            Booking, Questions, or Feedback? Our team is ready to assist you.
            Reach ou today!
          </p>
          <h3 className="contact__container--sub-heading">
            Massage Appointments & Inquiries
          </h3>
          <div className="contact__container--container">
            <p className="contact__container--copy">
              <div className="email icon"></div>relaxmassagebc@gmail.com
            </p>
            <p className="contact__container--copy">
              <span className="phone icon"></span>7782381675
            </p>
            <p className="contact__container--copy">
              <span className="clock icon"></span>Mon - Fri 9am-6pm
            </p>
            <p className="contact__container--copy">
              <span className="clock icon"></span>Sat - Sun 11am - 6pm
            </p>
          </div>
          <Form />
        </div>
        <img
          src={contactImage}
          alt="Woman being massaged"
          className="contact__img"
        />
      </div>
    </>
  );
}

export default Contact;
