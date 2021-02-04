import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NavBar from './NavBar';
import About from './About';
import Footer from './Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
                temp[i].name = data.name;
                temp[i].login = data.login;
            }
            setDevelopers(temp);
        }
        devInfo()
    }, []);

    let tl = gsap.timeline({scrollTrigger: {
        trigger: ".Benaiah-Varner",
        start: "top 80%",
        // scrub: true,
        toggleActions: "play none none reset"
    }})

    gsap.from(".Benaiah-Varner", {
        scrollTrigger: {
            trigger: ".Benaiah-Varner",
            start: "top 80%",
            // scrub: true,
            toggleActions: "play none none reset"
        },
        x: 850,
        opacity: 0,
        duration: 2
    });

    gsap.from(".emilyr027", {
        scrollTrigger: {
            trigger:".emilyr027",
            start: "top 80%",
            // scrub: true,
            toggleActions: "play none none reset"
        },
        x: -850,
        opacity: 0,
        duration: 2
    });

    gsap.from(".paulstgermain", {
        scrollTrigger: {
            trigger: ".paulstgermain",
            start: "top 80%",
            // scrub: true,
            toggleActions: "play none none reset"
        },
        x: 850,
        opacity: 0,
        duration: 2
    });

    gsap.from(".OscFig", {
        scrollTrigger: {
            trigger:".OscFig",
            start: "top 80%",
            // scrub: true,
            toggleActions: "play none none reset"
        },
        x: -850,
        opacity: 0,
        duration: 2
    });

    gsap.from(".Plofland", {
        scrollTrigger: {
            trigger: ".Plofland",
            start: "top 80%",
            // scrub: true,
            toggleActions: "play none none reset"
        },
        x: 850,
        opacity: 0,
        duration: 2
    });

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
                    <DevCard className={dev.login}>
                        <h1>{dev.name === null ? dev.login : dev.name}</h1>
                        <DevInfo style={{flexDirection: dev.bio === null ? 'column' : 'row'}}>
                            <img src={dev.image} alt={dev.name}></img>
                            <DevText>
                                {dev.bio === null ? '' : <><h3>Bio:</h3><p>{dev.bio}</p></>}
                                <a href={dev.url}><FontAwesomeIcon icon={faGithub} className='i'/></a>
                            </DevText>
                        </DevInfo>
                    </DevCard>
                    )
                })
            }
        </DevContainer>
</DevDiv>
<Footer />
</>
    )
}

const Header = styled.h1`
    width: 100%;
    text-align: center;
    color: white;
    margin-top: 2%;
`

const DevDiv = styled.div`
    padding-top: 4.3%;
    background: #333;

`

const DevContainer = styled.section`
    
`

const DevCard = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin: 0 auto 3% auto;
    background: #FFF;


    h1{
        width: 100%;
        text-align: center;
    }

    &:hover{
        img{
            box-shadow: 2px 2px 2px 2px rgba(33, 33, 33, 0.5);
        }
    }
`

const DevInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 25px 0 25px 0;

    img{
        width: 50%;
        margin-right: 25px;
        margin-left: 15px;
        border-radius: 100%;
        transition: .3s;
    }
`

const DevText = styled.div`
    text-align: center;
    width: 50%;

    p{
        text-align: center;
    }

    a{
        font-size: 25px;
        color: black;
        transition: .2s;

        &:hover{
            color: #28A745;
        }
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