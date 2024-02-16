import React, { useRef } from 'react';
import './Contact.css'; // Make sure the file name matches
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import xImage from '../../assets/x.jpg';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g5rtq67', 'template_3cnk7pm', form.current, {
        publicKey: '8S2h-1kyZmPUhwrkX',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with include:
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Walmart" className="clientImg" />
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
          <img src={Facebook} alt="Facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the below to discuss any work opportunities</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea className="msg" rows="5" placeholder="Your Message" name="message"></textarea>
          <button className="submitBtn" type="submit" value="send">Submit</button>
          <div className="links">
            <a href="https://www.facebook.com/vipin.raj.00" target="_blank"><img src={FacebookIcon} alt="Facebook" className="link" /></a>
            <a href="https://twitter.com/VipinOffical?t=-M1MvumJl5OFlRQt1tc0gw&s=08"target="_blank"><img src={xImage} alt="Twitter" className="link" /></a>
            <a href="https://www.instagram.com/__vipin__001/" target="_blank"><img src={InstagramIcon} alt="Instagram" className="link" /></a>          </div>
        </form>
      </div>
    </section>
  );
};
