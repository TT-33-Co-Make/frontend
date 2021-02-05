import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import StyledButton from '../styles/StyledButton';
import axiosWithAuth from '../utils/axiosWithAuth';
import { IssuesContext } from '../contexts/IssuesContext';

function EditForm() {
  const { issue } = useContext(IssuesContext);
  console.log(issue);
  const [formValues, setFormValues] = useState({
    ...issue,
    title: issue.title
  });
  const { id } = useParams();
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
      <StyledButton>Submit</StyledButton>
    </StyledForm>
  );
}

export default EditForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
