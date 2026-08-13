interface SortFilterProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

function SortFilter({
  sortBy,
  onSortChange,
}: SortFilterProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <label
        htmlFor="sort"
        className="font-medium text-slate-700"
      >
        Ordenar por:
      </label>

      <select
        id="sort"
        value={sortBy}
        onChange={(event) => onSortChange(event.target.value)}
        className="border rounded-lg px-4 py-2 bg-white"
      >
        <option value="">Relevancia</option>
        <option value="price-asc">Precio: menor a mayor</option>
        <option value="price-desc">Precio: mayor a menor</option>
        <option value="name-asc">Nombre: A a Z</option>
        <option value="name-desc">Nombre: Z a A</option>
      </select>
    </div>
  );
}

export default SortFilter;