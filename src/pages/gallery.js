
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
        
        <ul>
            {data.allImageSharp.nodes.map(link => (
            <li key={link.fluid.src}>
                <span>
                <img
                src={link.fluid.src}
                alt={link.fluid.originalName}>
                </img>
                </span>
            </li>
            ))}
        </ul>

    </Layout>
    )
}

export default Gallery
