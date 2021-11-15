
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';



const Gallery = () => {    
    const data = useStaticQuery(graphql`
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
    `)
    return (
        
    <Layout>
        <Seo title="Gallery" />
        <center>
        <div style={{backgroundColor:`rebeccapurple`,borderRadius:`2vw`, width:`80%`, display:`grid`, gridAutoFlow:`column`}}>
            <center>
            {data.allImageSharp.nodes.map(link => (
                <img
                src={link.fluid.src}
                alt={link.fluid.originalName}
                style={{width:`25%`}}>
                </img>
            ))}</center>
        </div>
        </center>

    </Layout>
    )
}

export default Gallery
