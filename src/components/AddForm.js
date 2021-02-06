import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { IssuesContext } from '../contexts/IssuesContext';
import StyledButton from '../styles/StyledButton';
import axiosWithAuth from '../utils/axiosWithAuth';
import StyledForm from './EditForm';
import Footer from './Footer';
import NavBar from './NavBar';

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
      <NavBar />
      <StyledButton onClick={() => setIsAdding(!isAdding)}>
        {isAdding ? 'Cancel' : 'Add An Issue'}
      </StyledButton>
      <StyledForm onSubmit={handleSubmit}>
        <div className="inputs">
          <h2 className="formHeader">Add an Issue</h2>
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
          <StyledButton className="button">Submit</StyledButton>
        </div>
      </StyledForm>
      <Footer />
    </>
  );
}

export default AddForm;
