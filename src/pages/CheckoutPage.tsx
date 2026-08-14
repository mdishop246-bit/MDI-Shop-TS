import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orderService";

interface CheckoutForm {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  estado: string;
  codigoPostal: string;
}

function CheckoutPage() {
  const { items, totalPrice } = useCart();

  const [form, setForm] = useState<CheckoutForm>({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    estado: "",
    codigoPostal: "",
  });

  const [error, setError] = useState("");

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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setError("");
  };

    const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
    ) => {
    event.preventDefault();

    const hasEmptyField = Object.values(form).some(
        (value) => value.trim() === ""
    );

    if (hasEmptyField) {
        setError("Completa todos los campos para continuar.");
        return;
    }

    setError("");

    const order = createOrder({
        products: items,
        shippingAddress: form,
        total: totalPrice,
    });

    console.log("Pedido creado:", order);

    alert(
        `Pedido ${order.id} creado correctamente. El pago se integrará próximamente.`
    );
    };

  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl py-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Finalizar compra
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-10 lg:grid-cols-3"
        >
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
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Apellidos
                  </label>

                  <input
                    name="apellidos"
                    value={form.apellidos}
                    onChange={handleChange}
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Apellidos"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Correo electrónico
                  </label>

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Teléfono
                  </label>

                  <input
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    type="tel"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Teléfono"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Dirección
                  </label>

                  <input
                    name="direccion"
                    value={form.direccion}
                    onChange={handleChange}
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Calle y número"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Ciudad
                  </label>

                  <input
                    name="ciudad"
                    value={form.ciudad}
                    onChange={handleChange}
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Ciudad"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Estado
                  </label>

                  <input
                    name="estado"
                    value={form.estado}
                    onChange={handleChange}
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Estado"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Código postal
                  </label>

                  <input
                    name="codigoPostal"
                    value={form.codigoPostal}
                    onChange={handleChange}
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    placeholder="Código postal"
                  />
                </div>
              </div>

              {error && (
                <p className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-600">
                  {error}
                </p>
              )}
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Método de pago
              </h2>

              <p className="mt-3 text-slate-600">
                El pago con tarjeta se integrará en la siguiente etapa.
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
              type="submit"
              className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
            >
              Continuar al pago
            </button>
          </aside>
        </form>
      </div>
    </MainLayout>
  );
}

export default CheckoutPage;