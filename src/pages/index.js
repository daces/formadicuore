import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { graphql, useStaticQuery,withPrefix, Link  } from "gatsby"
import baggete from "baguettebox.js"
// Import Swiper styles

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
  /*
  const imageFront1= useStaticQuery(graphql`
  query {
    desktop: file(relativePath: { eq: "1.JPG" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)
*/
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
    <Swiper
    slidesPerView={4}
    spaceBetween={30} 
    slidesOffsetBefore={0} 
    preloadImages={true}
    updateOnImagesReady={true}
    centeredSlides={true}
    centerInsufficientSlides={true}
    pagination= {{
      el: '.swiper-pagination',
      clickable: true,
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
    </Swiper>
  );
};

  return <>

{console.log( "works", imageFront1.img1.childImageSharp.fluid.src)}
<div className="container full-height loremipsum">
  <div className="row">
    <div className="menu">
      <ul className="menu__logo">
        <li><a href="/">
        <svg className="menu__logo-small" xmlns="http://www.w3.org/2000/svg" width="793.428" height="749.254" viewBox="0 0 793.428 749.254">
          <g transform="translate(-102.314 -223.346)">
          <path d="M44.943,922.094H196.428L249.5,916.3V900.867l-8.684-7.719-122.539-3.859L109.59,880.6V565.091l5.789-19.3H286.161L297.74,540V525.532l-6.754-8.684-176.572-4.824L109.59,463.78l4.824-73.33,12.543-46.314,15.438-35.7,28.946-28.946,25.087-12.543h32.806l34.735,16.4,33.771,54.033L320.9,402.993l17.368,8.684,8.684-9.648v-16.4l-20.262-53.068-26.052-46.314-36.665-36.665L233.093,238H187.744L141.43,261.157,100.906,317.12,85.468,381.766,77.749,512.023l-39.56,4.824L32.4,531.321l6.754,14.473H77.749V889.288l-32.806,3.859L32.4,898.937V909.55Z" transform="translate(152.08 50.006)" fill="#fff" stroke="#fff" strokeWidth="1"/>
          <path d="M391.183-377.676h0c-.122-.193-12.449-19.632-33.537-47.3-12.4-16.269-25.366-32.173-38.542-47.273-16.469-18.873-33.309-36.531-50.054-52.483-18.994-18.1-30.089-28.864-38.191-36.727C209.8-581.9,209.8-581.9,146.228-637.572l-1.574-1.378-18.971-16.616a500.583,500.583,0,0,1-39-38.036,437.375,437.375,0,0,1-31.9-39.01,358.151,358.151,0,0,1-43.545-78.636A273.678,273.678,0,0,1-7.093-886.875c-2.121-23.919-.527-46.8,4.74-68.017a280.833,280.833,0,0,1,9.459-30.671,238.81,238.81,0,0,1,13.067-28.991,209.908,209.908,0,0,1,17.055-26.8,194.844,194.844,0,0,1,21.421-24.1,194.881,194.881,0,0,1,26.167-20.888,212.058,212.058,0,0,1,31.292-17.165,249.853,249.853,0,0,1,36.8-12.932,313.625,313.625,0,0,1,42.679-8.187A181.36,181.36,0,0,1,217.717-1126a174.346,174.346,0,0,1,38.44,4.295,183.265,183.265,0,0,1,33.918,11.324A219.261,219.261,0,0,1,343.6-1076.02a259.751,259.751,0,0,1,19.237,18.353c4.906,5.181,9.607,10.568,13.971,16.009a181.422,181.422,0,0,1,11.4,15.619l.007-.015a158.25,158.25,0,0,1,11.291-15.194c4.375-5.3,9.133-10.542,14.14-15.589a240.9,240.9,0,0,1,19.814-17.869,223.182,223.182,0,0,1,56.7-33.458,210.111,210.111,0,0,1,36.906-11.026,217.017,217.017,0,0,1,42.625-4.182,238.839,238.839,0,0,1,29.995,1.931A247.868,247.868,0,0,1,625-1116.9a222.9,222.9,0,0,1,22.982,6.7,200.827,200.827,0,0,1,39.383,18.825,196.022,196.022,0,0,1,55.337,51.917,219.542,219.542,0,0,1,17.606,28.845,231.591,231.591,0,0,1,12,27.938,219.412,219.412,0,0,1,7.216,24.909,161.775,161.775,0,0,1,3.26,19.756c.161,1.7.346,3.5.542,5.419v.009c1.208,11.8,2.862,27.964,1.721,47.81a234.159,234.159,0,0,1-4.2,32.563,258.674,258.674,0,0,1-10.79,37.968,314.449,314.449,0,0,1-19.785,43.1A411.011,411.011,0,0,1,719.075-723.2a564.166,564.166,0,0,1-45,52.524,795.779,795.779,0,0,1-61.219,56.825C566-574.911,528.837-537.857,498.977-508.083c-4.18,4.168-8.5,8.478-12.594,12.534-18.555,19.121-35.106,37.216-49.194,53.783-11.27,13.253-21,25.563-28.912,36.589a244.406,244.406,0,0,0-13.659,20.871,65.134,65.134,0,0,0-3.435,6.627ZM216.571-1097.164c-1.3,0-2.63.017-3.946.051-67.1,1.725-110.459,30.388-135.017,54.13a187.588,187.588,0,0,0-20.425,23.313,181.331,181.331,0,0,0-15.264,24.489c-8.167,15.817-13.487,32.082-15.387,47.036-3.289,25.89-8.26,65.013,6.293,112.071a247.656,247.656,0,0,0,14.393,35.958,308.715,308.715,0,0,0,23.091,39.036,414.923,414.923,0,0,0,33.575,42.067,583.183,583.183,0,0,0,45.844,45.048c32.254,28.542,52.843,46.7,66.468,58.715l.024.021c25.642,22.614,25.642,22.614,30.213,27.31,3.38,3.473,9.672,9.937,32.07,31.275,15.308,14.584,30.723,30.266,45.818,46.612,12.077,13.077,23.977,26.6,35.369,40.208,19.355,23.111,30.743,38.713,30.856,38.868.089-.178,2.316-4.42,13.146-17.476,6.514-7.854,14.833-17.334,24.724-28.179,12.362-13.553,27.231-29.289,44.194-46.77,2.975-2.948,6.055-6.012,9.034-8.975,14.009-13.933,29.884-29.722,47.847-46.684,20.786-19.629,40.426-37.095,60.041-53.4,83.549-68.8,180.1-175.371,165.574-292.382-.138-1.112-.257-2.071-.349-2.912a217.445,217.445,0,0,0-6.3-33.57,197.467,197.467,0,0,0-22.881-53.326,159.959,159.959,0,0,0-50.817-51.309c-25.007-15.7-55.323-24.956-90.107-27.519-5.662-.417-11.32-.629-16.816-.629-31.433,0-60.345,6.858-85.931,20.384a182.4,182.4,0,0,0-54.685,44.844,215.066,215.066,0,0,0-17.315,23.95,222.364,222.364,0,0,0-11.531,20.893,162.165,162.165,0,0,0-8.414,20.384,228.247,228.247,0,0,0-10.7-20.865c-4.152-7.27-8.671-14.465-13.43-21.387a284.726,284.726,0,0,0-18.859-24.516c-16.71-19.383-34.925-34.827-54.14-45.9C268.811-1090.143,243.154-1097.164,216.571-1097.164Z" transform="translate(110.316 1349.346)" fill="#fff"/>
          </g>
        </svg>
      </a>
        </li>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Testemonials</a></li>
        </ul>
    </div>
  </div>
  <div className="row full-height">
    <div className="row ftc no-gutters">
      <div className="col-xs-12 col-sm-12 col-md-7">
        <div className="showcase">



          <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" width="1272.939" height="1103.442" viewBox="0 0 1272.939 1103.442">
          <defs>
            <pattern id="a" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 640 640">
              <image width="640" height="640" xlinkHref={imageFront1.img1.childImageSharp.fluid.src}/>
              
              
            </pattern>
            <filter id="b" x="0" y="322.188" width="719.671" height="697.33" filterUnits="userSpaceOnUse">
              <feOffset dx="22" dy="-22" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="22" result="c"/>
              <feFlood floodOpacity="0.161"/>
              <feComposite operator="in" in2="c"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <pattern id="d" width="1" height="1" viewBox="50.953 112.72 652.129 615.057">
              <image preserveAspectRatio="xMidYMid slice" width="754.034" height="754.034" xlinkHref={imageFront1.logo.childImageSharp.fluid.src}/>
            </pattern>
            <filter id="e" x="184.49" y="0" width="886.034" height="843.169" filterUnits="userSpaceOnUse">
              <feOffset dx="22" dy="-22" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="22" result="f"/>
              <feFlood floodOpacity="0.161"/>
              <feComposite operator="in" in2="f"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <pattern id="g" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 640 640">
              <image width="640" height="640" xlinkHref={imageFront1.img2.childImageSharp.fluid.src}/>
            </pattern>
            <filter id="h" x="553.268" y="406.111" width="719.671" height="697.331" filterUnits="userSpaceOnUse">
              <feOffset dx="22" dy="-22" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="22" result="i"/>
              <feFlood floodOpacity="0.161"/>
              <feComposite operator="in" in2="i"/>
              <feComposite in="SourceGraphic"/>
            </filter>
          </defs>
          <g transform="translate(22.176 -26.522)">
            <g transform="matrix(0.875, -0.485, 0.485, 0.875, -319.326, 572.747)">
              <g transform="matrix(0.87, 0.48, -0.48, 0.87, 524.71, -333.68)" filter="url(#b)">
                <path d="M38.151,214.153c-50.868-48.991-50.868-128.42,0-177.411s133.341-48.99,184.21,0l4,3.857,4-3.857c50.868-48.99,133.341-48.99,184.21,0s50.868,128.42,0,177.411L226.365,395.419Z" transform="translate(44 629.68) rotate(-29)" fill="url(#a)"/>
              </g>
              <g transform="translate(257.78 228.38)">
                <path d="M3394.581,1449s-37.03-70.747-105.434-67.515c-31.192,1.474-56.924,11.263-76.784,26.809-23.156,18.125-37.85,44.361-42.721,73.845-8.954,54.2,13.937,109.675,78.3,166.9s38.107,33.125,77.964,71.1,69.481,80.725,69.481,80.725,11.109-18.919,55.275-64.432c17.257-17.1,38.983-39.331,68.135-63.556,106.78-88.737,103.279-148.253,101.663-180.57s-25.584-103.952-110.146-109.069S3394.581,1449,3394.581,1449Z" transform="translate(-3167.78 -1381.38)" fill="none" stroke="#fbd8d4" strokeWidth="28" opacity="0.67"/>
              </g>
            </g>
            <g transform="matrix(1, 0, 0, 1, -22.18, 26.52)" filter="url(#e)">
              <path d="M490.678-1326.31c-.115-.183-11.831-18.657-31.871-44.951-11.784-15.46-24.107-30.576-36.629-44.925-15.651-17.936-31.655-34.718-47.568-49.878-18.051-17.2-28.6-27.431-36.3-34.9C318.3-1520.39,318.3-1520.39,257.886-1573.3c-7-6.127-12.986-11.373-19.524-17.1a475.465,475.465,0,0,1-37.067-36.148,415.671,415.671,0,0,1-30.314-37.073,340.386,340.386,0,0,1-41.383-74.732,260.092,260.092,0,0,1-17.42-71.871c-2.016-22.731-.5-44.48,4.505-64.641a266.587,266.587,0,0,1,8.989-29.147,226.833,226.833,0,0,1,12.418-27.552,199.419,199.419,0,0,1,16.208-25.47,185.133,185.133,0,0,1,20.357-22.9,185.241,185.241,0,0,1,24.868-19.851,201.513,201.513,0,0,1,29.739-16.313,237.567,237.567,0,0,1,34.969-12.289,298.077,298.077,0,0,1,40.56-7.781,172.445,172.445,0,0,1,21.034-1.305,165.686,165.686,0,0,1,36.531,4.082,174.114,174.114,0,0,1,32.234,10.762,208.392,208.392,0,0,1,50.869,32.655,247.051,247.051,0,0,1,18.282,17.441c4.662,4.925,9.13,10.044,13.277,15.215a172.78,172.78,0,0,1,10.834,14.843l.006-.014a150.482,150.482,0,0,1,10.731-14.44c4.158-5.035,8.679-10.019,13.438-14.815a229.014,229.014,0,0,1,18.831-16.982,212.084,212.084,0,0,1,53.883-31.8,199.631,199.631,0,0,1,35.073-10.479,206.185,206.185,0,0,1,40.509-3.974,226.979,226.979,0,0,1,28.506,1.834,235.928,235.928,0,0,1,24.055,4.314,211.734,211.734,0,0,1,21.84,6.367,190.847,190.847,0,0,1,37.427,17.891,186.277,186.277,0,0,1,52.59,49.339,208.651,208.651,0,0,1,16.732,27.412,220.321,220.321,0,0,1,11.4,26.552,208.664,208.664,0,0,1,6.858,23.672c1.494,6.644,3.426,22.107,3.613,23.926v.008c1.148,11.216,2.721,26.576,1.635,45.436a222.487,222.487,0,0,1-3.994,30.947,245.831,245.831,0,0,1-10.255,36.082,298.781,298.781,0,0,1-18.8,40.956,390.491,390.491,0,0,1-29.64,45.568,536.19,536.19,0,0,1-42.765,49.917,756.375,756.375,0,0,1-58.18,54c-44.532,37.007-79.848,72.222-108.225,100.517-3.973,3.961-8.08,8.057-11.969,11.911-17.635,18.172-33.364,35.368-46.751,51.113-10.71,12.595-19.954,24.294-27.476,34.772a232.233,232.233,0,0,0-12.981,19.835,62.165,62.165,0,0,0-3.264,6.3v0Z" transform="translate(117.18 2125.48)" fill="url(#d)"/>
            </g>
            <g transform="translate(81 -128)" opacity="0.72">
              <path d="M44.943,922.094H196.428L249.5,916.3V900.867l-8.684-7.719-122.539-3.859L109.59,880.6V565.091l5.789-19.3H286.161L297.74,540V525.532l-6.754-8.684-176.572-4.824L109.59,463.78l4.824-73.33,12.543-46.314,15.438-35.7,28.946-28.946,25.087-12.543h32.806l34.735,16.4,33.771,54.033L320.9,402.993l17.368,8.684,8.684-9.648v-16.4l-20.262-53.068-26.052-46.314-36.665-36.665L233.093,238H187.744L141.43,261.157,100.906,317.12,85.468,381.766,77.749,512.023l-39.56,4.824L32.4,531.321l6.754,14.473H77.749V889.288l-32.806,3.859L32.4,898.937V909.55Z" transform="translate(152.08 50.006)" fill="#fff" stroke="#fff" strokeWidth="1" opacity="0.91"/>
              <path d="M391.183-377.676h0c-.122-.193-12.449-19.632-33.537-47.3-12.4-16.269-25.366-32.173-38.542-47.273-16.469-18.873-33.309-36.531-50.054-52.483-18.994-18.1-30.089-28.864-38.191-36.727C209.8-581.9,209.8-581.9,144.654-638.95l-18.971-16.616a500.583,500.583,0,0,1-39-38.036,437.375,437.375,0,0,1-31.9-39.01,358.151,358.151,0,0,1-43.545-78.636A273.678,273.678,0,0,1-7.093-886.875c-2.121-23.919-.527-46.8,4.74-68.017a280.833,280.833,0,0,1,9.459-30.671,238.81,238.81,0,0,1,13.067-28.991,209.908,209.908,0,0,1,17.055-26.8,194.844,194.844,0,0,1,21.421-24.1,194.881,194.881,0,0,1,26.167-20.888,212.058,212.058,0,0,1,31.292-17.165,249.853,249.853,0,0,1,36.8-12.932,313.625,313.625,0,0,1,42.679-8.187A181.36,181.36,0,0,1,217.717-1126a174.346,174.346,0,0,1,38.44,4.295,183.265,183.265,0,0,1,33.918,11.324A219.261,219.261,0,0,1,343.6-1076.02a259.751,259.751,0,0,1,19.237,18.353c4.906,5.181,9.607,10.568,13.971,16.009a181.422,181.422,0,0,1,11.4,15.619l.007-.015a158.25,158.25,0,0,1,11.291-15.194c4.375-5.3,9.133-10.542,14.14-15.589a240.9,240.9,0,0,1,19.814-17.869,223.182,223.182,0,0,1,56.7-33.458,210.111,210.111,0,0,1,36.906-11.026,217.017,217.017,0,0,1,42.625-4.182,238.839,238.839,0,0,1,29.995,1.931A247.868,247.868,0,0,1,625-1116.9a222.9,222.9,0,0,1,22.982,6.7,200.827,200.827,0,0,1,39.383,18.825,196.022,196.022,0,0,1,55.337,51.917,219.542,219.542,0,0,1,17.606,28.845,231.591,231.591,0,0,1,12,27.938,219.412,219.412,0,0,1,7.216,24.909c1.572,6.991,3.606,23.261,3.8,25.175v.009c1.208,11.8,2.862,27.964,1.721,47.81a234.159,234.159,0,0,1-4.2,32.563,258.674,258.674,0,0,1-10.79,37.968,314.449,314.449,0,0,1-19.785,43.1A411.011,411.011,0,0,1,719.075-723.2a564.166,564.166,0,0,1-45,52.524,795.779,795.779,0,0,1-61.219,56.825C566-574.911,528.837-537.857,498.977-508.083c-4.18,4.168-8.5,8.478-12.594,12.534-18.555,19.121-35.106,37.216-49.194,53.783-11.27,13.253-21,25.563-28.912,36.589-7.042,9.81-17.057,27.41-17.093,27.5ZM216.571-1097.164c-1.3,0-2.63.017-3.946.051-67.1,1.725-110.459,30.388-135.017,54.13a187.588,187.588,0,0,0-20.425,23.313,181.331,181.331,0,0,0-15.264,24.489c-8.167,15.817-13.487,32.082-15.387,47.036-3.289,25.89-8.26,65.013,6.293,112.071a247.656,247.656,0,0,0,14.393,35.958,308.715,308.715,0,0,0,23.091,39.036,414.923,414.923,0,0,0,33.575,42.067,583.183,583.183,0,0,0,45.844,45.048c32.254,28.542,52.843,46.7,66.468,58.715l.024.021c25.642,22.614,25.642,22.614,30.213,27.31,3.38,3.473,9.672,9.937,32.07,31.275,15.308,14.584,30.723,30.266,45.818,46.612,12.077,13.077,23.977,26.6,35.369,40.208,19.355,23.111,30.743,38.713,30.856,38.868.089-.178,2.316-4.42,13.146-17.476,6.514-7.854,14.833-17.334,24.724-28.179,12.362-13.553,27.231-29.289,44.194-46.77,2.975-2.948,6.055-6.012,9.034-8.975,14.009-13.933,29.884-29.722,47.847-46.684,20.786-19.629,40.426-37.095,60.041-53.4,83.549-68.8,180.1-175.371,165.574-292.382-.138-1.112-2.22-20.064-6.648-36.481a197.467,197.467,0,0,0-22.881-53.326,159.959,159.959,0,0,0-50.817-51.309c-25.007-15.7-55.323-24.956-90.107-27.519-5.662-.417-11.32-.629-16.816-.629-31.433,0-60.345,6.858-85.931,20.384a182.4,182.4,0,0,0-54.685,44.844,215.066,215.066,0,0,0-17.315,23.95,222.364,222.364,0,0,0-11.531,20.893,162.165,162.165,0,0,0-8.414,20.384,228.247,228.247,0,0,0-10.7-20.865c-4.152-7.27-8.671-14.465-13.43-21.387a284.726,284.726,0,0,0-18.859-24.516c-16.71-19.383-34.925-34.827-54.14-45.9C268.811-1090.143,243.154-1097.164,216.571-1097.164Z" transform="translate(110.316 1349.346)" fill="#fff"/>
            </g>
            <g transform="matrix(1, 0, 0, 1, -22.18, 26.52)" filter="url(#h)">
              <path d="M256.258,441.312,68.043,260.045c-50.868-48.99-50.868-128.42,0-177.41h0c50.868-48.99,133.342-48.99,184.21,0l4,3.857,4-3.857c50.868-48.99,133.342-48.99,184.21,0h0c50.868,48.991,50.868,128.42,0,177.41Z" transform="translate(785.08 439.48) rotate(29)" fill="url(#g)"/>
            </g>
            <g transform="translate(657.785 185.1) rotate(29)">
              <g transform="translate(257.78 228.38)">
                <path d="M3394.581,1449s-37.03-70.747-105.434-67.515-110.55,46.455-119.5,100.653,13.937,109.675,78.3,166.9,38.107,33.125,77.964,71.1,69.481,80.725,69.481,80.725,11.109-18.919,55.275-64.432c17.257-17.1,38.983-39.331,68.135-63.556,106.78-88.737,103.279-148.253,101.663-180.57s-25.584-103.952-110.146-109.069S3394.581,1449,3394.581,1449Z" transform="translate(-3167.78 -1381.38)" fill="none" stroke="#fbd8d4" strokeWidth="28" opacity="0.67"/>
              </g>
            </g>
          </g>
        </svg>


        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-5 intro">
        <div>
        <h1 className="intro__title">loremipsum<i>®</i></h1>
        <p className="intro__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a posuere urna. Donec a nibh nec libero accumsan lacinia. Mauris dignissim tincidunt justo et imperdiet. Aenean efficitur, purus vitae maximus dignissim, sapien nibh imperdiet urna, quis mollis lorem libero quis nunc. Praesent id venenatis nunc. Donec volutpat vel enim ut suscipit. Nulla efficitur at augue vel pretium. Fusce vitae lorem tempor, sagittis leo nec, ornare odio. In hac habitasse platea dictumst. Donec lorem lorem, euismod in dui id, convallis blandit libero.
        </p>
          <div className="social">
          
            <a href="https://www.instagram.com/loremipsum/" target="_blank" rel="noreferrer">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-instagram fa-w-14 fa-3x"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" className=""></path></svg>
            </a>
            <a href="/" target="_blank">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-facebook-square fa-w-14 fa-5x"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" className=""></path></svg>
            </a>
            <a href="/" target="_blank">
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="at" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-at fa-w-16 fa-5x"><path fill="currentColor" d="M504 232C504 95.751 394.053 8 256 8 118.94 8 8 118.919 8 256c0 137.059 110.919 248 248 248 52.926 0 104.681-17.079 147.096-48.321 5.501-4.052 6.423-11.924 2.095-17.211l-15.224-18.597c-4.055-4.954-11.249-5.803-16.428-2.041C339.547 442.517 298.238 456 256 456c-110.28 0-200-89.72-200-200S145.72 56 256 56c109.469 0 200 65.02 200 176 0 63.106-42.478 98.29-83.02 98.29-19.505 0-20.133-12.62-16.366-31.463l28.621-148.557c1.426-7.402-4.245-14.27-11.783-14.27h-39.175a12.005 12.005 0 0 0-11.784 9.735c-1.102 5.723-1.661 8.336-2.28 13.993-11.923-19.548-35.878-31.068-65.202-31.068C183.412 128.66 120 191.149 120 281.53c0 61.159 32.877 102.11 93.18 102.11 29.803 0 61.344-16.833 79.749-42.239 4.145 30.846 28.497 38.01 59.372 38.01C451.467 379.41 504 315.786 504 232zm-273.9 97.35c-28.472 0-45.47-19.458-45.47-52.05 0-57.514 39.56-93.41 74.61-93.41 30.12 0 45.471 21.532 45.471 51.58 0 46.864-33.177 93.88-74.611 93.88z" className=""></path></svg>
            </a>
            </div>
        </div>
      </div>
      </div>
  </div>



