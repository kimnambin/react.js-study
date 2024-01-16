//영화 정의

//영화의 타입 정의
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css"
                    

function Movie({id, coverImg, title, year ,summary, genres }) {
  return (
    <div className={styles.movie}>
      {/* css 적용*/}
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>

          {/* 영화제목을 누르면 페이지 이동*/}
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        
        {/* 영화 설명이 235자까지만*/}
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//영화의 타입 정의
Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;