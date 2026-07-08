import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useOrders } from '../context/OrdersContext'
import { tables } from '../data/tables'

export default function OrderPage() {
  const { items, updateQuantity, removeItem, total, clearCart, tableNumber, setTableNumber } = useCart()
  const { placeOrder } = useOrders()
  const [confirmedId, setConfirmedId] = useState<string | null>(null)

  const handlePlaceOrder = () => {
    if (!tableNumber || items.length === 0) return
    const table = tables.find((t) => String(t.number) === tableNumber)
    const order = placeOrder(table?.id ?? tableNumber, items)
    setConfirmedId(order.id)
    clearCart()
  }

  if (confirmedId) {
    return (
      <div className="max-w-xl mx-auto px-6 py-24 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl font-bold mb-2">¡Pedido enviado a cocina!</h1>
        <p className="text-lazeez-dark/60 mb-6">
          Tu orden <span className="font-semibold">#{confirmedId.slice(-5)}</span> está en preparación. Un
          mesero la llevará a tu mesa en breve.
        </p>
        <Link to="/menu" className="text-lazeez-maroon font-semibold hover:underline">
          Seguir explorando el menú
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Tu Orden</h1>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Número de mesa</label>
        <input
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          placeholder="Ej: 4"
          className="w-40 border border-lazeez-dark/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lazeez-gold"
        />
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 text-lazeez-dark/50">
          <p className="mb-4">Tu carrito está vacío.</p>
          <Link to="/menu" className="text-lazeez-maroon font-semibold hover:underline">
            Ir al menú
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.menuItemId} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-lazeez-dark/60">${item.price.toLocaleString('es-CO')} c/u</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.menuItemId, item.quantity - 1)}
                  className="w-8 h-8 rounded-full border border-lazeez-dark/20 hover:bg-lazeez-cream"
                >
                  −
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.menuItemId, item.quantity + 1)}
                  className="w-8 h-8 rounded-full border border-lazeez-dark/20 hover:bg-lazeez-cream"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.menuItemId)}
                  className="text-lazeez-maroon text-sm ml-2 hover:underline"
                >
                  Quitar
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between pt-4 border-t border-lazeez-dark/10">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-bold text-lazeez-maroon">${total.toLocaleString('es-CO')}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={!tableNumber}
            className="w-full bg-lazeez-maroon text-white font-semibold py-3 rounded-full hover:brightness-110 transition disabled:opacity-40"
          >
            Enviar pedido a cocina
          </button>
        </div>
      )}
    </div>
  )
}
