import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';
import IssueCard from './IssueCard';

function Issue() {
  const [issue, setIssue] = useState({
    title: '',
    description: ''
  });

  const { id } = useParams();
  // const { push } = useHistory();

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

  // Cant test yet
  // const deleteIssue = () => {
  //   axiosWithAuth
  //     .delete(`issues/${id}`)
  //     .then(res=>{
  //       console.log('DELETE res:', res)
  //       push('issues');
  //     })
  //     .catch(err=>{
  //       console.log(err);
  //     })
  // }

  return (
    <div>
      <IssueCard issue={issue} />
      {/* <button onClick={deleteIssue}></button> */}
    </div>
  );
}

export default Issue;
