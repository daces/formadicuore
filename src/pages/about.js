import React from "react"
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var menu = document.querySelector(".menu__sub");
            var navigation = document.querySelector(".menu__main");
            
            function handleClick(evt) {
              // Only if a click on a dropdown trigger happens, either close or open it.
              if (evt.target.hasAttribute("data-dropdown-trigger")) {
                if (menu.classList.contains("is_hidden")) {
                  menu.classList.remove("is_hidden");
                } else {
                  menu.classList.add("is_hidden");
                }
                
                return;
              }
              
              // If a click happens somewhere outside the dropdown, close it.
              if (!evt.target.closest(".menu__sub")) {
                menu.classList.add("is_hidden");
              }
            }
            
            window.addEventListener("click", handleClick);`,
          }}
        />
        </>
    )
}