
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';
import Gallery from './gallery';
import BackgroundCover from '../components/BackgroundCover';


const HomePage = ({data}) => {

    React.useLayoutEffect(() => {
        
    let handle = window.setInterval(update_featured_entry, 3000);
    let currentIndex = 0
    let entries = document.getElementsByClassName("featured-entry")

    function update_featured_entry() {
        currentIndex = (currentIndex + 1) % entries.length
        for(var i = 0; i < entries.length; i++)
        {
            entries.item(i).style.display = i==currentIndex?`block`:`none`
        }
    }

    update_featured_entry()

    return () => {window.clearInterval(handle)};
    });

    return (
    <Layout>
        <Seo title="Home" />
            <BackgroundCover>
            <div class="featured">

                {
                    data.allMarkdownRemark.nodes.map(featured => {
                        return <div key={featured.id} class="featured-entry" style={{display:`block`}}>
                            <Link to={featured.frontmatter.slug}>
                                <img src={featured.frontmatter.img.publicURL} />
                                
                                <div class="featured-title">
                                    <h1>{featured.frontmatter.title}</h1>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>

            <div class="About-section" style={{textAlign:`center`}}>
                <Link to="/about">
                <h1>
                    About
                </h1>
                </Link>

                <p>
                    Welcome to my website, I am a programmer and digital artist and most of the stuff I make in either medium goes up here. <br></br>
                    You can also find me on <a href="https://www.youtube.com/channel/UCJBJX_6j1520fVj73qi3RGQ">YouTube</a>, <a href="https://github.com/theflyingfire">GitHub</a> and <a href="https://thefireflyer.itch.io/">Itch.io</a>.
                </p>
            </div>
            
            {/*}
            <embed style={{borderRadius:`15px 50px 30px`, filter:`drop-shadow(0 0 1vw rgba(0,0,0,0.5))`}} type="text/html" src={withPrefix("gallery")} width="80%" height="600vh"></embed>
            
            <div style={{marginBottom:`5vh`}}></div>

            <embed style={{borderRadius:`15px 50px 30px`, filter:`drop-shadow(0 0 1vw rgba(0,0,0,0.5))`}} type="text/html" src={withPrefix("blog")} width="80%" height="600vh"></embed>
            */}

            </BackgroundCover>
    </Layout>
    )
}

export default HomePage

export const featuredPostsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: ASC}
      filter: {frontmatter: {title: {in: ["Test1", "testImg5"]}}}
    ) {
      nodes {
          id
        frontmatter {
          title
          slug
          img {
            publicURL
          }
        }
      }
    }
  }
  `