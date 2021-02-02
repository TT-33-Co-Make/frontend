import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const HomePageStyled = styled.div`
    
`

const Home = () => {

    return(
        <>
        <NavBar/>
        <div className='hero'>
            <h1>Co-Make</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus 
                exercitationem quo ex ipsum amet, magnam voluptatibus consectetur fugit! Illo!</p>
        </div>
        </>
    )
}

export default Home;