import React from "react";
import FooterStyled from '../styles/FooterStyled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
  <FooterStyled>
      <footer className="footer">
        <div className="social">
        {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
        <p>Copyright &copy; 2020 - Co-Make</p>
    </footer>
</FooterStyled>
  );
};

export default Footer;
