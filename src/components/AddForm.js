import React, { useState } from 'react';
import StyledButton from '../styles/StyledButton';
import axiosWithAuth from '../utils/axiosWithAuth';
import StyledForm from './EditForm';

function AddForm() {
  const [formValues, setFormValues] = useState({
    // id: '',
    title: '',
    description: ''
  });

  // console.log('ANYTHING');
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
      .post(`issues`, formValues)
      .then((res) => {
        console.log(res);
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
        placeholder={'Title of Issue'}
        onChange={handleChange}
      ></input>
      <textarea
        name="description"
        value={formValues.description}
        placeholder={'Description of Issue'}
        onChange={handleChange}
      ></textarea>
      <StyledButton>Submit</StyledButton>
    </StyledForm>
  );
}

export default AddForm;
