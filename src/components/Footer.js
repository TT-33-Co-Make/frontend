import React from "react";
import FooterStyled from '../styles/FooterStyled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
  <FooterStyled>
      <footer className="footer">
        <div className="social">
            <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
        <p>Copyright &copy; 2020 - Co-Make</p>
    </footer>
</FooterStyled>
  );
};

export default Footer;
