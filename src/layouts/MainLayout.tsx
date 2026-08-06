import type { ReactNode } from "react";
import Header from "../components/layout/Header";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">

      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>

    </div>
  );
}

export default MainLayout;