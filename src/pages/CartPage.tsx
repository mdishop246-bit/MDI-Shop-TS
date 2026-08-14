import MainLayout from "../layouts/MainLayout";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
  } = useCart();

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Tu carrito está vacío
          </h1>

          <p className="mt-4 text-slate-600">
            Agrega productos para comenzar tu compra.
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-slate-900">
            Mi carrito
          </h1>

          <button
            type="button"
            onClick={clearCart}
            className="text-sm text-red-600 hover:text-red-700"
          >
            Vaciar carrito
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 md:flex-row md:items-center"
            >
              <img
                src={item.product.imagen}
                alt={item.product.nombre}
                className="h-32 w-32 object-contain"
              />

              <div className="flex-1">
                <p className="text-sm text-slate-500">
                  {item.product.marca}
                </p>

                <h2 className="text-lg font-semibold">
                  {item.product.nombre}
                </h2>

                <p className="mt-2 font-bold text-blue-700">
                  ${item.product.precioVenta.toLocaleString("es-MX")}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.product.id,
                      item.quantity - 1
                    )
                  }
                  className="rounded border px-3 py-1"
                >
                  -
                </button>

                <span className="min-w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.product.id,
                      item.quantity + 1
                    )
                  }
                  className="rounded border px-3 py-1"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={() =>
                  removeFromCart(item.product.id)
                }
                className="text-sm text-red-600 hover:text-red-700"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">
              Total
            </span>

            <span className="text-3xl font-bold text-slate-900">
              ${totalPrice.toLocaleString("es-MX")}
            </span>
          </div>

            <Link
            to="/checkout"
            className="mt-6 block w-full rounded-lg bg-blue-600 py-3 text-center font-medium text-white hover:bg-blue-700"
            >
            Continuar con la compra
            </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export default CartPage;