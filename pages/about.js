import Head from "next/head";
import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <div>
        <Head>
            <title>Haqqimizda</title>
        </Head>
      <h1>about page</h1>
      <h4>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h4>


      <style jsx>{`
        
        h1 {
            font-size:50px;
            font-weight:500;
            color:green;
        }
      `}</style>
    </div>
  );
};

export default about;
