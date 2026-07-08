import type { Order } from './types'

export const initialOrders: Order[] = [
  {
    id: 'o1',
    tableId: 't1',
    waiterId: 'w1',
    status: 'preparing',
    createdAt: '2026-07-07T18:10:00',
    updatedAt: '2026-07-07T18:12:00',
    total: 82000,
    items: [
      { menuItemId: 'm4', name: 'Shawarma de Pollo', price: 38000, quantity: 1 },
      { menuItemId: 'm1', name: 'Hummus Lazeez', price: 22000, quantity: 1 },
      { menuItemId: 'm10', name: 'Té de Menta', price: 8000, quantity: 2 },
      { menuItemId: 'm11', name: 'Limonada con Menta', price: 6000, quantity: 1 },
    ],
  },
  {
    id: 'o2',
    tableId: 't2',
    waiterId: 'w2',
    status: 'ready',
    createdAt: '2026-07-07T18:00:00',
    updatedAt: '2026-07-07T18:20:00',
    total: 116000,
    items: [
      { menuItemId: 'm6', name: 'Mixed Grill Lazeez', price: 58000, quantity: 2 },
    ],
  },
  {
    id: 'o3',
    tableId: 't6',
    waiterId: 'w1',
    status: 'pending',
    createdAt: '2026-07-07T18:25:00',
    updatedAt: '2026-07-07T18:25:00',
    total: 64000,
    items: [
      { menuItemId: 'm5', name: 'Kafta a la Parrilla', price: 42000, quantity: 1, notes: 'Sin picante' },
      { menuItemId: 'm3', name: 'Fatush', price: 24000, quantity: 1 },
    ],
  },
  {
    id: 'o4',
    tableId: 't8',
    waiterId: 'w4',
    status: 'served',
    createdAt: '2026-07-07T17:40:00',
    updatedAt: '2026-07-07T18:05:00',
    total: 178000,
    items: [
      { menuItemId: 'm6', name: 'Mixed Grill Lazeez', price: 58000, quantity: 2 },
      { menuItemId: 'm9', name: 'Kanafeh', price: 18000, quantity: 2 },
      { menuItemId: 'm12', name: 'Jugo Natural', price: 10000, quantity: 2 },
    ],
  },
]
