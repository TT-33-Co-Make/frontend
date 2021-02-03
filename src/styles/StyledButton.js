import styled from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer;
    margin: 20px 0;
    display: inline-block;
    padding: 15px 35px;
    color: #28a745;
    background-color: #fff;
    border: 1px solid #28a745;
    border-radius: 5px;
    box-shadow: inset 0 0 0 0 #28a745;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  :hover {
    box-shadow: inset 400px 0 0 0 #28a745;
    color: white;
  }
`;

export default StyledButton;