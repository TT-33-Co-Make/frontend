import React from 'react';
import styled from 'styled-components';

import AddForm from './AddForm';
import IssueList from './IssueList';
import NavBar from './NavBar';
import Footer from './Footer';

function IssuePage() {
  return (
    <>
      <NavBar />
      <StyledIssuePage>
        <h2>List of Issues</h2>
        <hr id="titleHr" />
        <AddForm />
        <IssueList />
      </StyledIssuePage>
      <Footer />
    </>
  );
}

export default IssuePage;

const StyledIssuePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4%;
  background-color: #333333;
  height: 90vh;

  #titleHr {
    width: 92%;
    margin: 2% auto;
    background-color: #28a745;
    height: 6px;
    border-color: #28a745;
  }
  h2 {
    color: whitesmoke;
    font-size: 2rem;
    margin-top: 3%;
  }
`;
