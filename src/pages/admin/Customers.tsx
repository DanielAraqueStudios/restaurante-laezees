import { useState } from 'react'
import { customers } from '../../data/customers'
import type { LoyaltyTier } from '../../data/types'

const tierColor: Record<LoyaltyTier, string> = {
  Bronce: 'bg-orange-100 text-orange-700',
  Plata: 'bg-slate-100 text-slate-700',
  Oro: 'bg-yellow-100 text-yellow-700',
  Platino: 'bg-indigo-100 text-indigo-700',
}

export default function Customers() {
  const [query, setQuery] = useState('')

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.email.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-1">Clientes</h1>
      <p className="text-lazeez-dark/60 mb-6">Base de datos de comensales</p>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar por nombre o correo..."
        className="w-full max-w-sm mb-6 border border-lazeez-dark/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lazeez-gold"
      />

      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-lazeez-dark/5 text-left">
            <tr>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Contacto</th>
              <th className="px-4 py-3">Nivel</th>
              <th className="px-4 py-3">Puntos</th>
              <th className="px-4 py-3">Visitas</th>
              <th className="px-4 py-3">Total gastado</th>
              <th className="px-4 py-3">Última visita</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t border-lazeez-dark/5">
                <td className="px-4 py-3 font-medium">{c.name}</td>
                <td className="px-4 py-3 text-lazeez-dark/60">
                  <div>{c.email}</div>
                  <div>{c.phone}</div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tierColor[c.tier]}`}>
                    {c.tier}
                  </span>
                </td>
                <td className="px-4 py-3">{c.points.toLocaleString('es-CO')}</td>
                <td className="px-4 py-3">{c.visits}</td>
                <td className="px-4 py-3">${c.totalSpent.toLocaleString('es-CO')}</td>
                <td className="px-4 py-3 text-lazeez-dark/60">{c.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
