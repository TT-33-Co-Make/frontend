import React, { useState } from "react";
import NavBar from "./NavBar";
import HomePageStyled from '../styles/HomePageStyled';
import StyledButton from "../styles/StyledButton";
import issues from "../utils/testData";
import CardStyled from '../styles/CardStyled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import FooterStyled from '../styles/FooterStyled'


const Home = () => {
const [current, setCurrent] = useState(0);
const length = issues.length

  const nextIssue = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevIssue = () => {
      setCurrent(current === 0 ? length -1 : current -1)
  }

  return (
    <>
      <NavBar />
      <HomePageStyled>
        {/* hero */}
        <div className="hero">
          <div className="content">
            <h1 className="headline">Co-Make</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              necessitatibus exercitationem quo ex ipsum amet, magnam
              voluptatibus consectetur fugit! Illo!
            </p>
            <StyledButton>Read More</StyledButton>
          </div>
        </div>
        {/* Row display */}
        <div className="row">
          <div className="rowItem one">
          </div>
          <div className="rowItem p">
            <h2>Who we are</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quibusdam <br></br>unde voluptate ea itaque architecto,
              commodi reprehenderit quam laudantium iste.
            </p>
            <StyledButton>Read More</StyledButton>
          </div>
        </div>
        <div className="row">
          <div className="rowItem p mission">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quibusdam <br></br>unde voluptate ea itaque architecto,
              commodi reprehenderit quam laudantium iste.
            </p>
            <StyledButton className='secondary'>Read More</StyledButton>
          </div>
          <div className="rowItem two">
          </div>
        </div>
        {/* Card display */}
        <div className='cardContainer'>
            <h2>Testimonials</h2>
            <div className="cardDisplay">
            <FontAwesomeIcon className='cardIcon' icon={faChevronLeft} onClick={prevIssue}>Prev</FontAwesomeIcon>
            {
                issues.map((card, index) => {
                    return (
                        <CardStyled className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <>
                                    <img src={`${card.img}`} alt="issue img" />
                                    <h3>{`${card.title}`}</h3>
                                    <p>{`${card.description}`}</p>
                                </>
                            )}
                            
                        </CardStyled>
                    )
                })
            }
            <FontAwesomeIcon className='cardIcon' icon={faChevronRight} onClick={nextIssue}>Next</FontAwesomeIcon>
            </div>
        </div>
        <div className='gallery'>
            <p>This Is What We Do</p>
            <h2>Gallery</h2>
        </div>
        <div className='cases'>
            <img src="https://images.ctfassets.net/81iqaqpfd8fy/4k9ITW4kDW5liLFiqD36om/d3037a94e6a6bebe4acd06b76d0d88cf/communityservicecover.jpg?h=620&w=1440" alt="Garbage Clean Up"/>
            <img src="https://www.verywellfamily.com/thmb/LtMbOFMq4PXUnsLVKntb78SbsXQ=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/155143343-56a99b663df78cf772a8d4f8.jpg" alt="Disaster relief"/>
            <img src="https://cdn2.hubspot.net/hubfs/3798961/Imported_Blog_Media/Community-Service-ADHD-1.jpg" alt="Donation center"/>
            <img src="https://i0.wp.com/trailhead.gsnorcal.org/wp-content/uploads/2017/12/girl-scout-service-project.jpg?resize=720%2C480&ssl=1" alt="Homeless shelter"/>
            <img src="https://cf.ltkcdn.net/charity/images/std/260197-800x450-Group_Volunteers_Celebrating.jpg" alt="Minority programs"/>
            <img src="https://dur-duweb.newscyclecloud.com/apps/pbcsi.dll/bilde?Site=DU&Date=20170805&Category=NEWS01&ArtNo=804009999&Ref=PH&Item=1&NewTbl=1" alt="Town meetings"/>
            <img src="https://specials-images.forbesimg.com/imageserve/5c0077cc31358e5b43383ffc/960x0.jpg?fit=scale" alt="Construction"/>
            <img src="https://s3.amazonaws.com/playpass-discovery/blog/complete-guide-organize-soccer-league.jpg" alt="Recreational Sports"/>
        </div>
        
        <div className='contactForm'>
            <div className="imgSide">
                
            </div>
            <div className="formSide">
                <h3>Contact Us With Questions Or Issues</h3>
                <form action="">
                    <label htmlFor="name"> Name
                        <input type="text" name="name" id=""/>
                    </label>
                    <label htmlFor="">Email
                        <input type="email"/>
                    </label>
                    <label htmlFor="">
                        Message
                        <textarea name="" id="" cols="30" rows="10">

                        </textarea>
                    </label>
                </form>
            </div>
        </div>
      </HomePageStyled>
        {/* <FooterStyled>
        <footer className="footer">
        <div className="social">
            <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
        <p>Copyright &copy; 2020 - Co-Make</p>
    </footer>
        </FooterStyled> */}
    </>
  );
};

export default Home;
