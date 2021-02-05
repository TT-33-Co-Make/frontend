import React, { useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

//Components
import { IssuesContext } from '../contexts/IssuesContext';
import StyledButton from '../styles/StyledButton';
import IssueCard from './IssueCard';
import NavBar from './NavBar';
import Footer from './Footer';

function IssuePage() {
  const { issuesList, getIssues } = useContext(IssuesContext);
  const params = useParams();
  const { push } = useHistory();

  useEffect(() => {
    getIssues();
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
          return (
            <IssueCard
              key={issue.id}
              issue={issue}
              getIssues={getIssues}
              issueId={params.id}
            />
          );
        })}
      </StyleIssueList>
      <Footer />
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
