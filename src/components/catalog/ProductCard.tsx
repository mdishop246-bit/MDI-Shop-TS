import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition">

      <div className="h-56 bg-slate-200 flex items-center justify-center">
        Sin imagen
      </div>

      <div className="p-5">

        <p className="text-sm text-slate-500">
          {product.marca}
        </p>

        <h3 className="text-lg font-semibold mt-1">
          {product.nombre}
        </h3>

        <p className="text-3xl font-bold text-blue-700 mt-5">
          ${product.precioVenta.toLocaleString()}
        </p>

        <p className="text-sm text-slate-500 mt-2">
          Bajo pedido
        </p>

        <button
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
        >
          Solicitar por WhatsApp
        </button>

      </div>

    </article>
  );
}

export default ProductCard;