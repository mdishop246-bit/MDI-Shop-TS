function SearchBar() {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Buscar productos..."
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          text-lg
          outline-none
          focus:border-blue-600
        "
      />
    </div>
  );
}

export default SearchBar;