
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Img from "gatsby-image"

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
        
    <Layout>
        <Seo title="Gallery" />
        <BackgroundCover>
        <div style={{marginBottom:`3.5vw`}}></div>

        <Section>

            {data.allMarkdownRemark.nodes.map( image => (
              <ImageDiv className='pickable'>
              <Link to={image.frontmatter.slug} >
              <img src={image.frontmatter.img.publicURL} style={{width:`100%`, minWidth:`300px`}}></img>
              </Link>
              </ImageDiv>
            ))}
        </Section>
        </BackgroundCover>

    </Layout>
    )
}

export default Gallery

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Image post"}}},sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          title
          img {
            publicURL
          }
        }
      }
    }
  }
`