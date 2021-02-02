import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IssueCard from './IssueCard';

function IssuePage() {
  const [issuesList, setIssuesList] = useState([]);

  useEffect(() => {
    axios
      .get('https://co-make-tt-33.herokuapp.com/api/issues')
      .then((res) => {
        console.log('GET ISSUES', res);
        setIssuesList(res.data);
      })
      .catch((err) => {
        console.log(err);
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

const IssueList = styled.div``;
