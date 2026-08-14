import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-700"
        >
          MDI Shop
        </Link>

        <nav className="flex items-center gap-6">

          <Link
            to="/"
            className="text-slate-700 hover:text-blue-700"
          >
            Inicio
          </Link>

          <Link
            to="/"
            className="text-slate-700 hover:text-blue-700"
          >
            Catálogo
          </Link>

          <Link
            to="/carrito"
            className="text-slate-700 hover:text-blue-700"
          >
            Carrito
            {totalItems > 0 && (
              <span className="ml-2 rounded-full bg-blue-600 px-2 py-1 text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Header;