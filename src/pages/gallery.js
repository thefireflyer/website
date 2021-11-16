
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Img from "gatsby-image"



const Gallery = ({data}) => {    
    
    return (
        
    <Layout>
        <Seo title="Gallery" />
        <center>
        <div style={{backgroundColor:`rebeccapurple`,borderRadius:`2vw`, width:`80%`, display:`grid`, gridAutoFlow:`column`}}>
            <center>
            {data.allMarkdownRemark.nodes.map( image => (
              <Link to={image.frontmatter.slug} >
              <Img fluid={image.frontmatter.img.childImageSharp.fluid} style={{width:`25%`}}></Img>
              </Link>
            ))
            /*data.allImageSharp.nodes.map(link => (
              <Link to={`/${link.fluid.originalName}`} >
                <img
                src={link.fluid.src}
                alt={link.fluid.originalName}
                style={{width:`25%`}}>
                </img>
              </Link>
            ))*/}</center>
        </div>
        </center>

    </Layout>
    )
}

export default Gallery

/*export const query = graphql`
    query test2 {
        allImageSharp {
            nodes {
              fluid {
                src
                originalName
              }
            }
          }
    }
`*/
export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Image post"}}}) {
      nodes {
        frontmatter {
          slug
          title
          img {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`