import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext";

import type { Product } from "../types/product";

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      if (!id) {
        setError("Producto no encontrado.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const data = await getProductById(id);

        if (!data) {
          setError("El producto que buscas no existe.");
          return;
        }

        setProduct(data);
      } catch (error) {
        console.error("Error cargando producto:", error);
        setError("No se pudo cargar el producto.");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="py-16 text-center">
          <p className="text-lg text-slate-600">
            Cargando producto...
          </p>
        </div>
      </MainLayout>
    );
  }

  if (error || !product) {
    return (
      <MainLayout>
        <div className="py-16 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Producto no encontrado
          </h1>

          <p className="mt-4 text-slate-600">
            {error || "El producto que buscas no existe."}
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="grid gap-10 py-10 md:grid-cols-2">

        {/* Imagen */}
        <div className="flex items-center justify-center rounded-xl bg-white p-8">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="max-h-[450px] object-contain"
          />
        </div>

        {/* Información */}
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

          <p className="mt-2 font-medium text-green-600">
            Bajo pedido
          </p>

          <p className="mt-6 text-slate-700">
            {product.descripcion}
          </p>

          {/* Especificaciones */}
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

          {/* Comprar */}
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 md:w-auto"
          >
            Comprar producto
          </button>

        </div>
      </div>
    </MainLayout>
  );
}

export default ProductPage;