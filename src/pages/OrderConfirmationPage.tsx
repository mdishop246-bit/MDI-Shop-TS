import { Link, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

interface OrderConfirmationState {
  orderId: string;
  total: number;
}

function OrderConfirmationPage() {
  const location = useLocation();
  const state = location.state as OrderConfirmationState | null;

  if (!state) {
    return (
      <MainLayout>
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            No encontramos el pedido
          </h1>

          <p className="mt-4 text-slate-600">
            La información de confirmación no está disponible.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Volver al catálogo
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-2xl py-16 text-center">
        <div className="rounded-xl border border-slate-200 bg-white p-10">
          <div className="text-5xl">✓</div>

          <h1 className="mt-6 text-4xl font-bold text-slate-900">
            ¡Pedido creado correctamente!
          </h1>

          <p className="mt-4 text-slate-600">
            Gracias por comprar en MDI Shop.
          </p>

          <div className="mt-8 rounded-lg bg-slate-50 p-6 text-left">
            <p className="text-sm text-slate-500">
              Número de pedido
            </p>

            <p className="mt-1 text-xl font-bold text-slate-900">
              {state.orderId}
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Total
            </p>

            <p className="mt-1 text-2xl font-bold text-blue-700">
              ${state.total.toLocaleString("es-MX")}
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Estado del pago
            </p>

            <p className="mt-1 font-medium text-amber-600">
              Pendiente
            </p>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            El pago se integrará próximamente.
          </p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Volver al catálogo
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export default OrderConfirmationPage;