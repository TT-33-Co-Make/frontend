import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';
import IssueCard from './IssueCard';

function Issue() {
  const [issue, setIssue] = useState({
    title: '',
    description: ''
  });

  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth
      .get(`issues/${id}`)
      .then((res) => {
        console.log('RETURNED ISSUE OBJECT', res);
        setIssue(res.data);
        console.log('ISSUE STATE', issue);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <IssueCard issue={issue} />
    </div>
  );
}

export default Issue;
