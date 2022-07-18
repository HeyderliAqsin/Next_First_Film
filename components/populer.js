import Link from "next/link";
import React from "react";

const populer = ({ movies }) => {
  return (
    <div className="popular">
      {" "}
      {movies.results.map((movie) => (
        <Link href={`/film/${movie.id}`} key={movie.id}>
          <a>
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              width={200}
              height={300}
              alt=""
            />
            <h3>{movie.title}</h3>
          </a>
        </Link>
      ))}
      <style jsx>{`
        .popular {
          display: flex;
          flex-wrap: wrap;
          width: 1200px;
          margin: 0 auto;
          gap: 10px;
          a {
            width: calc(25% - 10px);
            position: relative;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            h3 {
              position: absolute;
              bottom: 0;
              padding: 50px 20px 20px 20px;
              width: 100%;
              color: #fff;
              cursor: pointer;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default populer;


