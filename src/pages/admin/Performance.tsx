import { dailyStats, salesByDay, topDishes } from '../../data/performance'
import { waiters } from '../../data/waiters'

export default function Performance() {
  const maxSales = Math.max(...salesByDay.map((d) => d.sales))
  const maxOrders = Math.max(...topDishes.map((d) => d.orders))

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-1">Desempeño</h1>
      <p className="text-lg text-lazeez-dark/60 mb-6">Indicadores clave del restaurante</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {dailyStats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl shadow-sm p-5">
            <p className="text-xs text-lazeez-dark/50 mb-1">{s.label}</p>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className={`text-xs font-medium mt-1 ${s.change >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
              {s.change >= 0 ? '▲' : '▼'} {Math.abs(s.change)}% vs. semana pasada
            </p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">Ventas por día</h2>
          <div className="flex items-end gap-3 h-40">
            {salesByDay.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-lazeez-gold rounded-t-md"
                  style={{ height: `${(d.sales / maxSales) * 100}%` }}
                />
                <span className="text-xs text-lazeez-dark/50">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">Platos más vendidos</h2>
          <div className="space-y-3">
            {topDishes.map((d) => (
              <div key={d.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{d.name}</span>
                  <span className="text-lazeez-dark/50">{d.orders}</span>
                </div>
                <div className="h-2 bg-lazeez-dark/10 rounded-full">
                  <div
                    className="h-2 bg-lazeez-maroon rounded-full"
                    style={{ width: `${(d.orders / maxOrders) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <h2 className="font-semibold p-6 pb-0">Desempeño por mesero</h2>
        <table className="w-full text-sm mt-4">
          <thead className="bg-lazeez-dark/5 text-left">
            <tr>
              <th className="px-6 py-3">Mesero</th>
              <th className="px-6 py-3">Órdenes</th>
              <th className="px-6 py-3">Tiempo promedio</th>
              <th className="px-6 py-3">Calificación</th>
              <th className="px-6 py-3">Ventas</th>
            </tr>
          </thead>
          <tbody>
            {waiters.map((w) => (
              <tr key={w.id} className="border-t border-lazeez-dark/5">
                <td className="px-6 py-3 font-medium">{w.name}</td>
                <td className="px-6 py-3">{w.ordersToday}</td>
                <td className="px-6 py-3">{w.avgServiceTimeMin} min</td>
                <td className="px-6 py-3">⭐ {w.rating}</td>
                <td className="px-6 py-3 font-semibold text-lazeez-maroon">
                  ${w.salesToday.toLocaleString('es-CO')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
