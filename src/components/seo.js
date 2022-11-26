import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const SEO = ({ title, description, pathname }) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
    }

    return (
        <>
          <title>{seo.title}</title>
          <meta itemprop="name" content="Sirisak Chantanate" />
          <meta name="Description"
                content={seo.description} />
      
          <meta name="twitter:title" content="Sirisak Chantanate" />
          <meta name="twitter:description"
                content="Nutrigenomics lover, I really love share the health knowledge." />
          <meta property="og:title" />
          <meta property="og:url" content={seo.url} />
          <meta property="og:description"
                content="Nutrigenomics lover, I really love share the health knowledge." />
        </>
      )
}
