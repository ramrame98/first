import React from "react";
import styles from "./MovieList.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movielists, setMovielists] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log("data");
        // console.log(data);
        // console.log("data.data.moivelists");
        // console.log(datas.data.movielists);

        setMovielists(data.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(movielists);

  return (
    <div className={styles.container}>
      {loading ? <h1>영화 정보를 받아오는 중입니다.</h1> : null}
      {movielists.map((item) => {
        return (
          <div className={styles.movielist}>
            <Movie
              key={item.key}
              id={item.id}
              img={item.large_cover_image}
              title={item.title}
              year={item.year}
              summary={item.summary}
              genres={item.genres}
              rating={item.rating}
            />
          </div>
        );
      })}
    </div>
  );
};

const Movie = (props) => {
  return (
    <div className={styles.movie}>
      <div>
        <img src={props.img} />
      </div>
      <div className={styles.word}>
        <h4 className={styles.title}>
          <Link to={`/movielist/detail/${props.id}`}>{props.title}</Link>
        </h4>
        <p>{props.year}</p>
        <br />
        <p>
          {props.summary
            ? props.summary.length > 235
              ? props.summary.slice(0, 235) + "..."
              : props.summary
            : "영화 설명이 없습니다."}
        </p>
        <br />
        <p>
          {props.genres.join(", ")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 평점 :{" "}
          {props.rating}{" "}
        </p>
      </div>
    </div>
  );
};

export default MovieList;
