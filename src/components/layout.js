/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";

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

  return (
    <>
      <div className="nav-bar" id="navBar">
        
        <Link to="/" style={{color:`white`,textDecoration:`none`}}><img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />

        <h1>{data.site.siteMetadata?.title || `Title`}</h1></Link>

        </div>
  
        <main>{children}</main>


        <div
        script={
          console.log("hello!"),
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
        }
        ></div>


    </>
  )
}
 
export default Layout
 