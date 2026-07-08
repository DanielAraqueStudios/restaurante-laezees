import type { Waiter } from './types'

export const waiters: Waiter[] = [
  { id: 'w1', name: 'Camila Restrepo', avatar: '👩🏻', shift: 'Tarde', tablesAssigned: 4, ordersToday: 18, avgServiceTimeMin: 12, rating: 4.8, salesToday: 780000 },
  { id: 'w2', name: 'Andrés Zapata', avatar: '👨🏽', shift: 'Noche', tablesAssigned: 5, ordersToday: 22, avgServiceTimeMin: 14, rating: 4.6, salesToday: 950000 },
  { id: 'w3', name: 'Valentina Gómez', avatar: '👩🏼', shift: 'Mañana', tablesAssigned: 3, ordersToday: 11, avgServiceTimeMin: 10, rating: 4.9, salesToday: 430000 },
  { id: 'w4', name: 'Juan Pablo Ríos', avatar: '👨🏻', shift: 'Tarde', tablesAssigned: 4, ordersToday: 15, avgServiceTimeMin: 13, rating: 4.5, salesToday: 610000 },
]
