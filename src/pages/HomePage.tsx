import ProductGrid from "../components/catalog/ProductGrid";
import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/common/SearchBar";
import { getProducts } from "../services/productService";
import { useProductSearch } from "../hooks/useProductSearch";

function HomePage() {
  const products = getProducts();

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

      <h2 className="text-4xl font-bold">
        Bienvenido a MDI Shop
            
      </h2>

      <p className="mt-4 text-slate-600">
        Encuentra miles de productos de tecnología al mejor precio.
      </p>
      
    <ProductGrid products={filteredProducts} />

    </MainLayout>
  );
}

export default HomePage;