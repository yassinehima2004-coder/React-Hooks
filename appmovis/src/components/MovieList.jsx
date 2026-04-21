import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  if (movies.length === 0) {
    return (
      <p className="mt-10 text-center text-gray-500">
        No movies found.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}