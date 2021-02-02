import React from 'react';

import styled from 'styled-components';

function Issue({ issue }) {
  const handleClick = () => {
    //redirect to Issue.js
  };

  return (
    <IssueCard onClick={handleClick}>
      <h3>DummyTitle</h3>
      {/* <h3>{issue.title}</h3> */}
      <p>
        Solve challenges Action Against Hunger citizenry Martin Luther King Jr.
        Combat malaria, mobilize lasting change billionaire philanthropy
        revitalize globalization research. Honor urban fundraise human being;
        technology raise awareness partnership. Political global growth
        cross-agency coordination democratizing the. Best practices disruptor
        catalyst public sector; protect micro-finance educate. Gender rights
        world problem solving legitimize rural development medicine Ford
        Foundation committed revitalize respect. Affordable health care,
        humanitarian.
      </p>
      {/* <p>{issue.description}</p> */}
    </IssueCard>
  );
}

export default Issue;

const IssueCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;
