import { Link } from 'react-router-dom'
import { menuItems } from '../data/menu'

export default function Home() {
  const popular = menuItems.filter((m) => m.popular)

  return (
    <div>
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(27,20,16,0.65), rgba(27,20,16,0.75)), url('https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1600&q=80')",
        }}
      >
        <div className="max-w-2xl px-6">
          <p className="uppercase tracking-[0.3em] text-lazeez-gold text-sm mb-4">Medellín, Colombia</p>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-4">Lazeez</h1>
          <p className="text-xl text-lazeez-cream/90 mb-8">
            Sabores auténticos de Medio Oriente. Ven a vivir la experiencia o pide para llevar directamente
            desde nuestra mesa digital.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/ordenar"
              className="bg-lazeez-gold text-lazeez-dark font-semibold px-6 py-3 rounded-full hover:brightness-110 transition"
            >
              Ordenar ahora
            </Link>
            <Link
              to="/menu"
              className="border border-lazeez-cream/60 px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              Ver el menú
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-2">Platos más pedidos</h2>
        <p className="text-center text-lg text-lazeez-dark/60 mb-10">Los favoritos de nuestros comensales</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popular.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-lazeez-dark/60 mt-1 line-clamp-2">{item.description}</p>
                <p className="text-lazeez-maroon font-bold mt-2">${item.price.toLocaleString('es-CO')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-lazeez-olive/10 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-3">🍽️</div>
            <h3 className="font-semibold text-lg mb-1">Ordena desde tu mesa</h3>
            <p className="text-sm text-lazeez-dark/60">Escanea, elige y ordena sin esperar al mesero.</p>
          </div>
          <div>
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="font-semibold text-lg mb-1">Programa de fidelización</h3>
            <p className="text-sm text-lazeez-dark/60">Acumula puntos y sube de nivel en cada visita.</p>
          </div>
          <div>
            <div className="text-4xl mb-3">👨‍🍳</div>
            <h3 className="font-semibold text-lg mb-1">Cocina en tiempo real</h3>
            <p className="text-sm text-lazeez-dark/60">Tu orden llega directo a cocina apenas la envías.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
