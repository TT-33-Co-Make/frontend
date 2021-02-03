import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import StyledButton from '../styles/StyledButton'

const HomePageStyled = styled.div`
    height: 100vh;
    background: url('https://kappanonline.org/wp-content/uploads/2019/01/desegregation-racial-attitudes-intergroup-contact.jpg') no-repeat center center/cover;
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
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.83);
}
.headline {
        font-weight: 50;
        font-size: 8rem;
    }
.row {
    display: flex;
    width: 100%;
}
.rowItem {
    height: 100%;
    width: 50%;
}
.rowItem img {
    overflow: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.p {
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
}
`

const Home = () => {

    return(
        <div>
        <NavBar/>
        <HomePageStyled>
        <div className='hero'>
            <div className='content'>
            <h1 className='headline'>Co-Make</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus 
                exercitationem quo ex ipsum amet, magnam voluptatibus consectetur fugit! Illo!</p>
                <StyledButton>Read More</StyledButton>
            </div>
        </div>
        <div className='row'>
            <div className='rowItem'>
                <img src="https://www.orielstat.com/blog/wp-content/uploads/2019/04/business-people-working-on-a-plan_Resized-1104W736H.jpg" alt="people working together"/>
            </div>
            <div className='rowItem p'>
                <h2>Who we are</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam <br></br>unde voluptate ea itaque architecto, commodi reprehenderit quam laudantium iste.</p>
                <StyledButton>Read More</StyledButton>
            </div>
        </div>
        <div className='row'>
            <div className='rowItem p'>
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam <br></br>unde voluptate ea itaque architecto, commodi reprehenderit quam laudantium iste.</p>
                <StyledButton>Read More</StyledButton>
            </div>
            <div className='rowItem'>
                <img src="https://massimo-group.com/wp-content/uploads/2018/12/happy-successful-multiracial-business-team-giving-people-working-together-ss.jpg" alt="Poeple successful"/>
            </div>
        </div>
        </HomePageStyled>
        </div>
    )
}

export default Home;