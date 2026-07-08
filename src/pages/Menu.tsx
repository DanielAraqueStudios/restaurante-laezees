import { useState } from 'react'
import { menuItems, categories } from '../data/menu'
import { useCart } from '../context/CartContext'

export default function Menu() {
  const [active, setActive] = useState<typeof categories[number] | 'Todos'>('Todos')
  const { addItem } = useCart()

  const filtered = active === 'Todos' ? menuItems : menuItems.filter((m) => m.category === active)

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Nuestro Menú</h1>
      <p className="text-center text-lg text-lazeez-dark/60 mb-8">Cocina árabe tradicional con ingredientes frescos</p>

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {(['Todos', ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              active === c
                ? 'bg-lazeez-maroon text-white border-lazeez-maroon'
                : 'border-lazeez-dark/20 hover:border-lazeez-maroon'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
            <img src={item.image} alt={item.name} className="h-44 w-full object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold">{item.name}</h3>
                {item.spicy && <span title="Picante">🌶️</span>}
              </div>
              <p className="text-sm text-lazeez-dark/60 mt-1 flex-1">{item.description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-lazeez-maroon font-bold">${item.price.toLocaleString('es-CO')}</span>
                <button
                  onClick={() => addItem(item)}
                  className="bg-lazeez-gold text-lazeez-dark text-sm font-semibold px-3 py-1.5 rounded-full hover:brightness-110 transition"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
