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
        // setIssuesList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <IssueList>
      {/* {issuesList.map((issue) => {
        return <IssueCard key={issue.user_id} issue={issue} />;
      })} */}
      <IssueCard />
    </IssueList>
  );
}

export default IssuePage;

const IssueList = styled.div`
  border: 2px solid black;
  width: 80%;
  margin: 2% auto;
  padding: 2%;
  box-shadow: 
      /* top */ rgba(0, 0, 0, 0.1) 0px -6px 10px,
    /* right */ rgba(0, 0, 0, 0.1) 6px 0px 10px,
    /* bottom */ rgba(0, 0, 0, 0.1) 0px 6px 10px,
    /* left */ rgba(0, 0, 0, 0.1) -6px 0px 10px;
`;
