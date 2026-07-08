import { customers, loyaltyTiers } from '../../data/customers'
import type { LoyaltyTier } from '../../data/types'

const tierColor: Record<LoyaltyTier, string> = {
  Bronce: 'border-orange-300 bg-orange-50',
  Plata: 'border-slate-300 bg-slate-50',
  Oro: 'border-yellow-300 bg-yellow-50',
  Platino: 'border-indigo-300 bg-indigo-50',
}

export default function Loyalty() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-1">Programa de Fidelización</h1>
      <p className="text-lazeez-dark/60 mb-6">Niveles, beneficios y clientes top</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {loyaltyTiers.map((t) => (
          <div key={t.tier} className={`rounded-xl border p-5 ${tierColor[t.tier as LoyaltyTier]}`}>
            <h3 className="font-bold text-lg mb-1">{t.tier}</h3>
            <p className="text-xs text-lazeez-dark/50 mb-2">{t.minPoints.toLocaleString('es-CO')}+ puntos</p>
            <p className="text-sm">{t.perk}</p>
          </div>
        ))}
      </div>

      <h2 className="font-semibold text-lg mb-3">Clientes con más puntos</h2>
      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-lazeez-dark/5 text-left">
            <tr>
              <th className="px-4 py-3">Cliente</th>
              <th className="px-4 py-3">Nivel</th>
              <th className="px-4 py-3">Puntos</th>
              <th className="px-4 py-3">Próximo nivel</th>
            </tr>
          </thead>
          <tbody>
            {[...customers]
              .sort((a, b) => b.points - a.points)
              .map((c) => {
                const nextTier = loyaltyTiers.find((t) => t.minPoints > c.points)
                return (
                  <tr key={c.id} className="border-t border-lazeez-dark/5">
                    <td className="px-4 py-3 font-medium">{c.name}</td>
                    <td className="px-4 py-3">{c.tier}</td>
                    <td className="px-4 py-3">{c.points.toLocaleString('es-CO')}</td>
                    <td className="px-4 py-3 text-lazeez-dark/60">
                      {nextTier
                        ? `${(nextTier.minPoints - c.points).toLocaleString('es-CO')} pts para ${nextTier.tier}`
                        : 'Nivel máximo'}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
