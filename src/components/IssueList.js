import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IssuesContext } from '../contexts/IssuesContext';
import IssueCard from './IssueCard';

function IssuePage() {
  const { issuesList, getIssuesList } = useContext(IssuesContext);
  const params = useParams();

  useEffect(() => {
    getIssuesList();
  }, []);

  return (
    <div>
      {issuesList.map((issue) => {
        return <IssueCard key={issue.id} issueId={params.id} issue={issue} />;
      })}
    </div>
  );
}

export default IssuePage;
