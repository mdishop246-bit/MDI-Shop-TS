import { Link, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { getOrderById } from "../services/orderStorage";

function OrderDetailPage() {
  const { id } = useParams();

  const order = id ? getOrderById(id) : undefined;

  if (!order) {
    return (
      <MainLayout>
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Pedido no encontrado
          </h1>

          <p className="mt-4 text-slate-600">
            No encontramos la información de este pedido.
          </p>

          <Link
            to="/pedidos"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Ver mis pedidos
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-5xl py-10">

        <Link
          to="/pedidos"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Volver a mis pedidos
        </Link>

        <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-slate-500">
              Número de pedido
            </p>

            <h1 className="mt-1 text-4xl font-bold text-slate-900">
              {order.id}
            </h1>
          </div>

          <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
            {order.status === "pending"
              ? "Pendiente"
              : order.status}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          <section className="lg:col-span-2 space-y-6">

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Productos
              </h2>

              <div className="mt-6 space-y-5">
                {order.items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 border-b border-slate-200 pb-5 last:border-b-0 last:pb-0"
                  >
                    <img
                      src={item.product.imagen}
                      alt={item.product.nombre}
                      className="h-24 w-24 rounded-lg border border-slate-200 object-contain p-2"
                    />

                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        {item.product.nombre}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Cantidad: {item.quantity}
                      </p>

                      <p className="mt-2 font-bold text-blue-700">
                        $
                        {(
                          item.price * item.quantity
                        ).toLocaleString("es-MX")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Dirección de envío
              </h2>

              <div className="mt-5 space-y-1 text-slate-600">
                <p className="font-medium text-slate-900">
                  {order.shippingAddress.nombre}{" "}
                  {order.shippingAddress.apellidos}
                </p>

                <p>{order.shippingAddress.direccion}</p>

                <p>
                  {order.shippingAddress.ciudad},{" "}
                  {order.shippingAddress.estado}
                </p>

                <p>
                  C.P. {order.shippingAddress.codigoPostal}
                </p>

                <p className="pt-3">
                  Tel: {order.shippingAddress.telefono}
                </p>

                <p>
                  {order.shippingAddress.email}
                </p>
              </div>
            </div>

          </section>

          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-6">

            <h2 className="text-2xl font-bold text-slate-900">
              Resumen
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">
                <span className="text-slate-600">
                  Productos
                </span>

                <span className="font-medium">
                  $
                  {order.total.toLocaleString("es-MX")}
                </span>
              </div>

              <div className="flex justify-between border-t border-slate-200 pt-4">
                <span className="text-lg font-bold">
                  Total
                </span>

                <span className="text-2xl font-bold text-blue-700">
                  $
                  {order.total.toLocaleString("es-MX")}
                </span>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <p className="text-sm text-slate-500">
                  Estado del pago
                </p>

                <p className="mt-1 font-medium text-amber-600">
                  {order.paymentStatus === "pending"
                    ? "Pendiente"
                    : order.paymentStatus}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <p className="text-sm text-slate-500">
                  Fecha del pedido
                </p>

                <p className="mt-1 font-medium text-slate-900">
                  {new Date(
                    order.createdAt
                  ).toLocaleString("es-MX")}
                </p>
              </div>

            </div>

          </aside>

        </div>
      </div>
    </MainLayout>
  );
}

export default OrderDetailPage;