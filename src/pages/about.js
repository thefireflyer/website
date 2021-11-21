
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo'
import BackgroundCover from '../components/BackgroundCover';
import styled from "styled-components"

const AboutSection = styled.div`

  width: 80%;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: auto auto;
  grid-gap: 1%;

  @media only screen and (max-width: 900px) {
    width: 95%;
    grid-template-columns: auto;
  }

  .section {
    
    background: rgba(0, 0, 0, 0.5);
    
    clip-path: -circle(50% at center);
    
    filter: drop-shadow(0 0 1vw black);
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  img {
    
  }
`


const AboutPage = () => {
  return (
    <Layout>
    <Seo title="About" />
    <BackgroundCover>
      
      <div style={{marginBottom:`3.5vw`}}></div>


      <AboutSection>
        
        <div className='section'>
        <img src={withPrefix('icon__.png')}></img>
        <h1>About</h1>

        </div>
        
        <div className='section'>
          
          <h1>Other accounts</h1>
          <Link to="https://github.com/theflyingfire"><h1>Github</h1></Link>
          <Link to="https://www.youtube.com/channel/UCJBJX_6j1520fVj73qi3RGQ"><h1>YouTube</h1></Link>
          <Link to="https://thefireflyer.itch.io/"><h1>Itch.io</h1></Link>

          <h1>Active projects</h1>

          <Link to='https://github.com/theflyingfire/AutoControlG'><h1>AutoControlG</h1></Link>
          <Link to=''><h1>GoCiv</h1></Link>
          <Link to=''><h1>First Tech Challenge</h1></Link>

          <h1>Misc</h1>
          <Link to=''><h1>Email</h1></Link>
          <Link to=''><h1>Resume</h1></Link>

        </div>

      </AboutSection>

    </BackgroundCover>
        
      </Layout>
  )
}

// Step 3: Export your component
export default AboutPage