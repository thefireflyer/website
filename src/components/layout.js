/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link, withPrefix } from "gatsby";

import "../styles/main.scss"

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  React.useEffect(() => {
    console.log("hello!");
          
    window.addEventListener('scroll', function() {
      let navBar = this.document.getElementById("navBar");
      if (window.pageYOffset > 10){
        navBar.style.setProperty("--nav_bar_blur", "5px");
        navBar.style.setProperty("--nav_bar_color", "rgba(0,0,0,0.7)");
        navBar.style.setProperty("--nav_bar_border_style", "solid");
      }
      else {
        navBar.style.setProperty("--nav_bar_blur", "0px");
        navBar.style.setProperty("--nav_bar_color", "rgba(0,0,0,0.0)");
        navBar.style.setProperty("--nav_bar_border_style", "none");
      }
    })
  })

  return (
    <>
      <div className="nav-bar" id="navBar">
        
        <Link to="/"
        style={{color:`white`,textDecoration:`none`}}>
            <img
            alt="Logo"
            src={withPrefix("/icon.png")}
            />

          <h1>{data.site.siteMetadata?.title || `Title`}</h1>
        </Link>

        </div>
  
        <main>{children}</main>



    </>
  )
}
 
export default Layout
 