import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl text-[#c9a87c] font-light mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl text-[#2d2d2d] mb-6 font-light">
          Página no encontrada
        </h2>
        <p className="text-[#6b6b6b] mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

