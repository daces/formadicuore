import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
    title,
    description,
    url,
}) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

  
const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    instagramUsername,
  } = site.siteMetadata
  
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {instagramUsername && (
        <meta name="twitter:creator" content={instagramUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

const query = graphql`
query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        instagramUsername
      }
    }
  }
`

SEO.propTypes  = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    instagramUsername: PropTypes.string,
}

SEO.defaultProps = ({
    title: null,
    description: null,
    url: null,
    instagramUsername: null
})

export default SEO