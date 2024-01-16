//말 그대로 홈 -->> 영화 전체 (원래 앱.js에 있던것)

import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  //화면에 보여지는 거
  return (
    <div className={styles.contanier}>
      {/*로딩 화면 */}
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
          </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              id = {movie.id}
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;