
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
        
        <center>
        <div style={{backgroundColor:`rebeccapurple`,borderRadius:`2vw`, width:`80%`, display:`grid`, gridAutoFlow:`row`}}>
            {data.allMarkdownRemark.nodes.map(link => (
            <div key={link.frontmatter.slug}>
                <a
                    href={`${link.frontmatter.slug}`} >
                        <h1 style={{color:`white`}}>{link.frontmatter.title}</h1> 
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
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Blog post"}}}) {
      nodes {
        frontmatter {
          slug
          title
        }
      }
    }
  }
`