import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="rounded-xl border p-4">
      <img src={movie.posterURL} alt={movie.title} className="w-full rounded-lg" />
      <h3 className="mt-3 text-lg font-bold">{movie.title}</h3>
      <p className="text-sm text-gray-600">{movie.description}</p>
      <p className="mt-2">⭐ {movie.rating}</p>

      <Link
        to={`/movie/${movie.id}`}
        className="mt-3 inline-block rounded-lg bg-black px-4 py-2 text-white"
      >
        Details
      </Link>
    </div>
  );
}