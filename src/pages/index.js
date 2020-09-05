import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Helmet from "react-helmet"
import Menu from "../components/menu"
import Intro from "../components/intro"
import Qualities from "../components/qualities"
import Gallery from "../components/gallery"
import ContactForm from "../components/contact-forn"
import Footer from "../components/footer"

import SEO from "../components/seo"
// install Swiper components
SwiperCore.use([Navigation, Pagination]);

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export default function Home() {
 const imageFront1 = useStaticQuery(graphql`
 query {
  logo: file(relativePath: { eq: "1.JPG" }) {
    ...squareImage
  }
  img1: file(relativePath: { eq: "2.JPG" }) {
    ...squareImage
  }
  img2: file(relativePath: { eq: "3.JPG" }) {
    ...squareImage
  }
  rec1: file(relativePath: { eq: "testemonials/rec1.jpg" }) {
    ...squareImage
  }
  rec2: file(relativePath: { eq: "testemonials/rec2.jpg" }) {
    ...squareImage
  }
  rec3: file(relativePath: { eq: "testemonials/rec3.jpg" }) {
    ...squareImage
  }
  rec4: file(relativePath: { eq: "testemonials/rec4.jpg" }) {
    ...squareImage
  }
  gal1: file(relativePath: { eq: "1.JPG" }) {
    ...squareImage
  }
  gal2: file(relativePath: { eq: "2.JPG" }) {
    ...squareImage
  }
  gal3: file(relativePath: { eq: "3.JPG" }) {
    ...squareImage
  }
  gal4: file(relativePath: { eq: "IMG-0070.JPG" }) {
    ...squareImage
  }
  gal5: file(relativePath: { eq: "IMG-0140.JPG" }) {
    ...squareImage
  }
  gal6: file(relativePath: { eq: "IMG-0161.JPG" }) {
    ...squareImage
  }
  gal7: file(relativePath: { eq: "IMG-0307.JPG" }) {
    ...squareImage
  }
  gal8: file(relativePath: { eq: "IMG-0227.JPG" }) {
    ...squareImage
  }
  gal9: file(relativePath: { eq: "IMG-0293.JPG" }) {
    ...squareImage
  }

}
`)

function Swiperzi() {
  return (
    <>
    <Swiper
    initialSlide={0}
    spaceBetween={20}
    slidesOffsetBefore={-50}
    preloadImages={true}
    updateOnImagesReady={true}
    centeredSlides={true}
    centeredSlidesBounds={true}
    centerInsufficientSlides={true}
    breakpoints={{
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
        slidesOffsetBefore: -40,
      },
        520:{
          slidesPerView: 5,
          spaceBetween: 30,
          slidesOffsetBefore:0,
        }}}
      pagination={{
          el: '.swiper-pagination',
          dynamicBullets: true,
        }}
    >
      <SwiperSlide><img src={imageFront1.rec1.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <SwiperSlide><img src={imageFront1.rec2.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <SwiperSlide><img src={imageFront1.rec3.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <SwiperSlide><img src={imageFront1.rec4.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <SwiperSlide><img src={imageFront1.rec1.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <SwiperSlide><img src={imageFront1.rec2.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <SwiperSlide><img src={imageFront1.rec3.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <SwiperSlide><img src={imageFront1.rec4.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <SwiperSlide><img src={imageFront1.rec1.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <SwiperSlide><img src={imageFront1.rec2.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <SwiperSlide><img src={imageFront1.rec3.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <SwiperSlide><img src={imageFront1.rec4.childImageSharp.fluid.src} alt="Siema " /></SwiperSlide>
      <div className="swiper-pagination"></div>
    </Swiper>
    </>
  );
};

  return <>
  <SEO />
{console.log( "works", imageFront1)}
<div className="container full-height loremipsum">
  <Menu/>
  <div className="row full-height">
    <div className="row ftc no-gutters">
      <Intro 
        img1={imageFront1.img1.childImageSharp.fluid.src} 
        img2={imageFront1.img2.childImageSharp.fluid.src} 
        logo={imageFront1.logo.childImageSharp.fluid.src}
      />
    </div>
  </div>
</div>
<div className="container qualities">
  <Qualities 
    img1={imageFront1.logo.childImageSharp.fluid.src}
    img2={imageFront1.img2.childImageSharp.fluid.src}
    img3={imageFront1.img1.childImageSharp.fluid.src}/>
</div>
<div className="container-fluid gallery-grid">
  <Gallery 
    img1={imageFront1.gal1.childImageSharp.fluid}
    img2={imageFront1.gal2.childImageSharp.fluid}
    img3={imageFront1.gal3.childImageSharp.fluid}
    img4={imageFront1.gal4.childImageSharp.fluid}
    img5={imageFront1.gal5.childImageSharp.fluid}
    img6={imageFront1.gal6.childImageSharp.fluid} 
    img7={imageFront1.gal7.childImageSharp.fluid} 
  />
</div>
<div className="container-fluid ">
  <div className="row">
    <div className="col-md-12">
      <h1 className="gallery-grid__title">cosa dicono di noi</h1>
      <p className="testimonials__counter">(12 testimonianze)</p>
    </div>
  </div>
 <div className="testimonials">
    <Swiperzi />
  </div>
</div>
<div className="container-fluid footer">
  <ContactForm />
</div>
<div className="container-fluid footer">
  <Footer />
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

}
