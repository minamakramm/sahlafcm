import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const MetaTags = ({ 
  title = 'Sahla | The Modern Study Platform',
  description = 'Your comprehensive university study platform with glass-tier UI.',
  keywords = 'study, university, education, platform',
  image = '/og-image.jpg'
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>
    </HelmetProvider>
  );
};
