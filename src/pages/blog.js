
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout';
import Seo from '../components/seo';
import BackgroundCover from '../components/BackgroundCover';



const Blog = ({data}) => {    
    return (
    <>
        <Seo title="Blog" />
        <BackgroundCover>
      <div className="contentMargin"></div>
        <div style={{width:`50%`, display:`grid`, gridAutoFlow:`row`, rowGap:`3%`, minWidth:`350px`}}>
            {data.allMdx.nodes.map(link => (
            <div
            key={link.frontmatter.slug}
            style={{backgroundColor: `rgba(0,0,0,0.5)`,borderRadius:`20px`,overflow:'hidden',alignContent:'center',filter:'drop-shadow(0 0 1vw black)'}}
            className='pickable'>
                <Link to={link.frontmatter.slug}>
                  <img 
                  src={link.frontmatter.img[0].publicURL}
                  alt={link.frontmatter.title}
                  style={{width:`100%`}}></img>
                  <h1>{link.frontmatter.title}</h1>
                </Link>
            </div>
            ))}
        </div>
        </BackgroundCover>
       
    </>
    )
}

export default Blog

export const query = graphql`
  {
    allMdx(filter: {frontmatter: {type: {eq: "Blog post"}}},sort: {fields: frontmatter___date, order: DESC}) {
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