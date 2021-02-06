import React, { useState } from 'react';
import styled from 'styled-components';

import AddForm from './AddForm';
import IssueList from './IssueList';
import NavBar from './NavBar';
import AltFooterStyled from '../styles/AltFooterStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

function IssuePage() {
  return (
    <StyledIssuePage>
      <div className="navDiv">
        <NavBar />
      </div>
      <h2>List of Issues</h2>
      <AddForm />
      <IssueList />
      <AltFooterStyled>
        <div className="social">
          {/*eslint-disable-next-line*/}
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          {/*eslint-disable-next-line*/}
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/*eslint-disable-next-line*/}
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/*eslint-disable-next-line*/}
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <p>Copyright &copy; 2020 - Co-Make</p>
      </AltFooterStyled>
    </StyledIssuePage>
  );
}

export default IssuePage;

const StyledIssuePage = styled.div``;
