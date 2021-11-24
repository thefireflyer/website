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
    
    <main>{children}</main>
    
      <div className="nav-bar" id="navBar">
        
        <Link to="/"><h1>Home</h1></Link>
        
        <Link to="/gallery"><h1>Gallery</h1></Link>

        <Link to="/blog"><h1>Blog</h1></Link>

        <Link to="/about"><h1>About</h1></Link>
           
        </div>

        <Link to="/" className="nav-logo">
          <img
          alt="Logo"
          src={withPrefix("/icon__.png")}
          />
        </Link>




    </>
  )
}
 
export default Layout
 