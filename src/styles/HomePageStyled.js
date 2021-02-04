import styled from 'styled-components';

const HomePageStyled = styled.div`
  height: 100vh;
  background: url("https://kappanonline.org/wp-content/uploads/2019/01/desegregation-racial-attitudes-intergroup-contact.jpg")
    no-repeat center center/cover;
  position: relative;
  .hero * {
    z-index: 10;
  }
  .hero {
    height: 100%;
  }
  .hero .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
    text-align: center;
    color: white;
  }
  .hero .content p {
    font-size: 1.1rem;
  }
  .hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.83);
  }
  .headline {
    font-family: 'Montserrat', sans-serif;
    font-weight: 50;
    font-size: 8rem;
  }
  .row {
    height: 70vh;
    display: flex;
    width: 100%;
  }
  .rowItem {
    max-height: 100%;
    width: 50%;
  }
  .rowItem img {
    width: 100%;
    object-fit: cover;
  }
  .one {
      background: url('https://www.orielstat.com/blog/wp-content/uploads/2019/04/business-people-working-on-a-plan_Resized-1104W736H.jpg') no-repeat center center/cover
  }
  .two {
    background: url('https://massimo-group.com/wp-content/uploads/2018/12/happy-successful-multiracial-business-team-giving-people-working-together-ss.jpg') no-repeat center center/cover
  }
  .p {
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .cardContaier {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .cardDisplay {
      width: 100%;
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .cardIcon {
      color: #28A745;
      font-size: 5rem;
      margin: 0 4%;
      transition: 0.3s ease-in-out;
  }
  .cardIcon:hover{
    transform: scale(1.2);
    color: #24943E;
  }
  .mission{
      background: #28A745;
      color: white;
  }
  .secondary{
    cursor: pointer;
    margin: 20px 0;
    display: inline-block;
    padding: 15px 35px;
    color: #fff;
    background-color: #28a745;
    border: 1px solid #fff;
    border-radius: 5px;
    box-shadow: inset 0 0 0 0 #28a745;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  :hover {
    box-shadow: inset 400px 0 0 0 #fff;
    color: #28a745;
  }
  }
  .slide{
      display: none;
  }
  .slide.active {
      display: inherit;
      width: 25%;
  }
  .active img {
      padding-top: 10px;
  }
  .cases {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
  }
  .cases img {
      margin: 5px;
      width: 440px;
      height: 300px;
  }
  .cases img:hover {
    opacity: 0.7;
}
  .gallery {
      text-align: center;
  }
  .gallery * {
      margin-bottom: 10px;
  }
  .contactForm {
      border: 1px solid black;
      display: flex;
      width: 100%;
      height: 60vh;
  }
  .imgSide, .formSide {
      width: 50%;
      height: 100%;
  }
  .imgSide {
    background: url('https://s3.envato.com/files/111173317/Preview%20Notebook%20vs%20Pencil.JPG') no-repeat center center/cover
  }
`;

export default HomePageStyled;