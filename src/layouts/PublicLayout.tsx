import { Link, NavLink, Outlet } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `transition-colors hover:text-lazeez-gold ${isActive ? 'text-lazeez-gold' : 'text-lazeez-cream'}`

export default function PublicLayout() {
  const { count } = useCart()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-lazeez-dark text-lazeez-cream sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-2xl font-bold tracking-wide text-lazeez-gold">
            Lazeez
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <NavLink to="/" className={navLinkClass} end>
              Inicio
            </NavLink>
            <NavLink to="/menu" className={navLinkClass}>
              Menú
            </NavLink>
            <NavLink to="/ordenar" className={navLinkClass}>
              Ordenar
            </NavLink>
            <NavLink to="/admin/login" className={navLinkClass}>
              Personal
            </NavLink>
          </nav>
          <Link
            to="/ordenar"
            className="relative bg-lazeez-gold text-lazeez-dark font-semibold px-4 py-2 rounded-full hover:brightness-110 transition"
          >
            Carrito
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-lazeez-maroon text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-lazeez-dark text-lazeez-cream/80 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lazeez-gold font-display text-xl mb-2">Lazeez</h3>
            <p className="text-sm">Sabores auténticos de Medio Oriente en el corazón de Medellín.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lazeez-cream mb-2">Contacto</h4>
            <p className="text-sm">Medellín, Colombia</p>
            <p className="text-sm">Reservas: +57 300 000 0000</p>
          </div>
          <div>
            <h4 className="font-semibold text-lazeez-cream mb-2">Horario</h4>
            <p className="text-sm">Mar - Dom: 12:00pm - 10:00pm</p>
            <p className="text-sm">Lunes cerrado</p>
          </div>
        </div>
        <div className="text-center text-xs py-4 border-t border-white/10">
          © 2026 Restaurante Lazeez. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
