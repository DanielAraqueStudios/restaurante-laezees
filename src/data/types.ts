export type MenuCategory = 'Entradas' | 'Fuertes' | 'Parrilla' | 'Postres' | 'Bebidas'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: MenuCategory
  spicy?: boolean
  vegetarian?: boolean
  popular?: boolean
  image: string
}

export interface OrderItem {
  menuItemId: string
  name: string
  price: number
  quantity: number
  notes?: string
}

export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'served' | 'paid'

export interface Order {
  id: string
  tableId: string
  waiterId: string
  items: OrderItem[]
  status: OrderStatus
  createdAt: string
  updatedAt: string
  total: number
}

export type TableStatus = 'available' | 'occupied' | 'reserved' | 'cleaning'

export interface RestaurantTable {
  id: string
  number: number
  seats: number
  status: TableStatus
  zone: 'Salón Principal' | 'Terraza' | 'Privado'
}

export type LoyaltyTier = 'Bronce' | 'Plata' | 'Oro' | 'Platino'

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  points: number
  tier: LoyaltyTier
  visits: number
  totalSpent: number
  lastVisit: string
}

export interface Waiter {
  id: string
  name: string
  avatar: string
  shift: 'Mañana' | 'Tarde' | 'Noche'
  tablesAssigned: number
  ordersToday: number
  avgServiceTimeMin: number
  rating: number
  salesToday: number
}

export interface PerformanceStat {
  label: string
  value: string
  change: number
}
