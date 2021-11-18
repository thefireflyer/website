
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout';
import Seo from '../components/seo';



const Blog = ({data}) => {
    /*const data = useStaticQuery(graphql`
    query test {
        allMarkdownRemark {
            nodes {
              frontmatter {
                slug
                title                
              }
            }
          }
      }
            
        `)*/
    
    
    
    return (
    <Layout>
        <Seo title="Blog" />
        <center style={{background:`linear-gradient(140deg, magenta, aqua) no-repeat fixed`,width:`100%`,height:`200%`,top:`0`,position:`absolute`, paddingTop:`4vw`, left:`0`}}>
        <div style={{width:`50%`, display:`grid`, gridAutoFlow:`row`, rowGap:`3%`, minWidth:`400px`}}>
            {data.allMarkdownRemark.nodes.map(link => (
            <div
            key={link.frontmatter.slug}
            style={{backgroundColor: `rgba(0,0,0,0.5)`,borderRadius:`20px`,overflow:'hidden',alignContent:'center',filter:'drop-shadow(0 0 1vw black)'}}>
                <a href={`${link.frontmatter.slug}`}>
                  <img 
                  src={link.frontmatter.img.publicURL}
                  alt={link.frontmatter.title}
                  style={{width:`100%`}}></img>
                  <h1>{link.frontmatter.title}</h1>
                </a>
            </div>
            ))}
        </div>
        </center>
       
    </Layout>
    )
}

export default Blog

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Blog post"}}},sort: {fields: frontmatter___date}) {
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