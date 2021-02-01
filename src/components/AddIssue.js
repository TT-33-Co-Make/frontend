import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

function AddIssue() {
  const [formValues, setFormValues] = useState({
    title: '',
    description: ''
  });
  // const {push} = useHistory();

  const handleChange = (e) => {
    const { title, description } = e.target;
    setFormValues({
      [title.name]: description.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth
      .post('issues', formValues)
      .then((res) => {
        console.log(res);
        // success modal goes here
        // push('/issuePage')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Submit An Issue</h2>
      <label>
        Title of Issue:
        <input name="title" value={formValues.title} onChange={handleChange} />
      </label>
      <label>
        Describe Your Issue:
        <textarea
          name="description"
          value={formValues.description}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </StyledForm>
  );
}

export default AddIssue;

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
`;
