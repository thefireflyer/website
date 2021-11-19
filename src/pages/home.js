
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';


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
            <center style={{width:`100%`,height:`200%`,top:`0`,position:`absolute`, left:`0`}}>
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

                <h1>
                    About
                </h1>

                <p>
                    Welcome to my website, I am a programmer and digital artist and most of the stuff I make in either medium goes up here. <br></br>
                    You can also find me on <a href="https://www.youtube.com/channel/UCJBJX_6j1520fVj73qi3RGQ">YouTube</a>, <a href="https://github.com/theflyingfire">GitHub</a> and <a href="https://thefireflyer.itch.io/">Itch.io</a>.
                </p>

            </div>
            </center>
    </Layout>
    )
}

export default HomePage

export const featuredPostsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: frontmatter___date}
      filter: {frontmatter: {title: {in: ["Test1", "Test5"]}}}
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