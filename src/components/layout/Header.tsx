function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-blue-700">
          MDI Shop
        </h1>

        <nav className="flex gap-6">

          <button className="text-slate-700 hover:text-blue-700">
            Inicio
          </button>

          <button className="text-slate-700 hover:text-blue-700">
            Catálogo
          </button>

        </nav>

      </div>
    </header>
  );
}

export default Header;