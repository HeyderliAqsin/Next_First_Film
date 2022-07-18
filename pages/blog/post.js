import Head from "next/head";
import Link from "next/link";
import React from "react";

const post = () => {
  return (
    <div>
      <Head>
        <title>Post hissesi</title>
      </Head>
      <h1>Post</h1>
      <h4>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h4>
    </div>
  );
};

export default post;
