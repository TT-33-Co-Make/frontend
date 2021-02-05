import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import StyledButton from '../styles/StyledButton';
import axiosWithAuth from '../utils/axiosWithAuth';
import StyledForm from './EditForm';

function AddForm() {
  const [newIssueValues, setNewIssueValues] = useState([]);

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
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={newIssueValues.title}
        placeholder={'Title of Issue'}
        onChange={handleChange}
      ></input>
      <textarea
        name="description"
        value={newIssueValues.description}
        placeholder={'Description of Issue'}
        onChange={handleChange}
      ></textarea>
      <StyledButton>Submit</StyledButton>
    </StyledForm>
  );
}

export default AddForm;
