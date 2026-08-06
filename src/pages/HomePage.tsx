import ProductGrid from "../components/catalog/ProductGrid";
import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/common/SearchBar";


function HomePage() {
  return (
    <MainLayout>

      <SearchBar />

      <h2 className="text-4xl font-bold">
        Bienvenido a MDI Shop
            
      </h2>

      <p className="mt-4 text-slate-600">
        Encuentra miles de productos de tecnología al mejor precio.
      </p>
      
      <ProductGrid />

    </MainLayout>
  );
}

export default HomePage;