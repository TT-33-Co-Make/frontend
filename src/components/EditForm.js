import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IssuesContext } from '../contexts/IssuesContext';
import axiosWithAuth from '../utils/axiosWithAuth';
import StyledButton from '../styles/StyledButton';
import styled from 'styled-components';

function EditForm() {
  const { issue } = useContext(IssuesContext);
  console.log('EDIT FORM', issue);
  const [formValues, setFormValues] = useState({
    ...issue,
    title: issue.title
  });
  const { id } = useParams();
  const { push } = useHistory();

  console.log('EDIT FORM INCOMING STATE', issue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`issues/${formValues.id}`, formValues)
      .then((res) => {
        console.log(res);

        push(`/${formValues.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`issues/${id}`)
      .then((res) => {
        console.log(res.data);
        // setFormValues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2 className="formHeader">Make an Issue</h2>
        <div className="inputs">
          <input
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            placeholder={issue.title}
          />
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
            placeholder={issue.description}
          />
        </div>
        <StyledButton className="button">Submit</StyledButton>
      </StyledForm>
    </>
  );
}

export default EditForm;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
`;
