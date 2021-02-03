import react from 'react';
import styled from 'styled-components';

export default function About() {
    return (
        <StyledAbout>
            <Image>
                <img src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' alt='hands coming together in teamwork'></img>
            </Image>
            <Text>
            <h1>What <span>IS</span> Co-Make?</h1>
            <p>Ever get frustrated that a problem in your town or neighborhood goes ages without being resolved? You might have road issues (potholes, dangerous areas), overgrown plants, or anything else that makes living where you live a little less pleasant. With <br /> Co-make you can make your voice heard on the issues you would like to see resolved in your community.</p>
            </Text>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    margin: 10px 0px;
`

const Image = styled.div`
    height: 100%;
    width: 50%;

    img{
        height: 100%;
        width: 100%;
    }
`

const Text = styled.div`
    width: 50%;
    height: 100%;
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        width: 75%;
        text-align: center;
    }

    span{
        color: #28A745;
    }
`