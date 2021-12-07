import React from "react"
import { withPrefix, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Video from '../components/video';
import Seo from '../components/seo';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
      <Layout>
      <Seo title={frontmatter?.title || ""} />
        
    <div className="blog-post-container">
      <div className="blog-post">
        <center>
        <img src={frontmatter.img.publicURL} 
        style={{width:`80%`,filter:'drop-shadow(0 0 1vw black)'}}>

        </img>
        </center>
        <h1>{frontmatter?.title || ""}</h1>
        <h2>{frontmatter?.date || ""}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Video
            videoSrcURL={frontmatter.videoSourceURL}
            videoTitle={frontmatter.title}
        ></Video>
      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        img {
          publicURL
        }
        videoSourceURL
      }
    }
  }
`