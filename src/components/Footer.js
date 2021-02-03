import React from "react";
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const FooterStyled = styled.div`
 .footer {
    background: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 200px;
}

.footer a {
    color: #fff;
    font-size: 30px;
}

.footer a:hover {
    color:#28a745;
}

.footer .social > * {
    margin-right: 30px;
}

`;  

const Footer = () => {
  return (
  <FooterStyled>
      <footer className="footer bg-dark">
        <div className="social">
            <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
        <p>Copyrught &copy; 2020 - Co-Make</p>
    </footer>
</FooterStyled>
  );
};

export default Footer;
