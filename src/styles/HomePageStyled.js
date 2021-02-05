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
    width: 75%;
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
  .p * {
    margin: 20px;
  }
  // testimonials
  .testimonial {
    width: 50%;
    border-bottom: 1px solid #28A745;
    text-align: center;
    margin: 0 auto;
    margin-top: 3%;
  }
  .cardContaier {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .cardDisplay {
      width: 100%;
      height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5%
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
  // Gallery
  .cases {
    margin-top: 3%;
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
    width: 93%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
      margin-bottom: 3%;
      border-bottom: 1px solid #28a745;
  }
  .gallery * {
      margin-bottom: 10px;
  }
  //Contact form
  .formSide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
.contactForm {
  margin-top: 5%;
  background: lightgrey;
  height: 65vh;
  display: flex;
}

.callback-form {
    width: 75%;
    padding: 20px 0;
}

.callback-form label {

    display: block;
    margin-bottom: 5px;
}

.callback-form .form-control {
    margin-bottom: 15px;
}

.callback-form input {
    width: 100%;
    padding: 4px;
    height: 40px;
    border: #f5f5f5 1px solid;
}

.callback-form input:focus {
    outline-color: #28a745;
}

.callback-form .btn {
    padding: 12px;
    margin-top: 20px;
}
.imgSide {
  background: url('https://s3.envato.com/files/111173317/Preview%20Notebook%20vs%20Pencil.JPG') no-repeat center center/cover;
  width: 50%;
}

  // Footer 
  .footer {
    background: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 200px;
    color: white;
}

.footer a {
    color: #fff;
    font-size: 30px;
    margin: 0 15px;
}

.footer a:hover {
    color:#28a745;
}

`;

export default HomePageStyled;