import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { getOrders } from "../services/orderStorage";

function OrdersPage() {
  const orders = getOrders();

  return (
    <MainLayout>
      <div className="mx-auto max-w-5xl py-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Mis pedidos
        </h1>

        <p className="mt-3 text-slate-600">
          Consulta el estado y la información de tus pedidos.
        </p>

        {orders.length === 0 ? (
          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Aún no tienes pedidos
            </h2>

            <p className="mt-3 text-slate-600">
              Cuando realices una compra, aparecerá aquí.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Ver catálogo
            </Link>
          </div>
        ) : (
          <div className="mt-10 space-y-5">
            {orders
              .slice()
              .reverse()
              .map((order) => (
                <Link
                key={order.id}
                to={`/pedido/${order.id}`}
                className="block rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                      <p className="text-sm text-slate-500">
                        Número de pedido
                      </p>

                      <h2 className="mt-1 text-xl font-bold text-slate-900">
                        {order.id}
                      </h2>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Fecha
                      </p>

                      <p className="mt-1 font-medium text-slate-900">
                        {new Date(
                          order.createdAt
                        ).toLocaleDateString("es-MX")}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Estado
                      </p>

                      <p className="mt-1 font-medium text-amber-600">
                        {order.status === "pending"
                          ? "Pendiente"
                          : order.status}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Total
                      </p>

                      <p className="mt-1 text-xl font-bold text-blue-700">
                        ${order.total.toLocaleString("es-MX")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-sm text-slate-500">
                      Productos
                    </p>

                    <div className="mt-3 space-y-2">
                      {order.items.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex justify-between gap-4"
                        >
                          <span className="text-slate-700">
                            {item.product.nombre} × {item.quantity}
                          </span>

                          <span className="font-medium">
                            $
                            {(
                              item.price * item.quantity
                            ).toLocaleString("es-MX")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default OrdersPage;