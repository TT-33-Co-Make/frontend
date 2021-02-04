import styled from 'styled-components'

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 60vh;
  width: 30%;
  text-align: center;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: -1px 3px 19px 0px rgba(125, 123, 125, 0.94);
  -moz-box-shadow: -1px 3px 19px 0px rgba(125, 123, 125, 0.94);
  box-shadow: -1px 3px 19px 0px rgba(125, 123, 125, 0.94);
  transition: 0.3s ease-in-out;
  img {
    height: 57%;
    border-radius: 50%;
  }
  h1,
  h3 {
    padding: 3%;
  }
`;

export default CardStyled;