
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';
import Gallery from './gallery';
import BackgroundCover from '../components/BackgroundCover';
import Video from '../components/video';
import styled from "styled-components";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ScriptDiv = styled.div`
    border-radius: 20px;
    //background: linear-gradient(120deg, hsl(300, 100%, 25%), hsl(180, 100%, 25%));
    background-color: black;
    height: fit-content;
    width: 50vw;
    filter: drop-shadow(0 0 1vw black);
    overflow-x: hidden;
    overflow-y: scroll;

    h1 {
        filter: drop-shadow(0 0 0.5vw black);
    }

    #run h1 {
        filter: drop-shadow(0 0 0.5vw black);
        text-align: center;
        :hover {
            color: orange;
        }
    }

    input {
        width: 100%;
        height: 5vh;
        filter: drop-shadow(0 0 0.5vw black);
        margin-bottom: 0.5vh;
        background-color: #111;
        border: none;
        color: white;
    }

    @media only screen and (max-width: 900px) {
        width: 90vw;
      }
    
    
`

const Script = ({name, callback, children}) => {
    return (
        <>
            <ScriptDiv id={name}>
                <h1>{name.replaceAll("-", " ")}</h1>
                    {children}
                    <h3 id="output"></h3>
                    <a id="run" onClick={callback}><h1>Run</h1></a>
            </ScriptDiv>
            <div className="contentMargin"></div>
        </>
    )
}

const ScriptsPage = ({data}) => {

    return (
    <>
        <Seo title="Scripts" />
        <BackgroundCover>
            <div className="contentMargin"></div>
 
            <h1>Scripts</h1>
            
            <Script name={`time-dilation-calculator`} callback={() => {
                let scriptDiv = document.getElementById("time-dilation-calculator")
                let period_one = scriptDiv.querySelector("#period1").value
                let period_two = scriptDiv.querySelector("#period2").value
                let output = scriptDiv.querySelector("#output")
                const c = 299792458;
                let short_period = (period_one<period_two)?period_one:period_two;
                let long_period = (period_one>period_two)?period_one:period_two;
                let speed = ((1-(short_period/long_period)**2)*c**2)**(1/2)

                const G = 6.67430 *10**-11
                
                let mass = (1-(short_period/long_period)**2)*c**2/2/G

                output.innerHTML = speed + " m/s relative to the faster clocks frame of reference or " + (speed/c*100)+`% the speed of light <br/>
                <br/>`+mass+` kg compacted into a sphere tangential to the reference point with a radius of one meter`
                
            }}>
                <input id="period1" type={`number`} placeholder='period of first clock'></input>
                <input id="period2" type={`number`} placeholder='period of second clock'></input>
            </Script>

            <Script name={`test-demo-2`} callback={() => {
                let scriptDiv = document.getElementById("test-demo-2")
                let input = scriptDiv.querySelector("#input")
                let output = scriptDiv.querySelector("#output")
                output.innerHTML = input.value
            }}>
                <input id="input" type={`text`} placeholder='demo text'></input>
            </Script>

            {/*<ScriptDiv id="test-demo">
                <input id="input" type={`text`}></input>
                <h3 id="output"></h3>
                <a id="run" onClick={() =>{
                    let scriptDiv = document.getElementById("test-demo")
                    let input = scriptDiv.querySelector("#input")
                    let output = scriptDiv.querySelector("#output")
                    output.innerHTML = input.value
                }}><h1>Run</h1></a>
            </ScriptDiv>*/}

        </BackgroundCover>
    </>
    )

}

export default ScriptsPage