
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo'
import BackgroundCover from '../components/BackgroundCover';
import styled from "styled-components"
import MiscImage from '../components/MiscImage';
import Video from '../components/video';

const Background = styled.div`
    * {    
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: absolute;

        @media only screen and (min-width: 900px) {
            
        }
    }
`

const Section = styled.div`

`
/*`
    background: url(https://theflyingfire.github.io/test01/static/8913dc387c4ecdbb689c4e673be2646b/d3b28/img6.avif) no-repeat fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
`*/


const Cabin = () => {
  return (
    <>
    <Seo title="Cabin" />

    <Background>
        {<MiscImage name={`img6.JPG`}></MiscImage>
}
        {//<Video videoSrcURL={`r_4yTAvlZ6E`}></Video>
}
    </Background>

    <BackgroundCover>
      <Section>
      <div style={{marginBottom:`3.5vw`}}></div>

        <h1>Coming soon</h1>
        
      </Section>

    </BackgroundCover>
        
      </>
  )
}

// Step 3: Export your component
export default Cabin