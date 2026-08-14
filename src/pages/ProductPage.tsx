import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { getProducts } from "../services/productService";
import { useCart } from "../context/CartContext";
function ProductPage() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const products = getProducts();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <MainLayout>
        <div className="py-16 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Producto no encontrado
          </h1>

          <p className="mt-4 text-slate-600">
            El producto que buscas no existe.
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="grid gap-10 md:grid-cols-2 py-10">
        <div className="flex items-center justify-center rounded-xl bg-white p-8">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="max-h-[450px] object-contain"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-blue-600">
            {product.marca}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            {product.nombre}
          </h1>

          <p className="mt-4 text-slate-600">
            SKU: {product.sku}
          </p>

          <p className="mt-6 text-3xl font-bold text-slate-900">
            ${product.precioVenta.toLocaleString("es-MX")}
          </p>

          <p className="mt-2 text-green-600 font-medium">
            Bajo pedido
          </p>

          <p className="mt-6 text-slate-700">
            {product.descripcion}
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Especificaciones técnicas
            </h2>

            <div className="mt-4 space-y-3">
              {product.especificaciones.procesador && (
                <p>
                  <strong>Procesador:</strong>{" "}
                  {product.especificaciones.procesador}
                </p>
              )}

              {product.especificaciones.memoriaRAM && (
                <p>
                  <strong>Memoria RAM:</strong>{" "}
                  {product.especificaciones.memoriaRAM}
                </p>
              )}

              {product.especificaciones.almacenamiento && (
                <p>
                  <strong>Almacenamiento:</strong>{" "}
                  {product.especificaciones.almacenamiento}
                </p>
              )}

              {product.especificaciones.tarjetaGrafica && (
                <p>
                  <strong>Tarjeta gráfica:</strong>{" "}
                  {product.especificaciones.tarjetaGrafica}
                </p>
              )}

              {product.especificaciones.pantalla && (
                <p>
                  <strong>Pantalla:</strong>{" "}
                  {product.especificaciones.pantalla}
                </p>
              )}

              {product.especificaciones.resolucion && (
                <p>
                  <strong>Resolución:</strong>{" "}
                  {product.especificaciones.resolucion}
                </p>
              )}

              {product.especificaciones.sistemaOperativo && (
                <p>
                  <strong>Sistema operativo:</strong>{" "}
                  {product.especificaciones.sistemaOperativo}
                </p>
              )}

              {product.especificaciones.puertos && (
                <p>
                  <strong>Puertos:</strong>{" "}
                  {product.especificaciones.puertos.join(", ")}
                </p>
              )}

              {product.especificaciones.peso && (
                <p>
                  <strong>Peso:</strong>{" "}
                  {product.especificaciones.peso}
                </p>
              )}

              {product.especificaciones.color && (
                <p>
                  <strong>Color:</strong>{" "}
                  {product.especificaciones.color}
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Comprar producto
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProductPage;