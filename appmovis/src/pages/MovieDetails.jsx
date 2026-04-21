import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

/*  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c82ab0405fb981cfd52454edfc40eb87`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);
*/

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c82ab0405fb981cfd52454edfc40eb87`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error loading movie:", error);
      }
    };

    getMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to="/" className="text-blue-600">
        ← Back
      </Link>

      <div className="mt-6 flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-64 rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="mt-2 text-gray-600">{movie.overview}</p>

          <p className="mt-4 text-lg font-semibold">
            ⭐ {movie.vote_average}
          </p>

          <p className="mt-2 text-gray-500">
            Release: {movie.release_date}
          </p>
        </div>
      </div>
    </div>
  );
}
