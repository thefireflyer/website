
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout';
import Seo from '../components/seo';



const Blog = () => {
    const data = useStaticQuery(graphql`
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
            
        `)
    
    
    
    return (
    <Layout>
        <Seo title="Blog" />

        <ul>
            {data.allMarkdownRemark.nodes.map(link => (
            <li key={link.frontmatter.slug}>
                <span>
                <a
                    href={`${link.frontmatter.slug}`}
                >
                    {link.frontmatter.title}
                </a>
                </span>
            </li>
            ))}
        </ul>
       
    </Layout>
    )
}

export default Blog
