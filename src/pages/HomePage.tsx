import ProductGrid from "../components/catalog/ProductGrid";
import CategoryFilter from "../components/catalog/CategoryFilter";
import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/common/SearchBar";
import Hero from "../components/home/Hero";

import { getProducts } from "../services/productService";
import { useProductSearch } from "../hooks/useProductSearch";

function HomePage() {
  const products = getProducts();

  const categories = [...new Set(products.map((p) => p.categoria))];

  const {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProductSearch(products);

  return (
    <MainLayout>
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <Hero />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProductGrid products={filteredProducts} />
    </MainLayout>
  );
}

export default HomePage;