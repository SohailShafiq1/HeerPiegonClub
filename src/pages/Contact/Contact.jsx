import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import React from "react";
import styles from "./Contact.module.css";
const s = styles;
const Contact = () => {
  return (
    <>
      <div className={s.MainBox}>
        <h1 className={s.Headline}>Contact Us</h1>
        <div className={s.Boxes}>
          <div className={s.LeftBox}>
            <a
              className={s.logo}
              href="https://www.facebook.com"
              target="blank"
            >
              <FaFacebookSquare />
            </a>
            <h1 className={s.fbname}>Sohail Shafiq</h1>
          </div>
          <div className={s.RightBox}>
            <a
              className={s.logo}
              href="https://wa.me/923408432739"
              target="blank"
            >
              <AiOutlineWhatsApp />
            </a>
            <h1 className={s.wanumber}>03408432739</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
