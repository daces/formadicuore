import React from "react"
import Helmet from "react-helmet"
import Menu from "../components/menu"
import Intro from "../components/intro"
import { useStaticQuery, graphql } from "gatsby"

export const squareImage = graphql`
fragment squareImage on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }`

export default function About(){
    
const query  = useStaticQuery(graphql`
query{
    logo: file(relativePath: {eq: "1.JPG" }) {
        ...squareImage
    }
    img1: file(relativePath: {eq: "2.JPG" }) {
        ...squareImage
    }
    img2: file(relativePath: {eq: "3.JPG" }) {
        ...squareImage
    }
}
`)
    return (
        <>
        <Helmet>
        <style>{`
        svg {
            width: 530px;
            height: 500px;
        }
        @media (max-width: 768px){
            svg {
                width: 300px;
                height: 250px;
            }
        }
        `}</style>
        </Helmet>
        <div className="container loremipsum">
              <Menu/>
            <div className="row full-height">
                <div className="row ftc no-gutters">
                <Intro 
                    img1={query.img1.childImageSharp.fluid.src} 
                    img2={query.img2.childImageSharp.fluid.src} 
                    logo={query.logo.childImageSharp.fluid.src}
                />
                </div>
            </div>
        </div>
        </>
    )
}