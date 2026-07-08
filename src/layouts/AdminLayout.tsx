import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const links = [
  { to: '/admin/cocina', label: 'Cocina', icon: '🍳' },
  { to: '/admin/mesas', label: 'Mesas', icon: '🪑' },
  { to: '/admin/clientes', label: 'Clientes', icon: '👥' },
  { to: '/admin/fidelizacion', label: 'Fidelización', icon: '⭐' },
  { to: '/admin/meseros', label: 'Meseros', icon: '🧑‍🍳' },
  { to: '/admin/desempeno', label: 'Desempeño', icon: '📊' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-colors ${
    isActive ? 'bg-lazeez-gold text-lazeez-dark' : 'text-lazeez-cream/80 hover:bg-white/10'
  }`

export default function AdminLayout() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex bg-lazeez-cream">
      <aside className="w-64 bg-lazeez-dark flex flex-col shrink-0">
        <div className="px-6 py-5 border-b border-white/10">
          <span className="font-display text-xl font-bold text-lazeez-gold">Lazeez</span>
          <p className="text-xs text-lazeez-cream/60">Panel Administrativo</p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              <span>{l.icon}</span>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <button
            onClick={() => navigate('/')}
            className="w-full text-left px-4 py-2.5 rounded-lg text-lazeez-cream/80 hover:bg-white/10 transition-colors"
          >
            ↩ Salir al sitio
          </button>
        </div>
      </aside>
      <div className="flex-1 min-w-0">
        <Outlet />
      </div>
    </div>
  )
}
