import React from 'react';
import '../Contact.scss';

function Contact(props) {
  return (
    <section className={props.isContactOpen ? "Contact open" : "Contact"}>
      <div className="contact-content">
        <div className="contact-header">
          <div className="contact-close" onClick={props.closeContact}>
            <span></span>
            <span></span>
          </div>
          <h2>Hey there, please use one of these and let's have a talk!</h2>
        </div>
        <div className="contact-info">
          <a href="https://drive.google.com/file/d/1QGVlxMZXYzb1tUSXOL-F3f0m-MWMxGKP/view?usp=sharing" target="blank">
            <h3>My Resume/Cv</h3>
          </a>
          <h3 className="sm-visible">elmaharmsen01<br></br>@gmail.com</h3>
          <h3 className="md-visible">elmaharmsen01@gmail.com</h3>
          <h3 className="lg-visible">elmaharmsen01@gmail.com</h3>
          <a href="https://www.linkedin.com/in/elma-harmsen-087872181/" target="blank">
            <h3>LinkedIn</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;