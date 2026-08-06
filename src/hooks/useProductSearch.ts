import { useMemo, useState } from "react";
import type { Product } from "../types/product";

export function useProductSearch(products: Product[]) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.nombre.toLowerCase().includes(search.toLowerCase()) ||
        product.marca.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "" ||
        product.categoria === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, selectedCategory]);

  return {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  };
}