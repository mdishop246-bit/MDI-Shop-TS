interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onSelectCategory("")}
        className={`px-4 py-2 rounded-lg border ${
          selectedCategory === ""
            ? "bg-blue-600 text-white"
            : "bg-white"
        }`}
      >
        Todos
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-lg border ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;