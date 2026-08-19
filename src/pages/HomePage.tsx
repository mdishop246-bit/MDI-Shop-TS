import { useEffect, useState } from "react";
import ProductGrid from "../components/catalog/ProductGrid";
import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/common/SearchBar";
import { getProducts } from "../services/productService";
import { useProductSearch } from "../hooks/useProductSearch";
import Hero from "../components/home/Hero";
import type { Product } from "../types/product";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts();

        setProducts(data);
      } catch (error) {
        console.error("Error cargando productos:", error);

        setError(
          "No se pudieron cargar los productos. Intenta nuevamente."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const {
    search,
    setSearch,
    filteredProducts,
  } = useProductSearch(products);

  return (
    <MainLayout>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <Hero />

      {loading && (
        <div className="py-12 text-center">
          <p className="text-slate-600">
            Cargando productos...
          </p>
        </div>
      )}

      {error && (
        <div className="py-12 text-center">
          <p className="text-red-600">
            {error}
          </p>
        </div>
      )}

      {!loading && !error && (
        <ProductGrid products={filteredProducts} />
      )}

    </MainLayout>
  );
}

export default HomePage;