
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
        <div style={{width:`80%`, display:`grid`, gridAutoFlow:`column`, rowGap:`3%`, columnGap:`4%`}}>
            <center>
            {data.allMarkdownRemark.nodes.map( image => (
              <Link to={image.frontmatter.slug} >
              <img src={image.frontmatter.img.publicURL} style={{width:`33%`, minWidth:`300px`}}></img>
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
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Image post"}}},sort: {fields: frontmatter___date}) {
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