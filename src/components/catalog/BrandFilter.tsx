interface BrandFilterProps {
  brands: string[];
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
}

function BrandFilter({
  brands,
  selectedBrand,
  onSelectBrand,
}: BrandFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onSelectBrand("")}
        className={`px-4 py-2 rounded-lg border ${
          selectedBrand === ""
            ? "bg-blue-600 text-white"
            : "bg-white"
        }`}
      >
        Todas las marcas
      </button>

      {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => onSelectBrand(brand)}
          className={`px-4 py-2 rounded-lg border ${
            selectedBrand === brand
              ? "bg-blue-600 text-white"
              : "bg-white"
          }`}
        >
          {brand}
        </button>
      ))}
    </div>
  );
}

export default BrandFilter;