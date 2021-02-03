import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NavBar from './NavBar';
import About from './About';

const gitInfo = [
    {gitID: 'benaiah-varner'},
    {gitID: 'emilyr027'},
    {gitID: 'paulstgermain'},
    {gitID: 'oscfig'},
    {gitID: 'plofland'}
]



export default function Developers(){

    const [developers, setDevelopers] = useState(gitInfo);

    useEffect(() => {
        const devInfo = async function(){
            const temp = [...developers];
            for(let i = 0; i < developers.length; i++){
                const {data} = await axios.get(`https://api.github.com/users/${developers[i].gitID}`)
                temp[i].image = data.avatar_url;
                temp[i].url = data.html_url;
                temp[i].bio = data.bio;
            }
            setDevelopers(temp);
        }
        devInfo()
    }, [])

    return(
<>
    <NavBar />

<DevDiv>
<About />
    <Header>Meet the Team!</Header>
        <DevContainer>
            {
                developers.map(dev => {
                    return (
                    <DevCard>
                        <h1>{dev.name}</h1>
                        <DevText>
                            <img src={dev.image} alt={dev.name}></img>
                            {
                                dev.bio === null ? '' : <p><h3>Bio:</h3><br />{dev.bio}</p>
                            }
                        </DevText>
                    </DevCard>
                    )
                })
            }
        </DevContainer>
</DevDiv>
</>
    )
}

const Header = styled.h1`
    width: 100%;
    text-align: center;
`

const DevDiv = styled.div`
    padding-top: 4.3%;
    background: #333;

`

const DevContainer = styled.section`
    /* padding-top: 4.3%;
    background: #333; */
`

const DevCard = styled.div`
    min-width: 45%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 25px;
    margin: 0 auto 3% auto;
    background: #FFF;


    h1{
        width: 100%;
        text-align: center;
    }
`

const DevText = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 25px;

    img{
        width: 50%;
        margin-right: 25px;
        margin-left: 15px;
        border-radius: 100%;
    }
`


// / / / / / CODE GRAVEYARD - TO BE REVIVED / / / / / //

// useEffect(() => {
    // const temp = [];
    //     gitInfo.forEach(dev => {
    //          axios.get(`https://api.github.com/users/${dev}`)
    //          .then(res => {
    //              temp.push(res.data);
    //          })
    //          .catch(err => {
    //              console.log(err);
    //          })
    //     })
    //     setDevelopers(temp);
    // }, [])