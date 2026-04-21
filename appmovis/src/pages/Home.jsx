import { useEffect, useMemo, useState } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import AddMovie from "../components/AddMovie";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c82ab0405fb981cfd52454edfc40eb87"
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedMovies = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          description: movie.overview,
          posterURL: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image",
          rating: movie.vote_average,
        }));

        setMovies(formattedMovies);
      });
  }, []);

  const addMovie = (newMovie) => {
    setMovies((prev) => [newMovie, ...prev]);
  };

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchTitle = movie.title.toLowerCase().includes(title.toLowerCase());
      const matchRate = rate === "" || movie.rating >= Number(rate);
      return matchTitle && matchRate;
    });
  }, [movies, title, rate]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black text-gray-900 md:text-5xl">
            Movie Explorer
          </h1>
          <p className="mt-3 text-gray-600">
            Search, filter and add your favorite movies.
          </p>
        </header>

        <AddMovie addMovie={addMovie} />
        <Filter
          title={title}
          setTitle={setTitle}
          rate={rate}
          setRate={setRate}
        />
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
}