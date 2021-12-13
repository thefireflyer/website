 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import { Link, withPrefix } from "gatsby";
 import styled from "styled-components"
 


 export default ({children}) => {
   
 
    return (
      <div  style={{
          //background:`linear-gradient(140deg, magenta, aqua) no-repeat fixed`,
          minHeight:`100vh`,
          width:`100%`,
          height:`fit-content`,
          top:`0`,
          position:`absolute`,
           left:`0`}}>
      
      <center>{children}</center>  
      
      <div className="contentMargin"></div>

      </div>
      
    )
  }
  