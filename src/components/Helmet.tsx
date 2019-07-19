import React from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';

const defaultDescription = '';
const defaultOGImage = '';

export interface HelmetProps {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

const Head: React.FC<HelmetProps> = ({ title, description, url, ogImage }) => {
  const router = useRouter();
  const pathname = router && router.asPath ? router.asPath : '';
  return (
    <NextHead>
      <title key="title">{title || ''}</title>
      <meta key="desc" name="description" content={description || defaultDescription} />
      <meta key="og:url" property="og:url" content={url || pathname} />
      <meta key="og:title" property="og:title" content={title || ''} />
      <meta key="og:desc" property="og:description" content={description || defaultDescription} />
      <meta key="og:img" property="og:image" content={ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta key="tw:url" name="twitter:site" content={url || pathname} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta key="tw:img" name="twitter:image" content={ogImage || defaultOGImage} />
    </NextHead>
  );
};

export default Head;