</div>


<div className="container qualities">


  <div className="row">
    <div className="col-md-12">
      <h1 className="gallery-grid__title ">perché scegliere noi</h1>
    </div>
    <div className="col-md-6 mp-15">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink" width="584.732" height="527.419" viewBox="0 100 584.732 527.419">
      <defs>
        <pattern id="xax" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 640 640">
          <image width="640" height="640" xlinkHref={imageFront1.logo.childImageSharp.fluid.src}/>
        </pattern>
      </defs>
      <g transform="translate(-213.918 -150.381)">
        <g transform="matrix(1, 0, 0, 1, 213.92, 150.38)">
          <path d="M38.151,214.153c-50.868-48.991-50.868-128.42,0-177.411s133.341-48.99,184.21,0l4,3.857,4-3.857c50.868-48.99,133.341-48.99,184.21,0s50.868,128.42,0,177.411L226.365,395.419Z" transform="translate(44 88)" fill="url(#xax)"/>
        </g>
        <g transform="translate(257.78 228.38)">
          <path d="M3394.581,1449s-37.03-70.747-105.434-67.515c-31.192,1.474-56.924,11.263-76.784,26.809-23.156,18.125-37.85,44.361-42.721,73.845-8.954,54.2,13.937,109.675,78.3,166.9s38.107,33.125,77.964,71.1,69.481,80.725,69.481,80.725,11.109-18.919,55.275-64.432c17.257-17.1,38.983-39.331,68.135-63.556,106.78-88.737,103.279-148.253,101.663-180.57s-25.584-103.952-110.146-109.069S3394.581,1449,3394.581,1449Z" transform="translate(-3167.78 -1381.38)" fill="none" stroke="#fbd8d4" strokeWidth="28" opacity="0.67"/>
        </g>
      </g>
    </svg>
    </div>
    <div className="col-md-6 mp-15 qualities__text">
      <div className="qualities__info">
        <h1 className="qualities__title">loremipsum<i>®</i></h1>
        <p className="qualities__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a posuere urna. Donec a nibh nec libero accumsan lacinia. Mauris dignissim tincidunt justo et imperdiet. Aenean efficitur, purus vitae maximus dignissim, sapien nibh imperdiet urna, quis mollis lorem libero quis nunc. Praesent id venenatis nunc.
        </p>
        <p className="qualities__desc_highlighted">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a posuere urna. 
       </p>
      </div>
    </div>
  </div> 
  <div className="row">
    <div className="col-md-6 mp-15 order-md-1 order-2 qualities__text">
      <div className="qualities__info">
        <h1 className="qualities__title">loremipsum<i>®</i></h1>
        <p className="qualities__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a posuere urna. Donec a nibh nec libero accumsan lacinia. Mauris dignissim tincidunt justo et imperdiet. Aenean efficitur, purus vitae maximus dignissim, sapien nibh imperdiet urna, quis mollis lorem libero quis nunc. Praesent id venenatis nunc.
         </p>
         <p className="qualities__desc_highlighted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a posuere urna. 
        </p>
      </div>
    </div>
    <div className="col-md-6 mp-15 order-md-2 order-1">
      <svg
	xmlns="http://www.w3.org/2000/svg"
	xmlnsXlink="http://www.w3.org/1999/xlink" width="584.732" height="527.419" viewBox="0 100 584.732 527.419">
	<defs>
		<pattern id="bax" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 640 640">
			<image width="640" height="640" xlinkHref={imageFront1.img2.childImageSharp.fluid.src}/>
		</pattern>
	</defs>
	<g transform="translate(-213.918 -150.381)">
		<g transform="matrix(1, 0, 0, 1, 213.92, 150.38)">
			<path d="M38.151,214.153c-50.868-48.991-50.868-128.42,0-177.411s133.341-48.99,184.21,0l4,3.857,4-3.857c50.868-48.99,133.341-48.99,184.21,0s50.868,128.42,0,177.411L226.365,395.419Z" transform="translate(44 88)" fill="url(#bax)"/>
		</g>
		<g transform="translate(257.78 228.38)">
			<path d="M3394.581,1449s-37.03-70.747-105.434-67.515c-31.192,1.474-56.924,11.263-76.784,26.809-23.156,18.125-37.85,44.361-42.721,73.845-8.954,54.2,13.937,109.675,78.3,166.9s38.107,33.125,77.964,71.1,69.481,80.725,69.481,80.725,11.109-18.919,55.275-64.432c17.257-17.1,38.983-39.331,68.135-63.556,106.78-88.737,103.279-148.253,101.663-180.57s-25.584-103.952-110.146-109.069S3394.581,1449,3394.581,1449Z" transform="translate(-3167.78 -1381.38)" fill="none" stroke="#fbd8d4" strokeWidth="28" opacity="0.67"/>
		</g>
	</g>
  </svg>
    </div>
  </div>
  
  <div className="row">
    <div className="col-md-6 mp-15">
      <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink" width="584.732" height="527.419" viewBox="0 100 584.732 527.419">
    <defs>
      <pattern id="cax" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 640 640">
        <image width="640" height="640" xlinkHref={imageFront1.img1.childImageSharp.fluid.src}/>
      </pattern>
    </defs>
    <g transform="translate(-213.918 -150.381)">
      <g transform="matrix(1, 0, 0, 1, 213.92, 150.38)">
        <path d="M38.151,214.153c-50.868-48.991-50.868-128.42,0-177.411s133.341-48.99,184.21,0l4,3.857,4-3.857c50.868-48.99,133.341-48.99,184.21,0s50.868,128.42,0,177.411L226.365,395.419Z" transform="translate(44 88)" fill="url(#cax)"/>
      </g>
      <g transform="translate(257.78 228.38)">
        <path d="M3394.581,1449s-37.03-70.747-105.434-67.515c-31.192,1.474-56.924,11.263-76.784,26.809-23.156,18.125-37.85,44.361-42.721,73.845-8.954,54.2,13.937,109.675,78.3,166.9s38.107,33.125,77.964,71.1,69.481,80.725,69.481,80.725,11.109-18.919,55.275-64.432c17.257-17.1,38.983-39.331,68.135-63.556,106.78-88.737,103.279-148.253,101.663-180.57s-25.584-103.952-110.146-109.069S3394.581,1449,3394.581,1449Z" transform="translate(-3167.78 -1381.38)" fill="none" stroke="#fbd8d4" strokeWidth="28" opacity="0.67"/>
      </g>
    </g>
  </svg>
    </div>
    <div className="col-md-6 mp-15 qualities__text">
      <div className="qualities__info">
        <h1 className="qualities__title">loremipsum<i>®</i></h1>
        <p className="qualities__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a posuere urna. Donec a nibh nec libero accumsan lacinia. Mauris dignissim tincidunt justo et imperdiet. Aenean efficitur, purus vitae maximus dignissim, sapien nibh imperdiet urna, quis mollis lorem libero quis nunc. Praesent id venenatis nunc.
        </p>
        <p className="qualities__desc_highlighted">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a posuere urna. 
       </p>
      </div>
    </div>
  </div>
