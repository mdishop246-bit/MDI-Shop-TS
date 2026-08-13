import { Link } from "react-router-dom";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition">

      <div className="h-56 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="w-full h-full object-contain p-4"
        />
      </div>

      <div className="p-5">

        <p className="text-sm text-slate-500">
          {product.marca}
        </p>

        <h3 className="text-lg font-semibold mt-1">
          {product.nombre}
        </h3>

        <p className="text-3xl font-bold text-blue-700 mt-5">
          ${product.precioVenta.toLocaleString("es-MX")}
        </p>

        <p className="text-sm text-slate-500 mt-2">
          Bajo pedido
        </p>

        <Link
          to={`/producto/${product.id}`}
          className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
        >
          Ver producto
        </Link>

        <button
          type="button"
          className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
        >
          Solicitar por WhatsApp
        </button>

      </div>

    </article>
  );
}

export default ProductCard;