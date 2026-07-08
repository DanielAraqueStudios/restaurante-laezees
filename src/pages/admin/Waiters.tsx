import { waiters } from '../../data/waiters'

export default function Waiters() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-1">Meseros</h1>
      <p className="text-lazeez-dark/60 mb-6">Asignación de mesas y desempeño del turno</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {waiters.map((w) => (
          <div key={w.id} className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{w.avatar}</span>
              <div>
                <p className="font-semibold">{w.name}</p>
                <p className="text-xs text-lazeez-dark/50">Turno {w.shift}</p>
              </div>
            </div>
            <dl className="text-sm space-y-1.5">
              <div className="flex justify-between">
                <dt className="text-lazeez-dark/60">Mesas asignadas</dt>
                <dd className="font-medium">{w.tablesAssigned}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-lazeez-dark/60">Órdenes hoy</dt>
                <dd className="font-medium">{w.ordersToday}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-lazeez-dark/60">Tiempo promedio</dt>
                <dd className="font-medium">{w.avgServiceTimeMin} min</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-lazeez-dark/60">Calificación</dt>
                <dd className="font-medium">⭐ {w.rating}</dd>
              </div>
              <div className="flex justify-between pt-1.5 border-t border-lazeez-dark/5">
                <dt className="text-lazeez-dark/60">Ventas hoy</dt>
                <dd className="font-bold text-lazeez-maroon">${w.salesToday.toLocaleString('es-CO')}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  )
}
