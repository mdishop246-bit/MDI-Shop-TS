import ProductGrid from "../components/catalog/ProductGrid";
import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/common/SearchBar";
import { getProducts } from "../services/productService";
import { useProductSearch } from "../hooks/useProductSearch";
import Hero from "../components/home/Hero";

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

    <Hero />
      
    <ProductGrid products={filteredProducts} />

    </MainLayout>
  );
}

export default HomePage;