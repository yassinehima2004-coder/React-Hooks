export default function Filter({ title, setTitle, rate, setRate }) {
  return (
    <div className="mb-8 grid gap-4 rounded-2xl bg-white p-4 shadow-md md:grid-cols-2">
      <input
        type="text"
        placeholder="Search by title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-900"
      />

      <input
        type="number"
        placeholder="Minimum rating..."
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-900"
      />
    </div>
  );
}