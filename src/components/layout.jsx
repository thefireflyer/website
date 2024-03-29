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
import styled from "styled-components";

import "../styles/main.scss";
import Popup from "./Popup";

const NavBar = () => {
  React.useEffect(() => {
    
    let lastScrollPos = window.scrollY;

    let navBar = document.getElementById("navBar");
    let navBarMobile = document.getElementById("navBarMobile");
    let navLogo = document.getElementById("nav-logo").querySelector("img");
    //let navMenuMobile = document.getElementById("menu");
    //navMenuMobile.style.width = '0';
    
    let scrollHandle = window.setInterval(function() {
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

      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollPos)
      {
        navBarMobile.style.top = `-14vh`;
        navBar.style.top = `-14vh`;
        navLogo.style.top = `-14vh`;
      }
      if (currentScroll < lastScrollPos) {
        navBarMobile.style.top = `0`;
        navBar.style.top = `-1.1%`;
        navLogo.style.top = `-1.25vw`;
      }

      lastScrollPos = currentScroll;
    }, 500);

    setCookie("test", "test", 100);
    
    document.getElementById("menu").style.width = `0`;
    document.getElementById("menu-close").style.display = `none`;

  })
  return(<>
    <div className="nav-bar" id="navBar">
    <Link to="/home" getProps={({ isCurrent }) => {
      return isCurrent ? { style: {color: `white`} } : {}
    }}><h1>Home</h1></Link>
    
    <Link to="/gallery" getProps={({ isCurrent }) => {
      return isCurrent ? { style: {color: `white`} } : {}
    }}><h1>Gallery</h1></Link>

    <Link to="/blog" getProps={({ isCurrent }) => {
      return isCurrent ? { style: {color: `white`} } : {}
    }}><h1>Blog</h1></Link>

    <Link to="/about" getProps={({ isCurrent }) => {
      return isCurrent ? { style: {color: `white`} } : {}
    }}><h1>About</h1></Link>

  </div>

  <Link to="/" id="nav-logo">
    <img
    alt="Logo"
    src={withPrefix("/icon__.png")}
    />
  </Link>

  <div className="nav-bar-mobile" id="navBarMobile">
  <Link to="/" id="logo">
    <img
    alt="Logo"
    src={withPrefix("/icon__.png")}
    />
  </Link>
  <a id="menu-open" onClick={() => {
    //open
    document.getElementById("menu").style.width = `70vw`;
    document.getElementById("menu-close").style.display = `block`;
  }}><h1>&#9776;</h1></a>

  <a onClick={() => {
    //close
    document.getElementById("menu").style.width = `0`;
    document.getElementById("menu-close").style.display = `none`;
  }} id="menu-close"></a>

  <center id="menu">
      
    <Link to="/home" getProps={({ isCurrent }) => {
      return isCurrent ? { style: {color: `white`} } : {}
    }}><h1>Home</h1></Link>
    
    <Link to="/gallery" getProps={({ isCurrent }) => {
      return isCurrent ? { style: {color: `white`} } : {}
    }}><h1>Gallery</h1></Link>

    <Link to="/blog" getProps={({ isCurrent }) => {
      return isCurrent ? { style: {color: `white`} } : {}
    }}><h1>Blog</h1></Link>

    <Link to="/about" getProps={({ isCurrent }) => {
      return isCurrent ? { style: {color: `white`} } : {}
    }}><h1>About</h1></Link>

    <Link to="/scripts" getProps={({ isCurrent }) => {
      return isCurrent ? { style: {color: `white`} } : {}
    }}><h1>Scripts</h1></Link>

    <Link to="https://theflyingfire.github.io/homeportal/" getProps={({ isCurrent }) => {
      return isCurrent ? { style: {color: `white`} } : {}
    }}><h1>Cabin↪</h1></Link>

  </center>

  </div></>)
}

const Layout = ({children, pageContext}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  /*React.useEffect(() => {
    
    let lastScrollPos = window.scrollY;

    let navBar = document.getElementById("navBar");
    let navBarMobile = document.getElementById("navBarMobile");
    let navLogo = document.getElementById("nav-logo").querySelector("img");
    //let navMenuMobile = document.getElementById("menu");
    //navMenuMobile.style.width = '0';
    
    let scrollHandle = window.setInterval(function() {
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

      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollPos)
      {
        navBarMobile.style.top = `-14vh`;
        navBar.style.top = `-14vh`;
        navLogo.style.top = `-14vh`;
      }
      if (currentScroll < lastScrollPos) {
        navBarMobile.style.top = `0`;
        navBar.style.top = `-1.1%`;
        navLogo.style.top = `-1.25vw`;
      }

      lastScrollPos = currentScroll;
    }, 500);

    if (getCookie("blm_popup") != "true")
    {
        document.getElementById('popup').style.display = 'grid';
    }

    setCookie("test", "test", 100);
    
    document.getElementById("menu").style.width = `0`;
    document.getElementById("menu-close").style.display = `none`;

  })*/


  if (pageContext.layout === "full") { 
    return (<>
      <main>{children}</main>
      <Popup></Popup>
      <NavBar></NavBar>
      </>)
  }
  
  


  return (
    <>
    <main>{children}</main>


    <Popup></Popup>
        
    </>
  )
}
 
export default Layout


export function setCookie(cname, cvalue, exdays) {
  if (getCookie("accepted_cookies") != "true")
  {
    alert("this website uses cookies");
    
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "accepted_cookies" + "=" + "true" + ";" + expires + ";path=/";
  }
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}