import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default ({name, style}) => (
    <StaticQuery
    query={graphql`
    {
        allImageSharp {
          edges {
            node {
              gatsbyImageData(placeholder: BLURRED)
              fluid {
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
        const image = data.allImageSharp.edges.find(
          image => image.node.fluid.originalName === name
        )
        return(<>
        <GatsbyImage image={getImage(image.node)}
         style={style}>
         </GatsbyImage>
         </>)
      }}
  ></StaticQuery>
);