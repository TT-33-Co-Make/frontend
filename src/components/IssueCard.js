import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function IssueCard({ issue }) {
  const { push } = useHistory();

  return (
    <StyledIssueCard onClick={() => push(`/issues/${issue.id}`)}>
      <div class="issueHeader">
        <h3>{issue.title}</h3>
        <FontAwesomeIcon icon={faArrowUp} class="icon"></FontAwesomeIcon>
      </div>
      <hr />
      <p>{issue.description}</p>
    </StyledIssueCard>
  );
}

export default IssueCard;

const StyledIssueCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  background-color: #28a745;
  width: 92%;
  box-shadow: 
    /* top */ rgba(0, 0, 0, 0.2) 0px -6px 10px,
    /* right */ rgba(0, 0, 0, 0.2) 6px 0px 10px,
    /* bottom */ rgba(0, 0, 0, 0.2) 0px 6px 10px,
    /* left */ rgba(0, 0, 0, 0.2) -6px 0px 10px;
  border-radius: 2px;
  margin: 2% 0;

  .issueHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin-left: 3%;
      padding: 2%;
    }

    .icon {
      height: 4rem;
      margin-right: 3%;
      padding: 2%;
      border-radius: 50%;
      :hover {
        box-shadow: 
        /* top */ rgba(0, 0, 0, 0.2) 0px -6px 10px,
          /* right */ rgba(0, 0, 0, 0.2) 6px 0px 10px,
          /* bottom */ rgba(0, 0, 0, 0.2) 0px 6px 10px,
          /* left */ rgba(0, 0, 0, 0.2) -6px 0px 10px;
        transition: 0.4s ease-in-out;
      }
    }
  }

  hr {
    width: 95%;
    margin: 0 auto;
    background-color: rgb(51, 51, 51);
    height: 5px;
    border: 0;
  }
  p {
    padding: 2%;
  }

  :hover {
    transition: 0.4s ease-in-out;
    box-shadow: 
      /* top */ rgba(0, 0, 0, 0.5) 0px -6px 20px,
      /* right */ rgba(0, 0, 0, 0.5) 6px 0px 20px,
      /* bottom */ rgba(0, 0, 0, 0.5) 0px 6px 20px,
      /* left */ rgba(0, 0, 0, 0.5) -6px 0px 20px;
  }

  @media (min-width: 1200px) {
    .issueHeader {
      .icon {
        height: 6rem;
      }
    }
  }
`;
