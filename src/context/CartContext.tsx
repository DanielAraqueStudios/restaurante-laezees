import React, { createContext, useContext, useMemo, useState } from 'react'
import type { MenuItem, OrderItem } from '../data/types'

interface CartContextValue {
  items: OrderItem[]
  addItem: (item: MenuItem, notes?: string) => void
  removeItem: (menuItemId: string) => void
  updateQuantity: (menuItemId: string, quantity: number) => void
  clearCart: () => void
  total: number
  count: number
  tableNumber: string
  setTableNumber: (v: string) => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([])
  const [tableNumber, setTableNumber] = useState('')

  const addItem = (item: MenuItem, notes?: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.menuItemId === item.id && i.notes === notes)
      if (existing) {
        return prev.map((i) =>
          i.menuItemId === item.id && i.notes === notes ? { ...i, quantity: i.quantity + 1 } : i,
        )
      }
      return [...prev, { menuItemId: item.id, name: item.name, price: item.price, quantity: 1, notes }]
    })
  }

  const removeItem = (menuItemId: string) => {
    setItems((prev) => prev.filter((i) => i.menuItemId !== menuItemId))
  }

  const updateQuantity = (menuItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(menuItemId)
      return
    }
    setItems((prev) => prev.map((i) => (i.menuItemId === menuItemId ? { ...i, quantity } : i)))
  }

  const clearCart = () => setItems([])

  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items])
  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, total, count, tableNumber, setTableNumber }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
