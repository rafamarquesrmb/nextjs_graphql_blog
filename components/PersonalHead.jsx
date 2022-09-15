import React from "react";

import Head from "next/head";

const PersonalHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title && `${title} |`} CMS Blog</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PersonalHead;
