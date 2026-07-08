import type { PerformanceStat } from './types'

export const dailyStats: PerformanceStat[] = [
  { label: 'Ventas de hoy', value: '$3.240.000', change: 8.4 },
  { label: 'Órdenes de hoy', value: '66', change: 4.1 },
  { label: 'Ticket promedio', value: '$49.100', change: -1.2 },
  { label: 'Tiempo promedio de servicio', value: '12.4 min', change: -6.5 },
]

export const salesByDay = [
  { day: 'Lun', sales: 2100000 },
  { day: 'Mar', sales: 1950000 },
  { day: 'Mié', sales: 2400000 },
  { day: 'Jue', sales: 2650000 },
  { day: 'Vie', sales: 3800000 },
  { day: 'Sáb', sales: 4200000 },
  { day: 'Dom', sales: 3240000 },
]

export const topDishes = [
  { name: 'Mixed Grill Lazeez', orders: 142 },
  { name: 'Shawarma de Pollo', orders: 128 },
  { name: 'Kafta a la Parrilla', orders: 110 },
  { name: 'Hummus Lazeez', orders: 96 },
  { name: 'Baklava', orders: 84 },
]
