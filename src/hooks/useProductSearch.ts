import { useMemo, useState } from "react";
import type { Product } from "../types/product";

export function useProductSearch(products: Product[]) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesSearch =
        product.nombre.toLowerCase().includes(search.toLowerCase()) ||
        product.marca.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "" ||
        product.categoria === selectedCategory;

      const matchesBrand =
        selectedBrand === "" ||
        product.marca === selectedBrand;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand
      );
    });

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.precio - b.precio;

        case "price-desc":
          return b.precio - a.precio;

        case "name-asc":
          return a.nombre.localeCompare(b.nombre);

        case "name-desc":
          return b.nombre.localeCompare(a.nombre);

        default:
          return 0;
      }
    });
  }, [
    products,
    search,
    selectedCategory,
    selectedBrand,
    sortBy,
  ]);

  return {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    sortBy,
    setSortBy,
    filteredProducts,
  };
}