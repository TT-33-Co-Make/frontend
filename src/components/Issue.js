import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

//Components
import { IssuesContext } from '../contexts/IssuesContext';
import StyledButton from '../styles/StyledButton';
import IssueCard from './IssueCard';
import NavBar from './NavBar';
import Footer from './Footer';

function Issue() {
  const { issue, fetchIssue } = useContext(IssuesContext);
  // const [ issues, setIssues ] = useContext(IssuesContext);
  const params = useParams();

  useEffect(() => {
    fetchIssue(params.id);
  }, [params.id]);

  // Impliment this functionality later
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
    <>
      <NavBar />
      <StyledIssue>
        <IssueCard issue={issue} />
        <h1>TEST</h1>
        {/* <button onClick={deleteIssue}>Delete</button> */}
        {/* <button onClick={(isEditing = !isEditing)}>Edit</button> */}
        <Link to={`issues/${issue.id}/edit`}>
          <StyledButton>Edit</StyledButton>
        </Link>
      </StyledIssue>
      <Footer />
    </>
  );
}

export default Issue;

export const StyledIssue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4%;
  background-color: #333333;
  height: 90vh;
`;
