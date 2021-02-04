import React, { useHistory, useState } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

function EditForm({ issue, getIssues }) {
  const [formValues, setFormValues] = useState(issue);

  const { push } = useHistory();

  console.log('EDIT FORM INCOMING STATE', issue); //test to see what state is coming into the form

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

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formValues.title}
        onchange={handleChange}
      >
        {issue.title}
      </input>
      <textarea
        name="description"
        value={formValues.description}
        onchange={handleChange}
      >
        {issue.description}
      </textarea>
    </StyledForm>
  );
}

export default EditForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
