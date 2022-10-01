import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
        <BgImage>
            <Shade>
                <Logo src='./assets/logo.png' alt='IPL-logo'/>
                <TagLine src='./assets/tag-line.png' alt='tag-line' />
                <Container_1>
                    <Text>Are you ready for a thrilling and adventurous match?</Text>
                    <Link to='/home'>
                        <Go >LET'S GET STARTED</Go>
                    </Link>
                </Container_1>
            </Shade>
        </BgImage>
    </>
  )
}

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/assets/ipl-bg-2.jpg");
    position: absolute;
    top:0;
    right:0;
    left:0;
    z-index:-1;
`;

const Shade = styled.div`
    height: 100%;
    /* background: linear-gradient(90deg, rgba(20,40,80,0.9) 0%, rgba(0,0,0,0) 100%); */
    position: absolute;
    box-shadow: 450px -30px 550px black inset;
    top:0;
    right:0;
    left:0;
    z-index:-1;
`;

const Logo = styled.img`
    height: 100px;
    width: 160px;
    /* margin: 30px; */
    display: block;
    position: absolute;
    margin-top: 200px;
    left: 0;
    margin-left: 150px;
`;

const TagLine = styled.img`
    height: 600px; 
    width: 600px;
    margin: 30px;
    display: block;
    position: absolute;
    margin-top: 100px;
    right: 0;
`;

const Container_1 = styled.div`
    height: 40%;
    width: 20%;
    /* background-color: #fff; */
    position: absolute;
    margin-top: 18%;
    margin-left: 5%;

`;  

const Text = styled.h2`
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    margin: 30px 0 ;
    text-align: center;
`;

const Go = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #005dd6;
  padding: 20px 40px;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: #1f82d3;
    transform: scale(1.12);
  }
`;



export default LandingPage