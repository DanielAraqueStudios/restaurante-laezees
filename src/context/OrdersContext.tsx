import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Order, OrderItem, OrderStatus } from '../data/types'
import { initialOrders } from '../data/orders'

interface OrdersContextValue {
  orders: Order[]
  placeOrder: (tableId: string, items: OrderItem[]) => Order
  updateStatus: (orderId: string, status: OrderStatus) => void
}

const OrdersContext = createContext<OrdersContextValue | undefined>(undefined)
const STORAGE_KEY = 'lazeez_orders'

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : initialOrders
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))
  }, [orders])

  const placeOrder = (tableId: string, items: OrderItem[]) => {
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
    const now = new Date().toISOString()
    const newOrder: Order = {
      id: `o${Date.now()}`,
      tableId,
      waiterId: 'w1',
      items,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
      total,
    }
    setOrders((prev) => [newOrder, ...prev])
    return newOrder
  }

  const updateStatus = (orderId: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status, updatedAt: new Date().toISOString() } : o)),
    )
  }

  return (
    <OrdersContext.Provider value={{ orders, placeOrder, updateStatus }}>{children}</OrdersContext.Provider>
  )
}

export function useOrders() {
  const ctx = useContext(OrdersContext)
  if (!ctx) throw new Error('useOrders must be used within OrdersProvider')
  return ctx
}
