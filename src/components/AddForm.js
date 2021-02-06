import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { IssuesContext } from '../contexts/IssuesContext';
import StyledButton from '../styles/StyledButton';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

function AddForm() {
  const [isAdding, setIsAdding] = useState(false);
  const [newIssueValues, setNewIssueValues] = useState([]);
  // const [issues, setIssues] = useContext(IssuesContext);

  const { push } = useHistory();

  // console.log('ANYTHING');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewIssueValues({
      ...newIssueValues,
      [name]: value
    });
    console.log(newIssueValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`issues`, newIssueValues)
      .then((res) => {
        console.log(res);
        push('issues');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <StyledButton onClick={() => setIsAdding(!isAdding)}>
        {isAdding ? 'Cancel' : 'Add An Issue'}
      </StyledButton>
      {isAdding && (
        <StyledAddForm onSubmit={handleSubmit}>
          <h2 className="formHeader">Add an Issue</h2>
          <div className="inputs">
            <input
              type="text"
              name="title"
              value={newIssueValues.title}
              placeholder={'Title of Issue'}
              onChange={handleChange}
            />
            <textarea
              name="description"
              value={newIssueValues.description}
              placeholder={'Description of Issue'}
              onChange={handleChange}
            />
          </div>
          <StyledButton className="button">Submit</StyledButton>
        </StyledAddForm>
      )}
    </>
  );
}

export default AddForm;

const StyledAddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  padding: 1%;
  width: 100vw;
  height: 40vh;

  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    background-color: #28a745;
    width: 92%;
    height: 50%;
    color: black;
    padding: 3%;
    box-shadow: 
      /* top */ rgba(0, 0, 0, 0.2) 0px -6px 10px,
      /* right */ rgba(0, 0, 0, 0.2) 6px 0px 10px,
      /* bottom */ rgba(0, 0, 0, 0.2) 0px 6px 10px,
      /* left */ rgba(0, 0, 0, 0.2) -6px 0px 10px;

    input {
      width: 40%;
      margin-bottom: 2%;
    }

    textarea {
      height: 80%;
      width: 80%;
      margin-top: 1%;
    }
  }

  .button {
    width: 20%;
    margin: 1% auto;
  }

  @media (min-width: 1200px) {
    width: 60vw;
    height: 50vh;
    padding: 0;

    .formHeader {
      margin-top: 0;
    }
  }
`;
