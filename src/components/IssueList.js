import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueCard from './IssueCard';
import axiosWithAuth from '../utils/axiosWithAuth';
import NavBar from './NavBar';

function IssuePage() {
  const [issuesList, setIssuesList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('issues')
      .then((res) => {
        console.log('GET ISSUES', res);
        setIssuesList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
    <div className='navDiv'>
      <NavBar />
      </div>
      <IssueList className='issueList'>
        <h2>List of Issues</h2>
        <hr id="titleHr" />
        {issuesList.map((issue) => {
          return <IssueCard key={issue.id} issue={issue} />;
        })}
        {/* <IssueCard /> */}
      </IssueList>
    </div>
  );
}

export default IssuePage;

const IssueList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4%;
  background-color: #333333;

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
