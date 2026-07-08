import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/admin/cocina')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-lazeez-dark px-6">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
        <h1 className="font-display text-2xl font-bold text-center mb-1 text-lazeez-maroon">Lazeez</h1>
        <p className="text-center text-base text-lazeez-dark/60 mb-6">Acceso de personal</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Usuario</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-lazeez-dark/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lazeez-gold"
              placeholder="usuario"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-lazeez-dark/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lazeez-gold"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lazeez-maroon text-white font-semibold py-2.5 rounded-full hover:brightness-110 transition"
          >
            Ingresar
          </button>
        </div>
        <p className="text-xs text-center text-lazeez-dark/40 mt-4">Demo: cualquier usuario/contraseña funciona</p>
      </form>
    </div>
  )
}
