import ProductCard from "./ProductCard";
import { getProducts } from "../../services/productService";

function ProductGrid() {

  const products = getProducts();

  return (
    <section className="mt-10">

      <h2 className="text-3xl font-bold mb-8">
        Productos destacados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductGrid;