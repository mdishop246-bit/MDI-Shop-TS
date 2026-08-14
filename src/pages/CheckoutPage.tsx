import MainLayout from "../layouts/MainLayout";
import { useCart } from "../context/CartContext";

function CheckoutPage() {
  const { items, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Tu carrito está vacío
          </h1>

          <p className="mt-4 text-slate-600">
            Agrega productos antes de continuar con la compra.
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl py-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Finalizar compra
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">

          <section className="lg:col-span-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Datos de envío
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Nombre
                  </label>

                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Apellidos
                  </label>

                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Apellidos"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Teléfono
                  </label>

                  <input
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Teléfono"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Dirección
                  </label>

                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Calle y número"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Ciudad
                  </label>

                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Ciudad"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Código postal
                  </label>

                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Código postal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Estado
                  </label>

                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Estado"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Método de pago
              </h2>

              <p className="mt-3 text-slate-600">
                El pago con tarjeta será integrado en la siguiente etapa.
              </p>
            </div>
          </section>

          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Resumen del pedido
            </h2>

            <div className="mt-6 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between gap-4"
                >
                  <span className="text-slate-600">
                    {item.product.nombre} × {item.quantity}
                  </span>

                  <span className="font-medium">
                    $
                    {(
                      item.product.precioVenta * item.quantity
                    ).toLocaleString("es-MX")}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <div className="flex justify-between">
                <span className="text-lg font-medium">
                  Total
                </span>

                <span className="text-2xl font-bold text-slate-900">
                  ${totalPrice.toLocaleString("es-MX")}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
            >
              Continuar al pago
            </button>
          </aside>

        </div>
      </div>
    </MainLayout>
  );
}

export default CheckoutPage;