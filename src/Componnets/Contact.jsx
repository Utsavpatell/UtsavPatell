import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <h1>CONTACT ME</h1>
      <div className="container contact" id='contact'>

        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">

          <a href='https://www.instagram.com/utsav._patell?igsh=NzA1Y2VxdzkzM3Y2' className="items">
            <FaInstagram className='icons' />
          </a>
          <a href='https://www.facebook.com/patelbaldevbhai.patelbaldevbhai.9?mibextid=ZbWKwL' className="items">
            <CiFacebook className='icons' />
          </a>
          <a href='https://www.linkedin.com/in/utsav-patel-796495307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="items">
            <CiLinkedin className='icons' />
          </a>
          <a href='https://github.com' className="items">
            <FaGithub className='icons' />
          </a>
          <a href='mailto:utsavother@gmail.com' className="items">
            <SiGmail className='icons' />
          </a>

        </div>

      </div>
    </>
  )
}
 export default Contact