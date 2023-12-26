import React from "react";
import Grid from "@mui/material/Grid";
import './Footer.css'
const Footer = () => {
    return  <React.Fragment>
    <div className="container-footer">
      <div className="container-skill-title">
        <h1>Contact Me</h1>
      </div>
      <div className="container-skill-list-title">Start working with me by</div>
        <div className="contact-me-list">
            <div className="contact-me-item">
               <div className="contact-me-icon"> <img width={50} src="facebook.png" alt="" /></div>
               <div>https://www.facebook.com/huyvu.phan.79/</div>
            </div>
            <div className="contact-me-item">
               <div className="contact-me-icon"><img width={50} src="linkedin.png" alt="" /></div>
               <div>https://www.linkedin.com/in/vu-phan-quang-huy-a97bbb190/</div>
            </div>
            <div className="contact-me-item">
               <div className="contact-me-icon"><img width={50} src="telephone.png" alt="" /></div>
               <div>+84 767 958 005</div>
            </div>
        </div>
    </div>
  </React.Fragment>
}

export default Footer;