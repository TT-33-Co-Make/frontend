import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueCard from './IssueCard';
import axiosWithAuth from '../utils/axiosWithAuth';

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
    <IssueList>
      {issuesList.map((issue) => {
        return <IssueCard key={issue.id} issue={issue} />;
      })}
    </IssueList>
  );
}

export default IssuePage;

const IssueList = styled.div`
  border: 2px solid black;
  width: 80%;
  margin: 2% auto;
  padding: 1% 2%;
  background-color: #28a745;
  box-shadow: 
    /* top */ rgba(0, 0, 0, 0.2) 0px -6px 10px,
    /* right */ rgba(0, 0, 0, 0.2) 6px 0px 10px,
    /* bottom */ rgba(0, 0, 0, 0.2) 0px 6px 10px,
    /* left */ rgba(0, 0, 0, 0.2) -6px 0px 10px;

  :hover {
    transition: 0.4s ease-in-out;
    box-shadow: 
      /* top */ rgba(0, 0, 0, 0.5) 0px -6px 20px,
      /* right */ rgba(0, 0, 0, 0.5) 6px 0px 20px,
      /* bottom */ rgba(0, 0, 0, 0.5) 0px 6px 20px,
      /* left */ rgba(0, 0, 0, 0.5) -6px 0px 20px;
  }
`;
