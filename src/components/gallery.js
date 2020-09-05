import React from "react"
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
export default function Gallery(props){
    return (
        <>
        <h1 className="gallery-grid__title">Fiocchi Nascita</h1>

        <SimpleReactLightbox>
          <div className="gallery__main">
          <SRLWrapper options={gallery_options}>
          <div className="row">
                <div className="col-md-6 col-12 gallery__box">
                    <a className="lightbox" href={props.img1.src}>
                        <img srcSet={props.img1.srcSet}
                        sizes={props.img1.sizes}
                        src={props.img1.src} alt="awd"/>
                    </a>
                </div>
                <div className="col-md-6 col-12 gallery__box">
                    <a className="lightbox" href={props.img2.src}>
                        <img srcSet={props.img2.srcSet}
                        sizes={props.img2.sizes}
                        src={props.img2.src} alt="awd"/>
                    </a>
                </div>
                <div className="col-md-4 col-12 gallery__box">
                    <a className="lightbox" href={props.img3.src}>
                        <img srcSet={props.img3.srcSet}
                        sizes={props.img3.sizes}
                        src={props.img3.src} alt="awd"/>
                    </a>
                </div>
                <div className="col-md-4 col-12 gallery__box">
                    <a className="lightbox" href={props.img4.src}>
                        <img srcSet={props.img4.srcSet}
                        sizes={props.img4.sizes}
                        src={props.img4.src} alt="awd"/>
                    </a>
                </div>
                <div className="col-md-4 col-12 gallery__box">
                    <a className="lightbox" href={props.img5.src}>
                        <img srcSet={props.img5.srcSet}
                        sizes={props.img5.sizes}
                        src={props.img5.src} alt="awd"/>
                    </a>
                </div>
                <div className="col-md-6 col-12 gallery__box">
                    <a className="lightbox" href={props.img6.src}>
                        <img srcSet={props.img6.srcSet}
                        sizes={props.img6.sizes}
                        src={props.img6.src} alt="awd"/>
                    </a>
                </div>
                <div className="col-md-6 col-12 gallery__box">
                    <a className="lightbox" href={props.img7.src}>
                        <img srcSet={props.img7.srcSet}
                        sizes={props.img7.sizes}
                        src={props.img7.src} alt="awd"/>
                    </a>
                </div>
            </div>
          </SRLWrapper>
          </div>
        </SimpleReactLightbox>
        </>
    )
}


const gallery_options = {
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.8)',
      iconColor: 'rgba(255, 255, 255, 0.8)',
      iconPadding: '5px',
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: false,
      size: '40px'
    },
    thumbnails: {
      showThumbnails: true,
      thumbnailsAlignment: 'center',
      thumbnailsContainerBackgroundColor: 'transparent',
      thumbnailsContainerPadding: '0',
      thumbnailsGap: '1px',
      thumbnailsOpacity: 0.4,
      thumbnailsPosition: 'bottom',
      thumbnailsSize: ['100px', '80px']
    },
    progressBar: {
      showProgressBar: false
    }
  
  }