</div>


<div className="container-fluid gallery-grid">

  <h1 className="gallery-grid__title">Fiocchi Nascita</h1>

  
  <div className="tz-gallery">

      <div className="row">
          <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={imageFront1.gal1.childImageSharp.fluid.src}>
                
                  <img src={imageFront1.gal1.childImageSharp.fluid.src} alt="awd"/>
              </a>
          </div>
          <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={imageFront1.gal2.childImageSharp.fluid.src}>
                  <img src={imageFront1.gal2.childImageSharp.fluid.src} alt="awd"/>
              </a>
          </div>
          <div className="col-sm-12 col-md-4">
              <a className="lightbox" href={imageFront1.gal3.childImageSharp.fluid.src}>
                  <img src={imageFront1.gal3.childImageSharp.fluid.src} alt="awd"/>
              </a>
          </div>
          <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={imageFront1.gal4.childImageSharp.fluid.src}>
                  <img src={imageFront1.gal4.childImageSharp.fluid.src} alt="awd"/>
              </a>
          </div>
          <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={imageFront1.gal5.childImageSharp.fluid.src}>
                  <img src={imageFront1.gal5.childImageSharp.fluid.src} alt="awd"/>
              </a>
          </div>
          <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={imageFront1.gal6.childImageSharp.fluid.src}>
                  <img src={imageFront1.gal6.childImageSharp.fluid.src} alt="awd"/>
              </a>
          </div>
          <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={imageFront1.gal7.childImageSharp.fluid.src}>
                  <img src={imageFront1.gal7.childImageSharp.fluid.src} alt="awd"/>
              </a>
          </div>
          <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={imageFront1.gal8.childImageSharp.fluid.src}>
                  <img src={imageFront1.gal8.childImageSharp.fluid.src} alt="awd"/>
              </a>
          </div>
          <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={imageFront1.gal9.childImageSharp.fluid.src}>
                  <img src={imageFront1.gal9.childImageSharp.fluid.src} alt="awd"/>
              </a>
          </div>
      </div>

  </div>

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
  <p className="footer__logo"><span>loremipsum</span></p>
  <div className="row text-center">
    <div className="col">
      <h2 className="footer__title">Contact</h2>
      <ul className="footer__menu">
        <li>
          <a href="/">Shop</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/"></a>
        </li>
      </ul>
    </div>
    <div className="col">
      <h2 className="footer__title">Help</h2>
      <ul className="footer__menu">
        <li>
          <a href="/">FAQ`s</a>
          <a href="/">Shipping</a>
          <a href="/">Return</a>
          <a href="/">Privacy</a>
        </li>
      </ul>
    </div>
    <div className="col">
      <h2 className="footer__title">Social</h2>
      <ul className="footer__menu">
        <li>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Email</a>
          <a href="/"></a>
        </li>
      </ul>
    </div>
    <div className="col-md-4 text-left">
      <h2 className="footer__title">Let`s stay in touch</h2>
      <p>Sign up for new fiocchi every day.</p>
      <input type="text"/>
      <button>Sign up</button>
    </div>
  </div>
  <div className="footer__copyright">
    <span>C 2020, A Forma Di Cuore, All rights Reserved</span>
    <span>Secure Payments</span>
  </div>
</div>

  </>

}

