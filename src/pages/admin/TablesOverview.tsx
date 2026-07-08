import { tables } from '../../data/tables'
import { useOrders } from '../../context/OrdersContext'
import type { TableStatus } from '../../data/types'

const statusColor: Record<TableStatus, string> = {
  available: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  occupied: 'bg-red-100 text-red-700 border-red-300',
  reserved: 'bg-amber-100 text-amber-700 border-amber-300',
  cleaning: 'bg-gray-100 text-gray-500 border-gray-300',
}

const statusLabel: Record<TableStatus, string> = {
  available: 'Disponible',
  occupied: 'Ocupada',
  reserved: 'Reservada',
  cleaning: 'En limpieza',
}

const zones = ['Salón Principal', 'Terraza', 'Privado'] as const

export default function TablesOverview() {
  const { orders } = useOrders()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-1">Mesas</h1>
      <p className="text-lazeez-dark/60 mb-6">Estado y ocupación por zona</p>

      {zones.map((zone) => (
        <div key={zone} className="mb-8">
          <h2 className="font-semibold text-lg mb-3">{zone}</h2>
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {tables
              .filter((t) => t.zone === zone)
              .map((table) => {
                const order = orders.find((o) => o.tableId === table.id && o.status !== 'paid')
                return (
                  <div key={table.id} className="bg-white rounded-xl shadow-sm p-4 border border-lazeez-dark/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg">Mesa {table.number}</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${statusColor[table.status]}`}>
                        {statusLabel[table.status]}
                      </span>
                    </div>
                    <p className="text-sm text-lazeez-dark/60">{table.seats} puestos</p>
                    {order && (
                      <p className="text-xs text-lazeez-maroon mt-2 font-medium">
                        Orden activa · ${order.total.toLocaleString('es-CO')}
                      </p>
                    )}
                  </div>
                )
              })}
          </div>
        </div>
      ))}
    </div>
  )
}
