interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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