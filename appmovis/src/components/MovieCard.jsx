import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="relative rounded-2xl pb-10 bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      <img src={movie.posterURL} alt={movie.title} className="w-full rounded-2xl" />
      <h3 className="pl-2 mt-3 text-lg font-bold">{movie.title}</h3>
      <p className="pl-2 text-sm text-gray-600 line-clamp-3">{movie.description}</p>
      <p className="pl-2 mt-2">⭐ {movie.rating}</p>

      <Link
        to={`/movie/${movie.id}`}
        className="float-right absolute bottom-4 right-4 mt-3 inline-block rounded-lg bg-black px-4 py-2 text-white"
      >
        Details
      </Link>
    </div>
  );
}