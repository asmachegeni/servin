import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Contact.css";
import bg from "./../../assets/slider/servin-3.jpg";
import pic from "./../../assets/intro/servin-5.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
interface Error {
  email?: string;
  tel?: string;
  name?: string;
  comment?: string;
}
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="serv-header">
        <img src={bg} className="serv-img" />
        <div className="serv-box"></div>
        <h2 className="serv-title">تماس با ما</h2>
      </div>
      <div className="contact-card-section">
        <div className="contact-card">
          <div className="card-contact-icon">
            <BsFillTelephoneFill className="ft-icon" />
          </div>

          <div className="card-contact-text">
            <span>شماره تماس</span>
            <span>(+98) 916 - 123- 4567</span>
          </div>
        </div>
        <div className="contact-card">
          <div className="card-contact-icon">
            <MdMail className="ft-icon" />
          </div>
          <div className="card-contact-text">
            <span>پست الکترونیک </span>
            <span>info@themento.com</span>
          </div>
        </div>
        <div className="contact-card">
          <div className="card-contact-icon">
            <FaLocationDot className="ft-icon" />
          </div>
          <div className="card-contact-text">
            <span>آدرس </span>
            <span>کیان اباد خیابان 28شرقی پلاک 12</span>
          </div>
        </div>
      </div>
      <div className="contact-form-section">
        <img src={pic} alt="logo" className="contact-pic" />
        <Formik
          initialValues={{ email: "", name: "", tel: "", comment: "" }}
          validate={(values) => {
            const errors: Error = {};
            if (!values.name) {
              errors.name = "نام نباید خالی باشد";
            }
            if (!values.comment) {
              errors.comment = "متن پیام نباید خالی باشد";
            }
            if (!values.email) {
              errors.email = "ایمیل نباید خالی باشد";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "آدرس ایمیل معتبر نیست";
            }
            if (values.tel && !/^(09|9)(0|1|2|3)[0-9]{8}$/i.test(values.tel)) {
              errors.tel = "َشماره همراه وارد شده معتبر نیست";
            }
            return errors;
          }}
          onSubmit={() => {
            console.log("submit");
          }}
        >
          <Form className="contact-form">
            <p className="contact-form-title">ارسال پیام</p>
            <div>
              <Field
                className="contact-field"
                type="text"
                name="name"
                placeholder={"نام خود را وارد کنید"}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="contact-error"
              />
            </div>
            <div>
              <Field
                className="contact-field"
                type="email"
                name="email"
                placeholder={"ایمیل خود را وارد کنید"}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="contact-error"
              />
            </div>
            <div>
              <Field
                className="contact-field"
                type="tel"
                name="tel"
                placeholder={" شماره همراه خود را وارد کنید (اختیاری)"}
              />
              <ErrorMessage
                name="tel"
                component="div"
                className="contact-error"
              />
            </div>
            <div>
              <Field
                className="contact-field-text-area"
                component={"textarea"}
                placeholder="متن خود را وارد کنید"
                name="comment"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className="contact-error"
              />
            </div>
            <button type="submit" className="contact-button">
              ثبت
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
