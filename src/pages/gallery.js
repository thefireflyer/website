
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { StaticImage } from "gatsby-plugin-image";

import styled from "styled-components"
import BackgroundCover from '../components/BackgroundCover';
const Section = styled.div`
  width: 80%;
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: auto auto auto;
  grid-gap: 1%;
  
@media only screen and (max-width: 900px) {
  width: 95%;
  grid-template-columns: auto;
}
`

const ImageDiv = styled.div`

  img {
    border-radius: 20px;
  }
`

const Gallery = ({data}) => {    
    
    return (
        
    <>
        <Seo title="Gallery" />
        <BackgroundCover>
      <div className="contentMargin"></div>

        <Section>

            {data.allMdx.nodes.map( image => (
              <ImageDiv className='pickable' key={image.frontmatter.slug}>
              <Link to={image.frontmatter.slug} >
              <GatsbyImage image={getImage(image.frontmatter.img[0].childImageSharp)} style={{width:`100%`, minWidth:`300px`}}></GatsbyImage>
              {/*<StaticImage
                src={image.frontmatter.img[0].childImageSharp.fluid.src}
                alt="A dinosaur"
                placeholder="blurred"
                layout="fixed"
                width={200}
                height={200}
              />*/}
              </Link>
              </ImageDiv>
            ))}
        </Section>
        </BackgroundCover>

    </>
    )
}

export default Gallery

export const query = graphql`
  {
    allMdx(filter: {frontmatter: {type: {eq: "Image post"}}},sort: {fields: frontmatter___date, order: DESC}) {
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
  }
`