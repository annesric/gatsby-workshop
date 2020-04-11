import React from 'react';
import { Helmet } from 'react-helmet';
import { metaData } from '../data/about.data';
import App from '../components/App';

import '../static/css/main.css';
export default () => {
  const { title, description } = metaData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby'}</title>
        <html lang='en' />
        <meta name="description" content={description || 'About Me'} />
      </Helmet>
      <App />
    </>
  );
};
