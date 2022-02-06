
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, useStaticQuery, graphql } from 'gatsby'

import Layout, { setCookie, getCookie, test } from './layout';
import Seo from './seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Img from "gatsby-image"

import styled from "styled-components"


const PopupSection = styled.div`
    overflow: hidden;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: black;//linear-gradient(45deg, rgb(245,245,240), rgb(245,240,250));
    display: none;
    grid-auto-flow: row;
    grid-template-columns: auto auto;
    text-align: center;
    //color: black;

    @keyframes on-close {
        0% {
            height: 100vh;
        }
        100% {
            height: 0vh;
        }
    }

    @media only screen and (max-width: 900px) {
        grid-template-columns: auto;
      }
`

const Section = styled.div`
    height: 90%;
    width: 100%;

    margin-top: 15%;

    h1 {
        font-size: 500%;
    }

    img {
        position: absolute;
        width: 30%;
        top: 15vh;
        left:10%;
    }
    
    @media only screen and (max-width: 900px) {
        img {
            top: 10vh;
            left: 35%;
        }
      }
    
`

const CloseButton = styled.button`
    position: absolute;
    bottom: 3vh;
    left: 10vw;
    width: 80vw;
    height: 10vh;
    background: rgba(0,0,0,0);
    border: 2px solid white;
    color: white;
    .box {
        z-index: -1;
        position: absolute;
        left: 0;
        top: 0;
        width: 2%;
        height: 100%;
        background: rgb(240,240,240);
        -webkit-transition: width 2s;
    }


    :hover {
        .box {
            width: 5%;
            -webkit-transition: width 1s;
        }
    }

    
`

const Popup = ({data}) => {    
    React.useEffect(() => {
        if (getCookie("blm_popup") != "true")
        {
            document.getElementById('popup').style.display = 'grid';
        }
    })

    return (
        <PopupSection id='popup' onAnimationEnd={(animation) => {
            if (animation.animationName == "on-close"){
            let popup = document.getElementById('popup');
            popup.style.display = 'none';
            }
        }}>
            <Section>
                <img src={withPrefix('blm_icon2.png')}></img>
            </Section>
            <Section>
                <h1>Black</h1>
                <h1>Lives</h1>
                <h1>Matter.</h1>
            </Section>
            
            <CloseButton onClickCapture={() => {
                setCookie("blm_popup", "true", 80);

                let popup = document.getElementById('popup');
                popup.style.animation = 'on-close 5s';
                popup.style.height = '0';
                
            }}>
                <h1>✊🏿No Justice, No Peace</h1>
                <div className='box'></div>
                </CloseButton>
        </PopupSection>
    )
}

export default Popup
