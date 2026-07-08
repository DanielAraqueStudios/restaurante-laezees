import { useOrders } from '../../context/OrdersContext'
import { tables } from '../../data/tables'
import type { OrderStatus } from '../../data/types'

const statusFlow: Record<OrderStatus, OrderStatus | null> = {
  pending: 'preparing',
  preparing: 'ready',
  ready: 'served',
  served: 'paid',
  paid: null,
}

const statusLabel: Record<OrderStatus, string> = {
  pending: 'Nuevo',
  preparing: 'Preparando',
  ready: 'Listo',
  served: 'Servido',
  paid: 'Pagado',
}

const statusColor: Record<OrderStatus, string> = {
  pending: 'bg-red-100 text-red-700 border-red-300',
  preparing: 'bg-amber-100 text-amber-700 border-amber-300',
  ready: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  served: 'bg-sky-100 text-sky-700 border-sky-300',
  paid: 'bg-gray-100 text-gray-500 border-gray-300',
}

function tableLabel(tableId: string) {
  const t = tables.find((t) => t.id === tableId)
  return t ? `Mesa ${t.number}` : tableId
}

export default function KitchenDisplay() {
  const { orders, updateStatus } = useOrders()
  const active = orders.filter((o) => o.status !== 'paid')

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-1">Pantalla de Cocina</h1>
      <p className="text-lg text-lazeez-dark/60 mb-6">Órdenes en tiempo real por mesa</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {active.map((order) => {
          const next = statusFlow[order.status]
          return (
            <div key={order.id} className="bg-white rounded-xl shadow-sm border border-lazeez-dark/5 p-4 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{tableLabel(order.tableId)}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${statusColor[order.status]}`}>
                  {statusLabel[order.status]}
                </span>
              </div>
              <p className="text-xs text-lazeez-dark/40 mb-3">
                {new Date(order.createdAt).toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}
              </p>
              <ul className="text-sm space-y-1 flex-1 mb-4">
                {order.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>
                      {item.quantity}× {item.name}
                      {item.notes && <span className="text-lazeez-maroon"> ({item.notes})</span>}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-2 border-t border-lazeez-dark/5">
                <span className="font-semibold text-sm">${order.total.toLocaleString('es-CO')}</span>
                {next && (
                  <button
                    onClick={() => updateStatus(order.id, next)}
                    className="text-xs font-semibold bg-lazeez-dark text-lazeez-cream px-3 py-1.5 rounded-full hover:brightness-125"
                  >
                    Marcar {statusLabel[next]}
                  </button>
                )}
              </div>
            </div>
          )
        })}
        {active.length === 0 && (
          <p className="text-lazeez-dark/40 col-span-full text-center py-16">No hay órdenes activas.</p>
        )}
      </div>
    </div>
  )
}
