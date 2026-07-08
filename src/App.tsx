import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { OrdersProvider } from './context/OrdersContext'
import PublicLayout from './layouts/PublicLayout'
import AdminLayout from './layouts/AdminLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import OrderPage from './pages/OrderPage'
import AdminLogin from './pages/AdminLogin'
import KitchenDisplay from './pages/admin/KitchenDisplay'
import TablesOverview from './pages/admin/TablesOverview'
import Customers from './pages/admin/Customers'
import Loyalty from './pages/admin/Loyalty'
import Waiters from './pages/admin/Waiters'
import Performance from './pages/admin/Performance'

export default function App() {
  return (
    <CartProvider>
      <OrdersProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/ordenar" element={<OrderPage />} />
            </Route>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route element={<AdminLayout />}>
              <Route path="/admin/cocina" element={<KitchenDisplay />} />
              <Route path="/admin/mesas" element={<TablesOverview />} />
              <Route path="/admin/clientes" element={<Customers />} />
              <Route path="/admin/fidelizacion" element={<Loyalty />} />
              <Route path="/admin/meseros" element={<Waiters />} />
              <Route path="/admin/desempeno" element={<Performance />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </OrdersProvider>
    </CartProvider>
  )
}
