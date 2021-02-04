import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';
import IssueCard from './IssueCard';
// import EditForm from './EditForm';

function Issue() {
  // const [issue, setIssue] = useState({
  //   id: '',
  //   title: '',
  //   description: ''
  // });

  const [issue, setIssue] = useState(null);

  // let isEditing = false;
  // console.log(isEditing);

  const params = useParams();
  const { push } = useHistory();

  function fetchIssue(id) {
    axiosWithAuth()
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

  useEffect(() => {
    fetchIssue(params.id);
  }, [params.id]);

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

  // if (!issue) {
  //   return <div>Loading Issue information...</div>;
  // }

  return (
    <div>
      {/* {isEditing ? <EditForm /> : <IssueCard issue={issue} />} */}
      <IssueCard issue={issue} />
      <h1>TEST</h1>
      {/* NOTE TO SELF: don't forget to add Benaiah's button class to these buttons */}
      {/* <button onClick={deleteIssue}>Delete</button> */}
      {/* <button onClick={(isEditing = !isEditing)}>Edit</button> */}
      <button onClick={() => push(`issues/${params.id}/edit`)}>Edit</button>
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
