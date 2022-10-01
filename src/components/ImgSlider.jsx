import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import {Link} from "react-router-dom"
import Slider from "react-slick";

const ImgSlider = (props) =>{

    let settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
      <Carousel {...settings}>
      <Wrap>
        <div id="rcbVSmi">
            <img id="rcbVSmi-logo" src="assets/rcbVSmi.png"/>
        </div>
      </Wrap>
      <Wrap>
        <div id="pagalpan">
        <img id="pagalpan-logo" src="assets/pagalpan.png"/>
        </div>
    
      </Wrap>
      <Wrap>
        <div id="rcb">
            <img id="rcb-logo" src="assets/rcb.png"/>
        </div>
      </Wrap>
      <Wrap>
        <div id="kkr">
            <img id="kkr-logo" src="assets/kkr.png"/>
        </div>
      </Wrap>
      <Wrap>
        <div id="srh">
            <img id="srh-logo" src="assets/srh.png"/>
        </div>
      </Wrap>
      <Wrap>
        <div id="mi">
            <img id="mi-logo" src="assets/mi.png"/>
        </div>
      </Wrap>
      <Wrap>
        <div id="csk">
            <img id="csk-logo" src="assets/csk.png"/>
        </div>
      </Wrap>
      <Wrap>
        <div id="delhi-capitals">
            <img id="delhi-capitals-logo" src="assets/delhi-capitals.png"/>
        </div>
      </Wrap>
      <Wrap>
        <div id="dlVSrcb">
            <img id="dlVSrcb-logo" src="assets/dlVSrcb.png"/>
        </div>
      </Wrap>
      
  </Carousel>
          
    )
}


const Carousel = styled(Slider)`
    margin-left: 5%;
    margin-top: 30px;
    /* overflow: hidden; */
    width: 90%;
    height: 65vh;
    position: absolute;
    /* background-color: #2c0202; */
    & > button {
        opacity: 1;
        height: 100%;
        width: 5vw;
        z-index: 1;
        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }
    ul li button {
        &:before {
            font-size: 10px;
            opacity: 1;
            color: rgb(150, 158, 171);
            @media (max-width: 768px) {
                display: none;
            }
        }
    }
    li.slick-active button:before {
        color: white;
        @media (max-width: 768px) {
            display: none;
        }
    }
    .slick-slide {
        a{
            opacity: 0.5;
            transition: opacity 950ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
        }
        
        img {
            opacity: 0;
            transform: translateX(30px);
            transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
        }
    }
    .slick-active {
        a {
            z-index: 99;
            opacity: 1;
        }
        
        img {
            opacity: 1;
            transform: translateX(0px);
            transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms, opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
        }
    }
    .slick-list {
        overflow: hidden;
    }
    .slick-prev {
        left: -5%;
    }
    .slick-next {
        right: -5%;
    }

`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    padding: 0;
    img {
        border-radius: 15px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 96%;
        margin-top: 8px;
        }
    
`


export default ImgSlider;