import Head from "next/head";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
        <Head>
            <title>Blog hissesi</title>
        </Head>
      <h1>Blog page</h1>
      <h4>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h4>
      
      
    </div>
  );
};

export default index;
