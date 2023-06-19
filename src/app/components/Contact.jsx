import React from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center m-20 p-20 rounded-lg border-black border-2 bg-opacity-80
    shadow-[2px_20px_50px_12px_#1a202c,0px_3px_8px_0px_#00000024] text-black"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl p-10 font-bold">Contact</h2>
        <nav className="flex justify-center mt-8">
          <div className="flex items-center mr-8">
            <FaPhone className="contact-icon mr-2" size={30} />
            <span className="contact-info">+46739757159</span>
          </div>
          <div className="flex items-center mr-8">
            <FaEnvelope className="contact-icon mr-2" size={30} />
            <span className="contact-info">Rubil.marija@outlook.com</span>
          </div>
          <div className="flex items-center mr-8">
            <FaGithub className="contact-icon mr-2" size={30} />
            <span className="contact-info">GitHub</span>
          </div>
          <div className="flex items-center">
            <FaLinkedin className="contact-icon mr-2" size={30} />
            <span className="contact-info">LinkedIn</span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Contact;
