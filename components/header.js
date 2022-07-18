import Link from "next/link";
import React from "react";

const header = () => {
  return (
    <header className="header">
        <ul>
          <li>
            <Link href="/">
              <a>Ana sehife</a>
            </Link>
            <Link href="/blog">
              <a>Blog sehife</a>
            </Link>
            <Link href="/about">
              <a className="red">About sehife</a>
            </Link>
          </li>
        </ul>

      <style jsx>{`
        .header {
          background: yellow;
          border-bottom: 1px solid green;
            ul {
              display:flex;
              align-items:center;
              justify-content:center;
              padding:10px 0;
              margin:0;
              li {  
                a {
                  color:blue;
                  margin-left:20px;
                }
              }
            }
        }
      `}</style>
    </header>
  );
};

export default header;
