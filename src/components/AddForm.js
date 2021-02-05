import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import StyledForm from './EditForm';

function AddForm() {
  const [formValues, setFormValues] = useState({
    id: '',
    title: '',
    description: ''
  });

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
      .post(`issues/${formValues.id}`, formValues)
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
        placeholder={'Title of Issue'}
        onchange={handleChange}
      ></input>
      <textarea
        name="description"
        value={formValues.description}
        placeholder={'Description of Issue'}
        onchange={handleChange}
      ></textarea>
    </StyledForm>
  );
}

export default AddForm;
