import React from 'react';
// import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';

function IssueCard({ issue }) {
  const handleClick = () => {
    //redirect to Issue.js to show individual card
  };

  return (
    <StyledIssueCard onClick={handleClick}>
      {/* <IssueCardGlobal /> */}
      <h3>{issue.title}</h3>
      <p>{issue.description}</p>
    </StyledIssueCard>
  );
}

export default IssueCard;

// const IssueCardGlobal = createGlobalStyle`
//   background-color: 28A745;
// `;

const StyledIssueCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  /* background-color: #333333; */

  h3 {
    border-bottom: 2px solid slategray;
    margin-bottom: 1%;
    padding: 3%;
  }
`;
