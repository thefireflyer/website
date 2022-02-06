
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, StaticQuery, useStaticQuery, graphql } from 'gatsby'

import Seo from '../components/seo'
import BackgroundCover from '../components/BackgroundCover';
import styled from "styled-components"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const AboutSection = styled.div`

  width: 80%;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: auto auto;
  grid-gap: 1%;


  .section {
    
    background: rgba(0, 0, 0, 0.5);
    
    
    filter: drop-shadow(0 0 1vw black);
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  @media only screen and (max-width: 900px) {
    width: 95%;
    grid-template-columns: auto;
    .section {
        filter: none;
    }
  }
`


const AppLibraryStyleSection = styled.div`

    display: grid;
    grid-auto-flow: row;
    grid-template-columns: auto auto auto;
    grid-column-gap: 4%;
    grid-row-gap: 6%;


    width: 80%;

    .app {
        padding-bottom: 3rem;
        padding-top: 3rem;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.5);
        text-decoration: none;
        color: white;
        
        filter: drop-shadow(0 0 1vw black);

        transform: none;
        transition: transform 200ms;

        width: 26vw;


    }
    .app:hover {
        transform: scale(105%, 105%);
    }

    
    @media only screen and (max-width: 900px) {
        display: grid;
        width: 95%;
        grid-row-gap: 1%;
        grid-template-columns: auto;
        
        .app {
            filter: none;
            width: auto;
        }
    }
`

const App = ({data}) => {
    return (<a className='app' href={data.path}>
        <img src={data.iconUrl}></img>
        <h2>{data.name}</h2>
    </a>)
}

const apps = [
    {
        name: "HomePortal",
        iconUrl: withPrefix("/icon.png"),
        path: "https://theflyingfire.github.io/homeportal/"
    },
    {
        name: "Timeable",
        iconUrl: withPrefix("/icon.png"),
        path: "https://theflyingfire.github.io/timeable/"
    },
    {
        name: "AutoControlG",
        iconUrl: "https://raw.githubusercontent.com/theflyingfire/AutoControlG/v1.1/AutoControlG/assets/logo.png",
        path: "https://github.com/theflyingfire/AutoControlG"
    },
]

const Divider = styled.div`
margin-bottom: 7vh;
@media only screen and (min-width: 900px) {
    .contentMargin {
        margin-bottom: 10vh;
    }
  }
`

const PostStyleSection = styled.div`
    width:50%;
    display:grid;
    grid-auto-flow:row;
    row-gap:3%;
    min-width:350px;

    .post {
        overflow:hidden;
        border-radius:20px;
        background: rgba(0, 0, 0, 0.5);
        text-decoration: none;
        color: white;
        
        filter: drop-shadow(0 0 1vw black);

        transform: none;
        transition: transform 200ms;
        align-content: center;
    }
    .post:hover {
        transform: scale(102%,102%);
    }

    @media only screen and (max-width: 900px) {
        display: grid;
        width: 95%;
        grid-row-gap: 1%;
        grid-template-columns: auto;
        
        .post {
            filter: none;
        }
    }
`

const GamesStyleSection = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: auto auto auto;
    grid-column-gap: 4%;
    grid-row-gap: 6%;


    width: 80%;


    .game-holder {
        
        position: relative;
        perspective: 500px;
    
    }

    .game {
        
        width: 20vw;
        height: 50vh;
        overflow: hidden;
        filter: drop-shadow(0 0 1vw black);

        transform: none;
        transition: transform 500ms;

    }
    .game img {
        height: 100%;
        width: auto;
    }
    .game:hover {
        transform: rotateX(5deg);
    }

    .glossy {
        position: absolute;
        top: -15vh;
        right: -15vw;
        width: 50vw;
        height: 100vh;
        background: linear-gradient(180deg, rgba(255,255,255,0.1) 14.5%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 100%);

        //pointer-events: none;
        background-blend-mode: overlay;

        transform: rotateZ(25deg);
        transition: transform 500ms;
    }
    
    .glossy:hover {
        transform: rotateZ(25deg) rotateX(-35deg);
    }

    @media only screen and (max-width: 900px) {

        display: grid;
        width: 95%;
        grid-row-gap: 1%;
        grid-template-columns: auto;

        .game {
            width: 80vw;
        }
        
    }
`

const games = [
    {
        name: "test demo",
        coverUrl: "",
        link: "/test"
    },
    {
        name: "test demo",
        coverUrl: "",
        link: "/test"
    },
    {
        name: "test demo",
        coverUrl: "",
        link: "/test"
    },
]

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    {
        allMdx(filter: {frontmatter: {type: {eq: "Blog post"}}}, sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            frontmatter {
              slug
              title
              img {
                publicURL
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }`)

  return (
    <>
    <Seo title="index" />
    <BackgroundCover>
      
        <h1>App Libary</h1>
        <AppLibraryStyleSection>
            {apps.map(app => {
                return (<App data={app} ></App>)
            })}
        </AppLibraryStyleSection>


        <Divider></Divider>

        {/*<h1>Game Library</h1>
        <GamesStyleSection>
        {games.map(game => {
                return (<a href={game.link} className='game-holder'><div className='game'>
                    <img src={game.coverUrl}></img>
                    <div className='glossy'></div>
                    </div>
                    </a>)
            })}
        </GamesStyleSection>

        <Divider></Divider>*/}

        <h1>Recent Posts</h1>

        <PostStyleSection>
            {data.allMdx.nodes.map(link => (
            <div
            className='post'
            key={link.frontmatter.slug}>
                <Link to={link.frontmatter.slug}>
                  <GatsbyImage
                  image={getImage(link.frontmatter.img[0].childImageSharp)}
                  alt={link.frontmatter.title}
                  style={{width:`100%`}}></GatsbyImage>
                  <h1>{link.frontmatter.title}</h1>
                </Link>
            </div>
            ))}
        </PostStyleSection>

        <Divider></Divider>

        <h1>About/Contact Info</h1>
        <AboutSection>
            

            <div className='section'>
            <img src={withPrefix('icon__.png')}></img>
            </div>
            
            <div className='section'>
            
            <h1>Other accounts</h1>
            <a href="https://github.com/theflyingfire"><h1>Github</h1></a>
            <a href="https://codepen.io/theflyingfire"><h1>CodePen</h1></a>
            <a href="https://www.youtube.com/channel/UCJBJX_6j1520fVj73qi3RGQ"><h1>YouTube</h1></a>
            <a href="https://thefireflyer.itch.io/"><h1>Itch.io</h1></a>
            
            <h1>Misc</h1>
            <a href='mailto:'><h1>Email</h1></a>
            <a href='/resume.pdf'><h1>Resume</h1></a>

            </div>

        </AboutSection>

    </BackgroundCover>
        
      </>
  )
}

export default IndexPage
