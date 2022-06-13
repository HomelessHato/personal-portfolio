import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef,useState } from "react";
import emailjs from 'emailjs-com';
import { useContext } from "react";
import { ThemeContext } from "../../context"

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_w2dodp9', 'template_r60x54w', formRef.current, 'bjdj1aLiUfzZSv_5Y')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets Chat!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              (801)-865-2486
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              carston.morrell@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              10588 S Redknife Dr. South Jordan, UT
            </div>
          </div>
        </div>
        <div className="c-right">
            <p className="c-desc">
                <b>Hiring?</b> Feel free to reach out to me, I would love to hear from you!  
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                <button>Submit</button>
                {done && "Thank you for your submit!"}
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
