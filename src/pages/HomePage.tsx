import ProductGrid from "../components/catalog/ProductGrid";
import CategoryFilter from "../components/catalog/CategoryFilter";
import BrandFilter from "../components/catalog/BrandFilter";
import SortFilter from "../components/catalog/SortFilter";
import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/common/SearchBar";
import Hero from "../components/home/Hero";

import { getProducts } from "../services/productService";
import { useProductSearch } from "../hooks/useProductSearch";

function HomePage() {
  const products = getProducts();

  const categories = [...new Set(products.map((p) => p.categoria))];
  const brands = [...new Set(products.map((p) => p.marca))];

  const {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    sortBy,
    setSortBy,
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

      <BrandFilter
        brands={brands}
        selectedBrand={selectedBrand}
        onSelectBrand={setSelectedBrand}
      />

      <SortFilter
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <ProductGrid products={filteredProducts} />
    </MainLayout>
  );
}

export default HomePage;