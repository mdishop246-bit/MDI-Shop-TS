import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function AccountPage() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-5xl py-10">

        <h1 className="text-4xl font-bold text-slate-900">
          Mi cuenta
        </h1>

        <p className="mt-3 text-slate-600">
          Administra tu información y consulta tus compras.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <Link
            to="/cuenta/perfil"
            className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-slate-900">
              Información personal
            </h2>

            <p className="mt-2 text-slate-600">
              Consulta y administra tus datos personales.
            </p>
          </Link>

          <Link
            to="/pedidos"
            className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-slate-900">
              Mis pedidos
            </h2>

            <p className="mt-2 text-slate-600">
              Consulta tus compras y el estado de tus pedidos.
            </p>
          </Link>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Direcciones
            </h2>

            <p className="mt-2 text-slate-600">
              Próximamente podrás guardar varias direcciones de envío.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Facturación
            </h2>

            <p className="mt-2 text-slate-600">
              Próximamente podrás administrar tus datos de facturación.
            </p>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}

export default AccountPage;