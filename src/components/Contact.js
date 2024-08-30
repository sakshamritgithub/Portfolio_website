import React, { useRef } from "react";
import LinkedIn from "../assest/linkedin.svg";
import Github from "../assest/github.svg";
import Instagrm from "../assest/instagram.svg";
import Facebook from "../assest/facebook.svg";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rrq65u5", "template_em0vz6s", form.current, {
        publicKey: "RvubXcwgb0xCmTyYD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div id="social">
        <h1 className="socialTitle">Socials</h1>
        <p className="socialDesc">
          Here you can contact with me on my social media
        </p>
        <div className="siocialImgs">
          <a href="https://www.linkedin.com/in/saksham-garg-a7b67026b/">
            <img src={LinkedIn} alt="LinkedIn" className="socialImg" />
          </a>
          <a href="https://github.com/sakshamritgithub">
            <img src={Github} alt="Github" className="socialImg" />
          </a>
          <a href="https://www.instagram.com/saksham.garg.98622/?next=%2F&hl=en">
            <img src={Instagrm} alt="Instagram" className="socialImg" />
          </a>
          <a href="#">
            <img src={Facebook} alt="Facebook" className="socialImg" />
          </a>
        </div>
      </div>
      <div id="contactpage">
        <h1 className="contactTitle">Contact</h1>
        <span className="contactDesc">Feel free to contact me</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            required
          />
          <textarea
            className="msg"
            rows="5"
            placeholder="Your Message "
            name="message"
            required
          ></textarea>
          <button
            type="submit"
            value="send"
            className="submitBtn"
            onClick={() => {
              alert("Your Form is submmited....!");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
