import { useState } from "react";

export default function AddMovie({ addMovie }) {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!movie.title || !movie.description || !movie.posterURL || !movie.rating) {
      return;
    }

    addMovie({
      ...movie,
      id: Date.now(),
      rating: Number(movie.rating),
    });

    setMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 rounded-2xl bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 text-xl font-bold text-gray-900">Add a new movie</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Title"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
          className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-900"
        />

        <input
          type="number"
          placeholder="Rating"
          value={movie.rating}
          onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
          className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-900"
        />

        <input
          type="text"
          placeholder="Poster URL"
          value={movie.posterURL}
          onChange={(e) => setMovie({ ...movie, posterURL: e.target.value })}
          className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-900 md:col-span-2"
        />

        <textarea
          placeholder="Description"
          value={movie.description}
          onChange={(e) => setMovie({ ...movie, description: e.target.value })}
          className="min-h-28 rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-900 md:col-span-2"
        />
      </div>

      <button
        type="submit"
        className="mt-4 rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
      >
        Add movie
      </button>
    </form>
  );
}