import React, { useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

//Components
import { IssuesContext } from '../contexts/IssuesContext';
import StyledButton from '../styles/StyledButton';
import IssueCard from './IssueCard';
import NavBar from './NavBar';
import AltFooterStyled from '../styles/AltFooterStyled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

function IssuePage() {
  const { issuesList, getIssuesList } = useContext(IssuesContext);
  const params = useParams();
  const { push } = useHistory();

  useEffect(() => {
    getIssuesList();
  }, []);

  return (
    <div>
      <div className="navDiv">
        <NavBar />
      </div>
      <StyleIssueList className="issueList">
        <h2>List of Issues</h2>
        <hr id="titleHr" />
        <StyledButton onClick={() => push('issues/add')}>
          Add An Issue
        </StyledButton>
        {issuesList.map((issue) => {
          return <IssueCard key={issue.id} issueId={params.id} />;
        })}
      </StyleIssueList>
      <AltFooterStyled>
        <div className="social">
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
        <p>Copyright &copy; 2020 - Co-Make</p>
    </AltFooterStyled>
    </div>
  );
}

export default IssuePage;

const StyleIssueList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4%;
  background-color: #333333;
  height: 90vh;

  h2 {
    color: whitesmoke;
    font-size: 2rem;
  }

  #titleHr {
    width: 92%;
    margin: 2% auto;
    background-color: #28a745;
    height: 6px;
    border-color: #28a745;
  }
`;
