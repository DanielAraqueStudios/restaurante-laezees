import type { RestaurantTable } from './types'

export const tables: RestaurantTable[] = [
  { id: 't1', number: 1, seats: 2, status: 'occupied', zone: 'Salón Principal' },
  { id: 't2', number: 2, seats: 4, status: 'occupied', zone: 'Salón Principal' },
  { id: 't3', number: 3, seats: 4, status: 'available', zone: 'Salón Principal' },
  { id: 't4', number: 4, seats: 6, status: 'reserved', zone: 'Salón Principal' },
  { id: 't5', number: 5, seats: 2, status: 'available', zone: 'Terraza' },
  { id: 't6', number: 6, seats: 4, status: 'occupied', zone: 'Terraza' },
  { id: 't7', number: 7, seats: 4, status: 'cleaning', zone: 'Terraza' },
  { id: 't8', number: 8, seats: 8, status: 'occupied', zone: 'Privado' },
  { id: 't9', number: 9, seats: 2, status: 'available', zone: 'Privado' },
]
