import type { Customer } from './types'

export const customers: Customer[] = [
  { id: 'c1', name: 'María Fernanda López', email: 'mflopez@gmail.com', phone: '300 123 4567', points: 1250, tier: 'Oro', visits: 34, totalSpent: 2450000, lastVisit: '2026-07-01' },
  { id: 'c2', name: 'Carlos Andrés Muñoz', email: 'camunoz@gmail.com', phone: '311 456 7890', points: 320, tier: 'Bronce', visits: 6, totalSpent: 380000, lastVisit: '2026-06-20' },
  { id: 'c3', name: 'Laura Sofía Vélez', email: 'lvelez@gmail.com', phone: '320 789 1234', points: 2980, tier: 'Platino', visits: 58, totalSpent: 5120000, lastVisit: '2026-07-05' },
  { id: 'c4', name: 'Santiago Ortiz', email: 'sortiz@gmail.com', phone: '312 654 9870', points: 780, tier: 'Plata', visits: 15, totalSpent: 980000, lastVisit: '2026-06-28' },
  { id: 'c5', name: 'Isabella Ramírez', email: 'iramirez@gmail.com', phone: '301 321 6540', points: 150, tier: 'Bronce', visits: 3, totalSpent: 190000, lastVisit: '2026-06-15' },
]

export const loyaltyTiers = [
  { tier: 'Bronce', minPoints: 0, perk: '5% de descuento en postres' },
  { tier: 'Plata', minPoints: 500, perk: '10% de descuento + bebida de cortesía' },
  { tier: 'Oro', minPoints: 1500, perk: '15% de descuento + reserva prioritaria' },
  { tier: 'Platino', minPoints: 3000, perk: '20% de descuento + mesa privada y chef especial' },
] as const
