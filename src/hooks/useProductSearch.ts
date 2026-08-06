import { useMemo, useState } from "react";
import type { Product } from "../types/product";

export function useProductSearch(products: Product[]) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return products;

    return products.filter((product) => {
      return (
        product.nombre.toLowerCase().includes(value) ||
        product.marca.toLowerCase().includes(value) ||
        product.categoria.toLowerCase().includes(value)
      );
    });
  }, [products, search]);

  return {
    search,
    setSearch,
    filteredProducts,
  };
}