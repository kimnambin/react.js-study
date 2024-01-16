// 영화의 상세 정보!!

import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {

  //영화를 클릭하면 영화id값을 주소에 나타냄
const {id} = useParams();
const getMovies = async() => {
  const json = await (
    await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  ).json();
  console.log(json);
};
useEffect(() => {
  getMovies();
},[]);

    return <h1>Detail</h1>;
  }
  export default Detail;