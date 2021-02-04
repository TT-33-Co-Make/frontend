import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';
import IssueCard from './IssueCard';
import EditForm from './EditForm';

function Issue() {
  const [issue, setIssue] = useState({
    id: '',
    title: '',
    description: ''
  });

  let isEditing = false;

  const params = useParams();
  // const params = useParams(); use this with code bellow if needed
  // const { push } = useHistory();

  useEffect(() => {
    fetchIssue(params.id);
  }, []);

  function fetchIssue(id) {
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
  }

  // Cant test yet
  // const deleteIssue = () => {
  //   axiosWithAuth
  //     .delete(`issues/${params.id}`)
  //     .then(res=>{
  //       console.log('DELETE res:', res)
  //       push('/issues');
  //     })
  //     .catch(err=>{
  //       console.log(err);
  //     })
  // }

  return (
    <div>
      {/* {isEditing ? <EditForm /> : <IssueCard issue={issue} />} */}
      <IssueCard issue={issue} />
      {/* NOTE TO SELF: don't forget to add Benaiah's button class to these buttons */}
      {/* <button onClick={deleteIssue}>Delete</button> */}
      <button onClick={(isEditing = !isEditing)}>Edit</button>
    </div>
  );
}

export default Issue;

//Use the following code instead if useEffect isn't fetching the issue↙↙↙
// useEffect(() => {
//   fetchIssue(params.id);
// }, [params.id]);

// if (!issue) {
//   return <div>Loading movie information...</div>;
// }

// const fetchIssue = (id) => {
//   axiosWithAuth()
//     .get(`issues/${id}`)
//     .then((res) => setIssue(res.data))
//     .catch((err) => console.log(err.response));
// };
