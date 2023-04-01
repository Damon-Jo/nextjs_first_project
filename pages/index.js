import Seo from "@/components/Seo";
import { useState, useEffect} from "react";
import Head from "next/head";

const API_KEY = "2fb545e91a2733b2a4650dd735d13be7";
// 10923b261ba94d897ac6b81148314a3f

export default function Home() {

  const[movies, setMovies] = useState();
  useEffect(()=>{
    (async()=>{
      const {results} = await (await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )).json();
        setMovies(results)
    })();
  }, []);

  return (
    <div>
      <Seo title="Home"/>
      {!movies && <h4>Loading...</h4>}
      {movies?.map(movie=>(
        <div key={movie.id}>
          {movie.original_title}
        </div>
      ))}
    </div>
  );
}